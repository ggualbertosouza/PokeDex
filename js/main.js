var btn1 = document.getElementById('btn');
btn1.addEventListener('click', loadpk())




function loadpk(){
    
        (async function(){
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/25');
            const jsonData = await response.json();
            }

        ) ();
    } catch (e) {
        console.log('Error:') 
    }       


    
