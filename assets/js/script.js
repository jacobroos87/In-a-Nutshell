$(document).ready(function () {
  $("#cashew").on("click", function () {
    $(".col-sm img").removeClass("active");
    $("#cashew").addClass("active");
    $(".info-container")
      .hide()
      .html(
        "<h3>- Cashew -</h3><br><p>The delicately flavored cashew nut is a favorite between meal snack that can be readily found in your local market year round. It also makes wonderful nut butter and a special addition to salads and stir-fry dishes. Cashew nuts are actually the kidney-shaped seeds that adhere to the bottom of the cashew apple, the fruit of the cashew tree, which is native to the coastal areas of northeastern Brazil. <br><br>While cashew apples are not appreciated in the United States, they are regarded as delicacies in Brazil and the Caribbean. Cashews are always sold shelled because the interior of the shells contains a caustic resin, known as cashew balm, which must be carefully removed before the nuts are fit for consumption. This caustic resin is actually used in industry to make varnishes and insecticides.<br><br></p>"
      )
      .fadeIn("slow");
  });

  $("#almond").on("click", function () {
    $(".col-sm img").removeClass("active");
    $("#almond").addClass("active");
    $(".info-container")
      .hide()
      .html(
        "<h3>- Almond -</h3><br><p>Fortunately, the delicately flavored and versatile almond is available throughout the year to make a healthy and tasty addition to both sweet and savory dishes. Although packaged almonds are available year round, they are the freshest in mid-summer, which is when they are at the height of their season.<br><br>The almond that we think of as a nut is technically the seed of the fruit of the almond tree, a medium-size tree that bears fragrant pink and white flowers. Like its cousins, the peach, cherry and apricot trees, the almond tree bears fruits with stone-like seeds (or pits) within. The seed of the almond fruit is what we refer to as the almond nut.<br><br></p>"
      )
      .fadeIn("slow");
  });

  $("#hazelnut").on("click", function () {
    $(".col-sm img").removeClass("active");
    $("#hazelnut").addClass("active");
    $(".info-container")
      .hide()
      .html(
        "<h3>- Hazelnut -</h3><br><p>The hazelnut is the nut of the hazel and therefore includes any of the nuts deriving from species of the genus Corylus, especially the nuts of the species Corylus avellana. It also is known as cobnut or filbert nut according to species.[1] A cob is roughly spherical to oval, about 15–25 mm (5⁄8–1 in) long and 10–15 mm (3⁄8–5⁄8 in) in diameter, with an outer fibrous husk surrounding a smooth shell and a filbert is more elongated, being about twice as long as its diameter. The nut falls out of the husk when ripe, about seven to eight months after pollination. The kernel of the seed is edible and used raw or roasted, or ground into a paste. The seed has a thin, dark brown skin, which is sometimes removed before cooking. <br><br>Hazelnuts are used in confectionery to make praline, and also used in combination with chocolate for chocolate truffles and products such as Cadbury chocolate bars, Nutella and Frangelico liqueur. Hazelnut oil, pressed from hazelnuts, is strongly flavoured and used as a cooking oil. Turkey is the world's largest producer of hazelnuts.[2]<br><br></p>"
      )
      .fadeIn("slow");
  });

  $("#macadamia").on("click", function () {
    $(".col-sm img").removeClass("active");
    $("#macadamia").addClass("active");
    $(".info-container")
      .hide()
      .html(
        "<h3>- Macadamia -</h3><br><p>Macadamia is a genus of four species of trees indigenous to Australia, and constituting part of the plant family Proteaceae.[1][2] They are native to north eastern New South Wales and central and south eastern Queensland. Three species of the genus are commercially important for their fruit, the macadamia nut /ˌmækəˈdeɪmiə/ (or simply macadamia), with a total global production of 160,000 tonnes (180,000 short tons) in 2015.[3] Other names include Queensland nut, bush nut, maroochi nut, bauple nut, and Hawaii nut.[4] In Australian Aboriginal languages, the fruit is known by names such as bauple, gyndl, jindilli,[4] and boombera. It was an important source of bushfood for the Aboriginal peoples who were the original inhabitants of the area. <br><br>The nut was first commercially produced on a wide scale in Hawaii, where it was introduced in the 1880s, and for some time they were the world's largest producer.[5] South Africa has been the world's largest producer of the macadamia since the 2010s.<br><br></p>"
      )
      .fadeIn("slow");
  });

  $("#peanut").on("click", function () {
    $(".col-sm img").removeClass("active");
    $("#peanut").addClass("active");
    $(".info-container")
      .hide()
      .html(
        "<h3>- Peanut -</h3><br><p>The peanut, also known as the groundnut,[2] goober (US),[3] pindar (US)[3] or monkey nut (UK), and taxonomically classified as Arachis hypogaea, is a legume crop grown mainly for its edible seeds. It is widely grown in the tropics and subtropics, being important to both small and large commercial producers. It is classified as both a grain legume[4] and, due to its high oil content, an oil crop.[5] World annual production of shelled peanuts was 44 million tonnes in 2016, led by China with 38% of the world total. Atypically among legume crop plants, peanut pods develop underground (geocarpy) rather than above ground. With this characteristic in mind, the botanist Carl Linnaeus named the species hypogaea, which means 'under the earth'. As a legume, the peanut belongs to the botanical family Fabaceae; this is also known as Leguminosae, and commonly known as the bean, or pea, family.[1] Like most other legumes, peanuts harbor symbiotic nitrogen-fixing bacteria in root nodules.[6] This capacity to fix nitrogen means peanuts require less nitrogen-containing fertilizer and also improve soil fertility, making them valuable in crop rotations. <br><br>Peanuts are similar in taste and nutritional profile to 'tree nuts' such as walnuts and almonds, and, as a culinary nut, are often served in similar ways in Western cuisines. The botanical definition of a nut is 'a fruit whose ovary wall becomes hard at maturity'. Using this criterion, the peanut is not a nut.[7] However, peanuts are usually categorized as 'nuts' for culinary purposes and in common English more generally.<br><br></p>"
      )
      .fadeIn("slow");
  });

  $("#pecan").on("click", function () {
    $(".col-sm img").removeClass("active");
    $("#pecan").addClass("active");
    $(".info-container")
      .hide()
      .html(
        "<h3>- Pecan -</h3><br><p>The pecan (Carya illinoinensis) is a species of hickory native to northern Mexico and the southern United States in the region of the Mississippi River.[1] The tree is cultivated for its seed in the southern United States, primarily in Georgia,[2] New Mexico,[3] and Texas,[4] and in Mexico, which produces nearly half of the world total. The seed is an edible nut used as a snack and in various recipes, such as praline candy and pecan pie. The pecan, in various aspects, is included in state symbols of Alabama, Arkansas, California, Oklahoma, and Texas.<br><br></p>"
      )
      .fadeIn("slow");
  });

  $("#pistachio").on("click", function () {
    $(".col-sm img").removeClass("active");
    $("#pistachio").addClass("active");
    $(".info-container")
      .hide()
      .html(
        "<h3>- Pistachio -</h3><br><p>The pistachio (/pɪˈstɑːʃiˌoʊ, -ˈstæ-/,[2] Pistacia vera), a member of the cashew family, is a small tree originating from Central Asia and the Middle East. The tree produces seeds that are widely consumed as food.  Pistacia vera often is confused with other species in the genus Pistacia that are also known as pistachio. These other species can be distinguished by their geographic distributions (in the wild) and their seeds which are much smaller and have a soft shell. As of 2017, Iran accounted for over half the world's production of pistachios.<br><br></p>"
      )
      .fadeIn("slow");
  });
  $("#brazilnut").on("click", function () {
    $(".col-sm img").removeClass("active");
    $("#brazilnut").addClass("active");
    $(".info-container")
      .hide()
      .html(
        "<h3>- Brazil Nut -</h3><br><p>The Brazil nut (Bertholletia excelsa) is a South American tree in the family Lecythidaceae, and it is also the name of the tree's commercially harvested edible seeds. It is one of the largest and longest-lived trees in the Amazon rainforest. The fruit and its nutshell – containing the edible Brazil nut – are relatively large, possibly weighing as much as 2 kg (4 lb 7 oz) in total weight. As food, Brazil nuts are notable for diverse content of micronutrients, especially a high amount of selenium. The wood of the Brazil nut tree is prized for its quality in carpentry, flooring, and heavy construction.[1]<br><br></p>"
      )
      .fadeIn("slow");
  });

  $("#walnut").on("click", function () {
    $(".col-sm img").removeClass("active");
    $("#walnut").addClass("active");
    $(".info-container")
      .hide()
      .html(
        "<h3>- Walnut -</h3><br><p>A walnut is the nut of any tree of the genus Juglans (Family Juglandaceae), particularly the Persian or English walnut, Juglans regia. <br><br>A walnut is the edible seed of a drupe, and thus not a true botanical nut. It is commonly consumed as a nut. After full ripening for its edible seed when the shell has been discarded, it is used as a garnish or a snack. Nuts of the eastern black walnut (Juglans nigra) and butternuts (Juglans cinerea) are less commonly consumed.<br><br></p>"
      )
      .fadeIn("slow");
  });

  $("#joke-button").on("click", function () {
    $("#joke-button").html("<h2>Reveal</h2>");
    $("#answer-box").hide();
  });
  



  let results;

  fetch("data.json")
    .then((data) => data.json())
    .then((data) => {
      results = data;

      var counter = 0;
      $("#joke-button").on("click", function () {
          $("#answer-box").show();
          $("#joke-button").html("<h2>Generate</h2>");
          
        
        if (counter < results.length) {
          document.getElementById("joke-box").innerHTML =
            results[counter].joke;
          document.getElementById("answer-box").innerHTML =
            results[counter].answer;
        }
        counter++;
      });
    });


});