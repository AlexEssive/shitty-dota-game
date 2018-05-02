<?php
class db{
	var $query='';
	function load_auth_param(){
		$this->host = 'localhost';
		$this->dbname = 'game_db';
		$this->username = 'root';
		$this->password = '';
	}
	
	function connect(){
		$this->load_auth_param();
		$this->db_id = @mysql_connect($this->host, $this->username, $this->password);
		@mysql_select_db($this->dbname, $this->db_id);
		mysql_query ("set character_set_client='cp1251'");
		mysql_query ("set character_set_results='cp1251'");
		mysql_query ("set collation_connection='cp1251_general_ci'");
	}
	
	function close(){
		@mysql_close($this->db_id);
	}
	function num_rows($result){
		$this->n=mysql_numrows($result);
		return $this->n;
	}
	function query($query){
		if(!$this->db_id){ $this->connect();}
		$this->r = mysql_query($query, $this->db_id);
		if (mysql_error()!=""){ print mysql_error()."<br>query=".$query;}
		return $this->r;
	}
	function result($result,$number,$field_name) {
		return mysql_result($result,$number,"$field_name");
   	}
}
?>