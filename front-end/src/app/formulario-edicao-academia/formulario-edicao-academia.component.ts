import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Academia } from '../models/academia';
import { ApiService } from '../services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-formulario-edicao-academia',
    templateUrl: './formulario-edicao-academia.component.html',
    styleUrls: ['./formulario-edicao-academia.component.css'],
})
export class FormularioEdicaoAcademiaComponent implements OnInit {
    @Input()
    academia!: Academia;
    @Output() cancelarEdicao = new EventEmitter<void>();

    academiaForm!: FormGroup;

    constructor(private fb: FormBuilder, private apiService: ApiService) {}

    ngOnInit(): void {
        this.academiaForm = this.fb.group({
            id: [this.academia.id],
            nome: [this.academia.nome, Validators.required],
            endereco: [this.academia.endereco, Validators.required],
            status: [this.academia.status, Validators.required],
            mascara: [this.academia.mascara, Validators.required],
            toalha: [this.academia.toalha, Validators.required],
            bebedouro: [this.academia.bebedouro, Validators.required],
            vestiario: [this.academia.vestiario, Validators.required],
            weekDays: [this.academia.weekDays],
            sab: [this.academia.sab],
            dom: [this.academia.dom],
        });
    }

    cancelarClick() {
        this.cancelarEdicao.emit();
    }

    updateAcademia() {
        console.log(this.academiaForm.value);
        if (this.academiaForm.valid) {
            this.apiService
                .updateAcademia(this.academiaForm.value)
                .subscribe(() => {
                    this.apiService.notifyUpdateAcademias();
                });
            this.cancelarEdicao.emit();
        }
    }
}
