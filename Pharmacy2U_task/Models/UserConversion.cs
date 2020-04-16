using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Pharmacy2U_task.Models
{
    public class UserConversion
    {
        public string CurrencyType { get; set; }
        public double GBPAmount { get; set; }
        public double ConvertedAmount { get; set; }
        public DateTime TimeConverted { get; set; }
    }
}
