<?php
function test_db() {
  print_ln("Database test");
  $database   = $user = $password = "project";
  $host       = "mysql";
  $db = new PDO("mysql:host={$host};dbname={$database};charset=utf8", $user, $password);
  if ($db)
    print_ln("connection successful!",3);
  else
    return print_ln("Database connection error!", 1);
  print_ln("list of database tables:");
  $r = $db->query('show tables');
  if (!$r->rowCount())
    print_ln("no tables!",2);
  while ($row = $r->fetch(PDO::FETCH_NUM)) {
    print_ln("- ".$row[0]);
  }
  print_ln("test end");
}
