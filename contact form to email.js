function emailSend(){

    var userName = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var messageBody = "Name" + userName + 
    "<br/> phone " + phone +
    "<br/>  Email"  + email;



    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "millycyrus@gmail.com",
    Password : "AF1C740023C1A31BF0604839F91064B31668",
    To : "nicolemugeshi@gmail.com",
    From : "millycyrus@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}