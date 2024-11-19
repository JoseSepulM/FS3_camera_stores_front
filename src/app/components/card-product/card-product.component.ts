import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-product',
  standalone: true,
  imports: [],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css'
})
export class CardProductComponent {

  @Input() nombre!: string;
  @Input() descripcion!: string;
  @Input() precio!: number;
  @Input() imagen!: string;

}
