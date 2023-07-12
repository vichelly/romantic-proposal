function desvia(t) {
    var btn = t;
    btn.style.position = "absolute";
    let x = getRandomArbitrary(10, 90);
    let y = getRandomArbitrary(10, 90);
    btn.style.bottom = `${x}%`;
    btn.style.left = `${y}%`;
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function contentChange(t){
    var btn = t;
    var className = btn.className;
    if(className == 'first'){
        btn.classList.remove(className);
        btn.classList.add("second");
        btn.innerHTML = "Você traduziu o binário?";
    }
    if(className == 'second'){
        btn.classList.remove(className);
        btn.classList.add("third");
        btn.innerHTML = "sério?";
    }
    if(className == 'third'){
        btn.classList.remove(className);
        btn.classList.add("fourth");
        btn.innerHTML = "ok, eu acredito";
    }
    if(className == 'fourth'){
        btn.classList.remove(className);
        btn.classList.add("fifth");
        btn.innerHTML = "então vc quer msm?";
    }
    if(className == 'fifth'){
        btn.classList.remove(className);
        btn.classList.add("sixth");
        btn.innerHTML = "tem certeza?";
    }
    if(className == 'sixth'){
        var w = document.querySelector('.wrapper');
        w.style.display = "none";
        var w2 = document.querySelector('.wrapper2');
        w2.style.display = "flex";
        let audio = document.getElementById("meuAudio");
        audio.play();
        alert("agr já era") 
        btn.classList.remove(className);
        btn.classList.add("seventh");
    }
    if(className == 'seventh'){
        let audioantigo = document.getElementById("meuAudio");
        audioantigo.pause();
        let audio = document.getElementById("meuAudio2");
        audio.currentTime = 0;
        audio.play();
        btn.classList.remove(className);
        btn.classList.add("eighth");
    }
    if(className == 'eighth'){
        let audioantigo = document.getElementById("meuAudio2");
        audioantigo.pause();
        let audio = document.getElementById("meuAudio3");
        audio.currentTime = 0;
        audio.play();
        btn.classList.remove(className);
        btn.classList.add("nineteenth");
    }
    if(className == 'nineteenth'){
        let audioantigo = document.getElementById("meuAudio3");
        audioantigo.pause();
        let audio = document.getElementById("meuAudio4");
        audio.currentTime = 0;
        audio.play();
        btn.classList.remove(className);
        btn.classList.add("10th");
    }
    if(className == '10th'){
        let audioantigo = document.getElementById("meuAudio4");
        audioantigo.pause();
        let audio = document.getElementById("meuAudio5");
        audio.currentTime = 0;
        audio.play();
        btn.classList.remove(className);
        btn.classList.add("11th");
    }
    if(className == '11th'){
        let audioantigo = document.getElementById("meuAudio5");
        audioantigo.pause();
        let audio = document.getElementById("meuAudio6");
        audio.currentTime = 0;
        audio.play();
        btn.classList.remove(className);
        btn.classList.add("12th");
    }
    if(className == '12th'){
        let audioantigo = document.getElementById("meuAudio6");
        audioantigo.pause();
        let audio = document.getElementById("meuAudio7");
        audio.currentTime = 0;
        audio.play();
        btn.classList.remove(className);
        btn.classList.add("13th");
    }
    if(className == '13th'){
        let audioantigo = document.getElementById("meuAudio7");
        audioantigo.pause();
        let audio = document.getElementById("meuAudio8");
        audio.currentTime = 0;
        audio.play();
        btn.classList.remove(className);
        btn.classList.add("14th");
    }
    if(className == '14th'){
        let audioantigo = document.getElementById("meuAudio8");
        audioantigo.pause();
        let audio = document.getElementById("meuAudio9");
        audio.currentTime = 0;
        audio.play();
        btn.classList.remove(className);
        btn.classList.add("15th");
    }
    if(className == '15th'){
        let audioantigo = document.getElementById("meuAudio9");
        audioantigo.pause();
        let audio = document.getElementById("meuAudio10");
        audio.currentTime = 0;
        audio.play();
        btn.classList.remove(className);
        btn.classList.add("16th");
    }
    if(className == '16th'){
        let audioantigo = document.getElementById("meuAudio10");
        audioantigo.pause();
        let audio = document.getElementById("meuAudio11");
        audio.currentTime = 0;
        audio.play();
        btn.classList.remove(className);
        btn.classList.add("17th");
    }
    if(className == '17th'){
        let audioantigo = document.getElementById("meuAudio11");
        audioantigo.pause();
        let audio = document.getElementById("meuAudio");
        audio.currentTime = 0;
        audio.play();
        btn.classList.remove(className);
        btn.classList.add("seventh");
    }
    /* if(className == '18th'){
        btn.classList.remove(className);
        btn.classList.add("seventh");
    } */
}