<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<?php
/*
//Petición para recibir lista de usuarios
$service_url = 'http://192.168.1.52:3000/api/categoria';
$curl = curl_init($service_url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
$curl_response = curl_exec($curl);
if ($curl_response === false) {
    $info = curl_getinfo($curl);
    curl_close($curl);
    die('error occured during curl exec. Additioanl info: ' . var_export($info));
}
curl_close($curl);
$decoded = json_decode($curl_response);
if (isset($decoded->response->status) && $decoded->response->status == 'ERROR') {
    die('Ha ocurrido un error: ' . $decoded->response->errormessage);
}
 echo 'Se ha realizado la peticion!';
 $data = json_decode($curl_response, true);
 $datas = curl_exec($data);
  print_r($data);
var_export($decoded->response);
*/
  //Petición para recibir lista de usuarios
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, "http://192.168.62.40:3001/api/persona");
  curl_setopt($ch, CURLOPT_HEADER, false);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  $data = json_decode(curl_exec($ch), true);
  $data = curl_exec($ch);
  print_r($data+"JHOPES");
  curl_close($ch);

?>
