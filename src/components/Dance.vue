<template>
  <div
    @dblclick="$emit('toggle-learned', dance.id)"
    :class="[dance.learned ? 'learned' : '', 'dance']"
  >
    <h3>
      {{ dance.title }}
      <i @click="$emit('delete-dance', dance.id)" class="fas fa-times"></i>
    </h3>
    <p>
      {{ dance.district }}
      <i @click="goToUpdate(dance.id)" class="fa-solid fa-pencil"></i>
    </p>
  </div>
</template>

<script>
export default {
  name: "Dance",
  props: {
    dance: Object,
  },
  methods: {
    goToUpdate(id) {
      this.$router.push({ name: "Update", params: { id } });
    },
  },
};
</script>

<style scoped>
.fa-times {
  color: red;
}

.fa-pencil {
  color: blue;
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

.dance h3,
p {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
