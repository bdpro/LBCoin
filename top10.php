<?php


$an = date("Y"); 

$titrePage = "Le TOP 10 Des Cryto-Monnaies $an";
include('app/ApiTop.php');
include ('includes/header.php');
include ('includes/navbar.php');
 ?>

<script>
    // Récupération json et trasmphormation des variables php 

    $Tcoin =
        <?php echo $TopCoins; ?>;
</script>
<div class="container-fluid">
    <div class="row" id="Top">



    </div>
</div>





<script type="text/javascript" src="js/top.js"></script>
<?php include ('includes/footer.php') ?>