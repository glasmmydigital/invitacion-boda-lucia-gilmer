import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import { InvitadoModelRespose } from "../../models/invitado.model-respose";


@Injectable({providedIn: "root"})
export class ApiService {

  private API_BASE_URL = environment.API_BASE_URL;

  constructor(private httpClient: HttpClient) {
  }

  public confirmar(params: any) {
    return this.httpClient.post<number>(`${this.API_BASE_URL}/confirmacion`, params);
  }

  public getInvitadoYConfirmacion(access_token: string, queryParams?: string) {
    return this.httpClient.get<InvitadoModelRespose>(`${this.API_BASE_URL}/invitados/${access_token}?${queryParams}`)
  }

}
