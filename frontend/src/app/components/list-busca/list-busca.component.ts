import { Component, OnInit } from '@angular/core';
import { Busca } from 'src/app/models/busca.model';
import { BuscaService } from 'src/app/services/busca.service';

@Component({
  selector: 'app-list-busca',
  templateUrl: './list-busca.component.html',
  styleUrls: ['./list-busca.component.css']
})
export class ListBuscaComponent implements OnInit {

  buscaCollection?: Busca[];
  currentBusca: Busca = {};
  currentIndex = -1;
  debug = true;

  constructor(private buscaService: BuscaService) { }

  ngOnInit(): void {
    this.retrieveBuscas();
  }

  retrieveBuscas(): void {
    this.buscaService.getAll()
      .subscribe(
        data => {
          this.buscaCollection = data;
          if (this.debug) console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveBuscas();
    this.currentBusca = {};
    this.currentIndex = -1;
  }

  setActiveBusca(busca: Busca, index: number): void {
    this.currentBusca = busca;
    this.currentIndex = index;
  }

  removeAllBuscas(): void {
    this.buscaService.deleteAll()
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }
}
