$(document).ready(function () {

    var myQuestions = [
        {
            question: "Which animals rad hair do allows it to float in water?",
            answers: {
                a: 'Lion',
                b: 'Emu',
                c: 'Porcupine'
            },
            correctAnswer: 'c'
        },
        {
            question: "Pick the animal that doesn't make sense!",
            answers: {
                a: 'Giraffe',
                b: 'Platypus',
                c: 'Barking Spiders'
            },
            correctAnswer: 'b'
        },
        {
            question: "One of these animals can not fart, Guess which one!?",
            answers: {
                a: 'Kangaroos',
                b: 'Baboons',
                c: 'Snakes'
            },
            correctAnswer: 'a'
        }

    ];

    var userChoice = [];
    var correctAnswer = 0;
    var unanswered = 0;
    var  

    var quizBox = document.getElementById('questions');

    var showQuiz = function (question) {

        var answers;
        for (var i = 0; question.lenght; i++) {
            answers = [];
            for (letter in question[i].answers) {

                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
                


            }
                
            output.push(


            )
        
        }



    };




    $(quizBox).html(showQuiz);


    console.log(showQuiz);

























});