const isStaticExport = process.env.npm_lifecycle_event === 'build'

module.exports = {
  ...(isStaticExport ? { output: 'export' } : {}),
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['node_modules'],
  },
}
