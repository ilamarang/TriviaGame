//Initialize Global variables that will track the status of the game.
var questionCounter;
var correctAnswer;
var userSelectedTopic;
var userChoice = {};
var currentQuizScore = 0;
var overallQuizScore = 0;
var totalQuizCount = 0;
var currentUserChoice = "";
var questionArray = [];
var tickSymbol = "&#x2714";
var crossSymbol = "&#x2717";

//Main object list that determines the topic, questions and answers required to play this game.

var questionList = {
    "Music": {
        "property": {
            displayName: "Music",
            imageLocation: "./assets/images/treble.png"
        },

        "Question1": {
            question: "Identify the Album Cover",
            choiceGroup: ["Rihanna - Rated R", "Micah Carey - Music Box", "Adele - 21", "Beyonce - I Am...Sasha Fierce"],
            questionType: "pic",
            questionFileLocation: "./assets/images/AdeleHidden.jpg",
            answer: 2,
            answerDetails: "21 is the second studio album by British singer Adele. It was released on 24 January 2011[1] in most of Europe, and on 22 February 2011 in North America. The album was named after the age of the singer during its production.",
            answerPicLocation: "./assets/images/Adele.jpg"

        },

        "Question2": {
            question: "Identify the Album Cover",
            choiceGroup: ["Beastie Boys - Paul’s Boutique", "Bob Dylan - The Freewheelin’ Bob Dylan", "Pink Floyd - Wish You Were Here", "Oasis - (What’s the Story) Morning Glory"],
            questionType: "pic",
            questionFileLocation: "./assets/images/OasisHidden.jpg",
            answer: 3,
            answerDetails: "Oasis were an English rock band formed in Manchester in 1991. Developed from an earlier group, the Rain, the band originally consisted of Liam Gallagher, Paul Arthurs, Paul McGuigan, and Tony McCarroll",
            answerPicLocation: "./assets/images/Oasis.jpg"
        },

        "Question3": {
            question: "Identify the Music Band",
            choiceGroup: ["Grateful Dead", "The Who", "The Allman Brothers", "Eagles"],
            questionType: "pic",
            questionFileLocation: "./assets/images/AllmanBrothersHidden.jpg",
            answer: 2,
            answerDetails: "The Allman Brothers Band was an American rock band formed in Macon, Georgia, United States, in 1969",
            answerPicLocation: "./assets/images/AllmanBrothers.jpg"
        },

        "Question4": {
            question: "Identify the Music Band",
            choiceGroup: ["Led Zipperlin", "Aerosmith", "Eagles", "Pink Floyd"],
            questionType: "pic",
            questionFileLocation: "./assets/images/LedZipperlin.jpg",
            answer: 0,
            answerDetails: "Led Zeppelin were an English rock band formed in London in 1968. The band's heavy, guitar-driven sound, rooted in blues and psychedelia on their early albums has earned them recognition as one of the progenitors of heavy metal",
            answerPicLocation: "./assets/images/LedZip.jpg",
        }
    },
    "Politics": {
        "property": {
            displayName: "Politics",
            imageLocation: "./assets/images/Politics_Image.jpg"
        },

        "Question1": {
            question: "How many people serve in Congress?",
            choiceGroup: ["475", "100", "250", "535"],
            questionType: "pic",
            questionFileLocation: "./assets/images/Congress.jpg",
            answer: 3,
            answerDetails: "Congress has 535 voting members: 435 Representatives and 100 Senators. The House of Representatives has six non-voting members in addition to its 435 voting members. These members can, however, sit on congressional committees and introduce legislation",
            answerPicLocation: "./assets/images/Congress_535.jpg"

        },

        "Question2": {
            question: " 'We The People' opening of which founding document?",

            choiceGroup: ["The Declaration of Independence", "The Bill of Rights", "The Constitution", "Obamacare"],
            questionType: "pic",
            questionFileLocation: "./assets/images/us-constitution.jpg",
            answer: 2,
            answerDetails: "We the people of the United States, in order to form a more perfect union, establish justice, insure domestic tranquility, provide for the common defense, promote the general welfare, and secure the blessings of liberty to ourselves and our posterity, do ordain and establish this Constitution for the United States of America",
            answerPicLocation: "./assets/images/constitution.gif"
        },

        "Question3": {
            question: "How many Supreme Court justices are there?",

            choiceGroup: ["8", "9", "11", "12"],
            questionType: "pic",
            questionFileLocation: "./assets/images/supremeCourt.jpg",
            answer: 2,
            answerDetails: "The number of judges—called 'justices' —on the Supreme Court has changed over time. There are 9 justices on the court now: one Chief Justice and eight Associate Justices. Courts are unofficially named for the Chief Justice.",
            answerPicLocation: "./assets/images/Supreme_Court.jpg"
        },

        "Question4": {
            question: "Who drafted the U.S. Declaration of Independence",
            choiceGroup: ["George Washington", "King George III", "Thomas Jefferson", "Abraham Lincoln"],
            questionType: "pic",
            questionFileLocation: "./assets/images/Independence.jpg",
            answer: 2,
            answerDetails: "Thomas Jefferson was an American Founding Father who was the principal author of the Declaration of Independence and later served as the third President of the United States from 1801 to 1809",
            answerPicLocation: "./assets/images/TJ.jpg"
        }
    },

    "Movies": {
        "property": {
            displayName: "Movies",
            imageLocation: "./assets/images/Hollywood_Image.jpg"
        },

        "Question1": {
            question: "For which film did Leonardo DiCaprio win his first Academy Award?",
            choiceGroup: ["Trumbo", "The Revenant", "Steve Jobs", "The Martian"],
            questionType: "pic",
            questionFileLocation: "./assets/images/LeoDicap.jpeg",
            answer: 1,
            answerDetails: "The Revenant is a 2015 American semi-biographical[4][5] Western film directed and co-produced by Alejandro G. Iñárritu and co-written by Iñárritu and Mark L. Smith, based in part on Michael Punke's 2002 novel of the same name, describing frontiersman Hugh Glass's experiences in 1823",
            answerPicLocation: "./assets/images/Revenant.jpg",

        },

        "Question2": {
            question: "Angelina Jolie and Brad Pitt split after how many years of being together?",

            choiceGroup: ["12", "9", "7", "15"],
            questionType: "pic",
            questionFileLocation: "./assets/images/AngPitt.jpeg",
            answer: 0,
            answerDetails: "Brad Pitt and Angelina Jolie's divorce announcement was a major shock to most. But after a 12-year relationship, the power couple just wasn't able to make it work.",
            answerPicLocation: "./assets/images/AngPitt.jpg"
        },

        "Question3": {
            question: "In which city was Kim Kardashian robbed at gunpoint on Oct. 3?",

            choiceGroup: ["Milan", "New York", "Paris", "London"],
            questionType: "pic",
            questionFileLocation: "./assets/images/Kim.jpeg",
            answer: 2,
            answerDetails: "Kim Kardashian was robbed at The Hôtel de Pourtalès, Paris at gunpoint by masked robbers and being robbed of jewelry worth millions",
            answerPicLocation: "./assets/images/Paris.jpg",
        },

        "Question4": {
            question: "Who was named 'Sexiest Man Alive' 2016 by People Magazine",
            choiceGroup: ["Leonardo Dicaprio", "Dwayne Johnson", "Tod Hiddleston", "Idris Elba"],
            questionType: "pic",
            questionFileLocation: "./assets/images/SexiestMan.jpeg",
            answer: 1,
            answerDetails: "The Rock, is an American actor, producer, singer, and professional wrestler. He holds American and Canadian citizenships.",
            answerPicLocation: "./assets/images/Rock.jpg",
        }
    },

    "Sports": {
        "property": {
            displayName: "Sports",
            imageLocation: "./assets/images/Sports.jpg"
        },

        "Question1": {
            question: "What boxer holds the record for youngest professional debut ",

            choiceGroup: ["Jack Dempsey", "Teddy Baldock", "Alberto Arizmendi", "Kid Laredo"],
            questionType: "pic",
            questionFileLocation: "./assets/images/Boxing.jpg",
            answer: 2,
            answerDetails: "Baby Arizmendi was perhaps the youngest person ever to have become a professional boxer; he turned pro at the ripe old age of 13, although some swore he was only seven when he had his first pro fight",
            answerPicLocation: "./assets/images/BabyAriz.jpeg",

        },

        "Question2": {
            question: "Who was the only person in NBA history to be named Most Valuable Player, Coach of the Year, and Executive of the Year",
            choiceGroup: ["Larry Bird", "Michael Jordan", "Bill Russell", "Phil Jackson"],
            questionType: "pic",
            questionFileLocation: "./assets/images/BB.jpg",
            answer: 0,
            answerDetails: "Larry Joe Bird is an American professional basketball executive, former coach and former player, currently serving as president of the Indiana Pacers in the National Basketball Association (NBA). Since retiring as a player for the Boston Celtics, he has been a mainstay in the Indiana Pacers organization",
            answerPicLocation: "./assets/images/LB.jpg"
        },

        "Question3": {
            question: "Who is the most decorated Olympian of all time",
            choiceGroup: ["Paavo Nurmi", "Mary Lou Retton", "Michael Phelps", "Carl Lewis"],
            questionType: "pic",
            questionFileLocation: "./assets/images/Olympics.jpg",
            answer: 2,
            answerDetails: "Michael Fred Phelps (born June 30, 1985) is an American former competitive swimmer and the most decorated Olympian of all time, with a total of 28 medals",
            answerPicLocation: "./assets/images/MP.jpg",
        },

        "Question4": {
            question: "Which tennis player won 470 consecutive matches",
            choiceGroup: ["Esther Vergeer", "Chris Evert", "Don Budge", "Billie Jean King"],
            questionType: "pic",
            questionFileLocation: "./assets/images/Tennis.jpeg",
            answer: 0,
            answerDetails: "Esther Mary Vergeeris a retired Dutch wheelchair tennis player. Combining singles and doubles, she has won 42 Grand Slam tournaments, 22 year-end championships and 7 Paralympics titles. Vergeer was the world number one wheelchair tennis player from 1999 until her retirement in February 2013",
            answerPicLocation: "./assets/images/Esther.jpg"
        }
    }

};

