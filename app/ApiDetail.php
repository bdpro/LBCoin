<?php
include('Kapi.php');

//API All COIN
//$CoinsUrl='https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=100&convert=EUR';

 //API All COIN de dévelopement

//$CoinsUrl='https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=200&convert=EUR';
//$APIREST = new APIREST($CoinsUrl);
//$CallCoins= $APIREST->call(
//	array ('X-CMC_PRO_API_KEY:'.$ApiKey)
// 
//  
//);



// Api info
$CoinsInfoUrl="https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?symbol=$Isymbol";
// API TEST SANDBOX
//$CoinsInfoUrl="https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/info?symbol=$Isymbol";
$APIREST = new APIREST($CoinsInfoUrl);
$InfoCoin= $APIREST->call(
	array ('X-CMC_PRO_API_KEY:'.$ApiKey2)
 );

// Api Quotes

$CoinUrl="https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=$Isymbol&convert=EUR";

// Api TEST Quotes
//$CoinUrl="https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=$Isymbol&convert=EUR,BTC";
$APIREST = new APIREST($CoinUrl);
$Qcoin= $APIREST->call(
	array ('X-CMC_PRO_API_KEY:'.$ApiKey)
    );

$CoinUrl2="https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=$Isymbol&convert=BTC";

// Api TEST Quotes
//$CoinUrl="https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=$Isymbol&convert=EUR,BTC";
$APIREST = new APIREST($CoinUrl2);
$Qcoin2= $APIREST->call(
	array ('X-CMC_PRO_API_KEY:'.$ApiKey2)
    );


    ?>