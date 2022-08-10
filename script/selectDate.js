const inputDate = document.querySelector('#date');
const numberLife = document.querySelector('.number-life');
const selectDateLabel = document.querySelector('.date-label');
const start = document.querySelector('.start');
const fullYear = (new Date()).getFullYear();
inputDate.onmousedown = inputDate.onselectstart = function() {
	return false;
  };
function selectDate(e){
	const value = e.target.value.split('-'); 
	const year = value[0];
	const month = String(parseInt(value[1], 10));
	const day = String(parseInt(value[2], 10));
	let stringDate = day + month + year;
	let oneNumber = stringDate.split('').reduce((accum, elem) => +accum + +elem);
	let twoNumber = String(oneNumber).split('').reduce((accum, elem) => +accum + +elem);
	let threeNumber;
	let fourNumber; 
	let allNumbers;
  if(year <= 1999) {
		threeNumber = oneNumber - (day.split('')[0] * 2);
		fourNumber = String(threeNumber).split('').reduce((accum, elem) => +accum + +elem);
		allNumbers = stringDate + oneNumber + twoNumber + threeNumber + fourNumber;
	}
  if(year >= 2000) {
  		threeNumber = oneNumber + 19;
		fourNumber = String(threeNumber).split('').reduce((accum, elem) => +accum + +elem);
  		allNumbers = stringDate + oneNumber + twoNumber + threeNumber + fourNumber + 19;
	} 
		sortNumbersSquared(allNumbers);
		main.classList.remove('hidden');
		selectDateLabel.classList.add('hidden');
}
inputDate.addEventListener('change', selectDate);