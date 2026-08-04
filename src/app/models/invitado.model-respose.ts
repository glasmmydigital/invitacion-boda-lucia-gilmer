export interface InvitadoModelRespose {
  cantidad_invitados: number;
  created_at: string;
  fecha_limite_confirmo: string;
  id: number;
  invitacion_id: number;
  mesa_asignada: string;
  nombre: string;
  updated_at: string;
  confirmacion?: {
    confirmado: number;
    created_at: string;
    acompanantes?: string;
    fecha_confirmacion: string;
    id: number;
    invitado_id: number;
    total_personas_conf: number;
    updated_at: string;
  },
  invitacion: {
    created_at: string;
    fecha_evento: string;
    id: number;
    lugar_evento: string;
    nombre: string;
    updated_at: string;
    url_lugar_evento: string;

  }
}
