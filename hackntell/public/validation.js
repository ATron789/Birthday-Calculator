function validateForm() {
  	const name = document.forms["form"]["name"].value;
  	const date = document.forms["form"]["date"].value;
  	if (name == "") {
    	alert("Please enter your name");
    	return false;
  	};
  	if (date == "") {
    	alert("Please enter your birthday");
    	return false;
  	};

	};