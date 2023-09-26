<template>
  <div class="max-w-5xl mx-auto px-4">
    <article class="prose max-w-none">
      <h1 class="text-center">nozomu.dev</h1>

      <div class="flex max-md:flex-col gap-6 my-2 justify-center items-center">
        <div class="avatar flex-none">
          <div
            class="mask mask-squircle bg-base-content h-32 w-32 bg-opacity-10 p-px"
          >
            <img
              src="/images/profile.jpeg"
              width="128"
              height="128"
              alt="Profile Image"
              class="mask mask-squircle m-0"
            />
          </div>
        </div>
        <div class="flex-none">
          <div class="text-2xl font-extrabold">Nozomu Yamazaki</div>
          <div class="flex justify-center md:justify-start gap-4 mt-4">
            <a href="https://github.com/nozomu-y" target="_blank"
              ><font-awesome-icon
                :icon="['fab', 'github']"
                class="text-3xl"
                style="color: #171515"
            /></a>
            <a href="https://zenn.dev/nyama39" target="_blank">
              <ZennIcon size="30px" />
            </a>
            <a
              href="https://www.linkedin.com/in/nyama39/"
              target="_blank"
              style="color: #0077b5"
            >
              <font-awesome-icon :icon="['fab', 'linkedin']" class="text-3xl" />
            </a>
            <a href="https://atcoder.jp/users/nyama39" target="_blank">
              <AtCoderIcon size="30px" />
            </a>
          </div>
        </div>
      </div>

      <h2 class="text-center">Employment</h2>

      <div class="flex flex-col gap-5 mx-auto max-w-2xl">
        <div
          class="not-prose bg-base-100 rounded-box w-full shadow-xl p-4 pt-4 pb-4"
        >
          <div class="flex gap-4 my-2 items-center">
            <div class="flex-none">
              <div
                class="mask mask-squircle bg-base-content bg-opacity-10 h-24 w-24 p-px"
              >
                <div
                  class="mask mask-squircle bg-white flex items-center justify-center h-full w-full"
                >
                  <img
                    class="align-middle max-h-full max-w-full px-3"
                    src="/images/LINE_Corporation_Logo.png"
                    alt="LINE Corp Logo"
                  />
                </div>
              </div>
            </div>
            <div class="flex-1">
              <div class="text-lg font-extrabold">LINE Corp</div>
              <div class="text-base-content/70 text-sm">
                Software Engineer – Part-time
              </div>
              <div class="text-base-content/70 text-sm">
                April 2023 – September 2023
              </div>
              <div class="text-base-content/70 text-sm">Tokyo, Japan</div>
            </div>
          </div>
          <hr class="my-3" />
          <div class="prose text-sm mb-3">
            <strong>Responsibility:</strong>
            <p>
              Web application development and API development for LINE NEWS, as
              well as backend system development.
            </p>
          </div>
          <div>
            <div class="badge badge-ghost mr-1">Java</div>
            <div class="badge badge-ghost mr-1">Spring Boot</div>
          </div>
        </div>

        <div
          class="not-prose bg-base-100 rounded-box w-full shadow-xl p-4 pt-4 pb-4"
        >
          <div class="flex gap-4 my-2 items-center">
            <div class="flex-none">
              <div
                class="mask mask-squircle bg-base-content bg-opacity-10 h-24 w-24 p-px"
              >
                <div
                  class="mask mask-squircle bg-white flex items-center justify-center h-full w-full"
                >
                  <img
                    class="align-middle max-h-full max-w-full px-3"
                    src="/images/LINE_Corporation_Logo.png"
                    alt="LINE Corp Logo"
                  />
                </div>
              </div>
            </div>
            <div class="flex-1">
              <div class="text-lg font-extrabold">LINE Corp</div>
              <div class="text-base-content/70 text-sm">
                Software Engineer – Internship
              </div>
              <div class="text-base-content/70 text-sm">
                September 2022 – October 2022
              </div>
              <div class="text-base-content/70 text-sm">Tokyo, Japan</div>
            </div>
          </div>
          <hr class="my-3" />
          <div class="prose text-sm mb-3">
            <strong>Responsibility:</strong>
            <p>
              Web application development and API development for LINE NEWS, as
              well as backend system development.
            </p>
            <strong>Achievement:</strong>
            <ul class="list-disc list-outside ml-5">
              <li>
                Constructed an automated infrastructure for load testing and
                scenario generation.
              </li>
              <li>
                Migrated the content management system for LINE NEWS and
                improved the UI.
              </li>
            </ul>
            <p class="mt-2">
              <a
                href="https://engineering.linecorp.com/ja/blog/automated-load-testing-scenario"
                target="_blank"
                class="link"
                >Internship Report (Japanese)</a
              >
            </p>
          </div>
          <div>
            <div class="badge badge-ghost mr-1">Java</div>
            <div class="badge badge-ghost mr-1">Spring Boot</div>
            <div class="badge badge-ghost mr-1">JavaScript</div>
            <div class="badge badge-ghost mr-1">Vue.js</div>
          </div>
        </div>

        <div
          class="not-prose bg-base-100 rounded-box w-full shadow-xl p-4 pt-4 pb-4"
        >
          <div class="flex gap-4 my-2 items-center">
            <div class="flex-none">
              <div
                class="mask mask-squircle bg-base-content bg-opacity-10 h-24 w-24 p-px"
              >
                <div
                  class="mask mask-squircle bg-white flex items-center justify-center h-full w-full"
                >
                  <img
                    class="align-middle max-h-full max-w-full scale-150"
                    src="/images/Cookpad_Logo.png"
                    alt="Cookpad Logo"
                  />
                </div>
              </div>
            </div>
            <div class="flex-1">
              <div class="text-lg font-extrabold">Cookpad</div>
              <div class="text-base-content/70 text-sm">
                Software Engineer – Internship
              </div>
              <div class="text-base-content/70 text-sm">
                August 2022 – September 2022
              </div>
              <div class="text-base-content/70 text-sm">Kanagawa, Japan</div>
            </div>
          </div>
          <hr class="my-3" />
          <div class="prose text-sm mb-3">
            <strong>Responsibility:</strong>
            <p>
              Discovery of user issues, planning, development, and post-release
              verification.
            </p>
            <strong>Achievement:</strong>
            <ul class="list-disc list-outside ml-5">
              <li>
                Collaborated with the backend team and improved the UI/UX of the
                Cookpad iOS app.
              </li>
            </ul>
          </div>
          <div>
            <div class="badge badge-ghost mr-1">iOS</div>
            <div class="badge badge-ghost mr-1">Swift</div>
            <div class="badge badge-ghost mr-1">Swift UI</div>
            <div class="badge badge-ghost mr-1">UI Kit</div>
          </div>
        </div>
      </div>
      <!-- End of Employment -->

      <h2 class="text-center">Education</h2>

      <div class="flex flex-col gap-5 mx-auto max-w-2xl">
        <div
          class="not-prose bg-base-100 rounded-box w-full shadow-xl p-4 pt-4 pb-4"
        >
          <div class="flex gap-4 my-2">
            <div class="avatar flex-none">
              <div
                class="mask mask-square bg-base-content h-24 w-24 bg-opacity-10"
              >
                <img
                  src="/images/TokyoTech_Logo.jpg"
                  width="94"
                  height="94"
                  alt="TokyoTech Logo"
                  class="mask mask-square"
                />
              </div>
            </div>
            <div class="flex-1">
              <div class="text-lg font-extrabold">
                Tokyo Institute of Technology
              </div>
              <div class="text-base-content/70 text-sm">
                Master's Degree, Department of Computer Science
              </div>
              <div class="text-base-content/70 text-sm">
                April 2022 – Present
              </div>
              <div class="text-base-content/70 text-sm">Tokyo, Japan</div>
            </div>
          </div>
        </div>

        <div
          class="not-prose bg-base-100 rounded-box w-full shadow-xl p-4 pt-4 pb-4"
        >
          <div class="flex gap-4 my-2">
            <div class="avatar flex-none">
              <div
                class="mask mask-square bg-base-content h-24 w-24 bg-opacity-10"
              >
                <img
                  src="/images/TokyoTech_Logo.jpg"
                  width="94"
                  height="94"
                  alt="TokyoTech Logo"
                  class="mask mask-square"
                />
              </div>
            </div>
            <div class="flex-1">
              <div class="text-lg font-extrabold">
                Tokyo Institute of Technology
              </div>
              <div class="text-base-content/70 text-sm">
                Bachelor's Degree, Department of Computer Science
              </div>
              <div class="text-base-content/70 text-sm">
                April 2018 – March 2022
              </div>
              <div class="text-base-content/70 text-sm">Tokyo, Japan</div>
            </div>
          </div>
        </div>
        <div
          class="not-prose bg-base-100 rounded-box w-full shadow-xl p-4 pt-4 pb-4"
        >
          <div class="flex gap-4 my-2">
            <div class="avatar flex-none">
              <div
                class="mask mask-square bg-base-content h-24 w-24 bg-opacity-10"
              >
                <img
                  src="/images/Kaisei_Logo.jpg"
                  width="94"
                  height="94"
                  alt="Kaisei Academy Logo"
                  class="mask mask-square"
                />
              </div>
            </div>
            <div class="flex-1">
              <div class="text-lg font-extrabold">
                Kaisei Academy High School
              </div>
              <div class="text-base-content/70 text-sm">
                April 2014 – March 2017
              </div>
              <div class="text-base-content/70 text-sm">Tokyo, Japan</div>
            </div>
          </div>
        </div>
      </div>
      <!-- End of Education -->
    </article>
  </div>
</template>

<script lang="ts">
import ZennIcon from "../components/icons/ZennIcon.vue";
import AtCoderIcon from "../components/icons/AtCoderIcon.vue";

export default {
  components: {
    ZennIcon,
    AtCoderIcon,
  },
};
</script>
