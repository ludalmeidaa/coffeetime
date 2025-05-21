import { Component, NgModule, TemplateRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, ViewportScroller } from '@angular/common';
import { AppComponent } from '../app.component';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, RouterModule } from '@angular/router';

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
  imports: [CommonModule, RouterModule],
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss']
})


export class CardapioComponent {

  constructor(public dialog: MatDialog, private route: ActivatedRoute, private scroller: ViewportScroller) {}

  ngAfterViewInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const el = document.getElementById(fragment);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    });
  }

  openModal(): void {
    this.dialog.open(ModalComponent, {
      data: { message: 'Exemplo de modal com MatDialog!' }
    });
  }

  categorias: string[] = ['BOLOS', 'PÃES', 'SALGADOS', 'DOCES E SOBREMESAS', 'BEBIDAS QUENTES', 'BEBIDAS FRIAS', 'AÇAÍ'];
  categoriaSelecionada: string = 'BOLOS';

  cardapioItem: CardapioItem[] = [

    /////// BOLOS
    { nome: 'Bolo de Chocolate', preco: '1000', descricao: "Bolo com cobertura de chocolate.", categoria: 'BOLOS', imagemItem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcLMRe1prUYZXhIiue1OGETagILTJ_5mLnDQ&s"},
    { nome: 'Bolo de Chocolate', preco: '1000', descricao: "Bolo com cobertura de chocolate.", categoria: 'BOLOS', imagemItem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcLMRe1prUYZXhIiue1OGETagILTJ_5mLnDQ&s"},
    { nome: 'Bolo de Chocolate', preco: '1000', descricao: "Bolo com cobertura de chocolate.", categoria: 'BOLOS', imagemItem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcLMRe1prUYZXhIiue1OGETagILTJ_5mLnDQ&s"},
    { nome: 'Bolo de Chocolate', preco: '1000', descricao: "Bolo com cobertura de chocolate.", categoria: 'BOLOS', imagemItem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcLMRe1prUYZXhIiue1OGETagILTJ_5mLnDQ&s"},


    /////// SALGADOS
    { nome: 'Bolo de Chocolate', preco: '1000', descricao: "Bolo com cobertura de chocolate.", categoria: 'SALGADOS', imagemItem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcLMRe1prUYZXhIiue1OGETagILTJ_5mLnDQ&s"},
    { nome: 'Bolo de Chocolate', preco: '1000', descricao: "Bolo com cobertura de chocolate.", categoria: 'SALGADOS', imagemItem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcLMRe1prUYZXhIiue1OGETagILTJ_5mLnDQ&s"},
    { nome: 'Bolo de Chocolate', preco: '1000', descricao: "Bolo com cobertura de chocolate.", categoria: 'SALGADOS', imagemItem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcLMRe1prUYZXhIiue1OGETagILTJ_5mLnDQ&s"},
    { nome: 'Bolo de Chocolate', preco: '1000', descricao: "Bolo com cobertura de chocolate.", categoria: 'SALGADOS', imagemItem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcLMRe1prUYZXhIiue1OGETagILTJ_5mLnDQ&s"},

    /////// PÃES
    { nome: 'Misto quente no pão de forma', preco: '10,25', descricao: "Clássico misto quente no pão de forma, com presunto e queijo, uma delícia para qualquer hora.", categoria: 'PÃES', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411191449_301I_i.jpg"},
    { nome: 'Misto quente no pão francês', preco: '11,50', descricao: "Misto quente no pão francês, com presunto e queijo, pão selado na manteiga, crocante e saboroso.", categoria: 'PÃES', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411191448_B8OV_i.jpg"},
    { nome: 'Bauru no pão francês', preco: '14,20', descricao: "Bauru no pão francês selado na manteiga, com presunto, queijo, tomate e orégano, uma explosão de sabores.", categoria: 'PÃES', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202501201703_F5P1_i.jpg"},
    { nome: 'Combo: X salada com batata frita', preco: '37,50', descricao: "X-Salada no pão brioche com queijo, alface, tomate e batata frita crocante. Sabor e textura em um combo delicioso.", categoria: 'PÃES', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202501201717_TYV4_i.jpg"},
    { nome: 'Frango com queijo branco', preco: '16,80', descricao: "Lanche natural de frango com queijo branco, acompanhado de maionese, alface e tomate, leve e saboroso.", categoria: 'PÃES', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411121107_IU65_i.jpg"},
    { nome: 'Presunto com mussarela', preco: '10,25', descricao: "Clássico misto quente no pão de forma, com presunto e queijo, uma delícia para qualquer hora.", categoria: 'PÃES', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411191449_301I_i.jpg"},
    { nome: 'Peito de peru com queijo branco', preco: '16,80', descricao: "Lanche natural de presunto com mussarela, acompanhado de maionese, alface e tomate, perfeito para um lache.", categoria: 'PÃES', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202501201723_YO0V_i.jpg"},
    { nome: 'Atum com queijo branco', preco: '16,80', descricao: "Lanche natural de atum com queijo branco, acompanhado de maionese, alface e tomate, uma opção leve e nutritiva.", categoria: 'PÃES', imagemItem: "https://minhasreceitinhas.com.br/wp-content/uploads/2022/09/Sanduiche-de-atum-2.png"},


    /////// DOCES E SOBREMESAS
    { nome: 'Mini pudim', preco: '9,10', descricao: "Saboreie nosso pudim, uma sobremesa clássica com textura aveludada e sabor irresistível, ideal para qualquer ocasião.", categoria: 'DOCES E SOBREMESAS', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181648_3T3A_i.jpg"},
    { nome: 'Tapioca Coco c/ leite condensado', preco: '9,50', descricao: "Bolo com cobertura de chocolate.", categoria: 'DOCES E SOBREMESAS', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181630_J4X2_i.jpg"},
    { nome: 'Tapioca banana c/ leite condensado e canela', preco: '9,50', descricao: "Bolo com cobertura de chocolate.", categoria: 'DOCES E SOBREMESAS', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181630_J4X2_i.jpg"},
    { nome: 'Tapioca Prestigio', preco: '12,00', descricao: "Bolo com cobertura de chocolate.", categoria: 'DOCES E SOBREMESAS', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181630_J4X2_i.jpg"},
    { nome: 'Torta banofee', preco: '12,00', descricao: "Bolo com cobertura de chocolate.", categoria: 'DOCES E SOBREMESAS', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181630_J4X2_i.jpg"},
    { nome: 'Torta morangonofee', preco: '12,00', descricao: "Bolo com cobertura de chocolate.", categoria: 'DOCES E SOBREMESAS', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181630_J4X2_i.jpg"},
    { nome: 'Sonho', preco: '5,00', descricao: "Bolo com cobertura de chocolate.", categoria: 'DOCES E SOBREMESAS', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181630_J4X2_i.jpg"},
    { nome: 'Copo da felicidade', preco: '12,00', descricao: "Bolo com cobertura de chocolate.", categoria: 'DOCES E SOBREMESAS', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181630_J4X2_i.jpg"},


    /////// BEBIDAS QUENTES
    { nome: 'Café expresso pequeno', preco: '6,90', descricao: "110 mls de um delicioso café expresso fresquinho.", categoria: 'BEBIDAS QUENTES', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181621_W808_i.jpg"},
    { nome: 'Café expresso grande', preco: '6,90', descricao: "110 mls de um delicioso café expresso fresquinho.", categoria: 'BEBIDAS QUENTES', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181621_W808_i.jpg"},
    { nome: 'Café coado pequeno', preco: '3,90', descricao: "110 mls de um delicioso café coado fresquinho.", categoria: 'BEBIDAS QUENTES', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181619_V218_i.jpg"},
    { nome: 'Café coado grande', preco: '5,90', descricao: "200 mls de um delicioso café coado fresquinho", categoria: 'BEBIDAS QUENTES', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181618_4JY4_i.jpg"},
    { nome: 'Café cremoso', preco: '10,40', descricao: "200 mls de um delicioso café cremoso.", categoria: 'BEBIDAS QUENTES', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181617_JT14_i.jpg"},
    { nome: 'Café c/ leite', preco: '6,50', descricao: "200 mls de um delicioso café c/ leite.", categoria: 'BEBIDAS QUENTES', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181615_1RB5_i.jpg"},
    { nome: 'Café expresso c/ leite', preco: '10,40', descricao: "200 mls de um delicioso café expresso c/ leite.", categoria: 'BEBIDAS QUENTES', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181614_D48X_i.jpg"},
    { nome: 'Café cremoso', preco: '10,40', descricao: "200 mls de um delicioso café cremoso.", categoria: 'BEBIDAS QUENTES', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181617_JT14_i.jpg"},



    /////// BEBIDAS FRIAS
    { nome: 'Bolo de Chocolate', preco: '1000', descricao: "Bolo com cobertura de chocolate.", categoria: 'BEBIDAS FRIAS', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181630_J4X2_i.jpg"},
    { nome: 'Bolo de Chocolate', preco: '1000', descricao: "Bolo com cobertura de chocolate.", categoria: 'BEBIDAS FRIAS', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181630_J4X2_i.jpg"},
    { nome: 'Bolo de Chocolate', preco: '1000', descricao: "Bolo com cobertura de chocolate.", categoria: 'BEBIDAS FRIAS', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181630_J4X2_i.jpg"},
    { nome: 'Bolo de Chocolate', preco: '1000', descricao: "Bolo com cobertura de chocolate.", categoria: 'BEBIDAS FRIAS', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181630_J4X2_i.jpg"},

    /////// AÇAÍ
    { nome: 'Bolo de Chocolate', preco: '1000', descricao: "Bolo com cobertura de chocolate.", categoria: 'AÇAÍ', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181630_J4X2_i.jpg"},
    { nome: 'Bolo de Chocolate', preco: '1000', descricao: "Bolo com cobertura de chocolate.", categoria: 'AÇAÍ', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181630_J4X2_i.jpg"},
    { nome: 'Bolo de Chocolate', preco: '1000', descricao: "Bolo com cobertura de chocolate.", categoria: 'AÇAÍ', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181630_J4X2_i.jpg"},
    { nome: 'Bolo de Chocolate', preco: '1000', descricao: "Bolo com cobertura de chocolate.", categoria: 'AÇAÍ', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181630_J4X2_i.jpg"},
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
