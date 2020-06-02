
var total=0;
function addmovie(movie,money=40){
   
total=total+money;
    var listnode= document.getElementById("list");
       
    var li=document.createElement("li");
    
    var value=
    li.appendChild(document.createTextNode(movie+"---------"+money));
    listnode.appendChild(li);
    document.getElementById("total").innerHTML=total;
  
}