import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-carousel',
  imports: [CommonModule],
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.scss']
})
export class CardCarouselComponent {
  currentSlide = 0;

  cards = [
    {
      imagem: 'https://img77.uenicdn.com/image/upload/v1571243996/service_images/shutterstock_797089780.jpg',
      titulo: 'SALGADOS',
      subtitulo: 'A PARTIR DE',
      preco: 'R$ 70,00 o cento'
    },
    {
      imagem: 'https://content.portaldofranchising.com.br/wp-content/uploads/2019/05/07115125/franquias-de-bolos.jpg',
      titulo: 'BOLOS ARTESANAIS',
      subtitulo: 'A PARTIR DE',
      preco: 'R$ 55,00 /KG'
    },
    {
      imagem: 'https://joliz.com.br/dicas/wp-content/uploads/2021/11/Brigadeiro-gourmet.jpg',
      titulo: 'DOCES ARTESANAIS',
      subtitulo: 'FEITOS COM AMOR',
      preco: 'R$ 70,00 o cento'
    },
    {
      imagem: 'https://www.academiaassai.com.br/sites/default/files/saiba-como-armazenar-seus-ovos-de-pascoa-para-lucrar.jpg',
      titulo: 'ESPECIAL DE PÁSCOA',
      subtitulo: 'OPÇÕES PERSONALIZADAS',
      preco: ''
    }
  ];

  avancar() {
    this.currentSlide = (this.currentSlide + 1) % this.cards.length;
  }

  voltar() {
    this.currentSlide = (this.currentSlide - 1 + this.cards.length) % this.cards.length;
  }
}
