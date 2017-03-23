var box = document.getElementsByClassName("col-xs-4 ");

function myFunction(){
    
    var text = "X";


    for (i in box){
      
        box[i].onclick = function(){
         
        this.innerHTML = text;   
        this.style.backgroundColor="orangered";
        text="X"===text?"O":"X";
        };
        
    };
};

myFunction();

document.getElementById("reset").onclick = function(){
    for (i in box){
           
        box[i].innerHTML = "";   
        box[i].style.backgroundColor="lightseagreen";
        text="X"
        };
}

