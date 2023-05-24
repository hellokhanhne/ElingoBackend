"use strict";

/**
 * lession controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::lession.lession", ({ strapi }) => ({
  async findOne(ctx) {
    const entry = await strapi.db.query("api::lession.lession").findOne({
      where: { id: ctx.request.params.id },
      populate: {
        questions: {
          populate: {
            word_medias: {
              populate: {
                url: true,
              },
            },
            media: true,
          },
        },
      },
    });
    if (!entry) {
      throw new Error("Couldn't find entry");
    }
    entry.questions.sort((a, b) => a.id - b.id);
    return entry;
  },
  async completed(ctx) {
    const entry = await strapi.db.query("api::lession.lession").findOne({
      where: { id: ctx.request.params.id },
      populate: {
        complete_users: true,
      },
    });

    const update = await strapi.entityService.update(
      "api::lession.lession",
      entry.id,
      {
        data: {
          complete_users: [
            ...entry.complete_users.map((e) => e.id),
            ctx.state.user.id,
          ],
        },
      }
    );

    ctx.body = update;
  },
}));
