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
        audio.volume = 0.1;
        audio.currentTime = 0;
        audio.play();
        btn.classList.remove(className);
        btn.classList.add("seventh");
        btn.innerHTML = "Trocar Música";
    }
    if(className == 'seventh'){
        let audioantigo = document.getElementById("meuAudio");
        audioantigo.pause();
        let audio = document.getElementById("meuAudio2");
        audio.volume = 0.1;
        audio.currentTime = 0;
        audio.play();
        btn.classList.remove(className);
        btn.innerHTML = "Trocar Música (How Deep is Your Love?)";
        btn.classList.add("eighth");
    }
    if(className == 'eighth'){
        let audioantigo = document.getElementById("meuAudio2");
        audioantigo.pause();
        let audio = document.getElementById("meuAudio3");
        audio.volume = 0.1;
        audio.currentTime = 0;
        audio.play();
        btn.classList.remove(className);
        btn.innerHTML = "Trocar Música (With You)";
        btn.classList.add("nineteenth");
    }
    if(className == 'nineteenth'){
        let audioantigo = document.getElementById("meuAudio3");
        audioantigo.pause();
        let audio = document.getElementById("meuAudio4");
        audio.volume = 0.1;
        audio.currentTime = 0;
        audio.play();
        btn.classList.remove(className);
        btn.innerHTML = "Trocar Música (Cupid)";
        btn.classList.add("10th");
    }
    if(className == '10th'){
        let audioantigo = document.getElementById("meuAudio4");
        audioantigo.pause();
        let audio = document.getElementById("meuAudio5");
        audio.volume = 0.1;
        audio.currentTime = 0;
        audio.play();
        btn.classList.remove(className);
        btn.innerHTML = "Trocar Música (Until I Found You)";
        btn.classList.add("11th");
    }
    if(className == '11th'){
        let audioantigo = document.getElementById("meuAudio5");
        audioantigo.pause();
        let audio = document.getElementById("meuAudio6");
        audio.volume = 0.1;
        audio.currentTime = 0;
        audio.play();
        btn.classList.remove(className);
        btn.innerHTML = "Trocar Música (Dandelions)";
        btn.classList.add("12th");
    }
    if(className == '12th'){
        let audioantigo = document.getElementById("meuAudio6");
        audioantigo.pause();
        let audio = document.getElementById("meuAudio7");
        audio.volume = 0.1;
        audio.currentTime = 0;
        audio.play();
        btn.classList.remove(className);
        btn.innerHTML = "Trocar Música (Love Never Felt So Good)";
        btn.classList.add("13th");
    }
    if(className == '13th'){
        let audioantigo = document.getElementById("meuAudio7");
        audioantigo.pause();
        let audio = document.getElementById("meuAudio8");
        audio.volume = 0.1;
        audio.currentTime = 0;
        audio.play();
        btn.classList.remove(className);
        btn.innerHTML = "Trocar Música (Every Breath You Take)";
        btn.classList.add("14th");
    }
    if(className == '14th'){
        let audioantigo = document.getElementById("meuAudio8");
        audioantigo.pause();
        let audio = document.getElementById("meuAudio9");
        audio.volume = 0.1;
        audio.currentTime = 0;
        audio.play();
        btn.classList.remove(className);
        btn.innerHTML = "Trocar Música (I Can't Help Falling In Love)";
        btn.classList.add("15th");
    }
    if(className == '15th'){
        let audioantigo = document.getElementById("meuAudio9");
        audioantigo.pause();
        let audio = document.getElementById("meuAudio10");
        audio.volume = 0.1;
        audio.currentTime = 0;
        audio.play();
        btn.classList.remove(className);
        btn.innerHTML = "Trocar Música (Stand By Me)";
        btn.classList.add("16th");
    }
    if(className == '16th'){
        let audioantigo = document.getElementById("meuAudio10");
        audioantigo.pause();
        let audio = document.getElementById("meuAudio11");
        audio.volume = 0.1;
        audio.currentTime = 0;
        audio.play();
        btn.classList.remove(className);
        btn.innerHTML = "Trocar Música (Use Your Love)";
        btn.classList.add("17th");
    }
    if(className == '17th'){
        let audioantigo = document.getElementById("meuAudio11");
        audioantigo.pause();
        let audio = document.getElementById("meuAudio12");
        audio.volume = 0.1;
        audio.currentTime = 0;
        audio.play();
        btn.classList.remove(className);
        btn.innerHTML = "Trocar Música (Careless Whisper)";
        btn.classList.add("18th");
    }
    if(className == '18th'){
        let audioantigo = document.getElementById("meuAudio12");
        audioantigo.pause();
        let audio = document.getElementById("meuAudio13");
        audio.volume = 0.1;
        audio.currentTime = 0;
        audio.play();
        btn.classList.remove(className);
        btn.innerHTML = "Trocar Música (Take My Breath Away)";
        btn.classList.add("19th");
    }
    if(className == '19th'){
        let audioantigo = document.getElementById("meuAudio13");
        audioantigo.pause();
        let audio = document.getElementById("meuAudio14");
        audio.volume = 0.3;
        audio.currentTime = 0;
        audio.play();
        btn.classList.remove(className);
        btn.innerHTML = "Trocar Música (Time Of My Life)";
        btn.classList.add("20th");
    }
    if(className == '20th'){
        let audioantigo = document.getElementById("meuAudio14");
        audioantigo.pause();
        let audio = document.getElementById("meuAudio15");
        audio.volume = 0.1;
        audio.currentTime = 0;
        audio.play();
        btn.classList.remove(className);
        btn.innerHTML = "Trocar Música (Evidências Bolsonaro e Lula)";
        btn.classList.add("21th");
    }
    if(className == '21th'){
        let audioantigo = document.getElementById("meuAudio15");
        audioantigo.pause();
        let audio = document.getElementById("meuAudio16");
        audio.volume = 0.1;
        audio.currentTime = 0;
        audio.play();
        btn.classList.remove(className);
        btn.innerHTML = "Trocar Música (Stay With Me)";
        btn.classList.add("22th");
    }
    if(className == '22th'){
        let audioantigo = document.getElementById("meuAudio16");
        audioantigo.pause();
        let audio = document.getElementById("meuAudio17");
        audio.volume = 0.1;
        audio.currentTime = 0;
        audio.play();
        btn.classList.remove(className);
        btn.innerHTML = "Trocar Música (Do You Remember)";
        
        btn.classList.add("23th");
    }
    if(className == '23th'){
        let audioantigo = document.getElementById("meuAudio17");
        audioantigo.pause();
        let audio = document.getElementById("meuAudio18");
        audio.volume = 0.1;
        audio.currentTime = 0;
        audio.play();
        btn.classList.remove(className);
        btn.innerHTML = "Trocar Música (Me Namora)";
        
        btn.classList.add("24th");
    }
    if(className == '24th'){
        let audioantigo = document.getElementById("meuAudio18");
        audioantigo.pause();
        let audio = document.getElementById("meuAudio19");
        audio.volume = 0.1;
        audio.currentTime = 0;
        audio.play();
        btn.classList.remove(className);
        btn.innerHTML = "Trocar Música (Rather Be)";
        
        btn.classList.add("25th");
    }
    if(className == '25th'){
        let audioantigo = document.getElementById("meuAudio19");
        audioantigo.pause();
        let audio = document.getElementById("meuAudio20");
        audio.volume = 0.1;
        audio.currentTime = 0;
        audio.play();
        btn.classList.remove(className);
        btn.innerHTML = "Trocar Música (Cheerleader)";
        btn.classList.add("26th");
    }
    if(className == '26th'){
        let audioantigo = document.getElementById("meuAudio20");
        audioantigo.pause();
        let audio = document.getElementById("meuAudio21");
        audio.volume = 0.1;
        audio.currentTime = 0;
        audio.play();
        btn.classList.remove(className);
        btn.innerHTML = "Trocar Música (It's Been A Long, Long Time)";
        
        btn.classList.add("27th");
    }
    if(className == '27th'){
        let audioantigo = document.getElementById("meuAudio21");
        audioantigo.pause();
        let audio = document.getElementById("meuAudio22");
        audio.volume = 0.1;
        audio.currentTime = 0;
        audio.play();
        btn.classList.remove(className);
        btn.innerHTML = "Trocar Música (La Vie En Rose)";
        
        btn.classList.add("28th");
    }
    if(className == '28th'){
        let audioantigo = document.getElementById("meuAudio22");
        audioantigo.pause();
        let audio = document.getElementById("meuAudio23");
        audio.volume = 0.1;
        audio.currentTime = 0;
        audio.play();
        btn.classList.remove(className);
        btn.innerHTML = "Trocar Música (Just One Day)";
        btn.classList.add("29th");
    }
    if(className == '29th'){
        let audioantigo = document.getElementById("meuAudio23");
        audioantigo.pause();
        let audio = document.getElementById("meuAudio24");
        audio.volume = 0.1;
        audio.currentTime = 0;
        audio.play();
        btn.classList.remove(className);
        btn.innerHTML = "Trocar Música (More Than Words)";
        btn.classList.add("30th");
    }
    if(className == '30th'){
        let audioantigo = document.getElementById("meuAudio24");
        audioantigo.pause();
        let audio = document.getElementById("meuAudio25");
        audio.volume = 0.1;
        audio.currentTime = 0;
        audio.play();
        btn.classList.remove(className);
        btn.innerHTML = "Trocar Música (Sinônimos)";
        btn.classList.add("31th");
    }
    if(className == '31th'){
        let audioantigo = document.getElementById("meuAudio25");
        audioantigo.pause();
        let audio = document.getElementById("meuAudio");
        audio.volume = 0.1;
        audio.currentTime = 0;
        audio.play();
        btn.classList.remove(className);
        btn.innerHTML = "Trocar Música (Just The Two Of Us)";
        btn.classList.add("seventh");
    }
}