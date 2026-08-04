import { Component } from '@angular/core';
import { TraductorServicio } from '../../Services/traductor.service';

@Component({
  selector: 'app-regalos',
  standalone: true,
  imports: [],
  templateUrl: './regalos.component.html',
  styleUrl: './regalos.component.scss'
})
export class RegalosComponent {

  constructor(public traductorService: TraductorServicio) {
  }
  toggleTarjeta(event: Event): void {
    const tarjeta = (event.currentTarget as HTMLElement);
    tarjeta.classList.toggle('volteada');
  }
}
