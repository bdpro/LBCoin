// Récupération json info et quotes avec $info & $Qcoin + ajout de data.key       
for ($key in $Info.data);
$Dinfo = $Info.data[$key];

for ($key in $Qcoin.data);
$Dcoin = $Qcoin.data[$key];

//Creatoin des variables de l API info

$Dname = $Dinfo.name;
$Dlogo = "<img src='" + $Dinfo.logo + "' class='img-fluid ilogo' alt='" + $Dname + "'>";
$Dsymb = $Dinfo.symbol;
$Dtag = $Dinfo.tags;
$Ddajout = $Dinfo.date_added;
$Dcat = $Dinfo.category;
//URL NE PAS AFFICHER SI VIDE
$Dweb = $Dinfo.urls.website[0]
$LDweb = "<i class='fa fa-link text-primary '></i><a  target='_blank' href='" + $Dweb + "'> Site Web</a></br>"
if ($Dweb == 0) {
    $LDweb = ""
} else {
    $LDweb = $LDweb
}

$Dtwitter = $Dinfo.urls.twitter;
$LDtwitter = "<i class='fab fa-twitter text-primary '></i><a target='_blank'  href='" + $Dtwitter + "'> Twitter</a></br>"
if ($Dtwitter == 0) {
    $LDtwitter = "";
} else {
    $LDtwitter = $LDtwitter
}

$Dreddit = $Dinfo.urls.reddit;
$LDreddit = "<i class='fab fa-reddit-alien text-primary '></i><a target='_blank'  href='" + $Dreddit + "'> Reddit</a></br>"
if ($Dreddit == 0) {
    $LDreddit = "";
} else {
    $LDreddit = $LDreddit
}


$Dforum = $Dinfo.urls.message_board;
$LDforum = "<i class='fas fa-bullhorn text-primary '></i><a target='_blank' href='" + $Dforum + "'> Anonce</a></br>"
if ($Dforum == 0) {
    $LDforum = "";
} else {
    $LDforum = $LDforum
}

$Dchat = $Dinfo.urls.chat;
$LDchat = "<i class='fas fa-comments text-primary '></i><a target='_blank' href='" + $Dchat + "'> Chat</a></br>"
if ($Dchat == 0) {
    $LDchat = "";
} else {
    $LDchat = $LDchat
}

$Dexplor = $Dinfo.urls.explorer[0];
$LDexplor = "<i class='fas fa-search text-primary '></i><a target='_blank' href='" + $Dexplor + "'> Block Explorer</a></br>"
if ($Dexplor == 0) {
    $LDexplor = "";
} else {
    $LDexplor = $LDexplor
}

$Dsource = $Dinfo.urls.source_code;
$LDsource = "<i class='fas fa-code text-primary '></i><a target='_blank' href='" + $Dsource + "'> Code</a></br>"
if ($Dsource == 0) {
    $LDsource = "";
} else {
    $LDsource = $LDsource
}

//Creatoin des variables de l API Quotes

//Rang
$Dqrank = $Dcoin.cmc_rank
// symbole
$Dqsymbol = $Dcoin.symbol
// ID
$Dqid = $Dcoin.id
// Nom
$Dqname = $Dcoin.name
//prix en BTC
$Dqpricebtc = $Dcoin.quote.BTC.price
// prix eur + limite 2 chiffre apres la virgule (toFixed(2))
$Dqprice = $Dcoin.quote.EUR.price.toFixed(2)
//volume total en circulation
$Dqsupply = $Dcoin.circulating_supply.toFixed()
//Marketcap + limite 2 chiffre apres la virgule (toFixed(2))
$Dqmcap = $Dcoin.quote.EUR.market_cap.toFixed(2)
//Volume 24h
$Dqvol24h = $Dcoin.quote.EUR.volume_24h.toFixed(2)
// variation 1h + limite 2 chiffre apres la virgule (toFixed(2))
$Dqvariation1h = $Dcoin.quote.EUR.percent_change_1h.toFixed(2)
//si $variation est negatif afficher en rouge sinon afficher en vert
if ($Dqvariation1h < 0) {
    $Dqvariation1h = "<font color='#ff3333'>" + $Dqvariation1h + " % <i class='far fa-arrow-alt-circle-down'></i</font>";
} else {
    $Dqvariation1h = "<font color='#50AF95'>+" + $Dqvariation1h + " % <i class='far fa-arrow-alt-circle-up'></i></font>";

}
// variation  + limite 2 chiffre apres la virgule (toFixed(2))
$Dqvariation24h = $Dcoin.quote.EUR.percent_change_24h.toFixed(2)
//si $variation est negatif afficher en rouge sinon afficher en vert
if ($Dqvariation24h < 0) {
    $Dqvariation24h = "<font color='#ff3333'>" + $Dqvariation24h + " % <i class='far fa-arrow-alt-circle-down '></i></font>";
} else {
    $Dqvariation24h = "<font color='#50AF95'>+" + $Dqvariation24h + " % <i class='far fa-arrow-alt-circle-up'></i></font>";

}
// variation 7d  + limite 2 chiffre apres la virgule (toFixed(2))
$Dqvariation7d = $Dcoin.quote.EUR.percent_change_7d.toFixed(2)
//si $variation est negatif afficher en rouge sinon afficher en vert
if ($Dqvariation7d < 0) {
    $Dqvariation7d = "<font color='#ff3333'>" + $Dqvariation7d + " % <i class='far fa-arrow-alt-circle-down'></i></font>";
} else {
    $Dqvariation7d = "<font color='#50AF95'>+" + $Dqvariation7d + " % <i class='far fa-arrow-alt-circle-up'></i></font>";
}

