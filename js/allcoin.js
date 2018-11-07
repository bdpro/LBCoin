   
//            Tries et menu tableau avec datatables.net
     $(document).ready(function () {
         $('#lcoin').DataTable({
             "lengthMenu": [[10, 50, 100, 200, -1], [10, 50, 100, 200, "Tous"]],
             "language": {
                 "lengthMenu": "Afficher _MENU_ Pièces",
                 "search": "Recherche un coin:",
                 "paginate": {
                     "first": "Première",
                     "last": "Dernière",
                     "next": "Suivante",
                     "previous": "Précédente",
                 }
             }

         });
     });


//Récupération json  &  Boucle des données
     $i = 0;
     for (var key in $Allcoin.data) {

         var coin = $Allcoin.data[key]; {
             //compte le nombre de coin dans la boucle    
             $i++;
         }
         
         

         //      <--  test resultat dans la  console -->
         //                    console.log(coin);

         //Creation des variables(Optionnel)
         //Rang
         $Rank = coin.cmc_rank
         // symbole
         $Symbol = coin.symbol
         // ID
         $Id = coin.id
         // Nom
         $Name = coin.name
         // prix + limite 2 chiffre apres la virgule (toFixed(2))
         $Price = coin.quote.EUR.price.toFixed(2)
         //volume total en circulation
         $Supply = coin.circulating_supply.toFixed()
         //Marketcap + limite 2 chiffre apres la virgule (toFixed(2))
         $Mcap = coin.quote.EUR.market_cap.toFixed(2)
         //Volume 24h
         $Vol24h = coin.quote.EUR.volume_24h.toFixed(2)
         // variation 1h + limite 2 chiffre apres la virgule (toFixed(2))
         $Variation1h = coin.quote.EUR.percent_change_1h.toFixed(2)
         //si $variation est negatif afficher en rouge sinon afficher en vert
         if ($Variation1h < 0) {
             $Variation1h = "<font color='#ff3333'>" + $Variation1h + " % </font>";
         } else {
             $Variation1h = "<font color='#50AF95'>+" + $Variation1h + " % </font>";

         }
         // variation  + limite 2 chiffre apres la virgule (toFixed(2))
         $Variation24h = coin.quote.EUR.percent_change_24h.toFixed(2)
         //si $variation est negatif afficher en rouge sinon afficher en vert
         if ($Variation24h < 0) {
             $Variation24h = "<font color='#ff3333'>" + $Variation24h + " % </font>";
         } else {
             $Variation24h = "<font color='#50AF95'>+" + $Variation24h + " % </font>";

         }
         // variation 7d  + limite 2 chiffre apres la virgule (toFixed(2))
         $Variation7d = coin.quote.EUR.percent_change_7d.toFixed(2)
         //si $variation est negatif afficher en rouge sinon afficher en vert
         if ($Variation7d < 0) {
             $Variation7d = "<font color='#ff3333'>" + $Variation7d + " % </font>";
         } else {
             $Variation7d = "<font color='#50AF95'>+" + $Variation7d + " % </font>";

         }

         // Logo
         $Logo = "<img src='https://s2.coinmarketcap.com/static/img/coins/16x16/" + $Id + ".png' class='img-fluid' alt=" + $Name + " style=' margin-right: 12px;'>"
         
         // tableau html
         $('#cour').append(
             "<tr><td>" +
             $Rank + "</td><td><a title='"+ $Name + "' href='info.php?id=" + $Symbol + "&name=" + $Name + "'> " +
             $Logo + "<font style='Font-Weight: Bold;' size='4'>" +
             $Symbol + "</font></br>" +
             $Name + "</a></td><td class='Ptablbtc'>" +
             $Price + " €</td><td>" +
             $Mcap + " €</td><td>" +
             $Supply + " " +
             $Symbol + "</td><td>" +
             $Vol24h + " €</td><td>" +
             $Variation1h + "</td><td>" +
             $Variation24h + "</td><td>" +
             $Variation7d + "</td><td><a title='"+ $Name + "' href='info.php?id=" +
             $Symbol + "&name=" + $Name + "'><i class='fas fa-chart-line fa-2x '></i></a></td></tr>")

     };
$('#NbrCoin').append($i);

var cssRule =
    "color: rgb(249, 162, 34);" +
    "font-size: 60px;" +
    "font-weight: bold;" +
    "text-shadow: 1px 1px 5px rgb(249, 162, 34);" +
    "filter: dropshadow(color=rgb(249, 162, 34), offx=1, offy=1);";
console.log("%cATTENTION", cssRule);
console.log("%cLa curiosité est souvent une qualité, mais peut être un défaut. Parfois, ce que l on découvre ne nous apporte que des maux.","color: blue; font-size:30px;");




     

    