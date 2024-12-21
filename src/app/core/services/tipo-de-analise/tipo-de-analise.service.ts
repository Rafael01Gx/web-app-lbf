import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ITipoDeAnaliseResponse } from '../../../shared/interfaces/ITipoDeAnalise.interface';
import { Observable, shareReplay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoDeAnaliseService {
  #http = inject(HttpClient);
  #criarTipoDeAnaliseUrl = signal(`${environment.api_url}/analise/criar`);
  #editarTipoDeAnaliseUrl = signal(`${environment.api_url}/analise/editar`);
  #listarTipoDeAnaliseUrl = signal(`${environment.api_url}/analise/listar`);
  #excluirTipoDeAnaliseUrl = signal(`${environment.api_url}/analise/deletar`);

  
  #setTipoDeAnalise = signal<ITipoDeAnaliseResponse| null>(null);
  public getTipoDeAnalise = this.#setTipoDeAnalise.asReadonly();

  public httpCriarTipoDeAnalise(tipo:string,classe:string): Observable<ITipoDeAnaliseResponse> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${sessionStorage.getItem('auth-token')}`);
    return this.#http.post<ITipoDeAnaliseResponse>(this.#criarTipoDeAnaliseUrl(),{tipo,classe} ,{ headers }).pipe(
      shareReplay(),
      tap((res) => {
        this.#setTipoDeAnalise.set(res);
      })
    );   
  }

  #setListarTipoDeAnalise = signal<ITipoDeAnaliseResponse| null>(null);
  public getListarTipoDeAnalise = this.#setListarTipoDeAnalise.asReadonly();

  public httpListarTipoDeAnalise(): Observable<ITipoDeAnaliseResponse> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${sessionStorage.getItem('auth-token')}`);
    return this.#http.get<ITipoDeAnaliseResponse>(this.#listarTipoDeAnaliseUrl(),{ headers }).pipe(
      shareReplay(),
      tap((res) => {
        this.#setListarTipoDeAnalise.set(res);
      })
    );   
  }

  #setEditarTipoDeAnalise = signal<ITipoDeAnaliseResponse| null>(null);
  public getEditarTipoDeAnalise = this.#setEditarTipoDeAnalise.asReadonly();

  public httpEditarTipoDeAnalise(id: string,tipo:string,classe:string): Observable<ITipoDeAnaliseResponse> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${sessionStorage.getItem('auth-token')}`);
    return this.#http.patch<ITipoDeAnaliseResponse>(`${this.#editarTipoDeAnaliseUrl()}/${id}`,{tipo,classe} ,{ headers }).pipe(
      shareReplay(),
      tap((res) => {
        this.#setEditarTipoDeAnalise.set(res);
      })
    );   
  }
  

  #setDeletarTipoDeAnalise = signal<ITipoDeAnaliseResponse| null>(null);
  public getDeletarTipoDeAnalise = this.#setDeletarTipoDeAnalise.asReadonly();

  public httpDeletarTipoDeAnalise(id:string): Observable<ITipoDeAnaliseResponse> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${sessionStorage.getItem('auth-token')}`);
    return this.#http.delete<ITipoDeAnaliseResponse>(`${this.#excluirTipoDeAnaliseUrl()}/${id}`,{ headers }).pipe(
      shareReplay(),
      tap((res) => {
        this.#setDeletarTipoDeAnalise.set(res);
      })
    );   
  }
  
 


  constructor() {}
}
