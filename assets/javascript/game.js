////NCAA Game
////Disclaimer I was not able to generate values after switching to buttons vs the radio buttons

////Functions to begin quiz

$(document).ready(function() {
  $("#start").click(function() {
    beginQuiz();
  });
});

////Validate the questions and answers
$(document).on("onclick",  checker); ////messed up document onclick

function checker() {
  var circleSelect = $(this).attr("name");
  var selector = circleSelect.charAt(8).trim();
  var userChoice = $("input:checked").val();
  console.log(userChoice);
  if (userChoice === quizQuestions[selector].correct) {
    triviaQuiz.correct++;
  } else {
    triviaQuiz.wrong++;
  }
}

function beginQuiz() {
  countdown();
  startCountdown();

  ///This will develop a hidden html to display
  $("#trivia-container").html("<h5> Down, Set, Hut!</h5>");
  ////For loop with triviaQuestions and radio button settings
  for (i = 0; i < quizQuestions.length; i++) {
    $("#trivia-container").append(
      '<div class="question" id="c' + i + '" ></div'
    );
    $("#c" + i).append(quizQuestions[i].question);
    for (a = 0; a < 4; a++) {
      ////buttons with appended values
      $(
        '<button id="question" class="button" type="button" name="choice' +
          i +
          '" value="' +
          a +
          '">' +
          quizQuestions[i].answers[a] +
          "</button> _______________________" //// this allows input on my buttons and generates the choices on id=#c
      ).appendTo("#c" + i);
    }
  }
  var button = $(
    '<button id="finish" type="button" class="finish-button">Submit</button>'
  );
  $("#trivia-container").append(button);
  ////timer down here
  //// 1000 sets the timer to one second increments
}
function startCountdown() {
  beginQuiz = setInterval(countdown, 1000);
}
function stopCountdown() {
  clearInterval(beginQuiz);
}

function countdown() {
  triviaQuiz.timer--;
  $("#clock").html("<h1>" + triviaQuiz.timer + "</h1>");
  ////Time will be posted at the top of the page
  if (triviaQuiz.timer === 0) {
    stopCountdown();
    $("#clock").html("<h1>" + triviaQuiz.timer + "</h1>");
    $("#trivia-container").html("<h1>right: " + triviaQuiz.correct + "</h1>");
    $("#trivia-container").html("<h1>wrong: " + triviaQuiz.wrong + "</h1>");
  }
}
$(document).on("click", "#finish", forceStop);

function forceStop() {
  stopCountdown();
  $("#clock").html("<h1>Let's see what we got!</h1>");
  $("#trivia-container").html(
    "<h1>Correct Choices: " + triviaQuiz.correct + "</h1>"
  );
  $("#trivia-container").append(
    "<h1>Wrong Choices: " + triviaQuiz.wrong + "</h1>"
  );
}
////Variables Here
var beginQuiz;

var triviaQuiz = {
  timer: 45,
  correct: 0,
  wrong: 0,
  none: 0
};
//// Question array
var quizQuestions = [
  {
    question:
      "Texas Tech University competes at the highest collegiate athletic level. In which athletic conference does Texas Tech University compete?",
    answers: ["Big XII", "Great Eight", "SEC", "Mountain West"],

    correct: "0"
  },
  {
    question:
      "What intense college football bowl rivalry is played between Auburn and Alabama?",
    answers: ["Bourbon Bowl", "Alabama Bowl", "Iron Bowl", "Chick-Fil-A Bowl"],

    correct: "2"
  },
  {
    question:
      "The Red River Rivalry between the Universities of Texas and Oklahoma awards three trophies to the winner, but only one that can be, in theory, worn on one's head. What article of headwear goes to the winning team?",
    answers: ["Lombardi Trophy", "The Golden Hat", "An Axe", "Grey Cup"],
    correct: "1"
  },
  {
    question: "Who won the Heisman throphy last year?",
    answers: [
      "Derrick Henry",
      "Baker Mayfield",
      "Lamar Jackson",
      "Deshaun Watson"
    ],
    correct: "1"
  },

  {
    question: "The Blinkenoff Award is given to which position?",
    answers: ["Wide Receiver", "Running Back", "Quarterback", "Offensive Line"],
    correctAnswer: "0"
  },

  {
    question:
      "In 2008, Michael Crabtree caught a game-winning TD with eight seconds left against which Big XII rival?",
    answers: ["Oklahoma State", "Iowa State", "Texas", "North Texas"],
    correct: "2"
  }
];
////End Of NCAA Game