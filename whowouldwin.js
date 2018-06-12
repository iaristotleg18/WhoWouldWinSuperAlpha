
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

        if (selectedImg.length == 1 )(onclick.length == "submit"){
           alert($("#data-name").val());

         };
  });



    $("#submit").click(function(){

      var selectedElements = $(".selectedImg");
      console.log(selectedElements);


          if (selectedImg.length == 0){
            alert("Choose a winner.");
          };
          if (selectedImg.length == 2){
            alert("Only ONE can win!.");
          };
      });

    });



function yoMan(name){
  console.log("Yo man, I'm a weak little twerp who dances like a dead dolphin.");
}
