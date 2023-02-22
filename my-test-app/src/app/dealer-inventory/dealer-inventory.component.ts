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
    this.inventorySvc.getInventory().subscribe(list => this.inventory = list)
  }

  constructor(private inventorySvc:InventoryService){}

  inventory:Vehicle[] = []

  trackByVIN(index:number, car:Vehicle) : string {
    return car.VIN
  }

  deleteVehicle(car:Vehicle){
    this.inventorySvc.deleteVehicle(car).subscribe(() => {
      this.inventory = this.inventory.filter(v => v.VIN !== car.VIN)
    })
  }
  
  addVehicle(v:Vehicle) {
    this.inventorySvc.addVehicle(v).subscribe(() => {
      this.inventory.push(v)
    })
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
      .subscribe(() => {
        Object.assign(this.vehicleToEdit!, v)
      this.vehicleToEdit = undefined
      })
  }


}
