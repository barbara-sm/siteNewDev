<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/media.css">
    <title>NEW DEV COMPANY - SOBRE</title>
</head>
<body>
    <section class="section-topo">
    <?php require_once('conteudo/topoSobre.php') ?>
    </section>
    <main>
        <section class="sobre-video" id="sobre-video" >
        <?php require_once('conteudo/sobreVideo.php') ?>
        </section>
        <section class="sobre-nos">
        <?php require_once('conteudo/sobreNos.php') ?>        
        </section>
        <section class="sobre-empresa">
        <?php require_once('conteudo/sobreEmpresa.php') ?>    
        </section>
        <section class="equipe">
        <?php require_once('conteudo/equipe.php') ?>     
        </section>
        <section class="servicos">
        <?php require_once('conteudo/servicos.php') ?>  
        </section>
    </main>
    <footer>
         <?php require_once('conteudo/footer.php') ?>
    </footer>
    <script src="js/script.js"></script>
</body>
</html>