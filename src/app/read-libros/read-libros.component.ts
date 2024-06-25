import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../services/libros.service';

@Component({
  selector: 'app-read-libros',
  templateUrl: './read-libros.component.html',
  styleUrl: './read-libros.component.css',
})
export class ReadLibrosComponent implements OnInit {
  public libros: Libro[] = [];

  ngOnInit(): void {
    this.getLibros();
  }

  constructor(private librosService: LibrosService) {}

  public async getLibros() {
    this.libros = await this.librosService.getLibros();
  }

  public async eliminarLibro(id: number) {
    await this.librosService.deleteLibro(id);
    this.libros=this.libros.filter(libro=>libro.id!==id);
  }
}

interface Libro {
  id: number;
  titulo: string;
  autor: string;
  genero: string;
  publicacion: string;
  resumen: string;
}
