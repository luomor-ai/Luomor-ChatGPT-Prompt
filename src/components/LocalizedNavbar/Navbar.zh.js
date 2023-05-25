const zhNavbar = {
  hideOnScroll: true,
  title: "ChatGPT SC",
  logo: {
    alt: "ChatGPT Shortcuts",
    src: "img/logo.svg",
  },
  items: [
    {
      to: "https://note.luomor.com/posts/2023-02-27-chatgpt_shortcuts.html",
      label: "ChatGPT Shortcut 原理说明",
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
      to: "https://xq7pd3qu17.feishu.cn/share/base/form/shrcnK7oaSPaAcj1YAHfy4jo0Jh",
      label: "反馈/添加提示词",
      position: "left",
    },
    { type: "localeDropdown", position: "right" },
    {
      href: "https://github.com/luomor-ai/ChatGPT-Shortcut",
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
