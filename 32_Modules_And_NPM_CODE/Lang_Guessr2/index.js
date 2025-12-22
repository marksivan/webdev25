const langs = require("langs")
const franc = require("franc")
const input = process.argv[2];
const langCode = franc(input)

if (langCode === 'und'){
    console.log("Sorry, couldn't figure it out. Try with more sample code")
}else{
     const language = langs.where("3", langCode)
     console.log(language.name)
}

const language  = langs.where("3",langCode)
console.log(language.name)


