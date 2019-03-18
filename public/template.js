



function createPlayers() {
    var player = document.getElementById("players");
    var template = "";
    player.innerHTML = "";
    for (var i = 0; i < data.players.length; i++) {

        template += `


`;


    }
    player.innerHTML = template;
};


function createMatches() {
    var match = document.getElementById("matches");
    var template = "";
    match.innerHTML = "";
    for (var i = 0; i < data.matches.length; i++) {

        template += `
<div class="card4, container">
        <div class="date">
            <span>${data.matches[i].date}</span>
        </div>
        <div class="duel">
            <div class="picture1" style="background-image:url(${data.matches[i].picture1})">

            </div>
            <div class="vs">
                <span>VS</span>
            </div>
            <div class="picture2" style="background-image:url(${data.matches[i].picture2})">

            </div>

        </div>
        <div class="characters">
            <div class="character1" style="background-image:url(${data.matches[i].cpicture1})">

            </div>
            <div class="character2" style="background-image:url(${data.matches[i].cpicture2})">

            </div>
        </div>

    </div>


`
    }
    match.innerHTML = template;
};




function createStandings() {
    var standing = document.getElementById("standings");
    var template = "";
    standing.innerHTML = "";
    for (var i = 0; i < data.standings.length; i++) {

        template += `

<div class="stan1, container">
                <div class="stanBorder">
                    <div class="roundNumber">
                        <span class="number">${i+1}</span>
                    </div>

                    



                    <div class="ptext">
                        <h4 id="pinfo1" class="sinfo1">
                          ${data.standings[i].name}   
                        </h4>
                        <h4 id="pinfo2" class="sinfo2">
                        ${data.standings[i].points} Points
                        </h4>
                    </div>
                </div>
            </div>
`
    }
standing.innerHTML = template;
};





