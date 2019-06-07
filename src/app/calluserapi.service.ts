import { Injectable } from '@angular/core';
import { HttpClient , HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import {  BeanClass  } from './beanclass';
@Injectable()
export class CallapiService {
id = 9;
constructor(private http: HttpClient) {}
callfunction(): Observable<BeanClass> {

return this.http.get<BeanClass>('http://localhost:8002/findcustomer?id=' + this.id);

}
}
