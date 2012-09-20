$(document).ready( function() {
   
   $('#advancedoptions').hide();
   
   $('#req_location').bind( 'change', function(evt) {       
       if(evt.target.value==1) {
           $('#loc_div').hide();
       } else {
           $('#loc_div').show().css('display','inline');
       }
      });
      
   $('#req_name').bind( 'change', function(evt) {
         if(evt.target.value==1) {
             $('#name_div').hide();      
         } else {
             $('#name_div').show().css('display','inline');
         }

    });
    
   $('#req_sample_interval').bind( 'change', function(evt) {
         if(evt.target.value==0) {
             $('#sample_interval_option').hide();
             
         } else {
             $('#sample_interval_option').show().css('display','inline');
         }

    });
   
});
