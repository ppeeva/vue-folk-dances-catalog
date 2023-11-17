<template>
  <div :key="dance.id" v-for="dance in dances">
    <Dance
      @toggle-learned="$emit('toggle-learned', dance.id)"
      @delete-dance="$emit('delete-dance', dance.id)"
      :dance="dance"
    />
  </div>
</template>

<script>
import Dance from "@/components/Dance.vue";

export default {
  name: "Dances",
  components: {
    Dance,
  },
  props: {
    dances: Array,
  },
  emits: ["delete-dance", "toggle-learned"],
};
</script>
