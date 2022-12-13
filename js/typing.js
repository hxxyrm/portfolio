$(document).ready(function() {
    var text = document.getElementById("typeStyle");

    var typewriter = new Typewriter(text, {
        loop: true
    });

    typewriter.typeString('Hello')
        .pauseFor(1000)
        .deleteAll()
        .typeString('Hello?')
        .pauseFor(2000)
        .deleteChars(1)
        .pauseFor(2500)
        .start();

});


$(document).ready(function() {
    var text = document.getElementById("typeSty");

    var typewriter = new Typewriter(text, {
        loop: true
    });

    typewriter.typeString('Welcome to my universe!')
        .pauseFor(2000)
        .deleteAll()
        .pauseFor(2000)
        .deleteChars(1)
        .pauseFor(2500)
        .start();

});