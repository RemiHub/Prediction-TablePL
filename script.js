let teamForm = document.querySelectorAll('#table-body > tr > td.team-form');
var target1 = document.querySelector('#pred1');
var target2 = document.querySelector('#pred2');
var target3 = document.querySelector('#pred3');
var target4 = document.querySelector('#pred4');
var target5 = document.querySelector('#pred5');
var target6 = document.querySelector('#pred6');
var target7 = document.querySelector('#pred7');
var target8 = document.querySelector('#pred8');
var target9 = document.querySelector('#pred9');
var target10 = document.querySelector('#pred10');
var target11 = document.querySelector('#pred11');
var target12 = document.querySelector('#pred12');
var target13 = document.querySelector('#pred13');
var target14 = document.querySelector('#pred14');
var target15 = document.querySelector('#pred15');
var target16 = document.querySelector('#pred16');
var target17 = document.querySelector('#pred17');
var target18 = document.querySelector('#pred18');
var target19 = document.querySelector('#pred19');
var target20 = document.querySelector('#pred20');


let teamPredictionText = [...teamForm];

var observer = new MutationObserver(function(mutations) {
       
    mutations.forEach(item => {
       parent.addEventListener('click', e => {

       if(item.target.textContent.match(/(W{2,}$)+/gm )){
           e.target.parentElement.previousElementSibling.previousElementSibling.innerHTML = 'draw or lose next game';
       } 
       else if(item.target.textContent.match(/(D{2,}$)+/gm )) {  
           e.target.parentElement.previousElementSibling.previousElementSibling.innerHTML = 'win or lose next game';
       } 
       else if (item.target.textContent.match(/(L{2,}$)+/gm )){
           e.target.parentElement.previousElementSibling.previousElementSibling.innerHTML = 'win or draw next game';
       } 
       else {
           e.target.parentElement.previousElementSibling.previousElementSibling.innerHTML = 'anything can happen';
           };
       })
   })
});


// var observer = new MutationObserver(function(mutations) {
//     // console.log(mutations)
//          mutations.forEach(item => {
//             // console.log(item)
       
//             if(item.target.textContent.match(/(W{2,}$)+/gm )){

//                 parent.addEventListener('click', e => {
                   
//         e.target.parentElement.previousElementSibling.previousElementSibling.innerHTML = 'draw or lose next game';
//                     })
               

//                 console.log('draw or lose next game');
            
//             } else if(item.target.textContent.match(/(D{2,}$)+/gm )) {  
                
//                 parent.addEventListener('click', e => {
//                     console.log(e)
               
//                 e.target.parentElement.previousElementSibling.previousElementSibling.innerHTML = 'win or lose next game';
                
//             })
//                 console.log('win or lose next game');
                
//             } else if (item.target.textContent.match(/(L{2,}$)+/gm )){
              
//                 parent.addEventListener('click', e => {
               
//                     e.target.parentElement.previousElementSibling.previousElementSibling.innerHTML = 'win or draw next game';
                   
//                 })
                

//                 console.log('win or draw next game');
                
//             } else {
               

//                 parent.addEventListener('click', e => {
               
//                     e.target.parentElement.previousElementSibling.previousElementSibling.innerHTML = 'anything can happen';
                   
//                 })


//                 console.log('anything can happen');
                
//           };
//         })
//     });
 

    observer.observe(target1, {
        subtree: true,
        attributes:    true,
        childList:     true,
        characterData: true
    });

    observer.observe(target2, {
        subtree: true,
        attributes:    true,
        childList:     true,
        characterData: true
    });

    
    observer.observe(target3, {
        subtree: true,
        attributes:    true,
        childList:     true,
        characterData: true
    });

    
    observer.observe(target4, {
        subtree: true,
        attributes:    true,
        childList:     true,
        characterData: true
    });

    
    observer.observe(target5, {
        subtree: true,
        attributes:    true,
        childList:     true,
        characterData: true
    });
    
    observer.observe(target6, {
        subtree: true,
        attributes:    true,
        childList:     true,
        characterData: true
    });

    
    observer.observe(target7, {
        subtree: true,
        attributes:    true,
        childList:     true,
        characterData: true
    });

    
    observer.observe(target8, {
        subtree: true,
        attributes:    true,
        childList:     true,
        characterData: true
    });

    
    observer.observe(target9, {
        subtree: true,
        attributes:    true,
        childList:     true,
        characterData: true
    });

    
    observer.observe(target10, {
        subtree: true,
        attributes:    true,
        childList:     true,
        characterData: true
    });

    
    observer.observe(target11, {
        subtree: true,
        attributes:    true,
        childList:     true,
        characterData: true
    });

    
    observer.observe(target12, {
        subtree: true,
        attributes:    true,
        childList:     true,
        characterData: true
    });

    
    observer.observe(target13, {
        subtree: true,
        attributes:    true,
        childList:     true,
        characterData: true
    });

    
    observer.observe(target14, {
        subtree: true,
        attributes:    true,
        childList:     true,
        characterData: true
    });

    
    observer.observe(target15, {
        subtree: true,
        attributes:    true,
        childList:     true,
        characterData: true
    });

    
    observer.observe(target16, {
        subtree: true,
        attributes:    true,
        childList:     true,
        characterData: true
    });
    
    observer.observe(target17, {
        subtree: true,
        attributes:    true,
        childList:     true,
        characterData: true
    });
    
    observer.observe(target18, {
        subtree: true,
        attributes:    true,
        childList:     true,
        characterData: true
    });

    
    observer.observe(target19, {
        subtree: true,
        attributes:    true,
        childList:     true,
        characterData: true
    });

    
    observer.observe(target20, {
        subtree: true,
        attributes:    true,
        childList:     true,
        characterData: true
    });
    


