import { Component, Input } from '@angular/core';
import { Academia } from '../models/academia';

@Component({
    selector: 'app-formulario-edicao-academia',
    templateUrl: './formulario-edicao-academia.component.html',
    styleUrls: ['./formulario-edicao-academia.component.css'],
})
export class FormularioEdicaoAcademiaComponent {
    @Input() academia: Academia | undefined;
}
