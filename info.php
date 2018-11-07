<?php

 //Recuperation du symbole dans L URL
$Isymbol = $_GET['id'];
$Nom = $_GET['name'];
$titrePage = "Prix et Infos $Nom ($Isymbol)";
//    echo $Isymbol;  
include('app/ApiDetail.php');
// TEST retour jSON info et quotes
//    echo $InfoCoin; 
//    echo $Qcoin;
include ('includes/header.php');
include ('includes/navbar.php');
 ?>

<script>
    // Récupération json et trasmphormation des variables php $InfoCoin & $Qcoin ver les variables js $Info & $Qcoin 
    $Info = <?php echo $InfoCoin; ?>;
    $Qcoin = <?php echo $Qcoin; ?>;
</script>


<div class="container-fluid">
    <div class="row">
        <div class=" col-md-9 mx-auto">

            <div class="card">

                <h5 class="card-header" id=Tcard>Prix et Infos du </h5>




                <div class="card-body">
                    <div class="container">
                        <div class="row">

                            <div class="col-md-8 mx-auto ">
                                <span class="badge badge-pill badge-primary" id="badge"></span>
                                <div id="titre"></div>

                            </div>
                            <div class="col-md-4 mx-auto">
                                <div id="prix"></div>

                            </div>
                        </div>
                    </div>

                    <div class="container">
                        <div class="row">
                            <div class="col-md-2 mx-auto" id="lien">
                                <h5>Liens</h5>
                            </div>
                            <div class="col-md-10 mx-auto table-responsive">
                                <table class="table" id="example">
                                    <thead class="thead bg-light ">
                                        <tr>


                                            <th scope="col">Market Cap</th>
                                            <th scope="col">Total en Circulation</th>
                                            <th scope="col">Volume (24h)</th>
                                            <th scope="col">% (1h)</th>
                                            <th scope="col">% (24h)</th>
                                            <th scope="col">% (7j)</th>

                                        </tr>
                                    </thead>
                                    <tbody id="Dprix">

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 mx-auto" id="graph">

                            </div>

                        </div>
                    </div>
                </div>

            </div>


        </div>

        <div class=" col-md-3 mx-auto">


            <div class="card">

                <h5 class="card-header" id="Tconv">Covertisseur</h5>
                <div class="card-body">
                    <h6 id="T2conv"></h6>



                    <div onLoad='ConvertirEnCrypto()'>


                        <FORM Name='Form1'>
                            <div class="input-group mb-4">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="Ccryp"></span>
                                </div>
                                <input class="form-control" type='text' Name='Euros' onKeyUp='ConvertirEnCrypto()' Value='1'>
                            </div>

                            <div class="input-group mb-4">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" name=""> EUR</span>
                                </div>
                                <input class="form-control" type='text' Name='crypto' onKeyUp='ConvertirEnEuros()'>
                            </div>
                        </FORM>
                    </div>
                    <p class="font-italic text-right" id="base"></p>
                </div>
            </div>
            <a href="https://www.coinbase.com/join/59805ce4fd919501509e41a7" target="_blank"> <img src="img/coinbase.jpg" class="img-fluid coinbase" alt="Acheter des Bitcoins"></a>
        </div>
    </div>
</div>

<script type="text/javascript" src="js/info.js"></script>
<?php include ('includes/footer.php') ?>