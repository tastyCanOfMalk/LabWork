import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from './vehicle';

@Injectable({
  providedIn: 'root'
})

export class InventoryService {
  constructor(private httpClient:HttpClient) { }

  private baseURL = 'http://localhost:3000/vehicle'
  
  public getInventory(): Observable<Vehicle[]> {
    return this.httpClient.get<Vehicle[]>(`${this.baseURL}`)
  }

  public addVehicle(v:Vehicle): Observable<any> {
    return this.httpClient.post(`${this.baseURL}`, v)
  }

  public updateVehicle(vin:string, v:Vehicle): Observable<any> {
    return this.httpClient.put(`${this.baseURL}/${vin}`, v)
  }

  public deleteVehicle(v:Vehicle): Observable<any> {
    return this.httpClient.delete(`${this.baseURL}/${v.VIN}`)
  }

}
