let teamForm = document.querySelectorAll('#table-body > tr > td.team-form');


     
     
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



    let parent = document.querySelector('#table-body');

    //add W to form when clicked and simultanously remove the first letter
    parent.addEventListener('click', e => {
        if(e.target.classList.contains('win-btn')){
            // console.log(e.target.parentElement.previousElementSibling);
            e.target.parentElement.previousElementSibling.innerHTML += 'W';
            let minusLetter = e.target.parentElement.previousElementSibling.innerHTML.slice(1);
            //console.log(minusLetter); 
            e.target.parentElement.previousElementSibling.innerHTML = minusLetter;
            
        }
    });

    //add D to form when clicked and simultanously remove the first letter
    parent.addEventListener('click', e => {
        if(e.target.classList.contains('draw-btn')){
            // console.log(e.target.parentElement.previousElementSibling);
            e.target.parentElement.previousElementSibling.innerHTML += 'D';
            let minusLetter = e.target.parentElement.previousElementSibling.innerHTML.slice(1);
            //console.log(minusLetter); 
            e.target.parentElement.previousElementSibling.innerHTML = minusLetter;
            
        }
    });

    //add L to form when clicked and simultanously remove the first letter
    parent.addEventListener('click', e => {
        if(e.target.classList.contains('lose-btn')){
            // console.log(e.target.parentElement.previousElementSibling);
            e.target.parentElement.previousElementSibling.innerHTML += 'L';
            let minusLetter = e.target.parentElement.previousElementSibling.innerHTML.slice(1);
            //console.log(minusLetter); 
            e.target.parentElement.previousElementSibling.innerHTML = minusLetter;
            
        }
    });


//     let undostack = new UndoStack(null);

// function pushAction (perform, data) {
//     var return_value;

//     // We want the redo call before the push in case it throws.
//     return_value = perform.call(this, true, data);
//     undostack.push(perform, data);

//     return return_value;
// };




    // parent.addEventListener('click', e => {
    //     if(e.target.classList.contains('delete-btn')){
    //         // console.log(e.target.parentElement.previousElementSibling);
    //         e.target.parentElement.previousElementSibling.innerHTML += 'L';
    //         let minusLetter = e.target.parentElement.previousElementSibling.innerHTML.slice(1);
    //         //console.log(minusLetter); 
    //         e.target.parentElement.previousElementSibling.innerHTML = minusLetter;
            
    //     }
    // });
    


    


    

    

