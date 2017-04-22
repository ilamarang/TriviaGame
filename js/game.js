//Counter to track the questions
var questionCounter;
//Define the list of Questions in an Object List that holds the quiz details.
var correctAnswer;
var questionArray= new Array();
var questionList = {

    "Question1": {
        name: "Question1",
        question: "What is 1 + 1" ,
        choiceGroup: ["2", "3", "4", "5"],
        answer: "Hi",
        answerDetails: 5,
        answerPicLocation: "Hi"

    },

    "Question2": {
        name: "Question2",
        question: "Sound of a Cat " ,
        choiceGroup: ["Meow", "Bow", "Oink", "Neigh"],
        answer: "Hi",
        answerDetails: 5,
        answerPicLocation: "Hi"
    },

    "Question3": {
        name: "Question3",
        question: "Pick the highest number" ,
        choiceGroup: ["-15", "-90", "-20", "-40"],
        answer: "Hi",
        answerDetails: 5,
        answerPicLocation: "Hi"
    },

    "Question4": {
        name: "Question4",
        question: "How are you ? " ,
        choiceGroup: ["Hi", "How", "Yes", "Go"],
        answer: "Hi",
        answerDetails: 5,
        answerPicLocation: "Hi"
    },

};

var initialize = function() {

	questionCounter = 0;
	arrayCount=0
	for (var key in questionList) {

           questionArray[arrayCount] = key; 
           arrayCount++;
       }

    for (var key in questionList) {
        if (questionList.hasOwnProperty(key)) {
            displayQuizTopics(questionList[key]);
        }
    }   
    
};

//Dynamically display players based on the object List.
var displayQuizTopics = function(player) {
    //console.log(player.name);
    //console.log(player.basePoints);
    var $columnDisplay = $("<div class='col-md-3 col-sm-6'>");
    var $thumbNailDisplay = $("<div class='col-xs-12 thumbnail text-center'>");
    var $responsiveImageDisplay = $("<img class='img-responsive' width='100%'>").attr("src", "./assets/images/Adele.jpg").attr("id", "Ila");
    var $captionDiv = $("<div class='caption'>")
    var $captionAttackingPower = $("<h4 class='text-center'>")
    $captionAttackingPower.html("Music");
    //$($responsiveImageDisplay).appendTo($($thumbNailDisplay)).appendTo($($columnDisplay)).appendTo($(".choosePlayers"));

    ($responsiveImageDisplay).appendTo($thumbNailDisplay).appendTo($columnDisplay);
    $captionAttackingPower.appendTo($captionDiv);
    $captionDiv.appendTo($columnDisplay);
    $columnDisplay.appendTo($("#quizTopics"));

}

var displayNextQuestion = function() {

	$("#questionPanel").hide();
	$("#questionPanel h3").html(questionList[questionArray[questionCounter]].name);
	for(i=0;i<questionList[questionArray[questionCounter]].choiceGroup.length;i++) {
		
		var radioChoice = '<div class="radio"> <label> <input type="radio" name="answer" value="'  + questionList[questionArray[questionCounter]].choiceGroup[i] + '" >' + questionList[questionArray[questionCounter]].choiceGroup[i]+ '</label>';
		console.log(radioChoice);
		$("#choiceList").append(radioChoice).fadeIn;
	}
	questionCounter++;

	$("#questionPanel").animate( { "opacity": "show", top:"150"} , 1000 );
    
};

$( document ).ready(function() {
    $("#previousButton").on("click",function() {
    	
    
    });

    $("#startButton").on("click",function() {
    	$(this).hide();	
    	$("#quizTopics").hide();
    	$('#nextButton').trigger('click');
    	$("#nextButton").animate( { "opacity": "show", top:"150"} , 1000 );
    });

    $("#nextButton").on("click",function() {
    	
    	CounterFreeze();
    	CounterInit(60);

    	$("#timerPanel").hide();
    	//Delete Previous Question
    	$("#choiceList").empty();
    	if(questionCounter < questionArray.length) 
    	{
   			//Display Next Question
    		displayNextQuestion();
    		$("#timerPanel").animate( { "opacity": "show", top:"150"} , 1000 );

    	} else {
    		$("#questionPanel h3").html("Thanks for Playing!");
    		$("#startButton").prop("value", "Restart Game!");
    		$("#startButton").animate( { "opacity": "show", top:"150"} , 1000 );
    		$(this).hide();	
    	}
 
    	
    	

    });
    $("#timerPanel").hide();
    $("#previousButton").hide();
    $("#nextButton").hide();


    initialize();
    console.log(questionArray);
    
    $("#questionPanel h3").html("Welcome to an Awesome Trivia!");

    displayQuizTopics();

});