import add from './add';
import multiply from './multiply';

(function bootstrap(){
	const totalAdd = add(5, 8);
	const totalMultiply = multiply(5, 8);

	const multiplyResultsElement = document.createElement('div');
	multiplyResultsElement.appendChild(document.createTextNode(`Product of 5 and 8 = ${totalMultiply}`));

	const addResultsElement= document.createElement('div');
	addResultsElement.appendChild(document.createTextNode(`Sum of 5 and 8 = ${totalAdd}`));

	// add the results to the page
	document.body.appendChild(multiplyResultsElement);
	document.body.appendChild(addResultsElement);
})();


