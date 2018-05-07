<?php

class team {

function show_team() {
	$theme_htm=RD."/tpl/team.html"; if (file_exists("$theme_htm")){$form = file_get_contents($theme_htm);}
	list($p1,$p2,$p3,$p4,$p5)=$this->get_team();
	$arr = array($p1,$p2,$p3,$p4,$p5);

	foreach ($arr as $value) {
		list($name,$pos,$year,$about,$img)=$this->get_player_info($value);
		$list .="<div class='player_card'>
			<img src='/img/players/$img'><br>
			<span>Name: $name</span><br>
			<span>Pos: $pos</span><br>
			<span>Bday: $year</span><br>
			<span>About: $about</span>
		</div>";
	}
	
	$form=str_replace("{players}", $list, $form);
	return $form;
}
	
function get_team() {
	$p1=1; $p2=2; $p3=3; $p4=4; $p5=5;
	return array($p1,$p2,$p3,$p4,$p5);
}

function get_player_info($player_id) {
	switch ($player_id) {
		case 1: {$name='dendi'; $pos = 2; $year = 28; $about = 'always win middle'; $img = 'dendi.png'; break;}
		case 2: {$name='dendi'; $pos = 2; $year = 28; $about = 'best playa'; $img = 'dendi.png'; break;}
		case 3: {$name='dendi'; $pos = 2; $year = 28; $about = 'always win middle'; $img = 'dendi.png'; break;}
		case 4: {$name='dendi'; $pos = 2; $year = 28; $about = 'best tinker EU'; $img = 'dendi.png'; break;}
		case 5: {$name='dendi'; $pos = 2; $year = 28; $about = 'always win middle'; $img = 'dendi.png'; break;}
		default: {return false; break;}
	}
	return array($name,$pos,$year,$about,$img);
}

}