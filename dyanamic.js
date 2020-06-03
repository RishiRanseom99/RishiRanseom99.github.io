
var total=0;
function addmovie(movie,money=40){
    var item=document.getElementById(movie);
    
total=total+money;
    var listnode= document.getElementById("list");
       
    var li=document.createElement("li");
    
    li.setAttribute('id',movie);
    document.getElementById(movie).disabled = false;
    document.getElementById(movie).style.visibility = "visible";
    li.appendChild(document.createTextNode(movie+"------->  "+money));
    listnode.appendChild(li);
    document.getElementById("total").innerHTML=total;
    
}
function remove(movie)
{
    
    var listnode= document.getElementById("list");
    var item=document.getElementById(movie);
    var tootal=document.getElementById("total");
    item.style.visibility = "hidden";
    if(item!=null)
        {listnode.removeChild(item);
        total=total-40;
        tootal.innerHTML=total;
        
        
    }
    else{

        alert("You didn't selected this movie yet");
    }

}