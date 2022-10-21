import { Component, OnInit } from '@angular/core';
import { Busca } from 'src/app/models/busca.model';
import { BuscaService } from 'src/app/services/busca.service';

@Component({
  selector: 'app-add-busca',
  templateUrl: './add-busca.component.html',
  styleUrls: ['./add-busca.component.css']
})
export class AddBuscaComponent implements OnInit {

  busca: Busca = {
    nome: '',
    progressoDaBuscaPorMunicipio: '',
    progressoDaBuscaPorCategoria: '',
    dataDeInicioDaBusca: '',
    dataFimDaBusca: '',
    ultimaAtualizacao: '',
    Estado: ''
  };
  submitted = false;
  debug = true;


  constructor(private buscaService: BuscaService) { }

  ngOnInit(): void {
  }

  saveBusca(): void {
    const data = {
      nome: this.busca.nome,
      municipio: this.busca.municipio,
      categoria: this.busca.categoria,
      progressoDaBuscaPorMunicipio: this.busca.progressoDaBuscaPorMunicipio,
      progressoDaBuscaPorCategoria: this.busca.progressoDaBuscaPorCategoria,
      dataDeInicioDaBusca: this.busca.dataDeInicioDaBusca,
      dataDeFimDaBusca: this.busca.dataDeFimDaBusca,
      ultimaAtualizacao: this.busca.ultimaAtualizacao,
      estado: this.busca.estado
    };

    this.buscaService.create(data)
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newBusca(): void {
    this.submitted = false;
    this.debug = true;

    this.busca = {
      nome: '',
      progressoDaBuscaPorMunicipio: '',
      progressoDaBuscaPorCategoria: '',
      dataDeInicioDaBusca: '',
      dataFimDaBusca: '',
      ultimaAtualizacao: '',
      Estado: ''
    };
  }
}
