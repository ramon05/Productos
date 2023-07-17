import { Component, Input, OnInit } from '@angular/core';
import { Paquetes } from '../../interfaces/planesPaqueticos.interface';

@Component({
  selector: 'app-list-planes-paqueticos',
  templateUrl: './list-planes-paqueticos.component.html',
  styleUrls: ['./list-planes-paqueticos.component.css']
})
export class ListPlanesPaqueticosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  public planesPaquetico: Paquetes[] = [];
}
