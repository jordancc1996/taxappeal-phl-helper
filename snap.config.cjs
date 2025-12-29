module.exports = {
  reactSnap: {
    source: "dist",
    destination: "dist",
    include: [
      "/",
      "/news",
      "/bucks-county-property-tax-appeal",
      "/delaware-county-property-tax-appeal",
      "/montgomery-county-property-tax-appeal",
      "/philadelphia-property-tax-appeal",
      "/contact",
      "/privacy-policy"
    ],
    inlineCss: true,
    puppeteerArgs: ["--no-sandbox", "--disable-setuid-sandbox"],
    skipThirdPartyRequests: true,
    crawl: false
  }
};
