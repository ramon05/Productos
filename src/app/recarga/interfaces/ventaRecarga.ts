export interface VentaRecargaResponse {
    succeeded: boolean;
    code:      number;
    message:   string;
    errors:    any[];
    data:      Data;
}

export interface Data {
    nic:              string;
    proveedor:        string;
    fechaRespuesta:   string;
    codigoRespuesta:  number;
    mensajeRespuesta: number;
    autorizacion:     string;
}

export interface VentaRecarga{
    terminalID: number, 
    solicituID: number, 
    monto: number, 
    proveedor: string, 
    nic: string, 
    proveedorID: number
}
