require("./module")

global.owner = "6281802527761"
global.ownerStore = "6281802527761"
global.namabot = "𝘼𝙍𝙂𝘼𝘼 𝙎𝙏𝙊𝙍𝙀"
global.namaCreator = "DitzzXploit"
global.namaStore = "𝘼𝙍𝙂𝘼𝘼 𝙎𝙏𝙊𝙍𝙀"
global.autoJoin = false
global.antilink = false
global.themeemoji = '🪀'
global.versisc = '1.0.0'
global.namasc = 'Script DitzzXploit'
global.codeInvite = "-"
global.apitokendo = '-'
global.domain = '-' // Isi Domain Lu
global.apikey = '-' // Isi Apikey Plta Lu
global.capikey = '-' // Isi Apikey Pltc Lu
global.domainotp = "https://claudeotp.com/api"
global.apikeyotp = "-"
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location
global.thumb = fs.readFileSync("./thumb.png")
global.audionya = fs.readFileSync("./all/sound.mp3")
global.tekspushkon = ""
global.tekspushkonv2 = ""
global.tekspushkonv3 = ""
global.tekspushkonv4 = ""
global.packname = ""
global.author = "Sticker By 𝘼𝙍𝙂𝘼𝘼 𝙎𝙏𝙊𝙍𝙀"
global.jumlah = "50"
global.youtube = "https://www.youtube.com/@DitzzXploit"
global.grup = "https://chat.whatsapp.com/HswTlbKiShB6ai87JZKRK6"
global.telegram = "https://t.me/DitzzXploit"
global.instagram = "*Lom ada*"
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})