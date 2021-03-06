import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { environment } from './../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private URL_SERVER_API = environment.URL_SERVER_API;

  constructor(private httpClient: HttpClient, private router: Router) { }

  public recuperarProduto() {
    return this.httpClient.get(this.URL_SERVER_API.concat("produto"));
  }

  public selecionarProduto(codigo: Number) {
    return this.router.navigate(["/produto", codigo]).then();
  }

}
