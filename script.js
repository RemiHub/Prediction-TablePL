     let teamForm = document.getElementsByClassName('team-form');
     let pred = document.querySelectorAll('.pred');
     
    
    Array.from(teamForm).forEach(function(item){
        console.log(item.textContent);

        if(item.innerHTML.match(/(W{2,}$)+/gm )){
            console.log('draw or lose next game');

        } else if(item.innerHTML.match(/(D{2,}$)+/gm )) {  
            console.log('win or lose next game');

        } else if (item.innerHTML.match(/(L{2,}$)+/gm )){
            console.log('win or draw next game');

        } else {
            console.log('anything can happen');
      };

    });



        //making the buttons work
        function addW(){
            //add or append W to the form of this particular team
            document.getElementById('l2-form').innerHTML += 'W';
            let l2 = document.getElementById('l2-form').innerHTML;
            
            var result = l2.slice(1); 
            //simultaneously get rid of the first character while adding the W
            document.getElementById("l2-form").innerHTML 
                    = result; 
                     
        }
          

        function addL(){
            //add or append W to the form of this particular team
            document.getElementById('l2-form').innerHTML += 'L';
            let l2 = document.getElementById('l2-form').innerHTML;
            
            var result = l2.slice(1); 
            //simultaneously get rid of the first character while adding the L
            document.getElementById("l2-form").innerHTML 
                    = result; 
        
                    
    

        }


        function addD(){
            //add or append W to the form of this particular team
            document.getElementById('l2-form').innerHTML += 'D';
            let l2 = document.getElementById('l2-form').innerHTML;
            
            var result = l2.slice(1); 
            //simultaneously get rid of the first character while adding the D
            document.getElementById("l2-form").innerHTML 
                    = result; 

        }

