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
      storage: '1GB',
      limits: "",
      customDomain: { freePlan: false, paidPlan: true },
      ecommerce: { freePlan: false, paidPlan: true },
      exportContent: { freePlan: true, paidPlan: true },
      markdown: { freePlan: true, paidPlan: true },
      openSource: { freePlan: false, paidPlan: false },
      headless: { freePlan: true, paidPlan: true },
      codeInject: { freePlan: true, paidPlan: true }
   },
   {
      name: 'WebWave',
      url: 'https://webwave.me/ref/14072231082',
      easeOfUse: 3,
      designFlexibility: 4,
      seoTools: 3,
      storage: '1GB',
      limits: "",
      customDomain: { freePlan: false, paidPlan: true },
      ecommerce: { freePlan: false, paidPlan: true },
      exportContent: { freePlan: false, paidPlan: false },
      markdown: { freePlan: false, paidPlan: false },
      openSource: { freePlan: false, paidPlan: false },
      headless: { freePlan: false, paidPlan: false },
      codeInject: { freePlan: true, paidPlan: true }
   },
   {
      name: 'WordPress.com',
      url: 'https://wordpress.com/',
      easeOfUse: 3,
      designFlexibility: 4,
      seoTools: 5,
      storage: '',
      limits: "The power of WordPress lies in plugins and themes, which are only available for paid plans.",
      customDomain: { freePlan: false, paidPlan: true },
      ecommerce: { freePlan: false, paidPlan: true },
      exportContent: { freePlan: true, paidPlan: true },
      markdown: { freePlan: true, paidPlan: false },
      openSource: { freePlan: false, paidPlan: false },
      headless: { freePlan: true, paidPlan: true },
      codeInject: { freePlan: false, paidPlan: true }
   },
   {
      name: 'Wix',
      url: 'https://www.wix.com',
      easeOfUse: 4,
      designFlexibility: 4,
      seoTools: 3,
      storage: '',
      limits: "Wix websites generally suffers from slow loading times, which negatively impacts SEO.",
      customDomain: { freePlan: false, paidPlan: true },
      ecommerce: { freePlan: false, paidPlan: true },
      exportContent: { freePlan: true, paidPlan: true },
      markdown: { freePlan: true, paidPlan: true },
      openSource: { freePlan: false, paidPlan: false },
      headless: { freePlan: false, paidPlan: true },
      codeInject: { freePlan: true, paidPlan: true }
   },
   {
      name: 'Typedream',
      url: 'https://typedream.com/?via=blogplatforms',
      easeOfUse: 5,
      designFlexibility: 3,
      seoTools: 3,
      storage: '',
      limits: "",
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
      easeOfUse: 4,
      designFlexibility: 4,
      seoTools: 3,
      storage: '',
      limits: "",
      customDomain: { freePlan: false, paidPlan: true },
      ecommerce: { freePlan: false, paidPlan: true },
      exportContent: { freePlan: false, paidPlan: true },
      markdown: { freePlan: false, paidPlan: false },
      openSource: { freePlan: false, paidPlan: false },
      headless: { freePlan: false, paidPlan: false },
      codeInject: { freePlan: true, paidPlan: true }
   },
   {
      name: 'PageCloud',
      url: 'https://www.pagecloud.com/home-partners?gspk=Y2FuYnVyYWtzb2Z5YWxpb2dsdTMwNTQ&gsxid=Is2tDreeXpFm&utm_campaign=affiliate-referral-program&utm_medium=partner&utm_source=canburaksofyalioglu3054',
      easeOfUse: 3,
      designFlexibility: 2,
      seoTools: 3,
      storage: '',
      limits: "",
      customDomain: { freePlan: false, paidPlan: true },
      ecommerce: { freePlan: false, paidPlan: true },
      exportContent: { freePlan: false, paidPlan: true },
      markdown: { freePlan: false, paidPlan: false },
      openSource: { freePlan: false, paidPlan: false },
      headless: { freePlan: false, paidPlan: false },
      codeInject: { freePlan: true, paidPlan: true }
   },
   {
      name: 'Unicorn Platform',
      url: 'https://unicornplatform.com/?via=bloggingplatforms',
      easeOfUse: 5,
      designFlexibility: 3,
      seoTools: 2,
      storage: '',
      limits: "",
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
      limits: "",
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
      limits: "",
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
      limits: "",
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
      limits: "",
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
      limits: "",
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
      limits: "",
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
      limits: "",
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
      limits: "",
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
      tooltip: "How easy it is for a beginner to set up and use the platform without technical knowledge.",
      type: "number",
   },
   designFlexibility: {
      label: "Design Flexibility",
      tooltip: "The level of control you have over the look and feel of your blog.",
      type: "number",
   },
   seoTools: {
      label: "SEO Tools",
      tooltip: "Built-in features that help you optimize your blog posts for search engines.",
      type: "number",
   },
   storage: {
      label: "Storage",
      tooltip: "The amount of disk space provided to store your blog's media.",
      type: "text",
   },
   limits: {
      label: "Limits",
      tooltip: "Any restrictions or limitations on the free plan.",
      type: "text",
   },
   customDomain: {
      label: "Custom Domain Support",
      tooltip: "The ability to use your own unique domain name.",
      type: "boolean",
   },
   ecommerce: {
      label: "E-commerce",
      tooltip: "Features that allow you to sell products or services directly from your blog.",
      type: "boolean",
   },
   exportContent: {
      label: "Export Content",
      tooltip: "The ability to download a backup of your blog's content (posts, pages, images).",
      type: "boolean",
   },
   markdown: {
      label: "Markdown Support",
      tooltip: "The ability that allows you write your blog posts using Markdown.",
      type: "boolean",
   },
   openSource: {
      label: "Open Source",
      tooltip: "The platform's code is freely available and can be modified or redistributed by developers. ",
      type: "boolean",
   },
   headless: {
      label: "Headless",
      tooltip: "The ability to use your content via an API to build a custom front-end for your blog.",
      type: "boolean",
   },
   codeInject: {
      label: "Custom Code Injection",
      tooltip: "The ability to add your own HTML, CSS, and JavaScript code to your blog. ",
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
      id: "platform",
      name: gridjs.html(`<div class="tooltip-wrapper"><div>Platforms</div><div class="tooltip"><a href="https://bloggingplatforms.app/blog/best-free-platforms-for-blogging">Free Blogging Platforms</a></div></div>`),

      formatter: (cell, row) => gridjs.html(`<a href="${row.cells[1].data}">${row.cells[0].data}</a>`)
      // formatter: (cell, row) => gridjs.html(`<div class="tooltip">${cell}<span class="tooltiptext">${features[row.cells[1].data].tooltip}</span></div>`)
   },
   {
      name: 'platformUrl',
      hidden: true
   }
].concat(Object.keys(features).map((featureKey) => ({
   id: featureKey,
   name: gridjs.html(`<div class="tooltip-wrapper"><div>${features[featureKey].label}</div><div class="tooltip">${features[featureKey].tooltip}</div></div>`),

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
      else if (typeof cell === "number") {
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
const data = rawData.map((platformData) => {

   // Single row for each platform: [name, url, Ease of Use, easeOfUse (hidden), ...[featureValues]]
   const row = [platformData.name, platformData.url]

   // Iterate through the features and add the corresponding value to the row
   for (const featureKey of Object.keys(features)) {
      if (features[featureKey].type === "number" || features[featureKey].type === "text") {
         row.push(platformData[featureKey]);
      } else if (features[featureKey].type === "boolean") {
         row.push([platformData[featureKey].freePlan, platformData[featureKey].paidPlan]);
      }
   }
   return row;
});

new gridjs.Grid({
   columns: columns,
   data: data,
   style: {
      th: {
         padding: "2px",
         minWidth: "200px",
         overflow: "visible",
      },
      td: {
         'font-size': "11px",
         'line-height': "1.2",
         'font-weight': 300,
         opacity: 0.8,
         'border': '1px solid hsl(0, 0%, 80%)',

       }
   },
   resizable: true,
   sort: true,
   fixedHeader: true,
   height: `${window.innerHeight * 0.96}px`,
}).render(document.getElementById("wrapper"));