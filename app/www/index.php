<?php
include('php/db_test.php');
?>
<!DOCTYPE html>
<html>
<head>
  <title>PHP Scaffold Project</title>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <link rel="stylesheet" href="css/index.css"/>
  <script src="https://fb.me/react-15.0.2.js"></script>
  <script src="https://fb.me/react-dom-15.0.2.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
  <script src="js/output.js"></script>
</head>
<body>
  <h1>PHP Scaffold Project</h1>
  <pre class="db-test">
<?php
function print_ln($str, $type = 0){
  $str = "> $str";
  $classes = ['', 'error', 'warning', 'suc'];
  $str = "<span class='$classes[$type]'>$str</span>";
  echo "$str\n";
}
test_db();
?>
  </pre>
  <div id="example"></div>
  <script type="text/babel">
    ReactDOM.render(
      <h1>Hello, world!</h1>,
      document.getElementById('example')
    );
  </script>
</body>
</html>
