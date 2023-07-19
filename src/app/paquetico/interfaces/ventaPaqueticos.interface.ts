
export interface ventaPaquetico {
    terminalID: number;
    solicituID: number
    monto : number;
    nic : string;
    proveedor : string;
    plan_Id : string;
    proveedorId : number;
}
export interface venderPaqueticoResponse {
    nic: string;
    proveedor :string;
}