<?php
$titrePage = "Capitalisation et cours des Crypto-Monnaies.";
    include('app/ApiAll.php');
    include ('includes/header.php');
    include ('includes/navbar.php');
?>
<script>
    $Allcoin = <?php echo $CallCoins; ?>;
</script>





<div class="container-fluid">
    <div class="row">
        <div class="col-md-12 ">
            <div class="row">
                <div id="preloader">
                    <div id="loader">
                    </div>
                </div>
                <div class="col-md-6">
                    <h5>Capitalisation des Crypto-Monnaies</h5>

                    <p>Trouver et comparer ici tous les cours et variations de vos Crypto-Monnaies en temps réel. Cliquez sur le nom ou sur l'icone  détails du coin choisi pour plus informations .
                    </p>
                </div>
                <div class="col-md-6 text-right"><a href="https://www.coinbase.com/join/59805ce4fd919501509e41a7" target="_blank"><img src="img/coinbase2.jpg" class="img-fluid coinbase" alt="Acheter des Bitcoins"></a>
                </div>
            </div>


            <table class="table table-striped alltable" id="lcoin">
                <thead class="thead  text-white">

                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Coins<span class="badge-pill badge-primary align-top" id="NbrCoin"></span></th>
                        <th scope="col">Prix</th>
                        <th scope="col">Market Cap</th>
                        <th scope="col">Total en Circulation</th>
                        <th scope="col">Volume (24h)</th>
                        <th scope="col">% (1h)</th>
                        <th scope="col">% (24h)</th>
                        <th scope="col">% (7j)</th>
                        <th scope="col">Détail</th>
                    </tr>
                </thead>
                <tbody id="cour">

                </tbody>
            </table>

        </div>
    </div>
</div>

<script>
    $(document).ready(function() {
        $('#preloader').delay().hide();

    });
</script>


<script type="text/javascript" src="js/allcoin.js"></script>
<?php include ('includes/footer.php') ?>