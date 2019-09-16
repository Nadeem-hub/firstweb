   $(document).ready(function() {
       $("#box").click(function(){
           $("#box").css("background-color","green");
           var a = $("#box").html();
           console.log(a);
       });
       $("#box").dblclick(function(){
           $("#box").css("background-color","blue");
           var a = $("#box").html();
           console.log(a);
       });
       $("#box").contextmenu(function(){
           $("#box").css("background-color","orange");
           var a = $("#box").html();
           console.log(a);
       });
       $("#box").mouseenter(function(){
           $("#box").css("background-color","tan");
           var a = $("#box").html();
           console.log(a);
       });
       $("#box").mouseleave(function(){
           $("#box").css("background-color","white");
           var a = $("#box").html();
           console.log(a);
       });
       $("body").keypress(function(){
           $(this).css("background-color","red");
           var a = $("#box").html();
           console.log(a);
       });
       $("body").keyup(function(){
        $(this).css("background-color","yellow");
        var a = $("#box").html();
        console.log(a);
       });
     $("body").keydown(function(){
        $(this).css("background-color","aqua");
        var a = $("#box").html();
        console.log(a);
      });
     $("#sname,#sclass,#scountry").focus(function(){
        $(this).css("background-color","lime");
        var a = $("#box").html();
        console.log(a);
      });
     $("#sname,#sclass,#scountry").mouseleave(function(){
        $(this).css("background-color","white");
        var a = $("#box").html();
        console.log(a);
     });
     $("#sname,#sclass,#scountry").mouseenter(function(){
        $(this).css("background-color","green");
        var a = $("#box").html();
        console.log(a);
     });
    // other method one by one
    // $("#sclass").focus(function(){
    //     $(this).css("background-color","lime");
    //     var a = $("#box").html();
    //     console.log(a);
    // });
    // $("#sclass").mouseleave(function(){
    //     $(this).css("background-color","white");
    //     var a = $("#box").html();
    //     console.log(a);
    // });
    // $("#sclass").mouseenter(function(){
    //     $(this).css("background-color","green");
    //     var a = $("#box").html();
    //     console.log(a);
    // });
    // $("#scountry").focus(function(){
    //     $(this).css("background-color","lime");
    //     var a = $("#box").html();
    //     console.log(a);
    // });
    // $("#scountry").mouseleave(function(){
    //     $(this).css("background-color","white");
    //     var a = $("#box").html();
    //     console.log(a);
    // });
    // $("#scountry").mouseenter(function(){
    //     $(this).css("background-color","green");
    //     var a = $("#box").html();
    //     console.log(a);
    // });
    $("#scountry").change(function(){
        // $(this).css("background-color","orange");
        var a = $(this).val();
        $("#test").html(a);
    });
    $("#sname,#sclass").select(function(){
        $(this).css("background-color","yellow");
    });
    $("#sform").submit(function(){
        //$(this).css("background-color","yellow");
        var name = $("#sname").val();
        var classname = $("#sclass").val();
        var country = $("#scountry").val();
        alert("Welcome" + name +"class :"+classname+"country:"+country);
     });
     //get method
     $("#box").click(function(){
     var a = $("#box").html();
     console.log(a);
     });
   $("#clickbutton").click(function(){
    $("#box h4").text("Don't try to read this");
    $("#box p").html("Now you can <b>read</b>");
    $("#box h4").attr("class","red");
   });
   //not work?
   $("#addbutton").click(function(){
       $("#box").addClass("first second");
   });
   $("#removebutton").click(function(){
    $("#box").removeClass("second");
 });
 $("#togglebutton").click(function(){
    $("#box").toggleClass("second");
  });
 });