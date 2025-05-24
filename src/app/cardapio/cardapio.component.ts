import { Component, NgModule, TemplateRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, ViewportScroller } from '@angular/common';
import { AppComponent } from '../app.component';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, RouterModule } from '@angular/router';

export interface CardapioItem {
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

  openModal(item: CardapioItem): void {
    this.dialog.open(ModalComponent, {
      data: item,
      width: '500px',
      height: '300px',
      panelClass: 'full-screen-modal'
    });
  }

  categorias: string[] = ['BOLOS', 'PÃES', 'SALGADOS', 'DOCES E SOBREMESAS', 'BEBIDAS QUENTES', 'BEBIDAS FRIAS', 'AÇAÍ'];
  categoriaSelecionada: string = 'BOLOS';

  cardapioItem: CardapioItem[] = [

    /////// BOLOS
    { nome: 'Bolo de Pote', preco: '8,00', descricao: "Delicie-se com nosso bolo de pote, uma sobremesa irresistível que combina camadas de bolo macio e recheio cremoso, perfeita para qualquer momento do Dia.", categoria: 'BOLOS', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181644_I1U1_i.jpg"},
    { nome: 'Bolo recheado fatia', preco: '7,00', descricao: "Deliciosa e generosa fatia de bolo recheado a sua escolha", categoria: 'BOLOS', imagemItem: "/assets/bolofatia.png"},
    { nome: 'Bolo tradicional fatia', preco: '5,00', descricao: "Diversos sabores de bolos caseiros fresquinhos", categoria: 'BOLOS', imagemItem: "https://amoradoceria.com.br/wp-content/uploads/2021/12/nozes-2.jpg"},
    { nome: 'Bolo de Chocolate c/ leite ninho', preco: '69,90kg', descricao: "Bolo de Chocolate recheado e coberto com brigadeiro de leite ninho", categoria: 'BOLOS', imagemItem: "/assets/bolointeiro.png"},


    /////// SALGADOS
    { nome: 'Combo 08 mini salgados', preco: '6,50', descricao: "Coxinha/Bolinho de queijo/Risole/Bolinho de carne", categoria: 'SALGADOS', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181630_J4X2_i.jpg"},
    { nome: 'Combo 08 mini pão de queijo', preco: '6,50', descricao: "Porção com 8 unidades de mini pães de queijo, quentinhos e crocantes por fora.", categoria: 'SALGADOS', imagemItem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXpjDyo-AqdVokt-d19ZXh0Y0jQjyBJVwFZimVIfVtPq9KFP16U3E9RLpEE8LsEa9vOI&usqp=CAU"},
    { nome: 'Cuscuz tradicional(Manteiga e ovo frito)', preco: '9,90', descricao: "Desfrute do nosso 'Cuscuz Tradicional', uma autêntica maravilha culinária.", categoria: 'SALGADOS', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411191443_241M_i.jpg"},
    { nome: 'Cuscuz recheado', preco: '19,90', descricao: "Frango com requeijão/Presunto com queijo/Peito de peru com queijo branco/Carne seca com queijo", categoria: 'SALGADOS', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411121103_6AQ5_i.jpg"},
    { nome: 'Salgados assados', preco: '7,90', descricao: "Variedade de salgados assados como empadas, enroladinhos e esfihas..", categoria: 'SALGADOS', imagemItem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJgMEO4Ev_TjFWvDyHYQRwoyzlJrGxY-5C6A&s"},
    { nome: 'Salgados fritos', preco: '6,90', descricao: "Clássicos fritos como coxinha, risole, bolinho de carne e queijo.", categoria: 'SALGADOS', imagemItem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSxtnQWP87QdewQfojuR1ZLfcdz6A3betYOBaXamoMVLf1TD-lILKNtbxO1xv83Rx6qeg&usqp=CAU"},
    { nome: 'Tapioca com manteiga', preco: '4,00', descricao: "Tapioca fresquinha e deliciosa com manteiga", categoria: 'SALGADOS', imagemItem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5mWgPZJBpe8Qjebo-3qrYp_a6BtdFgfUZxg&s"},
    { nome: 'Tapioca Recheada', preco: '8,00', descricao: "Frango com requeijão/Presunto com mussarela/Peito de peru com queijo branco/Atum com queijo branco", categoria: 'SALGADOS', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411191329_3RX5_i.jpg"},
    { nome: 'Tapioca Recheada', preco: '9,50', descricao: "Carne seca com requeijão e queijo mussarela", categoria: 'SALGADOS', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411191326_Y46N_i.jpg"},

    /////// PÃES
    { nome: 'Pão de queijo grande', preco: '5,00', descricao: "Pão francês com mantega e 2 ovos mexidos", categoria: 'PÃES', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411121107_IU65_i.jpg"},
    { nome: 'Misto quente no pão de forma', preco: '7,90', descricao: "Clássico misto quente no pão de forma, com presunto e queijo, uma delícia para qualquer hora.", categoria: 'PÃES', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411191449_301I_i.jpg"},
    { nome: 'Misto quente no pão francês', preco: '8,90', descricao: "Misto quente no pão francês, com presunto e queijo, pão selado na manteiga, crocante e saboroso.", categoria: 'PÃES', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411191448_B8OV_i.jpg"},
    { nome: 'Bauru no pão francês/forma', preco: '9,90', descricao: "Bauru no pão francês selado na manteiga, com presunto, queijo, tomate e orégano, uma explosão de sabores.", categoria: 'PÃES', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202501201703_F5P1_i.jpg"},
    { nome: 'Combo: X salada com batata frita', preco: '37,50', descricao: "X-Salada no pão brioche com queijo, alface, tomate e batata frita crocante. Sabor e textura em um combo delicioso.", categoria: 'PÃES', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202501201717_TYV4_i.jpg"},
    { nome: 'Frango com queijo branco', preco: '12,90', descricao: "Lanche natural de frango com queijo branco, acompanhado de maionese, alface e tomate, leve e saboroso.", categoria: 'PÃES', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411121107_IU65_i.jpg"},
    { nome: 'Pão na chapa com requeijão/tradicional', preco: '4,50', descricao: "Lanche natural de frango com queijo branco, acompanhado de maionese, alface e tomate, leve e saboroso.", categoria: 'PÃES', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411121107_IU65_i.jpg"},
    { nome: 'Pão com ovo tradicional', preco: '6,50', descricao: "Pão francês com mantega e 2 ovos mexidos", categoria: 'PÃES', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411191450_8VI7_i.jpg"},
    { nome: 'Pão com ovo especial', preco: '7,80', descricao: "Pão francês com requeijão, ovos mexidos e queijo mussarela", categoria: 'PÃES', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411191450_U2KF_i.jpg"},
    { nome: 'Presunto com mussarela', preco: '10,25', descricao: "Clássico misto quente no pão de forma, com presunto e queijo, uma delícia para qualquer hora.", categoria: 'PÃES', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411191449_301I_i.jpg"},
    { nome: 'Peito de peru com queijo branco', preco: '16,80', descricao: "Lanche natural de presunto com mussarela, acompanhado de maionese, alface e tomate, perfeito para um lache.", categoria: 'PÃES', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202501201723_YO0V_i.jpg"},
    { nome: 'Atum com queijo branco', preco: '16,80', descricao: "Lanche natural de atum com queijo branco, acompanhado de maionese, alface e tomate, uma opção leve e nutritiva.", categoria: 'PÃES', imagemItem: "https://minhasreceitinhas.com.br/wp-content/uploads/2022/09/Sanduiche-de-atum-2.png"},
    { nome: 'Beirute', preco: '19,90', descricao: "Pão sirio com frango desfiado, maionese, queijo mussarela, alface e tomate", categoria: 'PÃES', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411121057_N3EP_i.jpg"},


    /////// DOCES E SOBREMESAS
    { nome: 'Mini pudim', preco: '9,10', descricao: "Saboreie nosso pudim, uma sobremesa clássica com textura aveludada e sabor irresistível, ideal para qualquer ocasião.", categoria: 'DOCES E SOBREMESAS', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181648_3T3A_i.jpg"},
    { nome: 'Tapioca Coco c/ leite condensado', preco: '9,50', descricao: "Tapioca fresquinha recheada com coco e leite consensado", categoria: 'DOCES E SOBREMESAS', imagemItem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAN2_TznfnfTbu_MehnhKgCfMNH5gEgdV5-g&s"},
    { nome: 'Tapioca banana c/ leite condensado e canela', preco: '9,50', descricao: "Tapioca recheada com banana, leite condensado e canela", categoria: 'DOCES E SOBREMESAS', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181637_8065_i.jpg"},
    { nome: 'Tapioca Prestigio', preco: '12,00', descricao: "Recheada com chocolate ao leite e coco ralado", categoria: 'DOCES E SOBREMESAS', imagemItem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMah48d9emm4yo1PTs9dBiHAJ_NnZJmRXXlw&s"},
    { nome: 'Torta banofee', preco: '12,00', descricao: "Torta gelada feita com base crocante, doce de leite cremoso, rodelas de banana e chantilly por cima.", categoria: 'DOCES E SOBREMESAS', imagemItem: "https://chaparadois.com.br/wp-content/uploads/2024/11/Torta-Banoffee-Voce-acabou-de-achar-a-Receita-que-Estava-Procurando-Veja.webp"},
    { nome: 'Torta morangonofee', preco: '12,00', descricao: "Deliciosa variação da banoffee, com morangos frescos no lugar da banana e cobertura de chantilly.", categoria: 'DOCES E SOBREMESAS', imagemItem: "https://receitatodahora.com.br/wp-content/uploads/2023/12/torta-morangoff-2711-1200x675.jpg"},
    { nome: 'Sonho', preco: '5,00', descricao: "Sonho macio e recheado, disponível nos sabores doce de leite e creme", categoria: 'DOCES E SOBREMESAS', imagemItem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkNqjasGEZ5ttsf3uguzeryNbOgm6SKmESKQ&s"},
    { nome: 'Copo da felicidade', preco: '12,00', descricao: "Sobremesa em camadas com brigadeiro branco, chantilly e morango. Doce na medida certa pra alegrar o dia!", categoria: 'DOCES E SOBREMESAS', imagemItem: "https://minhasreceitinhas.com.br/wp-content/uploads/2023/07/copo-da-felicidade-de-morango-e1689109303436.jpg"},


    /////// BEBIDAS QUENTES
    { nome: 'Café Expresso', preco: '4,80 GR R$7,80', descricao: "Delicioso café expresso fresquinho, com aroma intenso e sabor marcante.", categoria: 'BEBIDAS QUENTES', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181621_W808_i.jpg"},
    { nome: 'Café Coado', preco: '3,00 GR R$4,50', descricao: "Café coado na hora, suave e perfeito para qualquer momento", categoria: 'BEBIDAS QUENTES', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181619_V218_i.jpg"},
    { nome: 'Café Especial Time', preco: '3,80 GR R$5,00', descricao: "Nosso café especial cremoso, com sabor único e textura aveludada.", categoria: 'BEBIDAS QUENTES', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181617_JT14_i.jpg"},
    { nome: 'Café C/Leite Tradicional', preco: '3,50 GR R$5,00', descricao: "Combinação clássica de café fresquinho com leite. Simples e delicioso.", categoria: 'BEBIDAS QUENTES', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181615_1RB5_i.jpg"},
    { nome: 'Café expresso c/ leite', preco: '5,30 GR R$8,00', descricao: "Café expresso encorpado com leite cremoso. Para quem ama intensidade com suavidade.", categoria: 'BEBIDAS QUENTES', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181614_D48X_i.jpg"},
    { nome: 'Cappuccino', preco: '5,00 GR R$8,00', descricao: "Cremoso e aromático, feito com café, leite e um toque de chocolate. Perfeito para aquecer o dia.", categoria: 'BEBIDAS QUENTES', imagemItem: "https://www.receitasnestle.com.br/sites/default/files/srh_recipes/5dd4e59cc8f3618ae73bb37164c951fe.jpg"},
    { nome: 'Chá', preco: '4,50', descricao: "Chá quentinho em sabores variados, ideal para um momento de calma e conforto.", categoria: 'BEBIDAS QUENTES', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181617_JT14_i.jpg"},
    { nome: 'Chocolate Quente cremoso', preco: '5,00 GR R$8,00 ', descricao: "Chocolate quente cremoso, docinho e reconfortante. Uma delícia em qualquer hora do dia.", categoria: 'BEBIDAS QUENTES', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181441_1YTB_i.jpg"},

    /////// BEBIDAS FRIAS
    { nome: 'Chocolate Batido', preco: '7,90', descricao: "Bebida gelada de chocolate cremosa e docinha. Uma delícia para refrescar o dia.", categoria: 'BEBIDAS FRIAS', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181625_H86T_i.jpg"},
    { nome: 'Suco Natural/Polpa C/Água', preco: '9,90', descricao: "Suco natural ou de polpa batido com água. Refrescante e leve.", categoria: 'BEBIDAS FRIAS', imagemItem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/bac90564-1040-4537-92c8-bfca06f9e360/202411181453_L2EH_i.jpg"},
    { nome: 'Suco Natural/Polpa C/Leite', preco: '12,50', descricao: "Suco natural ou de polpa com leite. Mais cremoso e encorpado.", categoria: 'BEBIDAS FRIAS', imagemItem: "https://thumb-cdn.soluall.net/prod/shp_products/sp1280fw/598685da-2baa-4a2d-8dc5-818f134e519e/dd9b79a0-2123-4d61-a502-9015df25e142.jpg"},
    { nome: 'Suco Lata/Garrafa', preco: '6,50', descricao: "Sucos em lata ou garrafa. Práticos e sempre geladinhos.", categoria: 'BEBIDAS FRIAS', imagemItem: "https://tanabatadelivery.com.br.atuali.com/images/stories/virtuemart/product/suco_del_valle.jpg"},
    { nome: 'Refrigerante Lata 220ML', preco: '4,50', descricao: "Refrigerante gelado na versão menor. Ideal para acompanhar seu lanche.", categoria: 'BEBIDAS FRIAS', imagemItem: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjlTrOUWzdmMXF84aPmIevbVKFCGZ_dxSXcds07FmfnqYxuIPXLNknsxElsF5r2Qh5st_kCD-o_Ujo8P-Wz1hARg_aI1ToleA2zpmI9UkghsDqQdNpLzrciXf5yE7Zy3dk5pd1i5vLrK7g/s1600/MKTmais_cocacola_latas_220ml.jpg"},
    { nome: 'Refrigerante Lata 350ML', preco: '6,00', descricao: "Refrigerante tradicional em lata, bem gelado e refrescante.", categoria: 'BEBIDAS FRIAS', imagemItem: "https://alloydeliveryimages.s3.sa-east-1.amazonaws.com/item_images/4963/654e04ea8c5b3b1xks.webp"},
    { nome: 'Refrigerante 600ml', preco: '8,00', descricao: "Refrigerante em garrafa 600ml. Ideal para dividir ou matar a sede.", categoria: 'BEBIDAS FRIAS', imagemItem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR69LT-1Ir-taTyHetCL5IrUM_OZq1ROtMw5w&s"},
    { nome: 'Monster', preco: '9,00', descricao: "Bebida energética Monster. Para dar aquele gás no dia.", categoria: 'BEBIDAS FRIAS', imagemItem: "https://www.supspace.nl/resize/monster-energy-ultra-mixtray-6-x-500-ml_17520015090254.png/0/1100/True/monster-energy-ultra-mixtray-6-x-500-ml.png"},
    { nome: 'TNT', preco: '7,50', descricao: "TNT Energy Drink. Energia instantânea para sua rotina.", categoria: 'BEBIDAS FRIAS', imagemItem: "https://i.ytimg.com/vi/_3f6bw6KTM4/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGH8gEyg0MA8=&rs=AOn4CLCpLUrUbXyNe2fV5RgNdJKfjuT_Mg"},
    { nome: 'Chá Gelado', preco: '7,50', descricao: "Chá gelado saborizado. Leve, refrescante e perfeito para o calor.", categoria: 'BEBIDAS FRIAS', imagemItem: "https://sgw.bacanudo.com/storage/conteudo/1/2536/20190116114626_5c3f43c2a4b5e.jpg"},
    { nome: 'Água de Coco', preco: '4,90', descricao: "Água de coco natural. Hidratante e deliciosa.", categoria: 'BEBIDAS FRIAS', imagemItem: "https://http2.mlstatic.com/D_NQ_NP_803010-MLA82169175955_012025-O.webp"},
    { nome: 'Água C/S Gás', preco: '3,00', descricao: "Água mineral com ou sem gás. Para se hidratar com simplicidade.", categoria: 'BEBIDAS FRIAS', imagemItem: "https://changlee.com.br/wp-content/uploads/2016/12/imagem_destaque_19.jpeg"},


    /////// AÇAÍ
    { nome: 'Açaí 250ml', preco: '17,90', descricao: "Cremosidade e sabor em 250ml de puro açaí", categoria: 'AÇAÍ', imagemItem: "https://sachefmio.blob.core.windows.net/fotos/pacoquita-242508.jpg"},
    { nome: 'Açaí 500ml', preco: '27,90', descricao: "Delicioso açaí de 500ml para refrescar seu dia.", categoria: 'AÇAÍ', imagemItem: "https://marketup-cdn.s3-us-west-2.amazonaws.com/files/1455984/products/5e4f446d-cbdd-4c91-9da3-1405e8db515a.Jpeg"},
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
