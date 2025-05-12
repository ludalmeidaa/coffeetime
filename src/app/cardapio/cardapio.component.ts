import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';

interface CardapioItem {
  nome: string;
  preco: string;
  descricao: string;
  categoria: string,
  imagemItem: string;
}


@Component({
  selector: 'app-cardapio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss']
})


export class CardapioComponent {

  categorias: string[] = ['BOLOS', 'SALGADOS', 'SALGADOS GRANDES', 'DOCES', 'SOBREMESAS', 'SOBREMESAS INDIVIDUAIS'];
  categoriaSelecionada: string = 'BOLOS';

  cardapioItem: CardapioItem[] = [

    /////// BOLOS
    { nome: 'Bolo de Chocolate', preco: '1000', descricao: "Bolo com cobertura de chocolate.", categoria: 'BOLOS', imagemItem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcLMRe1prUYZXhIiue1OGETagILTJ_5mLnDQ&s"},
    { nome: 'Bolo de Chocolate', preco: '1000', descricao: "Bolo com cobertura de chocolate.", categoria: 'BOLOS', imagemItem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcLMRe1prUYZXhIiue1OGETagILTJ_5mLnDQ&s"},
    { nome: 'Bolo de Chocolate', preco: '1000', descricao: "Bolo com cobertura de chocolate.", categoria: 'BOLOS', imagemItem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcLMRe1prUYZXhIiue1OGETagILTJ_5mLnDQ&s"},
    { nome: 'Bolo de Chocolate', preco: '1000', descricao: "Bolo com cobertura de chocolate.", categoria: 'BOLOS', imagemItem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcLMRe1prUYZXhIiue1OGETagILTJ_5mLnDQ&s"},


    /////// SALGADOS
    { nome: 'Bolo de Chocolate', preco: '1000', descricao: "Bolo com cobertura de chocolate.", categoria: 'SALGADOS', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181630_J4X2_i.jpg"},
    { nome: 'Bolo de Chocolate', preco: '1000', descricao: "Bolo com cobertura de chocolate.", categoria: 'SALGADOS', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181630_J4X2_i.jpg"},
    { nome: 'Bolo de Chocolate', preco: '1000', descricao: "Bolo com cobertura de chocolate.", categoria: 'SALGADOS', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181630_J4X2_i.jpg"},
    { nome: 'Bolo de Chocolate', preco: '1000', descricao: "Bolo com cobertura de chocolate.", categoria: 'SALGADOS', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181630_J4X2_i.jpg"},

    /////// SALGADOS GRANDES
    { nome: 'Bolo de Chocolate', preco: '1000', descricao: "Bolo com cobertura de chocolate.", categoria: 'SALGADOS GRANDES', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181630_J4X2_i.jpg"},
    { nome: 'Bolo de Chocolate', preco: '1000', descricao: "Bolo com cobertura de chocolate.", categoria: 'SALGADOS GRANDES', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181630_J4X2_i.jpg"},
    { nome: 'Bolo de Chocolate', preco: '1000', descricao: "Bolo com cobertura de chocolate.", categoria: 'SALGADOS GRANDES', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181630_J4X2_i.jpg"},
    { nome: 'Bolo de Chocolate', preco: '1000', descricao: "Bolo com cobertura de chocolate.", categoria: 'SALGADOS GRANDES', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181630_J4X2_i.jpg"},


    /////// DOCES
    { nome: 'Bolo de Chocolate', preco: '1000', descricao: "Bolo com cobertura de chocolate.", categoria: 'DOCES', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181630_J4X2_i.jpg"},
    { nome: 'Bolo de Chocolate', preco: '1000', descricao: "Bolo com cobertura de chocolate.", categoria: 'DOCES', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181630_J4X2_i.jpg"},
    { nome: 'Bolo de Chocolate', preco: '1000', descricao: "Bolo com cobertura de chocolate.", categoria: 'DOCES', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181630_J4X2_i.jpg"},
    { nome: 'Bolo de Chocolate', preco: '1000', descricao: "Bolo com cobertura de chocolate.", categoria: 'DOCES', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181630_J4X2_i.jpg"},


    /////// SOBREMESAS
    { nome: 'Bolo de Chocolate', preco: '1000', descricao: "Bolo com cobertura de chocolate.", categoria: 'SOBREMESAS', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181630_J4X2_i.jpg"},
    { nome: 'Bolo de Chocolate', preco: '1000', descricao: "Bolo com cobertura de chocolate.", categoria: 'SOBREMESAS', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181630_J4X2_i.jpg"},
    { nome: 'Bolo de Chocolate', preco: '1000', descricao: "Bolo com cobertura de chocolate.", categoria: 'SOBREMESAS', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181630_J4X2_i.jpg"},
    { nome: 'Bolo de Chocolate', preco: '1000', descricao: "Bolo com cobertura de chocolate.", categoria: 'SOBREMESAS', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181630_J4X2_i.jpg"},

    /////// SOBREMESAS INDIVIDUAIS
    { nome: 'Bolo de Chocolate', preco: '1000', descricao: "Bolo com cobertura de chocolate.", categoria: 'SOBREMESAS INDIVIDUAIS', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181630_J4X2_i.jpg"},
    { nome: 'Bolo de Chocolate', preco: '1000', descricao: "Bolo com cobertura de chocolate.", categoria: 'SOBREMESAS INDIVIDUAIS', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181630_J4X2_i.jpg"},
    { nome: 'Bolo de Chocolate', preco: '1000', descricao: "Bolo com cobertura de chocolate.", categoria: 'SOBREMESAS INDIVIDUAIS', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181630_J4X2_i.jpg"},
    { nome: 'Bolo de Chocolate', preco: '1000', descricao: "Bolo com cobertura de chocolate.", categoria: 'SOBREMESAS INDIVIDUAIS', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181630_J4X2_i.jpg"},
  ];

  getItensFiltrados(): CardapioItem[] {
    return this.cardapioItem.filter(item => item.categoria === this.categoriaSelecionada);
    }

    selecionarCategoria(categoria: string): void {
      this.categoriaSelecionada = categoria;
    }
  }




@NgModule({
  declarations: [Component, CardapioComponent],
  imports: [BrowserModule, CommonModule],
  providers: [],
  bootstrap: [Component]
})

export class AppModule {}
