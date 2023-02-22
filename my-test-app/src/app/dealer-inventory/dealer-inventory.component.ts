import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-dealer-inventory',
  templateUrl: './dealer-inventory.component.html',
  styleUrls: ['./dealer-inventory.component.css']
})

export class DealerInventoryComponent implements OnInit{
  ngOnInit(): void {
    this.inventory = this.inventorySvc.getInventory()
  }

  constructor(private inventorySvc:InventoryService){}

  inventory:Vehicle[] = []

  trackByVIN(index:number, car:Vehicle) : string {
    return car.VIN
  }

  deleteVehicle(car:Vehicle){
    this.inventorySvc.deleteVehicle(car)
    this.inventory = this.inventorySvc.getInventory()
    // this.inventory = this.inventory.filter(c => c.VIN != car.VIN)
  }
  
  addVehicle(v:Vehicle) {
    this.inventorySvc.addVehicle(v)
    this.inventory = this.inventorySvc.getInventory()
    // this.inventory.push(v)
  }

  handlePhotoNavigation(photoIndex:number, car:Vehicle){
    if (photoIndex == car.photos.length - 1) {
      alert("Come visit showroom!")
    }
  }

  vehicleToEdit?:Vehicle

  beginEditing(v:Vehicle){
    this.vehicleToEdit = v;
  }

  commitEdit(v:Vehicle){
    this.inventorySvc.updateVehicle(this.vehicleToEdit!.VIN, v)
    this.inventory = this.inventorySvc.getInventory()
    // Object.assign(this.vehicleToEdit!, v)
    this.vehicleToEdit = undefined
  }


}
