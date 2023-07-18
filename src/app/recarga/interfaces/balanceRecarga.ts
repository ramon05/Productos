export interface BalanceRecargaResponse {
    succeeded: boolean;
    code:      number;
    message:   string;
    errors:    any[];
    data:      Balance;
}

export interface Balance {
    balanceTransaccional:            number;
    balanceComisionVentasAplicado:   number;
    balanceComisionPagosDisponible:  number;
    balanceComisionPagosAplicado:    number;
    balanceComisionVentasDisponible: number;
}
