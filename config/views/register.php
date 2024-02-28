<div class="container-fluid h-100">
    <div class="row full-height">
        <div class="col-6 bg-hero"></div>
        <div class="col-6">
            <div class="logo">
                <img src="assets/logo.svg" alt="">
            </div>
            <!-- <div style="clear: both;"></div> -->
            <div id="stepper1" class="bs-stepper">
                <div class="bs-stepper-header">
                    <div class="step" data-target="#test-l-1">
                        <div class="btn step-trigger disabled" style="padding: 0">
                        </div>
                        <span class="bs-stepper-circle step1">1</span>
                        <!-- <span class="bs-stepper-label">First step</span> -->
                    </div>
                    <div class="line"></div>
                    <div class="step" data-target="#test-l-2">
                        <div class="btn step-trigger disabled" style="padding: 0">
                        </div>
                        <span class="bs-stepper-circle step2">2</span>
                        <!-- <span class="bs-stepper-label">First step</span> -->
                    </div>
                    <div class="line"></div>
                    <div class="step" data-target="#test-l-3">
                        <div class="btn step-trigger disabled" style="padding: 0">
                        </div>
                        <span class="bs-stepper-circle step3">3</span>
                        <!-- <span class="bs-stepper-label">First step</span> -->
                    </div>
                </div>


                <div class="row">
                    <div class="col ml-n1 font-inter-regular">
                        Role
                    </div>
                    <div class="col ml-1 font-inter-regular">
                        Personal
                    </div>
                    <div class="col ml-1 font-inter-regular">
                        Confirm
                    </div>
                </div>

                <div style="clear: both;"></div>
                <div class="bs-stepper-content">
                    <div id="test-l-1" class="content">
                        <!-- form category -->
                        <?php include("config/components/desktop/register/form-category.php");?>
                    </div>
                    <div id="test-l-2" class="content">
                        <!-- form register -->
                        <?php include("config/components/desktop/register/form-register.php");?>
                    </div>
                    <div id="test-l-3" class="content">
                        <!-- form tnc -->
                        <?php include("config/components/desktop/register/form-tnc.php");?>
                    </div>
                </div>
            </div>



        </div>
    </div>
</div>