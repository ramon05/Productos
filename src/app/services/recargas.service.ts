import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authHeader } from '../Helpers/authHeader';
import { Proveedore, ProveedoresRecargaResponse } from '../recarga/interfaces/proveedorRecarga.interface';

@Injectable({
  providedIn: 'root'
})
export class RecargasService {

  public proveedores: Proveedore[] = [];

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
}
