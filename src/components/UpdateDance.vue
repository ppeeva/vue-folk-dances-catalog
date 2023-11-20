<template>
  <form @submit="onSubmit" class="update-form">
    <div class="form-control">
      <label>Folk Dance</label>
      <input type="text" v-model="dance.title" name="title" placeholder="Add Title" />
    </div>
    <div class="form-control">
      <label>District</label>
      <input
        type="text"
        v-model="dance.district"
        name="district"
        placeholder="Add District"
      />
    </div>
    <div class="form-control form-control-check">
      <label>Have learned it?</label>
      <input type="checkbox" v-model="dance.learned" name="learned" />
    </div>

    <input type="submit" value="Save Dance" class="btn btn-block" />
  </form>
</template>

<script>


export default {
  name: "UpdateDance",
  props: {
    dance: Object,
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      if (!this.dance.title) {
        alert("Please add a title");
        return;
      }

      this.$emit("update-dance");
    },
  },
};
</script>

<style scoped>
.update-form {
  margin-bottom: 40px;
}

.form-control {
  margin: 20px 0;
}

.form-control label {
  display: block;
}

.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-control-check label {
  flex: 1;
}

.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>
