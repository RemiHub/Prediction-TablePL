     let teamForm = document.querySelectorAll('#table-body > tr > td.team-form');
    //  let pred_one = document.getElementById('pred1');
     
     
    Array.from(teamForm).forEach(item => {
        // console.log(item.textContent);
     
        if(item.textContent.match(/(W{2,}$)+/gm )){
            item.innerHTML = `draw or lose next game`;
            // console.log('draw or lose next game');
        
        } else if(item.textContent.match(/(D{2,}$)+/gm )) {  
            item.innerHTML = 'win or lose next game';
            // console.log('win or lose next game');
            
        } else if (item.textContent.match(/(L{2,}$)+/gm )){
            item.innerHTML = 'win or draw next game';
            // console.log('win or draw next game');
            
        } else {
            item.innerHTML = 'anything can happen';
            // console.log('anything can happen');
            
      };
    });


        //if buttons are pressed need to update form of each team with 
        //respect to the button in that row being pressed or not 
        //only that row will update
        //when regex patterns apply differently due to buttons pressed and new data
        //input, then change the inner text accordingly


        
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

        // function getTableData(){
            

           
            
            // tableData += 'W'; MAKES INFINITE LOOP

            // let tble_dataEl = tableData[i].innerHTML;
            // console.log(tble_dataEl);
            

            

            // if(tble_dataEl.match(/(W{2,}$)+/gm )){
            //     tble_dataEl.innerHTML += 'W';
            // }
            
            // console.log(tableData[i].innerHTML)
        // }
    // }

    // getTableData();

    // function addWinToAll(){
    //     let x = '';
    //     if(x.match(/(W{2,}$)+/gm )){
    //         x += 'W';
    //     }
    // }
    
            
            // tableData.addEventListener('click', e => {
                // console.log(i);
                // console.log(e.toElement.className);
            // });
            
        
        // let winning = document.querySelectorAll("[class^='tf']");
        // console.log(winning[0].innerHTML);
        
        let win_btn = document.querySelectorAll("[class^='win-btn']");
        for ( let counter = 0; counter < win_btn.length; counter++){
            


            // if(e.target.tagName === 'BUTTON'){
                // if W buttons is pressed then add 'W' to tabledata


        //Event Listener
        win_btn[counter].addEventListener('click', e => {
            console.log(e);

            if(e.target.tagName === 'BUTTON'){
                // console.log(e.target.id);
                
            let tableData = document.querySelectorAll("[class^='tf']");
             for ( let i = 0; i < tableData.length; i++){
                //  console.log(i)
            document.querySelectorAll("[class^='tf']")[i].innerHTML += 'W';
            let takeAwayFirstLetter = tableData[i].innerHTML.slice(1);
            document.querySelectorAll("[class^='tf']")[i].innerHTML = takeAwayFirstLetter;

            }
            }

            


            


            // document.querySelectorAll("[class^='tf']").innerHTML += 'W';
            // let winning = document.querySelectorAll("[class^='tf']");
            // for ( let i = 0; i < winning.length; i++)
            // winning[i].innerHTML += 'W'; 

            // for ( let i = 0; i < winning.length; i++)
            
            // console.log(winning[i].innerHTML.slice(1));

            // winning[i].innerHTML.slice(1); 


            // document.querySelectorAll("[class^='tf']").innerHTML 
            //         = result; 
                console.log('you pressed W');
        

             

            
        });
    }

    // teamForm = [];

    // teamForm.forEach(win => document
    //     .querySelectorAll(win)
    //     .addEventListener('click', () => addW(teamForm))
    //   );
       

        
