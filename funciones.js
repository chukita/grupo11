function suma(){
    var puntos = Number(document.getElementById("puntos").innerHTML);
    console.log("Los puntos son:"+puntos);
    var s = puntos + 1;
    document.getElementById("puntos").innerHTML = s;
}

function calcular(){
    var puntos = Number(document.getElementById("puntos").innerHTML);

    if (puntos>=10) { 
            alert("Lo lograste"); 
    } else { 
            alert("Falta...") 
    }
}