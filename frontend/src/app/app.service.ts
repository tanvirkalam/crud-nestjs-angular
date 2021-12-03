import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AppService {
    url = "http://localhost:3000/items"
    constructor(private httpClient: HttpClient) { }

    saveItem(item: any) {
        return this.httpClient.post(this.url, item).toPromise();
    }

    getItems() {
        return this.httpClient.get(this.url).toPromise();
    }

    getItem(id: any) {
        return this.httpClient.get(`${this.url}/${id}`).toPromise();
    }
    deletItem(id: any) {
        return this.httpClient.delete(`${this.url}/${id}`).toPromise();
    }
}

