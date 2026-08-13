import { Component } from '@angular/core';
import { TraductorServicio } from '../../Services/traductor.service';

@Component({
  selector: 'app-guar-fech',
  standalone: true,
  imports: [],
  templateUrl: './guar-fech.component.html',
  styleUrl: './guar-fech.component.scss'
})
export class GuarFechComponent {
  constructor(public traductorService: TraductorServicio) {
    this.traductorService.lenguaje = "EN"
  }
  guardarFecha(event: Event): void {
    event.preventDefault();

    const ano = "2026";
    const mes = (Number("08") + 1).toString().padStart(2, '0'); // Asegurar dos dígitos
    const dia = "12".padStart(2, '0');

    const startDate = `${ano}${mes}${dia}`;
    const title = "Recordatorio de la boda de Lucia y Junnior";

    // Crear el contenido del archivo .ics
    const icsMSG = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "BEGIN:VEVENT",
      `DTSTART;VALUE=DATE:${startDate}`,
      `SUMMARY:${title}`,
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\n");

    // Crear y descargar el archivo .ics
    const blob = new Blob([icsMSG], { type: 'text/calendar;charset=utf-8' });
    const link = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = link;
    a.download = 'boda.ics';
    a.click();
    window.URL.revokeObjectURL(link);
  }
}
