const Service = require('egg').Service;

class ProjectService  extends Service {
  // 获取项目列表
  async getProjectList() {
    const {
      ctx,
    } = this;
    const result = await ctx.model.Project.find();
    return result;
  }
  async getProDetail(){
    const {
      ctx,
    } = this;
    // const result = await ctx.model.Project.findOne({
    //   id
    // })
    return result;
  }
}
module.exports = ProjectService;