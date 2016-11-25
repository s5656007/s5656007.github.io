<?php


$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$text = trim($_POST["text"]);
if((isset($_POST["name"])&&$_POST["name"]!="")&&(isset($_POST["phone"])&&$_POST["phone"]!="")){
$url = 'http://rusdropshipping.ru/api-order';
$post['token'] = 'dnxmndqnl9tdr095tq3x1dl6awnazrnm41pje1iy4zx3xsxg9p5ztfut39trp74j';
$request = array(
    'name' => $name,
    'phone' => $phone,
    'call' => '1',
    'delivery' => 'Почтой России',
    'address' => 'none', //необязательный параметр
    'state' => 'none', //необязательный параметр
    'city' => 'none',  //необязательный параметр
    'comment' => $text, //необязательный параметр
    'delivery_price' => '290',
    'shop_link' => 'http://black-masck.ru/',
    'goods' => array(
        array(
            'articul' => '37802600',
            'price' => '999',
            'count' => '1'
        )
        
    )
);


$post['request'] = json_encode($request);
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL,$url);
curl_setopt($ch, CURLOPT_FAILONERROR, 1);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $post);
$result = curl_exec($ch);
curl_close($ch);
echo $post['request'] ;}