import { Component, OnInit } from '@angular/core';
import { PaqueticosService } from '../../services/paqueticos.service';
import { Paquetes } from '../interfaces/planesPaqueticos.interface';

@Component({
  selector: 'app-planes-paquetico',
  templateUrl: './planes-paquetico.component.html',
  styleUrls: ['./planes-paquetico.component.css']
})
export class PlanesPaqueticoComponent implements OnInit {

  constructor(private PaqueticoService: PaqueticosService) { }

  ngOnInit(): void {
    this.consultarPlanesPaqueticos();
  }

  get planesPaquetico(): Paquetes[]{
    return this.PaqueticoService.planesPaquetico;
  }

  consultarPlanesPaqueticos(){
    this.PaqueticoService.obtenerPlanesPaqueticos();
  }

}
