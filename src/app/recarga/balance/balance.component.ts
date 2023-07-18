import { Component, OnInit } from '@angular/core';
import { RecargasService } from 'src/app/services/recargas.service';
import { Balance } from '../interfaces/balanceRecarga';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  constructor(private recargaService: RecargasService) { }

  ngOnInit(): void {
    this.consultarBalance();
  }

  consultarBalance(){
    this.recargaService.consultarBalanceRecarga();
  }

  get balance(): Balance{
    return this.recargaService.balance;
  }

}
