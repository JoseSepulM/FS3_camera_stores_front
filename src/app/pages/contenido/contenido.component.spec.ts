import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContenidoComponent } from './contenido.component'; // Asegúrate de importar el componente
import { CommonModule } from '@angular/common'; // Importa los módulos necesarios
import { NavbarContentComponent } from '../../components/navbar-content/navbar-content.component';
import { CardProductComponent } from '../../components/card-product/card-product.component';
import { By } from '@angular/platform-browser';


describe('ContenidoComponent', () => {
  let fixture: ComponentFixture<ContenidoComponent>;
  let component: ContenidoComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ContenidoComponent, // Importa el componente standalone aquí
        CommonModule,
        NavbarContentComponent,
        CardProductComponent
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Asegúrate de que se detecten los cambios
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería inicializar los productos con los datos correctos', () => {
    expect(component.productos.length).toBe(6);
    expect(component.productos[0].nombre).toBe('Cámara DSLR');
  });

  it('debería pasar el título correcto al componente NavbarContentComponent', () => {
    const navbarDebugElement = fixture.debugElement.query(By.directive(NavbarContentComponent));
    const navbarComponentInstance = navbarDebugElement.componentInstance;
    expect(navbarComponentInstance.titleNavBar).toBe('Camera Store Catalogo');
  });


  it('debería renderizar todos los productos en el DOM', () => {
    const productElements = fixture.nativeElement.querySelectorAll('app-card-product');
    expect(productElements.length).toBe(6);
  });

  it('debería pasar los datos correctos a cada componente CardProductComponent', () => {
    const productComponents = fixture.debugElement.queryAll(By.directive(CardProductComponent));
    productComponents.forEach((debugElement, index) => {
      const producto = component.productos[index];
      const cardComponentInstance = debugElement.componentInstance;

      expect(cardComponentInstance.nombre).toBe(producto.nombre);
      expect(cardComponentInstance.descripcion).toBe(producto.descripcion);
      expect(cardComponentInstance.precio).toBe(producto.precio);
      expect(cardComponentInstance.imagen).toBe(producto.imagen);
    });
  });


  it('debería renderizar el enlace del breadcrumb correctamente', () => {
    const breadcrumbLink = fixture.nativeElement.querySelector('.breadcrumb-item a');
    expect(breadcrumbLink.textContent).toContain('Home');
  });



});
