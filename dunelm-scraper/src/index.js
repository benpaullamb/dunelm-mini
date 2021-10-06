import 'core-js/stable';
import 'regenerator-runtime/runtime';
import fs from 'fs';
import axios from 'axios';
import * as cheerio from 'cheerio';

async function getAllChestOfDrawers() {
  let allData = [];
  let pageNum = 1;

  while(true) {
    try {
      const { data } = await axios(`https://www.dunelm.com/category/home-and-furniture/furniture/bedroom-furniture/chest-of-drawers?page=${pageNum}`);
      console.log(`Page ${pageNum}`);

      const $ = cheerio.load(data);
      const pageData = getPageData($);
      allData = [...allData, ...pageData];
      
      pageNum++;

    } catch(err) {
      break;
    }
  }

  fs.writeFileSync('./dunelm-products.json', JSON.stringify(allData, null, 2));
  console.log('Saved');
}

function getPageData($) {
  const productCards = $('a[data-testid=productCard]');

  return productCards.map(function() {
    const productCard = $(this);
    
    const link = `https://www.dunelm.com${productCard.attr('href')}`;
    const image = productCard.find('img[data-testid=product-image]').attr('src');
    const status = productCard.find('p[data-testid=sticker]').text();
    const title = productCard.find('p[data-testid=product-title]').text();
    const price = Number(productCard.find('p[data-testid=price]').text().slice(1));
    
    return {
      title,
      price,
      link,
      image,
      status
    };
  });
}

getAllChestOfDrawers();