// }

// addObserver();


// console.log(target);

// Array.from(target).forEach(item => {
//   console.log(item.innerText)

  
    

    
// })


// Create an observer instance.
// var observer = new MutationObserver(function(mutations) {
//     console.log(target.innerText);   
//     // console.log(mutations)
// });



// // Pass in the target node, as well as the observer options.
// observer.observe(target, {
//     attributes:    true,
//     childList:     true,
//     characterData: true
// })


     
     
    Array.from(teamForm).forEach(item => {
        // console.log(item.textContent);
     
        if(item.textContent.match(/(W{2,}$)+/gm )){
            return item.innerHTML = `draw or lose next game`;
            // console.log('draw or lose next game');
        
        } else if(item.textContent.match(/(D{2,}$)+/gm )) {  
            return item.innerHTML = 'win or lose next game';
            // console.log('win or lose next game');
            
        } else if (item.textContent.match(/(L{2,}$)+/gm )){
            return item.innerHTML = 'win or draw next game';
            // console.log('win or draw next game');
            
        } else {
            return item.innerHTML = 'anything can happen';
            // console.log('anything can happen');
            
      };
    });



    let parent = document.querySelector('#table-body');
    

    //add W to form when clicked and simultanously remove the first letter
    parent.addEventListener('click', e => {
        if(e.target.classList.contains('win-btn')){
            // console.log(e.target.parentElement.previousElementSibling);
            e.target.parentElement.previousElementSibling.innerHTML += 'W';
            // console.log(e.target.parentElement.previousElementSibling.innerHTML[0]) 
            let minusLetter = e.target.parentElement.previousElementSibling.innerHTML.slice(1);
            // console.log(minusLetter); 
            e.target.parentElement.previousElementSibling.innerHTML = minusLetter;
            
            
        }
    });

    //add D to form when clicked and simultanously remove the first letter
    parent.addEventListener('click', e => {
        if(e.target.classList.contains('draw-btn')){
            // console.log(e.target.parentElement.previousElementSibling);
            e.target.parentElement.previousElementSibling.innerHTML += 'D';
            let minusLetter = e.target.parentElement.previousElementSibling.innerHTML.slice(1);
            // console.log(minusLetter[0]); 
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


    





    //check when something is clicked within the table body
    // parent.addEventListener('click', e => {
    //     if(e.target.classList.contains('win-btn') 
    //     || e.target.classList.contains('draw-btn') 
    //     || e.target.classList.contains('lose-btn')){
    //         console.log('you clicked')

    //         let tempHTML = '';

    //         tempHTML = e.target.parentElement.previousElementSibling.innerHTML
    //         console.log(tempHTML[0])

    //         function doBack() {
    //             e.target.parentElement.previousElementSibling.innerHTML = tempHTML;
    //             console.log(tempHTML)
    //         }

           
       
        
            parent.addEventListener('click', e => {
                
        //if what has been clicked contains the delete-btn class name then go ahead with...
        if(e.target.classList.contains('delete-btn')){

            //if the team form has changed then you can click this button and when you do go
            //back to the original form/text 

            

              
            
            //need to check if button has been added, if the form is yet to be modified then this button should
            //have to remain inactive
            

            // let addLetter = e.target.parentElement.previousElementSibling.innerHTML[0] 
            // //grabs first letter in form
            // console.log(addLetter)
            


            // let normalForm = e.target.parentElement.previousElementSibling.innerHTML.slice(0, 4);
            // console.log(normalForm)
            // //gets rid of the letter at the end of the string - need to fix(should only work when either
            // //W, L, or D has already been pressed)
            // let result = addLetter.concat(normalForm);
            // // adds it all together from the front of string

            //  e.target.parentElement.previousElementSibling.innerHTML = result;
            //  console.log(result)
             
            
            
            // addFunction here that undoes last?
        }
    })
    // document.designMode = 'on';

    
    // function undoButton(event) {
    //     if (event) {
    //       // Execute command if user presses the back button:
    //       document.execCommand("undo");
    //     }
    //   }
   


    //     }
    // });

    //UNDO BUTTON GRAB THE LETTER THAT WAS PUSHED OUT OF THE ARRAY AND ADD IT BACK TO THE
    //FORM FROM THE FRONT END AND TAKE OFF THE LAST ONE/LETTER THAT WAS MOST RECENTLY PASSED IN


    // let tempHTML = '';

    // let input = document.querySelector()


    // function saveTemp(){
        // tempHTML.push(input.value)
    // }

    // function undoBtn(){
    //     let previousLetter = tempHTML.pop()

    // input.value = previousLetter ? previousLetter : input.value
    //     
    // }

   



    


    


    

    

