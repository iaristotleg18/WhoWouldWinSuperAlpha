// var url = "http://who-would-win-super-alpha.herokuapp.com";
var url = "http://localhost:8080";
$(document).ready(function() {
  // Get hero leaderboard
  // current winner
  $.ajax({
    method: 'get',
    url: url + '/api/best',
    contentType: "application/json"
  }).done(function(data){
    $('.Champion').text(data[0].name)
  });

  // current loser
  $.ajax({
    method: 'get',
    url: url + '/api/worst',
    contentType: "application/json"
  }).done(function(data){
    $('.Unlucky').text(data[0].name)
  });


  var heroes = selectHeroes();
  console.log(heroes);

  console.log("I Am John Iron Man");

  loadHeroWimpApi(heroes.hero1, "hero1")
  loadHeroWimpApi(heroes.hero2, "hero2")
  // loadHero(heroes.hero1, "hero1");
  // loadHero(heroes.hero2, "hero2");

    // When the user selects a hero
    $(".heroWrapper").click(function() {
      // close the fists
        $(".heroWrapper").removeClass("selectedImg");
        // open the clicked fist
        $(this).addClass("selectedImg");
        // post their selection to backend
        var victorId = $(this).attr("data-heroId")
        var loserId = $(".heroWrapper:not(.selectedImg)").attr("data-heroId")

        // ajax post request
        $.ajax({
          method: 'post',
          url: url + '/api/selectHero',
          contentType: "application/json",
          data: JSON.stringify({
            winnerId: victorId,
            loserId: loserId
          })
        }).done(function(data){
          console.log(data)
        });
      document.location.reload()
    });

    $(".heroImg").on("error", function(){
      var existingHeroIds = $(".heroImg").map(function(){
        return $(this).attr('data-heroId');
      });
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

  hero1 = Math.floor(Math.random() * 33) + 1;
  hero2 = Math.floor(Math.random() * 33) + 1;

  while(hero1 == hero2) {
    hero2 = Math.floor(Math.random() * 33) + 1;
  }

  return {
    hero1: hero1,
    hero2: hero2
  }
}

function loadHeroWimpApi(heroId, heroClass) {
  $.ajax({
    method: 'GET',
    url: url + '/api/heroes/' + heroId ,
  }).done(function(allData) {
    const [data] = allData;
    console.log(data);
      $('.heroName.' + heroClass).text(data.name)
      $('.heroAlter.' + heroClass).text(data['alter_ego'])
      // $('.heroHeight.' + heroClass).text(data.height)
      // $('.heroWeight.' + heroClass).text(data.weight)
      $('.heroRace.' + heroClass).text(data.species)
      $('.heroIntelligence.' + heroClass).text(data.intel)
      $('.heroSpeed.' + heroClass).text(data.speed)
      $('.heroStrength.' + heroClass).text(data.strength)
      $('.heroGroup.' + heroClass).text(data.superteam)
      $('.heroItem.' + heroClass).text(data.tool)
      $('.heroPower.' + heroClass).text(data['main_power'])
      $(".heroImg." + heroClass).attr("data-heroId", heroId)
      $(".heroImg." + heroClass).attr("src", data['to_img'])
      $(".heroWrapper." + heroClass).attr("data-name", data.name)
      $(".heroWrapper." + heroClass).attr("data-heroId", heroId);
  })

  $.ajax({
    method: 'get',
    url: url + '/api/percent',
    contentType: "application/json",
    data: {
      heroId: heroId,
    }
  }).done(function(data){
    console.log(data);
    var dataLog = data.winPercentage;
    if (dataLog === null) {
      dataLog = 0
    }
    var dataPercent = dataLog + "%";
    $("." + heroClass + ' .winPercentage').text(dataPercent)
  });
};


var baseUrl = "http://superheroapi.com/api.php/10156085785976648/";

function loadHero(heroId, heroClass) {
  var heroUrl = baseUrl + heroId;

  // $.ajax({
  //   method: 'GET',
  //   url: heroUrl,
  // }).done(function(data) {
  //   console.log(data);
  //     $('.heroName.' + heroClass).text(data.name)
  //     $('.heroAlter.' + heroClass).text(data.biography['fullName'])
  //     $('.heroHeight.' + heroClass).text(data.appearance.height[0])
  //     $('.heroWeight.' + heroClass).text(data.appearance.weight[0])
  //     $('.heroRace.' + heroClass).text(data.appearance.race)
  //     $('.heroIntelligence.' + heroClass).text(data.powerstats.intelligence)
  //     $('.heroSpeed.' + heroClass).text(data.powerstats.speed)
  //     $('.heroStrength.' + heroClass).text(data.powerstats.strength)
  //     $('.heroDurability.' + heroClass).text(data.powerstats.durability)
  //     $('.heroPower.' + heroClass).text(data.powerstats.power)
  //     $('.heroGroup.' + heroClass).text(data.connections.groupAffiliation)
  //     $('.heroApp.' + heroClass).text(data.biography['firstAppearance'])
  //     $(".heroImg." + heroClass).attr("data-heroId", heroId)
  //     $(".heroImg." + heroClass).attr("src", data.image.url)
  //     $(".heroWrapper." + heroClass).attr("data-name", data.name)
  //     $(".heroWrapper." + heroClass).attr("data-heroId", heroId);
  // });

  $.ajax({
    method: 'get',
    url: url + '/api/percent',
    contentType: "application/json",
    data: {
      heroId: heroId,
    }
  }).done(function(data){
    console.log(data);
    var dataLog = data.winPercentage;
    if (dataLog === null) {
      dataLog = 0
    }
    var dataPercent = dataLog + "%";
    $("." + heroClass + ' .winPercentage').text(dataPercent)
  });
};
