import { Component } from '@angular/core';
import { TraductorServicio } from '../../Services/traductor.service';


@Component({
  selector: 'app-kids',
  standalone: true,
  imports: [],
  templateUrl: './kids.component.html',
  styleUrl: './kids.component.scss'
})
export class KidsComponent {

  constructor(public traductorService: TraductorServicio) {
  }

}
