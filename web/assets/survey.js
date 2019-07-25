

questions = [
    ['Tive dificuldade de me acalmar', 's'],
    ['Minha boca ficou seca', 'a'],
    ['Não tive nenhum sentimento positivo', 'd'],
    ['Tive dificuldade de respirar', 'a'],
    ['Não tinha iniciativa para fazer as coisas', 'd'],
    ['Exagerei na reação em algumas situações', 's'],
    ['Tive tremedeira', 'a'],
    ['Senti que estava sempre nervoso(a)', 's'],
    ['Fiquei preocupado(a) e pensando que poderia entrar em pânico', 'a'],
    ['Senti que não tinha vontade de nada ', 'd'],
    ['Senti que estava agitado(a)', 's'],
    ['Tive dificuldade de relaxar', 's'],
    ['Senti que estava triste e sem motivação', 'd'],
    ['Não consegui tolerar as coisas e as pessoas que ficavam me atrapalhando', 's'],
    ['Eu senti que ia entrar em pânico', 'a'],
    ['Nada me deixou entusiasmado(a) ou animado(a)', 'd'],
    ['Eu senti que era uma pessoa sem valor', 'd'],
    ['Eu estava sensível e emotivo(a)', 's'],
    ['Eu senti meu coração acelerar e/ou apertar', 'a'],
    ['Eu senti medo sem motivo', 'a'],
    ['Senti que a vida não tinha sentido', 'd']
]

answers = [];


drawconsole();


question = 0;
anxiety = 0;
depression = 0;
stress = 0;


$("#start").on("click", function () {
    starttest();
});

$("#restart").on("click", function () {
    // starttest();
    window.open('/survey', "mywindow");
});

$("#r0").on("click", function () {
    event.preventDefault();
    answers[question] = "r0";

    // console.log("r0", depression, anxiety, stress)

    if (questions[question][1] == 'a') {
        anxiety += 0;
    }
    else if (questions[question][1] == 's') {
        stress += 0;
    }
    else if (questions[question][1] == 'd') {
        depression += 0;
    }

    question++;
    if (question >= questions.length) {
        printdata();
        // if (question >= 1) {

        clearInterval(myclock);
        document.getElementById("initialScreen").style.display = "none";
        document.getElementById("initialScreen2").style.display = "none";
        document.getElementById("question").style.display = "none";

        setTimeout(function () {
            document.getElementById("final_results").style.display = "flex";
            document.getElementById("final_contato").style.display = "flex";
        }, 500);

        depression_check();
        anxiety_check();
        stress_check();

    }
    else {
        transition_hide()
        clearInterval(myclock);
        mytimer();
    }
});

$("#r1").on("click", function () {
    event.preventDefault();
    answers[question] = "r1";

    // console.log("r0", depression, anxiety, stress)

    if (questions[question][1] == 'a') {
        anxiety += 1;
    }
    else if (questions[question][1] == 's') {
        stress += 1;
    }
    else if (questions[question][1] == 'd') {
        depression += 1;
    }
    question++;
    if (question >= questions.length) {
        printdata();

        clearInterval(myclock);
        document.getElementById("initialScreen").style.display = "none";
        document.getElementById("initialScreen2").style.display = "none";
        document.getElementById("question").style.display = "none";

        setTimeout(function () {
            document.getElementById("final_results").style.display = "flex";
            document.getElementById("final_contato").style.display = "flex";
        }, 500);

        depression_check();
        anxiety_check();
        stress_check();

    }
    else {
        transition_hide()
        clearInterval(myclock);
        mytimer();
    }

});

