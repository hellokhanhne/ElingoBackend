"use strict";
const sendfile = require("koa-sendfile");
const path = require("path");
const fs = require("fs");

/**
 * A set of functions called "actions" for `media`
 */

module.exports = {
  async download(ctx) {
    const { filename } = ctx.request.params;
    const media_path = path.join(process.cwd(), `/public/uploads/${filename}`);
    ctx.attachment(media_path);
    ctx.body = fs.createReadStream(media_path);
  },
};
