import { Component } from '@angular/core';
import { TraductorServicio } from '../../Services/traductor.service';

@Component({
  selector: 'app-portada',
  standalone: true,
  imports: [],
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.scss']
})
export class PortadaComponent {
  private cuentaRegresiva: any;

  constructor(public traductorService: TraductorServicio) {}

  ngOnInit() {
    const fechaObjetivo = new Date('2026-09-12T11:59:59'); // Cambia esto por la fecha de tu boda

    const actualizarContador = () => {
        if (typeof document !== 'undefined') { // Verificación de entorno
            const ahora = new Date().getTime();
            const distancia = fechaObjetivo.getTime() - ahora;

            const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
            const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

            document.getElementById('dias')!.innerText = dias.toString();
            document.getElementById('horas')!.innerText = horas.toString();
            document.getElementById('minutos')!.innerText = minutos.toString();
            document.getElementById('segundos')!.innerText = segundos.toString();

            if (distancia < 0) {
                clearInterval(this.cuentaRegresiva);
                const contadorElement = document.querySelector('.contador') as HTMLElement;
                if (contadorElement) {
                    contadorElement.innerText = '¡Es el gran día!';
                }
            } else {
                setTimeout(actualizarContador, 1000);
            }
        }
    };

    actualizarContador();
    this.traductorService.lenguaje = "ES"
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }


  cambiarIdioma(event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.traductorService.lenguaje = isChecked ? 'EN' : 'ES';
  }

}
