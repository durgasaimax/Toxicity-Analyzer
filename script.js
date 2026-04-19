let barChart, radarChart;

function analyze(){

let smoke = +document.getElementById("smoke").value || 0;
let alcohol = +document.getElementById("alcohol").value || 0;
let junk = +document.getElementById("junk").value || 0;
let soft = +document.getElementById("soft").value || 0;
let water = +document.getElementById("water").value || 0;
let exercise = +document.getElementById("exercise").value || 0;

let score = smoke*4 + alcohol*3 + junk*2 + soft*2 - water*3 - exercise*0.2;

if(score < 0) score = 0;
if(score > 100) score = 100;

document.getElementById("score").innerText = "Toxicity Score: " + score.toFixed(1);

let risk = "Low";
if(score>25) risk="Moderate";
if(score>50) risk="High";
if(score>75) risk="Hazardous";

document.getElementById("risk").innerText = "Risk Level: " + risk;

document.getElementById("suggest").innerText =
score>50 ?
"⚠ Reduce smoking, alcohol, sugary drinks. Increase water & exercise." :
"✅ Maintain healthy routine.";

makeBar(smoke,alcohol,junk,soft);
makeRadar(score);
}

function makeBar(smoke,alcohol,junk,soft){

if(barChart) barChart.destroy();

barChart = new Chart(document.getElementById("barChart"),{
type:'bar',
data:{
labels:["Nicotine","Ethanol","Acrylamide","Sugar Load"],
datasets:[{
label:"Chemical Exposure",
data:[smoke*5,alcohol*4,junk*3,soft*4]
}]
}
});
}

function makeRadar(score){

if(radarChart) radarChart.destroy();

radarChart = new Chart(document.getElementById("radarChart"),{
type:'radar',
data:{
labels:["Lungs","Liver","Heart","Kidney","Brain"],
datasets:[{
label:"Organ Stress",
data:[
score*0.9,
score*0.8,
score*0.7,
score*0.5,
score*0.6
]
}]
}
});
}