import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  viewGallery=()=>{
    return this.http.get("https://jsonplaceholder.typicode.com/photos")
  }
}