//Initialize function to be called during initial display and everytime a user restarts the game.

var initialize = function() {

    $("#questionPanel h3").html("Choose a Topic of your Choice!");
    questionCounter = 0;
    arrayCount = 0;
    currentUserChoice = "";
    currentQuizScore = 0
    $("#timerPanel").hide();
    $("#nextButton").hide();
    $("#restartButton").hide();
    $("#questionPanel h2").hide();
    $(".answerPanel").hide();

};

//Display the different quiz topics available in the main Quiz Object 
var displayQuizTopics = function(quiz) {
    //console.log(player.name);
    //console.log(player.basePoints);
    var $columnDisplay = $("<div class='col-md-6 col-sm-6'>");
    var $thumbNailDisplay = $("<div class='col-xs-12 thumbnail text-center'>");
    var $responsiveImageDisplay = $("<img class='img-responsive' width='100%'>").attr("src", quiz["property"].imageLocation).attr("id", quiz["property"].displayName);
    var $captionDiv = $("<div class='caption'>")
    var $captionAttackingPower = $("<h4 class='text-center'>")
    $captionAttackingPower.html(quiz["property"].displayName);
    //$($responsiveImageDisplay).appendTo($($thumbNailDisplay)).appendTo($($columnDisplay)).appendTo($(".choosePlayers"));

    ($responsiveImageDisplay).appendTo($thumbNailDisplay).appendTo($columnDisplay);
    $captionAttackingPower.appendTo($captionDiv);
    $captionDiv.appendTo($columnDisplay);
    $columnDisplay.appendTo($("#quizTopics"));

}

