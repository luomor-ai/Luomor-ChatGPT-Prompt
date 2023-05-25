const zhNavbar = {
  hideOnScroll: true,
  title: "Luomor ChatGPT Prompt",
  logo: {
    alt: "Luomor ChatGPT Prompt",
    src: "img/logo.svg",
  },
  items: [
    {
      to: "https://chatgpt.luomor.com/",
      label: "体验完成ChatGPT",
      position: "left",
    },
    {
      type: 'dropdown',
      label: '其他工具',
      position: 'left',
      items: [
        {
          label: '工具收藏',
          href: 'https://nav-web.luomor.com/',
        },
      ],
    },
    {
      to: "https://pokepangle.feishu.cn/share/base/form/shrcn7JoQTi4LzcfKOM9QLeb0he",
      label: "反馈/添加提示词",
      position: "left",
    },
    { type: "localeDropdown", position: "right" },
    {
      href: "https://github.com/luomor-ai/Luomor-ChatGPT-Prompt",
      position: "right",
      className: "header-github-link",
    },
    {
      href: "https://discord.gg/FmPjRqqn",
      position: "right",
      className: "header-discord-link",
    },
  ],
};

module.exports = zhNavbar;
