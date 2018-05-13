
console.log("Hey world");

$(document).ready(function() {
  $(".heroImg").click(function() {
    $( ".heroImg" ).removeClass( "selectedImg")
    $(this).addClass("selectedImg");
    alert( "Selected the Champion!" );
  });
  //$(".brown").click(yoMan);
  $("#button").click(function() {
        alert( "Superhuman Selected. Now see what other people think!");
  });



    $("#submit").click(function(){

      var selectedElements = $(".selectedImg");
      console.log(selectedElements);
         if (selectedElements == 1){
            alert("Perfect choice. Now commence to the next fight.");

          };
          if (selectedElements == 0){
            alert("Choose a winner.");
          };
          if (selectedElements == 2){
            alert("Only ONE can win!.");
          };



       alert($("#comment").val());
     });

    });



function yoMan(name){
  console.log("Yo man, I'm a weak little twerp who dances like a dead dolphin.");
}
