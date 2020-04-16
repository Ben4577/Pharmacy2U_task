
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Pharmacy2U_task.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Pharmacy2U_task.Services
{
    public class UserService : IUserService
    {
        //ISession session;
        private List<User> userList;
        const string sessionKey = "userList";

        public UserService()
        {

        }


        public List<User> InitialiseUserList()
        {
            userList = new List<User>
            {
                new User
                {
                    FirstName = "Kate",
                    UserConversions = new List<UserConversion>
                    {
                        new UserConversion
                        {
                        CurrencyType = "AUD",
                        GBPAmount = 145.24,
                        ConvertedAmount = 72.62,
                        TimeConverted = DateTime.Now.AddDays(-20)
                        },
                        new UserConversion
                        {
                        CurrencyType = "USD",
                        GBPAmount = 46.24,
                        ConvertedAmount = 36.99,
                        TimeConverted = DateTime.Now.AddDays(-10)
                        },
                        new UserConversion
                        {
                        CurrencyType = "USD",
                        GBPAmount = 679.10,
                        ConvertedAmount = 543.28,
                        TimeConverted = DateTime.Now.AddDays(-5)
                        },
                 },
                },

                 new User
                {
                    FirstName = "Harry",
                    UserConversions = new List<UserConversion>
                    {
                        new UserConversion
                        {
                        CurrencyType = "EUR",
                        GBPAmount = 45.14,
                        ConvertedAmount = 39.27,
                        TimeConverted = DateTime.Now.AddDays(-20)
                        },
                        new UserConversion
                        {
                        CurrencyType = "AUD",
                        GBPAmount = 98.09,
                        ConvertedAmount = 49.05,
                        TimeConverted = DateTime.Now.AddDays(-10)
                        },
                        new UserConversion
                        {
                        CurrencyType = "USD",
                        GBPAmount = 34.08,
                        ConvertedAmount = 27.26,
                        TimeConverted = DateTime.Now.AddDays(-5)
                        },
                 },
                },

            };

            return userList;
        }



        public List<User> SaveUserConversions(UserViewModel user, List<User> userListSaved)
        {

            //add User if not created
            var existingUser = userListSaved.Where(x => x.FirstName == user.FirstName).FirstOrDefault();

            if (existingUser != null)
            {
                //update saved User
                existingUser.UserConversions.Add(
                    new UserConversion
                    {
                        CurrencyType = user.currencySelected,
                        GBPAmount = user.GBPAmount,
                        ConvertedAmount = user.convertedAmount,
                        TimeConverted = user.timeConverted
                    }
                    );
                return userListSaved;
            }
            else
            {
                //New User. add to the saved User list
                User newUser = new User
                {
                    FirstName = user.FirstName,
                    UserConversions = new List<UserConversion>
                    {
                        new UserConversion
                        {
                        CurrencyType = user.currencySelected,
                        GBPAmount = user.GBPAmount,
                        ConvertedAmount = user.convertedAmount,
                        TimeConverted = user.timeConverted
                        }
                    }
                };
                userListSaved.Add(newUser);
                return userListSaved;
            };

        }





    }
}
