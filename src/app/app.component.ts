import { Component, AfterViewInit, OnInit, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PortadaComponent } from './pages/portada/portada.component';
import { NomPadresComponent } from './pages/nom-padres/nom-padres.component';
import { FechImgComponent } from "./pages/fech-img/fech-img.component";
import { CermRecepComponent } from "./pages/cerm-recep/cerm-recep.component";
import { TimelineComponent } from './pages/timeline/timeline.component';
import { DreesCodeComponent } from './pages/drees-code/drees-code.component';
import { MomentosComponent } from './pages/momentos/momentos.component';
import { RegalosComponent } from './pages/regalos/regalos.component';
import { KidsComponent } from './pages/kids/kids.component';
import { PasesComponent } from './pages/pases/pases.component';
import { ConfirAsistenComponent } from './pages/confir-asisten/confir-asisten.component';
import { DesImgComponent } from './pages/des-img/des-img.component';
import { GlasmmyComponent } from './pages/glasmmy/glasmmy.component';
import { GuarFechComponent } from './pages/guar-fech/guar-fech.component';
import { ImgFloresComponent } from './pages/img-flores/img-flores.component';
import { SegImgFloresComponent } from './pages/seg-img-flores/seg-img-flores.component';
import { ConfirmacionCuadradoComponent } from './pages/forms-confirmacion/confirmacion-cuadrado/confirmacion-cuadrado.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    PortadaComponent,
    ImgFloresComponent,
    //NomPadresComponent,
    FechImgComponent,
    GuarFechComponent,
    CermRecepComponent,
    TimelineComponent,
    DreesCodeComponent,
    MomentosComponent,
    SegImgFloresComponent,
    RegalosComponent,
    KidsComponent,
    //PasesComponent,
    ConfirAsistenComponent,
    DesImgComponent,
    GlasmmyComponent,
    ConfirmacionCuadradoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'plantilla-angular-wedding';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.handleScreenSize(); // Llamar solo si está en el navegador

      const selloButton = this.document.getElementById("selloButton");
      const sobre1 = this.document.getElementById("sobre1");
      const sobre2 = this.document.getElementById("sobre2");
      const contenido = this.document.getElementById("contenido");
      const clickText = this.document.getElementById("clickText");
      const audioPlayer: HTMLAudioElement = this.document.getElementById("audioPlayer") as HTMLAudioElement;

      if (selloButton && sobre1 && sobre2 && contenido && audioPlayer && clickText) {
        selloButton.addEventListener("click", (event) => {
          event.stopPropagation();
          audioPlayer.play();
          sobre1.classList.add("open");
          sobre2.classList.add("open");
          selloButton.style.display = "none";
          clickText.style.display = "none";

          setTimeout(() => {
            sobre1.style.display = "none";
            sobre2.style.display = "none";
            contenido.style.display = "flex";
          }, 1000);
        });
      }
    }
  }

  // Detecta cambios en el tamaño de la pantalla
  //@HostListener('window:resize', [])
  handleScreenSize() {
    if (isPlatformBrowser(this.platformId)) {
      const contenido = this.document.getElementById("contenido");
      const sobreContainer = this.document.getElementById("sobreContainer");

      if (window.innerWidth > 768) {
        // Pantallas grandes: mostrar contenido normal
        if (contenido) contenido.style.display = "flex";
        if (sobreContainer) sobreContainer.style.display = "none";
      } else {
        // Pantallas móviles: mostrar la animación
        if (contenido) contenido.style.display = "none";
        if (sobreContainer) sobreContainer.style.display = "block";
      }
    }
  }
}
