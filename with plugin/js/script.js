;
jQuery(document).ready(function($) {
  $("form[name='registration']").validate({
    rules: {
      firstname: {
        required: true,
        rangelength: [5, 10]
      },
      lastname: {
        required:true,
        rangelength: [5, 10]
      },
      email: {
        required: true,
        email: true
      },
      phonenumber:{
        required:true,
        rangelength: [11, 11]
      },
      password: {
        required: true,
        minlength: 5
      },
      retypepassword: {
        required: true,
        minlength: 5,
        equalTo: "#password"
      }
    },
    messages: {
      firstname: {
        required:"Please enter your firstname",
        rangelength:"your firstname can't be more than 10 characters long & less than 5 chararcters long"
      },
      lastname: {
        required:"Please enter your lastname",
        rangelength:"your lastname can't be more than 10 characters long & less than 5 chararcters long"
      },
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long"
      },

      phonenumber:{
        required: "please provide your mobile phone number",
        rangelength: "Your phone number must be 11 digit"
      },

      retypepassword: {
        required: "Please retype the password",
        minlength: "Your password must be at least 5 characters long",
        equalTo:"please enter the same as before"
      },
      email: "Please enter a valid email address"
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
});