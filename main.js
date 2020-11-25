


let val="";

const input=document.getElementById('input');
input.addEventListener('change',function(){
    val=input.value;
    //console.log("value:  "+val)
    
})
 plot("X^2");
document.getElementById('plot').addEventListener('click',function(e){
e.preventDefault();
//console.log(val);
    plot(val);
})

function plot(value){
    let contentsBounds = document.body.getBoundingClientRect();
    //console.log(contentsBounds);
    value=value.toLowerCase();
    let width = 800;
    let height = 300;
    let ratio = contentsBounds.width / width;
    width *= ratio;
    height *= ratio;    
    functionPlot({
        target: "#app",
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
