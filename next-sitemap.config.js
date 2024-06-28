/** @type {import('next-sitemap').IConfig} */

const pathnames = ['/', '/home']
const locales = ['en', 'ru']
const excludePathnames = ['/admin']

module.exports = {
  siteUrl: process.env.BASE_URL,
  generateRobotsTxt: true,
  sitemapSize: 3000,
  exclude: excludePathnames,
  additionalPaths: async (config) => {
    const combinedArray = []

    for (let i = 0; i < pathnames.length; i++) {
      for (let j = 0; j < locales.length; j++) {
        const combineItem = {
          loc: `${locales[j]}${pathnames[i]}`,
          changefreq: config.changefreq,
          priority: config.priority,
          lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        }

        combinedArray.push(combineItem)
      }
    }

    return combinedArray
  },
}
