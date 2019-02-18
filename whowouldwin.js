$(document).ready(function() {

  // Determine which heroes are fighting
  var heroes = selectHeroes();
  console.log(heroes);

  loadHero(heroes.hero1, "hero1");
  loadHero(heroes.hero2, "hero2");

    // When the user selects a hero
    $(".heroWrapper").click(function() {
        $(".heroWrapper").removeClass("selectedImg");
        // $("#submit").prop("disabled", false);
        $(this).addClass("selectedImg");
        document.location.reload()
    });

    $("img").on("error", function(){
      var existingHeroIds = $(".heroImg").map(function(){
        return $(this).attr('hero-id');
      });
      console.log(existingHeroIds);
      var heroThatFailed = $(this); //element that broke
      var imgId = heroThatFailed.attr('id');
      loadHero(selectHero(existingHeroIds), imgId);
    });
});

var selectHero = function(existingHeroIds){
  heroId = Math.floor(Math.random() * 730) + 1;

  while(heroId == existingHeroIds[0] || heroId == existingHeroIds[1]) {
    heroId = Math.floor(Math.random() * 730) + 1;
  }

  return heroId;
}

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

function loadHero(heroId, heroClass) {
  var base = "http://superheroapi.com/api.php/10156085785976648/";
  var heroUrl = base + heroId;

  $.ajax({
    method: 'GET',
    url: heroUrl,
  }).done(function(data) {
      $('.heroName.' + heroClass).text(data.name)
      $('.heroAlter.' + heroClass).text(data.biography['full-name'])
      $('.heroHeight.' + heroClass).text(data.appearance.height[0])
      $('.heroWeight.' + heroClass).text(data.appearance.weight[0])
      $('.heroRace.' + heroClass).text(data.appearance.race)
      $('.heroIntelligence.' + heroClass).text(data.powerstats.intelligence)
      $('.heroSpeed.' + heroClass).text(data.powerstats.speed)
      $('.heroStrength.' + heroClass).text(data.powerstats.strength)
      $('.heroDurability.' + heroClass).text(data.powerstats.durability)
      $('.heroPower.' + heroClass).text(data.powerstats.power)
      $('.heroGroup.' + heroClass).text(data.connections.groupAffiliation)
      $('.heroApp.' + heroClass).text(data.biography['first-appearance'])
      $(".heroImg." + heroClass).attr("hero-id", heroId)
      $(".heroImg." + heroClass).attr("src", data.image.url)
      $(".heroWrapper." + heroClass).attr("data-name", data.name)
  });
};