$("#r2").on("click", function () {
    event.preventDefault();
    answers[question] = "r2";

    // console.log("r0", depression, anxiety, stress)

    if (questions[question][1] == 'a') {
        anxiety += 2;
    }
    else if (questions[question][1] == 's') {
        stress += 2;
    }
    else if (questions[question][1] == 'd') {
        depression += 2;
    }
    question++;
    if (question >= questions.length) {
        printdata();

        clearInterval(myclock);
        document.getElementById("initialScreen").style.display = "none";
        document.getElementById("initialScreen2").style.display = "none";
        document.getElementById("question").style.display = "none";

        setTimeout(function () {
            document.getElementById("final_results").style.display = "flex";
            document.getElementById("final_contato").style.display = "flex";
        }, 500);

        depression_check();
        anxiety_check();
        stress_check();

    }
    else {
        transition_hide()
        clearInterval(myclock);
        mytimer();
    }

});
$("#r3").on("click", function () {
    event.preventDefault();
    answers[question] = "r3";

    // console.log("r0", depression, anxiety, stress)

    if (questions[question][1] == 'a') {
        anxiety += 3;
    }
    else if (questions[question][1] == 's') {
        stress += 3;
    }
    else if (questions[question][1] == 'd') {
        depression += 3;
    }
    question++;
    if (question >= questions.length) {
        printdata();

        clearInterval(myclock);
        document.getElementById("initialScreen").style.display = "none";
        document.getElementById("initialScreen2").style.display = "none";
        document.getElementById("question").style.display = "none";

        setTimeout(function () {
            document.getElementById("final_results").style.display = "flex";
            document.getElementById("final_contato").style.display = "flex";
        }, 500);

        depression_check();
        anxiety_check();
        stress_check();

    }
    else {
        transition_hide()
        clearInterval(myclock);
        mytimer();
    }

});



function count() {
    if (time > 0) {
        time--;
        var converted = timeConverter(time);
        // console.log(converted);
        $("#timer").text(converted);
    }
    else {
        return false;
    }
}


function timeConverter(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes === 0) {
        minutes = "00";
    }
    else if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
}


function mytimer() {

    time = 30;
    $("#timer").text('00:30');
    $("#timer").text(timeConverter(time));

    myclock = setInterval(function () {

        count();
        if (time == 0) {
            clearInterval(myclock);
            document.getElementById('r0').click();
        }

    }, 1000);

}


function transition_hide() {
    document.getElementById("question").style.display = "none";

    $('#printquestion').text(questions[question][0]);

    setTimeout(function () {
        document.getElementById("question").style.display = "flex";
    }, 500);

}

function depression_check() {
    // depression check
    depression = depression * 2;
    if (depression >= 28) {
        document.getElementById("DExtreme").style.opacity = "1";
    }
    else if (depression >= 21) {
        document.getElementById("DSevere").style.opacity = "1";
    }
    else if (depression >= 14) {
        document.getElementById("DModerate").style.opacity = "1";
    }
    else if (depression >= 10) {
        document.getElementById("DMild").style.opacity = "1";
    }
    else {
        document.getElementById("DNormal").style.opacity = "1";
    }
}

function anxiety_check() {
    // depression check
    anxiety = anxiety * 2;
    if (anxiety >= 20) {
        document.getElementById("AExtreme").style.opacity = "1";
    }
    else if (anxiety >= 15) {
        document.getElementById("ASevere").style.opacity = "1";
    }
    else if (anxiety >= 10) {
        document.getElementById("AModerate").style.opacity = "1";
    }
    else if (anxiety >= 8) {
        document.getElementById("AMild").style.opacity = "1";
    }
    else {
        document.getElementById("ANormal").style.opacity = "1";
    }
}


function stress_check() {
    // depression check
    stress = stress * 2;
    if (stress >= 34) {
        document.getElementById("SExtreme").style.opacity = "1";
    }
    else if (stress >= 26) {
        document.getElementById("SSevere").style.opacity = "1";
    }
    else if (stress >= 19) {
        document.getElementById("SModerate").style.opacity = "1";
    }
    else if (stress >= 15) {
        document.getElementById("SMild").style.opacity = "1";
    }
    else {
        document.getElementById("SNormal").style.opacity = "1";
    }
}

