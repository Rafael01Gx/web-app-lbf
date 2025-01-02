import{d as F}from"./chunk-QRFH67T7.js";import{b as E}from"./chunk-FD6YJ6N6.js";import{O as T}from"./chunk-3IDK2O2Y.js";import{e as C}from"./chunk-E2AUU6GZ.js";import{$ as U,B as L,Ba as k,F as x,J as O,Jb as B,Mb as V,Nb as Y,P,Rc as J,W as I,Ya as m,_ as D,a as A,ba as N,da as g,ea as l,fa as S,ga as H,ic as q,jc as G,l as u,m as M,p as d,rb as W,sb as $,ta as z,v as b,xb as j,ya as _}from"./chunk-YR66D3FA.js";var et=["*"],w;function nt(){if(w===void 0&&(w=null,typeof window<"u")){let i=window;i.trustedTypes!==void 0&&(w=i.trustedTypes.createPolicy("angular#components",{createHTML:a=>a}))}return w}function p(i){return nt()?.createHTML(i)||i}function K(i){return Error(`Unable to find icon with the name "${i}"`)}function ot(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function Q(i){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${i}".`)}function X(i){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${i}".`)}var c=class{url;svgText;options;svgElement;constructor(a,t,e){this.url=a,this.svgText=t,this.options=e}},R=(()=>{class i{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(t,e,n,o){this._httpClient=t,this._sanitizer=e,this._errorHandler=o,this._document=n}addSvgIcon(t,e,n){return this.addSvgIconInNamespace("",t,e,n)}addSvgIconLiteral(t,e,n){return this.addSvgIconLiteralInNamespace("",t,e,n)}addSvgIconInNamespace(t,e,n,o){return this._addSvgIconConfig(t,e,new c(n,null,o))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,e,n,o){let r=this._sanitizer.sanitize(m.HTML,n);if(!r)throw X(n);let s=p(r);return this._addSvgIconConfig(t,e,new c("",s,o))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace("",t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace("",t,e)}addSvgIconSetInNamespace(t,e,n){return this._addSvgIconSetConfig(t,new c(e,null,n))}addSvgIconSetLiteralInNamespace(t,e,n){let o=this._sanitizer.sanitize(m.HTML,e);if(!o)throw X(e);let r=p(o);return this._addSvgIconSetConfig(t,new c("",r,n))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(t){let e=this._sanitizer.sanitize(m.RESOURCE_URL,t);if(!e)throw Q(t);let n=this._cachedIconsByUrl.get(e);return n?u(y(n)):this._loadSvgIconFromConfig(new c(t,null)).pipe(I(o=>this._cachedIconsByUrl.set(e,o)),d(o=>y(o)))}getNamedSvgIcon(t,e=""){let n=Z(e,t),o=this._svgIconConfigs.get(n);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(e,t),o)return this._svgIconConfigs.set(n,o),this._getSvgFromConfig(o);let r=this._iconSetConfigs.get(e);return r?this._getSvgFromIconSetConfigs(t,r):M(K(n))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?u(y(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(d(e=>y(e)))}_getSvgFromIconSetConfigs(t,e){let n=this._extractIconWithNameFromAnySet(t,e);if(n)return u(n);let o=e.filter(r=>!r.svgText).map(r=>this._loadSvgIconSetFromConfig(r).pipe(L(s=>{let f=`Loading icon set URL: ${this._sanitizer.sanitize(m.RESOURCE_URL,r.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(f)),u(null)})));return b(o).pipe(d(()=>{let r=this._extractIconWithNameFromAnySet(t,e);if(!r)throw K(t);return r}))}_extractIconWithNameFromAnySet(t,e){for(let n=e.length-1;n>=0;n--){let o=e[n];if(o.svgText&&o.svgText.toString().indexOf(t)>-1){let r=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(r,t,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(I(e=>t.svgText=e),d(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?u(null):this._fetchIcon(t).pipe(I(e=>t.svgText=e))}_extractSvgIconFromSet(t,e,n){let o=t.querySelector(`[id="${e}"]`);if(!o)return null;let r=o.cloneNode(!0);if(r.removeAttribute("id"),r.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(r,n);if(r.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(r),n);let s=this._svgElementFromString(p("<svg></svg>"));return s.appendChild(r),this._setSvgAttributes(s,n)}_svgElementFromString(t){let e=this._document.createElement("DIV");e.innerHTML=t;let n=e.querySelector("svg");if(!n)throw Error("<svg> tag not found");return n}_toSvgElement(t){let e=this._svgElementFromString(p("<svg></svg>")),n=t.attributes;for(let o=0;o<n.length;o++){let{name:r,value:s}=n[o];r!=="id"&&e.setAttribute(r,s)}for(let o=0;o<t.childNodes.length;o++)t.childNodes[o].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[o].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),e&&e.viewBox&&t.setAttribute("viewBox",e.viewBox),t}_fetchIcon(t){let{url:e,options:n}=t,o=n?.withCredentials??!1;if(!this._httpClient)throw ot();if(e==null)throw Error(`Cannot fetch icon from URL "${e}".`);let r=this._sanitizer.sanitize(m.RESOURCE_URL,e);if(!r)throw Q(e);let s=this._inProgressUrlFetches.get(r);if(s)return s;let h=this._httpClient.get(r,{responseType:"text",withCredentials:o}).pipe(d(f=>p(f)),O(()=>this._inProgressUrlFetches.delete(r)),P());return this._inProgressUrlFetches.set(r,h),h}_addSvgIconConfig(t,e,n){return this._svgIconConfigs.set(Z(t,e),n),this}_addSvgIconSetConfig(t,e){let n=this._iconSetConfigs.get(t);return n?n.push(e):this._iconSetConfigs.set(t,[e]),this}_svgElementFromConfig(t){if(!t.svgElement){let e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}_getIconConfigFromResolvers(t,e){for(let n=0;n<this._resolvers.length;n++){let o=this._resolvers[n](e,t);if(o)return rt(o)?new c(o.url,null,o.options):new c(o,null)}}static \u0275fac=function(e){return new(e||i)(g(E,8),g(F),g(C,8),g(_))};static \u0275prov=D({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function it(i,a,t,e,n){return i||new R(a,t,n,e)}var Tt={provide:R,deps:[[new S,new H,R],[new S,E],F,_,[new S,C]],useFactory:it};function y(i){return i.cloneNode(!0)}function Z(i,a){return i+":"+a}function rt(i){return!!(i.url&&i.options)}var st=new N("MAT_ICON_DEFAULT_OPTIONS"),at=new N("mat-icon-location",{providedIn:"root",factory:ct});function ct(){let i=l(C),a=i?i.location:null;return{getPathname:()=>a?a.pathname+a.search:""}}var tt=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],lt=tt.map(i=>`[${i}]`).join(", "),ht=/^url\(['"]?#(.*?)['"]?\)$/,At=(()=>{class i{_elementRef=l(k);_iconRegistry=l(R);_location=l(at);_errorHandler=l(_);_defaultColor;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(t){let e=this._cleanupFontValue(t);e!==this._fontSet&&(this._fontSet=e,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(t){let e=this._cleanupFontValue(t);e!==this._fontIcon&&(this._fontIcon=e,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName;_svgNamespace;_previousPath;_elementsWithExternalReferences;_currentIconFetch=A.EMPTY;constructor(){let t=l(new z("aria-hidden"),{optional:!0}),e=l(st,{optional:!0});e&&(e.color&&(this.color=this._defaultColor=e.color),e.fontSet&&(this.fontSet=e.fontSet)),t||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(t){if(!t)return["",""];let e=t.split(":");switch(e.length){case 1:return["",e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let t=this._elementsWithExternalReferences;if(t&&t.size){let e=this._location.getPathname();e!==this._previousPath&&(this._previousPath=e,this._prependPathToReferences(e))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();let e=this._location.getPathname();this._previousPath=e,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(e),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){let t=this._elementRef.nativeElement,e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){let n=t.childNodes[e];(n.nodeType!==1||n.nodeName.toLowerCase()==="svg")&&n.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let t=this._elementRef.nativeElement,e=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(n=>n.length>0);this._previousFontSetClass.forEach(n=>t.classList.remove(n)),e.forEach(n=>t.classList.add(n)),this._previousFontSetClass=e,this.fontIcon!==this._previousFontIconClass&&!e.includes("mat-ligature-font")&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return typeof t=="string"?t.trim().split(" ")[0]:t}_prependPathToReferences(t){let e=this._elementsWithExternalReferences;e&&e.forEach((n,o)=>{n.forEach(r=>{o.setAttribute(r.name,`url('${t}#${r.value}')`)})})}_cacheChildrenWithExternalReferences(t){let e=t.querySelectorAll(lt),n=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<e.length;o++)tt.forEach(r=>{let s=e[o],h=s.getAttribute(r),f=h?h.match(ht):null;if(f){let v=n.get(s);v||(v=[],n.set(s,v)),v.push({name:r,value:f[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){let[e,n]=this._splitIconName(t);e&&(this._svgNamespace=e),n&&(this._svgName=n),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(n,e).pipe(x(1)).subscribe(o=>this._setSvgElement(o),o=>{let r=`Error retrieving icon ${e}:${n}! ${o.message}`;this._errorHandler.handleError(new Error(r))})}}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=W({type:i,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(e,n){e&2&&(B("data-mat-icon-type",n._usingFontIcon()?"font":"svg")("data-mat-icon-name",n._svgName||n.fontIcon)("data-mat-icon-namespace",n._svgNamespace||n.fontSet)("fontIcon",n._usingFontIcon()?n.fontIcon:null),Y(n.color?"mat-"+n.color:""),V("mat-icon-inline",n.inline)("mat-icon-no-color",n.color!=="primary"&&n.color!=="accent"&&n.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",J],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],features:[j],ngContentSelectors:et,decls:1,vars:0,template:function(e,n){e&1&&(q(),G(0))},styles:["mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color, inherit)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],encapsulation:2,changeDetection:0})}return i})(),Mt=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=$({type:i});static \u0275inj=U({imports:[T,T]})}return i})();export{K as a,ot as b,Q as c,X as d,R as e,it as f,Tt as g,st as h,at as i,ct as j,At as k,Mt as l};
