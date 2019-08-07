var questions = [
    {
        question: 'what is my breakfast',
        choices: ["brownie", "coffee", "croistant", "bread"],
        answer: 1
    },
    {
        question: 'How many distance from san jose to sf in miles',
        choices: ["30 ", "45 ", "50 ", "60 "],
        answer: 2
    }
]

var time = 50;
$('#timing').text(time)
function countTime() {
    time--;
    // num = num-1; / num -= 1;
    $('#timing').text(time)
}
var timer = setInterval(countTime, 1 * 1000);
// function alertTime() {
//     if (timer == 0)
//     { 

//     }
// }
// $('#stop').on('click', function () {
//     clearInterval(timer);
// });
// $('#start').on('click', function () {
//     timer = setInterval(countTime, 1 * 1000);

// console.log(questions[0].question)
// console.log(questions[1].question)
function renderQuestions() {
    for (var i = 0; i < questions.length; i = i + 1) {
        console.log(questions[i].question)

        var pTag = $('<p>') // <p></p>
        pTag.text(i + 1 + ". " + questions[i].question) // <p>1. what is my breakfast</p>
        $('form').append(pTag)

        // console.log(questions[i].choices[0])
        // console.log(questions[i].choices[1])
        for (var j = 0; j < questions[i].choices.length; j = j + 1) {
            console.log(questions[i].choices[j])
            var radio = $('<input>')  // <input>
            radio.attr("type", "radio") // <input type="radio">
            radio.attr("name", "question" + i) // <input type="radio" name="question0">
            radio.attr("id", "question" + i + "choice" + j) // <input type="radio" name="question0" id="question0choice0">
            radio.addClass("form-check-input")
            // radio.attr("class", "form-check-input")
            // <input type="radio" name="question0" id="question0choice0" class="form-check-input">
            radio.val(j)
            // radio.attr("value", j)
            // <input type="radio" name="question0" id="question0choice0" class="form-check-input" value="0">

            var label = $('<label>') // <label>
            label.attr("for", "question" + i + "choice" + j) //  <label for="question0choice0"
            label.text(questions[i].choices[j])
            label.attr("class", "form-check-label") // <label for="question0choice0"
            var divTag = $('<div>')
            divTag.addClass("form-check")
            divTag.append(radio, label)
            $('form').append(divTag)
            // var divGroup = $('<div>')
            // divGroup.addClass("form-group", "radio", "label", "divTag")
            // divGroup.append("")
            // $('form').append(divGroup)

        }

        //<div class="form-check" >
        //   < input class="form-check-input" type = "radio" name = "exampleRadios" id = "exampleRadios1" value = "option1" checked >
        //   <label class="form-check-label" for="exampleRadios1">
        //   </label>
        //</div>
    }
}
renderQuestions()


// for (var i=0; i<questionsListItem; i++){
// questionsListItem = $('<li>');
// questionsListItem.text(questions[i]);
// list.append(questionsListItem);
// $('p')  //select or target
// $('<p>') // creating 