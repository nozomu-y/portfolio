<template>
  <nav>
    <button class="nav-button" data-toggle="modal" data-target="#navModal">
      <span class="nav-icon">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </span>
    </button>
    <div
      class="modal fade fullscreen"
      id="navModal"
      tabindex="-1"
      role="dialog"
      style="display: none;"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <ul class>
              <li>
                <router-link
                  data-toggle="modal"
                  data-target="#navModal"
                  class="modal-button"
                  to="/"
                >Home</router-link>
              </li>
              <li>
                <router-link
                  data-toggle="modal"
                  data-target="#navModal"
                  class="modal-button"
                  to="/Profile"
                >Profile</router-link>
              </li>
              <li>
                <router-link
                  data-toggle="modal"
                  data-target="#navModal"
                  class="modal-button"
                  to="/Portfolio"
                >Portfolio</router-link>
              </li>
              <li>
                <router-link
                  data-toggle="modal"
                  data-target="#navModal"
                  class="modal-button"
                  to="/Skills"
                >Skills</router-link>
              </li>
              <li>
                <a href="https://github.com/nozomu-y" target="_blank">GitHub</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
};
</script>
