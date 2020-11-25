$(document).ready(function () {

// Chart data variables


var xAxis = ['x', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
var cashewData = ["Cashew World Production Amounts (Metric Tons)", 469079, 576431, 549692, 601642, 716682, 724556, 783994, 792647, 777630, 786266]   
var almondData = ["Almond World Production Amounts (Metric Tons)", 918955, 1127256, 1072135, 1097228, 1058925, 1091583, 1180779, 1226640, 1284131, 1368703]
var hazelData = ["Hazelnut World Production Amounts (Metric Tons)", 417950, 374600, 469908, 449380, 357240, 497150, 398060, 510270, 460043, 528068]
var macaData = ["Macadamia World Production Amounts (Metric Tons)", 28582, 29356, 36637, 37184, 41376, 46697, 49346, 50030, 58821, 60057]
var walnutData = ["Walnut World Production Amounts (Metric Tons)", 553972, 535816, 563709, 575367, 651447, 713198, 881524, 867040, 885038, 965402]
var peanutData = ["Peanut World Production Amounts (Metric Tons)", 918955, 1127256, 1072135, 1097228, 1058925, 1091583, 1180779, 1226640, 1284131, 1368703]
var pecanData = ["Pecan World Production Amounts (Metric Tons)", 91214, 91215, 115768, 110670, 122340, 119726, 130993, 144765, 146827, 139739]
var pistaData = ["Pistachio World Production Amounts (Metric Tons)", 632500, 475700, 600135, 467155, 557850, 521495, 735129, 587506, 773528, 655200]
var brazilData = ["Brazil Nut World Production Amounts (Metric Tons)", 21490, 26450, 23673, 28880, 26850, 28500, 27850, 27850, 38500, 26100]
var foodId;


  $("#cashew,#cashew-icon").on("click", function () {
      foodId = 12085;
      apiCall();
      
    $("#nut-data").show().fadeIn();
    $("#downArrow").css("opacity","1");
    $("#nut-bio").css("display","table-cell").fadeIn();
    $(".col-sm img").removeClass("active");
    $("#cashew").addClass("active");
    $(".info-container")
      .hide()
      .html(
        "<h3>- Cashew -</h3><br><p>The delicately flavored cashew nut is a favorite between meal snack that can be readily found in your local market year round. It also makes wonderful nut butter and a special addition to salads and stir-fry dishes. Cashew nuts are actually the kidney-shaped seeds that adhere to the bottom of the cashew apple, the fruit of the cashew tree, which is native to the coastal areas of northeastern Brazil. <br><br>While cashew apples are not appreciated in the United States, they are regarded as delicacies in Brazil and the Caribbean. Cashews are always sold shelled because the interior of the shells contains a caustic resin, known as cashew balm, which must be carefully removed before the nuts are fit for consumption. This caustic resin is actually used in industry to make varnishes and insecticides.<br><br></p>"
      )
      .fadeIn("slow");

    var chart = c3.generate({
    size: {
        height: 550,
        width: 700
    },
    data: {
        x: 'x',
            xFormat: '%Y',
        
      columns: [
        xAxis, cashewData,
      ],
      type: "bar",
    },
    axis: {
        y: {
            tick: {
                format: d3.format(",")
            }
        },
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y'
            }
        }
    },
    color: {
        pattern: ['rgba(78, 124, 72, 0.808)']
    },
    bar: {
      width: {
        ratio: 0.6, 
      },
        },
    });
  });

  $("#almond,#almond-icon").on("click", function () {
      foodId = 12061;
      apiCall();
    $("#nut-data").show().fadeIn();
    $("#downArrow").css("opacity","1");
    $("#nut-bio").css("display","table-cell").fadeIn();
    $(".col-sm img").removeClass("active");
    $("#almond").addClass("active");
    $(".info-container")
      .hide()
      .html(
        "<h3>- Almond -</h3><br><p>Fortunately, the delicately flavored and versatile almond is available throughout the year to make a healthy and tasty addition to both sweet and savory dishes. Although packaged almonds are available year round, they are the freshest in mid-summer, which is when they are at the height of their season.<br><br>The almond that we think of as a nut is technically the seed of the fruit of the almond tree, a medium-size tree that bears fragrant pink and white flowers. Like its cousins, the peach, cherry and apricot trees, the almond tree bears fruits with stone-like seeds (or pits) within. The seed of the almond fruit is what we refer to as the almond nut.<br><br></p>"
      )
      .fadeIn("slow");
    
    var chart = c3.generate({
    size: {
        height: 550,
        width: 700
    },
    data: {
        x: 'x',
            xFormat: '%Y',
        
      columns: [
        xAxis, almondData,
      ],
      type: "bar",
    },
    axis: {
        y: {
            tick: {
                format: d3.format(",")
            }
        },
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y'
            }
        }
    },
    color: {
        pattern: ['rgba(78, 124, 72, 0.808)']
    },
    bar: {
      width: {
        ratio: 0.6, 
      },
        },
    });
  });

  $("#hazelnut,#hazelnut-icon").on("click", function () {
      foodId = 12120;
      apiCall();
    $("#nut-data").show().fadeIn();
    $("#downArrow").css("opacity","1");
    $("#nut-bio").css("display","table-cell").fadeIn();
    $(".col-sm img").removeClass("active");
    $("#hazelnut").addClass("active");
    $(".info-container")
      .hide()
      .html(
        "<h3>- Hazelnut -</h3><br><p>The hazelnut is the nut of the hazel and therefore includes any of the nuts deriving from species of the genus Corylus, especially the nuts of the species Corylus avellana. It also is known as cobnut or filbert nut according to species.[1] A cob is roughly spherical to oval, about 15–25 mm (5⁄8–1 in) long and 10–15 mm (3⁄8–5⁄8 in) in diameter, with an outer fibrous husk surrounding a smooth shell and a filbert is more elongated, being about twice as long as its diameter. The nut falls out of the husk when ripe, about seven to eight months after pollination. The kernel of the seed is edible and used raw or roasted, or ground into a paste. The seed has a thin, dark brown skin, which is sometimes removed before cooking. <br><br>Hazelnuts are used in confectionery to make praline, and also used in combination with chocolate for chocolate truffles and products such as Cadbury chocolate bars, Nutella and Frangelico liqueur. Hazelnut oil, pressed from hazelnuts, is strongly flavoured and used as a cooking oil. Turkey is the world's largest producer of hazelnuts.[2]<br><br></p>"
      )
      .fadeIn("slow");
    
    var chart = c3.generate({
    size: {
        height: 550,
        width: 700
    },
    data: {
        x: 'x',
            xFormat: '%Y',
        
      columns: [
        xAxis, hazelData,
      ],
      type: "bar",
    },
    axis: {
        y: {
            tick: {
                format: d3.format(",")
            }
        },
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y'
            }
        }
    },
    color: {
        pattern: ['rgba(78, 124, 72, 0.808)']
    },
    bar: {
      width: {
        ratio: 0.6, 
      },
        },
    });
  });

  $("#macadamia,#macadamia-icon").on("click", function () {
      foodId = 12131;
      apiCall();
    $("#nut-data").show().fadeIn();
    $("#downArrow").css("opacity","1");
    $("#nut-bio").css("display","table-cell").fadeIn();
    $(".col-sm img").removeClass("active");
    $("#macadamia").addClass("active");
    $(".info-container")
      .hide()
      .html(
        "<h3>- Macadamia -</h3><br><p>Macadamia is a genus of four species of trees indigenous to Australia, and constituting part of the plant family Proteaceae.[1][2] They are native to north eastern New South Wales and central and south eastern Queensland. Three species of the genus are commercially important for their fruit, the macadamia nut /ˌmækəˈdeɪmiə/ (or simply macadamia), with a total global production of 160,000 tonnes (180,000 short tons) in 2015.[3] Other names include Queensland nut, bush nut, maroochi nut, bauple nut, and Hawaii nut.[4] In Australian Aboriginal languages, the fruit is known by names such as bauple, gyndl, jindilli,[4] and boombera. It was an important source of bushfood for the Aboriginal peoples who were the original inhabitants of the area. <br><br>The nut was first commercially produced on a wide scale in Hawaii, where it was introduced in the 1880s, and for some time they were the world's largest producer.[5] South Africa has been the world's largest producer of the macadamia since the 2010s.<br><br></p>"
      )
      .fadeIn("slow");
    var chart = c3.generate({
    size: {
        height: 550,
        width: 700
    },
    data: {
        x: 'x',
            xFormat: '%Y',
        
      columns: [
        xAxis, macaData,
      ],
      type: "bar",
    },
    axis: {
        y: {
            tick: {
                format: d3.format(",")
            }
        },
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y'
            }
        }
    },
    color: {
        pattern: ['rgba(78, 124, 72, 0.808)']
    },
    bar: {
      width: {
        ratio: 0.6, 
      },
        },
    });
  });

  $("#peanut,#peanut-icon").on("click", function () {
      foodId = 16091;
      apiCall();
    $("#nut-data").show().fadeIn();
    $("#downArrow").css("opacity","1");
    $("#nut-bio").css("display","table-cell").fadeIn();
    $(".col-sm img").removeClass("active");
    $("#peanut").addClass("active");
    $(".info-container")
      .hide()
      .html(
        "<h3>- Peanut -</h3><br><p>The peanut, also known as the groundnut,[2] goober (US),[3] pindar (US)[3] or monkey nut (UK), and taxonomically classified as Arachis hypogaea, is a legume crop grown mainly for its edible seeds. It is widely grown in the tropics and subtropics, being important to both small and large commercial producers. It is classified as both a grain legume[4] and, due to its high oil content, an oil crop.[5] World annual production of shelled peanuts was 44 million tonnes in 2016, led by China with 38% of the world total. Atypically among legume crop plants, peanut pods develop underground (geocarpy) rather than above ground. With this characteristic in mind, the botanist Carl Linnaeus named the species hypogaea, which means 'under the earth'. As a legume, the peanut belongs to the botanical family Fabaceae; this is also known as Leguminosae, and commonly known as the bean, or pea, family.[1] Like most other legumes, peanuts harbor symbiotic nitrogen-fixing bacteria in root nodules.[6] This capacity to fix nitrogen means peanuts require less nitrogen-containing fertilizer and also improve soil fertility, making them valuable in crop rotations. <br><br>Peanuts are similar in taste and nutritional profile to 'tree nuts' such as walnuts and almonds, and, as a culinary nut, are often served in similar ways in Western cuisines. The botanical definition of a nut is 'a fruit whose ovary wall becomes hard at maturity'. Using this criterion, the peanut is not a nut.[7] However, peanuts are usually categorized as 'nuts' for culinary purposes and in common English more generally.<br><br></p>"
      )
      .fadeIn("slow");
    var chart = c3.generate({
    size: {
        height: 550,
        width: 700
    },
    data: {
        x: 'x',
            xFormat: '%Y',
        
      columns: [
        xAxis, peanutData,
      ],
      type: "bar",
    },
    axis: {
        y: {
            tick: {
                format: d3.format(",")
            }
        },
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y'
            }
        }
    },
    color: {
        pattern: ['rgba(78, 124, 72, 0.808)']
    },
    bar: {
      width: {
        ratio: 0.6, 
      },
        },
    });
  });

  $("#pecan,#pecan-icon").on("click", function () {
      foodId = 12142;
      apiCall();
    $("#nut-data").show().fadeIn();
    $("#downArrow").css("opacity","1");
    $("#nut-bio").css("display","table-cell").fadeIn();
    $(".col-sm img").removeClass("active");
    $("#pecan").addClass("active");
    $(".info-container")
      .hide()
      .html(
        "<h3>- Pecan -</h3><br><p>The pecan (Carya illinoinensis) is a species of hickory native to northern Mexico and the southern United States in the region of the Mississippi River.[1] The tree is cultivated for its seed in the southern United States, primarily in Georgia,[2] New Mexico,[3] and Texas,[4] and in Mexico, which produces nearly half of the world total. The seed is an edible nut used as a snack and in various recipes, such as praline candy and pecan pie. The pecan, in various aspects, is included in state symbols of Alabama, Arkansas, California, Oklahoma, and Texas.<br><br></p>"
      )
      .fadeIn("slow");
    var chart = c3.generate({
    size: {
        height: 550,
        width: 700
    },
    data: {
        x: 'x',
            xFormat: '%Y',
        
      columns: [
        xAxis, pecanData,
      ],
      type: "bar",
    },
    axis: {
        y: {
            tick: {
                format: d3.format(",")
            }
        },
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y'
            }
        }
    },
    color: {
        pattern: ['rgba(78, 124, 72, 0.808)']
    },
    bar: {
      width: {
        ratio: 0.6, 
      },
        },
    });
  });

  $("#pistachio,#pistachio-icon").on("click", function () {
      foodId = 12152;
      apiCall();
    $("#nut-data").show().fadeIn();
    $("#downArrow").css("opacity","1");
    $("#nut-bio").css("display","table-cell").fadeIn();
    $(".col-sm img").removeClass("active");
    $("#pistachio").addClass("active");
    $(".info-container")
      .hide()
      .html(
        "<h3>- Pistachio -</h3><br><p>The pistachio (/pɪˈstɑːʃiˌoʊ, -ˈstæ-/,[2] Pistacia vera), a member of the cashew family, is a small tree originating from Central Asia and the Middle East. The tree produces seeds that are widely consumed as food.  Pistacia vera often is confused with other species in the genus Pistacia that are also known as pistachio. These other species can be distinguished by their geographic distributions (in the wild) and their seeds which are much smaller and have a soft shell. As of 2017, Iran accounted for over half the world's production of pistachios.<br><br></p>"
      )
      .fadeIn("slow");
    var chart = c3.generate({
    size: {
        height: 550,
        width: 700
    },
    data: {
        x: 'x',
            xFormat: '%Y',
        
      columns: [
        xAxis, pistaData,
      ],
      type: "bar",
    },
    axis: {
        y: {
            tick: {
                format: d3.format(",")
            }
        },
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y'
            }
        }
    },
    color: {
        pattern: ['rgba(78, 124, 72, 0.808)']
    },
    bar: {
      width: {
        ratio: 0.6, 
      },
        },
    });
  });
  $("#brazilnut,#brazilnut-icon").on("click", function () {
      foodId = 12078;
      apiCall();
    $("#nut-data").show().fadeIn();
    $("#downArrow").css("opacity","1");
    $("#nut-bio").css("display","table-cell").fadeIn();
    $(".col-sm img").removeClass("active");
    $("#brazilnut").addClass("active");
    $(".info-container")
      .hide()
      .html(
        "<h3>- Brazil Nut -</h3><br><p>The Brazil nut (Bertholletia excelsa) is a South American tree in the family Lecythidaceae, and it is also the name of the tree's commercially harvested edible seeds. It is one of the largest and longest-lived trees in the Amazon rainforest. The fruit and its nutshell – containing the edible Brazil nut – are relatively large, possibly weighing as much as 2 kg (4 lb 7 oz) in total weight. As food, Brazil nuts are notable for diverse content of micronutrients, especially a high amount of selenium. The wood of the Brazil nut tree is prized for its quality in carpentry, flooring, and heavy construction.[1]<br><br></p>"
      )
      .fadeIn("slow");
    var chart = c3.generate({
    size: {
        height: 550,
        width: 700
    },
    data: {
        x: 'x',
            xFormat: '%Y',
        
      columns: [
        xAxis, brazilData,
      ],
      type: "bar",
    },
    axis: {
        y: {
            tick: {
                format: d3.format(",")
            }
        },
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y'
            }
        }
    },
    color: {
        pattern: ['rgba(78, 124, 72, 0.808)']
    },
    bar: {
      width: {
        ratio: 0.6, 
      },
        },
    });
  });

  $("#walnut,#walnut-icon").on("click", function () {
      foodId = 12155;
      apiCall();
    $("#nut-data").show().fadeIn();
    $("#downArrow").css("opacity","1");
    $("#nut-bio").css("display","table-cell").fadeIn();
    $(".col-sm img").removeClass("active");
    $("#walnut").addClass("active");
    $(".info-container")
      .hide()
      .html(
        "<h3>- Walnut -</h3><br><p>A walnut is the nut of any tree of the genus Juglans (Family Juglandaceae), particularly the Persian or English walnut, Juglans regia. <br><br>A walnut is the edible seed of a drupe, and thus not a true botanical nut. It is commonly consumed as a nut. After full ripening for its edible seed when the shell has been discarded, it is used as a garnish or a snack. Nuts of the eastern black walnut (Juglans nigra) and butternuts (Juglans cinerea) are less commonly consumed.<br><br></p>"
      )
      .fadeIn("slow");
    var chart = c3.generate({
    size: {
        height: 550,
        width: 700
    },
    data: {
        x: 'x',
            xFormat: '%Y',
        
      columns: [
        xAxis, walnutData,
      ],
      type: "bar",
    },
    axis: {
        y: {
            tick: {
                format: d3.format(",")
            }
        },
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y'
            }
        }
    },
    color: {
        pattern: ['rgba(78, 124, 72, 0.808)']
    },
    bar: {
      width: {
        ratio: 0.6, 
      },
        },
    });
  });


  function apiCall() {

  fetch(
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/" +
      foodId +
      "/information?amount=10&unit=gram",
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "726b42b1dfmsh87487f89e96dceap14ad15jsnfceb0ed75073",
        "x-rapidapi-host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      },
    }
  )
    .then((response) => response.json())
    .then((response) => {
      results = response;

      let htmlString = "";
      for (let i = 0; i < results.nutrition.nutrients.length; i++) {
        htmlString += `<div class="result">
                        
                        <div class="title">${results.nutrition.nutrients[i].title}</div>
                        <div class="amount">${results.nutrition.nutrients[i].amount}</div>
                        <div class="unit">${results.nutrition.nutrients[i].unit}</div>
                        <div class="percentOfDailyNeeds">${results.nutrition.nutrients[i].percentOfDailyNeeds}% RDA</div>
                    </div>`;
      }

      document.getElementById("data-container").innerHTML = htmlString;
    })
    .catch((err) => {
      console.error(err);
    });

  };

  let jokeResults;

  fetch("data.json")
    .then((data) => data.json())
    .then((data) => {
      jokeResults = data;

      var counter = 0;

    
    
      $("#joke-button").on("click", function () {
          if (counter < jokeResults.length) {
            $("#answer-box").hide();
            $("#answer-button").show().on("click", function () {
              $("#answer-box").show();
              $("#answer-button").hide();
          });
      } else {
          counter = 0;
          $("#answer-box").hide();
          $("#answer-button").show();
      }
    
        
        if (counter < jokeResults.length) {
          document.getElementById("joke-box").innerHTML =
            jokeResults[counter].joke;
          document.getElementById("answer-box").innerHTML =
            jokeResults[counter].answer;
        }
        counter++;
      });
    });
});