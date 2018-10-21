$(document).ready(function() {
    // Determine which heroes are fighting
    var heroes = selectHeroes();
    var base1 = "http://superheroapi.com/api.php/10156085785976648/";
    var hero1Url = base1 + heroes.hero1;
    var hero2Url = base1 + heroes.hero2;

    // Retrieve the hero data
    $.ajax({
      method: 'GET',
      url: hero1Url,
    }).done(function(data) {
        $('.heroName.hero1').text(data.name)
        $('.heroAlter.hero1').text(data.biography['full-name'])
        $('.heroHeight.hero1').text(data.appearance.height[0])
        $('.heroWeight.hero1').text(data.appearance.weight[0])
        $('.heroGender.hero1').text(data.appearance.gender)
        $('.heroRace.hero1').text(data.appearance.race)
        $('.heroIntelligence.hero1').text(data.powerstats.intelligence)
        $('.heroSpeed.hero1').text(data.powerstats.speed)
        $('.heroStrength.hero1').text(data.powerstats.strength)
        $('.heroDurability.hero1').text(data.powerstats.durability)
        $('.heroPower.hero1').text(data.powerstats.power)
        $('.heroGroup.hero1').text(data.connections.groupAffiliation)
        $('.heroApp.hero1').text(data.biography['first-appearance'])
        $(".heroImg.hero1").attr("src", data.image.url)
        $(".heroImg.hero1").attr("data-name", data.name)

    })

    $.ajax({
      method: 'GET',
      url: hero2Url,
    }).done(function(data) {
      $('.heroName.hero2').text(data.name)
      $('.heroAlter.hero2').text(data.biography['full-name'])
      $('.heroHeight.hero2').text(data.appearance.height[0])
      $('.heroWeight.hero2').text(data.appearance.weight[0])
      $('.heroGender.hero2').text(data.appearance.gender)
      $('.heroRace.hero2').text(data.appearance.race)
      $('.heroIntelligence.hero2').text(data.powerstats.intelligence)
      $('.heroSpeed.hero2').text(data.powerstats.speed)
      $('.heroStrength.hero2').text(data.powerstats.strength)
      $('.heroDurability.hero2').text(data.powerstats.durability)
      $('.heroPower.hero2').text(data.powerstats.power)
      $('.heroGroup.hero2').text(data.connections.groupAffiliation)
      $('.heroApp.hero2').text(data.biography['first-appearance'])
      $(".heroImg.hero2").attr("src", data.image.url)
      $(".heroImg.hero2").attr("data-name", data.name)
    })

    // When the user selects a hero
    $(".heroImg").click(function() {
        $(".heroImg").removeClass("selectedImg");
        $("#submit").prop("disabled", false);
        $(this).addClass("selectedImg");
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
