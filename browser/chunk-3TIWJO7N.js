import{a as n}from"./chunk-T2AQUXFH.js";import{a,b as m}from"./chunk-FD6YJ6N6.js";import{Q as i,W as o,_ as c,ea as l,kb as s}from"./chunk-YR66D3FA.js";var p=class d{#e=l(m);#a=s(`${n.api_url}/ordemdeservico/criar`);#n=s(`${n.api_url}/ordemdeservico/listar`);#d=s(`${n.api_url}/ordemdeservico/listar/todas`);#c=s(`${n.api_url}/ordemdeservico/os-number`);#l=s(`${n.api_url}/ordemdeservico/editar`);#m=s(`${n.api_url}/ordemdeservico/deletar`);#s=s(null);getOrdemDeServico=this.#s.asReadonly();httpCriarOrdemDeServico(e,r){let t=new a().set("Authorization",`Bearer ${sessionStorage.getItem("auth-token")}`);return this.#e.post(this.#a(),{amostras:e,observacao:r},{headers:t}).pipe(i(),o(O=>{this.#s.set(O)}))}#t=s(null);getListarOrdemDeServicoByUserId=this.#t.asReadonly();httpListarOrdemDeServicoByUserId(){let e=new a().set("Authorization",`Bearer ${sessionStorage.getItem("auth-token")}`);return this.#e.get(`${this.#n()}`,{headers:e}).pipe(i(),o(r=>{this.#t.set(r)}))}#i=s(null);getListarTodasOrdensDeServico=this.#i.asReadonly();httpListarTodasOrdensDeServico(){let e=new a().set("Authorization",`Bearer ${sessionStorage.getItem("auth-token")}`);return this.#e.get(`${this.#d()}`,{headers:e}).pipe(i(),o(r=>{this.#i.set(r)}))}#r=s(null);getEditarOrdensDeServico=this.#r.asReadonly();httpEditarOrdemDeServico(e){let r=new a().set("Authorization",`Bearer ${sessionStorage.getItem("auth-token")}`);return this.#e.patch(`${this.#l()}/${e._id}`,{ordemDeServico:e},{headers:r}).pipe(i(),o(t=>{this.#r.set(t)}))}#p=s(null);getExcluirEditarOrdensDeServico=this.#p.asReadonly();httpExcluirOrdemDeServico(e){let r=new a().set("Authorization",`Bearer ${sessionStorage.getItem("auth-token")}`);return this.#e.delete(`${this.#m()}/${e}`,{headers:r}).pipe(i(),o(t=>{this.#r.set(t)}))}#o=s(null);getOrdemDeServicoByOsNumber=this.#o.asReadonly();httpOrdemDeServicoByOsNumber(e){let r=new a().set("Authorization",`Bearer ${sessionStorage.getItem("auth-token")}`);return this.#e.get(`${this.#c()}/${e}`,{headers:r}).pipe(i(),o(t=>{this.#o.set(t)}))}constructor(){}static \u0275fac=function(r){return new(r||d)};static \u0275prov=c({token:d,factory:d.\u0275fac,providedIn:"root"})};export{p as a};
