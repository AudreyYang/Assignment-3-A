
//Set up the drawing environment here

var margin = {t:20,r:20,b:20,l:20};
var width = document.getElementById('plot').clientWidth-margin.l-margin.r,
	height = document.getElementById('plot').clientHeight-margin.t-margin.b;

var plot = d3.select('.canvas')
	.append('svg')
	.attr('width',width+margin.l+margin.r)
	.attr('height',height+margin.t+margin.b)
	.append('g')
	.attr('class','plot')
	//.attr('transform','translate()') --> complete this line here
	.attr('transform','translate('+margin.l+','+margin.t+')');



//Start with 100 symbols
var numOfSymbols = 100;

//Create an array, generate objects to push into the array
//Attributes of these symbols are
// --> x position: between 0 and width
// --> y position: betewen 0 and height
// --> size: between 0 and 100x100
// --> type: circle or square
// --> color
//With the array you've created and populated, draw circles to represent these symbols

var Symbols = [];
function runRandomSymbols(){
	for (var i = 0; i < numOfSymbols; i++) {
		var symbol = {
			x: Math.random()*width,
			y: Math.random()*height,
			size: Math.random()*50,
			type: Math.round(Math.random()),

		};
		Symbols.push(symbol);
	}
}
runRandomSymbols();

console.log(Symbols);
Symbols.forEach(DrawPic);
function DrawPic(symbol){
	console.log(symbol);
	//decide draw what shape, and draw
	if(symbol.type==0){
		plot
		.append('circle')
		.attr('cx',symbol.x)
		.attr('cy',symbol.y)
		.attr('r',symbol.size)
		.style('fill', function() {return "hsl(" +Math.random()*120+",80%,80%)"})
	}
	else{
		plot
			.append('rect')
			.attr('x',symbol.x)
			.attr('y',symbol.y)
			.attr('width',symbol.size)
			.attr('height',symbol.size)
			.style('fill',function() {return "hsl(" +Math.random()*120+",80%,80%)"})
	}
}



