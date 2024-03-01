  <div class="login-form" style="max-width: 63%; margin: -50px auto;">
      <h4 class="font-inter-bold text-primary mt-4">Confirm</h4>
      <p class="font-inter-light">If you have reviewed the terms and conditions below, you agree to the specified
          conditions. </p>


      <div class="card-terms">
          <!-- tnc content -->
          <?php include("config/components/desktop/register/tnc.php");?>
      </div>

      <div class="form-group form-check mt-3">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label font-inter-light text-primary" for="exampleCheck1">Agreed with Terms and
              Conditions</label>
      </div>
      <center>
          <a href="#" onclick="stepper1.previous()"
              class="btn color1 font-inter-medium mt-3 mr-1 btn-prev-register">PREVIOUS</a>

          <a href="#" class="btn bg-color1 text-light font-inter-medium mt-3 btn-next-submit">SUBMIT</a>
      </center>
  </div>