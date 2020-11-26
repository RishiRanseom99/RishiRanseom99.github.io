


let val1="",val2="";

const input=document.getElementsByClassName('input');
// input.addEventListener('change',function(){
//     val=input.value;
//     //console.log("value:  "+val)
    
// })
plot("y","x");
document.getElementById('plot').addEventListener('click',function(e){
e.preventDefault();
//console.log(val);
val1=" ";
val2=" ";

    val1=input[0].value;
    val2=input[1].value;
        

    plot(val1,val2);

});

function plot(value1,value2){
    let contentsBounds = document.body.getBoundingClientRect();
    console.log(contentsBounds);
    value1=value1.toLowerCase();
    value2=value2.toLowerCase();
    let width = 700;
    let height =400;
    let ratio = contentsBounds.width / width;
    console.log(contentsBounds.width,contentsBounds.height,ratio,width*ratio,height*ratio);
    if(ratio<1)
    { 
        ratio+=0.5;
        width *= ratio;
        height *= ratio;
    }   
    
    functionPlot({
        target: "#canvasDisplay",
        // title:"Graph",
        width,
        height,
        disableZoom: false,
        xAxis: {
            label: 'x - axis',
            domain: [-10, 10]
          },
          yAxis: {
            label: 'y - axis'
          },
        grid: true,
        data: [
          
            {fn: value1,fnType: 'implicit'}
            ,{fn: value2,fnType: 'implicit'}
           
          
          
        ]
      });
      
}


document.getElementById('show').addEventListener('click',function(e){
e.preventDefault();
 let x=document.getElementById('Xaxis').value.split(',');
 let y=document.getElementById('Yaxis').value.split(',');
 let type=document.getElementById('typeOfChart').value;
console.log(x,y,type);
update(x,y,type);
});

const update=(x,y,typeChart)=>{
    chart.destroy();
    chart=createChart(x,y,typeChart);
    // chart.data.labels=y;
    // chart.data.datasets[0].data=x;
    // //console.log(chart.data.datasets[0].data);
    // console.log(chart.type);
    // chart.type=typeChart;
    // console.log(chart.type);
    // chart.update();
};

const createChart=(x,y,typeChart)=>{
    var ctx = document.getElementById('myChart').getContext('2d');
    
    document.getElementById('myChart').height=document.getElementById('myChart').width*0.5;
    
    var myChart = new Chart(ctx, {
        type: typeChart,
        data: {
            labels: y,
            datasets: [{
                label: 'Visualization',
                data: x,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    // 'rgba(54, 162, 235, 0.2)',
                    // 'rgba(255, 206, 86, 0.2)',
                    // 'rgba(75, 192, 192, 0.2)',
                    // 'rgba(153, 102, 255, 0.2)',
                    // 'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    return myChart;
};
let chart=createChart([1,2,3,4],[2014,2015,2016,2017],"bar");
document.getElementById("download").addEventListener('click', function(){
    
    var url_base64jp = document.getElementById("myChart").toDataURL("image/jpg");
    var a =  document.getElementById("download");
    a.href = url_base64jp;
    // var pdf = new jsPDF('p', 'mm');
    // pdf.addImage(url_base64jp, 'jpg', 10, 10);
    // pdf.save('screenshot.pdf');
    
    
    
   
  });
  document.getElementById("downloadGraph").addEventListener('click', function(){
    
    // var url_base64jp = document.querySelector("function-plot").toDataURL("image/jpg");
    // var a =  document.getElementById("downloadGraph");
    // a.href = url_base64jp;
    // var pdf = new jsPDF('p', 'mm');
    // pdf.addImage(url_base64jp, 'jpg', 10, 10);
    // pdf.save('screenshot.pdf');
    var svg = document.querySelector('#function-plot');
    var data = (new XMLSerializer()).serializeToString(svg);

    var canvas = document.createElement('canvas');
    canvg(canvas, data, {
    renderCallback: function() {
    canvas.toBlob(function(blob) {
        download('MyImageName.png', blob);
    });
  }
});
    
    
    
   
  });
