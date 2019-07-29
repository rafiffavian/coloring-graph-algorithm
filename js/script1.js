function color(vertex, G, color_class) {
	if (vertex >= G.length)
		return false;

	/* Iterate through every color class */
	var get_color = false;
	for (var ccindex = 0; !get_color && ccindex < color_class.length; ++ccindex) {
		/* Checks if we can put the vertex to the given color, or not */
		var found = false;
		for (var i = 0; !found && i < color_class[ccindex].length; ++i) {
			var current_vertex = color_class[ccindex][i];
			if (G[vertex][current_vertex] != 0)
				found = true;
		}
		/* If there is not conflict, we can put it into the ccindex. color */
		if (!found) {
			color_class[ccindex].push(vertex);
			get_color = true;
		}
	}
	/* If we can't color it, we need a new color class */
	if (!get_color) {
		/* Put vertex to color class */
		color_class.push([vertex]);
	}
	return color_class;
}

/** Draws the (colorful) tables of the coloring */
function print_color_class(color_class, colors_list) {
	var HTML = "<table >";
	for (var i = 0; i < color_class.length; ++i) {
		HTML += "<tr bgcolor='" + colors_list[i] + "'> <td>C" + (i + 1) + "</td>";
		console.log(color_class[i]);
		for (var j = 0; j < color_class[i].length; ++j) {
			HTML += "<td>" + (color_class[i][j] + 1) + "</td>";
		}
		HTML += "</tr>";
	}
	HTML += "</table> <br />";
	document.getElementById("outputDiv").innerHTML += HTML;
}



/** Draw vertex to (x,y) koordinates (axis origin = center of the canvas)
 * optional parameter: color of the vertex - if undefined, it's not colorful)
 */
function drawNode(pos_X, pos_Y, canv, color) {
	var radius = 7; //changeable
	var ctx = canv.getContext("2d");
	pos_X += canv.width / 2;
	pos_Y += canv.height / 2;

	ctx.beginPath();
	ctx.arc(pos_X, pos_Y, radius, 0, 2 * Math.PI);
	if (!color) //uncolored vertex
	{
		ctx.strokeStyle = 'black';
		ctx.stroke();
	} else //colorful vertex
	{
		ctx.fillStyle = color;
		ctx.fill();
	}
}

/** Draw a line into the two point with (x,y) coordinates
 *  (axis origin = center of the canvas) */
function lineTo(point1, point2, canv) {
	var ctx = canv.getContext("2d");

	point1[0] += canv.width / 2;
	point1[1] += canv.height / 2;
	point2[0] += canv.width / 2;
	point2[1] += canv.height / 2;

	ctx.beginPath();
	ctx.moveTo(point1[0], point1[1]);
	ctx.lineTo(point2[0], point2[1]);
	ctx.stroke();
}

/** Clear the canvas */
function clearCanvas(canv) {
	var ctx = canv.getContext("2d");
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, canv.width, canv.height);

	document.getElementById("outputDiv").innerHTML = "";
}


/** Draw the initial G graph to the canvas. */
function drawGraph(G, canv) {
	clearCanvas(canv);
	var ctx = canv.getContext("2d");
	//Draw vertices to the unit cirlce
	//i_th vertex position: i_th unit root
	var R = Math.min(canv.width, canv.height) / 2 - 10;
	for (var k = 0; k < G.length; ++k) {
		var p_X = R * Math.cos(2 * Math.PI * k / G.length);
		var p_Y = R * Math.sin(2 * Math.PI * k / G.length);
		//draw nodes
		drawNode(p_X, p_Y, canv);
		//print numbers
		ctx.fillText(k + 1, p_X + canv.width / 2 - 20, p_Y + canv.height / 2);

		//Save the current vertex x,y coordinates
		Pos_X.push(p_X);
		Pos_Y.push(p_Y);
	}
	//Draw egdes of the graph:
	for (var i = 0; i < G.length; ++i) {
		for (var j = 0; j < G.length; ++j) {
			if (G[i][j] != 0) {
				lineTo([Pos_X[i], Pos_Y[i]], [Pos_X[j], Pos_Y[j]], canv);
			}
		}
	}
}

function drawGraph2(G, canv) {
	clearCanvas(canv);
	var ctx2 = canv.getContext("2d");
	//Draw vertices to the unit cirlce
	//i_th vertex position: i_th unit root
	var R2 = Math.min(canv.width, canv.height) / 2 - 10;
	for (var k = 0; k < G.length; ++k) {
		var p_X = R * Math.cos(2 * Math.PI * k / G.length);
		var p_Y = R * Math.sin(2 * Math.PI * k / G.length);
		//draw nodes
		drawNode(p_X, p_Y, canv);
		//print numbers
		ctx.fillText(k + 1, p_X + canv.width / 2 - 20, p_Y + canv.height / 2);

		//Save the current vertex x,y coordinates
		Pos_X.push(p_X);
		Pos_Y.push(p_Y);
	}
	//Draw egdes of the graph:
	for (var i = 0; i < G.length; ++i) {
		for (var j = 0; j < G.length; ++j) {
			if (G[i][j] != 0) {
				lineTo([Pos_X[i], Pos_Y[i]], [Pos_X[j], Pos_Y[j]], canv);
			}
		}
	}
}


