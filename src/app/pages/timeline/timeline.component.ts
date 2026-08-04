import { Component } from '@angular/core';
import { TraductorServicio } from '../../Services/traductor.service';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  constructor(public traductorService: TraductorServicio) {

  }

  

}
