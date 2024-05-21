const axios = require('axios');
const readline = require('readline-sync');
const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, 'config.json');
if (!fs.existsSync(configPath)) {
        console.error('config.json file not found!');
        process.exit(1);
    }

const {api_key} = require(configPath);

async function main() {
    //This is where the magic happens
}

main();

//TODO: Caching, get exchange rate and saving the conversions to file