
<?php
session_start();
if(isset($_SESSION['views']))
$_SESSION["views"]=$_SESSION['views']+1;
else
$_SESSION['views']=1;
echo "<h1>THIS PAGE HAS BEEN VIEWED".$_SESSION['views']." TIMES";
echo "The program is submitted by Namratha N";
?









<!-- <html>
<head>
<title>My website</title>
</head>
<body bgcolor=teal> <?php
// $handle=fopen("counter.txt", "r");
// if(!$handle){ echo "could not open the file" ; }
// else {
// $counter= ( int ) fread ($handle, 20);
// fclose ($handle) ;
// $counter++;echo "<strong> The Visitor no is ". $counter. " </strong>";
// $handle= fopen("counter.txt", "w");
// fwrite($handle, $counter);
// fclose ($handle);
// }
?> -->
</body> </html> -->






<!-- <?php
// $servername= $_SERVER['SERVER_NAME'];
// $serveraddress= $_SERVER['SERVER_ADDR'];
// $serverprotocol= $_SERVER['SERVER_PROTOCOL'];
// $servernethod= $_SERVER['REQUEST_METHOD'];
// $serversoftware= $_SERVER["SERVER_SOFTWARE"];
// $servergateinterface= $_SERVER['GATEWAY_INTERFACE'];
// $serverreqtime= $_SERVER["REQUEST_TIME"];
// $documentroot= $_SERVER['DOCUMENT_ROOT'];
// $HTTP_ACCEPT_LANGUAGE= $_SERVER["HTTP_ACCEPT_LANGUAGE"];
// $HTTP_CONNECTION= $_SERVER['HTTP_CONNECTION'];
// $HTTP_HOST= $_SERVER['HTTP_HOST'];
// $HTTP_USER_AGENT= $_SERVER['HTTP_USER_AGENT'];
// $REMOTE_ADDR= $_SERVER['REMOTE_ADDR'];
// $REMOTE_PORT= $_SERVER['REMOTE_PORT'];
// $SERVER_ADMIN= $_SERVER['SERVER_ADMIN'];
// $SERVER_PORT= $_SERVER['SERVER_PORT'];
// ?>
<html>
<table style="border:1px solid #CCCCCC; background-color:#F8F8F8; font-family:verdana;
font-size:12px" cellpadding="5" cellspacing="2" <="600px">

<td colspan="4" align="center"><h3>Server Information</h3></td>
</tr> <tr><td>Server Name:<?= $servername; ?></td></tr>
<tr><td>Server Address:<?= $serveraddress; ?></td></tr>
<tr> <td>Server Protocol:<?= $serverprotocol; ?></td></tr>
<tr><td>Server Method:<?= $servernethod; ?></td></tr>
<tr><td>Server Software:<?= $serversoftware; ?></td></tr>
<tr><td>Server Request Time:<?= $serverreqtime; ?></td></tr>
<tr><td>Server Gateway Interface:<?= $servergateinterface; ?></td></tr>
<tr><td>Document Root:<?= $documentroot; ?></td></tr>
<tr><td>HTTP_ACCEPT_LANGUAGE:<?= $HTTP_ACCEPT_LANGUAGE; ?></td></tr>
<tr><td>HTTP_CONNECTION:<?= $HTTP_CONNECTION; ?></td></tr>
<tr><td>HTTP_HOST:<?= $HTTP_HOST; ?></td></tr>
<tr><td>REMOTE_PORT:<?= $REMOTE_PORT; ?></td></tr>
<tr><td>SERVER_PORT:<?= $SERVER_PORT; ?></td></tr>
<tr><td>REMOTE_ADDRESS:<?= $REMOTE_ADDR; ?></td></tr>
<tr><td>SERVER_ADMIN:<?= $SERVER_ADMIN; ?></td></tr>
<tr><td>HTTP_USER_AGENT:<?= $HTTP_USER_AGENT; ?></td></tr>
<tr><td>REMOTE_HOST:<?= $REMOTE_HOST; ?></td></tr>
</html> -->