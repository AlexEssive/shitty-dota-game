<?php

define('RD', dirname (__FILE__));
require_once (RD."/lib/team_class.php"); $team=new team;
require_once (RD."/js/JsHttpRequest/JsHttpRequest.php"); $JsHttpRequest =& new JsHttpRequest("windows-1251");

if ($_REQUEST["w"]=="show_team"){ 
	$GLOBALS['_RESULT'] = array("content"=>$team->show_team());
}