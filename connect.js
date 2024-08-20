require("./all/global")

const func = require("./all/place")
const readline = require("readline");
const {
  smsg
} = require("./all/place")
const usePairingCode = true

const question = (text) => {
  const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
  });
  return new Promise((resolve) => {
rl.question(text, resolve)
  })
};
async function startSesi() {

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const { state, saveCreds } = await useMultiFileAuthState(`./Krocosession`)
const { version, isLatest } = await fetchLatestBaileysVersion()

const connectionOptions = {
version,
keepAliveIntervalMs: 30000,
printQRInTerminal: !usePairingCode,
logger: pino({ level: "fatal" }),
auth: state,
browser: ['Ubuntu', 'Chrome', '20.0.04']
}

const DitzzXploit = func.makeWASocket(connectionOptions)
if(usePairingCode && !DitzzXploit.authState.creds.registered) {
		const phoneNumber = await question('Masukan Nomer Yang Aktif Awali Dengan 62:\n');
		const code = await DitzzXploit.requestPairingCode(phoneNumber.trim())
		console.log(`Ni kode nya: ${code}`)

	}
store.bind(DitzzXploit.ev)

DitzzXploit.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect } = update
if (connection === 'close') {
const reason = new Boom(lastDisconnect?.error)?.output.statusCode
console.log(color(lastDisconnect.error, 'deeppink'))
if (lastDisconnect.error == 'Error: Stream Errored (unknown)') {
process.exit()
} else if (reason === DisconnectReason.badSession) {
console.log(color(`Bad Session File, Please Delete Session and Scan Again`))
process.exit()
} else if (reason === DisconnectReason.connectionClosed) {
console.log(color('[SYSTEM]', 'white'), color('Connection closed, reconnecting...', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionLost) {
console.log(color('[SYSTEM]', 'white'), color('Connection lost, trying to reconnect', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionReplaced) {
console.log(color('Connection Replaced, Another New Session Opened, Please Close Current Session First'))
DitzzXploit.logout()
} else if (reason === DisconnectReason.loggedOut) {
console.log(color(`Device Logged Out, Please Scan Again And Run.`))
DitzzXploit.logout()
} else if (reason === DisconnectReason.restartRequired) {
console.log(color('Restart Required, Restarting...'))
await startSesi()
} else if (reason === DisconnectReason.timedOut) {
console.log(color('Connection TimedOut, Reconnecting...'))
startSesi()
}
} else if (connection === "connecting") {
start(`1`, `Connecting...`)
} else if (connection === "open") {
success(`1`, `Wait`)
if (autoJoin) {
DitzzXploit.groupAcceptInvite(codeInvite)
}
}
})

DitzzXploit.ev.on('messages.upsert', async (chatUpdate) => {
try {
m = chatUpdate.messages[0]
if (!m.message) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
if (m.key && m.key.remoteJid === 'status@broadcast') return DitzzXploit.readMessages([m.key])
if (!DitzzXploit.public && !m.key.fromMe && chatUpdate.type === 'notify') return
if (m.key.id.startsWith('BAE5') && m.key.id.length === 16) return
m = func.smsg(DitzzXploit, m, store)
require("./DitzzXploit")(DitzzXploit, m, store)
} catch (err) {
console.log(err)
}
})

DitzzXploit.ev.on('group-participants.update', async (anu) => {
console.log(anu)
try {
let metadata = await DitzzXploit.groupMetadata(anu.id)
let participants = anu.participants
for (let num of participants) {
try {
ppuser = await DitzzXploit.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
try {
ppgroup = await DitzzXploit.profilePictureUrl(anu.id, 'image')
} catch {
ppgroup = 'https://i.ibb.co/s2KvYYf/20230524-060103.png'
}
let nameUser = await DitzzXploit.getName(num)
let membr = metadata.participants.length
if (anu.action == 'add') {
await welcome(`${nameUser}`, `${metadata.subject}`, `${ppgroup}`, `${membr}`, `${ppuser}`, `https://i.ibb.co/LgWsTJC/1685442424826.jpg`)
DitzzXploit.sendMessage(anu.id, { image: fs.readFileSync(`./all/tmp/welcome1.png`), mentions: [num], caption: `✧━━━━━━[ *WELCOME* ]━━━━━━✧

┏––––––━━━━━━━━•
│⫹⫺ YT : ${nameUser}
┣━━━━━━━━┅┅┅
│( 👋 Hallo @${num.split('@')[0]} ⁩)
├[ *INTRO* ]—
│ *Nama:* 
│ *Umur:* 
│ *Gender:*
┗––––––━━┅┅┅

––––––┅┅ *DESCRIPTION* ┅┅––––––
${metadata.desc}` })
} else if (anu.action == 'remove') {
await goodbye(`${nameUser}`, `${metadata.subject}`, `${ppgroup}`, `${membr}`, `${ppuser}`, `https://i.ibb.co/LgWsTJC/1685442424826.jpg`)
DitzzXploit.sendMessage(anu.id, { image: fs.readFileSync(`./all/tmp/goodbye1.png`), mentions: [num], caption: `✧━━━━━━[ *GOOD BYE* ]━━━━━━✧
Sayonara *@${num.split('@')[0]}* 👋

*G O O D B Y E*'` })
}
}
} catch (err) {
console.log(err)
}
})

DitzzXploit.ev.on('contacts.update', (update) => {
for (let contact of update) {
let id = DitzzXploit.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})

DitzzXploit.autosw = true;
  DitzzXploit.public = true;
  DitzzXploit.sendsw = `6283842671582@s.whatsapp.net`;
  DitzzXploit.serializeM = (m) => smsg(DitzzXploit, m, store);
DitzzXploit.ev.on('connection.update', async (update) => {
      const {
         connection,
         lastDisconnect,
         qr
      } = update
      if (lastDisconnect == 'undefined' && qr != 'undefined') {
         qrcode.generate(qr, {
            small: true
         })
      }
      if (connection === 'connecting') {
       console.log(chalk.blue("Menghubungkan.."))
       console.log("[KrocoBotz] running")
     } else if (connection === 'open') {
         console.log(chalk.green(`Terhubung Ke WhatsApp Menggunakan KrocoBot v3.5.0`))
  //       DitzzXploit.sendMessage("6287761674503@s.whatsapp.net", {text:`${JSON.stringify(update, undefined, 2)}`})}


         DitzzXploit.sendMessage(DitzzXploit.sendsw, {
                text: `*Terhubung Menggunakan Script Bot WhatsApp KrocoBot V3.5.0🏅*`,
              });
      } else if (connection === 'close') {
         if (lastDisconnect.error.output.statusCode == DisconnectReason.loggedOut) {
            console.log(chalk.redBright("Tidak Bisa Terhubung"))
            DitzzXploit.sendMessage(DitzzXploit.sendsw, {
                text: `*Koneksi Terputus*`,
              });
            process.exit(0)
         } else {
            startDitzzXploit().catch(() => startDitzzXploit())
         }
      }
      
   })


DitzzXploit.ev.on('creds.update', saveCreds)
return DitzzXploit
}

startSesi()

process.on('uncaughtException', function (err) {
    console.log('Caught exception: ', err)
})