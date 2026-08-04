import { Component } from '@angular/core';
import { TraductorServicio } from '../../Services/traductor.service';

@Component({
  selector: 'app-pases',
  standalone: true,
  imports: [],
  templateUrl: './pases.component.html',
  styleUrl: './pases.component.scss'
})
export class PasesComponent {
  constructor(public traductorService: TraductorServicio) {

  }
}
