<?php

define('RD', dirname (__FILE__));

require_once(RD . "/lib/team_class.php");
require_once(RD . "/lib/user_class.php");

$theme_htm=RD."/main.html"; if (file_exists("$theme_htm")){$content = file_get_contents($theme_htm);}

require_once(RD . "/event/main.php");

echo $content;