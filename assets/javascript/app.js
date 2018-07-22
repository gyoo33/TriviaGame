$(document).ready(function() {

    // Global Variables
    var answerCount = {
        correctAnswerCount: 0,
        incorrectAnswerCount: 0,
        unansweredCount: 0,
    }
    var timer = 101;
    var intervalId;

    var allQuestions = [{
        question: "1) In the movie Finding Nemo, which country has Nemo been taken to?",
        answers: ["Australia", "Barbados", "Madagascar", "Singapore"],
        correctA: "Australia"
    }, { 
        question: "2) What does Cinderella's fairy godmother turn into a carriage?",
        answers: ["Mice", "Teacup", "Pumpkin", "Clock"],
        correctA: "Pumpkin"
    }, { 
        question: "3) In which Disney movie is Hooper a villain?",
        answers: ["Moana", "Tarzan", "Pocahontas", "A Bug’s Life"],
        correctA: "A Bug’s Life"
    }, {
        question: "4) What type of animal does Jasmine have for a pet in Aladdin?",
        answers: ["Lion", "Tiger", "Monkey", "Jaguar"],
        correctA: "Tiger"
    }, {
        question: "5) What animal does Jafar turn into during his fight with Aladdin?",
        answers: ["Parrot", "Rat", "Cat", "Cobra"],
        correctA: "Cobra"
    }, {
        question: "6) What does Dumbo use to fly?",
        answers: ["Feather", "Carpet", "Wand", "Hat"],
        correctA: "Feather"
    }, {
        question: "7) In which city is the Disney movie Ratatouille based?",
        answers: ["NYC", "London", "Paris", "Milan"],
        correctA: "Paris"
    }, {
        question: "8) In the movie Frozen, which Disney princess was a guest at Elsa’s Coronation?",
        answers: ["Cinderella", "Rapunzel", "Mulan", "Belle"],
        correctA: "Rapunzel"
    }, {
        question: "9) What is the name of Mulan’s pet dragon?",
        answers: ["Khan", "Drogo", "Mushu", "Marlin"],
        correctA: "Mushu"
    }, {
        question: "10) In the movie The Little Mermaid, what alias does Ursula use when she becomes human?",
        answers: ["Vanessa", "Athena", "Cinzia", "Francesca"],
        correctA: "Vanessa"
    }];

    // Functions

    // Starts the game, hides the start button when clicked, starts the timer
    function startGame () {
        $("#startButton").on("click", function() {
            $("#startButton").hide();
            console.log("HI");
            countDown();
            for (var i = 0; i < allQuestions.length; i++) {
                $("#gameRow").append("<h5>" + allQuestions[i].question + "</h5>");
                for (var a = 0; a < allQuestions[i].answers.length; a++) {
                    $("#gameRow").append("<input type='radio' name='question-" + i + "value='" + allQuestions[i].answers[a] + "'>" + allQuestions[i].answers[a]);
                }
            }
            $("#gameRow").append("<button type='button' class='btn btn-dark' id='doneButton'>DONE!</button>");
        });
        
    }
    // startGame();

    // Clears the intervalId, preventing multiple instances
    function startCountDown () {
        clearInterval(intervalId);
        intervalId = setInterval(countDown, 1000);
        startGame();
    }

    // Reduces the timer in 1 second increments while dynamically updating webpage to notify user of remaining time, when timer reaches 0 user 
    function countDown () {
        timer--;
        $("#buttonRow").html("<h2>Time Remaining: " + timer + " Seconds</h2>");
        console.log(timer);
        if (timer === 0) {
            stopCountDown();
            console.log("DONE");
        }
    }

    function stopCountDown () {
        clearInterval(intervalId);
        for (var i = 0; i < 10; i++) {
            $.each($("input[name='allQuestions-0']:checked"), function() {
                if ($(this).val() == allQuestions[0].correctA) {
                    answerCount.correctAnswerCount++;
                } else if ($(this).val() !== allQuestions[0].correctA) {
                    answerCount.incorrectAnswerCount++;
                } else {
                    answerCount.unansweredCount++;
                }
            })
            $.each($("input[name='allQuestions-1']:checked"), function() {
                if ($(this).val() == allQuestions[1].correctA) {
                    answerCount.correctAnswerCount++;
                } else if ($(this).val() !== allQuestions[1].correctA) {
                    answerCount.incorrectAnswerCount++;
                } else {
                    answerCount.unansweredCount++;
                }
            })
            $.each($("input[name='allQuestions-2']:checked"), function() {
                if ($(this).val() == allQuestions[2].correctA) {
                    answerCount.correctAnswerCount++;
                } else if ($(this).val() !== allQuestions[2].correctA) {
                    answerCount.incorrectAnswerCount++;
                } else {
                    answerCount.unansweredCount++;
                }
            })
            $.each($("input[name='allQuestions-3']:checked"), function() {
                if ($(this).val() == allQuestions[3].correctA) {
                    answerCount.correctAnswerCount++;
                } else if ($(this).val() !== allQuestions[3].correctA) {
                    answerCount.incorrectAnswerCount++;
                } else {
                    answerCount.unansweredCount++;
                }
            })
            $.each($("input[name='allQuestions-4']:checked"), function() {
                if ($(this).val() == allQuestions[4].correctA) {
                    answerCount.correctAnswerCount++;
                } else if ($(this).val() !== allQuestions[4].correctA) {
                    answerCount.incorrectAnswerCount++;
                } else {
                    answerCount.unansweredCount++;
                }
            })
            $.each($("input[name='allQuestions-5']:checked"), function() {
                if ($(this).val() == allQuestions[5].correctA) {
                    answerCount.correctAnswerCount++;
                } else if ($(this).val() !== allQuestions[5].correctA) {
                    answerCount.incorrectAnswerCount++;
                } else {
                    answerCount.unansweredCount++;
                }
            })
            $.each($("input[name='allQuestions-6']:checked"), function() {
                if ($(this).val() == allQuestions[6].correctA) {
                    answerCount.correctAnswerCount++;
                } else if ($(this).val() !== allQuestions[6].correctA) {
                    answerCount.incorrectAnswerCount++;
                } else {
                    answerCount.unansweredCount++;
                }
            })
            $.each($("input[name='allQuestions-7']:checked"), function() {
                if ($(this).val() == allQuestions[7].correctA) {
                    answerCount.correctAnswerCount++;
                } else if ($(this).val() !== allQuestions[7].correctA) {
                    answerCount.incorrectAnswerCount++;
                } else {
                    answerCount.unansweredCount++;
                }
            })
            $.each($("input[name='allQuestions-8']:checked"), function() {
                if ($(this).val() == allQuestions[8].correctA) {
                    answerCount.correctAnswerCount++;
                } else if ($(this).val() !== allQuestions[8].correctA) {
                    answerCount.incorrectAnswerCount++;
                } else {
                    answerCount.unansweredCount++;
                }
            })
            $.each($("input[name='allQuestions-9']:checked"), function() {
                if ($(this).val() == allQuestions[9].correctA) {
                    answerCount.correctAnswerCount++;
                } else if ($(this).val() !== allQuestions[9].correctA) {
                    answerCount.incorrectAnswerCount++;
                } else {
                    answerCount.unansweredCount++;
                }
            })
        };
        $("#gameRow").hide();
        $("<div>").html('<h2>All Done!</h2>');
        $("<div>").html('<h3>Correct Answers: ' + answerCount.correctAnswerCount + '</h3>');
        $("<div>").html('<h3>Incorrect Answers: ' + answerCount.incorrectAnswerCount + '</h3>');
        $("<div>").html('<h3>Unanswered: ' + answerCount.unansweredCount + '</h3>');
    }
    $("#startButton").on("click", startCountDown);
    $("#doneButton").on("click", stopCountDown);

});
