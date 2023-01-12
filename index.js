import scrape from 'website-scraper'; 
const websiteUrl = process.argv.slice(2)[0];

scrape({ 
    urls: [websiteUrl], 
    urlFilter: function (url) { 
        return url.indexOf(websiteUrl) === 0; 
    }, 
    recursive: true, 
    maxDepth: 50, 
    prettifyUrls: true, 
    filenameGenerator: 'bySiteStructure', 
    directory: './Scraped-Website' 
}).then((data) => { 
    console.log("Entire website succesfully downloaded"); 
}).catch((err) => { 
    console.log("An error ocurred", err); 
});