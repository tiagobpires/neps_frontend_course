<template>
  <nav>
    <img src="@/assets/logo.png" alt="" />
    <div>
      <router-link to="/">Feed</router-link>
      <router-link to="/create">Create Post</router-link>
      <router-link to="/login">Login</router-link>
    </div>
  </nav>
  <router-view class="view" />
</template>

<style lang="scss">
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 800px;
  margin-right: auto;
  margin-left: auto;
  padding: 30px;
  color: inherit;

  a {
    color: $text-secondary;
    font-weight: bold;
    text-decoration: none;
  }

  a:not(:last-child) {
    margin-right: 15px;
  }

  a.router-link-active {
    color: $background-light;
  }

  img {
    height: 60px;
  }

  @media only screen and (max-width: 481px) {
    padding: 5px;

    img {
      height: 30px;
    }

    a {
      font-size: 0.9rem;
    }
  }
}

.view {
  max-width: 800px;
  margin-right: auto;
  margin-left: auto;
  text-align: left;

  h1 {
    color: $text-on-primary;
  }
}
</style>
