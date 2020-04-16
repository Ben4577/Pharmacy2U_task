import { Injectable } from '@angular/core';
import { UserViewModel } from '../models/UserVewModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/AllUsersViewModel';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    baseURL: string;

    constructor(private http: HttpClient) {
        this.baseURL = 'https://localhost:44360/Conversion/';
    }


    save(user: UserViewModel): Observable<UserViewModel> {
        const url = this.baseURL + 'saveUserConversion';
        return this.http.post(url, user) as Observable<UserViewModel>;
    }


    getUsersConversions(): Observable<User[]> {
        const url = this.baseURL + 'getUsersConversions';
        return this.http.get(url) as Observable<User[]>;
    }

}
