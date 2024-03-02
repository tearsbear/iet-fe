<div class="login-form">
    <!-- <a href="index.php?page=login" class="font-inter-light back-btn text-center">
                                < Back to Login</a> -->
    <h4 class="font-inter-bold text-center text-primary mt-4">Register</h4>
    <p class="font-inter-light text-center">Please choose your role
    </p>

    <center>

        <a href="#" data-role="Project Owner" class="btn btn-outline-secondary font-inter-regular btn-role mb-3">Project
            Owner</a>
        <a href="#" data-role="Financier" class="btn btn-outline-secondary font-inter-regular btn-role mb-3">
            Financier</a>
        <a href="#" data-role="Developer" class="btn disabled btn-outline-secondary font-inter-regular btn-role mb-3">
            Developer</a>
        <a href="#" data-role="Others" class="btn disabled btn-outline-secondary font-inter-regular btn-role mb-3">
            Others</a>
    </center>


    <p class="font-inter-light text-primary ml-4 mt-4 role-text" style="display: none"><b id="accRole"
            class="font-inter-semi">Project
            Owner</b>
        is
        an entity
        who owns the project.</p>

    <center>
        <a href="#" onclick="stepper1.next()" style="width: 485px"
            class="btn btn-lg btn-block bg-color1 text-light font-inter-medium mt-4 btn-next-role">NEXT</a>
    </center>
</div>