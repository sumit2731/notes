var items =document.getElementsByClassName("item");
for(var i=0;i< items.length; i++){
    (function(){
     var y = i;
     items[y].addEventListener("click",function(event){
         console.log(items[y],event);
     },false);

    })();
}

