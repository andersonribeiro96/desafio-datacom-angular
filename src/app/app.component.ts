import {Component, OnInit} from '@angular/core';
import {AppDesafioService} from "./app-desafio.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: 'app-desafio.component.html',
  styleUrls:['app-desafio.component.css']
})
export class AppComponent implements OnInit {

  nome : string = '';
  versao : string = '';
  feature : string = '';
  sucesso : any;
  error : any;

  constructor(private service: AppDesafioService) {
    this.buscarNome();
    this.buscarVersao();
  }


  ngOnInit(): void {

  }

  buscarNome() {
    return this.service.buscarNome().subscribe(value => this.nome = value);
  }

  buscarVersao(){
    return this.service.buscarVersao().subscribe(value => this.versao = value);
  }

  buscarFeature(){
    return this.service.buscarFeature(this.feature).subscribe(value => this.sucesso = value, error => this.error = error.error);
  }




}
