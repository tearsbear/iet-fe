<!-- Hero Video -->
<?php include("config/components/desktop/home/video.php");?>

<!-- Projects -->
<?php include("config/components/desktop/home/project.php");?>

<div class="bg-map">
    <br>
    <h2 class="text-center color1 font-inter-bold mt-4">PROJECT DISTRIBUTION MAP</h2>
    <div id="mapid"></div>


    <div id="project-panel">
        <a id="close-panel-btn">
            <img src="assets/icons/close.svg" alt="">
        </a>
        <div>
            <h3 class="ptitle font-inter-bold"></h3>
            <p class="font-inter-regular">
                List of Projects:
            </p>

            <div id="project-list" style="margin: 0; text-align: left;">
                <!-- Project items will be dynamically added here -->
            </div>
            <center>
                <a class="btn btn-block bg-white font-inter-medium color1 mt-4" href="index.php?page=project"
                    role="button">See more</a>
            </center>
        </div>
    </div>
</div>


<!-- Biograph -->
<?php include("config/components/desktop/home/biograph.php");?>

<!-- Our Partner -->
<?php include("config/components/desktop/home/partner.php");?>

<!-- Footer -->
<?php include("config/components/desktop/home/footer.php");?>