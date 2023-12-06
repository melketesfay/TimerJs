let timer;



let num = 0;

function startCounter(){

   
        timer = setInterval(counter,1000)

    
   

}

let secOnes = 0;
let secTens = 0;
let minOnes = 0;
let minTens = 1;
let hrOnes = 0;
let hrTens = 0;
function counter(){
    document.querySelector(".hour_tens").innerHTML = hrTens;
    document.querySelector(".hour_ones").innerHTML = hrOnes;
    document.querySelector(".minute_tens").innerHTML = minTens;
    document.querySelector(".minute_ones").innerHTML = minOnes;
    document.querySelector(".second_ones").innerHTML = secOnes;
    document.querySelector(".second_tens").innerHTML = secTens;



    // let arr = [[secOnes, secTens],[minOnes, minTens],[hrOnes,hrOnes]]

    // for(let i = arr[0][0]; i> 0; i--){
    //     if(){

    //     }
    // }



    if(secOnes > 0){
        --secOnes;
        
       
    
        
    } else if(secTens > 0){
        --secTens;
        
        secOnes = 9;

    } else if( minOnes > 0){
        
        --minOnes;
       
        secTens = 5;
        secOnes = 9;
        minOnes = 9
    }else if(minTens > 0){
        
        --minTens;
        
        minOnes = 9
       
        
        
    }else if(hrOnes > 0){
        --hrOnes;
        minTens = 5;
        minOnes = 9;
        minOnes++;
    }else if(hrTens > 0){
        --hrTens;
        hrOnes = 9;
        hrOnes++;
    }
    
    
}

document.querySelector(".container").addEventListener("click", startCounter)

clearInterval(timer)