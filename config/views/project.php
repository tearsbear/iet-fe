<?php include("config/components/desktop/project/bg-hero.php");?>

<div data-aos="fade-up" data-aos-duration="1300">
    <div class="content" style="align-items: center">
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" style="min-width: 200px" role="presentation">
                <button class="nav-link active" id="pills-home-tab" data-toggle="pill" data-target="#pills-pln"
                        type="button" role="tab" aria-controls="pills-home" aria-selected="true">PLN</button>
            </li>
            <li class="nav-item" style="min-width: 200px" role="presentation">
                <button class="nav-link" id="pills-profile-tab" data-toggle="pill" data-target="#pills-ipp" type="button"
                        role="tab" aria-controls="pills-profile" aria-selected="false">IPP</button>
            </li>
            <li class="nav-item" style="min-width: 200px" role="presentation">
                <button class="nav-link" id="pills-private-tab" data-toggle="pill" data-target="#pills-private"
                        type="button" role="tab" aria-controls="pills-private" aria-selected="false">PRIVATE SECTOR</button>
            </li>
            <li class="nav-item" style="min-width: 200px" role="presentation">
                <button class="nav-link" id="pills-esdm-tab" data-toggle="pill" data-target="#pills-esdm" type="button"
                        role="tab" aria-controls="pills-esdm" aria-selected="false">ESDM</button>
            </li>
            <li class="nav-item" style="min-width: 200px" role="presentation">
                <button class="nav-link" id="pills-community-tab" data-toggle="pill" data-target="#pills-community"
                        type="button" role="tab" aria-controls="pills-community" aria-selected="false">Community</button>
            </li>
        </ul>
    </div>
</div>

<div class="tab-content" id="pills-tabContent">
    <div class="tab-pane fade show active" id="pills-pln" role="tabpanel" aria-labelledby="pills-pln-tab">
        <?php include("config/components/desktop/project/tab-pln.php");?>
    </div>
    <div class="tab-pane fade" id="pills-ipp" role="tabpanel" aria-labelledby="pills-ipp-tab">
        <?php include("config/components/desktop/project/tab-ipp.php");?>
    </div>
    <div class="tab-pane fade" id="pills-private" role="tabpanel" aria-labelledby="pills-private-tab">
        <?php include("config/components/desktop/project/tab-private-sector.php");?>
    </div>
    <div class="tab-pane fade" id="pills-esdm" role="tabpanel" aria-labelledby="pills-esdm-tab">
        <?php include("config/components/desktop/project/tab-esdm.php");?>
    </div>
    <div class="tab-pane fade" id="pills-community" role="tabpanel" aria-labelledby="pills-community-tab">
        <?php include("config/components/desktop/project/tab-community.php");?>
    </div>
</div>

<?php include("config/components/desktop/home/footer.php");?>

