
var total=0;
function addmovie(movie,money=40){
   
total=total+money;
    var listnode= document.getElementById("list");
       
    var li=document.createElement("li");
    
    li.setAttribute('id',movie);
    li.appendChild(document.createTextNode(movie+"------->  "+money));
    listnode.appendChild(li);
    document.getElementById("total").innerHTML=total;
  
}
function remove(movie)
{
    
    var listnode= document.getElementById("list");
    var item=document.getElementById(movie);
    if(item!=null)
        {listnode.removeChild(item);
        total=total-40;}
    else{

        alert("You didn't selected this movie yet");
    }

}