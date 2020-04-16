using Pharmacy2U_task.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Pharmacy2U_task.Services
{
    public interface IUserService
    {
        List<User> InitialiseUserList();
        List<User> SaveUserConversions(UserViewModel user, List<User> userListSaved);
    }
}
