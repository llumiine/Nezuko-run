// methode qui sert a recuperer l'element du personnage  
var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;

function jump() {
    if (character.classList == "animate") {
        return;
    }
    //l'animation du personnage
    character.classList.add("animate");
    setTimeout(function() {
        character.classList.remove("animate");
    }, 300);
} //fonction pour savoir si le perso est mort
var checkDead = setInterval(function() {
    let characterTop = parseInt(
        window.getComputedStyle(character).getPropertyValue("top")
    );
    let blockLeft = parseInt(
        window.getComputedStyle(block).getPropertyValue("left")
    );
    //operateur logique qui va servir a compter les sauts
    if (blockLeft < 20 && blockLeft > -20 && characterTop >= 130) {
        block.style.animation = "none";
        alert("Game Over. score: " + Math.floor(counter / 100));
        counter = 0;
        block.style.animation = "block 1s infinite linear";
    } else {
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
    }
}, 10);