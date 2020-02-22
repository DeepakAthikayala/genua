import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Albums } from './albums';
import { Observable } from 'rxjs/Observable';
import { Photos } from './photos';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
   	return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getAlbums(id): Observable<Albums[]>{
  	return this.http.get<Albums[]>(`https://jsonplaceholder.typicode.com/albums?userId=${id}`);
  }
  

  getPhotos(id): Observable<Photos[]>{
    return this.http.get<Photos[]>(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`);
  }

  getUserPhotos(): Observable<Photos[]>{
    return this.http.get<Photos[]>('https://jsonplaceholder.typicode.com/photos');
  }

}
