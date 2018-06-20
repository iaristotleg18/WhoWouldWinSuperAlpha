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
          $("submit").prop (element.disabled = false);
        };

        if (selectedElements.length == 1) {
            $("submit").prop(element.disabled = false);
            var chosenHero = selectedElements[0];

            alert( $(chosenHero).data("name"));
            document.location.reload()
        };

        if (selectedElements.length == 2) {
            alert("Only ONE can win!.");
        };
    });

});

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

       ====== HTML ======
      ...
      <div class="test" data-role="book"></div>
      <div class="test" data-role="page"></div>
      ...

       ====== Javascript ======
      var allTests = $(".test")

      var secondElement = allTests[2]
      print(secondElement.data('role)'))

      .data("role"); //  this makes a variable called thirdRole that equals 'book'
      var fourthRole = allTests[3].data( "role" ); // this makes a variable called fourthRole that equals 'page'

      Except, instead of data-role you are looking for data-name.

    Ok, this should be enough to push you through.
    As always, message me if you have questions
   */
