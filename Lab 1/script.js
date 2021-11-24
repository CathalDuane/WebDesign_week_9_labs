function bottles(){
    for (i = 99; i >= 0; i--){
        if (i > 1){
            document.getElementById("main").innerHTML += "<br />" + i + " bottles of beer on the wall, " + i + " bottles of beer. Take one down and pass it around, <br />" + (i - 1) + " bottles of beer on the wall <br />";
        }
        else if(i == 1){
            document.getElementById("main").innerHTML += "<br />" + i + " bottle of beer on the wall, " + i + " bottle of beer. Take one down and pass it around, <br />no more bottles of beer on the wall. <br />";
        }
        else if(i == 0){
            document.getElementById("main").innerHTML += "<br /> No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, <br />no more bottles of beer on the wall. <br />";
        }
    }
}