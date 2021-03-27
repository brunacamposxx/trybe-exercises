let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let verificador = 1000;
for(let index = 0; index < numbers.length; index += 1){
	if (verificador > numbers[index]) {
		verificador = numbers[index]
	} 	
}
console.log(verificador)