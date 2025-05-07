import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { CardCarouselComponent } from './card-carousel/card-carousel.component';
import { FooterComponent } from "./footer/footer.component";
import { CardapioComponent } from "./cardapio/cardapio.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, CardCarouselComponent, FooterComponent, CardapioComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'coffeetime';
}
