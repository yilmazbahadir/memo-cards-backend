import ProjectModel from '../models/Project';

export default class ProjectService {
  constructor() {}

  getProjectList() {
    return ProjectModel.find().exec();
  }

  findProject(id) {
    return ProjectModel.findById(id);
  }

  createProject(projectModel, callback) {
    return projectModel.save(callback);
  }

  updateProject(projectModel) {
    return ProjectModel.findOneAndUpdate(
      { _id: projectModel._id },
      projectModel,
      { new: true }
    );
  }

  deleteProject(id, callback) {
    return ProjectModel.findOneAndDelete({ _id: id }, callback);
  }
}
