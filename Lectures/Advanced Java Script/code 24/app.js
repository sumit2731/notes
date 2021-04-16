var items =document.getElementsByClassName("item");
for(var i=0;i< items.length; i++){
    (function(){
     var y = i;
     items[y].addEventListener("click",function(event){
         if(y==2){
             event.stopPropagation();
         }
         alert(y);
         console.log(items[y],event);
     },true);

    })();
}

