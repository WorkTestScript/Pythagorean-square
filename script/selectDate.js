const selectDay = document.querySelector('.select-day');
const selectMonth = document.querySelector('.select-month');
const selectYear = document.querySelector('.select-year');
const showDate = document.querySelector('.show-date');
const numberLife = document.querySelector('.number-life');
const btn1999 = document.querySelector('.btn-1999');
const btn2000 = document.querySelector('.btn-2000');
const selectLabel = document.querySelector('.select-date h6')
const section = document.querySelector('section');
const fullYear = (new Date()).getFullYear();

function createOptions(firstYear, lastYear) {
	let resultDay = '';
	let resultMonth = '';
	let resultYear = '';
	for(let i = 1; i <= 31; i++){
		resultDay += `<option value="${i}">${i}</option>`;
	}
	for(let i = 1; i <= 12; i++){
		resultMonth += `<option value="${i}">${i}</option>`;
	}
	for(let i = firstYear; i <= lastYear; i++){
		resultYear += `<option value="${i}">${i}</option>`;
	}
	selectDay.innerHTML = resultDay;
	selectMonth.innerHTML = resultMonth;
	selectYear.innerHTML = resultYear;
}
    btn1999.addEventListener('click', ()=> {
	    createOptions(1900, 1999);
	    selectLabel.textContent = "До 1999";
		section.classList.remove('hidden');
    }); 
    btn2000.addEventListener('click', ()=> {
	    createOptions(2000, fullYear);
	    selectLabel.textContent = "После 2000";
		section.classList.remove('hidden');
    });
function selectDate(){
	showDate.textContent = (
		`${selectDay.value < 10 ? "0" + selectDay.value : selectDay.value}.
		 ${selectMonth.value < 10 ? "0" + selectMonth.value : selectMonth.value}.
		 ${selectYear.value}`
         );
	let stringDate = selectDay.value + selectMonth.value + selectYear.value;
	let oneNumber = stringDate.split('').reduce((accum, elem) => +accum + +elem);
	let twoNumber = String(oneNumber).split('').reduce((accum, elem) => +accum + +elem);
	let threeNumber;
	let fourNumber; 
	let allNumbers;
  if(selectLabel.textContent === "До 1999") {
		threeNumber = oneNumber - (selectDay.value.split('')[0] * 2);
		fourNumber = String(threeNumber).split('').reduce((accum, elem) => +accum + +elem);
		allNumbers = stringDate + oneNumber + twoNumber + threeNumber + fourNumber;
	}
  if(selectLabel.textContent === "После 2000") {
  		threeNumber = oneNumber + 19;
		fourNumber = String(threeNumber).split('').reduce((accum, elem) => +accum + +elem);
  		allNumbers = stringDate + oneNumber + twoNumber + threeNumber + fourNumber + 19;
	} 
		sortNumbersSquared(allNumbers);
}