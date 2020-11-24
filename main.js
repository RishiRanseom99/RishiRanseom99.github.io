


let val="";

const input=document.getElementById('input');
input.addEventListener('change',function(){
    val=input.value;
    //console.log("value:  "+val)
    
})
document.getElementById('plot').addEventListener('click',function(e){
e.preventDefault();
//console.log(val);
    plot(val);
})

function plot(value){
    let contentsBounds = document.body.getBoundingClientRect();
    //console.log(contentsBounds);
    let width = 800;
    let height = 300;
    let ratio = contentsBounds.width / width;
    width *= ratio;
    height *= ratio;    
    functionPlot({
        target: "#root",
       title:"Plotted graph",
        width,
        height,
        yAxis: { domain: [-1, 9] },
        grid: true,
        data: [
          
            {fn: value}
           
          
          
        ]
      });
      
}

