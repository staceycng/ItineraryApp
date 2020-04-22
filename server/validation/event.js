const Validator = require("validator");
const isEmpty = require("./is-empty");


module.exports = function validateEventInput(data) {
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : "";
    //data.start = !isEmpty(data.start) ? data.start : "";


    if (!Validator.isLength(data.name, { min: 2, max: 40 })) {
        errors.name = "Event name must be between 2 and 40 characters";
    }

    if (Validator.isEmpty(data.name)) {
        errors.name = "Event name is required";
    }



    // if(!isEmpty(data.youtube)){
    // 	if(!Validator.isURL(data.youtube)){
    // 		errors.youtube = "Not a valid URL";
    // 	}
    // }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}