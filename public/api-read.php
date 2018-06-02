<?php
error_reporting(0);

$user_id=$_GET["user_id"];
$last_msg_id=0+$_GET["last_msg_id"];

if(file_exists('./workshops.dat')){

  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: GET, POST');
  header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

  $msgs=file('./workshops.dat');
  foreach($msgs as $msg_id => $msg){
    if($msg_id>$last_msg_id)
	     echo $msg;
  }
}

?>
