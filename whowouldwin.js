

$(document).ready(function() {
    $(".heroImg").click(function() {
        $(".heroImg").removeClass("selectedImg")
        $(this).addClass("selectedImg");
        alert("Selected the Champion!");
    });


    $("#submit").click(function() {

        var selectedElements = $(".selectedImg");
        console.log(selectedElements);


        if (selectedElements.length == 0) {
            alert("Choose a winner.");
        };

        if (selectedElements.length == 1) {
            alert("Triumphant is the winner!");
        };

        if (selectedElements.length == 2) {
            alert("Only ONE can win!.");
        };
    });

});



// function yoMan(name){
//   console.log("Yo man, I'm a weak little twerp who dances like a dead dolphin.");
// }
