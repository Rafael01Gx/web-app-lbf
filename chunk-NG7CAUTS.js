import{a as M}from"./chunk-KDNFE22G.js";import{b as C,c as k}from"./chunk-T2AQUXFH.js";import{b as h,e as y,p as w}from"./chunk-I3X2TQNM.js";import{k as _}from"./chunk-RF64FGT2.js";import{d as b}from"./chunk-QRFH67T7.js";import{Kb as f,Tb as r,Ub as d,Vb as u,Za as p,bb as c,cb as m,ea as n,fc as v,rb as g,tc as x}from"./chunk-YR66D3FA.js";var A=class l{constructor(e){this.sanitizer=e}#e=n(M);data=n(k);relatorio;amostra=this.data;dialogRef=n(C);ngOnInit(){console.log(this.data);let e=this.generateHTML(this.amostra);this.relatorio=this.sanitizer.bypassSecurityTrustHtml(e)}closeDialog(){this.dialogRef.close()}generateHTML(e){let t="";return t+=this.createReportTemplate(e),t}createReportTemplate(e){return`
      <div class="book">
        <div class="page">
          <div class="subpage">
            <div class="header">
              <div>
                <img src="./img/logo_relatorio.png" width="150px" />
              </div>
              <div>
                <h1>Laudo de An\xE1lise</h1>
              </div>
              <div class="header-right">
                <img height="24px" src="./img/arcelor.png" />
              </div>
            </div>
            <div class="body">
              <fieldset class="solicitante">
                <div>
                  <div>
                    <span>\xC1rea Solicitante:</span>
                    <fieldset><p>${e.solicitante?.area}</p></fieldset>
                  </div>
                  <div>
                    <span>Data de In\xEDcio:</span>
                    <fieldset>
                      <p>${e.prazo_inicio_fim?.trim().split("-")[0]||"N/A"}</p>
                    </fieldset>
                  </div>
                  <div>
                    <span>Data Final:</span>
                    <fieldset>
                      <p>${e.prazo_inicio_fim?.trim().split("-")[1]||"N/A"}</p>
                    </fieldset>
                  </div>
                </div>
                <div>
                  <div>
                    <span>Requerente:</span>
                    <fieldset>
                      <p>${e.solicitante?.name||"N/A"}</p>
                    </fieldset>
                  </div>
                  <div>
                    <span>E-mail:</span>
                    <fieldset>
                      <p>${e.solicitante?.email||"N/A"}</p>
                    </fieldset>
                  </div>
                  <div>
                    <span>Contato:</span>
                    <fieldset>
                      <p>${e.solicitante?.phone||"N/A"}</p>
                    </fieldset>
                  </div>
                </div>
              </fieldset>
              
              <fieldset class="analise">
                <div>
                  <div>
                    <span>Identifica\xE7\xE3o da amostra:</span>
                    <fieldset>
                      <p>${e.nome_amostra}</p>
                    </fieldset>
                  </div>
                  <div>
                    <span>Tipo de amostras:</span>
                    <fieldset>
                      <p>${e.amostra_tipo}</p>
                    </fieldset>
                  </div>
                </div>
                <div>
                  <div>
                    <span>Data da Amostra:</span>
                    <fieldset>
                      <p>${e.data_amostra}</p>
                    </fieldset>
                  </div>
                  <div>
                    <span>Data da Recep\xE7\xE3o:</span>
                    <fieldset>
                      <p>${e.data_recepcao}</p>
                    </fieldset>
                  </div>
                </div>
              </fieldset>

              <fieldset class="ensaios">
                <div class="title">
                  <h2>Ensaios Solicitados</h2>
                </div>
                <span style="text-transform: uppercase">
                  ${e.ensaios_solicitados}
                </span>
              </fieldset>

              ${this.renderResultados(e.resultados)}

            </div>
          </div>
        </div>
      </div>
    `}renderResultados(e){let t="";return Object.entries(e).forEach(([i,o])=>{t+=`
        <fieldset class="ensaios">
          <div class="title">
            <h2>${i}</h2>
          </div>
          ${this.renderResultadosTable(i,o)}
        </fieldset>
      `}),t+=` <style>
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
        </style>`,t}renderAnalistas(e){return Object.entries(e).map(([t,i])=>`
        <div class="container-assinatura">
          ${i?`
          <div class="analista-aprovador">
            <div>${i.name?.toUpperCase()}</div>
            <div><small class="analista-funcao">${i.funcao}</small></div>
            <div><em><strong>${i.area}</strong></em></div>
          </div>`:""}
        </div>`).join("")}renderResultadosTable(e,t){let i=["RDI","GRANULOMETRIA"].includes(e.trim().toUpperCase()),o=Object.entries(t).map(a=>a[1]),$=i?'style="display: flex;flex-direction: column; flex-wrap: wrap;"':"",I=i?'style="display: flex;flex-direction: row; flex-wrap: nowrap;"':"",s=`<div class="tabela-resultado" ${$}>`;return o.forEach(a=>{s+=`
        <div class="borda" ${I}>
          <div class="result-item">
            <span>${a.item}</span>
          </div>
          ${i?"":`<div class="result-unidade-resultado"><span>${a.unidade_resultado}</span></div>`}
          <div class="result-valor-resultado">
            <span>${this.#e.transformarResultado(a.valor_resultado,a.casas_decimais)}</span>
          </div>
          ${i?`<div class="result-unidade-resultado"><span>${a.unidade_resultado}</span></div>`:""}
        </div>
      `}),s+="</div>",s}static \u0275fac=function(t){return new(t||l)(m(b))};static \u0275cmp=g({type:l,selectors:[["app-laudo-amostra"]],decls:6,vars:1,consts:[[1,"close-bar"],[3,"click"],[3,"innerHTML"]],template:function(t,i){t&1&&(r(0,"mat-card")(1,"div",0)(2,"mat-icon",1),v("click",function(){return i.closeDialog()}),x(3,"close"),d()(),r(4,"mat-card-content"),u(5,"div",2),d()()),t&2&&(c(5),f("innerHTML",i.relatorio,p))},dependencies:[w,h,y,_],styles:[".mat-mdc-dialog-surface{border-radius:5px!important}  .mat-mdc-dialog-surface::-webkit-scrollbar{display:none}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]{display:flex;width:100%;height:100%;flex-direction:column;border-radius:5px;padding-bottom:0}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .close-bar[_ngcontent-%COMP%]{position:sticky;background:var(--blue-10);top:0;z-index:10;width:100%;height:25px;padding:5px;display:flex;align-items:center;justify-content:flex-end;margin-bottom:20px}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .close-bar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--gray-100)}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .close-bar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover{cursor:pointer;color:var(--red-10)}"]})};export{A as a};
