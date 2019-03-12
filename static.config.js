
export default {
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {

    return [
      {
        path: '/',
        component: 'src/pages/index',
      }
    ]
  },
}
