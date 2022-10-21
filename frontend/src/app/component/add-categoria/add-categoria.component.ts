import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.model';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-add-categoria',
  templateUrl: './add-categoria.component.html',
  styleUrls: ['./add-categoria.component.css']
})
export class AddCategoriaComponent implements OnInit {

  categoria: Categoria = {
    nome: '',
    outrosNomes: ''
  };
  submitted = false;
  debug = true;


  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
  }

  saveCategoria(): void {
    const data = {
      nome: this.categoria.nome,
      outroNome: this.categoria.outroNome
    };

    this.categoriaService.create(data)
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newCategoria(): void {
    this.submitted = false;
    this.debug = true;

    this.categoria = {
      nome: '',
      outrosNomes: ''
    };
  }
}
