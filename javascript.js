
	var i = 0;
	var images = [];
	var time = 2000;

	images[0] = "images/banner1.jpg";
	images[1] = "images/banner2.jpg";
	images[2] = "images/banner3.jpg";

	function slideImg(){
	document.banner.src = images[i];/*assign a value of the src property from the banner object based on the value of 
	images and its index key. Index key is determined by the variable i*/
		
		//If statement to check if i is less than the length of the array Images, if it is, increment i by 1
		if(i < images.length - 1){
			i++;
		}
		//If statement. If i is equal to the length of the array, reset it to 0. Allows to loop through each image of the array. 
		else{
			i = 0;
		}
	
		setTimeout("slideImg()", time);//Method that displays an element for a certain period of time
	}
	
	window.onload = slideImg;//run the slide image function when the script is loaded with the onload event

function checkData(){
	var email_value = document.cust.email.value; //Variable to assign the value of Email field
	
	var atpos = email_value.indexOf("@");//IndexOf is used to get the position of the "@" from the email_value variable
	var dotpos = email_value.lastIndexOf(".");//Last Index Of is used to get the position of the last "." in the email field
	
	if (document./*Document Object*/cust/*Form Object*/.fname/*Object, Field of the form*/.value/*Property of the field*/ == "")
	{
		alert("Please insert your name.");//This is a method, pop up windows that displays message.
		return false;
	}
	
	else if (document.cust.email.value == "")
	{
		alert("Please insert your email.");//This is a method, pop up windows that displays message.
		return false;
		
	}
	
	//Validation for Email format
	else if (atpos < 1 /*Checks if position of @ is at the start*/ 
	|| dotpos < atpos + 2 /*Checks if there is any value after @ and before the last dot*/ 
	|| dotpos + 2 > email_value.length /*Checks if there are values after the dot*/)
	{
		alert("Enter Valid Email Address");
		return false;
	}
		
	else if (document.cust.message.value == "")
	{
		alert("Please insert your comment");//This is a method, pop up windows that displays message.
		return false;
	}
	
	else if (document.cust.message.value.length > 450)
	{
		alert("Maximum Limit of Characters is 450");//This is a method, pop up windows that displays message.
		return false;
	}
	else{
		return true;
	}
	
}




