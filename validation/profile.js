const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};
  //we need our data to be an empty string
  data.handle = !isEmpty(data.handle) ? data.handle : "";
  data.status = !isEmpty(data.status) ? data.status : "";
  data.skills = !isEmpty(data.skills) ? data.skills : "";

  if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = "Handle needs to be between 2 and 40 characters ";
  }

  if (Validator.isEmpty(data.handle)) {
    errors.handle = "Profile handle is required";
  }

  if (Validator.isEmpty(data.status)) {
    errors.status = "Status field is required";
  }

  if (Validator.isEmpty(data.skills)) {
    errors.skills = "Skills field is required";
  }
  //checking to see if it is not empty
  if (!isEmpty(data.website)) {
    //if it isn't then check to maker sure it is a URL
    if (!Validator.isURL(data.website)) {
      errors.website = "Not a valid URL";
    }
  }
  //checking to see if it is not empty
  if (!isEmpty(data.youtube)) {
    //if it isn't then check to maker sure it is a URL
    if (!Validator.isURL(data.youtube)) {
      errors.youtube = "Not a valid URL";
    }
  }
  //checking to see if it is not empty
  if (!isEmpty(data.twitter)) {
    //if it isn't then check to maker sure it is a URL
    if (!Validator.isURL(data.twitter)) {
      errors.twitter = "Not a valid URL";
    }
  }
  //checking to see if it is not empty
  if (!isEmpty(data.facebook)) {
    //if it isn't then check to maker sure it is a URL
    if (!Validator.isURL(data.facebook)) {
      errors.facebook = "Not a valid URL";
    }
  }
  //checking to see if it is not empty
  if (!isEmpty(data.linkedin)) {
    //if it isn't then check to maker sure it is a URL
    if (!Validator.isURL(data.linkedin)) {
      errors.linkedin = "Not a valid URL";
    }
  }
  //checking to see if it is not empty
  if (!isEmpty(data.instagram)) {
    //if it isn't then check to maker sure it is a URL
    if (!Validator.isURL(data.instagram)) {
      errors.instagram = "Not a valid URL";
    }
  }
  //returning all the errors
  return {
    errors,
    //it will be valid if all the errors are empty
    isValid: isEmpty(errors)
  };
};
