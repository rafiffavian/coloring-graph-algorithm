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
<body class="hold-transition skin-blue sidebar-mini" style="background-color: #6495ED;">

<ul class="nav nav-tabs">
  <li role="presentation"><a href="index.php">Home</a></li>
  <li role="presentation"><a href="paralel.php">Paralel</a></li>
  <li role="presentation" class="active"><a href="sequential.php">Sequential</a></li>
</ul>
    

<div id="container">
	<h1 style="margin-left:300px;"> Graph coloring Sequential </h1>
	
	<div id="inputDiv">
<br>

<center>Input graph adjacency matrix <br />
		<textarea id="inputTextarea">
0 1 0 0 
1 0 1 1 
0 1 0 1 
0 1 1 0 

		</textarea> <br />
		<button onclick=main() title="Start coloring"> Start Visualisasi </button> 
		<button onclick=location.reload() title="Clear canvas"> Clear canvas </button> <br />
	</div><br>
	<div hidden id="outputDiv" >
		
		Output:
	</div>
	<div id="canvasDiv">
		Graphical output: <br />
		<div class="col-md-7" style="margin-top:50px;margin-left:200px;">
			<canvas id="outputCanvas" width="400px" height="400px"> </canvas>
		</div>
		
	</div>
	
</div>

<!-- jQuery 3 -->
<script src="js/jquery-3.3.1.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/script2.js"></script>  

</body>
</html>
