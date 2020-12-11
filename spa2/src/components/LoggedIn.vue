<template>
  <div class="custom-contain container">
    <div class="card">
      <div class="card-content center-align">
        <h1 v-if="activeUser">Welcome {{ activeUser.name }}</h1>
        <h1 v-if="!activeUser">Please try to login</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoggedIn",
  data() {
    return {
      activeUser: {
        name: null,
      },
    };
  },

  async created() {
    await this.refreshActiveUser();
  },
  methods: {
    async refreshActiveUser() {
      this.activeUser = await this.$auth.getUser();
    },
  },
};
</script>
