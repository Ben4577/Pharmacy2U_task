import { Injectable } from '@angular/core';
import { UserViewModel } from '../models/UserVewModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User, UserConversion } from '../models/AllUsersViewModel';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    baseURL: string;

    constructor(private http: HttpClient) {
        this.baseURL = 'https://localhost:44360/Conversion/';
    }


    save(user: UserViewModel){
        const url = this.baseURL + 'saveUserConversion';
        return this.http.post(url, user);
    }


    getUsersConversions(selectedName: string): Observable<UserConversion[]> {
        const url = this.baseURL + 'getUsersConversions/' + selectedName;
        return this.http.get(url) as Observable<UserConversion[]>;
    }


    getUserNames(): Observable<User[]> {
        const url = this.baseURL + 'getUserNames';
        return this.http.get(url) as Observable<User[]>;
    }

}
