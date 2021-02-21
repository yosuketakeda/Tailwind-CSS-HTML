$(document).ready(function(){
    $(".toggle-btn").click(function(){
        if(!$("#nav-toggle").hasClass("active")){
            $("#nav-toggle").addClass("active");
        }else{
            $("#nav-toggle").removeClass("active");
        }
    });
    $(".sidebar .title").click(function(e){
        if(!$(e.target).closest(".section-group").find(".section-items").hasClass("active")){
            $(e.target).closest(".section-group").find(".section-items").addClass("active");
        }else{
            $(e.target).closest(".section-group").find(".section-items").removeClass("active");
        }        
    });
});