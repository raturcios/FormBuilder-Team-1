

function registerFunction(email,firstName,lastName,userType,password,rpassword) {
 
 Parse.initialize("q739A3XGOjqeLfXtl4vJXT33UENWvpesaAulyQPD", "uOPMZ9HUu9zDTsZfD7AFpACnmkBWJq5aruLsE3IC");

  var WorkflowUser = Parse.Object.extend("Users");
  var query = new Parse.Query(WorkflowUser);

  query.equalTo("Email", email);

   query.find({
  success: function(results) {

    if(results != ""){
      alert("This userID already exists. Please try again.");
    
    }

    else{
        
        if(password != rpassword){
        alert('You enetered 2 different passwords. Please Confirm your passwords.');
        event.preventDefault();
        }


        else{
            

              var hashpw = CryptoJS.SHA1(password);

              var TestObject = Parse.Object.extend("Users");
              var testObject = new TestObject();

        
             testObject.save(
                {Email: email,
                FirstName: firstName,
                LastName: lastName,
                UserType: userType,
                Password: hashpw.toString(CryptoJS.enc.Base64)},
                  {
                    success: function(testObject) {
                      alert("successfully registered!");
                      window.location = "home.html";
                    },
                    error: function(testObject, error) {
                      alert("Signup Failed. :( " + error.message);
                      // The save failed.
                      // error is a Parse.Error with an error code and message.
                    }
              });
        }
    }
  },
  error: function(error) {
    alert("qurey Error: " + error.code + " " + error.message);
  }
});

event.preventDefault();
 
}


function login(email, password){

  Parse.initialize("q739A3XGOjqeLfXtl4vJXT33UENWvpesaAulyQPD", "uOPMZ9HUu9zDTsZfD7AFpACnmkBWJq5aruLsE3IC");
  
  var WorkflowUser = Parse.Object.extend("Users");
  var query = new Parse.Query(WorkflowUser);

  query.equalTo("Email", email);
 

  query.find({
  success: function(results) {

    if(results == ""){
      alert("Couldn't find your e-mail. Please try again.");
    }
      
      var object = results[0];
      var pw = object.get('Password');

	  var hashedpw = CryptoJS.SHA1(password);

      if(pw == hashedpw.toString(CryptoJS.enc.Base64)){    

        //localStorage.setItem('userID', JSON.stringify(email));
        localStorage.setItem('userID',email);
        window.location = 'main.html'
      }
      else{
        alert("Wrong password")
      }

  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});



}