function starttest() {
    question = 0;
    anxiety = 0;
    depression = 0;
    stress = 0;
    event.preventDefault();

    document.getElementById("DExtreme").style.opacity = "0.1";
    document.getElementById("DSevere").style.opacity = "0.1";
    document.getElementById("DModerate").style.opacity = "0.1";
    document.getElementById("DMild").style.opacity = "0.1";
    document.getElementById("DNormal").style.opacity = "0.1";

    document.getElementById("AExtreme").style.opacity = "0.1";
    document.getElementById("ASevere").style.opacity = "0.1";
    document.getElementById("AModerate").style.opacity = "0.1";
    document.getElementById("AMild").style.opacity = "0.1";
    document.getElementById("ANormal").style.opacity = "0.1";

    document.getElementById("SExtreme").style.opacity = "0.1";
    document.getElementById("SSevere").style.opacity = "0.1";
    document.getElementById("SModerate").style.opacity = "0.1";
    document.getElementById("SMild").style.opacity = "0.1";
    document.getElementById("SNormal").style.opacity = "0.1";


    document.getElementById("final_results").style.display = "none";
    document.getElementById("final_contato").style.display = "none";
    document.getElementById("initialScreen").style.display = "none";
    document.getElementById("initialScreen2").style.display = "none";
    $('#printquestion').text(questions[question][0]);
    setTimeout(function () {
        document.getElementById("question").style.display = "flex";
    }, 500);

    mytimer();
}

function printdata() {
    var fulldata = [];
    var datafor = [];

    for (i = 0; i < questions.length; i++) {
        var data = {
            pergunta: questions[i][0],
            classe: questions[i][1],
            resposta: {
                escolha: answers[i],
                valor: answers[i].slice(1, 2) * 1
            }
        }
        datafor.push(data);
        // survey_data.push(fulldata);
    }

    fulldata.push(
        {
            timestamp: Date.now(),
            data: datafor,
            score: { depression: depression * 2, anxiety: anxiety * 2, stress: stress * 2 },
            limite_inf: {
                depression: { extrema: 28, severa: 21, moderada: 14, suave: 10 },
                anxiety: { extrema: 20, severa: 15, moderada: 10, suave: 8 },
                stress: { extrema: 34, severa: 26, moderada: 19, suave: 15 }
            }
        }
    );



    $.post("/api/survey/new", { resultados: fulldata[0] })
        // On success, run the following code
        .then(function (data) {
            // console.log("data sent:", data);
        });

}

function drawconsole() {

    console.log("WWNXXWWWWWWWWNNNNXNNNNXXXXNWWWWWWWWXXXWW");
    console.log("WWk,';oKWWWWKo;,''''''''':oKWWWW0o;.'dXW");
    console.log("WWNx.  .dNWWNX0kc.     ,d0NWWWNd.  .oXWW");
    console.log("WWWNc   .xWWWWWMK,    .xWWWWWNd.   ,KWWW");
    console.log("WWWWd.   ;KWWWWWK,    .xWWWWW0,    ;XWWW");
    console.log("WWWW0'   .OWWWWWK,    .xWWWWWk.    ;XWWW");
    console.log("WWWWNl   .dWWWWWK,    .xWWWWWd.    cNWWW");
    console.log("WWWWW0,   :XWWWWK,    .xWWWWNl    .kWWWW");
    console.log("WWWWWWO'  .cKWWWK,    .xWWWKo.   'xNWWWW");
    console.log("WWWWWWW0c.  .;clc.     ;lc;.  .'oKWWWWWW");
    console.log("WWWWWWWWNKxoc:;,'      .,,;:ldONWWWWWWWW");
    console.log("WWWWWWWWWWWWWWWW0,    .dNWWWWWWWWWWWWWWW");
    console.log("WWWWWWWWWWWWWWWMK,    .xWWWWWWWWWWWWWWWW");
    console.log("WWWWWWWWWWWWWWWWK,    .xWWWWWWWWWWWWWWWW");
    console.log("WWWWWWWWWWWWWWWWK,    .xWWWWWWWWWWWWWWWW");
    console.log("WWWWWWWWWWWWWWWWK,    .xWWWWWWWWWWWWWWWW");
    console.log("WWWWWWWWWWWWWWWWO.     oNWWWWWWWWWWWWWWW");
    console.log("WWWWWWWWWWWWXkoc.      .;lkNWWWWWWWWWWWW");
    console.log("WWWWWWWWWWWWNOxxxxxxxxxxxxONWWWWWWWWWWWW");
}