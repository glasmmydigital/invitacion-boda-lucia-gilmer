import { Component, AfterViewInit, OnInit, HostListener, Inject, PLATFORM_ID, ElementRef, ViewChild } from '@angular/core';
import { CommonModule, isPlatformBrowser, DOCUMENT } from '@angular/common';
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
import { InvitadoModelRespose } from './models/invitado.model-respose';
import { TraductorServicio } from './Services/traductor.service';
import { ApiService } from './Services/api/api.service';

type SplashPhase = 'image' | 'video';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
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

  splashPhase: SplashPhase = 'image';
  isFadingOut = false;
  showSplash = true;
  contentVisible = false;
  envelopeGuestName = '';
  envelopeGuestSeats = 0;
  isAudioPlaying = false;

  private invitationOpened = false;
  private isDesktopViewport = false;
  private openInvitationTimer?: ReturnType<typeof setTimeout>;
  private firstInteractionHandled = false;

  @ViewChild('introVideo') introVideo?: ElementRef<HTMLVideoElement>;

  @ViewChild('audioPlayer') audioPlayer?: ElementRef<HTMLAudioElement>;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document,
    public traductorService: TraductorServicio,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.applyViewportMode();
      this.loadEnvelopeGuestInfo();
      window.addEventListener('resize', () => this.onViewportResize());
      this.setupFirstInteractionPlayback();
    }
  }

  get envelopeSeatsText(): string {
    return this.envelopeGuestSeats === 1
      ? this.traductorService.getTexto('seatReservedSingular')
      : this.traductorService.getTexto('seatReservedPlural');
  }

  setLanguage(language: 'ES' | 'EN'): void {
    this.traductorService.lenguaje = language;
  }

  startVideo(): void {
  this.splashPhase = 'video';

  requestAnimationFrame(() => {

    const video = this.introVideo?.nativeElement;
    const audio = this.document.getElementById('audioPlayer') as HTMLAudioElement | null;

    if (!video) {
      console.log('Intro video element not found.');
      return;
    }

    if (audio) {
      audio.volume = 0.7;
      audio.loop = true;
      audio.play().catch(err => console.log('Audio play error:', err));
    }

    video.currentTime = 0;
    video.play().catch(err => console.log('Video play error:', err));

    this.openInvitationTimer = setTimeout(() => this.openInvitation(), 4000);
  });
}

  onVideoEnded(): void {
    if (this.openInvitationTimer) {
      clearTimeout(this.openInvitationTimer);
      this.openInvitationTimer = undefined;
    }
    this.openInvitation();
  }

  openInvitation(): void {
    if (this.isFadingOut || this.invitationOpened) return;

    this.isFadingOut = true;
    this.contentVisible = true;
    this.playInvitationAudio();

    setTimeout(() => {
      this.invitationOpened = true;
      this.showSplash = false;
      this.setScrollLock(false);
    }, 1000);
  }

  toggleAudio(): void {
    const audio = this.audioPlayer?.nativeElement;
    if (!audio) return;

    if (audio.paused) {
      this.playInvitationAudio();
      return;
    }

    audio.pause();
    this.isAudioPlaying = false;
  }

  onAudioEnded(): void {
    this.isAudioPlaying = false;
  }

  private applyViewportMode(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const desktop = window.innerWidth > 768;
    this.isDesktopViewport = desktop;

    if (desktop) {
      this.skipSplashForDesktop();
      return;
    }

    if (!this.invitationOpened) {
      this.setScrollLock(true);
    }
  }

  private onViewportResize(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const desktop = window.innerWidth > 768;

    if (desktop === this.isDesktopViewport) return;

    this.isDesktopViewport = desktop;

    if (desktop) {
      this.skipSplashForDesktop();
    }
  }

  private skipSplashForDesktop(): void {
    if (this.openInvitationTimer) {
      clearTimeout(this.openInvitationTimer);
      this.openInvitationTimer = undefined;
    }

    this.invitationOpened = true;
    this.showSplash = false;
    this.contentVisible = true;
    this.isFadingOut = false;
    this.playInvitationAudio();
    this.setScrollLock(false);
  }

  private setupFirstInteractionPlayback(): void {
    const resumePlayback = () => {
      if (this.firstInteractionHandled) return;
      this.firstInteractionHandled = true;
      this.playInvitationAudio();
    };

    const events = ['pointerdown', 'touchstart', 'keydown', 'click'];
    events.forEach((eventName) => {
      this.document.addEventListener(eventName, resumePlayback, { once: true, passive: true });
    });
  }

  private playInvitationAudio(): void {
    const audio = this.audioPlayer?.nativeElement
      || this.document.getElementById('audioPlayer') as HTMLAudioElement | null;
    if (!audio) {
      console.log('Audio player element not found.');
      return;
    }

    audio.volume = 0.7;
    audio.loop = true;

    const playPromise = audio.play();
    if (playPromise && typeof playPromise.then === 'function') {
      playPromise
        .then(() => this.isAudioPlaying = true)
        .catch(() => {
          this.isAudioPlaying = false;
          console.log('Audio play was blocked until the user interacts with the page.');
        });
    }
  }

  private loadEnvelopeGuestInfo(): void {
    const token = new URLSearchParams(window.location.search).get('token');
    if (!token) return;

    this.apiService.getInvitadoYConfirmacion(token, '').subscribe({
      next: (invitation: InvitadoModelRespose) => {
        this.envelopeGuestName = invitation.nombre || '';
        this.envelopeGuestSeats = invitation.cantidad_invitados || 0;
      },
      error: err => console.error(err)
    });
  }

  private setScrollLock(locked: boolean): void {
    this.document.body.classList.toggle('splash-active', locked);
    this.document.documentElement.classList.toggle('splash-active', locked);

    if (!locked) {
      window.scrollTo(0, 0);
    }
  }
}

