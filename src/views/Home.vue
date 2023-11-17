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
      const result = await fetch("api/dances", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(dance),
      });

      const data = await result.json();

      this.dances = [...this.dances, data];
    },
    async deleteDance(id) {
      if (confirm("Are you sure?")) {
        const result = await fetch(`api/dances/${id}`, {
          method: "DELETE",
        });

        result.status === 200
          ? (this.dances = this.dances.filter((dance) => dance.id !== id))
          : alert("Error on deleting dance");
      }
    },
    async toggleLearned(id) {
      const danceToToggle = await this.fetchDance(id);
      const updateDance = {
        ...danceToToggle,
        learned: !danceToToggle.learned,
      };

      const result = await fetch(`api/dances/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updateDance),
      });

      const data = await result.json();

      this.dances = this.dances.map((dance) =>
        dance.id === id ? { ...dance, learned: data.learned } : dance
      );
    },
    async fetchDances() {
      const result = await fetch("api/dances");
      const data = await result.json();
      return data;
    },
    async fetchDance(id) {
      const result = await fetch(`api/dances/${id}`);
      const data = await result.json();
      return data;
    },
  },
  async created() {
    this.dances = await this.fetchDances();
  },
};
</script>
