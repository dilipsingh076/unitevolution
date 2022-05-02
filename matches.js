// write js code here corresponding to matches.html

var matches= JSON.parse(localStorage.getItem("schedule"))

var fav = JSON.parse(localStorage.getItem("favourites")) || []

window.addEventListener("load",function(){
    displayData(matches)
    
})


function filtervenue(){
    var selected = document.querySelector("#filtervenue").ariaValueMax;
    var list = matches.filter(function(elem){
        return elem.venue == selected;
    });
    console.log(list)
    displayData(list)
}

function displayData(match){

    document.querySelector("tbody").innerHTML="";
    matches.map(function(elem){
        var row = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var td4 = document.createElement("td");
        var td5 = document.createElement("td");
        var td6 = document.createElement("td");

        td6.addEventListener("click",function(){
            addtofav(elem)
        })
        row.append(td1,td2,td3,td4,td5,td6);
        document.querySelector("tbody").append(row);
    });

}

function addtofav(elem){
    console.log(elem);
    fav.push(elem);
    localStorage.setItem("favourites",JSON.stringify(fav));
}