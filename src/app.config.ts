export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/user/user'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: "#9b9b9b",
    selectedColor: "#9400d3",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "./icons/home.png", //https://iconpark.bytedance.com/
        selectedIconPath: "./icons/home-fill.png"
      },
      {
        pagePath: "pages/user/user",
        text: "我的",
        iconPath: "./icons/avatar.png",
        selectedIconPath: "./icons/avatar-fill.png"
      }
    ]
  },
  darkmode: true
})
