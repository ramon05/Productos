import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authHeader } from '../Helpers/authHeader';
import { Proveedore, ProveedoresRecargaResponse } from '../recarga/interfaces/proveedorRecarga.interface';
import { Balance, BalanceRecargaResponse } from '../recarga/interfaces/balanceRecarga';


@Injectable({
  providedIn: 'root'
})
export class RecargasService {

  public proveedores: Proveedore[] = [];
  public balance!: Balance;

  constructor(private http: HttpClient) { }

  obtenerProveedores(){
    const headers = authHeader();
    this.http.get<ProveedoresRecargaResponse>('https://localhost:7207/api/Recargas/ConsultaProveedores', {headers}) 
        .subscribe( resp => { // json data
            this.proveedores = resp.data.proveedores;
            console.log(this.proveedores);
          },
          error => {
              console.log('Error: ', error);
          }
        );
  }

  consultarBalanceRecarga(){
    debugger;
    const headers = authHeader();
    this.http.get<BalanceRecargaResponse>('https://localhost:7207/api/Balances/Consultar', {headers})
      .subscribe( resp => { // json data
        this.balance = resp.data;
      },
      error => {
          console.log('Error: ', error);
      }
    );
  }
}
