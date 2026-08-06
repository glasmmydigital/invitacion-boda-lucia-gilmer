import {Component, Inject, OnInit} from '@angular/core';
import {Confirmacion} from "../confirmacion";
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {CommonModule, DOCUMENT} from "@angular/common";
import { ApiService } from '../../../Services/api/api.service';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import {NgIconComponent, NgIconsModule, provideIcons} from "@ng-icons/core";
import { TraductorServicio } from '../../../Services/traductor.service';
import Swal from 'sweetalert2';

import {
  matAutorenew,
  matClose,
  matContentCopy,
  matDoubleArrow,
  matHome,
  matKeyboardDoubleArrowLeft,
  matLogout,
  matMenu,
} from "@ng-icons/material-icons/baseline"
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone:true,
  imports:[NgxSkeletonLoaderModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgIconComponent,
    HttpClientModule
  ],
  selector: 'app-confirmacion-cuadrado',
  templateUrl: './confirmacion-cuadrado.component.html',
  styleUrl: './confirmacion-cuadrado.component.scss',
  providers: [ApiService,
    provideIcons({
      matAutorenew,
      matMenu,
      matDoubleArrow,
      matClose,
      matKeyboardDoubleArrowLeft,
      matContentCopy,
      matHome,
      matLogout
    }),
  ]
})

export class ConfirmacionCuadradoComponent extends Confirmacion implements OnInit {
  confirmContainer: any = {};
  declare bootstrap: any;
  private texts: any;

  // Confirmación de asistencia:
  showForm: boolean = false;
  showNotAttendingConfirmation: boolean = false;

  constructor(apiServ: ApiService, fb: FormBuilder, private activatedRoute: ActivatedRoute,
              @Inject(DOCUMENT) private document: Document,
              public traductorService: TraductorServicio) {
    super(apiServ, fb)
  }



  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe({
      next: (queryParams) => {
        this.texts = queryParams['texts'];
        this.accessToken = queryParams["token"]
        this.setText();
        this.loadConfirmacionInfo(this.accessToken);
      }
    })
  }

  get totalPersonasConf(): number {
    return this.invitacionConfimacion?.confirmacion?.total_personas_conf ?? 0; // Usa 0 si es undefined
  }

  setText() {
    if (!!this.texts && this.texts != "") {
      this.texts = atob(this.texts);
      this.texts = JSON.parse(this.texts);
      const keys = Object.keys(this.texts);
      for (const key of keys) {
        this.confirmContainer[key] = this.texts[key];
      }
    } else {
      this.confirmContainer['sin-acompanantes'] ;

    }
  }

  // Método para manejar el cambio de estado del radio button
  onRadioChange(value: string): void {
    this.radioValue = value;
    if (value === 'si') {
      this.showForm = true;
      this.showNotAttendingConfirmation = false;
    } else if (value === 'no') {
      this.showForm = false;
      this.showNotAttendingConfirmation = true;
    }
  }

  isFechaLimitePasada(): boolean {

    if (!this.ultFecha) {
      console.error('La fecha límite es nula o no está definida.');
      return false; // Manejo de error o comportamiento predeterminado
    }

    const fechaLimite = new Date(this.ultFecha);

    if (isNaN(fechaLimite.getTime())) {
      console.error('La fecha límite no es válida:', this.ultFecha);
      return false;
    }

    const hoy = new Date();
    if(this.invitacionConfimacion?.confirmacion?.fecha_confirmacion){
      return false;
    }else{
      return hoy > fechaLimite;
    }

  }

  fechLimit() {
    if (!this.isFechaLimitePasada()) {
      this.saveConfir(); // Evita llamadas indirectas innecesarias
    }
  }

  // validaciones
  saveConfir(): void {

    const hasEmptyNames = this.acompanantesList.some((_, index) => {
      const control = this.formGroup.get(`acompanante${index}`);
      return control && (control.value as string).trim() === '';
    });

    console.log("Prueba console");

    const inputValue = (this.document.getElementById('input-nombre-acompanante')as HTMLInputElement)?.value.trim() || '';
    if (inputValue !== "") {
      // Opción 1: Confirmar asistencia
      Swal.fire({
          title: this.traductorService.getTexto("confirmAsistenciatitle"),
          showCancelButton: true,
          cancelButtonText: this.traductorService.getTexto("opcancelar"),
          confirmButtonColor: "#214662",
          cancelButtonColor: "#ab9047",

      }).then((result) => {
          if (result.isConfirmed) {
            this.saveConfirmacion();
            console.log("Asistencia confirmada.");
          } else {
              console.log("Confirmación cancelada.");
          }
      });
  } else {
      // Opción 2: No agregar invitados
      Swal.fire({
          title: this.traductorService.getTexto("sininvitadostitle"),
          text: this.traductorService.getTexto("sininvitadostxt"),
          showCancelButton: true,
          confirmButtonText: this.traductorService.getTexto("txtnoagregare"),
          cancelButtonText: this.traductorService.getTexto("txtsiagregare"),
          confirmButtonColor: "#214662",
          cancelButtonColor: "#ab9047",
          customClass: {
            title: 'custom-title',
            confirmButton: 'custom-confirm-button',
            cancelButton: 'custom-cancel-button'
        }
      }).then((result) => {
          if (result.isConfirmed) {
            this.saveConfirmacion();
            console.log("Invitados no agregados. Confirmación enviada.");
          } else {
              console.log("Confirmación cancelada para agregar invitados.");
          }
      });
    }
  }

}
