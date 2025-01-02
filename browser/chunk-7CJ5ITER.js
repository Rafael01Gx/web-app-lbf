import{a as Rt}from"./chunk-ZAZVFRPM.js";import{a as vt}from"./chunk-CNP2COBP.js";import{a as E}from"./chunk-KDNFE22G.js";import{b as q}from"./chunk-DQBQ7EW5.js";import{a as k}from"./chunk-IMUJMABS.js";import{b as w,c as W,d as St,e as Et,f as At,g as It,h as kt,i as Ft}from"./chunk-T2AQUXFH.js";import{C as Dt,Q as wt,R as yt,b as z,d as Ot,e as Pt,h as xt,i as V,l as L,m as j}from"./chunk-Q23MXH7B.js";import{b as D,f as ht,l as N}from"./chunk-RYRDEO54.js";import{b as B,e as $,h as G,p as H}from"./chunk-I3X2TQNM.js";import{k as U,l as bt}from"./chunk-RF64FGT2.js";import{ba as Mt}from"./chunk-3IDK2O2Y.js";import{j as Tt}from"./chunk-VR7FPLW7.js";import{b as F,g as T,h as ct,i as mt,k as C,l as dt,m as pt,n as _t,o as ut,p as gt,q as ft,s as Ct,t as R}from"./chunk-FQ7V5Y7D.js";import{Y as A,aa as st,ya as I}from"./chunk-E2AUU6GZ.js";import{Ac as it,Dc as S,Ec as rt,Fb as tt,Gb as et,Gc as lt,Kb as f,Pb as X,Qb as P,Rb as x,Sb as b,Tb as o,Ub as e,Vb as p,Zb as v,bb as s,ea as c,fc as m,hc as _,kb as Y,ma as u,na as g,rb as O,tc as r,uc as M,vc as h,xc as nt,yb as y,yc as at,zb as Z,zc as ot}from"./chunk-YR66D3FA.js";var Ut=(i,n)=>({"bg-red-10":i,"bg-blue-10":n});function Wt(i,n){if(i&1&&(o(0,"mat-option",6),r(1),e()),i&2){let t=n.$implicit;f("value",t._id),s(),M(t.materia_prima.nome_descricao)}}function qt(i,n){if(i&1){let t=v();o(0,"tr")(1,"td")(2,"mat-form-field")(3,"span",10),r(4),e(),o(5,"span",11),r(6),e(),o(7,"input",12,1),m("wheel",function(l){return u(t),g(l.preventDefault())}),ot("ngModelChange",function(l){let d=u(t).$implicit;return at(d.valor_resultado,l)||(d.valor_resultado=l),g(l)}),m("blur",function(l){let d=u(t).$implicit,Q=_();return g(Q.limitarCasasDecimais(l,d.casas_decimais))}),e()()()()}if(i&2){let t=n.$implicit;s(4),h("",t.item," \xA0 - "),s(2),h("\xA0 ",t.unidade_resultado,""),s(),nt("ngModel",t.valor_resultado)}}var J=class i{title="";dialogRef=c(w);#n=c(vt);#e=c(Rt);#t=c(k);#a=c(q);data=c(W);helpersService=c(E);amostra=this.data[0];ensaio=this.data[1].trim();listConfigAnalises=[];analista;configuracaoSelecionada=Y({});#o=c(E).calcularPrazoEmDias;prazo_atual=this.#o(this.amostra.prazo_inicio_fim.split("-")[1]);constructor(){}ngOnInit(){this.#n.httpCheckUser().subscribe(n=>{n&&(this.analista={_id:n._id,name:n.name,area:n.area,funcao:n.funcao})}),this.#e.httpListarConfiguracaoDeAnalise().subscribe(n=>{n&&n.configuracaoDeAnalise?this.listConfigAnalises=n.configuracaoDeAnalise.filter(t=>t.tipo_de_analise.tipo.trim().toLowerCase()===this.ensaio.trim().toLowerCase()):this.#t.error(n.message)})}closeDialog(){this.dialogRef.close()}getParamsValues(n){return Object.values(n)}selecionarConfiguracao(n){let t=this.listConfigAnalises.find(a=>a._id===n);if(t){let a=Object.values(t.parametros_de_analise);this.configuracaoSelecionada.set(a)}else this.#t.error("Configura\xE7\xE3o n\xE3o encontrada")}limitarCasasDecimais(n,t){this.helpersService.limitarCasasDecimais(n.target,t)}saveData(){if(Object.values(this.configuracaoSelecionada()).some(l=>l.valor_resultado===void 0||l.valor_resultado==="")){this.#t.error("Por favor, preencha todos os campos!.");return}let t={};Object.values(this.configuracaoSelecionada()).forEach((l,d)=>{l.valor_resultado!==void 0&&l.valor_resultado!==""&&(t[(d+1).toString()]={item:l.item,valor_resultado:l.valor_resultado,unidade_resultado:l.unidade_resultado,casas_decimais:l.casas_decimais})}),this.amostra.resultados||(this.amostra.resultados={[this.ensaio]:t}),this.amostra.resultados[this.ensaio]||(this.amostra.resultados[this.ensaio]={}),this.amostra.resultados[this.ensaio]=t,this.amostra.progresso=this.#a.calcularProgresso(this.amostra),this.amostra.progresso==100?this.amostra.status="Finalizada":this.amostra.status="Em Execu\xE7\xE3o",this.amostra.analistas||(this.amostra.analistas=[]),this.amostra.analistas.some(l=>l._id===this.analista._id)||this.amostra.analistas.push(this.analista),this.#a.httpEditarAmostra(this.data[0]._id,this.amostra).subscribe({next:()=>{this.#t.success("An\xE1lise adicionada com sucesso!"),this.dialogRef.close(this.amostra)},error:l=>{this.#t.error("Erro ao lan\xE7ar resultados: ",l.error.message)}})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=O({type:i,selectors:[["app-lancamento-de-resultados"]],inputs:{title:"title"},features:[it([{provide:xt,useValue:{subscriptSizing:"dynamic"}}])],decls:25,vars:6,consts:[["select",""],["data",""],[1,"close-bar",3,"ngClass"],[3,"click"],[1,"form-controls"],[3,"selectionChange"],[3,"value"],["appearance","raised"],[1,"table-content"],["mat-raised-button","",3,"click"],["matTextPrefix",""],["matTextSuffix",""],["required","","type","number","autocomplete","off","matInput","",3,"wheel","ngModelChange","blur","ngModel"]],template:function(t,a){if(t&1){let l=v();o(0,"mat-card")(1,"div",2)(2,"span"),r(3),e(),o(4,"mat-icon",3),m("click",function(){return u(l),g(a.closeDialog())}),r(5,"close"),e()(),o(6,"mat-card-header")(7,"h2"),r(8),e()(),o(9,"mat-card-content")(10,"div",4)(11,"mat-form-field")(12,"mat-label"),r(13,"Configura\xE7\xE3o"),e(),o(14,"mat-select",5,0),m("selectionChange",function(Q){return u(l),g(a.selecionarConfiguracao(Q.value))}),x(16,Wt,2,2,"mat-option",6,P),e()()()(),o(18,"mat-card",7)(19,"mat-card-content",8)(20,"table"),x(21,qt,9,3,"tr",null,P),e()()(),o(23,"button",9),m("click",function(){return u(l),g(a.saveData())}),r(24,"Salvar"),e()()}t&2&&(s(),f("ngClass",S(3,Ut,a.prazo_atual.includes("atraso"),a.prazo_atual.includes("restantes"))),s(2),h(" ",a.prazo_atual,""),s(5),M(a.ensaio),s(8),b(a.listConfigAnalises),s(5),b(a.getParamsValues(a.configuracaoSelecionada())))},dependencies:[H,B,$,G,U,j,L,V,z,Ot,Pt,R,F,_t,T,ft,A,yt,wt,Mt,N,D,I,Dt,Ct,dt],styles:['@charset "UTF-8";  .mat-mdc-dialog-surface{border-radius:5px!important;padding:0!important}  .cdk-overlay-dark-backdrop{background:#000!important;opacity:.6!important}[_nghost-%COMP%]   input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, [_nghost-%COMP%]   input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button{-webkit-appearance:none}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]{display:flex;width:100%;height:100%;flex-direction:column;border-radius:5px;padding-bottom:0}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .close-bar[_ngcontent-%COMP%]{position:sticky;top:0;z-index:10;width:100%;height:25px;padding:5px;display:flex;align-items:center;justify-content:flex-end}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .close-bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff;position:absolute;left:50%;transform:translate(-50%);align-self:center}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .close-bar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:5px;color:#fff;transition:color .1s ease-in-out}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .close-bar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover{cursor:pointer;color:red}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{position:sticky;top:25px;z-index:10;width:100%;display:flex;flex-direction:row;align-items:center;justify-content:center;color:var(--gray-700);background:var(--ligth-white-gradient);border-radius:5px}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.5rem}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding-bottom:0;flex-grow:1}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .form-controls[_ngcontent-%COMP%]{margin-top:20px;width:100%;display:flex;flex-flow:row nowrap;align-items:baseline;gap:10px}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .form-controls[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{flex-grow:1}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content.table-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;margin:auto;padding:20px}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content.table-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%;margin:5px;height:50px}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content.table-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--blue-10)}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content.table-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{text-align:center}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content.table-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{align-items:baseline}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .border-gray[_ngcontent-%COMP%]{border:1px solid var(--gray-700)}[_nghost-%COMP%]   button[_ngcontent-%COMP%]{position:sticky;bottom:0;z-index:10;border-radius:5px}']})};var K=class i{dialogRef=c(w);remove(){this.dialogRef.close(!0)}close(){this.dialogRef.close(!1)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=O({type:i,selectors:[["app-deletar-resultado-amostra"]],decls:9,vars:0,consts:[["mat-dialog-title",""],["mat-button","","mat-dialog-close","",3,"click"],["mat-button","","mat-dialog-close","","cdkFocusInitial","",3,"click"]],template:function(t,a){t&1&&(o(0,"h2",0),r(1,"Excluir resultado"),e(),o(2,"mat-dialog-content"),r(3,` Deseja continuar?
`),e(),o(4,"mat-dialog-actions")(5,"button",1),m("click",function(){return a.close()}),r(6,"N\xE3o"),e(),o(7,"button",2),m("click",function(){return a.remove()}),r(8,"Sim"),e()())},dependencies:[kt,Et,It,At,D],styles:["button[_ngcontent-%COMP%]{margin-right:8px}"]})};var Jt=()=>[import("./chunk-DVT5NC2T.js").then(i=>i.DecimalFormatPipe)],Vt=(i,n)=>({"bg-red-10":i,"bg-blue-10":n});function Kt(i,n){if(i&1&&(o(0,"div",26)(1,"div",27)(2,"span"),r(3),e()(),o(4,"div")(5,"span"),r(6),e()(),o(7,"div")(8,"span"),r(9),rt(10,"decimalFormat"),e()()()),i&2){let t=n.$implicit;s(3),h(" ",t.item,""),s(3),M(t.unidade_resultado),s(3),M(lt(10,3,t.valor_resultado,t.casas_decimais))}}function Qt(i,n){if(i&1&&(o(0,"div",25),x(1,Kt,11,6,"div",26,P),e()),i&2){let t=_(2).$implicit,a=_(2);s(),b(a.objectToArray(a.resultados[t]))}}function Xt(i,n){if(i&1&&y(0,Qt,3,0,"div",25),i&2){let t=_().$implicit,a=_(2);X(a.resultados[t]?0:-1)}}function Yt(i,n){i&1&&p(0,"img",28)}function Zt(i,n){if(i&1){let t=v();o(0,"fieldset",21)(1,"legend"),r(2),e(),y(3,Xt,1,1)(4,Yt,1,0),tt(5,3,Jt,4,null,null,0,null,Z),et(),o(7,"div",22)(8,"button",23),m("click",function(){let l=u(t).$implicit,d=_(2);return g(d.openDialog(l))}),o(9,"mat-icon"),r(10),e()(),o(11,"button",24),m("click",function(){let l=u(t).$implicit,d=_(2);return g(d.removerResultado(l))}),o(12,"mat-icon"),r(13,"remove"),e()()()()}if(i&2){let t=n.$implicit,a=_(2);s(2),M(t),s(8),M(a.resultados[t]?"edit":"add"),s(),f("hidden",!a.resultados[t])}}function te(i,n){if(i&1&&(o(0,"form",5)(1,"fieldset",8)(2,"legend"),r(3,"Solicitante"),e(),o(4,"mat-form-field",9)(5,"mat-label"),r(6,"Nome"),e(),p(7,"input",10),e(),o(8,"mat-form-field",9)(9,"mat-label"),r(10,"Fun\xE7\xE3o"),e(),p(11,"input",11),e(),o(12,"mat-form-field",9)(13,"mat-label"),r(14,"\xC1rea"),e(),p(15,"input",12),e(),o(16,"mat-form-field",13)(17,"mat-label"),r(18,"Email"),e(),p(19,"input",14),e(),o(20,"mat-form-field",15)(21,"mat-label"),r(22,"Contato"),e(),p(23,"input",16),e()(),o(24,"fieldset",17)(25,"legend"),r(26,"Item"),e(),o(27,"mat-form-field")(28,"mat-label"),r(29,"Identifica\xE7\xE3o"),e(),p(30,"input",18),e(),o(31,"mat-form-field")(32,"mat-label"),r(33,"Data"),e(),p(34,"input",19),e(),o(35,"mat-form-field")(36,"mat-label"),r(37,"Status"),e(),p(38,"input",20),e(),o(39,"fieldset",17)(40,"legend"),r(41,"An\xE1lises"),e(),x(42,Zt,14,3,"fieldset",21,P),e()()()),i&2){let t=_();f("formGroup",t.analiseForm),s(42),b(t.analises)}}function ee(i,n){i&1&&(o(0,"p"),r(1,"N\xE3o existem dados para exibi\xE7\xE3o"),e())}function ne(i,n){if(i&1){let t=v();o(0,"div",29)(1,"button",30),m("click",function(){u(t);let l=_();return g(l.salvarAlteracoes())}),r(2," Salvar altera\xE7\xF5es"),e()()}}var Lt=class i{dialogRef=c(w);dialog=c(St);#n=c(q);data=c(W);#e=c(k);#t=c(E).calcularPrazoEmDias;prazo_atual=this.#t(this.data.prazo_inicio_fim.split("-")[1]);resultados={};analises=this.data.ensaios_solicitados?.split(",").map(n=>n.trim())||[];exibirBtt=!1;analiseForm=new mt({nome_solicitante:new C(""),area:new C(""),funcao:new C(""),email_solicitante:new C(""),contato_solicitante:new C(""),nome_amostra:new C(""),data_amostra:new C(""),status_amostra:new C("")});ngOnInit(){this.analiseForm.patchValue({nome_solicitante:this.data.solicitante?.name,area:this.data.solicitante?.area,funcao:this.data.solicitante?.funcao,email_solicitante:this.data.solicitante?.email,contato_solicitante:this.data.solicitante?.phone,nome_amostra:this.data.nome_amostra,data_amostra:this.data.data_amostra,status_amostra:this.data.status}),this.resultados=this.data.resultados||{}}closeDialog(){this.dialogRef.close()}openDialog(n){this.dialog.open(J,{minWidth:"40vw",maxHeight:"90vh",data:[this.data,n]}).afterClosed().subscribe(a=>{a&&(this.resultados=a.resultados||{})})}objectToArray(n){return Object.values(n)}removerResultado(n){this.dialog.open(K,{}).afterClosed().subscribe(a=>{a&&(delete this.resultados[n],this.exibirBtt=!0)})}salvarAlteracoes(){let n=this.data._id,t=this.data;if(t.progresso=this.#n.calcularProgresso(t),n)try{this.#n.httpEditarAmostra(n,t).subscribe({next:()=>{this.#e.success("Altera\xE7\xF5es aplicadas com sucesso!")},error:a=>{this.#e.error("Erro ao salvar altera\xE7\xF5es: ",a.error.message)}})}catch{this.#e.error("N\xE3o foi poss\xEDvel atualizar, tente novamente mais tarde...")}}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=O({type:i,selectors:[["app-detalhe-de-analise"]],decls:19,vars:12,consts:[[1e3,null],[1,"close-bar",3,"ngClass"],[3,"click"],["src","/img/logo_SFND - 200px.png","alt","Logotipo Laborat\xF3rio F\xEDsico"],[1,"os-number"],[3,"formGroup"],["class","atualizar",4,"ngIf"],[1,"fter",3,"ngClass"],[1,"solicitante"],[2,"width","150px"],["matInput","","formControlName","nome_solicitante","readonly",""],["matInput","","formControlName","funcao","readonly",""],["matInput","","formControlName","area","readonly",""],[2,"width","300px"],["matInput","","formControlName","email_solicitante","readonly",""],[2,"width","200px"],["matInput","","formControlName","contato_solicitante","mask","(00) 0 0000-0000","readonly",""],[1,"item"],["matInput","","formControlName","nome_amostra","readonly",""],["matInput","","formControlName","data_amostra","readonly",""],["matInput","","formControlName","status_amostra","readonly",""],[1,"analises"],[1,"btn-container"],["mat-fab","",3,"click"],["mat-fab","",1,"cancelar",3,"click","hidden"],[2,"flex-grow","1","display","flex","gap","2px"],[1,"table-results"],[1,"table-h"],["alt","loading...","src","loading.gif"],[1,"atualizar"],["mat-raised-button","",3,"click"]],template:function(t,a){t&1&&(o(0,"mat-card")(1,"div",1)(2,"span"),r(3),e(),o(4,"mat-icon",2),m("click",function(){return a.closeDialog()}),r(5,"close"),e()(),o(6,"mat-card-header"),p(7,"img",3),o(8,"h2"),r(9,"Detalhes"),e(),o(10,"div",4),r(11," Ordem de Servi\xE7o "),o(12,"span"),r(13),e()()(),o(14,"mat-card-content"),y(15,te,44,1,"form",5)(16,ee,2,0,"p"),e(),y(17,ne,3,0,"div",6),p(18,"div",7),e()),t&2&&(s(),f("ngClass",S(6,Vt,a.prazo_atual.includes("atraso"),a.prazo_atual.includes("restantes"))),s(2),h(" ",a.prazo_atual,""),s(10),h(" ",a.data.numeroOs," "),s(2),X(a.data?15:16),s(2),f("ngIf",a.exibirBtt),s(),f("ngClass",S(9,Vt,a.prazo_atual.includes("atraso"),a.prazo_atual.includes("restantes"))))},dependencies:[H,B,$,G,j,L,V,z,Tt,R,pt,F,T,ct,ut,gt,A,N,D,ht,bt,U,Ft,I,st],styles:[".mat-mdc-dialog-surface{border-radius:5px!important;overflow:hidden;overflow-y:scroll}  .mat-mdc-dialog-surface::-webkit-scrollbar{display:none}  .mat-mdc-dialog-surface{scrollbar-width:none;-ms-overflow-style:none}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .close-bar[_ngcontent-%COMP%]{position:sticky;top:0;z-index:10;width:100%;height:25px;padding:5px;display:flex;align-items:center;justify-content:flex-end}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .close-bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff;position:absolute;left:50%;transform:translate(-50%);align-self:center}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .close-bar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:5px;color:#fff;transition:color .1s ease-in-out}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .close-bar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover{cursor:pointer;color:red}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{position:sticky;top:25px;z-index:10;width:100%;display:flex;flex-direction:row;align-items:center;justify-content:space-between;text-align:center;color:var(--gray-700);background:var(--ligth-white-gradient);border-radius:5px}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:auto}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.5rem}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   .os-number[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;align-items:center;justify-content:center;margin-left:auto;font-weight:500}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   .os-number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{border-top:1px solid var(--gray-400);color:var(--blue-10)}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding-bottom:0}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]{position:relative;width:100%;display:flex;flex-flow:row wrap;justify-content:flex-start;align-items:center;gap:10px;border:1px solid blue;padding:10px;border-radius:4px}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%]{font-weight:500;color:var(--blue-10)}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   .analises[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:100%;justify-content:space-between;align-content:center}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   .analises[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{mix-blend-mode:multiply;width:50px;position:absolute;left:50%;transform:translate(-50%)}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   .analises[_ngcontent-%COMP%]   .table-results[_ngcontent-%COMP%]{flex-grow:1;text-align:center;background:var(--gray-100)}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   .analises[_ngcontent-%COMP%]   .table-results[_ngcontent-%COMP%]   .table-h[_ngcontent-%COMP%]{background-color:var(--gray-400);color:#fff}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   .analises[_ngcontent-%COMP%]   .table-results[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin:5px}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   .analises[_ngcontent-%COMP%]   .table-results[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{border:solid 1px var(--gray-400);border-collapse:collapse}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   .analises[_ngcontent-%COMP%]   .btn-container[_ngcontent-%COMP%]{margin-left:auto;display:flex;flex-direction:column;gap:5px}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   .analises[_ngcontent-%COMP%]   .btn-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:30px;height:30px;border-radius:4px;background:var(--blue-10);color:#fff;box-shadow:none}[_nghost-%COMP%]   .atualizar[_ngcontent-%COMP%]{width:100%;margin-top:10px;display:flex;justify-content:flex-end}[_nghost-%COMP%]   .atualizar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:10px 20px;border-radius:5px;background-color:#539653;color:#fff}[_nghost-%COMP%]   .fter[_ngcontent-%COMP%]{position:sticky;bottom:0;z-index:10;margin-top:5px;width:100%;height:10px}"]})};export{Lt as a};
