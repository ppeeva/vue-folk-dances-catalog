<template>
  <header>
    <h1>{{ title }}</h1>
    <Button
      v-show="homePage"
      @btn-click="$emit('btn-click')"
      :text="showAddDance ? 'Close' : 'Add folk dance'"
      :color="showAddDance ? 'red' : 'green'"
    ></Button>
  </header>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  name: "Header",
  components: {
    Button,
  },
  props: {
    title: String,
    showAddDance: Boolean,
  },
  computed: {
    homePage() {
      if (this.$route.path === "/") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
