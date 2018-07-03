(function(){
    const body = document.querySelector('body');
    const tabela = document.querySelector('#tr')
    let table = '';

    body.addEventListener('click', function(e){
        tabela.innerHTML = ''
        // console.log(e)
        if(e.target.className === "tab"){

            table = e.target.id
            
            fetch('http://api.football-data.org/v1/competitions/467/leagueTable',{
                headers: {
                    'X-Auth-Token': '4c3a12ba574f43e582157bc7d3f79618'
                }
            }).then(response => response.json())
              .then(matches)
              .catch(e => requestError(e, 'danych'))
        }

    })

    function requestError(e, part){
        tabela.insertAdjacentHTML('beforeend',`<p> Problemy z siecią! Nie pobraliśmy żadnych ${part}`)
    }

    function matches(string){
        
        
        let htmlContent = ''
        
        
        if(string.standings[table][3]){
            
            let array = [];
            array = string.standings[table];
            
            for(object of array){
                htmlContent += `<tr><td>${object.rank}</td>
                <td><img height="10px" width="20px" src="${object.crestURI}">${object.team}</td>
                <td>${object.points}</td><td>${object.goals}</td></tr>`
            }
            
            
            
           
                
            

            
        }else{
			htmlContent = `<div>Brak wyników</div>`
        }
        
        tabela.insertAdjacentHTML('beforeend', htmlContent)
    }
    

}) ()