import{a as ot}from"./chunk-ZIQIB45D.js";import"./chunk-FK6H3RFT.js";import{a as at}from"./chunk-3TIWJO7N.js";import"./chunk-KDNFE22G.js";import"./chunk-DQBQ7EW5.js";import{a as S,b as tt,c as et}from"./chunk-RUE4O575.js";import{d as it}from"./chunk-T2AQUXFH.js";import{A as W,B as X,C as Y,D as Z,S as h,T as nt,b as R,i as k,j as V,l as H,m as N,r as L,s as A,t as j,u as q,v as B,w as G,x as J,y as U,z as K}from"./chunk-Q23MXH7B.js";import"./chunk-2PPFUFFT.js";import"./chunk-RYRDEO54.js";import{k as Q,l as $}from"./chunk-RF64FGT2.js";import"./chunk-QRFH67T7.js";import"./chunk-FD6YJ6N6.js";import"./chunk-3IDK2O2Y.js";import"./chunk-FQ7V5Y7D.js";import"./chunk-E2AUU6GZ.js";import{Bc as T,Fb as F,Gb as b,Kb as p,Tb as a,Ub as i,Vb as O,Wb as _,Xb as f,Zb as D,bb as l,cb as z,ea as v,fc as M,hc as c,ma as u,mc as w,na as C,nc as P,oc as x,rb as y,sc as I,tc as o,uc as g,vc as E,yb as s}from"./chunk-YR66D3FA.js";import"./chunk-QMQTSFHS.js";import"./chunk-EQDQRRRY.js";var lt=()=>[k,R,H,L,j,J,q,A,U,B,G,K,W,X,S,tt,h,import("./chunk-OYM2J3YL.js").then(t=>t.MatCard),Q],st=()=>[10,20,30];function mt(t,e){t&1&&(a(0,"th",16),o(1,"Num.OS"),i())}function ct(t,e){if(t&1&&(a(0,"td",17),o(1),i()),t&2){let n=e.$implicit;l(),g(n.numeroOs)}}function dt(t,e){t&1&&(a(0,"th",16),o(1,"Data da solicitacao"),i())}function pt(t,e){if(t&1&&(a(0,"td",17),o(1),i()),t&2){let n=e.$implicit;l(),g(n.data_solicitacao)}}function _t(t,e){t&1&&(a(0,"th",16),o(1,"Status"),i())}function ft(t,e){if(t&1&&(a(0,"td",17),o(1),i()),t&2){let n=e.$implicit;l(),g(n.status)}}function ut(t,e){t&1&&(a(0,"th",16),o(1,"Visualizar"),i())}function Ct(t,e){if(t&1){let n=D();a(0,"td",17)(1,"mat-icon",18),M("click",function(){let r=u(n).$implicit,d=c(2);return C(d.visualizarOS(r))}),o(2,"picture_as_pdf"),i(),a(3,"mat-icon",19),M("click",function(){let r=u(n).$implicit,d=c(2);return C(d.downloadPdf(r.numeroOs))}),o(4,"download"),i()()}}function Ot(t,e){t&1&&O(0,"tr",20)}function Mt(t,e){t&1&&O(0,"tr",21)}function gt(t,e){if(t&1&&(a(0,"tr",22)(1,"td",23),o(2),i()()),t&2){c();let n=I(6);l(2),E(" ",n.value," ")}}function St(t,e){if(t&1){let n=D();a(0,"mat-card")(1,"div",1)(2,"mat-form-field",2)(3,"mat-label"),o(4,"Filtro"),i(),a(5,"input",3,0),M("keyup",function(r){u(n);let d=c();return C(d.applyFilter(r))}),i()(),a(7,"div",4)(8,"table",5),_(9,6),s(10,mt,2,0,"th",7)(11,ct,2,1,"td",8),f(),_(12,9),s(13,dt,2,0,"th",7)(14,pt,2,1,"td",8),f(),_(15,10),s(16,_t,2,0,"th",7)(17,ft,2,1,"td",8),f(),_(18,11),s(19,ut,2,0,"th",7)(20,Ct,5,0,"td",8),f(),s(21,Ot,1,0,"tr",12)(22,Mt,1,0,"tr",13)(23,gt,3,1,"tr",14),i(),O(24,"mat-paginator",15),i()()()}if(t&2){let n=c();l(8),p("dataSource",n.dataSource),l(13),p("matHeaderRowDef",n.displayedColumns),l(),p("matRowDefColumns",n.displayedColumns),l(2),p("pageSizeOptions",T(4,st))}}var rt=class t{constructor(e){this.MatDialog=e}#t=v(at);#e=v(ot);listOs=[];dataSource=new Z(this.listOs);displayedColumns=["numeroOs","data_solicitacao","status","visualizar"];paginator;sort;ngOnInit(){this.#t.httpListarOrdemDeServicoByUserId().subscribe(e=>{e&&e.ordemsDeServico?(this.listOs=e.ordemsDeServico.filter(n=>n.status=="Finalizada"),this.dataSource.data=this.listOs):console.error("Nenhuma ordem de servi\xE7o encontrada na resposta")})}ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}applyFilter(e){let n=e.target.value;this.dataSource.filter=n.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}visualizarOS(e){sessionStorage.setItem("ordemDeServico",JSON.stringify(e)),window.open("/relatorio-de-analises","_blank")}downloadPdf(e){this.#e.generatePdfForOsNumer(e)}static \u0275fac=function(n){return new(n||t)(z(it))};static \u0275cmp=y({type:t,selectors:[["app-os-finalizadas"]],viewQuery:function(n,m){if(n&1&&(w(h,5),w(S,5)),n&2){let r;P(r=x())&&(m.paginator=r.first),P(r=x())&&(m.sort=r.first)}},decls:3,vars:0,consts:[["input",""],[1,"tabela-container"],[1,"filter-field"],["matInput","","placeholder","",3,"keyup"],[1,"mat-elevation-z8","table-wrapper"],["mat-table","","matSort","",1,"t-table",3,"dataSource"],["matColumnDef","numeroOs"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","data_solicitacao"],["matColumnDef","status"],["matColumnDef","visualizar"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["aria-label","Selecione a p\xE1gina de usu\xE1rios",1,"sticky-paginator",3,"pageSizeOptions"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],[1,"icon",3,"click"],[1,"icon-2",3,"click"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(n,m){n&1&&(s(0,St,25,5),F(1,0,lt),b())},dependencies:[V,N,Y,et,nt,$],styles:["[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]{display:flex;max-height:100%}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .tabela-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-grow:1;overflow:hidden}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .tabela-container[_ngcontent-%COMP%]   .filter-field[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .tabela-container[_ngcontent-%COMP%]   .filter-field[_ngcontent-%COMP%]   .mat-mdc-form-field-infix[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .tabela-container[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]{flex-grow:1;overflow-y:auto;position:relative}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .tabela-container[_ngcontent-%COMP%]   .t-table[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .tabela-container[_ngcontent-%COMP%]   .t-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .tabela-container[_ngcontent-%COMP%]   .t-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:hover{cursor:pointer}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .tabela-container[_ngcontent-%COMP%]   .sticky-paginator[_ngcontent-%COMP%]{position:sticky;bottom:0;z-index:2}[_nghost-%COMP%]   .icon[_ngcontent-%COMP%]{margin:0 auto}[_nghost-%COMP%]   .icon[_ngcontent-%COMP%]:hover{color:var(--red-10);cursor:pointer;transform:scale(1.1)}[_nghost-%COMP%]   .icon-2[_ngcontent-%COMP%]{margin-left:20px}[_nghost-%COMP%]   .icon-2[_ngcontent-%COMP%]:hover{color:var(--blue-10);cursor:pointer;transform:scale(1.1)}"]})};export{rt as OsFinalizadasComponent};
