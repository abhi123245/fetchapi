import { Component, OnInit } from '@angular/core';
import { CallapiService } from '../callapi.service';
import {  BeanClass  } from '../beanclass';
import { toArray } from 'rxjs/operators';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

 ss ;
ab: BeanClass[];
  constructor(private service: CallapiService) { }

  ngOnInit() {
 this.service.callfunction()
 .subscribe((res) =>
this.ss =  res

);
console.log(this.ss);

}


}
