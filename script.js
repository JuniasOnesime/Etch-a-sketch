const container = document.querySelector('#container');
const divinput =  document.querySelector('#div-input');
const buttonEraser = document.querySelector('#eraser');
const buttonraimbowselector = document.querySelector('#raimbowcolor');
const buttoncolorselector =  document.querySelector('#colorselector');
const buttongridsize = document.querySelector('#gridsize');
const buttonclear = document.querySelector('#clear');

/**Changing the background of the button once click and put back to normal if another button is clicke */
let modifiedbackg = Array.from(document.getElementsByClassName('modifiedbackg'));
modifiedbackg.forEach(function (change){
    change.addEventListener('click', handleclick);

});

function handleclick(e){
    modifiedbackg.forEach(function (val){
        if(val== e.target){
            val.classList.add('input');
        }else{
            val.classList.remove('input');
        }

    });
}

/*********************************************************************************************************** */

buttongridsize.addEventListener('click', gridsize);
buttonclear.addEventListener('click', clear);
buttonEraser.addEventListener('click', eraser);
buttoncolorselector.addEventListener('click', colorselect);
buttonraimbowselector.addEventListener('click', raimbowselect);





/*default gridsize*/
let col =16;
let row = 16;
let x = document.getElementById('colorselector').value;

for(let i =0; i<col; i++){
    for(let j=0; j<row; j++){

        const div1 =  document.createElement('div');
        div1.setAttribute('class', 'second-div');
        div1.setAttribute('id', `second-div${[i+1.5] + [j+1]}`);
        
        
        div1.addEventListener('click', () =>{
            const random = Math.floor(Math.random()*16777215).toString(16);
            document.getElementById(`second-div${[i+1.5]+[j+1]}`);
            document.getElementById(`second-div${[i+1.5]+[j+1]}`).style.backgroundColor = x;
            
            

        });
        
        
        container.appendChild(div1);
    };

};
/*-----------------------*/






/*function gridsize to ask the user to enter a gridsize*/
function gridsize(){
    const container = document.querySelector('#container');
    let modifiedbackg = Array.from(document.getElementsByClassName('modifiedbackg'));
    modifiedbackg.forEach(function (change){
        change.addEventListener('click', handleclick);

    });
    let car = document.getElementById('raimbowcolor');
    car.classList.add('input');
    let car2 = document.getElementById('gridsize');
    car2.classList.remove('input');
    
    let limit = 64;
   
    
    
    
    container.innerHTML = ' ';
    col = prompt('enter the value for the gridcolumn');
    row = prompt('enter the value for the gridrow');
    
    if(col<=limit && row<= limit){
        document.getElementById('container').style.setProperty('--grid-cols', col);
        document.getElementById('container').style.setProperty('--grid-row', row);
        makegrid(col, row);
         

    }else if(col ===0 && row=== 0){
        alert('try between the range of 1 to 64, enter again');
    }
    else{
        container.innerHTML = ' ';
        alert('try between the range of 1 to 64, enter again');
    }

    
    
    
    


}



function makegrid(col, row){
    
    for(let i =0; i<col; i++){
        for(let j=0; j<row; j++){
            const div1 =  document.createElement('div');
            div1.setAttribute('class', 'second-div');
            div1.setAttribute('id', `second-div${[i+1.5]+ [j+1]}`);
            
            
            div1.addEventListener('click', () =>{
                const random = Math.floor(Math.random()*16777215).toString(16);
                document.getElementById(`second-div${[i+1.5]+[j+1]}`).style.backgroundColor = "#"+ random;
                
                

            });
            
            
            container.appendChild(div1);
        };

    };

    
};
/*----------------------------------------------------------------------*/



/*the clear function*/
function clear(){
    const container = document.getElementById("container");
    const cssobj = window.getComputedStyle(container);
    let col = cssobj.getPropertyValue("--grid-cols");
    let row = col;
    
    container.innerHTML = ' ';
    let modifiedbackg = Array.from(document.getElementsByClassName('modifiedbackg'));
    modifiedbackg.forEach(function (change){
        change.addEventListener('click', handleclick);

    });
    let car = document.getElementById('raimbowcolor');
    car.classList.add('input');
    let car2 = document.getElementById('gridsize');
    car2.classList.remove('input');
    let car3 = document.getElementById('eraser');
    car3.classList.remove('input');
    let car4 = document.getElementById('colorselector');
    car4.classList.remove('input');



    for(let i =0; i<col; i++){
        for(let j=0; j<row; j++){
    
            const div1 =  document.createElement('div');
            div1.setAttribute('class', 'second-div');
            div1.setAttribute('id', `second-div${[i+1.5]+ [j+1]}`);
            
            
            div1.addEventListener('click', () =>{
                const random = Math.floor(Math.random()*16777215).toString(16);
                document.getElementById(`second-div${[i+1.5]+[j+1]}`).style.backgroundColor = "#"+ random;
                

                
                
    
            });
            
            
            container.appendChild(div1);
        };
    
    };
}
/*___________________________________*/


/*function eraser*/

function eraser(){
    const container = document.querySelector('#container');
   
    
    
    
    const div1 = document.querySelectorAll('.second-div');
   for(let i = 0; i<div1.length; i++){
       div1[i].addEventListener('click', ()=> {
           let car = document.getElementsByClassName('second-div')[i].id;
           document.getElementById(car).style.backgroundColor = 'white';

       });
   }

}
/*-------------------------------------------------*/

/*function colorselect*/

function colorselect(){
    const container = document.querySelector('#container');
    let x = document.getElementById('colorselector').value;
    const div1 = document.querySelectorAll('.second-div');
    for(let i = 0; i<div1.length; i++){
        div1[i].addEventListener('click', ()=> {
            let car = document.getElementsByClassName('second-div')[i].id;
            document.getElementById(car).style.backgroundColor = x;
 
        });
    }

}





/*-----------------------------------------*/



/*function raimbow selection*/

function raimbowselect(e){
    const container = document.querySelector('#container');
    
    
    const random = Math.floor(Math.random()*16777215).toString(16);
    const div1 = document.querySelectorAll('.second-div');
    for(let i = 0; i<div1.length; i++){
        div1[i].addEventListener('click',() => {
            const random = Math.floor(Math.random()*16777215).toString(16);
           
            document.getElementsByClassName('second-div')[i].style.backgroundColor = '#'+random; 
            
            
 
        });
    }

}