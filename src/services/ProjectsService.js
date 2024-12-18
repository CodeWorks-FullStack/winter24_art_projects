import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Project } from "@/models/Project.js"
import { AppState } from "@/AppState.js"

class ProjectsService {
  async getProjectsByCreatorId(profileId) {
    AppState.projects = [] // clears out ghost data
    const response = await api.get(`api/projects?creatorId=${profileId}`)
    logger.log('GOT PORJECTS BY CREATOR ID', response.data)
    const projects = response.data.map(projectPOJO => new Project(projectPOJO))
    AppState.projects = projects
  }
  async getProjects() {
    AppState.projects = [] // clears out ghost data
    const response = await api.get('api/projects')
    logger.log('GOT PROJECTS 🖼️', response.data)
    // NOTE always look at your response data in console so you know where to map
    const projects = response.data.map(projectPOJO => new Project(projectPOJO))
    AppState.projects = projects
  }
  setActiveProject(project) {
    AppState.activeProject = project
  }
}

export const projectsService = new ProjectsService()