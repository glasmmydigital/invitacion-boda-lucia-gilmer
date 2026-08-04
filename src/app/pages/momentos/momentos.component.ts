import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { TraductorServicio } from '../../Services/traductor.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-momentos',
  standalone: true,
  imports: [],
  templateUrl: './momentos.component.html',
  styleUrls: ['./momentos.component.scss']
})
export class MomentosComponent implements AfterViewInit {

  slideIndex: number = 0;  // Define el índice del slide

  constructor(
    public traductorService: TraductorServicio,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Llamar a la función para iniciar el carrusel después de que la vista se haya inicializado
      this.showSlides();
      setInterval(() => {
        this.moveSlide(1);  // Mueve el carrusel cada 3 segundos
      }, 3000);  // Intervalo de 3 segundos
    }
  }

  showSlides(): void {
    const slides = document.querySelectorAll('.carousel img') as NodeListOf<HTMLImageElement>;
    if (this.slideIndex >= slides.length) {
      this.slideIndex = 0;
    }
    if (this.slideIndex < 0) {
      this.slideIndex = slides.length - 1;
    }

    // Mueve el carrusel a la posición correcta
    const carousel = document.querySelector('.carousel') as HTMLElement;
    carousel.style.transform = `translateX(-${this.slideIndex * 100}%)`;
  }

  moveSlide(step: number): void {
    this.slideIndex += step;
    this.showSlides();
  }
}
