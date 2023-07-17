export interface PlanesPaqueticosResponse {
    succeeded: boolean;
    code:      number;
    message:   string;
    errors:    any[];
    data:      Data;
}

export interface Data {
    cod:              string;
    msj:              string;
    cliente:          string;
    suscripcion:      string;
    paquetes:         Paquetes[];
}

export interface Paquetes {
    id:     number;
    nombre: string;
    precio: string;
}
