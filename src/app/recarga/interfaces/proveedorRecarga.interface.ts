export interface ProveedoresRecargaResponse {
    succeeded: boolean;
    code:      number;
    message:   string;
    errors:    any[];
    data:      Data;
}

export interface Data {
    cod:         string;
    msj:         string;
    proveedores: Proveedore[];
}

export interface Proveedore {
    id:          string;
    nombre:      string;
    servicio:    Servicio;
    prefijos:    Prefijos;
    montos:      string;
    prov_api:    string;
    label_color: string;
}

export enum Prefijos {
    Empty = "",
    The809829849 = "809,829,849",
}

export enum Servicio {
    RecargasElectronicas = "recargas_electronicas",
}
