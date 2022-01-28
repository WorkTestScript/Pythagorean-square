function show(outNum, dataObj, elem){
	let num;
	if(typeof outNum === "string") num = outNum.length;
	else num = outNum;
		switch(num){
		case 0:
			elem.textContent = ` ${dataObj.no}`;
			break;
		case 1:
			elem.textContent = ` ${dataObj.one}`;
			break; 
		case 2:
			elem.textContent = ` ${dataObj.two}`;
			break; 
		case 3:
			elem.textContent = ` ${dataObj.three}`;
			break; 
		case 4:
			elem.textContent = ` ${dataObj.four}`;
			break; 
		case 5:
			elem.textContent = ` ${dataObj.five}`;
			break; 
		default:
			elem.textContent = ` ${dataObj.six}`; 
		}
	}
function showDiscription(outNum) {
	const descriptParags = document.querySelectorAll('.description-block span');
	const {
			no, one, two, three, four, five, six, seven, eight, nine,
			row_147, row_258, row_369, col_123, col_456, col_789,
			diag_159, diag_753
			} = outNum; 
	const {
			oneNum, twoNum, threeNum,
	 		fourNum, fiveNum, sixNum,
	 		sevenNum, eightNum, nineNum
	 	  } = dataNumbers;
	const {row147, row258, row369} = dataRow;
	const {col123, col456, col789} = dataCol;
	const {diag159, diag753} = dataDiag;
	const {max159, max753, equals} = maxDiag;
	show(one, oneNum, descriptParags[0]);
	show(two, twoNum, descriptParags[1]);
	show(three, threeNum, descriptParags[2]);
	show(four, fourNum, descriptParags[3]);
	show(five, fiveNum, descriptParags[4]);
	show(six, sixNum, descriptParags[5]);
	show(seven, sevenNum, descriptParags[6]);
	show(eight, eightNum, descriptParags[7]);
	show(nine, nineNum, descriptParags[8]);
	show(row_147, row147, descriptParags[9]);
	show(row_258, row258, descriptParags[10]);
	show(row_369, row369, descriptParags[11]);
	show(col_123, col123, descriptParags[12]);
	show(col_456, col456, descriptParags[13]);
	show(col_789, col789, descriptParags[14]);
	show(diag_159, diag159, descriptParags[15]);
	show(diag_753, diag753, descriptParags[16]);
	if(diag_159 > diag_753) descriptParags[17].textContent = " Духовность";
	else if(diag_159 == diag_753) descriptParags[17].textContent = equals;
	else descriptParags[17].textContent = " Материальая ценность";
}
