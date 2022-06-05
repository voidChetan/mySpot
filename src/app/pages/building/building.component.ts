import { Component, OnInit } from '@angular/core';
import { IBuilding } from 'src/app/core/models/buildingModel';
import { MasterService } from 'src/app/core/services/master.service';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {

  buildingObj: IBuilding;
  gridData: any[] = [];
  constructor(private masterSrv: MasterService) {
    this.buildingObj = {
      buildingId: 0,
      createdDate: undefined,
      buildingName: '',
      isActive: false
    }
    this.initbuildingObj();
  }

  ngOnInit(): void {
    debugger;
    this.loadGrid();
  }
  initbuildingObj() {
    this.buildingObj = {
      buildingId: 0,
      createdDate: undefined,
      buildingName: '',
      isActive: false
    }
  }

  loadGrid() {
    this.masterSrv.getAllBuilding().subscribe((res: any) => {
      this.gridData = res;
    })
  }
  openModel() { 
      document.getElementById('myModal').style.display = "block";  
  }
  closeModel() {
   document.getElementById('myModal').style.display = "none"; 
  }
  save() {
    this.masterSrv.saveBuilding(this.buildingObj).subscribe((result)=>{
      this.closeModel();
      this.loadGrid();
    });
  }
  update() {
    this.masterSrv.updateBuilding(this.buildingObj).subscribe((result)=>{
      this.closeModel();
      this.loadGrid();
    });
  }
  onDelete(id: number) {
    this.masterSrv.deleteBuilding(id).subscribe((result)=>{
      this.closeModel();
      this.loadGrid();
    });
  }

  onEdit(item: any) {
    this.buildingObj = item;
    this.openModel();
  }

}
