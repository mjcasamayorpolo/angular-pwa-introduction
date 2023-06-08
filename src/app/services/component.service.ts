import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../models/image.interface';

@Injectable({
  providedIn: 'root',
})
export class ComponentService {
  constructor(private http: HttpClient) {}

  getAllImages(): Observable<Image[]> {
    return this.http.get<Image[]>('https://fakestoreapi.com/products');
  }

  getImageById(id: any): Observable<Image> {
    return this.http.get<Image>('https://fakestoreapi.com/products/' + id);
  }
}
