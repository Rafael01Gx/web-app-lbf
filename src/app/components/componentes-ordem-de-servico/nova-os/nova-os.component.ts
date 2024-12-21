import { AfterViewInit, Component, inject, OnInit, signal, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatCard } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../core/services/user/user.service';
import { IUserData } from '../../../shared/interfaces/IUser.interface';
import {
  MatTable,
  MatTableDataSource,
  MatTableModule,
} from '@angular/material/table';
import { IAmostra, IAmostrasCollection } from '../../../shared/interfaces/IAmostra.interface';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatIcon } from '@angular/material/icon';
import { OrdemDeServicoService } from '../../../core/services/ordem-de-servico/ordem-de-servico.service';
import { TipoDeAnaliseService } from '../../../core/services/tipo-de-analise/tipo-de-analise.service';
import { ITipoAnalise, ITipoDeAnaliseResponse } from '../../../shared/interfaces/ITipoDeAnalise.interface';
import { NgIf } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { IOrdemDeServico, IOrdemDeServicoByOsResponse } from '../../../shared/interfaces/IOrdemDeservico.interface';
import { PdfGeneratorServiceService } from '../../../core/services/helpers/pdf-generator-service.service';
import { MatDialog } from '@angular/material/dialog';
import { GerarEtiquetaComponent } from '../../modal/gerar-etiqueta/gerar-etiqueta.component';

@Component({
    selector: 'app-nova-os',
    providers: [provideNativeDateAdapter()],
    imports: [
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatCard,
        MatTable,
        MatTableModule,
        MatButtonModule,
        MatPaginatorModule,
        MatSelectModule,
        MatIcon,
        MatDatepickerModule, NgIf, MatCheckboxModule
    ],
    templateUrl: './nova-os.component.html',
    styleUrl: './nova-os.component.scss'
})
export class NovaOsComponent implements OnInit,AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  #matDialog= inject(MatDialog)
  #userService = inject(UserService);
  #ordemDeServicoService = inject(OrdemDeServicoService);
  #toastr = inject(ToastrService);
  #user = signal<IUserData>({});
  #tipoDeAnaliseService= inject(TipoDeAnaliseService)
  #pdfService = inject(PdfGeneratorServiceService)

  ensaios = new FormControl('');

  listaDeEnsaios : ITipoAnalise['tipo_de_analise'] = []

  amostras: IAmostrasCollection = {
  };
  public amostraForm = new FormGroup({
    nome_amostra: new FormControl('', Validators.required),
    data_amostra: new FormControl('', Validators.required),
    ensaios_solicitados: new FormControl([], Validators.required)
  });

  public obsForm = new FormGroup({
    observacao: new FormControl('')

});

public profileForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
  });

  ngOnInit(): void {
    this.#userService.httpCheckUser().subscribe((response) => {
      this.#user.set(response);

      this.profileForm.patchValue({
        id: response._id,
        name: response.name,
        email: response.email,
        phone: response.phone,
      });
    });

    this.#tipoDeAnaliseService.httpListarTipoDeAnalise().subscribe((response: ITipoDeAnaliseResponse)=>{
      if (response && response.tipo_de_analise) {
        this.listaDeEnsaios = response.tipo_de_analise
      } else {
        this.#toastr.error(response.message);
      }
    });
  

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  
  displayedColumns: string[] = [ 'num','nome_amostra', 'data_amostra', 'ensaios_solicitados'];

  dataSource = new MatTableDataSource<IAmostra>(
    Object.entries(this.amostras).map(([num, amostra]) => ({ num: num, ...amostra }))
  );


  addAmostra() {
    const dataAmostra = new Date(this.amostraForm.value.data_amostra!);
    const formattedDate = dataAmostra.toLocaleDateString('pt-BR');  
    const newAmostra: IAmostra = {
      nome_amostra: this.amostraForm.value.nome_amostra!,
      data_amostra: formattedDate,
      ensaios_solicitados: this.amostraForm.value.ensaios_solicitados!.join(', '), 
    };

    const newId = Object.keys(this.amostras).length + 1;

    this.amostras[newId] = newAmostra;

    this.dataSource.data = Object.entries(this.amostras).map(([num, amostra]) => ({ num: num, ...amostra }));

    this.amostraForm.reset();
  }

  
  
  
  public  enviarOs() {
    if(Object.keys(this.amostras).length > 0){
      this.#ordemDeServicoService.httpCriarOrdemDeServico(this.amostras,this.obsForm.value.observacao!).subscribe({
        next: (res:IOrdemDeServicoByOsResponse) => {
          this.#toastr.success("Ordem de serviço criada com sucesso!");
        this.amostraForm.reset();
        this.amostras= {}
        this.dataSource.data= []
        this.dialogGerarEtiquetas(res.ordemDeServico)
      
      },
      error: (err) => this.#toastr.error(err.error.message)
    });
  }else{
    this.#toastr.info("Ordem de serviço não contém 'amostras'!")
   }
  }


  dialogGerarEtiquetas(ordemDeServico:IOrdemDeServico){
   const gerarEtiquetas= this.#matDialog.open(GerarEtiquetaComponent,{
    })
    gerarEtiquetas.afterClosed().subscribe((res)=>{
      if(res){
        this.#pdfService.gerarPDFEtiqueta(ordemDeServico)
      }
    })
  }
  
}
