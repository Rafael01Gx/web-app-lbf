import{a as ie}from"./chunk-ZIQIB45D.js";import"./chunk-FK6H3RFT.js";import{a as ne}from"./chunk-3TIWJO7N.js";import"./chunk-KDNFE22G.js";import"./chunk-DQBQ7EW5.js";import{a as h,b as Y,c as Z}from"./chunk-RUE4O575.js";import{d as te}from"./chunk-T2AQUXFH.js";import{A as K,B as U,C as W,D as X,S,T as ee,b as T,i as R,j as k,l as V,m as H,r as N,s as Q,t as $,u as L,v as A,w as j,x as q,y as J,z as B}from"./chunk-Q23MXH7B.js";import"./chunk-2PPFUFFT.js";import"./chunk-RYRDEO54.js";import"./chunk-FD6YJ6N6.js";import"./chunk-3IDK2O2Y.js";import"./chunk-FQ7V5Y7D.js";import"./chunk-E2AUU6GZ.js";import{Bc as G,Fb as z,Gb as b,Kb as _,Tb as a,Ub as i,Vb as O,Wb as p,Xb as f,Zb as w,bb as l,cb as y,ea as D,fc as g,hc as m,ma as u,mc as v,na as C,nc as P,oc as x,rb as F,sc as I,tc as o,uc as M,vc as E,yb as c}from"./chunk-YR66D3FA.js";import"./chunk-QMQTSFHS.js";import"./chunk-EQDQRRRY.js";var oe=()=>[R,T,V,N,$,q,L,Q,J,A,j,B,K,U,h,Y,S,import("./chunk-OYM2J3YL.js").then(e=>e.MatCard),import("./chunk-QOYQATUX.js").then(e=>e.MatIcon)],re=()=>[10,30,50];function le(e,t){e&1&&(a(0,"th",16),o(1,"Num.OS"),i())}function ce(e,t){if(e&1&&(a(0,"td",17),o(1),i()),e&2){let n=t.$implicit;l(),M(n.numeroOs)}}function se(e,t){e&1&&(a(0,"th",16),o(1,"Data da solicitacao"),i())}function me(e,t){if(e&1&&(a(0,"td",17),o(1),i()),e&2){let n=t.$implicit;l(),M(n.data_solicitacao)}}function de(e,t){e&1&&(a(0,"th",16),o(1,"Status"),i())}function _e(e,t){if(e&1&&(a(0,"td",17),o(1),i()),e&2){let n=t.$implicit;l(),M(n.status)}}function pe(e,t){e&1&&(a(0,"th",16),o(1,"Download"),i())}function fe(e,t){if(e&1){let n=w();a(0,"td",17)(1,"mat-icon",18),g("click",function(){let r=u(n).$implicit,d=m(2);return C(d.visualizarOS(r))}),o(2,"picture_as_pdf"),i(),a(3,"mat-icon",19),g("click",function(){let r=u(n).$implicit,d=m(2);return C(d.downloadPdf(r.numeroOs))}),o(4,"download"),i()()}}function ue(e,t){e&1&&O(0,"tr",20)}function Ce(e,t){e&1&&O(0,"tr",21)}function Oe(e,t){if(e&1&&(a(0,"tr",22)(1,"td",23),o(2),i()()),e&2){m();let n=I(6);l(2),E(" ",n.value," ")}}function ge(e,t){if(e&1){let n=w();a(0,"mat-card")(1,"div",1)(2,"mat-form-field",2)(3,"mat-label"),o(4,"Filtro"),i(),a(5,"input",3,0),g("keyup",function(r){u(n);let d=m();return C(d.applyFilter(r))}),i()(),a(7,"div",4)(8,"table",5),p(9,6),c(10,le,2,0,"th",7)(11,ce,2,1,"td",8),f(),p(12,9),c(13,se,2,0,"th",7)(14,me,2,1,"td",8),f(),p(15,10),c(16,de,2,0,"th",7)(17,_e,2,1,"td",8),f(),p(18,11),c(19,pe,2,0,"th",7)(20,fe,5,0,"td",8),f(),c(21,ue,1,0,"tr",12)(22,Ce,1,0,"tr",13)(23,Oe,3,1,"tr",14),i(),O(24,"mat-paginator",15),i()()()}if(e&2){let n=m();l(8),_("dataSource",n.dataSource),l(13),_("matHeaderRowDef",n.displayedColumns),l(),_("matRowDefColumns",n.displayedColumns),l(2),_("pageSizeOptions",G(4,re))}}var ae=class e{constructor(t){this.MatDialog=t}#e=D(ie);#t=D(ne);listOs=[];dataSource=new X(this.listOs);displayedColumns=["numeroOs","data_solicitacao","status","download"];paginator;sort;ngOnInit(){this.#t.httpListarTodasOrdensDeServico().subscribe(t=>{t&&t.ordemsDeServico?(this.listOs=t.ordemsDeServico.filter(n=>n.status=="Finalizada"),this.dataSource.data=this.listOs):console.error("Nenhuma ordem de servi\xE7o encontrada na resposta")})}ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}applyFilter(t){let n=t.target.value;this.dataSource.filter=n.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}visualizarOS(t){sessionStorage.setItem("ordemDeServico",JSON.stringify(t)),window.open("/relatorio-de-analises","_blank")}downloadPdf(t){this.#e.generatePdfForOsNumer(t)}static \u0275fac=function(n){return new(n||e)(y(te))};static \u0275cmp=F({type:e,selectors:[["app-gerenciar-os-finalizadas"]],viewQuery:function(n,s){if(n&1&&(v(S,5),v(h,5)),n&2){let r;P(r=x())&&(s.paginator=r.first),P(r=x())&&(s.sort=r.first)}},decls:3,vars:0,consts:[["input",""],[1,"tabela-container"],[1,"filter-field"],["matInput","","placeholder","",3,"keyup"],[1,"mat-elevation-z8","table-wrapper"],["mat-table","","matSort","",1,"t-table",3,"dataSource"],["matColumnDef","numeroOs"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","data_solicitacao"],["matColumnDef","status"],["matColumnDef","download"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["aria-label","Selecione a p\xE1gina de usu\xE1rios",1,"sticky-paginator",3,"pageSizeOptions"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],[1,"icon",3,"click"],[1,"icon-2",3,"click"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(n,s){n&1&&(c(0,ge,25,5),z(1,0,oe),b())},dependencies:[k,H,W,Z,ee],styles:["[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]{display:flex;max-height:100%}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .tabela-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-grow:1;overflow:hidden}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .tabela-container[_ngcontent-%COMP%]   .filter-field[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .tabela-container[_ngcontent-%COMP%]   .filter-field[_ngcontent-%COMP%]   .mat-mdc-form-field-infix[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .tabela-container[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]{flex-grow:1;overflow-y:auto;position:relative}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .tabela-container[_ngcontent-%COMP%]   .t-table[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .tabela-container[_ngcontent-%COMP%]   .t-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .tabela-container[_ngcontent-%COMP%]   .t-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:hover{cursor:pointer}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .tabela-container[_ngcontent-%COMP%]   .sticky-paginator[_ngcontent-%COMP%]{position:sticky;bottom:0;z-index:2}[_nghost-%COMP%]   .icon[_ngcontent-%COMP%]{margin:0 auto}[_nghost-%COMP%]   .icon[_ngcontent-%COMP%]:hover{color:var(--red-10);cursor:pointer;transform:scale(1.1)}[_nghost-%COMP%]   .icon-2[_ngcontent-%COMP%]{margin-left:20px}[_nghost-%COMP%]   .icon-2[_ngcontent-%COMP%]:hover{color:var(--blue-10);cursor:pointer;transform:scale(1.1)}"]})};export{ae as GerenciarOsFinalizadasComponent};
