const Validator = require("validator");
const isEmpty = require("./is-empty");


module.exports = function validateProfileInput(data) {
	let errors = {};

	data.name = !isEmpty(data.name) ? data.name : "";
	//data.start = !isEmpty(data.start) ? data.start : "";


	if(!Validator.isLength(data.name, {min: 2, max: 40})){
		errors.name = "Name must be between 2 and 40 characters";
	}

	if(Validator.isEmpty(data.name)){
		errors.name = "Itinerary name is required";
	}



	// if(!isEmpty(data.youtube)){
	// 	if(!Validator.isURL(data.youtube)){
	// 		errors.youtube = "Not a valid URL";
	// 	}
	// }

	return{
		errors,
		isValid: isEmpty(errors)
	}
}