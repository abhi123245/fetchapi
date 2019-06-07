import { Injectable } from '@angular/core';
import { HttpClient , HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import {  BeanClass  } from './beanclass';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Injectable()
export class CallapiService implements Resolve<any> {
id = 1;
constructor(private http: HttpClient) {}
resolve(route: ActivatedRouteSnapshot): Observable<any> {
return this.http.get<BeanClass>('http://localhost:8002/finduser?id=' + this.id);

}
calluser(id): Observable<BeanClass> {

return this.http.get<BeanClass>('http://localhost:8002/finduser?id=' + id);

}

callcustomer(id): Observable<BeanClass> {

return this.http.get<BeanClass>('http://localhost:8002/findcustomer?id=' + id);

}



}

