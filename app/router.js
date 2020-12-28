'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/project/getAllProjects', controller.project.index);
  router.get('/project/getProDetail', controller.project.getProDetail);
};
