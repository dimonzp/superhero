const Hero = require("../model/Hero");
const base64Img = require("base64-img");
const uuid = require("node-uuid");

const getResolution = (string) => {
  const a = string.split("/")[1];
  return `.${a.split(";")[0]}`;
};

const savePhoto = async (images64) => {
  let resolution = "";
  const images = await Promise.all(
    images64.map(async (i) => {
      if (i.uploaded_file) {
        resolution = getResolution(i.uploaded_file);
        const imageName = `${uuid.v4()}`;
        const s = 42;

        base64Img.img(
          i.uploaded_file,
          "./public/images",
          imageName,
          function (err, filepath) {
            if (err) {
              throw Error("save image error");
            }

          }
        )
        const filepath = `/images/${imageName + ".jpg"}`;
        return { imageName, filepath };
      } else {
        return i;
      }
    })
  );
  return images;
};

const heroService = {
  async getAllHeroes(page = 1) {
    try {
      const allHeroes = await (await Hero.find({})).reverse();

      const allHeroesCount = allHeroes.length;
      const size = 5;
      const fiveHeroes = [];
      const s = Math.ceil(allHeroesCount / size);
      for (let i = 0; i < s; i++) {
        fiveHeroes[i] = allHeroes.slice(i * size, i * size + size);
      }
      const heroes = fiveHeroes[page - 1];
      return { heroes, allHeroesCount };
    } catch (error) {
      throw Error("get all heroes from mongodb error");
    }
  },
  getHeroById(id) {
    return Hero.findById(id);
  },
  async isNewHero(nickname) {
    return !(await Hero.findOne({ nickname }));
  },
  async createHero(
    nickname,
    real_name,
    origin_description,
    superpowers,
    catch_phrase,
    images
  ) {
    const urlImages = await savePhoto(images);

    await Hero.create({
      nickname,
      real_name,
      origin_description,
      superpowers,
      catch_phrase,
      images: urlImages,
    });
  },
  async updateHero(hero) {
    const {
      nickname,
      real_name,
      origin_description,
      superpowers,
      catch_phrase,
      images,
    } = hero;
    const urlImages = await savePhoto(images);
    await Hero.findOneAndUpdate(
      { nickname },
      {
        $set: {
          real_name,
          origin_description,
          superpowers,
          catch_phrase,
          images: urlImages,
        },
      }
    );
  },
  async deleteHero(id) {
    const s = 42;
    await Hero.findByIdAndDelete(id);
  },
};
module.exports = heroService;
