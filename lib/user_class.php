<?php 

class user {

function get_user() {
	session_start();
	return $_SESSION['user'];
}
	
function get_info() {
	$name = "user";
	$fans = 10;
	$days = 1;
	$cash = 1000;
	$sp_cash = 100;
	return array($name,$fans,$days,$cash,$sp_cash);
}

}