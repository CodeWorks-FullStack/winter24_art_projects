import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  // NOTE DO NOT OVERWRITE THIS WITH SOMEONE ELSE'S PROFILE INFORMATION
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,
  /** @type {import('./models/Project.js').Project[]} */
  projects: [],
  /** @type {import('./models/Project.js').Project} */
  activeProject: null,
  /** @type {import('./models/Account.js').Account} profile information separate from account*/
  activeProfile: null
})

