var countryone = document.getElementById("countryone");
var countrytwo = document.getElementById("countrytwo");
var countryoneFlg = document.getElementById("countryoneFlg");
var countryTwoFlg = document.getElementById("countryTwoFlg");

var MyHour = document.getElementById("MyHour");
var MyMin = document.getElementById("MyMin");
var MySec = document.getElementById("MySec");

var teamone = document.getElementById("teamone");
var teamtwo = document.getElementById("teamtwo");
var stat = document.getElementById("stat");
let data = [
  {
    MatchNumber: 1,
    RoundNumber: 1,
    DateUtc: "2022-11-20 16:00:00Z",
    Location: "Al Bayt Stadium",
    HomeTeam: "Qatar",
    AwayTeam: "Ecuador",
    Group: "Group A",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 3,
    RoundNumber: 1,
    DateUtc: "2022-11-21 13:00:00Z",
    Location: "Khalifa International Stadium",
    HomeTeam: "England",
    AwayTeam: "Iran",
    Group: "Group B",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 2,
    RoundNumber: 1,
    DateUtc: "2022-11-21 16:00:00Z",
    Location: "Al Thumama Stadium",
    HomeTeam: "Senegal",
    AwayTeam: "Netherlands",
    Group: "Group A",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 4,
    RoundNumber: 1,
    DateUtc: "2022-11-21 19:00:00Z",
    Location: "Ahmad Bin Ali Stadium",
    HomeTeam: "USA",
    AwayTeam: "Wales",
    Group: "Group B",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 8,
    RoundNumber: 1,
    DateUtc: "2022-11-22 10:00:00Z",
    Location: "Lusail Stadium",
    HomeTeam: "Argentina",
    AwayTeam: "SaudiArabia",
    Group: "Group C",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 6,
    RoundNumber: 1,
    DateUtc: "2022-11-22 13:00:00Z",
    Location: "Education City Stadium",
    HomeTeam: "Denmark",
    AwayTeam: "Tunisia",
    Group: "Group D",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 7,
    RoundNumber: 1,
    DateUtc: "2022-11-22 16:00:00Z",
    Location: "Stadium 974",
    HomeTeam: "Mexico",
    AwayTeam: "Poland",
    Group: "Group C",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 5,
    RoundNumber: 1,
    DateUtc: "2022-11-22 19:00:00Z",
    Location: "Al Janoub Stadium",
    HomeTeam: "France",
    AwayTeam: "Australia",
    Group: "Group D",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 12,
    RoundNumber: 1,
    DateUtc: "2022-11-23 10:00:00Z",
    Location: "Al Bayt Stadium",
    HomeTeam: "Morocco",
    AwayTeam: "Croatia",
    Group: "Group F",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 11,
    RoundNumber: 1,
    DateUtc: "2022-11-23 13:00:00Z",
    Location: "Khalifa International Stadium",
    HomeTeam: "Germany",
    AwayTeam: "Japan",
    Group: "Group E",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 10,
    RoundNumber: 1,
    DateUtc: "2022-11-23 16:00:00Z",
    Location: "Al Thumama Stadium",
    HomeTeam: "Spain",
    AwayTeam: "CostaRica",
    Group: "Group E",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 9,
    RoundNumber: 1,
    DateUtc: "2022-11-23 19:00:00Z",
    Location: "Ahmad Bin Ali Stadium",
    HomeTeam: "Belgium",
    AwayTeam: "Canada",
    Group: "Group F",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 13,
    RoundNumber: 1,
    DateUtc: "2022-11-24 10:00:00Z",
    Location: "Al Janoub Stadium",
    HomeTeam: "Switzerland",
    AwayTeam: "Cameroon",
    Group: "Group G",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 14,
    RoundNumber: 1,
    DateUtc: "2022-11-24 13:00:00Z",
    Location: "Education City Stadium",
    HomeTeam: "Uruguay",
    AwayTeam: "Korea",
    Group: "Group H",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 15,
    RoundNumber: 1,
    DateUtc: "2022-11-24 16:00:00Z",
    Location: "Stadium 974",
    HomeTeam: "Portugal",
    AwayTeam: "Ghana",
    Group: "Group H",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 16,
    RoundNumber: 1,
    DateUtc: "2022-11-24 19:00:00Z",
    Location: "Lusail Stadium",
    HomeTeam: "Brazil",
    AwayTeam: "Serbia",
    Group: "Group G",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 17,
    RoundNumber: 2,
    DateUtc: "2022-11-25 10:00:00Z",
    Location: "Ahmad Bin Ali Stadium",
    HomeTeam: "Wales",
    AwayTeam: "Iran",
    Group: "Group B",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 18,
    RoundNumber: 2,
    DateUtc: "2022-11-25 13:00:00Z",
    Location: "Al Thumama Stadium",
    HomeTeam: "Qatar",
    AwayTeam: "Senegal",
    Group: "Group A",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 19,
    RoundNumber: 2,
    DateUtc: "2022-11-25 16:00:00Z",
    Location: "Khalifa International Stadium",
    HomeTeam: "Netherlands",
    AwayTeam: "Ecuador",
    Group: "Group A",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 20,
    RoundNumber: 2,
    DateUtc: "2022-11-25 19:00:00Z",
    Location: "Al Bayt Stadium",
    HomeTeam: "England",
    AwayTeam: "USA",
    Group: "Group B",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 21,
    RoundNumber: 2,
    DateUtc: "2022-11-26 10:00:00Z",
    Location: "Al Janoub Stadium",
    HomeTeam: "Tunisia",
    AwayTeam: "Australia",
    Group: "Group D",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 22,
    RoundNumber: 2,
    DateUtc: "2022-11-26 13:00:00Z",
    Location: "Education City Stadium",
    HomeTeam: "Poland",
    AwayTeam: "SaudiArabia",
    Group: "Group C",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 23,
    RoundNumber: 2,
    DateUtc: "2022-11-26 16:00:00Z",
    Location: "Stadium 974",
    HomeTeam: "France",
    AwayTeam: "Denmark",
    Group: "Group D",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 24,
    RoundNumber: 2,
    DateUtc: "2022-11-26 19:00:00Z",
    Location: "Lusail Stadium",
    HomeTeam: "Argentina",
    AwayTeam: "Mexico",
    Group: "Group C",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 25,
    RoundNumber: 2,
    DateUtc: "2022-11-27 10:00:00Z",
    Location: "Ahmad Bin Ali Stadium",
    HomeTeam: "Japan",
    AwayTeam: "CostaRica",
    Group: "Group E",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 26,
    RoundNumber: 2,
    DateUtc: "2022-11-27 13:00:00Z",
    Location: "Al Thumama Stadium",
    HomeTeam: "Belgium",
    AwayTeam: "Morocco",
    Group: "Group F",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 27,
    RoundNumber: 2,
    DateUtc: "2022-11-27 16:00:00Z",
    Location: "Khalifa International Stadium",
    HomeTeam: "Croatia",
    AwayTeam: "Canada",
    Group: "Group F",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 28,
    RoundNumber: 2,
    DateUtc: "2022-11-27 19:00:00Z",
    Location: "Al Bayt Stadium",
    HomeTeam: "Spain",
    AwayTeam: "Germany",
    Group: "Group E",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 29,
    RoundNumber: 2,
    DateUtc: "2022-11-28 10:00:00Z",
    Location: "Al Janoub Stadium",
    HomeTeam: "Cameroon",
    AwayTeam: "Serbia",
    Group: "Group G",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 30,
    RoundNumber: 2,
    DateUtc: "2022-11-28 13:00:00Z",
    Location: "Education City Stadium",
    HomeTeam: "Korea",
    AwayTeam: "Ghana",
    Group: "Group H",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 31,
    RoundNumber: 2,
    DateUtc: "2022-11-28 16:00:00Z",
    Location: "Stadium 974",
    HomeTeam: "Brazil",
    AwayTeam: "Switzerland",
    Group: "Group G",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 32,
    RoundNumber: 2,
    DateUtc: "2022-11-28 19:00:00Z",
    Location: "Lusail Stadium",
    HomeTeam: "Portugal",
    AwayTeam: "Uruguay",
    Group: "Group H",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  // {
  //   MatchNumber: 35,
  //   RoundNumber: 3,
  //   DateUtc: "2022-11-29 15:00:00Z",
  //   Location: "Khalifa International Stadium",
  //   HomeTeam: "Ecuador",
  //   AwayTeam: "Senegal",
  //   Group: "Group A",
  //   HomeTeamScore: null,
  //   AwayTeamScore: null,
  // },
  {
    MatchNumber: 36,
    RoundNumber: 3,
    DateUtc: "2022-11-29 15:00:00Z",
    Location: "Al Bayt Stadium",
    HomeTeam: "Netherlands",
    AwayTeam: "Qatar",
    Group: "Group A",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  // {
  //   MatchNumber: 33,
  //   RoundNumber: 3,
  //   DateUtc: "2022-11-29 19:00:00Z",
  //   Location: "Ahmad Bin Ali Stadium",
  //   HomeTeam: "Wales",
  //   AwayTeam: "England",
  //   Group: "Group B",
  //   HomeTeamScore: null,
  //   AwayTeamScore: null,
  // },
  {
    MatchNumber: 34,
    RoundNumber: 3,
    DateUtc: "2022-11-29 19:00:00Z",
    Location: "Al Thumama Stadium",
    HomeTeam: "Iran",
    AwayTeam: "USA",
    Group: "Group B",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  // {
  //   MatchNumber: 37,
  //   RoundNumber: 3,
  //   DateUtc: "2022-11-30 15:00:00Z",
  //   Location: "Al Janoub Stadium",
  //   HomeTeam: "Australia",
  //   AwayTeam: "Denmark",
  //   Group: "Group D",
  //   HomeTeamScore: null,
  //   AwayTeamScore: null,
  // },
  {
    MatchNumber: 38,
    RoundNumber: 3,
    DateUtc: "2022-11-30 15:00:00Z",
    Location: "Education City Stadium",
    HomeTeam: "Tunisia",
    AwayTeam: "France",
    Group: "Group D",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  // {
  //   MatchNumber: 39,
  //   RoundNumber: 3,
  //   DateUtc: "2022-11-30 19:00:00Z",
  //   Location: "Stadium 974",
  //   HomeTeam: "Poland",
  //   AwayTeam: "Argentina",
  //   Group: "Group C",
  //   HomeTeamScore: null,
  //   AwayTeamScore: null,
  // },
  {
    MatchNumber: 40,
    RoundNumber: 3,
    DateUtc: "2022-11-30 19:00:00Z",
    Location: "Lusail Stadium",
    HomeTeam: "SaudiArabia",
    AwayTeam: "Mexico",
    Group: "Group C",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  // {
  //   MatchNumber: 41,
  //   RoundNumber: 3,
  //   DateUtc: "2022-12-01 15:00:00Z",
  //   Location: "Ahmad Bin Ali Stadium",
  //   HomeTeam: "Croatia",
  //   AwayTeam: "Belgium",
  //   Group: "Group F",
  //   HomeTeamScore: null,
  //   AwayTeamScore: null,
  // },
  {
    MatchNumber: 42,
    RoundNumber: 3,
    DateUtc: "2022-12-01 15:00:00Z",
    Location: "Al Thumama Stadium",
    HomeTeam: "Canada",
    AwayTeam: "Morocco",
    Group: "Group F",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  // {
  //   MatchNumber: 43,
  //   RoundNumber: 3,
  //   DateUtc: "2022-12-01 19:00:00Z",
  //   Location: "Khalifa International Stadium",
  //   HomeTeam: "Japan",
  //   AwayTeam: "Spain",
  //   Group: "Group E",
  //   HomeTeamScore: null,
  //   AwayTeamScore: null,
  // },
  {
    MatchNumber: 44,
    RoundNumber: 3,
    DateUtc: "2022-12-01 19:00:00Z",
    Location: "Al Bayt Stadium",
    HomeTeam: "CostaRica",
    AwayTeam: "Germany",
    Group: "Group E",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  // {
  //   MatchNumber: 45,
  //   RoundNumber: 3,
  //   DateUtc: "2022-12-02 15:00:00Z",
  //   Location: "Al Janoub Stadium",
  //   HomeTeam: "Ghana",
  //   AwayTeam: "Uruguay",
  //   Group: "Group H",
  //   HomeTeamScore: null,
  //   AwayTeamScore: null,
  // },
  {
    MatchNumber: 46,
    RoundNumber: 3,
    DateUtc: "2022-12-02 15:00:00Z",
    Location: "Education City Stadium",
    HomeTeam: "Korea",
    AwayTeam: "Portugal",
    Group: "Group H",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  // {
  //   MatchNumber: 47,
  //   RoundNumber: 3,
  //   DateUtc: "2022-12-02 19:00:00Z",
  //   Location: "Stadium 974",
  //   HomeTeam: "Serbia",
  //   AwayTeam: "Switzerland",
  //   Group: "Group G",
  //   HomeTeamScore: null,
  //   AwayTeamScore: null,
  // },
  {
    MatchNumber: 48,
    RoundNumber: 3,
    DateUtc: "2022-12-02 19:00:00Z",
    Location: "Lusail Stadium",
    HomeTeam: "Cameroon",
    AwayTeam: "Brazil",
    Group: "Group G",
    HomeTeamScore: null,
    AwayTeamScore: null,
  },





// Round 16 matches
// Round 16 matches
// Round 16 matches


  {
    MatchNumber: 49,
    RoundNumber: 4,
    DateUtc: "2022-12-03 15:00:00Z",
    Location: "TBA",
    HomeTeam: "Netherlands",
    AwayTeam: "USA",
    Group: null,
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 50,
    RoundNumber: 4,
    DateUtc: "2022-12-03 19:00:00Z",
    Location: "TBA",
    HomeTeam: "Argentina",
    AwayTeam: "Australia",
    Group: null,
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 52,
    RoundNumber: 4,
    DateUtc: "2022-12-04 15:00:00Z",
    Location: "TBA",
    HomeTeam: "France",
    AwayTeam: "Poland",
    Group: null,
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 51,
    RoundNumber: 4,
    DateUtc: "2022-12-04 19:00:00Z",
    Location: "TBA",
    HomeTeam: "England",
    AwayTeam: "Senegal",
    Group: null,
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 53,
    RoundNumber: 4,
    DateUtc: "2022-12-05 15:00:00Z",
    Location: "TBA",
    HomeTeam: "1E",
    AwayTeam: "2F",
    Group: null,
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 54,
    RoundNumber: 4,
    DateUtc: "2022-12-05 19:00:00Z",
    Location: "TBA",
    HomeTeam: "1G",
    AwayTeam: "2H",
    Group: null,
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 55,
    RoundNumber: 4,
    DateUtc: "2022-12-06 15:00:00Z",
    Location: "TBA",
    HomeTeam: "1F",
    AwayTeam: "2E",
    Group: null,
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 56,
    RoundNumber: 4,
    DateUtc: "2022-12-06 19:00:00Z",
    Location: "TBA",
    HomeTeam: "1H",
    AwayTeam: "2G",
    Group: null,
    HomeTeamScore: null,
    AwayTeamScore: null,
  },


// Quarterfinals
// Quarterfinals
// Quarterfinals

  {
    MatchNumber: 58,
    RoundNumber: 5,
    DateUtc: "2022-12-09 15:00:00Z",
    Location: "TBA",
    HomeTeam: "To be announced",
    AwayTeam: "To be announced",
    Group: null,
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 57,
    RoundNumber: 5,
    DateUtc: "2022-12-09 19:00:00Z",
    Location: "TBA",
    HomeTeam: "To be announced",
    AwayTeam: "To be announced",
    Group: null,
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 60,
    RoundNumber: 5,
    DateUtc: "2022-12-10 15:00:00Z",
    Location: "TBA",
    HomeTeam: "To be announced",
    AwayTeam: "To be announced",
    Group: null,
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 59,
    RoundNumber: 5,
    DateUtc: "2022-12-10 19:00:00Z",
    Location: "TBA",
    HomeTeam: "To be announced",
    AwayTeam: "To be announced",
    Group: null,
    HomeTeamScore: null,
    AwayTeamScore: null,
  },

  // Semifinals
  // Semifinals
  // Semifinals

  {
    MatchNumber: 61,
    RoundNumber: 6,
    DateUtc: "2022-12-13 19:00:00Z",
    Location: "TBA",
    HomeTeam: "To be announced",
    AwayTeam: "To be announced",
    Group: null,
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
  {
    MatchNumber: 62,
    RoundNumber: 6,
    DateUtc: "2022-12-14 19:00:00Z",
    Location: "TBA",
    HomeTeam: "To be announced",
    AwayTeam: "To be announced",
    Group: null,
    HomeTeamScore: null,
    AwayTeamScore: null,
  },

  // Third place match

  {
    MatchNumber: 63,
    RoundNumber: 7,
    DateUtc: "2022-12-17 15:00:00Z",
    Location: "TBA",
    HomeTeam: "To be announced",
    AwayTeam: "To be announced",
    Group: null,
    HomeTeamScore: null,
    AwayTeamScore: null,
  },

  // Final
  {
    MatchNumber: 64,
    RoundNumber: 7,
    DateUtc: "2022-12-18 15:00:00Z",
    Location: "TBA",
    HomeTeam: "To be announced",
    AwayTeam: "To be announced",
    Group: null,
    HomeTeamScore: null,
    AwayTeamScore: null,
  },
];
let selected, i;
livetime();
function livetime() {
  for (i = 0; i < data.length; i++) {
    let current = new Date();
    let check = new Date(data[i].DateUtc);
    if (check > current) {
      selected = data[i];
      break;
    }
  }
}
function handleTickInit(tick) {
  var counter = Tick.count.down(new Date(selected.DateUtc), {
    format: ["h", "m", "s"],
  });
  // console.log(selected.HomeTeam)
  countryone.innerText = selected.HomeTeam;
  countrytwo.innerText = selected.AwayTeam;

  countryoneFlg.style.backgroundImage = `url(./FlagPNGs/${selected.HomeTeam}.png)`;
  countryTwoFlg.style.backgroundImage = `url(./FlagPNGs/${selected.AwayTeam}.png)`;

  if (data.stat == false) {
    stat.innerText = "";
  } else {
    let time = new Date(selected.DateUtc);
    stat.innerText = time.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  }

  counter.onupdate = function (value) {
    tick.value = value;
  };

  counter.onended = function () {
    livetime();
    handleTickInit(tick);
  };
  function updateWCTime() {
    var kickoff = new Date(selected.DateUtc);
    var diff = kickoff - new Date();
    var dd = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hh = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mm = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var ss = Math.floor((diff % (1000 * 60)) / 1000);

    var hhh = hh + dd * 24;
    var h = hhh < 10 ? "0" + hhh : hhh;
    var m = mm < 10 ? "0" + mm : mm;
    var s = ss < 10 ? "0" + ss : ss;

    MyHour.innerHTML = h;
    MyMin.innerHTML = m;
    MySec.innerHTML = s;
    setTimeout(updateWCTime, 1000);
  }
  setTimeout(updateWCTime, false);
}

function translteNum(num_str) {
  var bengali = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  var changed_nun = "";
  num_str.toString().split("").forEach((l) => {if (isNaN(l)) { changed_nun += l; } else { changed_nun += bengali[l];}});
  return changed_nun;
}
