import { Component, OnInit } from '@angular/core';
import { ProdutoService } from './../../service/produto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public produtoList: any[] = [];

  constructor(private produtoService : ProdutoService) { }

  ngOnInit(): void {
    this.recuperarProduto();
  }

  public recuperarProduto() {
    this.produtoService.recuperarProduto().subscribe((produto: { produtoList: any[] }) => {
      this.produtoList = produto.produtoList;
    });
  }

  public selecionarProduto(codigo: Number) {
    this.produtoService.selecionarProduto(codigo);
  }

 }
