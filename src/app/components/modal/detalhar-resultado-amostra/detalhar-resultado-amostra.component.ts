import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, inject, OnInit } from '@angular/core';
import { IResultadoValues } from '../../../shared/interfaces/IAmostra.interface';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HelpersService } from '../../../core/services/helpers/helpers.service';

@Component({
    selector: 'app-detalhar-resultado-amostra',
    imports: [],
    templateUrl: './detalhar-resultado-amostra.component.html',
    styleUrl: './detalhar-resultado-amostra.component.scss'
})
export class DetalharResultadoAmostraComponent implements OnInit {
  data= inject(MAT_DIALOG_DATA)
  resultado: IResultadoValues = this.data[1]
  key : string = this.data[0]
  
  #helpersService = inject(HelpersService)
  
  relatorio!: SafeHtml;
  
  constructor(private sanitizer: DomSanitizer) {}
  
  ngOnInit() {
console.log(this.resultado)
   const html = this.generateHTML(this.resultado);
    this.relatorio = this.sanitizer.bypassSecurityTrustHtml(html);
  }
  
  
  public generateHTML(resultado: IResultadoValues,): string{
  let html = '';
    html += this.createReportTemplate(resultado);
  
  
  return html;
  }
  
  
    private createReportTemplate(
      resultado:IResultadoValues
    ): string {
      return `
        <div class="book">
          <div class="page">
            <div class="subpage">
              <div class="header">
                <div>
                  <img src="img/logo_relatorio.png" width="150px" />
                </div>
                <div>
                  <h1>Resultado parcial</h1>
                </div>
                <div class="header-right">
                  <img height="24px" src="img/arcelor.png" />
                </div>
              </div>
              <div class="body">

  
                ${this.renderResultados(resultado)}
  
              </div>
            </div>
          </div>
        </div>
      `;
    }
  
    private renderResultados(resultados: IResultadoValues): string {
      let html = '';

        html += `
          <fieldset class="ensaios">
            <div class="title">
              <h2>${this.key}</h2>
            </div>
            ${this.renderResultadosTable(resultados)}
          </fieldset>
        `;
      ;
  
      html+= ` <style>
            * { box-sizing: border-box; }    
  .header,
  .body {
    max-width: 100%;
    overflow: hidden;
  }
  
  span,
  p {
    font-size: 12px;
    margin: 0;
  }
  
  body {
    margin: 0;
    padding: 0;
    background-color: #fafafa;
    font: 12pt "Tahoma";
  }
  
  * {
    box-sizing: border-box;
  }
  
  .page {
    width: 21cm;
    margin: auto;
    border: 1px #d3d3d3 solid;
    border-radius: 5px;
    background-color: white;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }
  
  .subpage {
    width: 100%;
    max-width: 100%;
    height: 100%;
    border: 2px #005cbb solid;
    outline: 1cm white solid;
    overflow: hidden;
  
    .header {
      height: 45px;
      padding: 15px 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #538dd5;
  .header-right{
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
      div {
        flex-grow: 1;
  
        h1 {
          margin: 0;
          font-size: 24px;
          font-weight: 450;
          text-align: start;
          text-transform: uppercase;
          color: white;
        }
      }
    }
  
    .body {
      margin-top: 20px;
      padding: 10px;
  
      fieldset {
        border: 1px #005cbb solid;
      }
  
      .solicitante,
      .analise {
        margin-bottom: 10px;
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 10px;
        padding: 10px;
        border: 1px #005cbb solid;
  
        & > div {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 10px;
          align-items: center;
          margin-left: 30px;
  
          & > div,
          & > span {
            display: flex;
            align-items: center;
            gap: 10px;
          }
  
          fieldset {
            min-width: 130px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2px;
            margin: 0;
            border:none;
            border-bottom: 1px solid #ccc;
            border-radius: 2px;
          }
        }
      }
  
      .tabela-resultado {
        width: 95%;
        margin: 20px 10px;
        display: flex;
        gap: 1px;
  
        .borda {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
  
          div {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border: 1px solid #a39fa9;
            text-align: center;
  
            span {
              width: 100%;
            }
          }
        }
      }
  
      .ensaios {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
  
        .title {
          width: 100%;
          height: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #538dd5;
          color: white;
          text-transform: uppercase;
  
          h2 {
            margin: 0;
            text-align: center;
            font-size: 0.7rem;
          }
        }
        .result-item{
          background: #a39fa9;
          color:white;
        }
      }
    }
  }
  .granulometria{
    display: flex;
    flex-direction: column;
    
  }
    .container-assinatura{
    padding: 5px;
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items:center ;
  justify-content: space-around;
  
    .analista-aprovador{
      font-size: small;
      display: flex;
      flex-direction: column;
      border: 1px solid grey;
      border-radius: 4px;
      text-align: center;
  div{
    margin: 0 10px;}
  .analista-funcao{
    background-color: rgb(221, 221, 221);
  }
    }
  }
  
  @page {
    size: A4;
    margin: 0;
  }
  
  @media print {
    *{
      overflow: hidden;
    }
    html, body {
      height: 100%;
      overflow: visible;
    }
  
    .book {
      display: block;
      margin: 0;
    }
  
    .page {
      margin: 0;
      padding: 0;
      border: none;
      border-radius: 0;
      width: 100%;
      height: auto;
      page-break-before: always;
      page-break-after: always;
    }
  
    .subpage {
      display: block;
      min-height: 100%;
      box-sizing: border-box;
      page-break-inside: avoid;
    }
  
    * {
      -webkit-print-color-adjust: exact !important;
      color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
  
    .header {
      background: #538DD5 !important;
      color: white !important;
      padding: 10px 0;
    }
  
    .body {
      background: white !important;
      color: black !important;
    }
  
    .tabela-resultado {
      background: white !important;
      color: #333 !important;
      border: 1px solid #ccc;
      page-break-inside: avoid;
    }
  
    .result-item {
      background: #a39fa9;
      color: white;
    }
  
    .ensaios {
      page-break-inside: avoid;
    }
  }
          </style>`
      return html;
    }
  
  
    private renderResultadosTable(value: IResultadoValues): string {
      const isSpecialCase = ['RDI', 'GRANULOMETRIA'].includes(
        this.key.trim().toUpperCase()
      );
      const entries = Object.entries(value).map((entry) => entry[1]);
  
      const tableStyle = isSpecialCase
        ? 'style="display: flex;flex-direction: column; flex-wrap: wrap;"'
        : '';
  
      const rowStyle = isSpecialCase
        ? 'style="display: flex;flex-direction: row; flex-wrap: nowrap;"'
        : '';
  
      let html = `<div class="tabela-resultado" ${tableStyle}>`;
      entries.forEach((resultado) => {
        html += `
          <div class="borda" ${rowStyle}>
            <div class="result-item">
              <span>${resultado.item}</span>
            </div>
            ${
              !isSpecialCase
                ? `<div class="result-unidade-resultado"><span>${resultado.unidade_resultado}</span></div>`
                : ''
            }
            <div class="result-valor-resultado">
              <span>${this.#helpersService.transformarResultado(resultado.valor_resultado,resultado.casas_decimais)}</span>
            </div>
            ${
              isSpecialCase
                ? `<div class="result-unidade-resultado"><span>${resultado.unidade_resultado}</span></div>`
                : ''
            }
          </div>
        `;
      });
      html += `</div>`;
      return html;
    }
  
  }