const url = 'http://localhost:3000';

export default {
  async fetchDances() {
    const result = await fetch(`${url}/dances`);
    const data = await result.json();
    return data;
  },

  async fetchDance(id) {
    const result = await fetch(`${url}/dances/${id}`);
    const data = await result.json();
    return data;
  },

  async postDance(dance) {
    const result = await fetch(`${url}/dances`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(dance),
    });

    const data = await result.json();
    return data;
  },

  async deleteDance(id) {
    const result = await fetch(`${url}/dances/${id}`, {
      method: "DELETE",
    });

    return result;
  },

  async putDance(dance) {
    const result = await fetch(`${url}/dances/${dance.id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(dance),
    });

    const data = await result.json();
    return data;
  },
};
