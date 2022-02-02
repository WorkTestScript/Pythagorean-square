const selectDay = document.querySelector('.select-day');
const selectMonth = document.querySelector('.select-month');
const selectYear = document.querySelector('.select-year');
const showDate = document.querySelector('.show-date');
const numberLife = document.querySelector('.number-life');
const btnSelect = document.querySelector('.btn-select');
const btn1999 = document.querySelector('.btn-1999');
const btn2000 = document.querySelector('.btn-2000');
const selectLabel = document.querySelector('.select-date h6')
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
}); 
btn2000.addEventListener('click', ()=> {
	createOptions(2000, fullYear);
	selectLabel.textContent = "После 2000";
});
function selectDate(){
	showDate.textContent = (
		`${selectDay.value < 10 ? "0" + selectDay.value : selectDay.value}.
		 ${selectMonth.value < 10 ? "0" + selectMonth.value : selectMonth.value}.
		 ${selectYear.value}`);
	let stringDate = selectDay.value + selectMonth.value + selectYear.value;
	let oneNumber = stringDate.split('').reduce((accum, elem) => +accum + +elem);
	let twoNumber = String(oneNumber).split('').reduce((accum, elem) => +accum + +elem);
	let threeNumber;
	let allNumbers;
	let fourNumber = String(threeNumber).split('').reduce((accum, elem) => +accum + +elem);
  if(selectLabel.textContent === "До 1999") {
		threeNumber = oneNumber - (selectDay.value.split('')[0] * 2);
		allNumbers = stringDate + oneNumber + twoNumber + threeNumber + fourNumber;
	}
  if(selectLabel.textContent === "После 2000") {
  		threeNumber = oneNumber + 19;
  		allNumbers = stringDate + oneNumber + twoNumber + threeNumber + fourNumber + 19;
	} 
		sortNumbersSquared(allNumbers);
}
function sortNumbersSquared(allNumbers){
	const sort = ["","","","","","","","",""];
	allNumbers.split('').map(item => {
		switch(item){
			case '1':
			sort[0] += item;
			break;
			case '4':
			sort[1] += item;
			break;
			case '7':
			sort[2] += item;
			break;
			case '2':
			sort[3] += item;
			break;
			case '5':
			sort[4] += item;
			break;
			case '8':
			sort[5] += item;
			break;
			case '3':
			sort[6] += item;
			break;
			case '6':
			sort[7] += item;
			break;
			case '9':
			sort[8] += item;
			break;
		}
	});
	showNumbersSquared(sort);
	outNumbers(sort);
}
function outNumbers(sort){
	const outNum = {
		one: sort[0],
		two: sort[3],
		three: sort[6],
		four: sort[1],
		five: sort[4],
		six: sort[7],
		seven: sort[2],
		eight: sort[5],
		nine: sort[8],
		row_147: (sort[0] + sort[1] + sort[2]).length,
		row_258: (sort[3] + sort[4] + sort[5]).length,
		row_369: (sort[6] + sort[7] + sort[8]).length,
		col_123: (sort[0] + sort[3] + sort[6]).length,
		col_456: (sort[1] + sort[4] + sort[7]).length,
		col_789: (sort[2] + sort[5] + sort[8]).length,
		diag_159: (sort[0] + sort[4] + sort[8]).length,
		diag_753: (sort[2] + sort[4] + sort[6]).length
	}
	showColAndRowNumbers(outNum);
	showDiscription(outNum);
}

function showNumbersSquared(sort){
	const boxAll = document.querySelectorAll('.square .col p');
	for(let i = 0; i < 9; i++){
		boxAll[i].textContent = sort[i];
	}
}
function showColAndRowNumbers(outNum){
	const elems = document.querySelectorAll('.colrow-list span');
 	const {
			 row_147, row_258, row_369, col_123, col_456, col_789,
			 diag_159, diag_753
		   } = outNum; 
		elems[0].textContent = row_147;
		elems[1].textContent = row_258;
		elems[2].textContent = row_369;
		elems[3].textContent = col_123;
		elems[4].textContent = col_456;
		elems[5].textContent = col_789;
		elems[6].textContent = diag_159;
		elems[7].textContent = diag_753;
}

btnSelect.addEventListener('click', selectDate);








