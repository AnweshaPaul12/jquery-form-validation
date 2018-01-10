
    jQuery(document).ready(function($){

       $("#firstname").focusout(function(){

        if ($('#firstname').val() == '') {
              $(".one").css("display", "block");
              $(this).css("margin-bottom","30px");

          }
          
    });  
       $("#lastname").focusout(function(){

        if ($('#lastname').val() == '') {
              $(".two").css("display", "block");
              $(this).css("margin-bottom","30px");
          }
          
    });  
       $("#email").focusout(function(){

        if ($('#email').val() == '') {
              $(".three").css("display", "block");
              $(this).css("margin-bottom","30px");
          }
          
    }); 
         $("#phonenumber").focusout(function(){

        if ($('#phonenumber').val() == '') {
          $(".four").text("This field is required");
              $(".four").css("display", "block");
              $(this).css("margin-bottom","30px");
          }


      var x=$("#phonenumber").val();
          
          if(x.substring(0,3)!='017' && x.substring(0,3)!='019' && x.substring(0,3)!='018' && x.substring(0,3)!='015' && x.substring(0,3)!='016')
          {
            $(".four").text("invalid phone number");
            $(".four").css("display", "block");
            $(this).css("margin-bottom","30px");

          }
          else if(x.length!=11)
          {
            $(".four").text("phone number must be 11 digit");
            $(".four").css("display", "block");
            $(this).css("margin-bottom","30px");
          }
          else
          {
            $(".four").css("display", "none");
            $(this).css("margin-bottom","3px"); 
          }
        
    });  
         $("#password").focusout(function(){

        if ($('#password').val() == '') {
              $(".five").css("display", "block");
              $(this).css("margin-bottom","30px");
          }
          
    });
       $("#retypepassword").focusout(function(){

        if ($('#retypepassword').val() == '') {
              $(".six").css("display", "block");
              $(this).css("margin-bottom","30px");
          }
          
    });

      $("#firstname").focusin(function(){
        

        $("input").keyup(function(){
              $(".one").css("display", "none");
              $(this).css("margin-bottom","3px");
              

              if(($("#firstname").val().length)>10)
          {
            
            $(".one").text("Firstname should not be more than 10 characters");
            $(".one").css("display", "block");
            $(this).css("margin-bottom","30px");
            
          }
          else {
            
            $(".one").css("display", "none");
            $(this).css("margin-bottom","3px"); 
          }

        

          

    });

            
    });
      $("#lastname").focusin(function(){
      
        $("input").keyup(function(){
              $(".two").css("display", "none");
              $(this).css("margin-bottom","3px");

            if(($("#lastname").val().length)>10)
          {
            
            $(".two").text("Lastname should not be more than 10 characters");
            $(".two").css("display", "block");
            $(this).css("margin-bottom","30px");
          
          }
          else {
            
            $(".two").css("display", "none");
            $(this).css("margin-bottom","3px"); 
          }

            

      });
        
    });
      $("#email").focusin(function(){
        
        $("input").keypress(function(){
              $(".three").css("display", "none");
              $(this).css("margin-bottom","3px");
            

      });
        
    });
      $("#phonenumber").focusin(function(){
        
        $("input").keyup(function(){

              $(".four").css("display", "none");
              $(this).css("margin-bottom","3px");

              

              if(($("#phonenumber").val().length)>11)
          {
            
            $(".four").text("Phone number should be 11 characters");
            $(".four").css("display", "block");
            $(this).css("margin-bottom","30px");
            
          }

          else {
            
            $(".four").css("display", "none");
            $(this).css("margin-bottom","3px"); 
          }



     });
        
    });


      $("#password").focusin(function(){
        
        $("input").keyup(function(){
              $(".five").css("display", "none");
              $(this).css("margin-bottom","3px");

              if(($("#password").val().length)<5)
          {
            
            $(".five").text("Password should be atleast 5 characters");
            $(".five").css("display", "block");
            $(this).css("margin-bottom","30px");
            
          }
          else {
            
            $(".five").css("display", "none");
            $(this).css("margin-bottom","3px"); 
          }
            

      });
        
    });
      $("#retypepassword").focusin(function(){
      

        $("input").keyup(function(){
              $(".six").css("display", "none");
              $(this).css("margin-bottom","3px");

            
          if($("#retypepassword").val()!=$("#password").val())
          {
            $(".six").text("Password should be as the before");
            $(".six").css("display", "block");
            $(this).css("margin-bottom","30px");

          }
          else {
            $(".six").text("Password matched");
            $(".six").css("display", "block");
            $(this).css("margin-bottom","30px");  
          }
            
            

      });
        
    });

      
    

      
      $('#firstname').bind('keyup blur',function(){ 
        var node = $(this);
        node.val(node.val().replace(/[^a-z]/g,'') ); 
         
    }); 
      $('#lastname').bind('keyup blur',function(){ 
        var node = $(this);
        node.val(node.val().replace(/[^a-z]/g,'') ); 
         
    });

      $('#email').change(function(){
        var email =($('#email').val());

      if(email==='' | email=== null) {
          $('#erroremail').show();
      } 
      else {
          var checkemail = email;
          var filter = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9]+.[a-z]{2,4}$/;

          if(filter.test(checkemail)) {
              return true;
          } else {
            $(".three").text("email address is not correct");
             $(".three").css("display", "block");
             $("#email").css("margin-bottom","30px");
              return false;
          }
      }
    });
      

$('#submitbutton').click(function(){

        valid = true;   

          if ($('#firstname').val() == '') {
              $(".one").css("display", "block");
              $("#firstname").css("margin-bottom","30px");
          }

          if ($('#lastname').val() == '') {
              $(".two").css("display", "block");
              $("#lastname").css("margin-bottom","30px");
          }   

          if ($('#email').val() == '') {
              $(".three").css("display", "block");
              $("#email").css("margin-bottom","30px");
          }  


          if ($('#phonenumber').val() == '') {
              $(".four").css("display", "block");
              $("#phonenumber").css("margin-bottom","30px");
          }  


          if ($('#password').val() == '') {
             $(".five").css("display", "block");
              $("#password").css("margin-bottom","30px");
          }  


          if ($('#retypepassword').val() == '') {
              $(".six").css("display", "block");
              $("#retypepassword").css("margin-bottom","30px");
          } 

        

      });



    });