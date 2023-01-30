<script setup lang="ts"></script>

<template>
    <div class="navbar bg-base-300 shadow mb-8">
        <div class="flex-1">
            <router-link to="/" class="btn btn-ghost normal-case text-xl">Nozomu's Portfolio</router-link>
        </div>
        <div class="hidden md:block flex-none">
            <ul class="menu menu-horizontal px-1">
                <li><router-link to="/">Home</router-link></li>
                <li>
                    <router-link to="/portfolio">Portfolio</router-link>
                </li>
                <li>
                    <router-link to="/skills">Skills</router-link>
                </li>
            </ul>
        </div>
        <div class="flex-none md:hidden">
            <div class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle">
                    <font-awesome-icon icon="fa-solid fa-bars" />
                </label>
                <ul tabindex="0"
                    class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><router-link to="/">Home</router-link></li>
                    <li>
                        <router-link to="/portfolio">Portfolio</router-link>
                    </li>
                    <li>
                        <router-link to="/skills">Skills</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <router-view />

    <footer class="footer footer-center p-4 bg-base-300 text-base-content mt-10">
        <div>
            <p>Copyright © 2023 - Nozomu Yamazaki</p>
        </div>
    </footer>
</template>
