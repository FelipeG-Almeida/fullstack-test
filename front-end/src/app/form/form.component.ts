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
            situacao: ['aberto', Validators.required],
            mascara: ['obrigatorio', Validators.required],
            toalha: ['obrigatorio', Validators.required],
            bebedouro: ['parcial', Validators.required],
            vestiarios: ['liberado', Validators.required],
            week: [''],
            sab: [''],
            dom: [''],
        });
    }

    cadastrarAcademia() {
        if (this.academiaForm.valid) {
            this.apiService
                .saveAcademia(this.academiaForm.value)
                .subscribe(() => {
                    this.apiService.getAcademias();
                });
        }
    }
}
