<?
define('DB_PREFIX', '');

class class_mysql_init
{
	var $link;

	function class_mysql_init($host = 'localhost', $user = 'root', $pass = '', $name = 'database', $charset = 'utf8')
	{
		$this->link = mysqli_connect($host, $user, $pass) or $this->class_on_error(true, mysqli_errno());
		
		mysqli_query($this->link, 'set names '. $charset);
		
		$flag = mysqli_select_db($this->link, $name) or $this->class_on_error(true, mysqli_errno());
  
		return $this->link;
	}

	function class_mysql_kill()
	{
		mysql_close($this->link);
	}

	function class_mysql_read($sql, $mode = 'MYSQLI_ASSOC', $i = 0)
	{
		$result = mysqli_query($this->link, $sql); 
		
		$table = array();
		
		switch(str_replace('MYSQL_', 'MYSQLI_', $mode))
		{
			case 'MYSQLI_NUM':	{while($row = mysqli_fetch_array($result, MYSQLI_NUM))		if($row == null) break; else $table[$i++] = $row; break;}
			case 'MYSQLI_BOTH':	{while($row = mysqli_fetch_array($result, MYSQLI_BOTH))		if($row == null) break; else $table[$i++] = $row; break;}
			case 'MYSQLI_ASSOC':{while($row = mysqli_fetch_array($result, MYSQLI_ASSOC))	if($row == null) break; else $table[$i++] = $row; break;}
			default:			{while($row = mysqli_fetch_array($result, MYSQLI_ASSOC))	if($row == null) break; else $table[$i++] = $row;}
		}

		return $table;
	}
 
	function class_mysql_write($sql)
	{
		$result = mysqli_query($this->link, $sql) or print('Error! Unable write data: '. mysqli_error());
	}

	function class_on_error($show_errno_url = true, $sql_errno)
	{
		//die('Application is serviced '. $sql_errno. ' !!'); //echo '<meta http-equiv="refresh" content="0; url=waiting.php'. $show_errno_url. '">';
	}
}

$db = new class_mysql_init();
?>