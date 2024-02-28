<div class="container-fluid h-100">
    <div class="row full-height">
        <div class="col-6 bg-hero"></div>
        <div class="col-6">
            <div class="logo">
                <img src="assets/logo.svg" alt="">
            </div>
            <div style="clear: both;"></div>
            <div class="login-form">
                <a href="index.php?page=home" class="font-inter-light back-btn">
                    < Back to Home</a>
                        <h4 class="font-inter-bold text-primary mt-4">Login</h4>
                        <p class="font-inter-light">Please login first to access the application</p>
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1" class="font-inter-semi color1">Email<b
                                        class="text-danger ml-1">*</b></label>
                                <input name="email" type="email" class="form-control font-inter-regular shadow-none"
                                    placeholder="input email" id="exampleInputEmail1" aria-describedby="emailHelp">
                            </div>
                            <div class="form-group mt-4 password-container">
                                <label for="exampleInputPassword1" class="font-inter-semi color1">Password<b
                                        class="text-danger ml-1">*</b></label>
                                <div class="input-group">
                                    <input name="password" type="password"
                                        class="form-control font-inter-regular shadow-none border-right-0"
                                        placeholder="Input password" id="exampleInputPassword1">
                                    <div class="input-group-append">
                                        <a href="#"
                                            class="input-group-text bg-transparent border-right-1 border-left-0 password-toggle-container">
                                            <img src="assets/icons/eye-off.svg" class="password-icon"
                                                alt="Toggle Password">
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="footer">
                                <div class="form-group form-check mt-3">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                    <label class="form-check-label font-inter-light text-primary"
                                        for="exampleCheck1">Remember
                                        me</label>
                                </div>
                                <a href="index.php?page=forgot-pass" class="font-inter-light">Forgot Password?</a>
                            </div>

                            <center>
                                <button type="submit" name="submit"
                                    class="btn btn-lg btn-block bg-color1 text-light font-inter-medium mt-4">LOGIN</button>
                            </center>
                            <p class="font-inter-light mt-4">
                                Don't have an account? <a href="index.php?page=register"
                                    class="color1 font-inter-medium">Register</a>
                            </p>
                        </form>
            </div>
        </div>
    </div>
</div>