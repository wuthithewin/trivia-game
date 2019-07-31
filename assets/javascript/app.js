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


// console.log(questions[0].question)
// console.log(questions[1].question)
function renderQuestions() {
    for (var i = 0; i < questions.length; i = i + 1) {
        console.log(questions[i].question)

        var q = $('<p>')
        q.text(questions[i].question)
        $('form').append(q)

        // console.log(questions[i].choices[0])
        // console.log(questions[i].choices[1])
        for (var j = 0; j < questions[i].choices.length; j = j + 1) {
            console.log(questions[i].choices[j])
            var radio = $('<input>')
            radio.attr("type", "radio")
            radio.attr("name", "question" + i)
            radio.attr("id", "question" + i + "choice" + j)
            radio.addClass("form-check-input") // radio.attr("class", "form-check-input")
            radio.val(j)
            var label = $('<label>')
            label.attr("for", "question" + i + "choice" + j)
            label.text(questions[i].choices[j])
            label.attr("class", "form-check-label")
            $('form').append(radio, label)
            


        }

        //            <div class="form" 
        //< input class="form-check-input" type = "radio" name = "exampleRadios" id = "exampleRadios1" value = "option1" checked >
        //<label class="form-check-label" for="exampleRadios1">

        //   </label>
        //   </div>
    }
}
renderQuestions()



// for (var i=0; i<questionsListItem; i++){
// questionsListItem = $('<li>');
// questionsListItem.text(questions[i]);
// list.append(questionsListItem);
// $('p')  //select or target
// $('<p>') // creating