import { Component, inject, Input, OnInit, signal } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import {
  IAmostra,
  IAnalista,
  IResultado,
} from '../../../shared/interfaces/IAmostra.interface';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, JsonPipe, NgClass } from '@angular/common';
import { HelpersService } from '../../../core/services/helpers/helpers.service';
import { ConfiguracaoDeAnaliseService } from '../../../core/services/configuracao-de-analise/configuracao-de-analise.service';
import {
  IConfigAnalise,
  IConfiguracaoDeAnaliseResponse,
  IParametrosDeAnaliseCollection,
} from '../../../shared/interfaces/IConfiguracaoDeAnalise.interface';
import { ToastrService } from 'ngx-toastr';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { AmostraService } from '../../../core/services/amostra/amostra.service';
import { EStatus } from '../../../shared/Enum/status.enum';
import { UserService } from '../../../core/services/user/user.service';

@Component({
    selector: 'app-lancamento-de-resultados',
    imports: [
        MatCardModule,
        MatIcon,
        MatInputModule,
        ReactiveFormsModule,
        NgClass,
        MatSelectModule,
        MatButtonModule,
        CommonModule,
        MatTableModule,
        FormsModule,
    ],
    providers: [
        {
            provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: { subscriptSizing: 'dynamic' },
        },
    ],
    templateUrl: './lancamento-de-resultados.component.html',
    styleUrl: './lancamento-de-resultados.component.scss'
})
export class LancamentoDeResultadosComponent implements OnInit {
  @Input() title: string = '';
  dialogRef = inject(MatDialogRef<LancamentoDeResultadosComponent>);
  #userService = inject(UserService);
  #configuracaoDeAnaliseService = inject(ConfiguracaoDeAnaliseService);
  #toastr = inject(ToastrService);
  #amostraService = inject(AmostraService);
  data = inject(MAT_DIALOG_DATA);
  helpersService = inject(HelpersService);
  amostra: IAmostra = this.data[0];
  ensaio: string = this.data[1].trim();
  listConfigAnalises: IConfigAnalise[] = [];
  analista!: IAnalista;
  configuracaoSelecionada = signal<IParametrosDeAnaliseCollection>({});
  #prazo = inject(HelpersService).calcularPrazoEmDias;
  prazo_atual = this.#prazo(this.amostra.prazo_inicio_fim!.split('-')[1]);

  constructor() {}

  ngOnInit(): void {
    this.#userService.httpCheckUser().subscribe((response) => {
      if (response)
        this.analista = {
          _id: response._id!,
          name: response.name!,
          area: response.area!,
          funcao: response.funcao,
        };
    });

    this.#configuracaoDeAnaliseService
      .httpListarConfiguracaoDeAnalise()
      .subscribe((response: IConfiguracaoDeAnaliseResponse) => {
        if (response && response.configuracaoDeAnalise) {
          this.listConfigAnalises = response.configuracaoDeAnalise.filter(
            (configuracaoDeAnalise) =>
              configuracaoDeAnalise.tipo_de_analise.tipo
                .trim()
                .toLowerCase() === this.ensaio.trim().toLowerCase()
          );
        } else {
          this.#toastr.error(response.message);
        }
      });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  getParamsValues(select: IParametrosDeAnaliseCollection) {
    return Object.values(select);
  }

  selecionarConfiguracao(id: string): void {
    const configuracao = this.listConfigAnalises.find(
      (config) => config._id === id
    );
    if (configuracao) {
      let teste = Object.values(configuracao.parametros_de_analise);
      this.configuracaoSelecionada.set(teste);
    } else {
      this.#toastr.error('Configuração não encontrada');
    }
  }

  limitarCasasDecimais(event: any, casasDecimais: number): void {
    this.helpersService.limitarCasasDecimais(event.target, casasDecimais);
  }

  saveData(): void {
    const valoresFaltantes = Object.values(this.configuracaoSelecionada()).some(
      (config) =>
        config.valor_resultado === undefined || config.valor_resultado === ''
    );
    if (valoresFaltantes) {
      this.#toastr.error('Por favor, preencha todos os campos!.');
      return;
    }

    const resultadoObj: IResultado = {};
    Object.values(this.configuracaoSelecionada()).forEach((config, index) => {
      if (
        config.valor_resultado !== undefined &&
        config.valor_resultado !== ''
      ) {
        resultadoObj[(index + 1).toString()] = {
          item: config.item,
          valor_resultado: config.valor_resultado, // Captura o valor preenchido pelo usuário
          unidade_resultado: config.unidade_resultado,
          casas_decimais: config.casas_decimais,
        };
      }
    });
    if (!this.amostra.resultados)
      this.amostra.resultados = { [this.ensaio]: resultadoObj };
    if (!this.amostra.resultados![this.ensaio])
      this.amostra.resultados[this.ensaio] = {};

    this.amostra.resultados![this.ensaio] = resultadoObj;
    this.amostra.progresso = this.#amostraService.calcularProgresso(
      this.amostra
    );
    this.amostra.progresso == 100
      ? (this.amostra.status = EStatus.Finalizada)
      : (this.amostra.status = EStatus.EmExecucao);
    if (!this.amostra.analistas)this.amostra.analistas = [];
    
    const analistaExistente = this.amostra.analistas.some(
      (analista) => analista._id === this.analista._id
    );
    if (!analistaExistente) this.amostra.analistas.push(this.analista);
    this.#amostraService
      .httpEditarAmostra(this.data[0]._id, this.amostra)
      .subscribe({
        next: () => {
          this.#toastr.success('Análise adicionada com sucesso!');
          this.dialogRef.close(this.amostra);
        },
        error: (error) => {
          this.#toastr.error(
            'Erro ao lançar resultados: ',
            error.error.message
          );
        },
      });
  }
}
