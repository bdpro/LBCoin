<?php


$an = date("Y"); 

$titrePage = "TOP 10 Des Cryto-Monnaies $an ";
include('app/ApiTop.php');
include ('includes/header.php');
include ('includes/navbar.php');
 ?>

<script>
    // Récupération json et trasmphormation des variables php 

    $Tcoin =
        <?php echo $TopCoins; ?>;

</script>
<h1 class="text-center"><?php echo $titrePage ?></h1><br>

<div class="container-fluid">
    <div class="row" id="Top">



    </div>
</div>
<div class="text-center">
<a href="https://www.ledger.com?r=8dd75a938fc1"><img class="img-fluid" width=728 height=90 alt="Ledger Nano S - The secure hardware wallet" src="https://www.ledgerwallet.com/images/promo/nano-s/ledger_nano-s_7-2-8x9-0.jpg"></a>
</div>



<script type="text/javascript" src="js/top.js"></script>
<?php include ('includes/footer.php') ?>