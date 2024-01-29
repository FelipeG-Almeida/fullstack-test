import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class RefreshAcademiasService {
    private updateSubject = new Subject<void>();

    refreshAcademias() {
        this.updateSubject.next();
    }

    getUpdateObservable() {
        return this.updateSubject.asObservable();
    }
}
