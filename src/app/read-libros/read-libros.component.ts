import { Component } from '@angular/core';

@Component({
  selector: 'app-read-libros',
  templateUrl: './read-libros.component.html',
  styleUrl: './read-libros.component.css',
})
export class ReadLibrosComponent {
  libros: Libro[] = [
    {
      id: 1,
      titulo: 'Matar a un ruiseñor',
      autor: 'Harper Lee',
      genero: 'Ficción',
      publicacion: '1960',
      resumen:
        'Una novela sobre los serios problemas de la violación y la desigualdad racial.',
    },
    {
      id: 2,
      titulo: '1984',
      autor: 'George Orwell',
      genero: 'Distopía',
      publicacion: '1949',
      resumen:
        'Una novela que presenta una imagen aterradora de una sociedad futura.',
    },
    {
      id: 3,
      titulo: 'Orgullo y prejuicio',
      autor: 'Jane Austen',
      genero: 'Romance',
      publicacion: '1813',
      resumen:
        'Una novela romántica que traza el desarrollo emocional de la protagonista Elizabeth Bennet.',
    },
    {
      id: 4,
      titulo: 'El gran Gatsby',
      autor: 'F. Scott Fitzgerald',
      genero: 'Tragedia',
      publicacion: '1925',
      resumen:
        'Una novela sobre el sueño americano y la caída de aquellos que intentan alcanzar sus metas ilusorias.',
    },
    {
      id: 5,
      titulo: 'Moby-Dick',
      autor: 'Herman Melville',
      genero: 'Aventura',
      publicacion: '1851',
      resumen: 'Una novela sobre el viaje del barco ballenero Pequod.',
    },
  ];

  public eliminarLibro(id: number): void {
    alert('Estamos eliminando el libro '+id)
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
