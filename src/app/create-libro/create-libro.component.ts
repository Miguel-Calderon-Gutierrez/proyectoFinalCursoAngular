import { Component } from '@angular/core';
import { LibrosService } from '../services/libros.service';

@Component({
  selector: 'app-create-libro',
  templateUrl: './create-libro.component.html',
  styleUrl: './create-libro.component.css'
})

export class CreateLibroComponent {

  public libro:Libro={
    titulo:'',
    autor:'',
    genero:'',
    publicacion:'',
    resumen:''
  }

  public nombre:string='';

  constructor(
    private LibrosService:LibrosService
  ){};

  public async createLibro(){
    await this.LibrosService.createLibro(this.libro);
    this.libro={
      titulo:'',
      autor:'',
      genero:'',
      publicacion:'',
      resumen:''
    }
  }


}

interface Libro {
  titulo: string;
  autor: string;
  genero: string;
  publicacion: string;
  resumen: string;
}