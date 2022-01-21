const selectDay = document.querySelector('.select-day');
const selectMonth = document.querySelector('.select-month');
const selectYear = document.querySelector('.select-year');
const showDate = document.querySelector('.show-date');
const numberLife = document.querySelector('.number-life');
const btnSelect = document.querySelector('.btn-select');
const fullYear = (new Date()).getFullYear();
{
	let resultDay = '';
	let resultMonth = '';
	let resultYear = '';
	for(let i = 1; i <= 31; i++){
		resultDay += `<option value="${i}">${i}</option>`;
	}
	for(let i = 1; i <= 12; i++){
		resultMonth += `<option value="${i}">${i}</option>`;
	}
	for(let i = 1900; i <= fullYear; i++){
		resultYear += `<option value="${i}">${i}</option>`;
	}
	selectDay.innerHTML = resultDay;
	selectMonth.innerHTML = resultMonth;
	selectYear.innerHTML = resultYear;
}
function selectDate(){
	showDate.textContent = (
		`${selectDay.value < 10 ? "0" + selectDay.value : selectDay.value}.
		 ${selectMonth.value < 10 ? "0" + selectMonth.value : selectMonth.value}.
		 ${selectYear.value}`);
	let stringDate = selectDay.value + selectMonth.value + selectYear.value;
	let oneNumber = stringDate.split('').reduce((accum, elem) => +accum + +elem);
	let twoNumber = String(oneNumber).split('').reduce((accum, elem) => +accum + +elem);
	let threeNumber = oneNumber - (selectDay.value.split('')[0] * 2);
	let fourNumber = String(threeNumber).split('').reduce((accum, elem) => +accum + +elem);
	let allNumber = stringDate + oneNumber + twoNumber + threeNumber + fourNumber;
		numberLife.textContent = `Number life ${twoNumber}`;
		numberSort(allNumber);
}
function numberSort(allNumber){
	const sort = ["","","","","","","","",""];
	allNumber.split('').map(item => {
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
	showNumber(sort);
}
function showNumber(sort){
	const boxAll = document.querySelectorAll('.square div.col p');
	for(let i = 0; i < 9; i++){
		boxAll[i].textContent = sort[i];
	}
	numberRowEndCol(sort)
}
function numberRowEndCol(sort){
	const row147 = (sort[0] + sort[1] + sort[2]).length;
	const row258 = (sort[3] + sort[4] + sort[5]).length;
	const row369 = (sort[6] + sort[7] + sort[8]).length;
	const col_123 = (sort[0] + sort[3] + sort[6]).length;
	const col_456 = (sort[1] + sort[4] + sort[7]).length;
	const col_789 = (sort[2] + sort[5] + sort[8]).length;
	const diag159 = (sort[0] + sort[4] + sort[8]).length;
	const diag753 = (sort[2] + sort[4] + sort[6]).length;
	const outNumbers = {
		one: sort[0],
		two: sort[3],
		three: sort[6],
		four: sort[1],
		five: sort[4],
		six: sort[7],
		seven: sort[2],
		nine: sort[8],
		row147: row147,
		row258: row258,
		row369: row369,
		col_123: col_123,
		col_456: col_456,
		col_789: col_789,
		diag159: diag159,
		diag753: diag753,
	}
	console.log(outNumbers);
}
btnSelect.addEventListener('click', selectDate);







