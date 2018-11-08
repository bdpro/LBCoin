<?php
include('Kapi.php');

//API All COIN
$CoinsUrl='https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=200&convert=EUR';

 //API All COIN de dévelopement

//$CoinsUrl='https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=400&convert=EUR';
$APIREST = new APIREST($CoinsUrl);
$CallCoins= $APIREST->call(
	array ('X-CMC_PRO_API_KEY:'.$ApiKey)
 
  
);
?>