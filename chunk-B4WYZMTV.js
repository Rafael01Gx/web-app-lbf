import{a as ht}from"./chunk-NG4HERBT.js";import"./chunk-M6DGHITQ.js";import{a as Mt}from"./chunk-3TIWJO7N.js";import"./chunk-IMUJMABS.js";import{a as S,b as _t,c as gt}from"./chunk-RUE4O575.js";import{b as ut,c as ft,d as x}from"./chunk-T2AQUXFH.js";import{A as st,B as dt,C as mt,D as pt,S as w,T as Ct,b as Q,i as B,j as q,l as U,m as W,r as tt,s as et,t as nt,u as at,v as it,w as ot,x as rt,y as ct,z as lt}from"./chunk-Q23MXH7B.js";import"./chunk-2PPFUFFT.js";import{b as L}from"./chunk-RYRDEO54.js";import{b as J,e as K,h as X,p as Y}from"./chunk-I3X2TQNM.js";import{k as Z}from"./chunk-RF64FGT2.js";import"./chunk-QRFH67T7.js";import"./chunk-FD6YJ6N6.js";import"./chunk-3IDK2O2Y.js";import{k as Ot}from"./chunk-VR7FPLW7.js";import"./chunk-FQ7V5Y7D.js";import"./chunk-E2AUU6GZ.js";import{Bc as j,Ec as H,Fb as k,Gb as T,Gc as $,Kb as v,Pb as G,Qb as V,Rb as R,Sb as F,Tb as n,Ub as o,Vb as _,Wb as M,Xb as h,Zb as O,bb as c,cb as z,ea as C,fc as g,hc as m,kb as A,ma as u,mc as y,na as f,nc as E,oc as I,rb as D,sc as N,tc as a,uc as s,vc as P,yb as p}from"./chunk-YR66D3FA.js";import"./chunk-EQDQRRRY.js";function Dt(e,i){if(e&1&&(a(0," Telefone: "),n(1,"span"),a(2),H(3,"mask"),o()),e&2){let t=m();c(2),s($(3,1,t.data.solicitante==null?null:t.data.solicitante.phone.toString(),"(00) 0 0000-0000"))}}function St(e,i){if(e&1&&(n(0,"div",7)(1,"div")(2,"p"),a(3," Identifica\xE7\xE3o: "),n(4,"span"),a(5),o()(),n(6,"p"),a(7," Data: "),n(8,"span"),a(9),o()()(),n(10,"p"),a(11," Ensaios : "),n(12,"span"),a(13),o()()()),e&2){let t=i.$implicit;c(5),s(t.nome_amostra==null?null:t.nome_amostra.toUpperCase()),c(4),s(t.data_amostra),c(4),P(" ",t.ensaios_solicitados==null?null:t.ensaios_solicitados.replaceAll(","," | ")," ")}}var b=class e{dialogRef=C(ut);data=C(ft);exibir=A(!1);expand(){this.exibir.set(!this.exibir())}ngOnInit(){}getAmostrasValues(i){return Object.values(i)}closeDialog(){this.dialogRef.close()}dialog=C(x);openDialog(){this.data.data_recepcao=new Date().toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric"}),this.dialog.open(ht,{width:"400px",data:this.data}).afterClosed().subscribe(t=>{t&&this.dialogRef.close(!0)})}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=D({type:e,selectors:[["app-detalhar-ordem-de-servico"]],decls:55,vars:8,consts:[[1,"close-bar"],[3,"click"],["src","/web-app-lbf/img/logo_SFND - 200px.png","alt","Logotipo Laborat\xF3rio F\xEDsico"],[1,"os-number"],[1,"divisor"],[1,"dados-solicitante"],[1,"itens"],[1,"dados-amostras"],[1,"dados-amostras","observacao"],[1,"btn-iniciar-analise"],["mat-raised-button","",3,"click"]],template:function(t,r){t&1&&(n(0,"mat-card")(1,"div",0)(2,"mat-icon",1),g("click",function(){return r.closeDialog()}),a(3,"close"),o()(),n(4,"mat-card-header"),_(5,"img",2),n(6,"h2"),a(7,"Detalhes"),o(),n(8,"div",3),a(9," Ordem de Servi\xE7o "),n(10,"span"),a(11),_(12,"br"),a(13),o()()(),n(14,"mat-card-content")(15,"div",4),_(16,"div"),n(17,"h3"),a(18,"Dados do solicitante"),o(),_(19,"div"),o(),n(20,"div",5)(21,"p"),a(22," Nome: "),n(23,"span"),a(24),o()(),n(25,"p"),a(26," Fun\xE7\xE3o: "),n(27,"span"),a(28),o()(),n(29,"p"),a(30," \xC1rea: "),n(31,"span"),a(32),o()(),n(33,"p"),a(34," E-mail: "),n(35,"span"),a(36),o()(),n(37,"p"),p(38,Dt,4,4),o()(),n(39,"div",4),_(40,"div"),o(),n(41,"div",6)(42,"h3"),a(43,"Itens:"),o()(),R(44,St,14,3,"div",7,V),n(46,"div",8)(47,"p"),a(48,"Observa\xE7\xE3o:"),o(),n(49,"div")(50,"span"),a(51),o()()(),n(52,"div",9)(53,"button",10),g("click",function(){return r.openDialog()}),a(54,"Iniciar An\xE1lise"),o()()()()),t&2&&(c(11),P(" ",r.data.numeroOs," "),c(2),P(" ",r.data.data_solicitacao,""),c(11),s(r.data.solicitante==null?null:r.data.solicitante.name),c(4),s(r.data.solicitante==null?null:r.data.solicitante.funcao),c(4),s(r.data.solicitante==null?null:r.data.solicitante.area),c(4),s(r.data.solicitante==null?null:r.data.solicitante.email),c(2),G(r.data.solicitante!=null&&r.data.solicitante.phone?38:-1),c(6),F(r.getAmostrasValues(r.data.amostras)),c(7),s(r.data.observacao))},dependencies:[Y,J,K,X,Z,Ot,L],styles:[".mat-mdc-dialog-surface{border-radius:5px!important;overflow:hidden;overflow-y:scroll}  .mat-mdc-dialog-surface::-webkit-scrollbar{display:none}  .mat-mdc-dialog-surface{scrollbar-width:none;-ms-overflow-style:none}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]{display:flex;width:100%;border-radius:5px}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .close-bar[_ngcontent-%COMP%]{position:sticky;top:0;z-index:10;width:100%;max-width:100%;height:25px;background:var(--red-to-pink-to-purple-horizontal-gradient);padding:5px;display:flex;align-items:center;justify-content:end}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .close-bar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:5px;color:#fff;transition:color .1s ease-in-out}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .close-bar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover{cursor:pointer;color:red}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:row;align-items:center;justify-content:space-between;text-align:center;color:var(--gray-700);background:var(--ligth-white-gradient);border-radius:5px}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:auto}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.5rem}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   .os-number[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;align-items:center;justify-content:center;margin-left:auto;font-weight:500}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   .os-number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{border-top:1px solid var(--gray-400);color:var(--blue-10)}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{color:var(--gray-700);font-weight:500;display:flex;flex-direction:column}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--red-10)}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--blue-10)}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-transform:uppercase;font-size:1rem;color:var(--gray-400)}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .divisor[_ngcontent-%COMP%]{margin-top:10px;display:flex;align-items:center;justify-content:baseline;font-size:12px;gap:20px;width:100%}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .divisor[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{flex-grow:1;height:2px;opacity:.8;background:var(--red-10)}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .itens[_ngcontent-%COMP%]{width:100%;display:flex;text-align:center}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .dados-solicitante[_ngcontent-%COMP%]{margin:10px;display:flex;text-align:center;justify-content:space-between;gap:20px}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .dados-solicitante[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{border-bottom:1px solid var(--gray-400);color:var(--blue-10);margin:5px}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .dados-amostras[_ngcontent-%COMP%]{padding:10px;margin:10px 0;display:flex;flex-direction:column;border:1px solid var(--gray-400);box-shadow:#0000000d 0 1px 2px}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .dados-amostras[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between;align-items:center;gap:20px}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .observacao[_ngcontent-%COMP%]{background:var(--gray-100)}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .btn-iniciar-analise[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin:10px 0}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .btn-iniciar-analise[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-radius:5px}"]})};var wt=()=>[B,Q,U,tt,nt,rt,at,et,ct,it,ot,lt,st,dt,S,_t,w,import("./chunk-OYM2J3YL.js").then(e=>e.MatCard)],bt=()=>[10,30,50];function yt(e,i){e&1&&(n(0,"th",18),a(1,"Num.OS"),o())}function Et(e,i){if(e&1){let t=O();n(0,"td",19),g("click",function(){let l=u(t).$implicit,d=m(2);return f(d.openOsDetails(l))}),a(1),o()}if(e&2){let t=i.$implicit;c(),s(t.numeroOs)}}function It(e,i){e&1&&(n(0,"th",18),a(1,"Data da solicitacao"),o())}function zt(e,i){if(e&1){let t=O();n(0,"td",19),g("click",function(){let l=u(t).$implicit,d=m(2);return f(d.openOsDetails(l))}),a(1),o()}if(e&2){let t=i.$implicit;c(),s(t.data_solicitacao)}}function At(e,i){e&1&&(n(0,"th",18),a(1,"Solicitante"),o())}function kt(e,i){if(e&1){let t=O();n(0,"td",19),g("click",function(){let l=u(t).$implicit,d=m(2);return f(d.openOsDetails(l))}),a(1),o()}if(e&2){let t=i.$implicit;c(),s(t.solicitante.name)}}function Tt(e,i){e&1&&(n(0,"th",18),a(1,"\xC1rea"),o())}function Gt(e,i){if(e&1){let t=O();n(0,"td",19),g("click",function(){let l=u(t).$implicit,d=m(2);return f(d.openOsDetails(l))}),a(1),o()}if(e&2){let t=i.$implicit;c(),s(t.solicitante.area)}}function Vt(e,i){e&1&&(n(0,"th",18),a(1,"Status"),o())}function Rt(e,i){if(e&1){let t=O();n(0,"td",20),g("click",function(){let l=u(t).$implicit,d=m(2);return f(d.openOsDetails(l))}),a(1),o()}if(e&2){let t=i.$implicit;c(),s(t.status)}}function Ft(e,i){e&1&&_(0,"tr",21)}function Nt(e,i){e&1&&_(0,"tr",22)}function jt(e,i){if(e&1&&(n(0,"tr",23)(1,"td",24),a(2),o()()),e&2){m();let t=N(6);c(2),P(" N\xE3o existem itens que corresponda ao filtro: ",t.value," ")}}function Ht(e,i){if(e&1){let t=O();n(0,"mat-card")(1,"div",1)(2,"mat-form-field",2)(3,"mat-label"),a(4,"Filtro"),o(),n(5,"input",3,0),g("keyup",function(l){u(t);let d=m();return f(d.applyFilter(l))}),o()(),n(7,"div",4)(8,"table",5),M(9,6),p(10,yt,2,0,"th",7)(11,Et,2,1,"td",8),h(),M(12,9),p(13,It,2,0,"th",7)(14,zt,2,1,"td",8),h(),M(15,10),p(16,At,2,0,"th",7)(17,kt,2,1,"td",8),h(),M(18,11),p(19,Tt,2,0,"th",7)(20,Gt,2,1,"td",8),h(),M(21,12),p(22,Vt,2,0,"th",7)(23,Rt,2,1,"td",13),h(),p(24,Ft,1,0,"tr",14)(25,Nt,1,0,"tr",15)(26,jt,3,1,"tr",16),o(),_(27,"mat-paginator",17),o()()()}if(e&2){let t=m();c(8),v("dataSource",t.dataSource),c(16),v("matHeaderRowDef",t.displayedColumns),c(),v("matRowDefColumns",t.displayedColumns),c(2),v("pageSizeOptions",j(4,bt))}}var Pt=class e{constructor(i){this.MatDialog=i}#t=C(x);#e=C(Mt);listOs=[];dataSource=new pt(this.listOs);displayedColumns=["numeroOs","data_solicitacao","solicitante","solicitante.area","status"];paginator;sort;ngOnInit(){this.listarOS()}listarOS(){this.#e.httpListarTodasOrdensDeServico().subscribe(i=>{i&&i.ordemsDeServico?(this.listOs=i.ordemsDeServico.filter(t=>t.status=="Autorizada"),this.dataSource.data=this.listOs):console.error("Nenhuma ordem de servi\xE7o encontrada na resposta")})}ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}applyFilter(i){let t=i.target.value;this.dataSource.filter=t.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}openOsDetails(i){this.#t.open(b,{minWidth:"60lvw",maxHeight:"90lvh",data:i}).afterClosed().subscribe(r=>{r&&this.listarOS()})}static \u0275fac=function(t){return new(t||e)(z(x))};static \u0275cmp=D({type:e,selectors:[["app-gerenciar-os-autorizadas"]],viewQuery:function(t,r){if(t&1&&(y(w,5),y(S,5)),t&2){let l;E(l=I())&&(r.paginator=l.first),E(l=I())&&(r.sort=l.first)}},decls:3,vars:0,consts:[["input",""],[1,"tabela-container"],[1,"filter-field"],["matInput","","placeholder","",3,"keyup"],[1,"mat-elevation-z8","table-wrapper"],["mat-table","","matSort","",1,"t-table",3,"dataSource"],["matColumnDef","numeroOs"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",3,"click",4,"matCellDef"],["matColumnDef","data_solicitacao"],["matColumnDef","solicitante"],["matColumnDef","solicitante.area"],["matColumnDef","status"],["mat-cell","","class","green",3,"click",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["aria-label","Selecione a p\xE1gina de usu\xE1rios",1,"sticky-paginator",3,"pageSizeOptions"],["mat-header-cell","","mat-sort-header",""],["mat-cell","",3,"click"],["mat-cell","",1,"green",3,"click"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(t,r){t&1&&(p(0,Ht,28,5),k(1,0,wt),T())},dependencies:[q,W,mt,gt,Ct],styles:["[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]{display:flex;max-height:100%}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .tabela-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-grow:1;overflow:hidden}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .tabela-container[_ngcontent-%COMP%]   .filter-field[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .tabela-container[_ngcontent-%COMP%]   .filter-field[_ngcontent-%COMP%]   .mat-mdc-form-field-infix[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .tabela-container[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%]{flex-grow:1;overflow-y:auto;position:relative}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .tabela-container[_ngcontent-%COMP%]   .t-table[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .tabela-container[_ngcontent-%COMP%]   .t-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .tabela-container[_ngcontent-%COMP%]   .t-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:hover{cursor:pointer}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .tabela-container[_ngcontent-%COMP%]   .t-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover > td[_ngcontent-%COMP%]{background:var(--gray-100)}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .tabela-container[_ngcontent-%COMP%]   .sticky-paginator[_ngcontent-%COMP%]{position:sticky;bottom:0;z-index:2}"]})};export{Pt as GerenciarOsAutorizadasComponent};