//Function to initialize variables after every question is answered. 
var displayNextQuestion = function() {

    $("#correctAnswerPanel").empty();
    $(".correctAnswerDiv").hide();
    $("#questionPanel").hide();
    $(".answerPanel").hide();
    $(".questionPic").empty();
    $(".answerResultPic").empty();
    currentUserChoice = "";
    userChoice = questionList[userSelectedTopic];

    $("#questionPanel h3").html(userChoice[questionArray[questionCounter]].question );
    if (userChoice[questionArray[questionCounter]].questionType == "pic") {
        var $questionImage = $("<img class='img-responsive' width='100%'>").attr("src", userChoice[questionArray[questionCounter]].questionFileLocation);
        $questionImage.appendTo($(".questionPic"));
    }

    for (i = 0; i < userChoice[questionArray[questionCounter]].choiceGroup.length; i++) {

        if (userChoice[questionArray[questionCounter]].answer===i) {
            var radioChoice = '<div class="radio"> <label> <input type="radio" name="answer" value="' + userChoice[questionArray[questionCounter]].choiceGroup[i] + '" >' + userChoice[questionArray[questionCounter]].choiceGroup[i] + "<span id='symbol'>" + '</label>';
        }else {
            var radioChoice = '<div class="radio"> <label> <input type="radio" name="answer" value="' + userChoice[questionArray[questionCounter]].choiceGroup[i] + '" >' + userChoice[questionArray[questionCounter]].choiceGroup[i] + "<span id='symbol'>" + '</label>';
        }
        

        $("#choiceList").append(radioChoice).fadeIn;
    }
    questionCounter++;


    $("#questionPanel").animate({
        "opacity": "show",
        top: "150"
    }, 1000);

};



var verifyAnswer = function() {

    console.log("currentUserChoice" + currentUserChoice);

    console.log(userChoice[questionArray[questionCounter - 1]].choiceGroup[userChoice[questionArray[questionCounter - 1]].answer]);


    if (userChoice[questionArray[questionCounter - 1]].choiceGroup[userChoice[questionArray[questionCounter - 1]].answer] === currentUserChoice) {
        currentQuizScore++;      

    }

}

