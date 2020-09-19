$(document).ready(function(){
   
    $('.re').click(function(){
        $('.text').toggle('slow');
        
    });
    
    $('.btn1').click(function(){
        $(this).hide('slow');
        
        $('.btn2').click(function(){
            $('.btn1').show('slow');
        });
    });
      
});