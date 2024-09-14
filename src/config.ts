import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'Grupo 932',
  subtitle: 'ISyTE',
  lang: 'es',         // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko'
  themeColor: {
    hue: 250,         // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: false,     // Hide the theme color picker for visitors
  },
  banner: {
    enable: true,
    src: 'assets/images/banner.jpg',   // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    position: 'center', // Equivalent to object-position, defaults center
    credit: {
      enable: false,         // Display the credit text of the banner image
      text: 'World X',              // Credit text to be displayed
      url: ''                // (Optional) URL link to the original artwork or artist's page
    }
  },
  favicon: [    // Leave this array empty to use the default favicon
    {
      src: '/favicon/avatar-icon-32.png',    // Path of the favicon, relative to the /public directory
      //theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
      //sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
    }
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    //LinkPreset.Home,
    LinkPreset.Archive,
    //LinkPreset.About,
    LinkPreset.Schedule,
    LinkPreset.History,
    {
      name: 'UABC',
      url: 'https://www.uabc.mx/',
      external: true,
    },
    {
      name: 'FIAD',
      url: 'http://fiad.ens.uabc.mx/',     // Internal links should not include the base path, as it is automatically added
      external: true,                               // Show an external link icon and will open in a new tab
    },
    {
      name: 'WhatsApp',
      url: 'https://web.whatsapp.com/',
      external: true,
    }
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/avatar.jpg',  // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: 'Javier Jalid S. S. (World X)',
  bio: '¡Bienvenidos a la página del Grupo 932!',
  links: [
    /*
    {
      name: 'Youtube',
      icon: 'bxl:youtube',
      url: 'https://www.youtube.com/@worldx1091',
    },/*
    {
      name: 'X',
      icon: 'fa6-brands:twitter',       // Visit https://icones.js.org/ for icon codes
                                        // You will need to install the corresponding icon set if it's not already included
                                        // `pnpm add @iconify-json/<icon-set-name>`
      url: 'https://x.com/WorldX15',
    },
    {
      name: 'Steam',
      icon: 'fa6-brands:steam',
      url: 'https://store.steampowered.com',
    },*/
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/World-X/grupo932',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: false,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