//handle the timeout action triggered when the interval automatically cl
var handleTimeOut = function() {


    $('#nextButton').trigger('click');

}

$(".correctAnswerDiv").hide(); 

$(document).ready(function() {

       

    $("#restartButton").on("click", function() {

        initialize();
        $("#quizTopics").show();
    });


    initialize();

    for (var key in questionList) {

        if (questionList.hasOwnProperty(key)) {
            displayQuizTopics(questionList[key]);
        }
    }


    $(".img-responsive").on("click", function() {

        userSelectedTopic = $(this).attr("id");
        for (var key in questionList[userSelectedTopic]) {
            if (key != "property") {

                questionArray[arrayCount] = key;

                arrayCount++;
            }

        }
        $("#quizTopics").hide();
        //$("#nextButton").show();

        $('#nextButton').trigger('click');
        totalQuizCount++;
    });

    $("#choiceList").on("click", "input", function() {
        $(":radio").prop("disabled", true);
        
        if (currentUserChoice === "") {
            currentUserChoice = $(this)[0].value;
            
            var $correctAnswerHeading = $("<h4>");

            $(".answerPanel").show();
            var randomAnswerGif = Math.floor((Math.random() * 10) + 1);
            var source = "";
            if (userChoice[questionArray[questionCounter - 1]].choiceGroup[userChoice[questionArray[questionCounter - 1]].answer] === currentUserChoice) {
                source = "./assets/gifs/correctAnswer" + randomAnswerGif + ".gif"
                $(this).next().html(tickSymbol);
                $($correctAnswerHeading).html("That's Right?");
                //console.log($(this));                  


            } else {
                source = "./assets/gifs/wrongAnswer" + randomAnswerGif + ".gif"
                $(this).next().html(crossSymbol);
                $($correctAnswerHeading).html("What's Right?");
            }
            var $answerCorrectImage = $("<img class='img-responsive' width='100%'>").attr("src", source);
            $answerCorrectImage.appendTo($(".answerResultPic"));

            //Populate the correct Answer Panel
            var $answerImage = $("<img class='img-responsive' width='100%'>").attr("src", userChoice[questionArray[questionCounter - 1]].answerPicLocation);
            var $answerDetails = $("<h4>");
            $($answerDetails).html(userChoice[questionArray[questionCounter - 1]].answerDetails);

            console.log($answerDetails);
            
            
            $correctAnswerHeading.appendTo($("#correctAnswerPanel"));    

            $answerImage.appendTo($("#correctAnswerPanel"));

            
            $("#correctAnswerPanel").append(userChoice[questionArray[questionCounter - 1]].answerDetails);
            $(".correctAnswerDiv").show();
        }



    });

    $("#nextButton").on("click", function() {

        if (currentUserChoice.length > 0) {

            verifyAnswer();

        }

        CounterFreeze();
        CounterInit(10);

        $("#timerPanel").hide();
        //Delete Previous Question
        $("#choiceList").empty();
        if (questionCounter < questionArray.length) {
            //Display Next Question
            displayNextQuestion();
            $("#timerPanel").animate({
                "opacity": "show",
                top: "150"
            }, 1000);

        } else {
            $(".questionPic").empty();
            $("#correctAnswerPanel").empty();
            $(".correctAnswerDiv").hide();
            $(".answerPanel").hide();
            $("#questionPanel h3").html("Thanks for Playing!");
            overallQuizScore = overallQuizScore + currentQuizScore;
            $("#questionPanel h2").html(" <u> Results</u>  <br><br> " + "Current Quiz Score " + currentQuizScore + "/4  <br><br>" + "Total Quiz Attempted: " + totalQuizCount + "<br><br> Overall Quiz Score: " + overallQuizScore + "/" + 4 * totalQuizCount);
            $("#questionPanel h2").show();

            CounterFreeze();
            $("#restartButton").animate({
                "opacity": "show",
                top: "150"
            }, 1000);
            $(this).hide();
        }


    });

    //Function to automatically modify the background skin

    $(function () {
    var body = $(".panel");
    var backgrounds = [
    'url(./assets/images/Tree10.jpg)',
    'url(./assets/images/Tree4.jpg)',
    'url(./assets/images/Tree5.jpg)',
    'url(./assets/images/Tree3.jpg)', 
     
    'url(./assets/images/Tree9.jpg)',  
    'url(./assets/images/nature.jpg)',      
                  
       
      'url(./assets/images/Tree7.jpeg)',
        
      'url(./assets/images/nature.jpg)'

      ];

    var current = 0;
    function nextBackground() {
        body.css(
            'background',
        backgrounds[current = ++current % backgrounds.length]);

        setTimeout(nextBackground, 5000);
    }
    setTimeout(nextBackground, 5000);
    body.css('background', backgrounds[0]);
});



});


