import { Component } from '@angular/core';
import { TraductorServicio } from '../../Services/traductor.service';

@Component({
  selector: 'app-nom-padres',
  standalone: true,
  imports: [],
  templateUrl: './nom-padres.component.html',
  styleUrl: './nom-padres.component.scss'
})
export class NomPadresComponent {

  constructor(public traductorService: TraductorServicio) {
    
  }

}
