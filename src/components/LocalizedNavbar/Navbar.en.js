const enNavbar = {
  hideOnScroll: true,
  title: "ChatGPT SC",
  logo: {
    alt: "ChatGPT Shortcuts",
    src: "img/logo.svg",
  },
  items: [
    {
      href: 'https://nav-web.luomor.com/',
      label: 'nav',
      target: '_blank',
      position: 'left',
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

module.exports = enNavbar;
