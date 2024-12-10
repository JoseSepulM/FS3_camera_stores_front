import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardProductComponent } from './card-product.component';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';

describe('CardProductComponent', () => {
  let component: CardProductComponent;
  let fixture: ComponentFixture<CardProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CardProductComponent,
        CommonModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct product details', () => {
    // Configurar las entradas del componente
    component.nombre = 'Producto de prueba';
    component.descripcion = 'Descripción de prueba';
    component.precio = 100;
    component.imagen = 'https://via.placeholder.com/150';

    // Detectar cambios en el componente
    fixture.detectChanges();

    // Verificar que los datos se muestran correctamente en el HTML
    const imgElement = fixture.debugElement.query(By.css('img'));
    const titleElement = fixture.debugElement.query(By.css('.card-title'));
    const descriptionElement = fixture.debugElement.query(By.css('.card-text:first-of-type'));
    const priceElement = fixture.debugElement.query(By.css('.card-text strong'));

    expect(imgElement.nativeElement.src).toBe('https://via.placeholder.com/150');
    expect(imgElement.nativeElement.alt).toBe('Producto de prueba');
    expect(titleElement.nativeElement.textContent).toBe('Producto de prueba');
    expect(descriptionElement.nativeElement.textContent).toBe('Descripción de prueba');
    expect(priceElement.nativeElement.textContent).toBe('Precio: $100');
  });

  it('should have a button to add to cart', () => {
    const buttonElement = fixture.debugElement.query(By.css('button'));
    expect(buttonElement.nativeElement.textContent.trim()).toBe('Añadir al carrito');
  });
});
