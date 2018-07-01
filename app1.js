(function(){
    const body = document.querySelector('body');
    let table = '';

    body.addEventListener('click', function(e){
        console.log(e.target)
        table = e.target.id
        
        fetch('http://api.football-data.org/v1/competitions/467/leagueTable',{
            headers: {
                'X-Auth-Token': '4c3a12ba574f43e582157bc7d3f79618'
            }
        }).then(response => response.json())
          .then(matches)
    })

    function matches(string){
        
        console.log(string.standings[table])
    }

}) ()