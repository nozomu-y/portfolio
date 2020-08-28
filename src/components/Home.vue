<template>
  <div>
    <div
      class="hero"
      style="background: url(../static/img/3677262_l.jpg) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;"
    >
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-md-8 text-center">
            <h1 class="text-white animate__animated animate__fadeInUp">
              <span class="h2">Nozomu's</span>
              <br />
              <span>Portfolio</span>
            </h1>
            <!-- <button class="btn btn-outline-light btn-lg mt-4 animate__animated animate__fadeInUp animate__delay-1s">View Portfolio</button> -->
          </div>
        </div>
      </div>
    </div>

    <!-- main content -->
    <div class="container-lg tiles">
      <div class="row">
        <div class="col-sm-6 col-md-5 tile animate__animated animate__fadeInDown">
          <router-link to="/Profile">Profile</router-link>
        </div>
        <div class="col-sm-6 col-md-7 tile animate__animated animate__fadeInDown">
          <router-link to="/Portfolio">Portfolio</router-link>
        </div>
        <div class="col-sm-6 col-md-7 tile animate__animated animate__fadeInDown">
          <router-link to="/Skills">Skills</router-link>
        </div>
        <div class="col-sm-6 col-md-5 tile animate__animated animate__fadeInDown">
          <a href="https://github.com/nozomu-y" target="_blank">GitHub</a>
        </div>
        <!-- <div class="col-sm-6 col-md-4 tile animate__animated animate__fadeInDown"></div> -->
        <!-- <div class="col-sm-6 col-md-4 tile animate__animated animate__fadeInDown"></div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
