/**
 * Declare Variables
 */

let yearsView = document.querySelector('#years');

let unemploymentView = document.querySelector('#percent');

let maxView = document.querySelector('#max');

let minView = document.querySelector('#min');

let averageView = document.querySelector('#average');

let cityView = document.querySelector('#listOfCity');

/**
 * Creating Options for the Select
 */

const cities = data.map((x) => Object.keys(x.fields));

for (let index = 0; index < cities[0].length; index++) {
   let newOptions = document.createElement('option');
   newOptions.text = cities[0][index];

   if (
      newOptions.text != 'annee' &&
      newOptions.text != 'numero_du_trimestre' &&
      newOptions.text != 'ile_de_france'
   ) {
      cityView.add(newOptions);
   }
}

/**
 * Adding event to select the choice of the user
 */

let choiceSelected;
cityView.addEventListener('change', (e) => {
   choiceSelected = e.currentTarget.value;

   let allInfos = document.querySelectorAll('.hidden');

   /* Displaying Infos */
   allInfos.forEach((item) => {
      item.classList.remove('hidden');
   });

   // Trigger The Main Function //

   main(choiceSelected);
});

/**
 *
 * Declare main Function
 */

let main = (choice) => {
   const yearsResult = data.map((x) => x.fields.annee + '</br>');

   const unemploymentResult = data.map((x) => x.fields[choice] + '%</br>');

   /**
    * Retrieving MIN AND MAX Values
    */

   const unemploymentResultParsed = data.map((x) =>
      x.fields[choice].replace(',', '.')
   );
   const min = Math.min(...unemploymentResultParsed);

   const max = Math.max(...unemploymentResultParsed);

   /**
    * Join Array
    */

   const yearsWellSplited = yearsResult.join(' ');

   const unemploymentWellSplited = unemploymentResult.join(' ');

   /**
    * Average
    */

   const intArray = unemploymentResultParsed.map(Number);

   const reducer = (accumulator, currentValue) =>
      (accumulator + currentValue) / intArray.length;
   const average = intArray.reduce(reducer) * 100;

   /**
    * Inject Data into the view
    */

   yearsView.innerHTML = yearsWellSplited;
   unemploymentView.innerHTML = unemploymentWellSplited;
   maxView.innerHTML = max + '%';
   minView.innerHTML = min + '%';
   averageView.innerHTML = average.toFixed(1) + '%';
};
