import { Component, OnInit } from '@angular/core';
import { Currencies } from '../models/Currencies';
import { UserViewModel } from '../models/UserVewModel';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-currency-conversion',
  templateUrl: './currency-conversion.component.html',
  styleUrls: ['./currency-conversion.component.css']
})
export class CurrencyConversionComponent implements OnInit {

    constructor(private userService: UserService) { }

    user: UserViewModel;
    currencies: Currencies[];
    adminUpdateError: string = ""
    convertedCurrency: number = 0;
    currencyFormat: string = "";
    updatedSuccesfully: string = ""

    ngOnInit() {
        this.user = new UserViewModel();
        this.currencies = this.getCurrencies();
        this.currencyFormat = "";
        this.updatedSuccesfully = "";
    }


    save() {
        this.updatedSuccesfully = "";
        this.adminUpdateError = "";
        if (this.user) {
            //Do the conversion and display it
            if (this.user.currencySelected && this.user.gBPAmount) {
                this.user.convertedAmount = this.currencies.find(x => x.name === this.user.currencySelected).conversion * this.user.gBPAmount;
                this.user.timeConverted = new Date();
                this.currencyFormat = this.user.currencySelected;

            //save Users convertion
                    this.userService.save(this.user).subscribe(result => {
                    this.updatedSuccesfully = "Users Conversion has been Updated Successfully"
                    this.adminUpdateError = "";
            },
                    error => {
                    this.updatedSuccesfully = "";
                    this.adminUpdateError = "there has been an error updating this.";
                    }
            );
            }
            else {
                this.adminUpdateError = "Unable to do conversion."
                this.currencyFormat = "";
            }

           
        }
    }

    getCurrencies() {
        return [
            { name: 'USD' , conversion: 0.80},
            { name: 'AUD', conversion: 0.50},
            { name: 'EUR', conversion: 0.87},
        ];
    }


}
