//Counter to track the questions
var questionCounter;
//Define the list of Questions in an Object List that holds the quiz details.
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
            answerDetails: 5,
            answerPicLocation: "Hi"

        },

        "Question2": {
            question: "Identify the Album Cover",
            choiceGroup: ["Beastie Boys - Paul’s Boutique", "Bob Dylan - The Freewheelin’ Bob Dylan", "Pink Floyd - Wish You Were Here", "Oasis - (What’s the Story) Morning Glory"],
            questionType: "pic",
            questionFileLocation: "./assets/images/OasisHidden.jpg",
            answer: 3,
            answerDetails: 5,
            answerPicLocation: "Hi"
        },

        "Question3": {
            question: "Identify the Music Band",
            choiceGroup: ["Grateful Dead", "The Who", "The Allman Brothers", "Eagles"],
            questionType: "pic",
            questionFileLocation: "./assets/images/AllmanBrothersHidden.jpg",
            answer: 2,
            answerDetails: 5,
            answerPicLocation: "Hi"
        },

        "Question4": {
            question: "Identify the Music Band",
            choiceGroup: ["Led Zipperlin", "Aerosmith", "Eagles", "Pink Floyd"],
            questionType: "pic",
            questionFileLocation: "./assets/images/LedZipperlin.jpg",
            answer: 0,
            answerDetails: 5,
            answerPicLocation: "Hi"
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
            answerDetails: 5,
            answerPicLocation: "Hi"

        },

        "Question2": {
            question: " 'We The People' opening of which founding document?",

            choiceGroup: ["The Declaration of Independence", "The Bill of Rights", "The Constitution", "Obamacare"],
            questionType: "pic",
            questionFileLocation: "./assets/images/us-constitution.jpg",
            answer: 2,
            answerDetails: 5,
            answerPicLocation: "Hi"
        },

        "Question3": {
            question: "How many Supreme Court justices are there?",

            choiceGroup: ["8", "9", "11", "12"],
            questionType: "pic",
            questionFileLocation: "./assets/images/supremeCourt.jpg",
            answer: 2,
            answerDetails: 5,
            answerPicLocation: "Hi"
        },

        "Question4": {
            question: "Who drafted the U.S. Declaration of Independence",
            choiceGroup: ["George Washington", "King George III", "Thomas Jefferson", "Abraham Lincoln"],
            questionType: "pic",
            questionFileLocation: "./assets/images/Independence.jpg",
            answer: 2,
            answerDetails: 5,
            answerPicLocation: "Hi"
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
            answerDetails: 5,
            answerPicLocation: "Hi"

        },

        "Question2": {
            question: "Angelina Jolie and Brad Pitt split after how many years of being together?",

            choiceGroup: ["12", "9", "7", "15"],
            questionType: "pic",
            questionFileLocation: "./assets/images/AngPitt.jpeg",
            answer: 0,
            answerDetails: 5,
            answerPicLocation: "Hi"
        },

        "Question3": {
            question: "In which city was Kim Kardashian robbed at gunpoint on Oct. 3?",

            choiceGroup: ["Milan", "New York", "Paris", "London"],
            questionType: "pic",
            questionFileLocation: "./assets/images/Kim.jpeg",
            answer: 2,
            answerDetails: 5,
            answerPicLocation: "Hi"
        },

        "Question4": {
            question: "Who was named 'Sexiest Man Alive' 2016 by People Magazine",
            choiceGroup: ["Leonardo Dicaprio", "Dwayne Johnson", "Tod Hiddleston", "Idris Elba"],
            questionType: "pic",
            questionFileLocation: "./assets/images/SexiestMan.jpeg",
            answer: 1,
            answerDetails: 5,
            answerPicLocation: "Hi"
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
            questionFileLocation: "./assets/images/Arizmendi.jpg",
            answer: 2,
            answerDetails: 5,
            answerPicLocation: "Hi"

        },

        "Question2": {
            question: "Who was the only person in NBA history to be named Most Valuable Player, Coach of the Year, and Executive of the Year",
            choiceGroup: ["Larry Bird", "Michael Jordan", "Bill Russell", "Phil Jackson"],
            questionType: "pic",
            questionFileLocation: "./assets/images/Larry.jpg",
            answer: 0,
            answerDetails: 5,
            answerPicLocation: "Hi"
        },

        "Question3": {
            question: "Who is the most decorated Olympian of all time",
            choiceGroup: ["Paavo Nurmi", "Mary Lou Retton", "Michael Phelps", "Carl Lewis"],
            questionType: "pic",
            questionFileLocation: "./assets/images/Olympics.jpg",
            answer: 2,
            answerDetails: 5,
            answerPicLocation: "Hi"
        },

        "Question4": {
            question: "Which tennis player won 470 consecutive matches",
            choiceGroup: ["Esther Vergeer", "Chris Evert", "Don Budge", "Billie Jean King"],
            questionType: "pic",
            questionFileLocation: "./assets/images/Esther.jpg",
            answer: 0,
            answerDetails: 5,
            answerPicLocation: "Hi"
        }
    }

};


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

//Dynamically display players based on the object List.
var displayQuizTopics = function(quiz) {
    //console.log(player.name);
    //console.log(player.basePoints);
    var $columnDisplay = $("<div class='col-md-3 col-sm-6'>");
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

var displayNextQuestion = function() {

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

var handleTimeOut = function() {


    $('#nextButton').trigger('click');

}


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
            
            $(".answerPanel").show();
            var randomAnswerGif = Math.floor((Math.random() * 10) + 1);
            var source = "";
            if (userChoice[questionArray[questionCounter - 1]].choiceGroup[userChoice[questionArray[questionCounter - 1]].answer] === currentUserChoice) {
                source = "./assets/gifs/correctAnswer" + randomAnswerGif + ".gif"
                $(this).next().html(tickSymbol);
                //console.log($(this));                  


            } else {
                source = "./assets/gifs/wrongAnswer" + randomAnswerGif + ".gif"
                $(this).next().html(crossSymbol);

            }
            var $answerCorrectImage = $("<img class='img-responsive' width='100%'>").attr("src", source);
            $answerCorrectImage.appendTo($(".answerResultPic"));
            
        }


    });



    $("#nextButton").on("click", function() {

        if (currentUserChoice.length > 0) {

            verifyAnswer();

        }



        CounterFreeze();
        CounterInit(5);

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

    $(function () {
    var body = $(".panel");
    var backgrounds = [
      'url(./assets/images/1_4.jpg)', 
      'url(./assets/images/1_2.jpg)', 
      'url(./assets/images/1_3.jpg)', 
      'url(./assets/images/1_4.jpg)', 
      'url(./assets/images/2.jpg)', 
      'url(./assets/images/2_2.jpg)', 
      'url(./assets/images/3.jpg)', 
      'url(./assets/images/3_2.jpg)', 
      'url(./assets/images/4.jpg)', 
      'url(./assets/images/4_2.jpg)', 
      'url(./assets/images/5.jpg)', 
      'url(./assets/images/5_2.jpg)', 
      'url(./assets/images/6.jpg)', 
      'url(./assets/images/6_2.jpg)', 
      'url(./assets/images/7.jpg)', 
      'url(./assets/images/7_2.jpg)'

      ];
    var current = 0;

    function nextBackground() {
        body.css(
            'background',
        backgrounds[current = ++current % backgrounds.length]);

        //setTimeout(nextBackground, 5000);
    }
    //setTimeout(nextBackground, 5000);
    //body.css('background', backgrounds[0]);
});

});