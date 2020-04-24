// Gatsby hook: Page created
exports.onCreatePage = ({ page, actions }) => {
  if (page.path.match(/^\/dashboard/)) {
    // Globbing all `/dashboard/*` to `dashboard component
    page.matchPath = '/dashboard/*';
    actions.createPage(page);
  }
};