<?php
include('connectToDatabase.php');

echo $sql = "INSERT INTO table ('content') VALUES ('". $_GET['content']. "')";

$db->class_mysql_write($sql);

exit(1);
?>