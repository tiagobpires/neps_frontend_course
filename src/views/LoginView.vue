<template>
  <div v-if="user == null">
    <h1>Login</h1>

    <form @submit.prevent="login" class="login-form">
      <input type="text" placeholder="Username" v-model="username" />
      <input type="password" placeholder="Password" v-model="password" />

      <button type="submit" class="login-button">Enter</button>
    </form>
  </div>
  <div v-else>
    <h1>User</h1>
    <div class="user-info">
      <p><b>ID:</b> {{ user.id }}</p>
      <p><b>Username:</b> {{ user.username }}</p>
      <p><b>Email:</b> {{ user.email }}</p>
      <p><b>Created at:</b> {{ created_at_formatted }}</p>
      <p><b>Birthdate:</b> {{ birthdate_formatted }}</p>
      <p><b>Role:</b> {{ user.role.name }}</p>

      <button class="logout-button" @click="logout">Logout</button>
    </div>
  </div>
</template>

<script setup>
import { useAxios } from "@/composables/useAxios";
import { DateTime } from "luxon";
import { ref, onMounted, computed } from "vue";
import { useToast } from "vue-toast-notification";

const { post, get, storeToken } = useAxios();
const $toast = useToast();

const username = ref("");
const password = ref("");
const user = ref(null);

const fetchUser = () => {
  get("/users/me").then((response) => {
    user.value = response.data;
  });
};

const login = () => {
  post("/auth/login", {
    username: username.value,
    password: password.value
  })
    .then((response) => {
      storeToken(response.data.access_token);
      fetchUser();
      $toast.success("Login successful!", { position: "bottom" });
    })
    .catch(() => {
      $toast.error("Invalid credentials!", { position: "bottom" });
    });
};

const logout = () => {
  user.value = null;
  localStorage.removeItem("authToken");
  $toast.info("Logout successful!", { position: "bottom" });
};

const created_at_formatted = computed(() => {
  return DateTime.fromISO(user.value.created_at).toFormat("dd/MM/yyyy HH:mm");
});

const birthdate_formatted = computed(() => {
  return DateTime.fromISO(user.value.birthdate).toFormat("dd/MM/yyyy");
});

onMounted(() => {
  if (localStorage.getItem("authToken")) {
    fetchUser();
  }
});
</script>

<style lang="scss" scoped>
.login-form {
  max-width: 400px;
  width: 100%;
}

.login-button {
  width: 100%;
}
</style>
