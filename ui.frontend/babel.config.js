module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ['babel-plugin-module-resolver',
      {
        alias: {
          '@components': './src/components',
          '@assets': './src/assets',
          '@views': './src/views'
        }
      }
    ]
  ]
}
