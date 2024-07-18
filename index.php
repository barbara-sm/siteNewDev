<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/media.css">
    <title>NEW DEV COMPANY</title>
</head>
<body>
    <section class="section-topo bannerHome">
    <?php require_once('conteudo/topoIndex.php') ?>
    </section>
   <main>
      <section class="escolher-servico">
    <?php require_once('conteudo/escolherServico.php') ?>   
      </section>
      <section class="nossos-projetos" id="nossos-projetos">
      <?php require_once('conteudo/nossosProjetos.php') ?>      
      </section>
      <section class="servicos">
    <?php require_once('conteudo/servicos.php') ?>     
      </section>
      <section class="avaliacoes">
    <?php require_once('conteudo/avaliacoes.php') ?>      
    </section>
    <section class="iniciar-projeto">
    <?php require_once('conteudo/iniciarProjeto.php') ?>         
    </section>
    <!-- Modal -->
    <div id="modal-formulario" class="modal">
    <?php require_once('conteudo/modalFormulario.php') ?>    
    </div>
   </main>
    <footer>
    <?php require_once('conteudo/footer.php') ?>
    </footer>
    <script src="js/script.js"></script>
</body>
</html>