//Affichge titre Card
$('#Tcard').append(" " + $Dname + " (" + $Dsymb + ") <a href='https://www.coinbase.com/join/59805ce4fd919501509e41a7' target='_blank' class='btn btn-primary float-right'>Acheter du " + $Dname + "</a>");
$('#badge').append("rank " + $Dqrank);
//Affichage liste titre
$('#titre').append($Dlogo + "<h2>" + $Dname + "<h6>(" + $Dsymb + ")</h6></h2><p></p>");
//Affichage liste prix
$('#prix').append("<p>Prix en Euro :</p> <h1 class='cprix'>" + $Dqprice + " €</h1><h5>" + $Dqpricebtc + " BTC</h5><p>" + $Dqvariation7d + " (7j)</p>");
//Affichage liste url
$('#lien').append($LDweb + $LDtwitter + $LDreddit + $LDforum + $LDchat + $LDexplor + $LDsource);


$('#Dprix').append(
    "<tr class='Ptable'><td>" +
    $Dqmcap + " €</td><td>" +
    $Dqsupply + " " +
    $Dqsymbol + "</td><td>" +
    $Dqvol24h + " €</td><td>" +
    $Dqvariation1h + "</td><td>" +
    $Dqvariation24h + "</td><td>" +
    $Dqvariation7d + "</td></tr>")

// titre convertisseur
$('#Tconv').append(" " + $Dsymb + " / EUR");
//titre 2 convertisseur 
$('#T2conv').append("Convertissez vos " + $Dqname + " en euros");
$('#Ccryp').append($Dsymb);
$('#base').append("1 " + $Dsymb + " = " + $Dqprice + " €");

//Fonction convertisseur
function ConvertirEnCrypto() {
    if (isNaN(Form1.Euros.value) == true) {
        alert('Merci de saisir un nombre. Conversion Impossible.');
        Form1.Euros.value = '1';
    } else {
        Form1.crypto.value = Form1.Euros.value * $Dqprice;
    }
}

function ConvertirEnEuros() {
    if (isNaN(Form1.crypto.value) == true) {
        alert('Merci de saisir un nombre. Conversion Impossible.');
        Form1.crypto.value = Form1.Euros.value * $Dqprice;
    } else {
        Form1.Euros.value = Form1.crypto.value / $Dqprice;
    }
}


//windget graph crypto compare

baseUrl = "https://widgets.cryptocompare.com/";
var scripts = document.getElementsByTagName("script");
var embedder = scripts[scripts.length - 1];
var cccTheme = {
    "General": {
        "borderWidth": "0px"
    },
    "Tabs": {
        "borderColor": "#F6F6F6",
        "activeBorderColor": "#F8A442"
    },
    "Chart": {
        "animation": true
    }
};
(function () {
    var appName = encodeURIComponent(window.location.hostname);
    if (appName == "") {
        appName = "local";
    }
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    var theUrl = baseUrl + 'serve/v3/coin/chart?fsym=' + $Dsymb + '&tsyms=EUR,USD';
    s.src = theUrl + (theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
    $('#graph').append(embedder.parentNode.appendChild(s));
})();








//console.log($Dinfo.urls.website[0]);
//console.log($Dqpricebtc);

var cssRule =
    "color: rgb(249, 162, 34);" +
    "font-size: 60px;" +
    "font-weight: bold;" +
    "text-shadow: 1px 1px 5px rgb(249, 162, 34);" +
    "filter: dropshadow(color=rgb(249, 162, 34), offx=1, offy=1);";
console.log("%cATTENTION", cssRule);
console.log("%cLa curiosité est souvent une qualité, mais peut être un défaut. Parfois, ce que l on découvre ne nous apporte que des maux.","color: blue; font-size:30px;");