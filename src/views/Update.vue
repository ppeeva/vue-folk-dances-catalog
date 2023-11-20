<template>
  <UpdateDance v-if="dance" :dance="dance" @update-dance="updateDance" />
</template>

<script>
import UpdateDance from "@/components/UpdateDance.vue";
import danceService from "@/services/dance.service";

export default {
  name: "Update",
  props: {
    id: Number,
  },
  components: {
    UpdateDance,
  },
  data() {
    return {
        dance: {
          type: Object,
          default: {}
        }
    };
  },
  async mounted() {
    this.dance = await danceService.fetchDance(this.id);
  },
  methods: {
    async updateDance(){
      await danceService.putDance(this.dance);
      this.$router.push({ name: "Home"});
    }
  }
};
</script>
