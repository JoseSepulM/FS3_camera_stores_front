import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule, LoginComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería inicializar el formulario con valores vacíos', () => {
    expect(component.miFormulario).toBeTruthy();
    expect(component.miFormulario.controls['nombre'].value).toBe('');
    expect(component.miFormulario.controls['email'].value).toBe('');
    expect(component.miFormulario.controls['pass'].value).toBe('');
  });

  it('debería mostrar el mensaje de "Campo requerido" si un campo no es completado', () => {
    const nombreInput = component.miFormulario.controls['nombre'];
    nombreInput.markAsTouched();
    fixture.detectChanges();
    const errorMessage = fixture.nativeElement.querySelector('span.dv_validate');
    expect(errorMessage.textContent).toContain('Campo requerido');
  });

  it('debería marcar todos los controles como tocados al enviar el formulario con campos vacíos', () => {
    spyOn(component, 'markAllAsTouched');
    component.submitForm();
    expect(component.markAllAsTouched).toHaveBeenCalled();
  });

  it('debería activar el formulario de registro cuando se haga click en "Deseo registrarme"', () => {
    const linkRegistroEl = fixture.nativeElement.querySelector('#linkRegistro');
    linkRegistroEl.click();
    fixture.detectChanges();
    const dvRegisterEl = fixture.nativeElement.querySelector('#dvRegister');
    expect(dvRegisterEl).not.toBeNull();
  });

  it('debería mostrar un toast cuando el usuario de login no exista o la contraseña sea incorrecta', () => {
    spyOn(component, 'login').and.callFake(() => {
      component.miFormulario.setValue({ nombre: 'test', email: 'test@example.com', pass: 'wrong' });
      fixture.detectChanges();
    });

    component.login();
    fixture.detectChanges();

    const toast = fixture.nativeElement.querySelector('#liveToast');
    expect(toast).not.toBeNull();
  });

  it('debería llamar a markAllAsTouched al enviar el formulario con campos vacíos', () => {
    spyOn(component, 'markAllAsTouched');
    component.submitForm();
    expect(component.markAllAsTouched).toHaveBeenCalled();
  });

  it('debería ejecutar recuperarContrasenia al hacer clic en el link de recuperación de contraseña', () => {
    spyOn(window, 'alert');
    component.recuperarContrasenia();
    const linkContraseniaEl = fixture.nativeElement.querySelector('#linkContrasenia');
    linkContraseniaEl.click();
    fixture.detectChanges();
    expect(window.alert).toHaveBeenCalledWith('En desarrollo');
  });
});
