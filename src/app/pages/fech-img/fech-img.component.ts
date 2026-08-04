import { Component } from '@angular/core';
import { TraductorServicio } from '../../Services/traductor.service';

@Component({
  selector: 'app-fech-img',
  standalone: true,
  imports: [],
  templateUrl: './fech-img.component.html',
  styleUrl: './fech-img.component.scss'
})
export class FechImgComponent {

  constructor(public traductorService: TraductorServicio) {
    this.traductorService.lenguaje = "EN"
  }
}
