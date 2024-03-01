<?php include("config/components/desktop/about/bg-hero.php");?>

<div class="content">
    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
            <button class="nav-link active" id="pills-about-tab" data-toggle="pill" data-target="#pills-about"
                type="button" role="tab" aria-controls="pills-about" aria-selected="true">About IET</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-vision-tab" data-toggle="pill" data-target="#pills-vision" type="button"
                role="tab" aria-controls="pills-vision" aria-selected="false">Vision & Mission</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-history-tab" data-toggle="pill" data-target="#pills-history"
                type="button" role="tab" aria-controls="pills-history" aria-selected="false">History</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-organize-tab" data-toggle="pill" data-target="#pills-organize"
                type="button" role="tab" aria-controls="pills-organize" aria-selected="false">Organizational
                Structure</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-people-tab" data-toggle="pill" data-target="#pills-people" type="button"
                role="tab" aria-controls="pills-people" aria-selected="false">People</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-member-tab" data-toggle="pill" data-target="#pills-member" type="button"
                role="tab" aria-controls="pills-member" aria-selected="false">Membership</button>
        </li>
    </ul>
</div>
<div class="tab-content" id="pills-tabContent">
    <div class="tab-pane fade show active" id="pills-about" role="tabpanel" aria-labelledby="pills-about-tab">
        <?php include("config/components/desktop/about/tab-about.php");?>
    </div>
    <div class="tab-pane fade" id="pills-vision" role="tabpanel" aria-labelledby="pills-vision-tab">
        <?php include("config/components/desktop/about/tab-vision.php");?>
    </div>
    <div class="tab-pane fade" id="pills-history" role="tabpanel" aria-labelledby="pills-history-tab">
        <?php include("config/components/desktop/about/tab-history.php");?>
    </div>
    <div class="tab-pane fade" id="pills-organize" role="tabpanel" aria-labelledby="pills-organize-tab">
        <?php include("config/components/desktop/about/tab-organize.php");?>
    </div>
    <div class="tab-pane fade" id="pills-people" role="tabpanel" aria-labelledby="pills-people-tab">
        <?php include("config/components/desktop/about/tab-people.php");?>
    </div>
    <div class="tab-pane fade" id="pills-member" role="tabpanel" aria-labelledby="pills-member-tab">
        <?php include("config/components/desktop/about/tab-member.php");?>
    </div>
</div>

<?php include("config/components/desktop/footer/footer.php");?>