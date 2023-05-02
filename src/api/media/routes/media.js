module.exports = {
  routes: [
    {
      method: "GET",
      path: "/media/:filename",
      handler: "media.download",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
