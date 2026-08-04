import { Component } from '@angular/core';
import { TraductorServicio } from '../../Services/traductor.service';

@Component({
  selector: 'app-cerm-recep',
  standalone: true,
  imports: [],
  templateUrl: './cerm-recep.component.html',
  styleUrl: './cerm-recep.component.scss'
})
export class CermRecepComponent {

  constructor(public traductorService: TraductorServicio) {

  }
}
