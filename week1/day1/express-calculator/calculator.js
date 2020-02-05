
const express = require("express");
const app = express();
const PORT = 8080;
const {add, subtract, multiply, divide} = require('./lib/operations');

app.get('/:operator/:num1/:num2', function(req,res){
	const operator = req.params.operator
	const num1 = parseInt(req.params.num1);
	const num2 = parseInt(req.params.num2);
	let result;

	switch(operator){
		case "addition":
		result = add(num1, num2);
		break;

		case "subtraction":
		result = subtract(num1, num2);
		break;

		case "multiplication":
		result = multiply(num1, num2);
		break;

		case "division":
		result = divide(num1, num2);
		break;

		default:
		result = "Sorry, please enter a valid operator!"
	}



	res.json(result);
});

app.get("/", function(req, res){
	res.send("hello! please type some math y'all")
});

//listener
app.listen(PORT, function(){
	console.log("App listening on PORT:" + PORT);
});
