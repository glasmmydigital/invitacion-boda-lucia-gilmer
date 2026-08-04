import { Injectable } from "@angular/core";
import { TEXT_ES } from "./text-es";
import { TEXT_EN } from "./text-en";

@Injectable({
    providedIn: 'root'
})
export class TraductorServicio {
  public lenguaje = "EN"

  private listaLenguaje:{[key: string]: any } = {
    "EN": TEXT_EN,
    "ES": TEXT_ES,
  }

  public getTexto(key:string){
    return this.listaLenguaje[this.lenguaje][key]
  }
}

