"use strict";

/**
 * lession controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::lession.lession", ({ strapi }) => ({
  async findOne(ctx) {
    const entry = await strapi.db.query("api::lession.lession").findOne({
      where: { id: ctx.request.params.id },
      populate: ["questions"],
    });
    if (!entry) {
      throw new Error("Couldn't find entry");
    }
    entry.questions.sort((a, b) => a.id - b.id);
    return entry;
  },
}));
