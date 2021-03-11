<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST['name'];
    $adr = $_POST['adr'];
    $phone = $_POST['tel'];

    $content = $name . ' оставил(а) заявку на бронирование ритуала "' . $adr . '" на ' . $phone . '. Телефон клиента: +';
    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

    $success = mail("admin@whitelotus.com", 'Запрос на бронирование ритуала', $content, $headers);
    if ($success) {
        http_response_code(200);
        echo "Письмо отправлено";
    } else {
        http_response_code(500);
        echo "Письмо не отправлено";
    }


} else {
    http_response_code(403);
    echo "Данный метод запроса не поддерживается сервером";
}