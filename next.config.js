const isStaticExport = process.env.npm_lifecycle_event === 'build'

module.exports = {
  ...(isStaticExport ? { output: 'export' } : {}),
  images: { unoptimized: true },
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['node_modules'],
  },
}
