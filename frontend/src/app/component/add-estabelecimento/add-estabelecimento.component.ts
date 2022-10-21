import { Component, OnInit } from '@angular/core';
import { Estabelecimento } from 'src/app/models/estabelecimento.model';
import { EstabelecimentoService } from 'src/app/services/estabelecimento.service';

@Component({
  selector: 'app-add-estabelecimento',
  templateUrl: './add-estabelecimento.component.html',
  styleUrls: ['./add-estabelecimento.component.css']
})
export class AddEstabelecimentoComponent implements OnInit {

  estabelecimento: Estabelecimento = {
    nome: '',
    placeId: ''
  };
  submitted = false;
  debug = true;


  constructor(private estabelecimentoService: EstabelecimentoService) { }

  ngOnInit(): void {
  }

  saveEstabelecimento(): void {
    const data = {
      nome: this.estabelecimento.nome,
      endereco: this.estabelecimento.endereco,
      categoria: this.estabelecimento.categoria,
      placeID: this.estabelecimento.placeID
    };

    this.estabelecimentoService.create(data)
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newEstabelecimento(): void {
    this.submitted = false;
    this.debug = true;

    this.estabelecimento = {
      nome: '',
      placeId: ''
    };
  }
}
