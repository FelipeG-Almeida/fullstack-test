import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Academia } from '../models/academia';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    url = 'http://localhost:8080/academias';

    constructor(private httpClient: HttpClient) {}
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
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
}
