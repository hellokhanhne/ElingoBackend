"use strict";

/**
 * part controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

const sortAndModify = (array, userId) => {
  let sortArr = [...array];
  return sortArr
    .map((d) => ({
      ...d,
      isCompleted: d.complete_users.findIndex((u) => u.id === userId) !== -1,
    }))
    .sort((a, b) => a.id - b.id);
};

module.exports = createCoreController("api::part.part", ({ strapi }) => ({
  async find(ctx) {
    const user = ctx.state.user;
    const data = await strapi.db.query("api::part.part").findMany({
      populate: ["lessions", "complete_users", "lessions.complete_users"],
      orderBy: ["id"],
    });
    return data.map((d) => ({
      ...d,
      lessions: sortAndModify(d.lessions, user.id),
    }));
  },
}));
