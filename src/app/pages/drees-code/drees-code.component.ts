import { Component } from '@angular/core';
import { TraductorServicio } from '../../Services/traductor.service';

@Component({
  selector: 'app-drees-code',
  standalone: true,
  imports: [],
  templateUrl: './drees-code.component.html',
  styleUrl: './drees-code.component.scss'
})
export class DreesCodeComponent {

  constructor(public traductorService: TraductorServicio) {

  }
}
