using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Pharmacy2U_task.Models
{
    public class UserViewModel
    {
        public string FirstName { get; set; }
        public string currencySelected { get; set; }
        public double GBPAmount { get; set; }
        public double convertedAmount { get; set; }
        public DateTime timeConverted { get; set; }
    }
}
