$(document).ready(function(){
    $('#name').focus();
    $('.dismis').on('click',function(){
    $("#myvideo, .dismis").hide();
      });
       $('#name').on('click',function(){
      $('.alert1').show()
    });
    var timeout = "";
    
   $('.submit').on('click',function(){
     	$(this).parent().parent().fadeOut(400).next('div').fadeIn(500);
     	var ime = $('#name').val();
    	$('#name').focus();
      $('.first').html("Јас се Викам" + "  " + ime );
      $('#name').focus();
   });
   $(document).keypress(function (event) {
      if (event.keyCode == 13) {
          $('#name').parent().parent().fadeOut(400).next('div').fadeIn(500);
          var ime = $('#name').val();
          $('#name').focus();
          $('.first').html("Јас се Викам" + "  " + ime );
          $('#name').focus();
      }
   });
   // Desktop Version
   $(".back").on('click',function(){
    clearTimeout(timeout);
    $('video').hide();
    $("#myvideo, .dismis").hide();
      $(this).parent().fadeOut(400).prev('div').fadeIn(400);      
      $('#name').focus();
      $('#name').val('');

   });  
   $(document).on('click','.list-group-item',function(){
     clearTimeout(timeout);
      var video_url = $(this).attr('data-url');
      $('#myvideo').attr('src', video_url);
      $('#myvideo').get(0).play();
      $("#myvideo, .dismis").show();
   });
   $(document).on('click', '.bukvi li',function(){
      clearTimeout(timeout);
      var video_url = $(this).attr('data-url');
      $('#myvideo').attr('src', video_url);
      $('#myvideo').get(0).play();
      $("#myvideo, .dismis").show();
      
      
   });
  
   $(document).on('click','.first',function(e){
        var video=document.getElementById('myvideo');
        $('#myvideo').attr("src",$(this).attr("data-url"));
        $('#myvideo').get(0).play();
        $("#myvideo, .dismis").show();
        
     
        var letters=$('#name').val().toLowerCase().split("");      
             var i = 1;                     
                function myLoop () 
                {  
                 if(letters.length>0)
                 {        
                   timeout = setTimeout(function () 
                   {    
                       var url=$("#"+letters[0]+"").attr("data-url");
                      $("#myvideo").attr("src",url); 
                      i++;                    
                      if (i < 10) {    
                         myLoop();           
                      }  
                       letters.shift();                      
                   }, 3000)
                }
            }
    myLoop();  
    e.preventDefault();
    

  });
   // Mobile Version
   if ( /Android|webOS|iPhone/i.test(navigator.userAgent)) {
    $('.desktop').hide();
    $('.mob').show();
    $(document).on('click','.list-group-item',function(){
       clearTimeout(timeout);
      var video_url = $(this).attr('data-url');
      $('#myvideo1').attr('src', video_url);
      $('#myvideo1').get(0).play();
      $(window).scrollTop(0);
      $('#myvideo1').get(0).webkitRequestFullscreen();
    });
    $(document).on('click','.mobilen li',function(){
       clearTimeout(timeout);
      var video_url = $(this).attr('data-url');
      $('#myvideo1').attr('src', video_url);
      $('#myvideo1').get(0).play();
      $(window).scrollTop(0);
      $('#myvideo1').get(0).webkitRequestFullscreen();
    });
    $('.first').on('click',function(e){
        var video=document.getElementById('myvideo1');
        $('#myvideo1').attr("src",$(this).attr("data-url"));
        $('#myvideo1').get(0).play();
        var letters=$('#name').val().toLowerCase().split("");      
             var i = 1;                     
                function myLoop () 
                {  
                 if(letters.length>0)
                 {        
                timeout = setTimeout(function () 
                   {    
                       var url=$("#"+letters[0]+"").attr("data-url");
                      $("#myvideo1").attr("src",url); 
                      i++;                    
                      if (i < 10) {    
                         myLoop();           
                      }  
                       letters.shift();                      
                   }, 3000)
                }  
            }
         myLoop();  
         e.preventDefault();
         $(window).scrollTop(0);    
         $('#myvideo1').get(0).webkitRequestFullscreen();
     });
    
 } else{
       $('.mob').hide();
      $('.desktop').show();

  }
  $('video').hide();

});
