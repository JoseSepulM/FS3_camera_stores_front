import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarContentComponent } from './navbar-content.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('NavbarContentComponent', () => {
  let component: NavbarContentComponent;
  let fixture: ComponentFixture<NavbarContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarContentComponent, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería mostrar el título correcto en el componente NavbarContentComponent', () => {
    component.titleNavBar = 'Camera Store Catalogo';
    fixture.detectChanges();
    const navbarElement = fixture.nativeElement.querySelector('.navbar-brand');
    expect(navbarElement.textContent).toBe('Camera Store Catalogo');
  });

});
