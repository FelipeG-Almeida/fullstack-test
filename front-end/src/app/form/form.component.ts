import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css'],
})
export class FormComponent {
    academiaForm: FormGroup;

    constructor(private fb: FormBuilder, private apiService: ApiService) {
        this.academiaForm = this.fb.group({
            nome: ['', Validators.required],
            endereco: ['', Validators.required],
            status: ['Aberto', Validators.required],
            mascara: ['Obrigatório', Validators.required],
            toalha: ['Obrigatório', Validators.required],
            bebedouro: ['Parcial', Validators.required],
            vestiarios: ['Liberado', Validators.required],
            weekDays: [''],
            sab: [''],
            dom: [''],
        });
    }

    cadastrarAcademia() {
        if (this.academiaForm.valid) {
            this.apiService
                .saveAcademia(this.academiaForm.value)
                .subscribe(() => {
                    this.apiService.notifyUpdateAcademias();
                });
        }

        this.academiaForm.reset();
    }
}
