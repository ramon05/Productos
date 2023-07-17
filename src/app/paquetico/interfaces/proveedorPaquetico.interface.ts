export interface ProveedorResponse {
    succeeded: boolean;
    code:      number;
    message:   string;
    errors:    any[];
    data:      Data;
}

export interface Data {
    cod:              string;
    msj:              string;
    proveedores:      Proveedore[];
}

export interface Proveedore {
    key_prov:          string;
    nombre:            string;
    opciones_consulta: string[];
}
