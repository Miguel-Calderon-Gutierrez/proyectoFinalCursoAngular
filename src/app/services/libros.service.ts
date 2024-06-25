import { Injectable } from '@angular/core';
import axios, { Axios } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  private apiAxios:Axios = axios.create({
    baseURL: 'http://localhost:3000'
  })

  public async getLibros(){
    const { data }=await this.apiAxios.get('/libros');
    return data.libros;
  }

  public async deleteLibro(id:number){
    // await this.apiAxios.delete("/libros/"+id);
    await this.apiAxios.delete(`/libros/${id}`);
  }

  public async createLibro(libro:any){
    await this.apiAxios.post("/libros",libro);
  }

}
