

$(document).ready(function() {
<<<<<<< HEAD
    $(".heroImg").click(function() {
        $(".heroImg").removeClass("selectedImg")
        $(this).addClass("selectedImg");
        alert("Selected the Champion!");
    });
=======
  $(".heroImg").click(function() {
    $( ".heroImg" ).removeClass( "selectedImg")
    $(this).addClass("selectedImg");
    alert( "Selected the Champion!" );
  });
  //$(".brown").click(yoMan);

  /* =================================
    You do not need this click function.
    By saying $("#button").click... you are telling the code to fire the function
    whenever an element with id=button. There is no such element in your HTML.

    You could say $("button").click... without the '#', and that would fire when any
    <button> element is clicked. But this is unnecessary because we already have $("#submit").click...

    So you can delete the #button.click and the #brown.click
  ================================= */

  $("#button").click(function() {
        // alert( "Superhuman Selected. Now see what other people think!");

        if (selectedImg.length == 1 )(onclick.length == "submit"){
           alert($("#data-name").val());
>>>>>>> b2150740a37cf169469dd5f719623b45ab94bb6b


<<<<<<< HEAD
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
=======
  /* =================================
    This #submit.click... function is very close to being correct, good work!

    Currently you are only alerting when there are either 0 heroes choosen or 2 heroes choosen

    What you need to do:
    1) Add the alert for when there is 1 hero choosen.
    2) In the alert, print the name of the hero choosen.

    How to do it:
    ...First you need to understand your selectedElements variable...
    selectedElements is an array, which means it holds multiple elements.
    You call ->
        var selectedElements = $(".selectedImg");
    Let's break it down:
        var selectedElements = ...
      this tells javascript to make a new variable called selectedElements
        ... = $(...)
      this tells javascript that the variable will hold all html elements with a certain class/id/type
        ...".selectedImg"
      this tells javascript to get all elements with class (because of the '.') 'selectedImg'

      so all together
        var selectedElements = $(".selectedImg");
      creates an array that holds html elements with the class 'selectedImg'


    ...Second you need to understand how to get data from an element in an array...
    You haven't done this before, but I put it in the notes. Ill put it here again
    You will need to call ->
        var heroName = selectedElements[...index of element...]
      Let's break it down:
        var heroName = ...
      this tells javascript to make a new variable called heroName
        ... = selectedElements[...]
      tells javascript to get the data from an element in the array -- thats what the '[]' does
        ... = selectedElements[...index of element...]
      tells javascript which specific element to get, should be a number (0,1,2,3,4,5...)
      REMEMBER: when you count in code, start at 0
      So if you want the 3rd element in an array, you call
        var heroName = selectedElements[2]

      In your new if statement where the length of selectedElements is 1, there is only 1 element.
      Hence why you want to get the data from the FIRST element


    ...Third you need to get the title from the HTML element after you have selected it...
      Once you have access to the first element in selectedElements, you will want to get access to data-name, so you can print it.
      You can use the jquery attr() or data() function to do this. It's easy with the data function.
      Here is the documentation for it: https://api.jquery.com/data/

      Here is a helpful example:

      / ====== HTML ====== /
      ...
      <div class="test" data-role="book" data-value="20"></div>
      <div class="test" data-role="page" data-value="43"></div>
      ...

      / ====== Javascript ====== /
      var allTests = $(".test")

      var thirdRole = allTests[2].data("role"); //  this makes a variable called thirdRole that equals 'book'
      var fourthRole = allTests[3].data( "role" ); // this makes a variable called fourthRole that equals 'page'
      var randomVariableName = allTests[2].data( "value" ); // randomVariableName == 20

      Except, instead of data-role you are looking for data-name.

    Ok, this should be enough to push you through.
    As always, message me if you have questions
  ================================= */

  $("#submit").click(function(){

    // Here we defined selectedElements
    var selectedElements = $(".selectedImg");
    console.log(selectedElements);

        // Here you are trying to reference, selectedImg, but you don't have a variable named that
        // Currently the only variable you have (and need) is selectedElements
        // You need to check the length of selectedElements not selectedImg
        if (selectedImg.length == 0){
          alert("Choose a winner.");
        };
        if (selectedImg.length == 2){
          alert("Only ONE can win!.");
        };
    });

  });
>>>>>>> b2150740a37cf169469dd5f719623b45ab94bb6b



// function yoMan(name){
//   console.log("Yo man, I'm a weak little twerp who dances like a dead dolphin.");
// }
