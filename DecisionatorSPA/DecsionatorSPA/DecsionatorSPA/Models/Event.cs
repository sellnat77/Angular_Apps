using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DecsionatorSPA.Models
{
    public class Event
    {
        public String EventID { get; set; }
        public String Topic { get; set; }
        public String Attending { get; set; }
        public String Invited { get; set; }
    }
}