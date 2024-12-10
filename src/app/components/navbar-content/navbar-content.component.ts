import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';


/**
 * @description
 * Componente que crea el menu NavBar de cabecera
 * Este componente muestra el menu de cabecerea del contenido
 */

/**
 * @usageNotes
 *
 * 1. Importa este componente para mostrar el menu dentro de tu pagina
 */


@Component({
    selector: 'app-navbar-content',
    standalone: true,
    imports: [],
    templateUrl: './navbar-content.component.html',
    styleUrl: './navbar-content.component.css'
})
export class NavbarContentComponent implements OnInit {

    @Input() titleNavBar: string = 'The Wild';


    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    salir(): void {
        this.router.navigate(['login']);
    }
}
