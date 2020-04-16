
//export class AllUsersViewModel {
//    user: UserViewModel[];
//}

export class User {
    FirstName: string;
    userConversions: UserConversion[];
}

export class UserConversion {
    CurrencyType: string;
    GBPAmount: number;
    ConvertedAmount: number;
    TimeConverted: Date
}
