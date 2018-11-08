<?php
include('Kapi.php');

//API All COIN
$CoinsUrl="https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=10&convert=EUR";

 //API All COIN de TEST

//$CoinsUrl='https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=10&convert=EUR,BTC';
$APIREST = new APIREST($CoinsUrl);
$TopCoins= $APIREST->call(
	array ('X-CMC_PRO_API_KEY:'.$ApiKey2)
 
  
);


?>
