import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipments:string[]=["Habitat dome","Drones","Food containers","Oxygen tanks"];
  equipmentBeingEdited:string='';
  constructor() { }

  ngOnInit() {
  }

  add(eName:string)
{
  
  if(!this.equipments.includes(eName))
    this.equipments.push(eName);
  
}

remove(equipment:string)
{
  let index=this.equipments.indexOf(equipment);
  this.equipments.splice(index,1);
}

edit(equipment)
{
  this.equipmentBeingEdited=equipment;
}

save(eName:string,equipment:string)
{
  this.equipments[this.equipments.indexOf(equipment)]=eName;
  this.equipmentBeingEdited='';
}

}
