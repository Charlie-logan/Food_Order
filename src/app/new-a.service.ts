import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewAService {

  constructor(private http:HttpClient) { }

  getAll(){
      return this.http.get('https://foodordersystem.glitch.me/api/foods') 
  }
}
