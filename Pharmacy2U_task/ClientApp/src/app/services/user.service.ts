import { Injectable, Inject } from '@angular/core';
import { UserViewModel } from '../models/UserVewModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    baseURL: string;

    constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this.baseURL = baseUrl;
        this.baseURL = 'https://localhost:44360/Conversion/';


    }

    save(user: UserViewModel): Observable<UserViewModel> {
        const url = this.baseURL + 'saveUserConversion';
        return this.http.post(url, user) as Observable<UserViewModel>;
    }


}
