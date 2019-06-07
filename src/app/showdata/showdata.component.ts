import { Component, OnInit } from '@angular/core';
import { CallapiService } from '../callapi.service';
import { BeanClass } from '../beanclass';
import { toArray } from 'rxjs/operators';
@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.css']
})
export class ShowdataComponent implements OnInit {
  ss;
  ss1;
  ss2;
  login;
  temp;
  ab: BeanClass[];
  inputdata;
  Tl = false;
  staff = false;
  customer = false;
  status;
  global;
  perPage;
  basePage;
  globaltemp;

  public inputDetails;
  constructor(private service: CallapiService) { }

  ngOnInit() { }

  calluser1(event) {
    this.inputdata = event.id;
    this.Tl = true;
    this.login = true;
    this.service.callfunction()
      .subscribe((res) =>
        this.ss1 = res

      );
    console.log(this.ss);

  }
  calluser(event) {
    this.staff = true;
    this.service.calluser(event)
      .subscribe((res) =>
        this.ss = res

      );

    console.log(this.inputdata);
  }
  callcustomer(event) {
    this.customer = true;

    this.service.callcustomer(event)
      .subscribe((res) =>
        this.ss2 = res

      );

    console.log(event);
    this.global = this.ss2;
    this.paginate(0);
  }
  paginate(ab) {
    this.perPage = 2;
    this.basePage = ab * this.perPage;
    this.global = this.ss2.slice(this.basePage, this.basePage + this.perPage);

  }


}


