var btn1 = document.getElementById('btn');
btn1.addEventListener('click', loadpk())




function loadpk(){
    try{
        (async function(){
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/25');
            const jsonData = await response.json();
            
            for (const pokemon of jsonData){
               console.log(pokemon.results)
            }
     
            var name = document.getElementById('name');
            name.innerHTML = pk
        })();
    } catch (e) {
        console.log('Error:') 
    }
     
    
        
}

    
