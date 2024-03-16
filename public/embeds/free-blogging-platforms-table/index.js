// ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═  ▶
// PLATFORM DATA
// ◀ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ # 
const rawData = [
   {
      name: 'Webflow',
      url: 'https://webflow.grsm.io/gr15bvbdlvfo',
      easeOfUse: 3,
      designFlexibility: 5,
      seoTools: 4,
      storage: '',
      limits: null,
      customDomain: { freePlan: false, paidPlan: true },
      ecommerce: { freePlan: false, paidPlan: true },
      exportContent: { freePlan: false, paidPlan: true },
      markdown: { freePlan: false, paidPlan: false },
      openSource: { freePlan: false, paidPlan: false },
      headless: { freePlan: false, paidPlan: false },
      codeInject: { freePlan: false, paidPlan: true }
   },
   {
      name: 'WebWave',
      url: 'https://webwave.me/ref/14072231082',
      easeOfUse: 5,
      designFlexibility: 5,
      seoTools: 5,
      storage: '',
      limits: null,
      customDomain: { freePlan: false, paidPlan: true },
      ecommerce: { freePlan: false, paidPlan: true },
      exportContent: { freePlan: false, paidPlan: true },
      markdown: { freePlan: false, paidPlan: false },
      openSource: { freePlan: false, paidPlan: false },
      headless: { freePlan: false, paidPlan: false },
      codeInject: { freePlan: false, paidPlan: true }
   },
   {
      name: 'WordPress.com',
      url: 'https://wordpress.com/',
      easeOfUse: 5,
      designFlexibility: 5,
      seoTools: 5,
      storage: '',
      limits: null,
      customDomain: { freePlan: false, paidPlan: true },
      ecommerce: { freePlan: false, paidPlan: true },
      exportContent: { freePlan: false, paidPlan: true },
      markdown: { freePlan: false, paidPlan: false },
      openSource: { freePlan: false, paidPlan: false },
      headless: { freePlan: false, paidPlan: false },
      codeInject: { freePlan: false, paidPlan: true }
   },
   {
      name: 'Wix',
      url: 'https://www.wix.com',
      easeOfUse: 5,
      designFlexibility: 5,
      seoTools: 5,
      storage: '',
      limits: null,
      customDomain: { freePlan: false, paidPlan: true },
      ecommerce: { freePlan: false, paidPlan: true },
      exportContent: { freePlan: false, paidPlan: true },
      markdown: { freePlan: false, paidPlan: false },
      openSource: { freePlan: false, paidPlan: false },
      headless: { freePlan: false, paidPlan: false },
      codeInject: { freePlan: false, paidPlan: true }
   },
   {
      name: 'Typedream',
      url: 'https://typedream.com/?via=blogplatforms',
      easeOfUse: 5,
      designFlexibility: 5,
      seoTools: 5,
      storage: '',
      limits: null,
      customDomain: { freePlan: false, paidPlan: true },
      ecommerce: { freePlan: false, paidPlan: true },
      exportContent: { freePlan: false, paidPlan: true },
      markdown: { freePlan: false, paidPlan: false },
      openSource: { freePlan: false, paidPlan: false },
      headless: { freePlan: false, paidPlan: false },
      codeInject: { freePlan: false, paidPlan: true }
   },
   {
      name: 'Tilda',
      url: 'https://tilda.com/',
      easeOfUse: 5,
      designFlexibility: 5,
      seoTools: 5,
      storage: '',
      limits: null,
      customDomain: { freePlan: false, paidPlan: true },
      ecommerce: { freePlan: false, paidPlan: true },
      exportContent: { freePlan: false, paidPlan: true },
      markdown: { freePlan: false, paidPlan: false },
      openSource: { freePlan: false, paidPlan: false },
      headless: { freePlan: false, paidPlan: false },
      codeInject: { freePlan: false, paidPlan: true }
   },
   {
      name: 'PageCloud',
      url: 'https://www.pagecloud.com/home-partners?gspk=Y2FuYnVyYWtzb2Z5YWxpb2dsdTMwNTQ&gsxid=Is2tDreeXpFm&utm_campaign=affiliate-referral-program&utm_medium=partner&utm_source=canburaksofyalioglu3054',
      easeOfUse: 5,
      designFlexibility: 5,
      seoTools: 5,
      storage: '',
      limits: null,
      customDomain: { freePlan: false, paidPlan: true },
      ecommerce: { freePlan: false, paidPlan: true },
      exportContent: { freePlan: false, paidPlan: true },
      markdown: { freePlan: false, paidPlan: false },
      openSource: { freePlan: false, paidPlan: false },
      headless: { freePlan: false, paidPlan: false },
      codeInject: { freePlan: false, paidPlan: true }
   },
   {
      name: 'Unicorn Platform',
      url: 'https://unicornplatform.com/?via=bloggingplatforms',
      easeOfUse: 5,
      designFlexibility: 3,
      seoTools: 2,
      storage: '',
      limits: null,
      customDomain: { freePlan: false, paidPlan: true },
      ecommerce: { freePlan: false, paidPlan: false },
      exportContent: { freePlan: false, paidPlan: true },
      markdown: { freePlan: false, paidPlan: false },
      openSource: { freePlan: false, paidPlan: false },
      headless: { freePlan: false, paidPlan: false },
      codeInject: { freePlan: false, paidPlan: true }
   },
   {
      name: 'Medium',
      url: 'https://medium.com/',
      easeOfUse: 5,
      designFlexibility: 1,
      seoTools: 2,
      storage: '',
      limits: null,
      customDomain: { freePlan: false, paidPlan: true },
      ecommerce: { freePlan: false, paidPlan: false },
      exportContent: { freePlan: true, paidPlan: true },
      markdown: { freePlan: false, paidPlan: false },
      openSource: { freePlan: false, paidPlan: false },
      headless: { freePlan: false, paidPlan: false },
      codeInject: { freePlan: false, paidPlan: false }
   },
   {
      name: 'Blogger',
      url: 'https://www.blogger.com/',
      easeOfUse: 4,
      designFlexibility: 2,
      seoTools: 4,
      storage: '',
      limits: null,
      customDomain: { freePlan: true, paidPlan: true },
      ecommerce: { freePlan: false, paidPlan: false },
      exportContent: { freePlan: true, paidPlan: true },
      markdown: { freePlan: false, paidPlan: false },
      openSource: { freePlan: false, paidPlan: false },
      headless: { freePlan: false, paidPlan: false },
      codeInject: { freePlan: false, paidPlan: false }
   },
   {
      name: 'Tumblr',
      url: 'https://www.tumblr.com/',
      easeOfUse: 5,
      designFlexibility: 5,
      seoTools: 5,
      storage: '',
      limits: null,
      customDomain: { freePlan: true, paidPlan: true },
      ecommerce: { freePlan: false, paidPlan: false },
      exportContent: { freePlan: false, paidPlan: false },
      markdown: { freePlan: false, paidPlan: false },
      openSource: { freePlan: false, paidPlan: false },
      headless: { freePlan: false, paidPlan: false },
      codeInject: { freePlan: false, paidPlan: true }
   },
   {
      name: 'Jimdo',
      url: 'https://www.jimdo.com/',
      easeOfUse: 3,
      designFlexibility: 3,
      seoTools: 3,
      storage: '',
      limits: null,
      customDomain: { freePlan: false, paidPlan: true },
      ecommerce: { freePlan: false, paidPlan: true },
      exportContent: { freePlan: false, paidPlan: false },
      markdown: { freePlan: false, paidPlan: false },
      openSource: { freePlan: false, paidPlan: false },
      headless: { freePlan: false, paidPlan: false },
      codeInject: { freePlan: true, paidPlan: true }
   },
   {
      name: 'Voog',
      url: 'https://www.voog.com/?referrer=bloggingplatforms-215',
      easeOfUse: 3,
      designFlexibility: 3,
      seoTools: 3,
      storage: '',
      limits: null,
      customDomain: { freePlan: false, paidPlan: true },
      ecommerce: { freePlan: false, paidPlan: true },
      exportContent: { freePlan: false, paidPlan: false },
      markdown: { freePlan: false, paidPlan: false },
      openSource: { freePlan: false, paidPlan: false },
      headless: { freePlan: false, paidPlan: false },
      codeInject: { freePlan: true, paidPlan: true }
   },
   {
      name: 'Studio',
      url: 'https://studio.design/',
      easeOfUse: 3,
      designFlexibility: 4,
      seoTools: 2,
      storage: null,
      limits: "100 CMS items & 10,000 monthly Page Views",
      customDomain: { freePlan: false, paidPlan: true },
      ecommerce: { freePlan: false, paidPlan: false },
      exportContent: { freePlan: false, paidPlan: false },
      markdown: { freePlan: false, paidPlan: false },
      openSource: { freePlan: false, paidPlan: false },
      headless: { freePlan: false, paidPlan: false },
      codeInject: { freePlan: false, paidPlan: true }
   },
   {
      name: 'Hashnode',
      url: 'https://hashnode.com/',
      easeOfUse: 5,
      designFlexibility: 2,
      seoTools: 3,
      storage: '',
      limits: null,
      customDomain: { freePlan: true, paidPlan: true },
      ecommerce: { freePlan: false, paidPlan: true },
      exportContent: { freePlan: true, paidPlan: true },
      markdown: { freePlan: true, paidPlan: true },
      openSource: { freePlan: false, paidPlan: false },
      headless: { freePlan: true, paidPlan: true },
      codeInject: { freePlan: true, paidPlan: true }
   },
   {
      name: 'DevDojo',
      url: 'https://devdojo.com/?ref=webmeister',
      easeOfUse: 4,
      designFlexibility: 1,
      seoTools: 1,
      storage: '',
      limits: null,
      customDomain: { freePlan: true, paidPlan: true },
      ecommerce: { freePlan: false, paidPlan: false },
      exportContent: { freePlan: true, paidPlan: true },
      markdown: { freePlan: true, paidPlan: true },
      openSource: { freePlan: true, paidPlan: false },
      headless: { freePlan: false, paidPlan: false },
      codeInject: { freePlan: false, paidPlan: false }
   },
   {
      name: 'Odoo',
      url: 'https://www.odoo.com/',
      easeOfUse: 3,
      designFlexibility: 1,
      seoTools: 2,
      storage: '',
      limits: null,
      customDomain: { freePlan: true, paidPlan: true },
      ecommerce: { freePlan: false, paidPlan: true },
      exportContent: { freePlan: true, paidPlan: true },
      markdown: { freePlan: false, paidPlan: false },
      openSource: { freePlan: true, paidPlan: true },
      headless: { freePlan: false, paidPlan: false },
      codeInject: { freePlan: true, paidPlan: true }
   },
   {
      name: 'Ghost',
      url: 'https://ghost.org/',
      easeOfUse: 4,
      designFlexibility: 3,
      seoTools: 3,
      storage: '',
      limits: 'Need a cloud instance to host your blog',
      customDomain: { freePlan: true, paidPlan: true },
      ecommerce: { freePlan: false, paidPlan: false },
      exportContent: { freePlan: true, paidPlan: true },
      markdown: { freePlan: true, paidPlan: true },
      openSource: { freePlan: true, paidPlan: true },
      headless: { freePlan: true, paidPlan: true },
      codeInject: { freePlan: true, paidPlan: true }
   },
   {
      name: 'WordPress.org',
      url: 'https://wordpress.org/',
      easeOfUse: 2,
      designFlexibility: 5,
      seoTools: 5,
      storage: '',
      limits: 'Need a cloud instance to host your blog',
      customDomain: { freePlan: true, paidPlan: true },
      ecommerce: { freePlan: false, paidPlan: true },
      exportContent: { freePlan: true, paidPlan: true },
      markdown: { freePlan: true, paidPlan: true },
      openSource: { freePlan: true, paidPlan: true },
      headless: { freePlan: true, paidPlan: true },
      codeInject: { freePlan: true, paidPlan: true }
   },
   {
      name: 'Publii',
      url: 'https://publii.io/',
      easeOfUse: 3,
      designFlexibility: 1,
      seoTools: 2,
      storage: '',
      limits: 'Need to deploy your static blog to a hosting provider such as Netlify or Vercel',
      customDomain: { freePlan: true, paidPlan: true },
      ecommerce: { freePlan: false, paidPlan: false },
      exportContent: { freePlan: true, paidPlan: true },
      markdown: { freePlan: true, paidPlan: true },
      openSource: { freePlan: true, paidPlan: true },
      headless: { freePlan: false, paidPlan: false },
      codeInject: { freePlan: true, paidPlan: true }
   },
   {
      name: 'Joomla',
      url: 'https://www.joomla.org/',
      easeOfUse: 1,
      designFlexibility: 2,
      seoTools: 3,
      storage: '',
      limits: '',
      customDomain: { freePlan: false, paidPlan: true },
      ecommerce: { freePlan: false, paidPlan: true },
      exportContent: { freePlan: false, paidPlan: true },
      markdown: { freePlan: false, paidPlan: false },
      openSource: { freePlan: true, paidPlan: true },
      headless: { freePlan: false, paidPlan: false },
      codeInject: { freePlan: true, paidPlan: true }
   },
]
// ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═  ▶
// FEATURE METADATA
// ◀ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ # 
const features = {
   easeOfUse: {
      label: "Ease of Use",
      tooltip: "How easy it is for a beginner to set up and use the platform without technical knowledge. Consider drag-and-drop interfaces, intuitive navigation, and the availability of tutorials/guides.",
      type: "number",
   },
   designFlexibility: {
      label: "Design Flexibility",
      tooltip: "The level of control you have over the look and feel of your blog. This includes the availability of themes, templates, customization options for layouts, fonts, and colors.",
      type: "number",
   },
   seoTools: {
      label: "SEO Tools",
      tooltip: "Built-in features that help you optimize your blog posts for search engines. This might include editing titles and meta descriptions, generating sitemaps, and suggesting keywords.",
      type: "number",
   },
   storage: {
      label: "Storage",
      tooltip: "The amount of disk space provided to store your blog's content, including text, images, videos, and other files.",
      type: "text",
   },
   limits: {
      label: "Limits",
      tooltip: "Any restrictions or limitations on the free plan, such as the number of posts, pages, or visitors allowed. Paid plans may offer higher limits or remove these restrictions.",
      type: "text",
   },
   customDomain: {
      label: "Custom Domain Support",
      tooltip: "The ability to use your own unique domain name (e.g., www.yourblogname.com) in the free plan instead of a generic subdomain provided by the blogging platform. This enhances professionalism and brand recognition",
      type: "boolean",
   },
   ecommerce: {
      label: "E-commerce",
      tooltip: "Features that allow you to sell products or services directly from your blog. This includes tools for product listings, shopping carts, payment gateways, and inventory management.",
      type: "boolean",
   },
   exportContent: {
      label: "Export Content",
      tooltip: "The ability to download a backup of your blog's content (posts, pages, images) in a standard format, allowing you to move your blog to another platform if needed.",
      type: "boolean",
   },
   markdown: {
      label: "Markdown Support",
      tooltip: "Lets you write your blog posts using Markdown, a simple formatting language that's easy to learn and converts cleanly to HTML for web publishing.",
      type: "boolean",
   },
   openSource: {
      label: "Open Source",
      tooltip: "The platform's code is freely available and can be modified or redistributed by developers. This offers greater flexibility and customization potential.",
      type: "boolean",
   },
   headless: {
      label: "Headless",
      tooltip: "A headless blogging platform separates the content management system (backend) from the presentation layer (frontend). This allows developers to deliver content to various devices and channels beyond a traditional website.",
      type: "boolean",
   },
   codeInject: {
      label: "Custom Code Injection",
      tooltip: "The ability to add your own HTML, CSS, and JavaScript code to your blog. This allows for advanced customization of design, functionality, and the integration of third-party tools (e.g., analytics, social widgets, interactive elements).",
      type: "boolean",
   },
}
// ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═  ▶
// CONSTANTS
// ◀ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ # 
const fillStar = "★"
const emptyStar = "☆"

// ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═  ▶
// ◀ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ # 
// ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═  ▶
// GRIDJS CONFIGURATION
// ◀ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ # 

// ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═  ▶
// HEADERS CELLS
// ◀ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ #

const columns = [
   {
      id: "feature",
      name: "Feature",
      formatter: (cell, row) => gridjs.html(`<div class="tooltip">${cell}<span class="tooltiptext">${features[row.cells[1].data].tooltip}</span></div>`)
   },
   {
      name: 'featureKey',
      hidden: true
   }
].concat(rawData.map((platform) => ({
   id: platform.name,
   name: gridjs.html(`<a href="${platform.url}">${platform.name}</a>`),
   formatter: (cell, row) => {
      if (Array.isArray(cell)) {
         const freePlan = cell[0];
         const paidPlan = cell[1];
         if (freePlan) return gridjs.html(`<span class="free-plan">Free</span>`);
         else {
            if (paidPlan) return gridjs.html(`<span class="paid-plan">Paid</span>`);
            else return gridjs.html(`<span class="not-available">N/A</span>`);
         }
      }

      // If the cell is a number, it means it's a rating
      else if (!isNaN(cell)) {
         return fillStar.repeat(cell) + emptyStar.repeat(5 - cell);

      }

      // If the cell is a string, it means it's a text value
      else if (isNaN(cell) || cell === null) {
         return cell;
      }
   },

   attributes: (cell, row, column) => {
      // If the cell is an array, it means it has [freePlan, paidPlan] values
      if (Array.isArray(cell)) {
         const freePlan = cell[0];
         const paidPlan = cell[1];
         return {
            'data-free-plan': freePlan,
            'data-paid-plan': paidPlan,
         };
      }

      // If the cell is a number, it means it's a rating
      else if (!isNaN(cell)) {
         let stars = fillStar.repeat(cell) + emptyStar.repeat(5 - cell);
         return {
            'data-rating': cell,
         };
      }
   }
})));

// ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═  ▶
// COLUMN CELLS
// ◀ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ # 
const data = Object.keys(features).map((featureKey) => {

   // Single row for each platform: [Ease of Use, easeOfUse (hidden), ...[featureValues]]
   const row = [features[featureKey].label, featureKey]

   // Iterate through the features and add the corresponding value to the row
   for (const platform of rawData) {
      if (features[featureKey].type === "number" || features[featureKey].type === "text") {
         row.push(platform[featureKey]);
      } else if (features[featureKey].type === "boolean") {
         row.push([platform[featureKey].freePlan, platform[featureKey].paidPlan]);
      }
   }
   return row;
});

new gridjs.Grid({
   columns: columns,
   data: data,
   resizable: true,
   sort: false,
   fixedHeader: true,
   height: `${window.innerHeight * 0.96}px`,
}).render(document.getElementById("wrapper"));