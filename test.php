<?php 
$name = trim($_POST['name']);
$phone = trim($_POST['phone']);
$text = trim($_POST['text']);
?>
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<form action="" id="hidden_form" id="dropshipping-api-form-body" class="col-md-4" method="post">
		<h2>CВЯЗАТЬСЯ С НАМИ</h2>
		<label>
			<span>Ваше имя:</span>
			<input type="text" name="name" required="">
		</label>
		<label>
			<span>Ваш телефон:</span>
			<input type="text" name="phone" required="">
		</label>
		<label>
			<span>Комментарий:</span>
			<textarea name="text"  cols="30" rows="10"></textarea>
		</label>
		<div class="b_wrap">
			<button class="button_form">отправить заявку</button>
		</div>
	</form></body>
	<script src="libs/jquery/jquery-1.11.2.min.js"></script>
	<script type="text/javascript">
	$("#hidden_form").submit(function() { //устанавливаем событие отправки для формы с id=form
            var form_data = $(this).serialize(); //собераем все данные из формы
            $.ajax({
            type: "POST", //Метод отправки
            url: "test.php", //путь до php фаила отправителя
            data: form_data,
            success: function() {
                   //код в этом блоке выполняется при успешной отправке сообщения
                   alert("Ваше сообщение отпрвлено!");
            }
    });
        });
	</script>
</html>


<?
$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$text = trim($_POST["text"]);
echo $text;
$recepient = "saha5656007@mail.ru";
$sitename = "Название сайта";



$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name \nТелефон: $phone \nТекст: $text";

/*if((isset($_POST["name"])&&$_POST["name"]!="")&&(isset($_POST["phone"])&&$_POST["phone"]!="")){
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");}
mail("saha5656007@mail.ru","My Subject","$name\r\n$phone\r\n$text");*/
if((isset($_POST["name"])&&$_POST["name"]!="")&&(isset($_POST["phone"])&&$_POST["phone"]!="")){
$url = 'http://rusdropshipping.ru/api-order';
$post['token'] = 'dnxmndqnl9tdr095tq3x1dl6awnazrnm41pje1iy4zx3xsxg9p5ztfut39trp74j';
$request = array(
    'name' => $name,
    'phone' => $phone,
    'call' => '2',
    'delivery' => 'Почтой России',
    'address' => 'Disneyland', //необязательный параметр
    'state' => 'Marne-la-Vallée', //необязательный параметр
    'city' => 'Paris',  //необязательный параметр
    'comment' => 'Комментарий', //необязательный параметр
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