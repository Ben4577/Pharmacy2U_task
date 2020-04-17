import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/AllUsersViewModel';

@Component({
  selector: 'app-currency-query',
  templateUrl: './currency-query.component.html',
  styleUrls: ['./currency-query.component.css']
})
export class CurrencyQueryComponent implements OnInit {

    constructor(private userService: UserService) { }

    userResults: User[] = [];
    filteredResults: User[] = [];
    names: any[];
    userConversions: any[];


    ngOnInit() {
        //Get the Users
        //Due to time constraints table could not be completed
        this.userService.getUserNames().subscribe(result => {
            console.log(result);

            this.names = result;
        });

            this.userService.getUsersConversions().subscribe(result => {
                this.userResults = result;

                this.filteredResults = this.userResults
            });
        }

}
