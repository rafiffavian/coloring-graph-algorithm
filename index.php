<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Algoritma</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
  <!-- Bootstrap 3.3.7 -->
  <link href="css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body class="hold-transition skin-blue sidebar-mini">
    

<div id="container">
	<h1 style="margin-left:300px;"> Graph coloring </h1>
	
	<div id="inputDiv">
<br>

<center>Input graph adjacency matrix <br />
		<textarea id="inputTextarea">
0 1 0 0 
1 0 1 1 
0 1 0 1 
0 1 1 0 

		</textarea> <br />
		<button onclick=main() title="Start coloring"> Let's color </button> 
		<button onclick=location.reload() title="Clear canvas"> Clear canvas </button> <br />
	</div>
	<div hidden id="outputDiv" >
		
		Output:
	</div>
	<div id="canvasDiv">
		Graphical output: <br />
		<div class="kolom">
		<canvas id="outputCanvas" width="100px" height="180px"> </canvas> 
		<canvas id="outputCanvas2" width="100px" height="180px"> </canvas> 
		<canvas id="outputCanvas3" width="100px" height="180px"> </canvas> 
		</div>
		
	</div>
	
</div>

<!-- jQuery 3 -->
<script src="js/jquery-3.3.1.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/script1.js"></script>  

</body>
</html>
