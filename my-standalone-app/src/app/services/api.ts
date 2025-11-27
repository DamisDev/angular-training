
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  sendData(data: { name: string; email: string }): Observable<any> {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', data);
  }
}
