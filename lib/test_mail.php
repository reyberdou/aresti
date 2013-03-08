<?php
	require 'class.phpmailer.php';

	$mail = new PHPMailer;

	$mail->IsSMTP();                                      // Set mailer to use SMTP
	$mail->SMTPDebug = 1;
	$mail->Host = 'smtp.gmail.com';  // Specify main and backup server
	$mail->Port = 465;
	$mail->SMTPAuth = true;                               // Enable SMTP authentication
	$mail->Username = 'mail';           // SMTP username
	$mail->Password = 'password';                       // SMTP password
	$mail->SMTPSecure = 'ssl';                            // Enable encryption, 'ssl' also accepted

	$mail->From = 'mail';
	$mail->FromName = 'person';
	$mail->AddAddress('mail', 'name');   // Add a recipient

	$mail->WordWrap = 50;                                 // Set word wrap to 50 characters

	$mail->IsHTML(true);                                  // Set email format to HTML

	$mail->Subject = 'Here is the subject';
	$mail->Body    = 'This is the HTML message body <b>in bold!</b>';
	$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

	if(!$mail->Send()) {
	   echo 'Message could not be sent.';
	   echo 'Mailer Error: ' . $mail->ErrorInfo;
	   exit;
	}

	echo 'Message has been sent';
?>