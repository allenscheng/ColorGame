<!DOCTYPE html>
<html>
<head>
  <title>Color Game</title>
  <link rel="stylesheet" type="text/css" href="colorgame.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
</head>
<body>
  <h1>
    The
    <br>
     <span id="colorDisplay">RGB</span> 
    <br>
    Color Game
  </h1>

  <div id="stripe">
    <button id="reset">New Colors</button>
    <span id="message"></span>
    <button class="mode">Easy</button>
    <button class="mode selected">Hard</button>
  </div>

  <div id="container">  
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
  </div>

  <script type="text/javascript" src="colorgame.js"></script>
</body>
</html>