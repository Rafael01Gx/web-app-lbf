import{a as ce}from"./chunk-ZIQIB45D.js";import"./chunk-FK6H3RFT.js";import{a as me}from"./chunk-3TIWJO7N.js";import{a as le}from"./chunk-PDU62KLR.js";import"./chunk-KDNFE22G.js";import"./chunk-DQBQ7EW5.js";import{a as $}from"./chunk-IMUJMABS.js";import{a as M,b as oe,c as ae}from"./chunk-RUE4O575.js";import{d as se}from"./chunk-T2AQUXFH.js";import{A as ee,B as te,C as ne,D as ie,S,T as re,b as A,i as N,j as Q,l as L,m as j,r as B,s as G,t as U,u as J,v as K,w as W,x as X,y as Y,z as Z}from"./chunk-Q23MXH7B.js";import"./chunk-2PPFUFFT.js";import"./chunk-RYRDEO54.js";import"./chunk-QRFH67T7.js";import"./chunk-FD6YJ6N6.js";import"./chunk-3IDK2O2Y.js";import"./chunk-FQ7V5Y7D.js";import"./chunk-E2AUU6GZ.js";import{Bc as z,Ec as q,Fb as F,Gb as R,Gc as H,Kb as g,Pb as v,Tb as i,Ub as o,Vb as D,Wb as d,Xb as _,Zb as O,bb as l,ea as f,fc as P,hc as c,ma as u,mc as w,na as C,nc as E,oc as y,rb as k,sc as V,tc as a,uc as h,vc as x,yb as m}from"./chunk-YR66D3FA.js";import"./chunk-QMQTSFHS.js";import{a as T,b as I}from"./chunk-EQDQRRRY.js";var fe=()=>[N,A,L,B,U,X,J,G,Y,K,W,Z,ee,te,M,oe,S,import("./chunk-OYM2J3YL.js").then(e=>e.MatCard),import("./chunk-QOYQATUX.js").then(e=>e.MatIcon),import("./chunk-HXVWHJB2.js").then(e=>e.NgxMaskPipe)],ue=()=>[10,20,30];function Ce(e,n){e&1&&(i(0,"th",19),a(1,"Num.OS"),o())}function ge(e,n){if(e&1&&(i(0,"td",20),a(1),o()),e&2){let t=n.$implicit;l(),h(t.numeroOs)}}function Oe(e,n){e&1&&(i(0,"th",19),a(1,"Data da solicitacao"),o())}function Pe(e,n){if(e&1&&(i(0,"td",20),a(1),o()),e&2){let t=n.$implicit;l(),h(t.data_solicitacao)}}function De(e,n){e&1&&(i(0,"th",19),a(1,"Status"),o())}function he(e,n){if(e&1&&(a(0),q(1,"mask")),e&2){let t=c().$implicit;x(" - ",H(1,1,t.progresso_calculado,"percent.2"),"% ")}}function xe(e,n){if(e&1&&(i(0,"td",20),a(1),m(2,he,2,4),o()),e&2){let t=n.$implicit;l(),x("",t.status," "),l(),v(t.progresso_calculado>0?2:-1)}}function Me(e,n){e&1&&(i(0,"th",19),a(1,"Prazo Inicio - Fim"),o())}function Se(e,n){if(e&1&&(i(0,"td",20),a(1),o()),e&2){let t=n.$implicit;l(),h(t.prazo_inicio_fim)}}function ve(e,n){e&1&&(i(0,"th",19),a(1,"Etiqueta"),o())}function we(e,n){if(e&1){let t=O();i(0,"td",21),P("click",function(){let s=u(t).$implicit,p=c(2);return C(p.gerarPDF_Etiqueta(s))}),i(1,"mat-icon"),a(2,"sell"),o()()}}function Ee(e,n){e&1&&(i(0,"th",19),a(1,"Excluir"),o())}function ye(e,n){if(e&1){let t=O();i(0,"mat-icon",23),P("click",function(){u(t);let s=c().$implicit,p=c(2);return C(p.openDialogDelet(s._id))}),a(1,"delete"),o()}}function be(e,n){if(e&1){let t=O();i(0,"mat-icon",24),P("click",function(){u(t);let s=c(3);return C(s.excluirEmAndamento())}),a(1,"delete_forever"),o()}}function Te(e,n){if(e&1&&(i(0,"td",20),m(1,ye,2,0,"mat-icon")(2,be,2,0,"mat-icon",22),o()),e&2){let t=n.$implicit;l(),v(t.status=="Aguardando Autoriza\xE7\xE3o"||t.status=="Autorizada"?1:2)}}function Ie(e,n){e&1&&D(0,"tr",25)}function ke(e,n){e&1&&D(0,"tr",26)}function Fe(e,n){if(e&1&&(i(0,"tr",27)(1,"td",28),a(2),o()()),e&2){c();let t=V(6);l(2),x(" ",t.value," ")}}function Re(e,n){if(e&1){let t=O();i(0,"mat-card")(1,"div",1)(2,"mat-form-field",2)(3,"mat-label"),a(4,"Filtro"),o(),i(5,"input",3,0),P("keyup",function(s){u(t);let p=c();return C(p.applyFilter(s))}),o()(),i(7,"div",4)(8,"table",5),d(9,6),m(10,Ce,2,0,"th",7)(11,ge,2,1,"td",8),_(),d(12,9),m(13,Oe,2,0,"th",7)(14,Pe,2,1,"td",8),_(),d(15,10),m(16,De,2,0,"th",7)(17,xe,3,2,"td",8),_(),d(18,11),m(19,Me,2,0,"th",7)(20,Se,2,1,"td",8),_(),d(21,12),m(22,ve,2,0,"th",7)(23,we,3,0,"td",13),_(),d(24,14),m(25,Ee,2,0,"th",7)(26,Te,3,1,"td",8),_(),m(27,Ie,1,0,"tr",15)(28,ke,1,0,"tr",16)(29,Fe,3,1,"tr",17),o(),D(30,"mat-paginator",18),o()()()}if(e&2){let t=c();l(8),g("dataSource",t.dataSource),l(19),g("matHeaderRowDef",t.displayedColumns),l(),g("matRowDefColumns",t.displayedColumns),l(2),g("pageSizeOptions",z(4,ue))}}var de=class e{pageIco="manage_accounts";pageTitle="Gerenciar contas";#t=f(me);#e=f($);#n=f(se);#i=f(ce);listOs=[];dataSource=new ie(this.listOs);displayedColumns=["numeroOs","data_solicitacao","status","prazo_inicio_fim","etiqueta","excluir"];paginator;sort;ngOnInit(){this.listarDados()}ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}applyFilter(n){let t=n.target.value;this.dataSource.filter=t.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}openDialogDelet(n){this.#n.open(le,{width:"250px"}).afterClosed().subscribe(r=>{r&&this.excluirOs(n)})}excluirOs(n){this.#t.httpExcluirOrdemDeServico(n).subscribe(t=>{t.message&&(this.#e.success(t.message),this.listarDados())},t=>{this.#e.error(t.error.message)})}listarDados(){this.#t.httpListarOrdemDeServicoByUserId().subscribe(n=>{n&&n.ordemsDeServico?(this.listOs=n.ordemsDeServico.filter(t=>t.status!=="Finalizada"),this.dataSource.data=this.listOs.map(t=>{let r=this.getOsProgresso(t);return I(T({},t),{progresso_calculado:r})})):console.error("Nenhuma ordem de servi\xE7o encontrada na resposta")})}getOsProgresso(n){if(!n.progresso)return 0;let t=Object.keys(n.progresso),r=t.length;return t.reduce((_e,pe)=>{let b=n.progresso[pe];return _e+(typeof b=="number"?b:0)},0)/r}gerarPDF_Etiqueta(n){this.#i.gerarPDFEtiqueta(n)}excluirEmAndamento(){this.#e.info("A exclus\xE3o da ordem de servi\xE7o em andamento n\xE3o \xE9 permitida !")}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=k({type:e,selectors:[["app-os-pendentes"]],viewQuery:function(t,r){if(t&1&&(w(S,5),w(M,5)),t&2){let s;E(s=y())&&(r.paginator=s.first),E(s=y())&&(r.sort=s.first)}},decls:3,vars:0,consts:[["input",""],[1,"tabela-container"],[1,"filter-field"],["matInput","","placeholder","",3,"keyup"],[1,"mat-elevation-z8","table-wrapper"],["mat-table","","matSort","",1,"t-table",3,"dataSource"],["matColumnDef","numeroOs"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","data_solicitacao"],["matColumnDef","status"],["matColumnDef","prazo_inicio_fim"],["matColumnDef","etiqueta"],["mat-cell","",3,"click",4,"matCellDef"],["matColumnDef","excluir"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["aria-label","Selecione a p\xE1gina de usu\xE1rios",1,"sticky-paginator",3,"pageSizeOptions"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-cell","",3,"click"],[2,"opacity","0.5"],[3,"click"],[2,"opacity","0.5",3,"click"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(t,r){t&1&&(m(0,Re,31,5),F(1,0,fe),R())},dependencies:[Q,j,ne,ae,re],styles:["[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]{display:flex;max-height:100%}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .tabela-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-grow:1;overflow:hidden}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .tabela-container[_ngcontent-%COMP%]   .filter-field[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .tabela-container[_ngcontent-%COMP%]   .filter-field[_ngcontent-%COMP%]   .mat-mdc-form-field-infix[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .tabela-container[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]{flex-grow:1;overflow-y:auto;position:relative}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .tabela-container[_ngcontent-%COMP%]   .t-table[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .tabela-container[_ngcontent-%COMP%]   .t-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .tabela-container[_ngcontent-%COMP%]   .t-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:hover{cursor:pointer}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .tabela-container[_ngcontent-%COMP%]   .sticky-paginator[_ngcontent-%COMP%]{position:sticky;bottom:0;z-index:2}[_nghost-%COMP%]   .material-icons[_ngcontent-%COMP%]:hover{cursor:pointer;color:var(--red-10)}"]})};export{de as OsPendentesComponent};
