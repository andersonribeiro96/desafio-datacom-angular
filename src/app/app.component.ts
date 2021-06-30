import {Component, OnInit} from '@angular/core';
import {AppDesafioService} from "./app-desafio.service";


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
    return this.service.buscarFeature(this.feature).subscribe(value => {
      this.featureSucesso(value)
    }, error => {
      this.featureError(error.error);
    })
  };

  featureSucesso(value: string){
    this.sucesso = value;
    this.error = null;
  }

  featureError(value: string){
    this.error = value;
    this.sucesso = null;
  }

  disableButton(){
    return this.feature.length == 0;
  }



}
