import { Component } from '@angular/core';
import { TraductorServicio } from '../../Services/traductor.service';

@Component({
  selector: 'app-glasmmy',
  standalone: true,
  imports: [],
  templateUrl: './glasmmy.component.html',
  styleUrl: './glasmmy.component.scss'
})
export class GlasmmyComponent {

  constructor(public traductorService: TraductorServicio) {
  }

}
