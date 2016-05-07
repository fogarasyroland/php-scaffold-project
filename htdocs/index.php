<html>
<head>
  <title>PHP Scaffold Project</title>
</head>
<body>
  <h1>PHP Scaffold Project</h1>
<?php
$database   = $user = $password = "project";
$host       = "mysql";
$connection = new PDO("mysql:host={$host};dbname={$database};charset=utf8", $user, $password);
?>
</body>
</html>
