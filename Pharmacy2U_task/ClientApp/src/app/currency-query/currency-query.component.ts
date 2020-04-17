import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User, UserConversion } from '../models/AllUsersViewModel';

@Component({
  selector: 'app-currency-query',
  templateUrl: './currency-query.component.html',
  styleUrls: ['./currency-query.component.css']
})
export class CurrencyQueryComponent implements OnInit {

    constructor(private userService: UserService) { }

    //userResults: User[] = [];
    userNames: any[];
    userConversions: UserConversion[];
    selectedName: string;


    ngOnInit() {
        //Get the User Names
        this.userService.getUserNames().subscribe(result => {          
            this.userNames = result;
            console.log(this.userNames);
        });           
    }


    onNameSelected() {
        console.log(this.selectedName);
        //get the Conversion Data for this User
        this.userService.getUsersConversions(this.selectedName).subscribe(result => {
            this.userConversions = result;
            console.log(this.userConversions);
        });
    }



}
