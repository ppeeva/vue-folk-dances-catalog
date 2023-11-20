<template>
  <AddDance v-show="showAddDance" @add-dance="addDance" />
  <Dances
    @toggle-learned="toggleLearned"
    @delete-dance="deleteDance"
    :dances="dances"
  />
</template>

<script>
import Dances from "@/components/Dances.vue";
import AddDance from "@/components/AddDance.vue";
import danceService from '@/services/dance.service'

export default {
  name: "Home",
  components: {
    Dances,
    AddDance,
  },
  props: {
    showAddDance: Boolean,
  },
  data() {
    return {
      dances: [],
    };
  },
  methods: {
    async addDance(dance) {
      const data = await danceService.postDance(dance);
      this.dances = [...this.dances, data];
    },
    async deleteDance(id) {
      if (confirm("Are you sure?")) {
        const result = await danceService.deleteDance(id);

        result.status === 200
          ? (this.dances = this.dances.filter((dance) => dance.id !== id))
          : alert("Error on deleting dance");
      }
    },
    async toggleLearned(id) {
      const danceToToggle = await danceService.fetchDance(id);
      const updateDance = {
        ...danceToToggle,
        learned: !danceToToggle.learned,
      };

      const data = await danceService.putDance(updateDance);

      this.dances = this.dances.map((dance) =>
        dance.id === id ? { ...dance, learned: data.learned } : dance
      );
    },
    
  },
  async created() {
    this.dances = await danceService.fetchDances();
    this.dances = this.dances.sort((a, b) => a.title.localeCompare(b.title));
  },
};
</script>
