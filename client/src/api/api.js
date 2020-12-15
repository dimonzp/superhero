import axios from "axios";

export const heroAPI = {
  async getHeroes(page) {
    const res = await axios.get("/hero", {
      params: {
        page,
      },
    });

    return res.data;
  },
  async getHeroById(id) {
    const res = await axios.post(`/hero/${id}`);

    return res.data;
  },
  async setHero(hero) {
    const res = await axios.put(`/hero/set`, { hero });
    return res.data;
  },
  async deleteHero(id) {
    const res = await axios.put(`/hero/delete`, { id });
    return res.data;
  },
};
