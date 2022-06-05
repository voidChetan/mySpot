import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }

  getAllBuilding():Observable<any>{
    debugger;
    return this.http.get("https://localhost:44347/api/Building/GetAllBuildings");
  }

  saveBuilding(input:any):Observable<any>{
    return this.http.post("https://localhost:44347/api/Building/saveBuilding",input);
  }

  updateBuilding(input:any):Observable<any>{
    return this.http.put("https://localhost:44347/api/Building/updateBuilding",input);
  }

  deleteBuilding(id:number):Observable<any>{
    return this.http.delete("https://localhost:44347/api/Building/deleteBuilding?id="+ id);
  }

}
