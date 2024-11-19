import { Component } from '@angular/core';
import { NavbarContentComponent } from '../../components/navbar-content/navbar-content.component';
import { CardProductComponent } from '../../components/card-product/card-product.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contenido',
  standalone: true,
  imports: [CommonModule, NavbarContentComponent, CardProductComponent],
  templateUrl: './contenido.component.html',
  styleUrl: './contenido.component.css'
})
export class ContenidoComponent {

  productos = [
    {
      id: 1,
      nombre: 'Cámara DSLR',
      descripcion: 'Cámara profesional con alta resolución.',
      precio: 1200,
      imagen: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      nombre: 'Lente Zoom',
      descripcion: 'Lente de alta calidad para capturar los mejores detalles.',
      precio: 800,
      imagen: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      nombre: 'Trípode',
      descripcion: 'Trípode ajustable y portátil.',
      precio: 150,
      imagen: 'https://via.placeholder.com/150'
    },
    {
      id: 4,
      nombre: 'Flash Externo',
      descripcion: 'Flash externo de alta potencia.',
      precio: 300,
      imagen: 'https://via.placeholder.com/150'
    },
    {
      id: 5,
      nombre: 'Tarjeta SD 128GB',
      descripcion: 'Tarjeta de memoria para almacenamiento rápido.',
      precio: 50,
      imagen: 'https://via.placeholder.com/150'
    },
    {
      id: 6,
      nombre: 'Bolso para Cámara',
      descripcion: 'Bolso acolchado para transportar cámaras y accesorios.',
      precio: 100,
      imagen: 'https://via.placeholder.com/150'
    }
  ];



}
