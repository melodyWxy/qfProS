const Service = require('egg').Service;

class ProjectService  extends Service {
  // 获取项目列表
  async getProjectList(typeId) {
    const {
      ctx,
    } = this;
    const result = await ctx.model.Project.find({
      typeId
    });
    return result;
  }
  async getProDetail(typeId, proId){
    const {
      ctx,
    } = this;
    const result = await ctx.model.Project.findOne({
      typeId,
      proId
    })
    return result;
  }
}
module.exports = ProjectService;