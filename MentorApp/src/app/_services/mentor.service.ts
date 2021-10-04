

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MentorService {

  constructor(private http: HttpClient) { }
  fetchAllMentor(){
    return this.http.get( environment.baseUrl);
  }
  deleteMentor(id: number){
    return this.http.delete( environment.baseUrl + id)
  }

  addMentor(mentor: any){
    return this.http.post( environment.baseUrl, mentor)
  }
  // startEndWorkout(id:number, obj:any){
  //   return this.http.patch( environment.baseUrl +"/" + id, obj)
  // }

  // updateWorkout(id: string|null, workout: any){
  //   return this.http.patch( environment.baseUrl +"/"+ id, workout)
  // }

 
}
