'use strict';

const Controller = require('egg').Controller;


class OfferController extends Controller {
  async index() {
    const { ctx } = this;
    const data = await ctx.service.offer.getOfferList();
    ctx.body = {
      success: true,
      data,
    };
  }
}

module.exports = OfferController;
