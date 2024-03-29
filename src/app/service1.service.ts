import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor(private http:HttpClient) { }
  url='https://fakestoreapi.com/products';

  fetchdata(){
    return this.http.get(`${this.url}`)
  }
  updatedata(data:any,Id:any){
    return this.http.put(`${this.url}/${Id}`,data)
  }
  createdata(data:any){
    return this.http.post(`${this.url}`,data)
  }
  deletedata(Id:any){
    return this.http.delete(`${this.url}/${Id}`)
   }

}
