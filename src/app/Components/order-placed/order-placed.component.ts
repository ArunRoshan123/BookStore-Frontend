import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface DetailsElement{
  email: string,
  contact: number,
  address: string
}
@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.component.html',
  styleUrl: './order-placed.component.scss'
})
export class OrderPlacedComponent {
  displayedColumns: string[] = ['email','contact','address']
  dataSource = ELEMENT_DETAILS;

  constructor(public router:Router){}
  goToDashboard(){
    this.router.navigate(['/dashboard']);
  }
}
const ELEMENT_DETAILS:DetailsElement[]=[
  {
    email:'arunraksha234@gmail.com',
    contact:9963877148,
    address:'urapakkam, chennai, tamilnadu'
  }
]
