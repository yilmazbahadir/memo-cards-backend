import ProjectService from '../services/ProjectService';
import Project from '../models/Project';

export default class ProjectController {
  async getProjectList(req, res) {
    var projectService = new ProjectService();
    return await projectService.getProjectList();
  }

  async findProject(req, res) {
    var projectService = new ProjectService();
    const id = req.params.id;
    ('');
    return await projectService.findProject(id);
  }

  async createProject(req, res, next) {
    let projectModel = new Project({
      name: req.body.name,
      description: req.body.description,
      createdDate: Date.now(),
      tags: req.body.tags,
    });
    var projectService = new ProjectService();
    return projectService.createProject(projectModel);
  }

  async updateProject(req, res) {
    let projectModel = new Project({
      _id: req.body._id,
      name: req.body.name,
      description: req.body.description,
      createdDate: Date.now(),
      tags: req.body.tags,
    });
    const projectService = new ProjectService();
    return projectService.updateProject(projectModel);
  }

  async deleteProject(req, res, next) {
    const projectService = new ProjectService();
    let id = req.params.id;
    return projectService.deleteProject(id);
  }
}
