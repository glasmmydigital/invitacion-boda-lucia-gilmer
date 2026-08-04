import { Component } from '@angular/core';
import { TraductorServicio } from '../../Services/traductor.service';


@Component({
  selector: 'app-confir-asisten',
  standalone: true,
  imports: [],
  templateUrl: './confir-asisten.component.html',
  styleUrl: './confir-asisten.component.scss'
})
export class ConfirAsistenComponent {

  constructor(public traductorService: TraductorServicio) {
  }
}
