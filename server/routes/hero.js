const express = require("express");
const router = express.Router();
const heroService = require("../services/HeroService");

router.get("/", async (req, res) => {
  try {
    const { page } = req.query;
    const heroes = await heroService.getAllHeroes(page);
    res.json(heroes);
  } catch (error) {
    res.status(500).json({ message: "Get All Heroes error" });
  }
});

router.post("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw Error("no params");
    }
    const heroProfile = await heroService.getHeroById(id);
    res.status(200).json(heroProfile);
  } catch (error) {
    res.status(500).json({ message: "Get Hero Profile error" });
  }
});

router.put("/set", async function (req, res) {
  try {
    const {
      nickname,
      real_name,
      origin_description,
      superpowers,
      catch_phrase,
      images,
    } = req.body.hero;
    const isNewHero = await heroService.isNewHero(nickname);
    if (isNewHero) {
      await heroService.createHero(
        nickname,
        real_name,
        origin_description,
        superpowers,
        catch_phrase,
        images
      );
      const allHeroes = await heroService.getAllHeroes();
      res.json(allHeroes);
    } else {
      await heroService.updateHero(req.body.hero);
      const allHeroes = await heroService.getAllHeroes();
      res.json(allHeroes);
    }
  } catch (error) {
    res
      .status(500)
      .json({ reason: error.message, message: "Get Hero Profile error" });
  }
});

router.put("/delete", async (req, res) => {
  try {
    const { id } = req.body;
    await heroService.deleteHero(id);
    const allHeroes = await heroService.getAllHeroes();
    res.json(allHeroes);
  } catch (error) {
    res.status(500).json({ message: "Get Hero Profile error" });
  }
});

module.exports = router;
