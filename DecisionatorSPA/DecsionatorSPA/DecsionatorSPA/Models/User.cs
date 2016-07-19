using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DecsionatorSPA.Models
{
    public class User
    {
        public String UserID { get; set; }
        public String FirstName { get; set; }
        public String LastName { get; set; }
        public String Last_Login { get; set; }
        public String Location { get; set; }
    }
}