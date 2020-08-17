let nArr = []; // name array
let pArr = []; // price array

function addToCart(pName, pPrice) {
	nArr.push(pName);
	pArr.push(pPrice);
	
}


function printCart() {
	let i;
	let toatl = 0;
	for (i =0; i < pArr.length; i++) {
		total += pArr[i];
	}
	
	let finalCart = document.getElementById("finalCart"");
	
	finalCart.innerHTML="totatl: " + total;

	
}