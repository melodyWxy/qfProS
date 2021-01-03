'use strict';

const Controller = require('egg').Controller;


class OfferController extends Controller {
  async index() {
    const { ctx } = this;
    // const {typeId = "0001"} = ctx.query || {};
    const data = await ctx.service.offer.getOfferList();
    ctx.body ={
      success: true,
      data,
    };;
  }
//   async getProDetail() {
//     const { ctx } = this;
//     const {typeId = "0001", proId = "0001" } = ctx.query || {};
//     const data = await ctx.service.project.getProDetail(typeId, proId);
//     ctx.body ={ 
//       success: true,
//       data,
//     };
//   }
}

module.exports = OfferController;
