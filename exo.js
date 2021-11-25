let integer = document.getElementById("is-integer");
let parse1 = document.getElementById("parse-float");
let parse2 = document.getElementById("parse-int");

if (Number.isInteger(integer.value)) {
    integer.innerText += " est un nombre entier";
}

else {
    integer.innerText += " N'est pas un nombre entier";
}


if (isNaN(document.getElementById("is-nan").innerHTML)) {
    document.getElementById("is-nan").innerHTML += " est NaN";


}
else {
    document.getElementById("is-nan").innerHTML += " est un nombre";
}


parse1.innerHTML += Number.parseFloat(parse1.innerHTML) * 18;



let int = document.getElementById("parse-int");
int.innerHTML += " " + Math.trunc(parseInt(document.getElementById("parse-int").innerHTML)/18);

let fix = document.getElementById("to-fixed");
fix.innerHTML = parseFloat(fix.innerHTML).toFixed(2);



