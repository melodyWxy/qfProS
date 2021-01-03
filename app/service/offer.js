const Service = require('egg').Service;

class OfferService  extends Service {
  // 获取项目列表
  async getOfferList(typeId) {
    const {
      ctx,
    } = this;
    const result = await ctx.model.Offer.find({
      typeId
    });
    return result;
  }
  
}
module.exports = OfferService;