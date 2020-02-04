//put positions in ranks 1-20 based on live position or from form (do form first?)

//find how to put the position in ascending order

//store the form of teams in an array
//team rank one - form is WWWWW (five wins).
 

//teamForm.addEventListener('keypress', inputForms);



//function myFunction(){
    //const form = teamForm.split(' ');
     let teamForm = document.getElementsByClassName('team-form');//.classList.add('');
     let pred = document.querySelectorAll('.pred');
     //let pred = document.getElementsByClassName('pred')
    // // console.log(Array.isArray(teamForm));
    // // console.log(Array.isArray(Array.from(teamForm)));

    
    
    
    
    Array.from(teamForm).forEach(function(item){
        console.log(item.textContent);

         //https://regex101.com/r/ogrSJN/1  saved below regex
        if(item.innerHTML.match(/(W{2,}$)+/gm )){
            
            // let x = document.createElement("P");
            // x.innerText = "draw or lose next game";
            // document.getElementById("pred2").append(x);    
            
           // pred.textContent = 'draw or lose next game';
           
            // function addForm(){
            //     document.getElementsByClassName('pred').innerHTML = 'draw or lose next game';

            // }
            
            // for (let i = 0; i < pred.length; i++){
            //     pred[i].innerHTML = 'draw or lose next game';
            // };
            
           //document.createElement = 'draw or lose next game';
            console.log('draw or lose next game');

        } else if(item.innerHTML.match(/(D{2,}$)+/gm )) {  

            
            //document.getElementById('pred').innerHTML = 'win or lose next game';

            // for (let j = 0; j < pred.length; j++){
            //     pred[j].innerHTML = 'win or lose next game'; 
            // }
            console.log('win or lose next game');

        } else if (item.innerHTML.match(/(L{2,}$)+/gm )){
                // for (let k = 0; k < pred.length; k++){
                // pred[k].innerHTML = 'win or draw next game';
                // }
            //document.getElementById('pred').innerHTML = 'win or draw next game';
            console.log('win or draw next game');

        } else {
            //document.getElementById('pred5').innerHTML = 'anything can happen';
            console.log('anything can happen');
      };

    });



        //making the buttons work

        //const winButton = document.getElementsByClassName('win-btn');
        // const loseButton = document.getElementsByClassName('lose-btn');
        // const drawButton = document.getElementsByClassName('draw-btn');

        
        

        function addW(){
            //add or append W to the form of this particular team
            document.getElementById('l2-form').innerHTML += 'W';
            let l2 = document.getElementById('l2-form').innerHTML;
            
            var result = l2.slice(1); 
            //simultaneously get rid of the first character while adding the W
            document.getElementById("l2-form").innerHTML 
                    = result; 
                    //console.log(result)

            // var output = result.replace(l2, output)
            // document.getElementById('l2-form').innerHTML = output;
            //THIS WOOORRKKKSS!!! but only individually     
        }
          

        function addL(){
            //add or append W to the form of this particular team
            document.getElementById('l2-form').innerHTML += 'L';
            let l2 = document.getElementById('l2-form').innerHTML;
            
            var result = l2.slice(1); 
            //simultaneously get rid of the first character while adding the L
            document.getElementById("l2-form").innerHTML 
                    = result; 
        
                    // return result.innerHTML;
    

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


        


        

            







        
    
    //          important! the above checks to see if it is an Array... will show on console
    //          the second log method turns it into an array - the first output was FALSE the second TRUE


    


     
    

    

    // 
    //     arr += teamForm.elements[i].value + '<td>';
        
    // }
    //     let formsOfTeam = td[i].getElementsByClassName('team-form');

   


    //get value of input

    //let teamVal = document.getElementById('team-form').value;


     

//}
// teamForm.forEach(function(val){
//     teamForm.push(val.outerHTML)
// })

// console.log(teamArr);




    // 
    //     //teamArr.splice(teamForm[i].outerHTML);
    //     teamArr.splice(teamForm[i].innerHTML);
    // }
    // console.log(teamForm);

//use the team-form element and put into an array, check the array, then use if statement?
// function teamForms(){
//     //let arr;
//     let arr = teamForm.split(" ");
//     console.log(teamForms);
    //if(the array of teamform has five wins then position one)
//}












//calculate prediction percentage for next game based on form, 
//if all previous games have been losses the chance of next game to be a loss would be 10%or lower
//else it has a 40% chance of a draw and a 40% chance of a win
//the algorithm will change if there has been a recent draw as well as the losses
//and will change yet again if there has been at least one win




//future additions would be a drop down box that leads to the other divisions even around the europe



