import{a as i,b as A}from"./chunk-FD6YJ6N6.js";import{Q as a,W as o,_ as p,ea as u,kb as e}from"./chunk-YR66D3FA.js";var n={api_url:"https://appweblaboratorio-backend.onrender.com"};var h=class l{#s=u(A);#n=e(`${n.api_url}/amostras/editar/`);#l=e(`${n.api_url}/amostras/listar-all`);#m=e(`${n.api_url}/amostras/listar-all-filter`);#p=e(`${n.api_url}/amostras/listar`);#u=e(`${n.api_url}/amostras/listar/listar-by-os`);#A=e(`${n.api_url}/amostras/deletar`);#t=e(null);getListarAmostra=this.#t.asReadonly();httpListarAmostra(){let s=new i().set("Authorization",`Bearer ${sessionStorage.getItem("auth-token")}`);return this.#s.get(this.#p(),{headers:s}).pipe(a(),o(t=>{this.#t.set(t)}))}#e=e(null);getListarTodasAsAmostras=this.#e.asReadonly();httpListarTodasAsAmostras(){let s=new i().set("Authorization",`Bearer ${sessionStorage.getItem("auth-token")}`);return this.#s.get(this.#l(),{headers:s}).pipe(a(),o(t=>{this.#e.set(t)}))}#r=e(null);getListarAmostrasByStatus=this.#r.asReadonly();httpListarAmostrasByStatus(s){let t=new i().set("Authorization",`Bearer ${sessionStorage.getItem("auth-token")}`);return this.#s.get(`${this.#m()}/${s}`,{headers:t}).pipe(a(),o(r=>{this.#r.set(r)}))}#a=e(null);getListarAmostraByOrdemDeServico=this.#a.asReadonly();httpListarAmostraByOrdemDeServico(s){let t=new i().set("Authorization",`Bearer ${sessionStorage.getItem("auth-token")}`);return this.#s.get(`${this.#u()}/${s}`,{headers:t}).pipe(a(),o(r=>{this.#a.set(r)}))}#o=e(null);getEditarAmostra=this.#o.asReadonly();httpEditarAmostra(s,t){let r=new i().set("Authorization",`Bearer ${sessionStorage.getItem("auth-token")}`);return this.#s.patch(`${this.#n()}${s}`,{amostra:t},{headers:r}).pipe(a(),o(m=>{this.#o.set(m)}))}#i=e(null);getDeletarAmostra=this.#i.asReadonly();httpDeletarAmostra(s){let t=new i().set("Authorization",`Bearer ${sessionStorage.getItem("auth-token")}`);return this.#s.delete(`${this.#A()}/${s}`,{headers:t}).pipe(a(),o(r=>{this.#i.set(r)}))}calcularProgresso(s){let t=s.ensaios_solicitados?.split(",").length||0,r=s.resultados?Object.keys(s.resultados).length:0;return t>0?r/t*100:0}constructor(){}static \u0275fac=function(t){return new(t||l)};static \u0275prov=p({token:l,factory:l.\u0275fac,providedIn:"root"})};export{n as a,h as b};