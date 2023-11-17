<template>
  <div
    @dblclick="$emit('toggle-learned', dance.id)"
    :class="[dance.learned ? 'learned' : '', 'dance']"
  >
    <h3>
      {{ dance.title }} <i @click="onDelete(dance.id)" class="fas fa-times"></i>
    </h3>
    <p>{{ dance.district }}</p>
  </div>
</template>

<script>
export default {
  name: "Dance",
  props: {
    dance: Object,
  },
  methods: {
    onDelete(id) {
      this.$emit("delete-dance", id);
    },
  },
};
</script>

<style scoped>
.fas {
  color: red;
}

.dance {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.dance.learned {
  border-left: 5px solid green;
}

.dance h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
