using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Pharmacy2U_task.Models;
using Pharmacy2U_task.Services;


namespace Pharmacy2U_task.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class ConversionController : Controller
    {
        string sessionKey = "sk";
        List<User> userList;
        private readonly IUserService _userService;

        public ConversionController(IUserService userService)
        {
            _userService = userService;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpPost("saveUserConversion")]
        public IActionResult SaveUserConversion([FromBody] UserViewModel user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            //Get user list from session state if it exists
            var getUserList = HttpContext.Session.GetString(sessionKey);

            if (getUserList != null)
            {
                userList = JsonConvert.DeserializeObject<List<User>>(getUserList);
            }
            else
            {
                //populate list with sample Users
                userList = _userService.InitialiseUserList();
            }

            var updatedUserList = _userService.SaveUserConversions(user, userList);
            //Save UserList to Session State      
            HttpContext.Session.SetString(sessionKey, JsonConvert.SerializeObject(updatedUserList));

            return Ok();
        }




        [HttpGet("getUserNames")]
        public IActionResult GetUserNames()
        {
            //Get all Data from Session to display
            var getUserList = HttpContext.Session.GetString(sessionKey);

            var nameList = new List<UserName>();

            if (getUserList != null)
            {
                userList = JsonConvert.DeserializeObject<List<User>>(getUserList);
                nameList = userList.Select(
                    x => new UserName 
                    {
                        Name = x.FirstName
                    }
                    ).ToList();

            }         
            return Ok(nameList);
        }



        [HttpGet("getUsersConversions/{selectedName}")]
        public IActionResult GetUsersConversions(string selectedName)
        {
            //Get all Data from Session to display
            var getUserList = HttpContext.Session.GetString(sessionKey);

            List<UserConversion> userConversions = new List<UserConversion>();

            if (getUserList != null)
            {
                userList = JsonConvert.DeserializeObject<List<User>>(getUserList);

                //Get data to UI
                var user = userList.Where(x => x.FirstName == selectedName)
                    .Select(
                    x => new User
                    {
                        UserConversions = x.UserConversions
                    }).FirstOrDefault();

                foreach (var us in user.UserConversions)
                {
                    userConversions.Add(us);
                }
            }
            return Ok(userConversions);
        }



    }
}