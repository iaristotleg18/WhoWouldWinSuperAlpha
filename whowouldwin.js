
console.log("Hey world");

$(document).ready(function() {
  $(".heroImg").click(function() {
    $( ".heroImg" ).removeClass( "selectedImg")
    $(this).addClass("selectedImg");
    alert( "Selected the Champion!" );
  });
  //$(".brown").click(yoMan);
  $("#button").click(function() {
        // alert( "Superhuman Selected. Now see what other people think!");
        if ("#data-name" == "#selectedImg"){
           alert($("#data-name").val());

         };
  });



    $("#submit").click(function(){

      var selectedElements = $(".selectedImg");
      console.log(selectedElements);


          if (selectedElements == 0){
            alert("Choose a winner.");
          };
          if (selectedElements == 2){
            alert("Only ONE can win!.");
          };




     });

    });



function yoMan(name){
  console.log("Yo man, I'm a weak little twerp who dances like a dead dolphin.");
}
