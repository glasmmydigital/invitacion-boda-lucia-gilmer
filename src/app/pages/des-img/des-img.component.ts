import { Component } from '@angular/core';
import { TraductorServicio } from '../../Services/traductor.service';

@Component({
  selector: 'app-des-img',
  standalone: true,
  imports: [],
  templateUrl: './des-img.component.html',
  styleUrl: './des-img.component.scss'
})
export class DesImgComponent {
  
  constructor(public traductorService: TraductorServicio) {
  }

}
