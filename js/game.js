//Counter to track the questions
var questionCounter;
//Define the list of Questions in an Object List that holds the quiz details.
var correctAnswer;
var userSelectedTopic;
var userChoice= {};
var currentUserChoice = "";
var questionArray = [];
var questionList = {
    "Music": {
        "property": {
            displayName: "Music",
            imageLocation: "./assets/images/Adele.jpg"
        },

        "Question1": {
            question: "Music",
            choiceGroup: ["2", "3", "4", "5"],
            answer: "Hi",
            answerDetails: 5,
            answerPicLocation: "Hi"

        },

        "Question2": {
            question: "Question2",
            
            choiceGroup: ["Meow", "Bow", "Oink", "Neigh"],
            answer: "Hi",
            answerDetails: 5,
            answerPicLocation: "Hi"
        },

        "Question3": {
            question: "Question3",
            
            choiceGroup: ["-15", "-90", "-20", "-40"],
            answer: "Hi",
            answerDetails: 5,
            answerPicLocation: "Hi"
        },

        "Question4": {
            question: "Question4",
            choiceGroup: ["Hi", "How", "Yes", "Go"],
            answer: "Hi",
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
            answer: 3,
            answerDetails: 5,
            answerPicLocation: "Hi"

        },

        "Question2": {
            question: " 'We The People' opening of which founding document?",
            
            choiceGroup: ["The Declaration of Independence", "The Bill of Rights", "The Constitution", "Obamacare"],
            answer: 2,
            answerDetails: 5,
            answerPicLocation: "Hi"
        },

        "Question3": {
            question: "How many Supreme Court justices are there?",
            
            choiceGroup: ["8", "9", "11", "12"],
            answer: 2,
            answerDetails: 5,
            answerPicLocation: "Hi"
        },

        "Question4": {
            question: "Who drafted the U.S. Declaration of Independence",
            choiceGroup: ["George Washington", "King George III", "Thomas Jefferson", "Abraham Lincoln"],
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
            question: "Movies",
            choiceGroup: ["2", "3", "4", "5"],
            answer: "Hi",
            answerDetails: 5,
            answerPicLocation: "Hi"

        },

        "Question2": {
            question: "Question2",
            
            choiceGroup: ["Meow", "Bow", "Oink", "Neigh"],
            answer: "Hi",
            answerDetails: 5,
            answerPicLocation: "Hi"
        },

        "Question3": {
            question: "Question3",
            
            choiceGroup: ["-15", "-90", "-20", "-40"],
            answer: "Hi",
            answerDetails: 5,
            answerPicLocation: "Hi"
        },

        "Question4": {
            question: "Question4",
            choiceGroup: ["Hi", "How", "Yes", "Go"],
            answer: "Hi",
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
            question: "Sports",
            
            choiceGroup: ["2", "3", "4", "5"],
            answer: "Hi",
            answerDetails: 5,
            answerPicLocation: "Hi"

        },

        "Question2": {
            question: "Question2",
            choiceGroup: ["Meow", "Bow", "Oink", "Neigh"],
            answer: "Hi",
            answerDetails: 5,
            answerPicLocation: "Hi"
        },

        "Question3": {
            question: "Question3",
            choiceGroup: ["-15", "-90", "-20", "-40"],
            answer: "Hi",
            answerDetails: 5,
            answerPicLocation: "Hi"
        },

        "Question4": {
            question: "Question4",
            choiceGroup: ["Hi", "How", "Yes", "Go"],
            answer: "Hi",
            answerDetails: 5,
            answerPicLocation: "Hi"
        }
    }

};


var initialize = function() {

    questionCounter = 0;
    arrayCount = 0


    for (var key in questionList) {
        
        if (questionList.hasOwnProperty(key)) {
            displayQuizTopics(questionList[key]);
        }
    }

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
    userChoice = questionList[userSelectedTopic];
    
    $("#questionPanel h3").html(userChoice[questionArray[questionCounter]].question);
    for (i = 0; i < userChoice[questionArray[questionCounter]].choiceGroup.length; i++) {

        var radioChoice = '<div class="radio"> <label> <input type="radio" name="answer" value="' + userChoice[questionArray[questionCounter]].choiceGroup[i] + '" >' + userChoice[questionArray[questionCounter]].choiceGroup[i] + '</label>';
        
        $("#choiceList").append(radioChoice).fadeIn;
    }
    questionCounter++;

    $("#questionPanel").animate({
        "opacity": "show",
        top: "150"
    }, 1000);

};

var verifyAnswer = function() {

     

  
  console.log(currentUserChoice);
  console.log(userChoice[questionArray[questionCounter - 1]]);

  if (userChoice[questionArray[questionCounter - 1]].choiceGroup[userChoice[questionArray[questionCounter - 1]].answer] === currentUserChoice) 
  {
    console.log("HORRAY");
  }
   else
   {
    console.log("Better Luck Next Time");
   }
    
    


}
    

$(document).ready(function() {
    $("#previousButton").on("click", function() {


    });

    $("#startButton").on("click", function() {
        $(this).hide();
        $("#quizTopics").hide();
        $('#nextButton').trigger('click');
        $("#nextButton").animate({
            "opacity": "show",
            top: "150"
        }, 1000);
    });


    $("#timerPanel").hide();
    $("#previousButton").hide();
    $("#nextButton").hide();
    $("#startButton").hide();


    initialize();


    $("#questionPanel h3").html("Welcome to an Awesome Trivia!");

    $(".img-responsive").on("click", function() {

        userSelectedTopic = $(this).attr("id");
        for (var key in questionList[userSelectedTopic]) {
            if (key != "property") {
                
                questionArray[arrayCount] = key;
                console.log(questionArray);
                arrayCount++;
            }

                    }
        $("#quizTopics").hide();
        $("#nextButton").show();

        $('#nextButton').trigger('click');
    });

    $("#choiceList").on("click", "input", function(){

    	currentUserChoice = $(this)[0].value;   	
        	
    });

    

$("#nextButton").on("click", function() {

        if(currentUserChoice.length > 0) 
        {
            verifyAnswer();    
        }
        
        
        CounterFreeze();
        CounterInit(30);

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
            $("#questionPanel h3").html("Thanks for Playing!");
            $("#startButton").prop("value", "Restart Game!");
            $("#startButton").animate({
                "opacity": "show",
                top: "150"
            }, 1000);
            $(this).hide();
        }



    });

});