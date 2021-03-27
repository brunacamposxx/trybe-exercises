let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


//Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let verificador = 0;
for(let index = 0; index <= numbers.length; index += 1){
	if (verificador < numbers[index]) {
		verificador = numbers[index]
	} 	
}
console.log(verificador)