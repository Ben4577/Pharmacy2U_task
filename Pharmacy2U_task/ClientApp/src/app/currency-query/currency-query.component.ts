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


    ngOnInit() {
        //display Users
        this.userService.getUsersConversions().subscribe(result => {
            this.userResults = result;
        }
        );

  }

}
