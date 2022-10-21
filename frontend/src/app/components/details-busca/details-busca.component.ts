import { Component, OnInit } from '@angular/core';
import { BuscaService } from 'src/app/services/busca.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Busca } from 'src/app/models/busca.model';

@Component({
  selector: 'app-details-busca',
  templateUrl: './details-busca.component.html',
  styleUrls: ['./details-busca.component.css']
})
export class DetailsBuscaComponent implements OnInit {

  busca: Busca = {
    nome: '',
    progressoDaBuscaPorMunicipio: '',
    progressoDaBuscaPorCategoria: '',
    dataDeInicioDaBusca: '',
    dataFimDaBusca: '',
    ultimaAtualizacao: '',
    Estado: ''
  };
  message = '';
  debug = true;


  constructor(
    private buscaService: BuscaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getBusca(this.route.snapshot.params['id']);
  }

  getBusca(id: string): void {
    this.buscaService.get(id)
      .subscribe(
        data => {
          this.busca = data;
          if (this.debug) console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateBusca(): void {
    this.message = '';

    this.buscaService.update(this.busca.id, this.busca)
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          this.message = response.message ? response.message : 'A entidade BuscaEditor foi atualizada com sucesso!';
        },
        error => {
          console.log(error);
        });
  }

  deleteBusca(): void {
    this.buscaService.delete(this.busca.id)
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          this.router.navigate(['/buscas']);
        },
        error => {
          console.log(error);
        });
  }
}
