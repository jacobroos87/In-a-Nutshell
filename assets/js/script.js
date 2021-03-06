$(document).ready(function () {

    // Initialisation for email.js

    (function () {
        emailjs.init("user_5OGKjNpFoPyKDbBVzTMSw");
    })();

    // Scroll function for the top navbar to disappear on scroll down and reappear on scroll up

    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbarId").style.top = "0";
        } else {
            document.getElementById("navbarId").style.top = "-65px";
        }
        prevScrollpos = currentScrollPos;
    };

    // Chart data variables

    let results;

    // Data objects for graph data and nut bio

    var xAxis = [
        "x",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
    ];
    const nutData = {
        cashew: {
            graphData: [
                "Cashew World Production Amounts (Metric Tons)",
                469079,
                576431,
                549692,
                601642,
                716682,
                724556,
                783994,
                792647,
                777630,
                786266,
            ],
            id: 170571,
            nutName: "<h4> Cashew </h4>",
            nutInfo:
                "<h2> Cashew </h2><br><p>The delicately flavored cashew nut is a favorite between meal snack that can be readily found in your local market year round. It also makes wonderful nut butter and a special addition to salads and stir-fry dishes. Cashew nuts are actually the kidney-shaped seeds that adhere to the bottom of the cashew apple, the fruit of the cashew tree, which is native to the coastal areas of northeastern Brazil. <br><br>While cashew apples are not appreciated in the United States, they are regarded as delicacies in Brazil and the Caribbean. Cashews are always sold shelled because the interior of the shells contains a caustic resin, known as cashew balm, which must be carefully removed before the nuts are fit for consumption. This caustic resin is actually used in industry to make varnishes and insecticides.<br><br></p>",
        },

        almond: {
            graphData: [
                "Almond World Production Amounts (Metric Tons)",
                918955,
                1127256,
                1072135,
                1097228,
                1058925,
                1091583,
                1180779,
                1226640,
                1284131,
                1368703,
            ],
            id: 170567,
            nutName: "<h4> Almond </h4>",
            nutInfo:
                "<h2>- Almond -</h2><br><p>Fortunately, the delicately flavored and versatile almond is available throughout the year to make a healthy and tasty addition to both sweet and savory dishes. Although packaged almonds are available year round, they are the freshest in mid-summer, which is when they are at the height of their season.<br><br>The almond that we think of as a nut is technically the seed of the fruit of the almond tree, a medium-size tree that bears fragrant pink and white flowers. Like its cousins, the peach, cherry and apricot trees, the almond tree bears fruits with stone-like seeds (or pits) within. The seed of the almond fruit is what we refer to as the almond nut.<br><br></p>",
        },

        hazelnut: {
            graphData: [
                "Hazelnut World Production Amounts (Metric Tons)",
                417950,
                374600,
                469908,
                449380,
                357240,
                497150,
                398060,
                510270,
                460043,
                528068,
            ],
            id: 170581,
            nutName: "<h4> Hazelnut </h4>",
            nutInfo:
                "<h2>- Hazelnut -</h2><br><p>The hazelnut is the nut of the hazel and therefore includes any of the nuts deriving from species of the genus Corylus, especially the nuts of the species Corylus avellana. It also is known as cobnut or filbert nut according to species. A cob is roughly spherical to oval, about 15–25 mm (5⁄8–1 in) long and 10–15 mm (3⁄8–5⁄8 in) in diameter, with an outer fibrous husk surrounding a smooth shell and a filbert is more elongated, being about twice as long as its diameter. The nut falls out of the husk when ripe, about seven to eight months after pollination. The kernel of the seed is edible and used raw or roasted, or ground into a paste. The seed has a thin, dark brown skin, which is sometimes removed before cooking. <br><br>Hazelnuts are used in confectionery to make praline, and also used in combination with chocolate for chocolate truffles and products such as Cadbury chocolate bars, Nutella and Frangelico liqueur. Hazelnut oil, pressed from hazelnuts, is strongly flavoured and used as a cooking oil. Turkey is the world's largest producer of hazelnuts.<br><br></p>",
        },

        macadamia: {
            graphData: [
                "Macadamia World Production Amounts (Metric Tons)",
                28582,
                29356,
                36637,
                37184,
                41376,
                46697,
                49346,
                50030,
                58821,
                60057,
            ],
            id: 168598,
            nutName: "<h4> Macadamia </h4>",
            nutInfo:
                "<h2>- Macadamia -</h2><br><p>Macadamia is a genus of four species of trees indigenous to Australia, and constituting part of the plant family Proteaceae. They are native to north eastern New South Wales and central and south eastern Queensland. Three species of the genus are commercially important for their fruit, the macadamia nut, with a total global production of 160,000 tonnes (180,000 short tons) in 2015. Other names include Queensland nut, bush nut, maroochi nut, bauple nut, and Hawaii nut. In Australian Aboriginal languages, the fruit is known by names such as bauple, gyndl, jindilli, and boombera. It was an important source of bushfood for the Aboriginal peoples who were the original inhabitants of the area. <br><br>The nut was first commercially produced on a wide scale in Hawaii, where it was introduced in the 1880s, and for some time they were the world's largest producer. South Africa has been the world's largest producer of the macadamia since the 2010s.<br><br></p>",
        },

        walnut: {
            graphData: [
                "Walnut World Production Amounts (Metric Tons)",
                553972,
                535816,
                563709,
                575367,
                651447,
                713198,
                881524,
                867040,
                885038,
                965402,
            ],
            id: 170187,
            nutName: "<h4> Walnut </h4>",
            nutInfo:
                "<h2>- Walnut -</h2><br><p>A walnut is the nut of any tree of the genus Juglans (Family Juglandaceae), particularly the Persian or English walnut, Juglans regia. <br><br>A walnut is the edible seed of a drupe, and thus not a true botanical nut. It is commonly consumed as a nut. After full ripening for its edible seed when the shell has been discarded, it is used as a garnish or a snack. Nuts of the eastern black walnut (Juglans nigra) and butternuts (Juglans cinerea) are less commonly consumed.<br><br></p>",
        },

        peanut: {
            graphData: [
                "Peanut World Production Amounts (Metric Tons)",
                918955,
                1127256,
                1072135,
                1097228,
                1058925,
                1091583,
                1180779,
                1226640,
                1284131,
                1368703,
            ],
            id: 172430,
            nutName: "<h4> Peanut </h4>",
            nutInfo:
                "<h2>- Peanut -</h2><br><p>The peanut, also known as the groundnut, goober (US), pindar (US) or monkey nut (UK), and taxonomically classified as Arachis hypogaea, is a legume crop grown mainly for its edible seeds. It is widely grown in the tropics and subtropics, being important to both small and large commercial producers. It is classified as both a grain legume and, due to its high oil content, an oil crop. Atypically among legume crop plants, peanut pods develop underground (geocarpy) rather than above ground. With this characteristic in mind, the botanist Carl Linnaeus named the species hypogaea, which means 'under the earth'. As a legume, the peanut belongs to the botanical family Fabaceae; this is also known as Leguminosae, and commonly known as the bean, or pea, family. Like most other legumes, peanuts harbor symbiotic nitrogen-fixing bacteria in root nodules. This capacity to fix nitrogen means peanuts require less nitrogen-containing fertilizer and also improve soil fertility, making them valuable in crop rotations. <br><br>Peanuts are similar in taste and nutritional profile to 'tree nuts' such as walnuts and almonds, and, as a culinary nut, are often served in similar ways in Western cuisines. The botanical definition of a nut is 'a fruit whose ovary wall becomes hard at maturity'. Using this criterion, the peanut is not a nut. However, peanuts are usually categorized as 'nuts' for culinary purposes and in common English more generally.<br><br></p>",
        },

        pecan: {
            graphData: [
                "Pecan World Production Amounts (Metric Tons)",
                91214,
                91215,
                115768,
                110670,
                122340,
                119726,
                130993,
                144765,
                146827,
                139739,
            ],
            id: 170182,
            nutName: "<h4> Pecan </h4>",
            nutInfo:
                "<h2>- Pecan -</h2><br><p>The pecan (Carya illinoinensis) is a species of hickory native to northern Mexico and the southern United States in the region of the Mississippi River. The tree is cultivated for its seed in the southern United States, primarily in Georgia, New Mexico, and Texas, and in Mexico, which produces nearly half of the world total. The seed is an edible nut used as a snack and in various recipes, such as praline candy and pecan pie. The pecan, in various aspects, is included in state symbols of Alabama, Arkansas, California, Oklahoma, and Texas.<br><br></p>",
        },

        pistachio: {
            graphData: [
                "Pistachio World Production Amounts (Metric Tons)",
                632500,
                475700,
                600135,
                467155,
                557850,
                521495,
                735129,
                587506,
                773528,
                655200,
            ],
            id: 170185,
            nutName: "<h4> Pistachio </h4>",
            nutInfo:
                "<h2>- Pistachio -</h2><br><p>The pistachio (Pistacia vera), a member of the cashew family, is a small tree originating from Central Asia and the Middle East. The tree produces seeds that are widely consumed as food.  Pistacia vera often is confused with other species in the genus Pistacia that are also known as pistachio. These other species can be distinguished by their geographic distributions (in the wild) and their seeds which are much smaller and have a soft shell. As of 2017, Iran accounted for over half the world's production of pistachios.<br><br></p>",
        },

        brazilnut: {
            graphData: [
                "Brazil Nut World Production Amounts (Metric Tons)",
                21490,
                26450,
                23673,
                28880,
                26850,
                28500,
                27850,
                27850,
                38500,
                26100,
            ],
            id: 170569,
            nutName: "<h4> Brazil Nut </h4>",
            nutInfo:
                "<h2>- Brazil Nut -</h2><br><p>The Brazil nut (Bertholletia excelsa) is a South American tree in the family Lecythidaceae, and it is also the name of the tree's commercially harvested edible seeds. It is one of the largest and longest-lived trees in the Amazon rainforest. The fruit and its nutshell – containing the edible Brazil nut – are relatively large, possibly weighing as much as 2 kg (4lb 7oz) in total weight. As food, Brazil nuts are notable for diverse content of micronutrients, especially a high amount of selenium. The wood of the Brazil nut tree is prized for its quality in carpentry, flooring, and heavy construction.<br><br></p>",
        },
    };

    // Back to top button function

    const backToTopBtn = document.querySelector("#back-to-top");
    const windowSize = $(window).width();

    window.addEventListener("scroll", scrollFunction);

    function scrollFunction() {
        if (windowSize > 767 && window.pageYOffset > 300) {
            $(backToTopBtn).fadeIn("slow");
        }
        else {
            $(backToTopBtn).fadeOut("slow");
        }
    }

    backToTopBtn.addEventListener("click", backToTop);

    function backToTop() {
        window.scrollTo(0, 0);
    }

    // Main on click function to show info and data divs and to call the foodLabel function
    // The functions and events below are all linked to the alt text of the images

    $(".nut-click-icon").on("click", function (event) {

        const nutChosen = event.currentTarget.alt;
        const dataPromise = fdcApiCall(nutData[nutChosen]["id"]);
        foodLabel(dataPromise);

        $("#nut-data, #joke-generator, #contact-form-section, .scroll-down, footer").show().fadeIn();
        $("#downArrow, .navbar-nav, .navbar-toggler").animate({opacity: '1', color: "white"}, 1000);
        $("#data-center-img").html("<img src='assets/images/" + nutChosen + ".png'/>");
        $(".info-container").hide().html(nutData[nutChosen]["nutInfo"]).fadeIn("slow");
        $("#nutName").html(nutData[nutChosen]["nutName"]).fadeIn("slow");
        $("#nut-bio").css("display", "table-cell").fadeIn();
        $(".steps :nth-child(1)").removeClass("active-steps");
        $(".steps :nth-child(2)").addClass("active-steps");
        $(".nut-click-icon").removeClass("active");
        $(event.currentTarget).addClass("active");
        
        // C3.js graph calling data from the data objects at line 221 and inputting at 288

        var chart = c3.generate({

            data: {
                x: "x",
                xFormat: "%Y",

                columns: [xAxis, nutData[nutChosen]["graphData"]],
                type: "bar",
            },
            axis: {
                y: {
                    tick: {
                        format: d3.format(","),
                    },
                },
                x: {
                    type: "timeseries",
                    tick: {
                        format: "%Y",
                    },
                },
            },
            color: {
                pattern: ["rgba(78, 124, 72, 0.808)"],
            },
            bar: {
                width: {
                    ratio: 0.6,
                },
            },
        });
    });

    // Joke generator using a fetch call to a local JSON file (data.json) with joke data. if loop with a counter to iterate through jokes. 

    let jokeResults;

    fetch("data.json")
        .then((data) => data.json())
        .then((data) => {
            jokeResults = data;

            var counter = 0;

            $("#joke-button").on("click", function () {
                if (counter < jokeResults.length) {
                    $("#answer-box").hide();
                    $("#answer-button")
                        .show()
                        .on("click", function () {
                            $("#answer-box").show();
                            $("#answer-button").hide();
                        });
                } else {
                    counter = 0;
                    $("#answer-box").hide();
                    $("#answer-button").show();
                }

                // If loop to print the joke data in the relevant divs

                if (counter < jokeResults.length) {
                    document.getElementById("joke-box").innerHTML =
                        jokeResults[counter].joke;
                    document.getElementById("answer-box").innerHTML =
                        jokeResults[counter].answer;
                }
                counter++;
            });
        });

    function foodLabel(dataPromise) {
        dataPromise.then((response) => {
            results = response;

            // For loop to iterate through the results 

            for (let i = 0; i < results.foodNutrients.length; i++) {

                const amount = results.foodNutrients[i].amount;

                // if & else if loops to fill in data for the nutrition label.  Math added with current RDA data to calculate %

                if (
                    Object.values(results.foodNutrients[i]).indexOf(
                        "Total lipid (fat)"
                    ) > -1
                ) {
                    document.getElementById("fat-unit").innerHTML =
                        amount + "g";
                    document.getElementById("fat-rda").innerHTML =
                        Math.round((amount / 65) * 100) + "%";
                } else if (
                    Object.values(results.foodNutrients[i]).indexOf(
                        "Fatty acids, total saturated"
                    ) > -1
                ) {
                    document.getElementById("satfat-unit").innerHTML =
                        amount + "g";
                    document.getElementById("satfat-rda").innerHTML =
                        Math.round((amount / 20) * 100) + "%";
                } else if (
                    Object.values(results.foodNutrients[i]).indexOf("Cholesterol") >
                    -1
                ) {
                    document.getElementById("chol-unit").innerHTML =
                        amount + "mg";
                    document.getElementById("chol-rda").innerHTML =
                        Math.round((amount / 300) * 100) + "%";
                } else if (
                    Object.values(results.foodNutrients[i]).indexOf("Sodium, Na") > -1
                ) {
                    document.getElementById("sodium-unit").innerHTML =
                        amount + "mg";
                    document.getElementById("sodium-rda").innerHTML =
                        Math.round((amount / 2400) * 100) +
                        "%";
                } else if (
                    Object.values(results.foodNutrients[i]).indexOf(
                        "Carbohydrate, by difference"
                    ) > -1
                ) {
                    document.getElementById("carb-unit").innerHTML =
                        amount + "g";
                    document.getElementById("carb-rda").innerHTML =
                        Math.round((amount / 300) * 100) + "%";
                } else if (
                    Object.values(results.foodNutrients[i]).indexOf(
                        "Fiber, total dietary"
                    ) > -1
                ) {
                    document.getElementById("fibre-unit").innerHTML =
                        amount + "g";
                    document.getElementById("fibre-rda").innerHTML =
                        Math.round((amount / 25) * 100) + "%";
                } else if (
                    Object.values(results.foodNutrients[i]).indexOf(
                        "Sugars, total including NLEA"
                    ) > -1
                ) {
                    document.getElementById("sugar-unit").innerHTML =
                        amount + "g";
                    document.getElementById("sugar-rda").innerHTML =
                        Math.round((amount / 50) * 100) + "%";
                } else if (
                    Object.values(results.foodNutrients[i]).indexOf("Protein") > -1
                ) {
                    document.getElementById("protein-unit").innerHTML =
                        amount + "g";
                    document.getElementById("protein-rda").innerHTML =
                        Math.round((amount / 50) * 100) + "%";
                } else if (
                    Object.values(results.foodNutrients[i]).indexOf(
                        "Vitamin A, RAE"
                    ) > -1
                ) {
                    document.getElementById("vit-a-unit").innerHTML =
                        amount + "ug";
                    document.getElementById("vit-a-rda").innerHTML =
                        Math.round((amount / 900) * 100) + "%";
                } else if (
                    Object.values(results.foodNutrients[i]).indexOf(
                        "Vitamin C, total ascorbic acid"
                    ) > -1
                ) {
                    document.getElementById("vit-c-unit").innerHTML =
                        amount + "mg";
                    document.getElementById("vit-c-rda").innerHTML =
                        Math.round((amount / 90) * 100) + "%";
                } else if (
                    Object.values(results.foodNutrients[i]).indexOf("Calcium, Ca") >
                    -1
                ) {
                    document.getElementById("calcium-unit").innerHTML =
                        amount + "mg";
                    document.getElementById("calcium-rda").innerHTML =
                        Math.round((amount / 1300) * 100) +
                        "%";
                } else if (
                    Object.values(results.foodNutrients[i]).indexOf("Iron, Fe") > -1
                ) {
                    document.getElementById("iron-unit").innerHTML =
                        amount + "mg";
                    document.getElementById("iron-rda").innerHTML =
                        Math.round((amount / 18) * 100) + "%";
                } else if (
                    Object.values(results.foodNutrients[i]).indexOf("Potassium, K") >
                    -1
                ) {
                    document.getElementById("pota-unit").innerHTML =
                        amount + "mg";
                    document.getElementById("pota-rda").innerHTML =
                        Math.round((amount / 4700) * 100) +
                        "%";
                } else if (
                    Object.values(results.foodNutrients[i]).indexOf("Phosphorus, P") >
                    -1
                ) {
                    document.getElementById("phos-unit").innerHTML =
                        amount + "mg";
                    document.getElementById("phos-rda").innerHTML =
                        Math.round((amount / 1250) * 100) +
                        "%";
                }

                // JS to calculate the total calories for each nut 

                const fats = Object.values(results.foodNutrients[i]).indexOf("Total lipid (fat)") > -1;
                const proteins = Object.values(results.foodNutrients[i]).indexOf("Protein") > -1;
                const carbs = Object.values(results.foodNutrients[i]).indexOf("Carbohydrate, by difference") > -1;

                if (fats) {
                    var fatUnit = results.foodNutrients[i].amount;
                } else if (proteins) {
                    var proteinUnit = results.foodNutrients[i].amount;
                } else if (carbs) {
                    var carbUnit = results.foodNutrients[i].amount;
                }
                document.getElementById("calories").innerHTML = Math.round((carbUnit * 4) + (fatUnit * 9) + (proteinUnit * 4));
            }
        });
    }
});

// Api Call to USDA FDC database for food nutrition values.  The url data is changed with each click and alt text for the images used as reference

function fdcApiCall(nutChosen) {
    return fetch(
        "https://api.nal.usda.gov/fdc/v1/food/" +
        nutChosen +
        "?format=abridged&nutrients=204&nutrients=606&nutrients=601&nutrients=307&nutrients=205&nutrients=291&nutrients=269&nutrients=203&nutrients=401&nutrients=320&nutrients=303&nutrients=306&nutrients=305&nutrients=301&api_key=d0IgDAj0JPoid4UyR93MEyBBcNSfmbW1ZAV6UcDK",
        {
            method: "GET",
        }
    )
        .then((response) => response.json())

        .catch((err) => {
            console.error(err);
        });
}
