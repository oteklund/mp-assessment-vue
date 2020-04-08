module.exports = {
  pluginOptions: {
    s3Deploy: {
      registry: undefined,
      awsProfile: 'Administrator',
      overrideEndpoint: false,
      region: 'eu-west-1',
      bucket: 'ottos-aws-bucket',
      createBucket: true,
      staticHosting: true,
      staticIndexPage: 'index.html',
      staticErrorPage: 'index.html',
      assetPath: 'dist',
      assetMatch: '**',
      deployPath: '/',
      acl: 'public-read',
      pwa: false,
      enableCloudfront: false,
      pluginVersion: '4.0.0-rc3',
      uploadConcurrency: 5
    }
  }
}
