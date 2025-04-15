<?php

$from = $_POST['name'];
$email = $_POST['email'];
$msg = $_POST['message'];

$final = 'A message from ' . $from . " at " . $email . " says " . $msg;

mail("james@catplusplus.org.uk", "Message from portfolio website", $final);
