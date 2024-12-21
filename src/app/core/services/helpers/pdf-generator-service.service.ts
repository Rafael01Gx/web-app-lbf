import { inject, Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import {
  IAmostrasCollection,
  IAmostrasResponse,
  IAnalista,
  IResultado,
  IResultadoValues,
} from '../../../shared/interfaces/IAmostra.interface';
import { IOrdemDeServico, IOrdemDeServicoByOsResponse } from '../../../shared/interfaces/IOrdemDeservico.interface';
import { OrdemDeServicoService } from '../ordem-de-servico/ordem-de-servico.service';
import { AmostraService } from '../amostra/amostra.service';
import { HelpersService } from './helpers.service';

@Injectable({
  providedIn: 'root',
})
export class PdfGeneratorServiceService {
#ordermDeServicoService = inject(OrdemDeServicoService);
#amostraService = inject(AmostraService)
#helpersService = inject(HelpersService)


async generatePdfForOsNumer(osNumber: string) {
  try {
    const amostra_response: IAmostrasResponse | undefined = await this.#amostraService.httpListarAmostraByOrdemDeServico(osNumber).toPromise();
    const ordemDeServico_response: IOrdemDeServicoByOsResponse | undefined = await this.#ordermDeServicoService.httpOrdemDeServicoByOsNumber(osNumber).toPromise();
    const amostra = amostra_response!.amostras;
    const ordemDeServico = ordemDeServico_response!.ordemDeServico;
    if(amostra && ordemDeServico) this.generatePdfFromElement(ordemDeServico, amostra);
    console.log(ordemDeServico);   
  } catch (error) {
    console.error('Erro ao gerar o PDF:', error);
  }
}
async generatePdfFromElement(
  ordemDeServico: IOrdemDeServico,
  amostras: IAmostrasCollection[]
): Promise<void> {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  // Tamanho da página A4 em mm
  const PAGE_HEIGHT = 297;
  const PAGE_WIDTH = 210;
  
  // Espaço de margem para quebra de página (1cm = 10mm)
  const PAGE_BREAK_MARGIN = 0;

  doc.setFont('Helvetica');

  for (const [index, amostra] of amostras.entries()) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = this.createReportTemplate(ordemDeServico, amostra);
    
    tempDiv.style.width = '210mm';
    tempDiv.style.maxWidth = '210mm';
    tempDiv.style.height = 'auto';
    tempDiv.style.overflow = 'visible';
    tempDiv.style.position = 'relative';
    
    const styleElement = document.createElement('style');
    styleElement.textContent = this.getCssStyles();
    tempDiv.appendChild(styleElement);

    document.body.appendChild(tempDiv);

    try {
      const canvas = await html2canvas(tempDiv, {
        scale: 2,
        useCORS: true,
        logging: false,
        allowTaint: true,
        backgroundColor: '#ffffff',
        height: tempDiv.scrollHeight,
        width: tempDiv.scrollWidth,
        windowWidth: tempDiv.scrollWidth,
        windowHeight: tempDiv.scrollHeight
      });

      document.body.removeChild(tempDiv);

      const imgData = canvas.toDataURL('image/png');
      if (!imgData || imgData === 'data:,') {
        throw new Error('Imagem inválida gerada pelo canvas');
      }

      const imgProps = doc.getImageProperties(imgData);
      const imgWidth = PAGE_WIDTH;
      const imgHeight = (imgProps.height * imgWidth) / imgProps.width;

      // Lógica ajustada para considerar margem de quebra de página
      const pagesNeeded = Math.ceil((imgHeight + PAGE_BREAK_MARGIN) / PAGE_HEIGHT);
      
      for (let page = 0; page < pagesNeeded; page++) {
        if (page > 0) {
          doc.addPage();
        }
        
        // Ajusta a posição da imagem considerando a margem de quebra
        const yOffset = page === 0 
          ? 0 
          : -((page * PAGE_HEIGHT) - PAGE_BREAK_MARGIN);
        
        doc.addImage(
          imgData, 
          'PNG', 
          0, 
          yOffset, 
          imgWidth, 
          imgHeight, 
          '', 
          'FAST'
        );
      }

      // Adiciona página apenas se não for o último item
      if (index < amostras.length - 1) {
        doc.addPage();
      }
    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
      if (document.body.contains(tempDiv)) {
        document.body.removeChild(tempDiv);
      }
    }
  }

  doc.save(`Relatorio_${ordemDeServico.numeroOs}.pdf`);
}
  private createReportTemplate(
    ordemDeServico: IOrdemDeServico,
    amostra: IAmostrasCollection
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
                <h1>Laudo de Análise</h1>
              </div>
              <div class="header-right">
                <img height="24px" src="img/arcelor.png" />
              </div>
            </div>
            <div class="body">
              <fieldset class="solicitante">
                <div>
                  <div>
                    <span>Área Solicitante:</span>
                    <fieldset><p>GAPSI</p></fieldset>
                  </div>
                  <div>
                    <span>Data de Início:</span>
                    <fieldset>
                      <p>${
                        ordemDeServico.prazo_inicio_fim?.trim().split('-')[0] ||
                        'N/A'
                      }</p>
                    </fieldset>
                  </div>
                  <div>
                    <span>Data Final:</span>
                    <fieldset>
                      <p>${
                        ordemDeServico.prazo_inicio_fim?.trim().split('-')[1] ||
                        'N/A'
                      }</p>
                    </fieldset>
                  </div>
                </div>
                <div>
                  <div>
                    <span>Requerente:</span>
                    <fieldset>
                      <p>${ordemDeServico.solicitante?.name || 'N/A'}</p>
                    </fieldset>
                  </div>
                  <div>
                    <span>E-mail:</span>
                    <fieldset>
                      <p>${ordemDeServico.solicitante?.email || 'N/A'}</p>
                    </fieldset>
                  </div>
                  <div>
                    <span>Contato:</span>
                    <fieldset>
                      <p>${ordemDeServico.solicitante?.phone || 'N/A'}</p>
                    </fieldset>
                  </div>
                </div>
              </fieldset>
              
              <fieldset class="analise">
                <div>
                  <div>
                    <span>Identificação da amostra:</span>
                    <fieldset>
                      <p>${amostra['nome_amostra']}</p>
                    </fieldset>
                  </div>
                  <div>
                    <span>Tipo de amostras:</span>
                    <fieldset>
                      <p>${amostra['amostra_tipo']}</p>
                    </fieldset>
                  </div>
                </div>
                <div>
                  <div>
                    <span>Data da Amostra:</span>
                    <fieldset>
                      <p>${amostra['data_amostra']}</p>
                    </fieldset>
                  </div>
                  <div>
                    <span>Data da Recepção:</span>
                    <fieldset>
                      <p>${amostra['data_recepcao']}</p>
                    </fieldset>
                  </div>
                </div>
              </fieldset>

              <fieldset class="ensaios">
                <div class="title">
                  <h2>Ensaios Solicitados</h2>
                </div>
                <span style="text-transform: uppercase">
                  ${amostra['ensaios_solicitados']}
                </span>
              </fieldset>

              ${this.renderResultados(amostra['resultados'] as IResultado)}

                    <fieldset class="ensaios elaboracao">
        <div class="title">
          <h2>Elaboração & aprovação</h2>
        </div>
        ${this.renderAnalistas(amostra['analistas'] as IAnalista,ordemDeServico as IOrdemDeServico)}
      </fieldset>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  private renderResultados(resultados: IResultado): string {
    let html = '';
    Object.entries(resultados).forEach(([key, value]) => {
      html += `
        <fieldset class="ensaios">
          <div class="title">
            <h2>${key}</h2>
          </div>
          ${this.renderResultadosTable(key, value)}
        </fieldset>
      `;
    });
    return html;
  }

  private renderAnalistas(analistas: IAnalista, ordemDeServico: IOrdemDeServico): string {
    return Object.entries(analistas)
      .map(
        ([key, analista]) => `
        <div class="container-assinatura">
          ${analista ? `
          <div class="analista-aprovador">
            <div>${analista.name?.toUpperCase()}</div>
            <div><small class="analista-funcao">${analista.funcao}</small></div>
            <div><em><strong>${analista.area}</strong></em></div>
          </div>` : ''}
          <div class="analista-aprovador">
            <div>${ordemDeServico.revisor_da_os?.name?.toUpperCase()}</div>
            <div><small class="analista-funcao">${ordemDeServico.revisor_da_os?.funcao}</small></div>
            <div><em><strong>${ordemDeServico.revisor_da_os?.area}</strong></em></div>
          </div>
        </div>`
      )
      .join('');
  }

  private renderResultadosTable(key: string, value: IResultadoValues): string {
    const isSpecialCase = ['RDI', 'GRANULOMETRIA'].includes(
      key.trim().toUpperCase()
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

  private getCssStyles(): string {
    
    return `
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
margin: 0;
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
  body {
    margin: 0;
    padding: 0;
    background-color: white;
  }

  .page {
    width: 100%;
    margin: 0;
    padding: 0;
    border: none;
    border-radius: 0;
    box-shadow: none;
  }

  .subpage {
    margin: 0;
    border: none;
    outline: none;
    width: 100%;
    max-width: 100%;
  }

  .header {
    background-color: #538dd5 !important;
    color: white !important;
    height: auto;
    padding: 15px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header h1 {
    font-size: 24px;
    font-weight: 450;
    color: white !important;
    margin: 0;
  }

  .body {
    margin-top: 0;
    padding: 10px;
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
  }

  .tabela-resultado {
    width: 100%;
    margin: 20px 0;
    display: flex;
    gap: 1px;
    page-break-inside: avoid;
  }

  .ensaios {
    margin-top: 20px;
    page-break-inside: avoid;
  }

  .ensaios .title {
    background-color: #538dd5;
    color: white !important;
  }

  .result-item {
    background: #a39fa9 !important;
    color: white !important;
  }

  .container-assinatura {
    margin-top: 20px;
    page-break-inside: avoid;
  }

  * {
    -webkit-print-color-adjust: exact !important;
    color-adjust: exact !important;
    print-color-adjust: exact !important;
  }

  /* Ensure content fits on page */
  .header,
  .body,
  .solicitante,
  .analise,
  .tabela-resultado,
  .ensaios,
  .container-assinatura {
    page-break-inside: avoid;
  }
}
     `;
  }


  private etiqueta_de_amostras(ordemdeservico:IOrdemDeServico):string{
    let paginasHtml = '';
    for (let amostraId in ordemdeservico.amostras) {
      const amostra = ordemdeservico.amostras[amostraId];
      const solicitante = ordemdeservico.solicitante;
      const numeroOs = ordemdeservico.numeroOs;
      const observacao = ordemdeservico.observacao;
    
    
      const paginaHtml = `
     
        <div class="page">
          <div class="subpage">
            <div class="header">
              <div class="header-text">
                <h1>N.º OS ${numeroOs}</h1>
              </div>
              <div class="header-right">
                <img height="24px" src="img/arcelorWhite.png" alt="logo Arcelor" />
              </div>
            </div>
      
            <div class="body">
              <fieldset class="container">
                <div class="title">
                  <p>Amostra</p>
                </div>
                <div class="row">
                  <span>Identificação:</span>
                  <p>${amostra.nome_amostra}</p>
                </div>
                <div class="row">
                  <span>Data:</span>
                  <p>${amostra.data_amostra}</p>
                </div>
                <div class="row">
                  <span>Ensaios:</span>
                  <p>${amostra.ensaios_solicitados}</p>
                </div>
                <div class="row">
                  <span>Observações:</span>
                  <p>${observacao || "s/ obs."}</p>
                </div>
              </fieldset>
      
              <fieldset class="container">
                <div class="title">
                  <p>Informações do Solicitante</p>
                </div>
                <div class="solicitante-info">
                  <div class="info-item">
                    <span>Nome:</span>
                    <p>${solicitante?.name}</p>
                  </div>
                  <div class="info-item">
                    <span>Área:</span>
                    <p>${solicitante?.area}</p>
                  </div>
                  <div class="info-item">
                    <span>Email:</span>
                    <p>${solicitante?.email}</p>
                  </div>
                  <div class="info-item">
                    <span>Contato:</span>
                    <p>${solicitante?.phone}</p>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>    
      `;
      
      paginasHtml += paginaHtml;
    }
    const css= ` <style>
        body {
          margin: 0;
          padding: 0;
          background-color: #f7f9fc;
          font-family: 'Roboto', sans-serif;
          color: #2d3436;
          overflow: auto !important;
        }
        
        .page {
          width: 29.7cm;
          height: 21cm;
          margin: auto auto 20px;
          border: 1px solid #dfe6e9;
          border-radius: 12px;
          background-color: #ffffff;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
        }
        
        .subpage {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          padding: 25px;
          
        }
        
        .header {
        position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #1e3799;
          padding: 20px 25px;
          color: white;
          border-radius: 12px 12px 0 0;
        }
          .header-text{
        position: absolute;
         top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          }
        .header-right{
        margin-left:auto;}
        .header div img {
          height: 50px;
        }
        
        .header h1 {
          font-size: 24px;
          font-weight: 600;
          text-transform: uppercase;
        }
        
        .body {
          flex-grow: 1;
          padding: 10px;
        }
        
        .container {
          margin-bottom: 15px;
          border: 1px solid #1e3799;
          border-radius: 12px;
          padding: 10px;
        }
        
        .title {
          text-align: center;
          background-color: #4a69bd;
          color: white;
          padding: 2px;
          font-size: 16px;
          font-weight: 700;
          border-radius: 10px 10px 0 0;
          text-transform: uppercase;
          margin-bottom: 10px;
          p{
          margin:0;}
        }
        
        .row {
          display: flex;
          align-items: center;
          margin: 2px 0;
        }
        
        .row span {
          font-weight: bold;
          width: 180px;
          color: #1e3799;
          font-size: 14px;
        }
        
        .row p {
          flex-grow: 1;
          background-color: #f1f2f6;
          padding: 10px;
          border-radius: 6px;
          border: 1px solid #dcdde1;
          font-size: 14px;
        }
        
        .solicitante-info {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 0 20px;
        }
        
        .info-item {
          display: flex;
          align-items: center;
          width: calc(50% - 12.5px);
        }
        
        .info-item span {
          font-weight: bold;
          width: 140px;
          color: #1e3799;
          font-size: 14px;
        }
        
        .info-item p {
          flex-grow: 1;
          background-color: #f1f2f6;
          padding: 10px;
          border-radius: 6px;
          border: 1px solid #dcdde1;
          font-size: 14px;
        }
        
        @page {
          size: A4 landscape;
          margin: 0;
        }
        
        @media print {
          body, html {
            height: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            overflow: hidden !important;
            background-color: #ffffff !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
      
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
            font-size: calc(16px * 0.9) !important;
            line-height: 1.5 !important;
          }
      
          .page {
            width: 100% !important;
            height: 100% !important;
            max-height: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            overflow: hidden !important;
            page-break-inside: avoid !important;
            box-shadow: none !important;
            border: 1px solid #dfe6e9 !important;
          }
      
          .subpage {
            height: 100% !important;
            max-height: 100% !important;
            overflow: hidden !important;
            
          }
      
          .container {
            page-break-inside: avoid !important;
          }
      
          .header {
            background-color: #1e3799 !important;
            color: white !important;
          }
      
          .title {
            background-color: #4a69bd !important;
            color: white !important;
          }
      
          .row p,
          .info-item p {
            background-color: #f1f2f6 !important;
            border: 1px solid #dcdde1 !important;
          }
      
          @page {
            size: A4 landscape;
            margin: 0mm !important;
          }
        }
      </style>`
    const pagCompleta = ` <div class="book"> ${paginasHtml} </div> ${css}`
    return pagCompleta;
  }

  async gerarPDFEtiqueta(ordemdeservico: IOrdemDeServico) {
    try {
        const htmlCompleto = this.etiqueta_de_amostras(ordemdeservico);
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = htmlCompleto;
        
        // configurações importantes para renderização
        tempDiv.style.position = 'absolute';
        tempDiv.style.left = '-9999px';
        tempDiv.style.width = '297mm'; 
        tempDiv.style.height = '210mm'; 
        tempDiv.style.overflow = 'visible';
        
        document.body.appendChild(tempDiv);

        const paginas = tempDiv.querySelectorAll('.page') as NodeListOf<HTMLElement>;

        const pdf = new jsPDF({
            orientation: 'landscape',
            unit: 'mm',
            format: 'a4'
        });

        const imgWidth = 297;
        const imgHeight = 210;

        for (let i = 0; i < paginas.length; i++) {
            if (i > 0) {
                pdf.addPage();
            }

            const canvas = await html2canvas(paginas[i], {
                scale: 2, // escala de qualidade
                useCORS: true,
                logging: false,
                width: imgWidth * 3.78, // conversão de mm para pixels
                height: imgHeight * 3.78, // conversão de mm para pixels
                windowWidth: imgWidth * 3.78,
                windowHeight: imgHeight * 3.78,
                
                // configurações para melhorar a renderização
                removeContainer: false,
                allowTaint: true,
                proxy: undefined
            });

            const imgData = canvas.toDataURL('image/jpeg', 1.0);
            pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight, undefined, 'FAST');
        }

        pdf.save(`Etiqueta_${ordemdeservico.numeroOs}.pdf`);
    } catch (error) {
        console.error('Erro ao gerar PDF:', error);
    } finally {
        const tempDiv = document.querySelector('div[style*="absolute"]');
        if (tempDiv) {
            document.body.removeChild(tempDiv);
        }
    }
}
}