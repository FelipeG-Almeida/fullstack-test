import { Component, OnInit } from '@angular/core';
import { Academia } from '../models/academia';
import { ApiService } from '../services/api.service';

@Component({
    selector: 'app-academias',
    templateUrl: './academias.component.html',
    styleUrls: ['./academias.component.css'],
})
export class AcademiasComponent implements OnInit {
    academias: Academia[] = [];

    constructor(private apiService: ApiService) {}

    ngOnInit(): void {
        this.getAcademias();
    }

    vestiarioImage(opc: String) {
        if (opc === 'Liberado') {
            return '../../assets/images/required-lockerroom.png';
        } else if (opc === 'Parcial') {
            return '../../assets/images/partial-lockerroom.png';
        } else {
            return '../../assets/images/forbidden-lockerroom.png';
        }
    }

    getAcademias() {
        this.apiService.getAcademias().subscribe((academias: Academia[]) => {
            this.academias = academias;
        });
    }
}
