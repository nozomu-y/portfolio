<template>
  <div>
    <Header />
    <div id="content">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-auto text-center">
            <h1>Profile</h1>
            <table class="table profile-table mt-5">
              <thead>
                <th scope="col">Key</th>
                <th scope="col">Value</th>
              </thead>
              <tbody>
                <tr>
                  <td class="text-nowrap">名前</td>
                  <td>Nozomu</td>
                </tr>
                <tr>
                  <td class="text-nowrap">所属</td>
                  <td>東京工業大学 情報理工学院 情報工学系 学士3年</td>
                </tr>
                <tr>
                  <td class="text-nowrap">GitHub</td>
                  <td>
                    <a href="https://github.com/nozomu-y" target="_blank">nozomu-y</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header";

export default {
  name: "Profile",
  components: {
    Header,
  },
};
</script>
