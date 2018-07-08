$(document).ready(function() {
    // Determine which heroes are fighting
    var heroes = selectHeroes();

    var base1 = "https://akabab.github.io/superhero-api/api/id/";

    var hero1Url = base1 + heroes.hero1

    var hero2Url = base1 + heroes.hero2

    console.log(heroes);

    console.log(hero1Url);

    console.log(hero2Url);

    // Retrieve the hero data
    $.ajax({
      method: 'GET',
      url: `${hero1Url}.json`,
      crossDomain: true,
    }).done(function(data) {
      console.log(data);
    })

    $.ajax({
      method: 'GET',
      url: `${hero2Url}.json`,
      crossDomain: true,
    }).done(function(data) {
      console.log(data);
    })

    // When the user selects a hero
    $(".heroImg").click(function() {
        $(".heroImg").removeClass("selectedImg")
        $("#submit").prop ("disabled", false);
        $(this).addClass("selectedImg");
        alert("Selected the Champion!");
    });

    // When the user clicks the 'submit' button
    $("#submit").click(function() {
        var selectedElements = $(".selectedImg");
        console.log(selectedElements);

        if (selectedElements.length == 0) {
          $("#submit").prop ("disabled", true);
          alert("CHOOSE A DAMN HERO! IT DOESN'T MATTER IF ITS RA'S AL-GHUL OR THOR!");
        };

        if (selectedElements.length == 1) {
            $("#submit").prop("disabled", false);
            var chosenHero = selectedElements[0];

            alert( $(chosenHero).data("name"));
            document.location.reload()
        };

        if (selectedElements.length == 2) {
            alert("Only ONE can win!.");
        };
    });
});

function displayHeroData(heroData){
  console.log(heroData);
};

//Actual business for the determining
var selectHeroes = function() {
  var hero1;
  var hero2;

  hero1 = Math.floor(Math.random() * 730) + 1;
  hero2 = Math.floor(Math.random() * 730) + 1;

  while(hero1 == hero2) {
    hero2 = Math.floor(Math.random() * 730) + 1;
  }

  return {
    hero1: hero1,
    hero2: hero2
  }
}
