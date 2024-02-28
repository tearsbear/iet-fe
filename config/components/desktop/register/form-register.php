  <div class="login-form mb-0" style="max-width: 63%; margin: -50px auto;">
      <h4 class="font-inter-bold text-primary mt-4">Register</h4>
      <p class="font-inter-light">Please fill up the text box to create your account</p>
      <form style="margin-top: 6px">
          <div class="form-group">
              <label for="inputFullName" class="font-inter-semi color1">Full Name <b
                      class="text-danger ml-0">*</b></label>
              <input name="fullname" type="text" class="form-control font-inter-regular shadow-none"
                  placeholder="input full name" id="inputFullName">
          </div>
          <div class="form-group">
              <label for="inputCompanyName" class="font-inter-semi color1">Company Name <b
                      class="text-danger ml-0">*</b></label>
              <input name="companyname" type="text" class="form-control font-inter-regular shadow-none"
                  placeholder="input company name" id="inputCompanyName">
          </div>
          <div class="form-group">
              <label for="inputUsername" class="font-inter-semi color1">Username <b
                      class="text-danger ml-0">*</b></label>
              <input name="username" type="text" class="form-control font-inter-regular shadow-none"
                  placeholder="input username" id="inputUsername">
          </div>
          <div class="form-group">
              <label for="exampleInputEmail1" class="font-inter-semi color1">Corporate Email <b
                      class="text-danger ml-0">*</b></label>
              <input name="email" type="email" class="form-control font-inter-regular shadow-none"
                  placeholder="input corporate email" id="exampleInputEmail1" aria-describedby="emailHelp">
          </div>
          <div class="form-group">
              <label for="inputFile" class="font-inter-semi color1">Upload File <b
                      class="text-danger ml-0">*</b></label>
              <div class="input-group mb-2">
                  <div class="input-group-prepend">
                      <div class="input-group-text">Browse File</div>
                  </div>
                  <input type="file" name="fileinput" class="form-control font-inter-regular shadow-none" id="inputFile"
                      placeholder="Choose file" style="color:transparent;">
              </div>
              <span class="file-placeholder font-inter-regular text-primary">Choose File</span>
          </div>
          <div class="form-group form-category" style="display: none;">
              <label for="inputCategory" class="font-inter-semi color1">Category <b
                      class="text-danger ml-0">*</b></label>
              <select class="custom-select" id="inputCategory" required>
                  <option selected disabled value="">input category</option>
                  <option>Category 1</option>
              </select>
          </div>
      </form>
  </div>
  <center>
      <a href="#" onclick="stepper1.previous()"
          class="btn color1 font-inter-medium mt-3 mr-1 btn-prev-register">PREVIOUS</a>

      <a href="#" class="btn btn-lg bg-color1 text-light font-inter-medium mt-3 btn-next-register">NEXT</a>
  </center>