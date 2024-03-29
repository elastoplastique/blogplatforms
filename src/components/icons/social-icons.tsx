const android = require('../../../public/media/socials/android.svg')
const apple = require('../../../public/media/socials/apple.svg')
const bing = require('../../../public/media/socials/bing.svg')
const brave = require('../../../public/media/socials/brave.svg')
const chrome = require('../../../public/media/socials/chrome.svg')
const cloudflare = require('../../../public/media/socials/cloudflare.svg')
const coursera = require('../../../public/media/socials/coursera.svg')
const css = require('../../../public/media/socials/css.svg')
const digitalocean = require('../../../public/media/socials/digitalocean.svg')
const discord = require('../../../public/media/socials/discord.svg')
const disneyplus = require('../../../public/media/socials/disneyplus.svg')
const expressjs = require('../../../public/media/socials/expressjs.svg')
const facebook = require('../../../public/media/socials/facebook.svg')
const figma = require('../../../public/media/socials/figma.svg')
const firebase = require('../../../public/media/socials/firebase.svg')
const firefox = require('../../../public/media/socials/firefox.svg')
const github = require('../../../public/media/socials/github.svg')
const graphql = require('../../../public/media/socials/graphql.svg')
const homebrew = require('../../../public/media/socials/homebrew.svg')
const html5 = require('../../../public/media/socials/html5.svg')
const instagram = require('../../../public/media/socials/instagram.svg')
const ios = require('../../../public/media/socials/ios.svg')
const javascript = require('../../../public/media/socials/javascript.svg')
const jquery = require('../../../public/media/socials/jquery.svg')
const linear = require('../../../public/media/socials/linear.svg')
const linkedin = require('../../../public/media/socials/linkedin.svg')
const linux = require('../../../public/media/socials/linux.svg')
const mastodon = require('../../../public/media/socials/mastodon.svg')
const messenger = require('../../../public/media/socials/messenger.svg')
const microsoft = require('../../../public/media/socials/microsoft.svg')
const mongodb = require('../../../public/media/socials/mongodb.svg')
const mysql = require('../../../public/media/socials/mysql.svg')
const netflix = require('../../../public/media/socials/netflix.svg')
const netlify = require('../../../public/media/socials/netlify.svg')
const nextjs = require('../../../public/media/socials/nextjs.svg')
const npm = require('../../../public/media/socials/npm.svg')
const obsidian = require('../../../public/media/socials/obsidian.svg')
const payload = require('../../../public/media/socials/payload.svg')
const php = require('../../../public/media/socials/php.svg')
const pinterest = require('../../../public/media/socials/pinterest.svg')
const postgresql = require('../../../public/media/socials/postgresql.svg')
const video = require('../../../public/media/socials/prime-video.svg')
const python = require('../../../public/media/socials/python.svg')
const redis = require('../../../public/media/socials/redis.svg')
const ruby = require('../../../public/media/socials/ruby.svg')
const skype = require('../../../public/media/socials/skype.svg')
const spotify = require('../../../public/media/socials/spotify.svg')
const stackblitz = require('../../../public/media/socials/stackblitz.svg')
const strapi = require('../../../public/media/socials/strapi.svg')
const supabase = require('../../../public/media/socials/supabase.svg')
const swift = require('../../../public/media/socials/swift.svg')
const tailwindcss = require('../../../public/media/socials/tailwindcss.svg')
const telegram = require('../../../public/media/socials/telegram.svg')
const threads = require('../../../public/media/socials/threads.svg')
const tiktok = require('../../../public/media/socials/tiktok.svg')
const tor = require('../../../public/media/socials/tor.svg')
const twitter = require('../../../public/media/socials/twitter.svg')
const x = require('../../../public/media/socials/twitter.svg')
const typescript = require('../../../public/media/socials/typescript.svg')
const udacity = require('../../../public/media/socials/udacity.svg')
const udemy = require('../../../public/media/socials/udemy.svg')
const vercel = require('../../../public/media/socials/vercel.svg')
const website = require('../../../public/media/socials/website.svg')
const whatsapp = require('../../../public/media/socials/whatsapp.svg')
const wikidata = require('../../../public/media/socials/wikidata.svg')
const wikipedia = require('../../../public/media/socials/wikipedia.svg')
const windows = require('../../../public/media/socials/windows.svg')
const wordpress = require('../../../public/media/socials/wordpress.svg')
const youtube = require('../../../public/media/socials/youtube.svg')

// function that takes icon name and returns the icon
// @ts-ignore
export function getSocialIcon(icon: string) {
   switch (icon) {
      case 'android':
         return android;
      case 'apple':
         return apple;
      case 'bing':
         return bing;
      case 'brave':
         return brave;
      case 'chrome':
         return chrome;
      case 'cloudflare':
         return cloudflare;
      case 'coursera':
         return coursera;
      case 'css':
         return css;
      case 'digitalocean':
         return digitalocean;
      case 'discord':
         return discord;
      case 'disneyplus':
         return disneyplus;
      case 'expressjs':
         return expressjs;
      case 'facebook':
         return facebook;
      case 'figma':
         return figma;
      case 'firebase':
         return firebase;
      case 'firefox':
         return firefox;
      case 'github':
         return github;
      case 'graphql':
         return graphql;
      case 'homebrew':
         return homebrew;
      case 'html5':
         return html5;
      case 'instagram':
         return instagram;
      case 'ios':
         return ios;
      case 'javascript':
         return javascript;
      case 'jquery':
         return jquery;
      case 'linear':
         return linear;
      case 'linkedin':
         return linkedin;
      case 'linux':
         return linux;
      case 'mastodon':
         return mastodon;
      case 'messenger':
         return messenger;
      case 'microsoft':
         return microsoft;
      case 'mongodb':
         return mongodb;
      case 'mysql':
         return mysql;
      case 'netflix':
         return netflix;
      case 'netlify':
         return netlify;
      case 'nextjs':
         return nextjs;
      case 'npm':
         return npm;
      case 'obsidian':
         return obsidian;
      case 'payload':
         return payload;
      case 'php':
         return php;
      case 'pinterest':
         return pinterest;
      case 'postgresql':
         return postgresql;
      case 'prime-video':
         return video;
      case 'python':
         return python;
      case 'redis':
         return redis;
      case 'ruby':
         return ruby;
      case 'skype':
         return skype;
      case 'spotify':
         return spotify;
      case 'stackblitz':
         return stackblitz;
      case 'strapi':
         return strapi;
      case 'suppabase':
         return supabase;
      case 'swift':
         return swift;
      case 'tailwindcss':
         return tailwindcss;
      case 'telegram':
         return telegram;
      case 'threads':
         return threads;
      case 'tiktok':
         return tiktok;
      case 'tor':
         return tor;
      case 'twitter':
         return twitter;
      case 'x':
         return x;
      case 'typescript':
         return typescript;
      case 'udacity':
         return udacity;
      case 'udemy':
         return udemy;
      case 'vercel':
         return vercel;
      case 'website':
         return website;
      case 'whatsapp':
         return whatsapp;
      case 'wikidata':
         return wikidata;
      case 'wikipedia':
         return wikipedia;
      case 'windows':
         return windows;
      case 'wordpress':
         return wordpress;
      case 'youtube':
         return youtube;
      default:
         return null;
   }
}