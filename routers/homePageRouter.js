const { Router } = require("express");
const story = require("../models/story");
const Homepages = require("../models").homepage;
const Story = require("../models").story;

const router = new Router();

router.delete("/:id", async (req, res, next) => {
  try {
    const storyId = parseInt(req.params.id);
    // console.log(Story.findByPk);
    const storyToDelete = await Story.findByPk(storyId);
    await storyToDelete.destroy();
    res.send(storyToDelete);
  } catch (error) {
    next(error);
  }
});

router.post("/:id/stories", async (req, res, next) => {
  const { name, imageUrl, content } = req.body;
  try {
    const homepage = await Homepages.findByPk(req.params.id);

    const createdPost = await Story.create({
      name,
      imageUrl,
      content,
      homepageId: homepage.id,
    });
    console.log(createdPost);
    res.send(createdPost);
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const homepages = await Homepages.findAll({ include: Story });
    res.send(homepages);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
