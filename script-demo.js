console.log("loading page")

var sum = 0;

function addUp(a,b){
	sum = a+b;


	if( sum % 2 == 0 ){
		console.log("even");
	} else {
		console.log("odd");
	}
}

console.log(sum);

addUp(5,5)

console.log(sum);

addUp(2,3)

console.log(sum);
