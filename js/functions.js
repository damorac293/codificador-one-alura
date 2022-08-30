


function getData() {

    let result = document.getElementById("resultTxt");
    result.innerHTML = "";
}
function copy(){
    let textWrite = document.getElementById("resultTxt").value;
    navigator.clipboard.writeText(textWrite);
    
    // textWrite.select();
    // document.execCommand('copy');
}

function encriptar() {

    let newTxt = "";
    let letra = "";
    let encryptTxt = document.getElementById("codedTxt").value;
    let result = document.getElementById("resultTxt");

    for (var i = 0; i < encryptTxt.length; i++) {

        letra = encryptTxt.charAt(i);

        switch (letra) {

            case 'a':
                letra = "ai";
                break;
            case 'e':
                letra = "enter";
                break;

            case 'i':
                letra = "ober";
                break;

            case 'o':
                letra = "imes";
                break;

            case 'u':
                letra = "ufat";
                break;
            default:
                letra;
        }

        newTxt = newTxt + letra;

    }

    // return (newTxt);
    result.innerHTML = newTxt;
}

// console.log((encryptTxt));

function desencriptar() {

    let letra = "";
    let coded = ["ai", "enter", "ober", "imes", "ufat"]
    let i = 0;
    let encryptTxt = document.getElementById("codedTxt").value;
    let result = document.getElementById("resultTxt");

    for (i; i < encryptTxt.length; i++) {

        if (encryptTxt.includes(coded[i])) {
            letra = coded[i];

            i = 0;
        }
        switch (letra) {

            case 'ai':
                encryptTxt = encryptTxt.replace(letra, "a")
                break;
            case 'enter':
                encryptTxt = encryptTxt.replace(letra, "e")
                break;

            case 'ober':
                encryptTxt = encryptTxt.replace(letra, "i")
                break;

            case 'imes':
                encryptTxt = encryptTxt.replace(letra, "o")
                break;

            case 'ufat':
                encryptTxt = encryptTxt.replace(letra, "u")
                break;
            default:
                encryptTxt;
        }
    }
 
    result.innerHTML = encryptTxt;

}

// console.log(desencriptar("boberenternventernoberdimess ai nufatenterstrimes mufatndimes"));
