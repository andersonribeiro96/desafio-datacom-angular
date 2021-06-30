import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AppDesafioService {

  constructor(private http:HttpClient) { }

  buscarNome() : Observable<string>{
    return this.http.get<string>(environment.URL_BASE.concat(environment.URL_NOME), {responseType: 'text' as 'json'});
  }

  buscarVersao() : Observable<string>{
    return this.http.get<string>(environment.URL_BASE.concat(environment.URL_VERSAO), {responseType: 'text' as 'json'})
  }

  buscarFeature(feature:string) : Observable<string>{
    return this.http.get<string>(environment.URL_BASE.concat(environment.URL_FEATURE, `${feature}`), {responseType: 'text' as 'json'});
  }


}
