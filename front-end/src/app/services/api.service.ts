import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Academia } from '../models/academia';
import { RefreshAcademiasService } from './refresh-academias.service';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    url = 'http://localhost:8080/academias';

    constructor(
        private httpClient: HttpClient,
        private refreshAcademia: RefreshAcademiasService
    ) {}

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }),
    };

    getAcademias(): Observable<Academia[]> {
        return this.httpClient.get<Academia[]>(this.url);
    }

    saveAcademia(academia: Academia): Observable<Academia> {
        return this.httpClient.post<Academia>(
            this.url,
            JSON.stringify(academia),
            this.httpOptions
        );
    }

    updateAcademia(academia: Academia): Observable<Academia> {
        return this.httpClient.put<Academia>(
            this.url + '/' + academia.id,
            JSON.stringify(academia),
            this.httpOptions
        );
    }

    deleteAcademia(academia: Academia) {
        return this.httpClient.delete<Academia>(
            this.url + '/' + academia.id,
            this.httpOptions
        );
    }

    notifyUpdateAcademias() {
        this.refreshAcademia.refreshAcademias();
    }
}
