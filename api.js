function GenerateRandomCharacter() { 
    $.get("https://swapi.dev/api/people/" + Math.floor(Math.random(1, 50) * 10), UpdateRandomCharacter);
}
function UpdateRandomCharacter(data){
    console.log(data);
    $("#randomCharacterId").text(data.name);
}

function SearchFilmByCharacter() {
    let name = $("#SearchFilmByCharacterId").val();
    $.get("https://swapi.dev/api/people/?search=" + name, UpdateTable);
}

function UpdateTable(data) {
    console.log(data.results[0].name);
    $("#TableFilmsId").text(data.results[0].name);

    console.log(data.results[0].films);
    $("#TableFilmsId").find("tr:gt(0)").remove();

    for(let i = 0; i < data.results[0].films.length; i++) {
        $.get(data.results[0].films[i], CreateLine);
    }
}

function CreateLine(data) {
    console.log("oi");
    let htmlFinal = 
        "<tr><td>" + data.title + "</td>" + 
        "<td>" + data.episode_id + "</td>" +
        "<td>" + data.director + "</td></tr>";
    
    $("#tableFilmsId").append(htmlFinal);
}