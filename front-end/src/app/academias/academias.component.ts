import { Component, OnInit } from '@angular/core';
import { Academia } from '../models/academia';
import { ApiService } from '../services/api.service';
import { RefreshAcademiasService } from '../services/refresh-academias.service';

@Component({
    selector: 'app-academias',
    templateUrl: './academias.component.html',
    styleUrls: ['./academias.component.css'],
})
export class AcademiasComponent implements OnInit {
    academias: Academia[] = [];
    editMode = false;

    constructor(
        private apiService: ApiService,
        private refreshAcademias: RefreshAcademiasService
    ) {}

    ngOnInit(): void {
        this.getAcademias();
        this.refreshAcademias.getUpdateObservable().subscribe(() => {
            this.getAcademias();
        });
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

    startUpdate(academia: Academia) {
        academia.editMode = true;
    }

    cancelUpdate(academia: Academia) {
        academia.editMode = false;
    }

    deleteAcademia(academia: Academia) {
        this.apiService.deleteAcademia(academia).subscribe(() => {
            this.getAcademias();
        });
    }
}
