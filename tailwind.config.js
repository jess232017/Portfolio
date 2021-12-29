module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,jsx,ts,js}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@themesberg/flowbite/plugin')
  ]
}
