'use strict';

const Controller = require('egg').Controller;


class ProjectController extends Controller {
  async index() {
    const { ctx } = this;
    const data = await ctx.service.project.getProjectList();
    ctx.body ={
      success: true,
      data,
    };;
  }
}

module.exports = ProjectController;
