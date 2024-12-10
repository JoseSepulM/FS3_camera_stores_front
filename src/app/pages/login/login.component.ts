import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, FormGroup, AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule, FormsModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
})

export class LoginComponent implements OnInit {

    @ViewChild('itemLogin', { static: true }) itemLogin!: ElementRef;
    @ViewChild('itemRegister', { static: true }) itemRegister!: ElementRef;
    @ViewChild('dvLogin', { static: true }) dvLogin!: ElementRef;
    @ViewChild('dvRegister', { static: true }) dvRegister!: ElementRef;
    @ViewChild('linkRegistro', { static: true }) linkRegistro!: ElementRef;
    @ViewChild('linkContrasenia', { static: true }) linkContrasenia!: ElementRef;
    @ViewChild('liveToast', { static: true }) liveToast!: ElementRef;
    @ViewChild('txtNombreUsuario', { static: true }) txtNombreUsuario!: ElementRef;
    @ViewChild('txtClaveSecreta', { static: true }) txtClaveSecreta!: ElementRef;

    miFormulario!: FormGroup;
    imgLogin: string;

    personas  : any[] = [];

    constructor(
        private renderer: Renderer2,
        private router: Router,
        private fb: FormBuilder,


    ) {
        this.imgLogin = "assets/images/login_image.svg";
    }

    ngOnInit(): void {

      this.miFormulario = this.fb.group({
        nombre: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        pass: ['', [Validators.required, Validators.minLength(8)]],
      });

      this.showHideCards();
      this.recuperarContrasenia();

    }

    submitForm(): void {

        if (this.miFormulario.valid) {

            const newUser = {
                username : this.miFormulario.value.nombre,
                correo : this.miFormulario.value.email,
                password : this.miFormulario.value.pass,
                role : 'user'
            };

            this.personas.push(newUser);
            this.miFormulario.reset();

            alert('Usuario registrado');



        }
        else {
            this.markAllAsTouched();
        }
    }

    markAllAsTouched() {
        Object.values(this.miFormulario.controls).forEach((control: AbstractControl | null) => {
            if (control) {
                control.markAsTouched();
            }
        });
    }

    showHideCards(): void {
        const itemLoginEl = this.itemLogin.nativeElement;
        const itemRegisterEl = this.itemRegister.nativeElement;
        const dvLoginEl = this.dvLogin.nativeElement;
        const dvRegisterEl = this.dvRegister.nativeElement;
        const linkRegistroEl = this.linkRegistro.nativeElement;

        this.renderer.listen(itemLoginEl, 'click', () => {
            this.renderer.removeClass(itemRegisterEl, 'active');
            this.renderer.addClass(itemLoginEl, 'active');
            this.renderer.removeClass(dvLoginEl, 'd-none');
            this.renderer.addClass(dvRegisterEl, 'd-none');
        });

        this.renderer.listen(itemRegisterEl, 'click', () => {
            this.renderer.addClass(itemRegisterEl, 'active');
            this.renderer.removeClass(itemLoginEl, 'active');
            this.renderer.addClass(dvLoginEl, 'd-none');
            this.renderer.removeClass(dvRegisterEl, 'd-none');
        });

        this.renderer.listen(linkRegistroEl, 'click', () => {
            this.renderer.addClass(itemRegisterEl, 'active');
            this.renderer.removeClass(itemLoginEl, 'active');
            this.renderer.addClass(dvLoginEl, 'd-none');
            this.renderer.removeClass(dvRegisterEl, 'd-none');
        });
    }

    recuperarContrasenia(): void {
        const linkContraseniaEl = this.linkContrasenia.nativeElement;


        this.renderer.listen(linkContraseniaEl, 'click', () => {
          alert("En desarrollo");
        });
    }

    login(): void {

        this.router.navigate(['contenido']);
        // const user = this.txtNombreUsuario.nativeElement.value;
        // const pass = this.txtClaveSecreta.nativeElement.value;


        // const userLogin = this.personas.find((element) => element.username == user);

        // if(userLogin){
        //     if(userLogin.password == pass){
        //         localStorage.setItem('userSession', userLogin.username);
        //         this.router.navigate([(userLogin.role == 'Admin' ? 'contenido' : 'consultas')]);
        //     }
        //     else{
        //         alert('Password incorrecta!')
        //     }
        // }
        // else{
        //     alert('Usuario no encontrado!');
        // }
    }
}




