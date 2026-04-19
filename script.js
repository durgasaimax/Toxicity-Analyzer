let barChart;
let radarChart;

function analyze() {

let smoke = Number(document.getElementById("smoke").value) || 0;
let alcohol = Number(document.getElementById("alcohol").value) || 0;
let junk = Number(document.getElementById("junk").value) || 0;
let soft = Number(document.getElementById("soft").value) || 0;
let snacks = Number(document.getElementById("snacks").value) || 0;
let water = Number(document.getElementById("water").value) || 0;
let exercise = Number(document.getElementById("exercise").value) || 0;

/* TOXICITY SCORE */
let score =
(smoke * 5) +
(alcohol * 3.5) +
(junk * 2.8) +
(soft * 2.5) +
(snacks * 2.2) -
(water * 4) -
(exercise * 0.25);

score = Math.max(0, Math.min(100, score));
score = score.toFixed(1);

/* RISK LEVEL */
let risk = "Low";
if(score > 25) risk = "Moderate";
if(score > 50) risk = "High";
if(score > 75) risk = "Hazardous";

/* UI Update */
document.getElementById("score").innerText =
"Toxicity Score: " + score;

document.getElementById("risk").innerText =
"Risk Level: " + risk;

document.getElementById("fill").style.width =
score + "%";

/* ORGAN AGE */
let organAge =
18 +
(smoke * 0.9) +
(alcohol * 0.6) +
(junk * 0.4) +
(soft * 0.3) -
(exercise * 0.05);

organAge = Math.max(18, organAge.toFixed(0));

document.getElementById("organAge").innerText =
organAge + " Years";

/* MONEY WASTE */
let money =
(smoke * 20 * 30) +
(alcohol * 180 * 4) +
(junk * 120 * 4) +
(soft * 40 * 4) +
(snacks * 30 * 4);

document.getElementById("money").innerText =
"₹" + money.toLocaleString() + " / month";

/* DNA DAMAGE */
let dna = "Low";
if(score > 30) dna = "Moderate";
if(score > 60) dna = "High";
if(score > 80) dna = "Critical";

document.getElementById("dna").innerText = dna;

/* AI REPORT */
let report = "Healthy balance maintained.";

if(score > 25){
report = "Mild chemical stress detected from lifestyle habits.";
}
if(score > 50){
report = "Significant toxic exposure affecting body systems.";
}
if(score > 75){
report = "Severe long-term oxidative stress risk predicted.";
}

document.getElementById("report").innerText = report;

/* CHARTS */
makeBar(smoke, alcohol, junk, soft, snacks);
makeRadar(score);

}

/* BAR CHART */
function makeBar(smoke, alcohol, junk, soft, snacks){

if(barChart) barChart.destroy();

barChart = new Chart(
document.getElementById("barChart"),
{
type:'bar',
data:{
labels:[
'Nicotine',
'Ethanol',
'Acrylamide',
'Sugar Load',
'Preservatives'
],
datasets:[{
label:'Chemical Exposure',
data:[
smoke * 6,
alcohol * 5,
junk * 4,
soft * 4,
snacks * 3
],
borderRadius:8
}]
},
options:{
responsive:true,
plugins:{
legend:{display:false}
},
scales:{
y:{
beginAtZero:true
}
}
}
});
}

/* RADAR CHART */
function makeRadar(score){

if(radarChart) radarChart.destroy();

radarChart = new Chart(
document.getElementById("radarChart"),
{
type:'radar',
data:{
labels:[
'Lungs',
'Liver',
'Heart',
'Kidney',
'Brain'
],
datasets:[{
label:'Stress Level',
data:[
score * 0.95,
score * 0.82,
score * 0.74,
score * 0.58,
score * 0.67
],
fill:true
}]
},
options:{
responsive:true,
plugins:{
legend:{display:false}
},
scales:{
r:{
beginAtZero:true,
max:100
}
}
}
});
}