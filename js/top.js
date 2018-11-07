     //Récupération json  &  Boucle des données

     for (var key in $Tcoin.data) {

         var coin = $Tcoin.data[key]; {

         }

         //      <--  test resultat dans la  console -->
         //                    console.log(coin);

         //Creation des variables(Optionnel)
         //Rang
         $Tid = coin.id
         $Trank = coin.cmc_rank
         // symbole
         $Tsymbol = coin.symbol

         // Nom
         $Tname = coin.name
         // prix + limite 2 chiffre apres la virgule (toFixed(2))
         $Tprice = coin.quote.EUR.price.toFixed(2)
         $TpriceBtc = coin.quote.BTC.price.toFixed(2)


         //Marketcap + limite 2 chiffre apres la virgule (toFixed(2))
         $Tmcap = coin.quote.EUR.market_cap.toFixed(2)


         // variation 1h + limite 2 chiffre apres la virgule (toFixed(2))
         $Tvariation1h = coin.quote.EUR.percent_change_1h.toFixed(2)
         if ($Tvariation1h < 0) {
             $Tvariation1h = "<font color='#ff3333'>" + $Tvariation1h + " % </font>";
         } else {
             $Tvariation1h = "<font color='#50AF95'>+" + $Tvariation1h + " % </font>";

         }

         $Tlogo = "<img src='https://s2.coinmarketcap.com/static/img/coins/64x64/" + $Tid + ".png' class='img-fluid' alt=" + $Tname + ">"

         $('#Top').append("<div class=' col-md-4 mx-auto'><a title='"+ $Tname + "' href='info.php?id=" + $Tsymbol + "&name=" + $Tname + "' class='cache'><div class='card'><div class='card-body'><div class='container'><div class='row'><div class='col-md-6 mx-auto'><span class='badge badge-pill badge-primary'>Rang " + $Trank + "</span></br>" + $Tlogo + "<h4>" + $Tname + "</h4><h5>(" + $Tsymbol + ")</h5></div><div class='col-md-6 mx-auto'><div class='text-right'><h2>" + $Tprice + " €</h2><h3>" + $TpriceBtc + " BTC </h3><p>" + $Tvariation1h + "</p><h6>Market Cap : €" + $Tmcap + "</h6></div></div></div></div></div></div></a></div>")

     };