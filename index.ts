// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
let max = (array, max = array[-Infinity]) =>
{
 for(let i=0; i <array.length; i++){
    if(max < array[i]) max = array[i];
  }
  return max;
};

const arry =[
  {studentName: "Portia", studentSurname: "Mashaba", Age: 28},
  {studentName: "Xolisile", studentSurname: "Ubisi", Age: 21},
  {studentName: "Khuliso", studentSurname: "Smith", Age: 30},
  {studentName: "Khuliso", studentSurname: "Smith", Age: 30}
];
console.log((max(arry).studentName + " " + max(arry).studentSurname + " " + max(arry).Age));









