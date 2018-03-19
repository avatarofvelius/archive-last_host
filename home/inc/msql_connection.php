<i>System Messages  //:</i>
<div>
 <hr/>
 
<?php
$servername = "localhost";
$username = "aov_mra";
$password = "m00nGlow";
$ip = $_SERVER['REMOTE_ADDR'];

$guest = '';

// Create connection
 $conn = mysqli_connect($servername, $username, $password);
 
 mysqli_select_db($conn,"aov_home");
// Check connection
 if (!$conn) {
     die("Connection failed: " . mysqli_connect_error());
}
echo '<span>Connected successfully.</span><br/>';

echo '<span>Database loaded.</span><br/>';


	
// IP Log + modify INSERT to only add if IP is new
$sql = "INSERT INTO home (ip)
 VALUES ('$ip')";

if (mysqli_query($conn, $sql)) {
	echo '<span>Guest created successfully.</span><br/>';
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

echo '<span>Connection Closed.</span><hr/>';

mysqli_close($conn);

 ?> 
 
</div>