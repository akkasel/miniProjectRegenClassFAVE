console.log("Hello")

console.log(day, month+1, year)

function validate(){
    let name=document.getElementById("name").value;
    let email=document.getElementById("email");
    let message=document.getElementById("message");

    if (name.length <3){
        error_message.innerHTML="Enter a valid name!"
        return;
    }

    if (email.value.indexOf("@")==-1 || email.value.indexOf(".com")==-1|| email.value.length<1){
        error_message.innerHTML="Enter a valid email!"
        return;
    }

    if (message.length < 3){
        error_message.innerHTML="Enter a valid message!"
        return;
    }
    console.log("Name: "+name,"Email: "+email.value,"Message: "+message.value);
    error_message.style.background="green"
    error_message.style.color="white"
    error_message.innerHTML="You will get a callback soon!"
    alert("Form submitted successfully!")
}