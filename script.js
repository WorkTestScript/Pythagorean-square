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
function pushShowDate(){
	showDate.textContent = (
		`${selectDay.value < 10 ? "0" + selectDay.value : selectDay.value}.
		 ${selectMonth.value < 10 ? "0" + selectMonth.value : selectMonth.value}.
		 ${selectYear.value}`);
	let sumDate = selectDay.value + selectMonth.value + selectYear.value;
	let oneNum = sumDate.split('').reduce((accum, elem) => +accum + +elem);
	let sumOneNum = String(oneNum).split('').reduce((accum, elem) => +accum + +elem);
		numberLife.textContent = `Number life ${sumOneNum}` ;
}
btnSelect.addEventListener('click', pushShowDate);

// https://matrizasudba.com/blog/numerologiya-pifagora-v-povsednevnoj-zhizni?gclid=CjwKCAiAlfqOBhAeEiwAYi43F_X2TQj7JvTnWTmk6EKNsCwgfCi1Bjfx3Pq9f07o9srtLWP52pHsMRoCHeAQAvD_BwE