/** Draws the graph in the canvas with the given coloring convention */
function color_graph(G, color_class, canv) {
	for (var cc = 0; cc < color_class.length; ++cc) //color classes index
	{
		for (var k = 0; k < G.length; ++k) //vertices of the graph
		{
			if (color_class[cc].indexOf(k) != -1) {
				console.log((k + 1) + " verteix is in " + (cc + 1) + " color class.");
				drawNode(Pos_X[k], Pos_Y[k], canv, colors_list[cc]);
			}
		}
	}
}

function color_graph2(G, color_class, canv) {
	for (var cc = 0; cc < color_class.length; ++cc) //color classes index
	{
		for (var k = 0; k < G.length; ++k) //vertices of the graph
		{
			if (color_class[cc].indexOf(k) != -1) {
				console.log((k + 1) + " verteix is in " + (cc + 1) + " color class.");
				drawNode2(Pos_X[k], Pos_Y[k], canv, colors_list[cc]);
			}
		}
	}
}


/** Get matrix from the raw string data (0-1 table with spaces and new lines) */
function getMatrix(data) {
	data = data.replace(/\s+/g, ''); //eliminate whitespaces
	//if the length is not a square number, it can't be a square matrix
	if (Math.sqrt(data.length) % 1 !== 0) {
		alert("Bad input: It can't be a square matrix.");
		return false;
	}
	var patt = /^[0-1]+$/; //It can contain only 0's and 1's
	if (!patt.test(data)) {
		alert("Bad input: It can't be 0-1 squared matrix");
		return false;
	}
	var size = Math.sqrt(data.length);
	var Mtx = [];
	for (var i = 0; i < size; ++i) {
		Mtx[i] = [];
		for (var j = 0; j < size; ++j) {
			Mtx[i][j] = data[i * size + j];
		}
	}
	console.log(Mtx);
	return Mtx;
}

/** Is it and undirected graph, without loops? */
function isSimpleGraph(G) {
	for (var i = 0; i < G.length; ++i) {
		if (G[i][i] != 0) {
			alert("The graph contains looops!");
			return false;
		}
		for (var j = i; j < G.length; ++j) {
			if (G[i][j] !== G[j][i]) {
				alert("The graph not undirected!");
				return false;
			}
		}
	}
	return true;
}

/** Show the given HTML element in fullscreen mode (if supported) */
function fullScreen(elemID) {
	var elem = document.getElementById(elemID);
	console.log("elem");

	if (elem.requestFullscreen) {
		elem.requestFullscreen();
	} else if (elem.msRequestFullscreen) //IE
	{
		elem.msRequestFullscreen();
	} else if (elem.mozRequestFullScreen) //FIREFOX
	{
		elem.mozRequestFullScreen();
	} else if (elem.webkitRequestFullscreen) //CHROME
	{
		elem.webkitRequestFullscreen();
	} else alert("Fullscreen mode is not supported.");
}


var G = [];
var color_class = []; //color classes
var Pos_X = [],
	Pos_Y = []; //Graph vertices x and y coordinates (in canvas)
var DELAY = 500; //delay time (ms)
var colors_list = ["red", "green", "blue", "brown", "purple", "darkblue", "orange", "navy", "gold", "grey", "black", "pink", "silver", "dark grey", "magenta", "yellow"];

function init() {
	G = [];
	color_class = [];
	Pos_X = [], Pos_Y = [];
}

function main() {
	init();

	//get data
	var data = document.getElementById("inputTextarea").value;
	G = getMatrix(data); //get matrix from data
	//if it's simple graph
	if (isSimpleGraph(G)) {
		var canv = document.getElementById("outputCanvas");
		drawGraph(G, canv);
		//color it step by step with delay
		var vertex = 0;
		var IntVal = setInterval(
			function () {
				color_class = color(vertex, G, color_class);
				print_color_class(color_class, colors_list);
				color_graph(G, color_class, canv);
				++vertex;

				if (vertex > G.length)
					clearInterval(IntVal);
			}, DELAY);
	}

}

function main() {
	init();

	//get data
	var data = document.getElementById("inputTextarea").value;
	G = getMatrix(data); //get matrix from data
	//if it's simple graph
	if (isSimpleGraph(G)) {
		var canv3 = document.getElementById("outputCanvas3");
		drawGraph(G, canv3);

		var canv2 = document.getElementById("outputCanvas2");
		drawGraph(G, canv2);

		var canv = document.getElementById("outputCanvas");
		drawGraph(G, canv);
		//color it step by step with delay

	}
	var vertex = 0;
	var IntVal = setInterval(
		function () {
			color_class = color(vertex, G, color_class);
			print_color_class(color_class, colors_list);
			color_graph(G, color_class, canv);
			++vertex;

			if (vertex > G.length)
				clearInterval(IntVal);
		}, DELAY)

		var vertex = 0;
		var IntVal = setInterval(
			function () {
				color_class = color(vertex, G, color_class);
				print_color_class(color_class, colors_list);
				color_graph(G, color_class, canv3);
				++vertex;
	
				if (vertex > G.length)
					clearInterval(IntVal);
			}, DELAY)
			var vertex = 0;
			var IntVal = setInterval(
				function () {
					color_class = color(vertex, G, color_class);
					print_color_class(color_class, colors_list);
					color_graph(G, color_class, canv2);
					++vertex;
		
					if (vertex > G.length)
						clearInterval(IntVal);
				}, DELAY)


}