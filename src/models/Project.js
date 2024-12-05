export class Project {
  constructor(data) {
    this.id = data.id
    this.title = data.title
    this.coverImg = data.coverImg
    this.creatorId = data.creatorId
    this.projectImgs = data.projectImgs
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
    // TODO show how to get intellisense on this
    this.creator = data.creator
  }
}
