<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <!-- Color theme for statusbar (Android only) -->
    <meta name="theme-color" content="#296F47" />
    <link rel="icon" type="image/svg+xml" href="assets/icon.png" />
    <title>IET - <?php echo $_GET['page'];?></title>
    <!-- Path to Bootstrap Library Bundle CSS -->
    <link rel="stylesheet" href="css/bootstrap.css" />
    <!-- Path to your custom app styles-->
    <link rel="stylesheet" href="css/font-color.css" />
    <link rel="stylesheet" href="css/default.css" />
    <?php if(isset($_GET['page']) && $_GET['page'] === 'home'): ?>
    <link rel="stylesheet" href="css/leaflet.css" />
    <?php endif; ?>
    <?php if(isset($_GET['page']) && $_GET['page'] === 'register'): ?>
    <link rel="stylesheet" href="css/stepper.css" />
    <?php endif; ?>
    <link rel="stylesheet" href="css/aos.css" />
    <link rel="stylesheet" href="css/page-<?php echo (isset($_GET['page'])) ? $_GET['page'] : 'home'; ?>.css">
</head>

<body>

    <?php include "config/config.php"; // Load file config.php ?>

    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.js"></script>
    <script type="text/javascript" src="js/default.js"></script>
    <?php if(isset($_GET['page']) && $_GET['page'] === 'home'): ?>
    <script type="text/javascript" src="js/leaflet.js"></script>
    <?php endif; ?>
    <?php if(isset($_GET['page']) && $_GET['page'] === 'register'): ?>
    <script type="text/javascript" src="js/stepper.js"></script>
    <?php endif; ?>
    <script src="js/aos.js"></script>
    <script type="text/javascript" src="js/page-<?php echo (isset($_GET['page'])) ? $_GET['page'] : 'home'; ?>.js">
    </script>
</body>

</html>