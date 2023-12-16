
function addNums (number1: number, number2: number): number {
	const sum =  number1 + number2;
	return sum;
}

function getNumber(id: string): number {
	let input = document.getElementById(id) as HTMLInputElement;
	return +input.value;
}

document.getElementById('add-btn')?.addEventListener('click', function() {
	const num1 = getNumber('num1');
	const num2 = getNumber('num2');
	const result = addNums(num1, num2);
	const resultDom = document.getElementById('result') as HTMLElement;
	resultDom.innerText = String(result);
});

