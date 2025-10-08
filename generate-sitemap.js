
const fs = require("fs");
const { SitemapStream, streamToPromise } = require("sitemap");

const sitemap = new SitemapStream({ hostname: "https://hspatelbros.in" });

// ✅ Add your website pages here:
const pages = [
 "/",
"/services",
"/services/pest-control",
"/services/bird-netting",
"/services/pest-control-services",
"/services/cockroach-control",
"/services/termite-control",
"/services/bedbug-control",
"/services/mosquito-control",
"/services/wood-borer",
"/services/rodent-control",
"/about_us",
"/contactus",
"/Services/Mosquito",
"/Services/Bedbug",
"/Services/Flying",
"/Services/Woodwork",
"/Services/termite",
"/Services/Rat",
"/Services/Birds",
"/Allservices",
"/Email",
"/feedback",
"/blog/termite-signs",
"/blog/cockroach-prevention",
"/blog/mosquito-fogging",
"/blog"

];

pages.forEach((url) => sitemap.write({ url, changefreq: "weekly", priority: 0.8 }));
sitemap.end();

// 💾 Save sitemap.xml file in public folder
streamToPromise(sitemap).then((data) => {
  fs.writeFileSync("./public/sitemap.xml", data.toString());
  console.log("✅ Sitemap generated at public/sitemap.xml");
});