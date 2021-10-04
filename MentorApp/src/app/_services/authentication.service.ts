// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthenticationService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_models/User';
import { UserService } from './user.service';
 

 
@Injectable({ providedIn: 'root' })
export class AuthenticationService {
private currentUserSubject: BehaviorSubject<User>;
public currentUser: Observable<User>;
 
constructor(private http: HttpClient) {
  const userJson = localStorage.getItem('currentUser');
  this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(userJson || '{}'));
  this.currentUser = this.currentUserSubject.asObservable();
}
 
public get currentUserValue(): User {
return this.currentUserSubject.value;
}
 
login(email: string, password: string) {
return this.http.post<any>(`auth/login`, { email, password })
.pipe(map(user => {
if (user && user.token) {
// store user details in local storage to keep user logged in
localStorage.setItem('currentUser', JSON.stringify(user.result));
this.currentUserSubject.next(user);
}
 
return user;
}));
}
 
logout() {
// remove user data from local storage for log out
localStorage.removeItem('currentUser');
this.currentUserSubject.next(null!);
}
}
