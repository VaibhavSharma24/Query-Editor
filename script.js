let keyword = "$show";   //Available Query

$(".runn").click(function(){
    let value = $(".text-areaa").val();

    if(value===keyword){
        $(".table-striped").css("visibility", "visible");
    }else{
        $(".table-striped").css("visibility", "hidden");
        alert("Wrong Query");
    }
});






