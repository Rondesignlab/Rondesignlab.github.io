<?php
require_once('config.php');

if(isset($_POST['email'])) {

    $error_text = 'Oops! Sorry! But something happened with our server.';
    $success_text = 'Thank you! Your message has been sent successfully';

    function send_request($data, $error = false){
        $return = array(
            'error' => $error,
            'message' => $data
        );
        echo json_encode($return);
        die();
    }

    function clean_string($string) {
        $bad = array("content-type", "bcc:", "to:", "cc:", "href");
        return str_replace($bad, "", $string);
    }

    if(!isset($_POST['name']) ||
        !isset($_POST['email']) ||
        !isset($_POST['message'])) {
        send_request($error_text, true);
    }

    $name = $_POST['name']; // required
    $email_from = $_POST['email']; // required
    $message = $_POST['message']; // required
    $subject = 'Message from site form';

    $email_message = "Form details below.\n\n";
    $email_message .= "Name: ".clean_string($name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Comment: ".clean_string($message)."\n";

    $headers = 'From: '.$email_from."\r\n".
    'Reply-To: '.$email_from."\r\n" .
    'X-Mailer: PHP/' . phpversion();
    $return_value = @mail($email_to, $email_subject, $email_message, $headers);
    if($return_value){
        send_request($success_text);
    } else {
        send_request($error_text);
    }

}
?>