<?php

$team = new team;
$user = new user;

$content=str_replace("{mainblock}", $team->show_team(), $content);

$content=str_replace("{col_fans}", $user->get_info()[1], $content);
$content=str_replace("{col_days}", $user->get_info()[2], $content);
$content=str_replace("{sponsors_cash}", $user->get_info()[3], $content);
$content=str_replace("{cash}", $user->get_info()[4], $content);