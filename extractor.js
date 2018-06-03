/**
 * Extractor File
 */

const yearsResult = data.map(x => x.fields.annee + "</br>"),
  unemploymentResult = data.map(x => x.fields.val_de_marne + "%</br>");

/**
 * Retrieving MIN AND MAX Values
 */

const unemploymentResultParsed = data.map(x =>
  x.fields.val_de_marne.replace(",", ".")
);
const min = Math.min(...unemploymentResultParsed),
  max = Math.max(...unemploymentResultParsed); 

/**
 * Join Array
 */

const yearsWellSplited = yearsResult.join(" "),
  unemploymentWellSplited = unemploymentResult.join(" ");

/**
 * Average 
 */

const intArray = unemploymentResultParsed.map(Number)

const reducer = (accumulator, currentValue) => (accumulator + currentValue) / intArray.length;
const average = intArray.reduce(reducer) * 100;

/**
 * Inject Data into the view
 */

let yearsView = document.querySelector("#years"),
  unemploymentView = document.querySelector("#percent"),
  cityView = document.querySelector("#city"),
  maxView = document.querySelector("#max"),
  minView = document.querySelector("#min"),
  averageView = document.querySelector("#average");

city.innerHTML = "Val de Marne";
yearsView.innerHTML = yearsWellSplited;
unemploymentView.innerHTML = unemploymentWellSplited;
maxView.innerHTML = max + "%";
minView.innerHTML = min + "%";
averageView.innerHTML = average.toFixed(1) + "%";

