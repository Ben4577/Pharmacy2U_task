using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Pharmacy2U_task.Models
{
    public class User
    {
        public User()
        {
            UserConversions = new List<UserConversion>();
        }

        public string FirstName { get; set; }
        public List<UserConversion> UserConversions;
    }
}
