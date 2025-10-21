export interface Lead {
  id?: string;
  nombre: string;
  empresa?: string;
  sector?: string;
  correo: string;
  whatsapp?: string;
  pais?: string;
  ciudad?: string;
  created_at?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
}

export interface LeadsResponse {
  success: boolean;
  leads: Lead[];
}
