module.exports = {
  routes: [
    {
      method: "PATCH",
      path: "/lessions/completed/:id",
      handler: "lession.completed",
    },
  ],
};
