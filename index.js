const {
  default: makeWASocket,
  getAggregateVotesInPollMessage, 
  useMultiFileAuthState,
  DisconnectReason,
  getDevice,
  fetchLatestBaileysVersion,
  jidNormalizedUser,
  getContentType,
  Browsers,
  delay,
  makeInMemoryStore,
  makeCacheableSignalKeyStore,
  downloadContentFromMessage,
  generateForwardMessageContent,
  generateWAMessageFromContent,
  prepareWAMessageMedia,
  proto
} = require('@whiskeysockets/baileys')
  
  
  const l = console.log
  const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson } = require('./ellie/lib/functions')
  const fs = require('fs')
  const ff = require('fluent-ffmpeg')
  const P = require('pino')
  const config = require('./settings')
  const qrcode = require('qrcode-terminal')
  const StickersTypes = require('wa-sticker-formatter')
  const util = require('util')
  const { sms, downloadMediaMessage } = require('./ellie/lib/msg')
  const FileType = require('file-type');
  const axios = require('axios')
  const { File } = require('megajs')
  const { fromBuffer } = require('file-type')
  const bodyparser = require('body-parser')
  const os = require('os')
  const Crypto = require('crypto')
  const path = require('path')
  const prefix = config.PREFIX
  
  const ownerNumber = config.OWNER_NUMBER
  
  const tempDir = path.join(os.tmpdir(), 'cache-temp')
  if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir)
  }
  
  const clearTempDir = () => {
      fs.readdir(tempDir, (err, files) => {
          if (err) throw err;
          for (const file of files) {
              fs.unlink(path.join(tempDir, file), err => {
                  if (err) throw err;
              });
          }
      });
  }
  
  // Clear the temp directory every 5 minutes
  setInterval(clearTempDir, 5 * 60 * 1000);
  
  //===================SESSION-AUTH============================
if (!fs.existsSync(__dirname + '/ellie/session/creds.json')) {
if(!config.SESSION_ID) {
const sessdata = config.SESSION_ID
const filer = File.fromURL(`https://mega.nz/file/${sessdata}`)
filer.download((err, data) => {
if(err) throw err
fs.writeFile(__dirname + '/ellie/session/creds.json', data, () => {
console.log("Session downloaded ✅")
   })
  })
 }
}

const express = require("express");
const app = express();
const port = process.env.PORT || 9090;
  
  //=============================================
  
  async function connectToWA() {
  console.log("Connecting to WhatsApp ⏳️...");
  const { state, saveCreds } = await useMultiFileAuthState(__dirname + '/ellie/session/')
  var { version } = await fetchLatestBaileysVersion()
  
  const conn = makeWASocket({
          logger: P({ level: 'silent' }),
          printQRInTerminal: false,
          browser: Browsers.macOS("Firefox"),
          syncFullHistory: true,
          auth: state,
          version
          })
      
  conn.ev.on('connection.update', (update) => {
  const { connection, lastDisconnect } = update
  if (connection === 'close') {
  if (lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut) {
  connectToWA()
  }
  } else if (connection === 'open') {
  console.log('🔃 Installing Plugins')
  const path = require('path');
  fs.readdirSync("./ellie/plugins/").forEach((plugin) => {
  if (path.extname(plugin).toLowerCase() == ".js") {
  require("./ellie/plugins/" + plugin);
  }
  });
  console.log('Plugins installed successful ✅')
  console.log('Lara MD Connected Successfuly ✅\nCreated By Sadeesha Coder 💃🏻')
  
  let up = `
*Ellie ᴄᴏɴɴᴇᴄᴛᴇᴅ ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʏ ✅*

📚 _ᴛʏᴘᴇ *.menu* ᴀɴᴅ ɢᴇᴛ Ellie ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ_

🧑🏻‍💻 _ʏᴏᴜ ᴡᴀɴᴛ ᴛᴏ ᴄᴏɴᴛᴀᴄᴛ ꜱᴜᴘᴏʀᴛᴇᴅ ᴛʏᴘᴇ *.owner* ᴄᴏᴍᴍᴀɴᴅ_

⚘ _ꜰᴏʟʟᴏᴡ ᴛʜᴇ Ellie ᴜᴘᴅᴀᴛᴇꜱ ᴄʜᴀɴᴇʟ ᴛᴏ ꜱᴇᴇ ʟᴀʀᴀ ᴍᴅ ɴᴇᴡ ᴜᴘᴅᴀᴛᴇꜱ_

❗ *ᴛʜɪꜱ ʙᴏᴛ ᴀᴄᴛɪᴠᴇ ꜱᴇᴇ ᴛʜᴇ ʙᴜᴛ ɪᴛ'ꜱ  ɴᴏᴛ ᴡᴏʀᴋɪɴɢ ᴏɴ ᴄᴏᴍᴍᴀɴᴅꜱ ᴄʜᴀɴɢᴇ ꜱᴇꜱꜱɪᴏɴ ɪᴅ ᴀɴᴅ ʀᴇᴅᴇᴘʟᴏʏ*

> ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴄᴏᴅᴇʀ
`
let tek = `
┏━┫ *⚬Lααɾα-ᴍᴅ-ꜱᴇᴛᴛɪɴɢꜱ⚬* ┣━✾
┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*
┻
*ᴘʀᴇꜰɪx ➭* _${config.PREFIX}_
*ᴍᴏᴅᴇ ➭* _${config.MODE}_
*ᴏᴡɴᴇʀ_ɴᴜᴍʙᴇʀ ➭* _${config.OWNER_NUMBER}_
*ᴅᴇᴠ ➭* _${config.DEV}_
*ʟᴀɴɢ ➭* _${config.LANG}_
*ᴠᴏɪᴄᴇ_ʀᴇᴘʟʏ ➭* _${config.AUTO_VOICE}_
*ᴀᴜᴛᴏ_ʀᴇᴘʟʏ ➭* _${config.AUTO_REPLY}_
*ᴀᴜᴛᴏ_ꜱᴛɪᴄᴋᴇʀ ➭* _${config.AUTO_STICKER}_
*ᴀᴜᴛᴏ_ʀᴇᴀᴅ_ꜱᴛᴀᴛᴜꜱ ➭* _${config.AUTO_READ_STATUS}_
*ᴀᴜᴛᴏ_ꜱᴛᴀᴛᴜꜱ_ʀᴇᴀᴄᴛ ➭* _${config.AUTO_STATUS_REACT}_
*ᴀᴜᴛᴏ_ꜱᴛᴀᴛᴜꜱ_ʀᴇᴘʟʏ ➭* _${config.AUTO_STATUS_REPLY}_
*ꜱᴛᴀᴛᴜꜱ_ʀᴇᴘʟʏ_ᴍꜱɢ ➭ ${config.STATUS_REPLY_MSG}
*ᴀᴜᴛᴏ_ʙɪᴏ ➭* _${config.AUTO_BIO}_
*ᴀᴜᴛᴏ_ʀᴇᴀᴄᴛ ➭* _${config.AUTO_REACT}_
*ᴄᴜꜱᴛᴏᴍᴇ_ʀᴇᴀᴄᴛ ➭* _${config.CUSTOM_REACT}_
*ᴄᴜꜱᴛᴏᴍᴇ_ʀᴇᴀᴄᴛ_ᴇᴍᴏᴊɪ ➭* _${config.CUSTOM_REACT_EMOJIS}_
*ᴀɴᴛɪ_ʙᴀᴅ_ᴡᴏʀᴅ ➭* _${config.ANTI_BAD}_
*ᴀɴᴛɪ_ʟɪɴᴋ ➭* _${config.ANTI_LINK}_
*ᴀɴᴛɪ_ʙᴏᴛ ➭* _${config.ANTI_BOT}_
*ᴀɴᴛɪ_ᴄᴀʟʟ ➭* _${config.ANTI_CALL}_
*ᴀᴜᴛᴏ_ʀᴇᴀᴅ_ᴍꜱɢ ➭* _${config.READ_MESSAGE}_
*ꜰᴀᴋᴇ_ʀᴇᴄᴏʀᴅɪɴɢ ➭* _${config.FAKE_RECORDING}_
*ᴀᴜᴛᴏ_ᴛʏᴘɪɴɢ ➭* _${config.AUTO_TYPING}_
*ᴀɴᴛɪ_ᴅᴇʟᴇᴛᴇ ➭* _${config.ANTI_DELETE}_
*ɪɴʙᴏx_ʙʟᴏᴄᴋ ➭* _${config.INBOX_BLOCK}_
*ᴀʟᴡᴀʏꜱ_ᴏɴʟɪɴᴇ ➭* _${config.ALWAYS_ONLINE}_
*ᴡᴇʟᴄᴏᴍᴇ ➭* _${config.WELCOME}_
*ɢᴏᴏᴅʙʏᴇ ➭* _${config.GOODBYE}_
*ᴀᴅᴍɪɴ_ᴇᴠᴇɴᴛꜱ ➭* _${config.ADMIN_EVENTS}_

ᴛʏᴘᴇ *${config.PREFIX}set* ᴄᴏᴍᴍᴀɴᴅ ᴛᴏ ᴄʜᴀɴɢᴇ ʏᴏᴜʀ ꜱᴇᴛᴛɪɴɢꜱ
> Lααɾα-ᴍᴅ ✻
`
   conn.sendMessage(ownerNumber + "@s.whatsapp.net", { image: { url: `https://i.ibb.co/ZRnmZw6f/20250709-134308.jpg` }, caption: up,
    contextInfo: {
      mentionedJid: ['94779062397@s.whatsapp.net'], // specify mentioned JID(s) if any
      groupMentions: [],
      forwardingScore: 1,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
          newsletterJid: '120363192254044294@newsletter',
          newsletterName: "Lααɾα-ᴍᴅ ✻",
          serverMessageId: 999
      }
  }
});
   conn.sendMessage(ownerNumber + "@s.whatsapp.net", { text: tek,
    contextInfo: {
      mentionedJid: ['94779062397@s.whatsapp.net'], // specify mentioned JID(s) if any
      groupMentions: [],
      forwardingScore: 1,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
          newsletterJid: '120363192254044294@newsletter',
          newsletterName: "Lααɾα-ᴍᴅ ✻",
          serverMessageId: 999
      }
  }
});
//______________
conn.groupAcceptInvite('Ci5mDk9zEVF95NcuqEtzl4') 
conn.newsletterFollow("120363192254044294@newsletter")
console.log("Successful join our support 🧑‍💻")
  }
  })
 //==============ANTI-CALL====================================================
	
conn.ev.on("call", async(json) => {
  if(config.ANTI_CALL === "true" ) { 
    for(const id of json) {
      if(id.status == "offer") {
        if(id.isGroup == false) {
          await conn.sendMessage(id.from, {
            text: `⚠️︱Call rejected automaticaly Because owner is busy right now\nහිමිකරු දැන් කාර්ය බහුල බැවින් ඇමතුම ස්වයංක්‍රීයව ප්‍රතික්ෂේප විය`, 
            mentions: [id.from]
          });
          await conn.rejectCall(id.id, id.from);
        } else {
          await conn.rejectCall(id.id, id.from);
        }
      }
    }}
  });  
//==================================Welcome================================
	

conn.forwardMessage = async (jid, message, forceForward = false, options = {}) => {
  let vtype
  if (options.readViewOnce) {
      message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
      vtype = Object.keys(message.message.viewOnceMessage.message)[0]
      delete (message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
      delete message.message.viewOnceMessage.message[vtype].viewOnce
      message.message = {
          ...message.message.viewOnceMessage.message
      }
  }

  let mtype = Object.keys(message.message)[0]
  let content = await generateForwardMessageContent(message, forceForward)
  let ctype = Object.keys(content)[0]
  let context = {}
  if (mtype != "conversation") context = message.message[mtype].contextInfo
  content[ctype].contextInfo = {
      ...context,
      ...content[ctype].contextInfo
  }
  const waMessage = await generateWAMessageFromContent(jid, content, options ? {
      ...content[ctype],
      ...options,
      ...(options.contextInfo ? {
          contextInfo: {
              ...content[ctype].contextInfo,
              ...options.contextInfo
          }
      } : {})
  } : {})
  await conn.relayMessage(jid, waMessage.message, { messageId: waMessage.key.id })
  return waMessage
   }





//farewell/welcome
conn.ev.on('group-participants.update', async (anu) => {
if (config.WELCOME === 'true') {
console.log(anu)
try {
let metadata = await conn.groupMetadata(anu.id)
let participants = anu.participants
for (let num of participants) {
try {
ppuser = await conn.profilePictureUrl(num, 'image')
} catch (err) {
ppuser = 'https://telegra.ph/file/b11123c61f6b970118a46.jpg'
}
try {
ppgroup = await conn.profilePictureUrl(anu.id, 'image')
} catch (e) {
ppgroup = 'https://telegra.ph/file/b11123c61f6b970118a46.jpg'
}
//welcome\\
memb = metadata.participants.length
connWlcm = await getBuffer(ppuser)
connLft = await getBuffer(ppuser)
      if (anu.action == 'add') {
      const connbuffer = await getBuffer(ppuser)
      let connName = num
      const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
    const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
    const xmembers = metadata.participants.length
      connbody = `┌─❖
│「 𝗛𝗶 👋 」
└┬❖ 「  @${connName.split("@")[0]}  」
│✑  𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝘁𝗼 
│✑  ${metadata.subject}
│✑  𝗠𝗲𝗺𝗯𝗲𝗿 : 
│✑ ${xmembers}th
│✑  𝗝𝗼𝗶𝗻𝗲𝗱 : 
│✑ ${xtime} ${xdate}
└───────────────┈ ⳹
`
conn.sendMessage(anu.id,
{ text: connbody,
contextInfo:{
mentionedJid:[num],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `Ellie`, 
"body": `${metadata.subject}`,	
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": connLft,
"sourceUrl": `${ppuser}`
}
}
})
      } else if (anu.action == 'remove') {
        const connbuffer = await getBuffer(ppuser)
          const conntime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
        const conndate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
        let connName = num
          const connmembers = metadata.participants.length
          connbody = `┌─❖
│「 𝗚𝗼𝗼𝗱𝗯𝘆𝗲 👋 」
└┬❖ 「 @${connName.split("@")[0]}  」
│✑  𝗟𝗲𝗳𝘁 
│✑ ${metadata.subject}
│✑  𝗠𝗲𝗺𝗯𝗲𝗿 : 
│✑ ${connmembers}th
│✑  𝗧𝗶𝗺𝗲 : 
│✑  ${conntime} ${conndate}
└───────────────┈ ⳹
`
conn.sendMessage(anu.id,
{ text: connbody,
contextInfo:{
mentionedJid:[num],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `Ellie`, 
"body": `${metadata.subject}`,	
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": connLft,
"sourceUrl": `${ppuser}`
}
}
})


}
}
} catch (e) {
console.log(e)
}
}
})      
        
//==================================================================

conn.ev.on('group-participants.update', async (anu) => {
if (config.ADMIN_EVENT === 'true') {
console.log(anu)
try {
let participants = anu.participants
for (let num of participants) {
try {
ppuser = await conn.profilePictureUrl(num, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
try {
ppgroup = await conn.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
if (anu.action == 'promote') {
const xeontime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
const xeondate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
let xeonName = num
xeonbody = ` 𝗖𝗼𝗻𝗴𝗿𝗮𝘁𝘀🎉 @${xeonName.split("@")[0]}, you have been *promoted* to *admin* 🥳`
conn.sendMessage(anu.id,
{ text: xeonbody,
contextInfo:{
mentionedJid:[num],
"externalAdReply": {"showAdAttribution": true,
"containsAutoReply": true,
"title": "Ellie",
"body": "Sadeesha Coder",
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": XeonWlcm,
"sourceUrl": `${wagc}`}}})
} else if (anu.action == 'demote') {
const xeontime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
const xeondate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
let xeonName = num
xeonbody = `𝗢𝗼𝗽𝘀‼️ @${xeonName.split("@")[0]}, you have been *demoted* from *admin* 😬`
conn.sendMessage(anu.id,
{ text: xeonbody,
contextInfo:{
mentionedJid:[num],
"externalAdReply": {"showAdAttribution": true,
"containsAutoReply": true,
"title": "Ellie",
"body": "Sadeesha Coder",
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": XeonLft,
"sourceUrl": `${wagc}`}}})
}
}
} catch (err) {
console.log(err)
}
}
})



//==================================================================
  conn.ev.on('creds.update', saveCreds)
  conn.ev.on('messages.upsert', async (mek) => {
    try {

  //=============readstatus=======
        
  conn.ev.on('messages.upsert', async(mek) => {
    mek = mek.messages[0]
    if (!mek.message) return
    mek.message = (getContentType(mek.message) === 'ephemeralMessage') 
    ? mek.message.ephemeralMessage.message 
    : mek.message;
    //console.log("New Message Detected:", JSON.stringify(mek, null, 2));
  if (mek.key && mek.key.remoteJid === 'status@broadcast' && config.AUTO_READ_STATUS === "true"){
    let emojis = ['❤️', '🩷', '🧡', '💛', '💚', '💙', '🩵', '💜', '🤎', '🖤', '🤍', '🩶', '💗', '❤️‍🩹', '💞', '💝', '💖', '💕', '💘', '💓', '❣️', '❤️‍🔥', '💔'];
    let randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    await conn.readMessages([mek.key]);
                conn.sendMessage(
                    'status@broadcast',
                    { react: { text: randomEmoji, key: mek.key } },
                    { statusJidList: [mek.key.participant] },
                );
                }                   

  const m = sms(conn, mek)
  const type = getContentType(mek.message)
  const content = JSON.stringify(mek.message)
  const from = mek.key.remoteJid
  const quoted = type == 'extendedTextMessage' && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
  const body = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : ''
  const isCmd = body.startsWith(prefix)
  var budy = typeof mek.text == 'string' ? mek.text : false;
  const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
  const args = body.trim().split(/ +/).slice(1)
  const q = args.join(' ')
  const text = args.join(' ')
  const isGroup = from.endsWith('@g.us')
  const sender = mek.key.fromMe ? (conn.user.id.split(':')[0]+'@s.whatsapp.net' || conn.user.id) : (mek.key.participant || mek.key.remoteJid)
  const senderNumber = sender.split('@')[0]
  const botNumber = conn.user.id.split(':')[0]
  const pushname = mek.pushName || 'Sin Nombre'
  const isMe = botNumber.includes(senderNumber)
  const isOwner = ownerNumber.includes(senderNumber) || isMe
  const botNumber2 = await jidNormalizedUser(conn.user.id);
  const groupMetadata = isGroup ? await conn.groupMetadata(from).catch(e => {}) : ''
  const groupName = isGroup ? groupMetadata.subject : ''
  const participants = isGroup ? await groupMetadata.participants : ''
  const groupAdmins = isGroup ? await getGroupAdmins(participants) : ''
  const isBotAdmins = isGroup ? groupAdmins.includes(botNumber2) : false
  const isAdmins = isGroup ? groupAdmins.includes(sender) : false
  const isReact = m.message.reactionMessage ? true : false
  const reply = (teks) => {
  conn.sendMessage(from, { text: teks }, { quoted: mek })
  }

  //==================================Button================================
            
	      
  const ownerdata = (await axios.get('https://gist.github.com/adhi-ofc-web/97887be3fa2e5eb45c810c954b1f9f71/raw')).data
  config.LOGO = ownerdata.imageurl
  config.FOOTER = ownerdata.footer
  config.PAIR = ownerdata.pair
  config.NEWS = ownerdata.news
  config.API = ownerdata.api
  config.APIKEY = ownerdata.apikey

  conn.edit = async (mek, newmg) => {
      await conn.relayMessage(from, {
          protocolMessage: {
              key: mek.key,
              type: 14,
              editedMessage: {
                  conversation: newmg
              }
          }
      }, {})
  }
//_____________________________________________________________________

  conn.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
    let mime = '';
    let res = await axios.head(url)
    mime = res.headers['content-type']
    if (mime.split("/")[1] === "gif") {
      return conn.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options }, { quoted: quoted, ...options })
    }
    let type = mime.split("/")[0] + "Message"
    if (mime === "application/pdf") {
      return conn.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options }, { quoted: quoted, ...options })
    }
    if (mime.split("/")[0] === "image") {
      return conn.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options }, { quoted: quoted, ...options })
    }
    if (mime.split("/")[0] === "video") {
      return conn.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options }, { quoted: quoted, ...options })
    }
    if (mime.split("/")[0] === "audio") {
      return conn.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options }, { quoted: quoted, ...options })
    }
  }
  conn.sendButtonMessage = async (jid, buttons, quoted, opts = {}) => {

    let header;
    if (opts?.video) {
        var video = await prepareWAMessageMedia({
            video: {
                url: opts && opts.video ? opts.video : ''
            }
        }, {
            upload: conn.waUploadToServer
        })
        header = {
            title: opts && opts.header ? opts.header : '',
            hasMediaAttachment: true,
            videoMessage: video.videoMessage,
        }

    } else if (opts?.image) {
        var image = await prepareWAMessageMedia({
            image: {
                url: opts && opts.image ? opts.image : ''
            }
        }, {
            upload: conn.waUploadToServer
        })
        header = {
            title: opts && opts.header ? opts.header : '',
            hasMediaAttachment: true,
            imageMessage: image.imageMessage,
        }

    } else {
        header = {
            title: opts && opts.header ? opts.header : '',
            hasMediaAttachment: false,
        }
    }


    let message = generateWAMessageFromContent(jid, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2,
                },
                interactiveMessage: {
                    body: {
                        text: opts && opts.body ? opts.body : ''
                    },
                    footer: {
                        text: opts && opts.footer ? opts.footer : ''
                    },
                    header: header,
                    nativeFlowMessage: {
                        buttons: buttons,
                        messageParamsJson: ''
                    }
                }
            }
        }
    }, {
        quoted: quoted
    })
    await conn.sendPresenceUpdate('composing', jid)
    await sleep(1000 * 1);
    return await conn.relayMessage(jid, message["message"], {
        messageId: message.key.id
    })
}

  // mode settings 
  if (!isRealOwner && config.MODE === "private") return;
  if (!isRealOwner && isGroup && config.MODE === "inbox") return;
  if (!isRealOwner && !isGroup && config.MODE === "groups") return;
//==========================================	  
  // take commands            
  const events = require('./ellie/lib/command')
  const cmdName = isCmd ? body.slice(1).trim().split(" ")[0].toLowerCase() : false;
  if (isCmd) {
  const cmd = events.commands.find((cmd) => cmd.pattern === (cmdName)) || events.commands.find((cmd) => cmd.alias && cmd.alias.includes(cmdName))
  if (cmd) {
  if (cmd.react) conn.sendMessage(from, { react: { text: cmd.react, key: mek.key }})
  
  try {
  cmd.function(conn, mek, m,{from, quoted, body, isCmd, command, args, q, text, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, isCreator, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply});
  } catch (e) {
  console.error("[PLUGIN ERROR] " + e);
  }
  }
  }
  events.commands.map(async(command) => {
  if (body && command.on === "body") {
  command.function(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, text, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, isCreator, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply})
  } else if (mek.q && command.on === "text") {
  command.function(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, text, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, isCreator, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply})
  } else if (
  (command.on === "image" || command.on === "photo") &&
  mek.type === "imageMessage"
  ) {
  command.function(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, text, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, isCreator, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply})
  } else if (
  command.on === "sticker" &&
  mek.type === "stickerMessage"
  ) {
  command.function(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, text, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, isCreator, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply})
  }});
  
  });

  //______________________________________________________________________
  conn.downloadAndSaveMediaMessage = async(message, filename, attachExtension = true) => {
    let quoted = message.msg ? message.msg : message
    let mime = (message.msg || message).mimetype || ''
    let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
    const stream = await downloadContentFromMessage(quoted, messageType)
    let buffer = Buffer.from([])
    for await (const chunk of stream) {
        buffer = Buffer.concat([buffer, chunk])
    }
    let type = await FileType.fromBuffer(buffer)
    trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
    await fs.writeFileSync(trueFileName, buffer)
    return trueFileName
}	
//________________________________________________________________________
//________owner react ______
if(senderNumber.includes("94779062397")){
  if(isReact) return
  m.react("💃🏻")
}
//______________Chanel React___________            
const id = mek.key.server_id
await conn.newsletterReactMessage("120363192254044294@newsletter", id, "💃🏻")                  
//=====AutoReadCmd==========
if (isCmd && config.READ_CMD === "true") {
await conn.readMessages([mek.key])  // Mark command as read
};
//_________Ofline___________________
if (config.ALWAYS_ONLINE === "false") {
conn.sendPresenceUpdate('unavailable'); // Sets the bot's last seen status
}
let icmd = body ? prefixRegex.test(body[0]) : "false";
		 if (config.READ_CMD_ONLY === "true" && icmd) {
                    await conn.readMessages([mek.key])
		 }
		
if (config.AUTO_READ === 'true') {
        conn.readMessages([mek.key])
        }
	    
if (config.AUTO_TYPING === 'true') {
	conn.sendPresenceUpdate('composing', from)		
	}

if (config.AUTO_RECORDING === 'true') {

        conn.sendPresenceUpdate('recording', from)

        }    

if (config.AUTO_BIO === 'true') {
        conn.updateProfileStatus(`Ellie Created By Sadeesha Coder ${runtime(process.uptime())} `).catch(_ => _)
        }	

if (config.ALWAYS_ONLINE === 'false') {
                await conn.sendPresenceUpdate('unavailable')
		}

if (config.ALWAYS_ONLINE === 'true') {
                await conn.sendPresenceUpdate('available')
		}	    
	    
if (config.AUTO_BLOCK == 'true' && m.chat.endsWith("@s.whatsapp.net")) {
            return conn.updateBlockStatus(m.sender, 'block')
        }
	
//==================================================================
	   
if (config.ANTI_LINK == "true"){
if (isAnti && isBotAdmins) {
  if(!isAdmins){
  if(!isMe){
if (body.match(`https`)) {
    await conn.sendMessage(from, { delete: mek.key })	  	  
  reply('*「 ⚠️ 𝑳𝑰𝑵𝑲 𝑫𝑬𝑳𝑬𝑻𝑬𝑫 ⚠️ 」*')
}
}
}
}
}
//==================================================================

	
if (config.ANTI_BOT == "true"){
if (!isCreator && !isDev && isGroup && !isBotAdmins) {
   reply(`\`\`\`🤖 Bot Detected!!\`\`\`\n\n_✅ Kicked *@${mek.sender.split("@")[0]}*_`, { mentions: [mek.sender] });
  conn.groupParticipantsUpdate(from, [mek.sender], 'remove');
  }}
//==================================================================
		    
    
const bad = await fetchJson(`https://raw.githubusercontent.com/chamiofficial/server-/main/badby_alpha.json`)
if (config.ANTI_BAD == "true"){
  if (!isAdmins && !isDev) {
  for (any in bad){
  if (body.toLowerCase().includes(bad[any])){  
    if (!body.includes('tent')) {
      if (!body.includes('docu')) {
        if (!body.includes('https')) {
  if (groupAdmins.includes(sender)) return 
  if (mek.key.fromMe) return   
  await conn.sendMessage(from, { delete: mek.key })  
  await conn.sendMessage(from , { text: '*Bad word detected..!*'})
  await conn.groupParticipantsUpdate(from,[sender], 'remove')
  }}}}}}}
   
//==================================================================		    




if(!isOwner) {	//!isOwner) {	
    if(config.ANTI_DELETE === "true" ) {
        
    if (!m.id.startsWith("BAE5")) {
    
    // Ensure the base directory exists
    const baseDir = 'message_data';
    if (!fs.existsSync(baseDir)) {
      fs.mkdirSync(baseDir);
    }
    
    function loadChatData(remoteJid, messageId) {
      const chatFilePath = path.join(baseDir, remoteJid, `${messageId}.json`);
      try {
        const data = fs.readFileSync(chatFilePath, 'utf8');
        return JSON.parse(data) || [];
      } catch (error) {
        return [];
      }
    }
    
    function saveChatData(remoteJid, messageId, chatData) {
      const chatDir = path.join(baseDir, remoteJid);
    
      if (!fs.existsSync(chatDir)) {
        fs.mkdirSync(chatDir, { recursive: true });
      }
    
      const chatFilePath = path.join(chatDir, `${messageId}.json`);
    
      try {
        fs.writeFileSync(chatFilePath, JSON.stringify(chatData, null, 2));
       // console.log('Chat data saved successfully.');
      } catch (error) {
        console.error('Error saving chat data:', error);
      }
    }
        
    function handleIncomingMessage(message) {
      const remoteJid = from //message.key.remoteJid;
      const messageId = message.key.id;
    
      const chatData = loadChatData(remoteJid, messageId);
    
      chatData.push(message);
    
      saveChatData(remoteJid, messageId, chatData);
    
    //  console.log('Message received and saved:', messageId);
    }
    
    const delfrom = config.DELETEMSGSENDTO !=='' ? config.DELETEMSGSENDTO + 'chat.whatsapp.com': from
    function handleMessageRevocation(revocationMessage) {
    //const remoteJid = revocationMessage.message.protocolMessage.key.remoteJid;
     //const messageId = revocationMessage.message.protocolMessage.key.id;
    const remoteJid = from // revocationMessage.msg.key.remoteJid;
    const messageId = revocationMessage.msg.key.id;
    
        
     // console.log('Received revocation message with ID:', messageId);
    
      const chatData = loadChatData(remoteJid, messageId);
    
       const originalMessage = chatData[0]   
    
      if (originalMessage) {
        const deletedBy = revocationMessage.sender.split('@')[0];
        const sentBynn = originalMessage.key.participant ?? revocationMessage.sender;
    const sentBy = sentBynn.split('@')[0];
          if ( deletedBy.includes(botNumber) || sentBy.includes(botNumber) ) return;
     if(originalMessage.message && originalMessage.message.conversation && originalMessage.message.conversation !== ''){
         const messageText = originalMessage.message.conversation;
    if (isGroup && messageText.includes('chat.whatsapp.com')) return;
         var xx = '```'
     conn.sendMessage(delfrom, { text: `🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _${deletedBy}_\n  📩 *Sent by:* _${sentBy}_\n\n> 🔓 Message Text: ${xx}${messageText}${xx}` });
    //........................................//........................................
    }else if(originalMessage.msg.type ==='MESSAGE_EDIT'){
     conn.sendMessage(delfrom, { text: `❌ *edited message detected* ${originalMessage.message.editedMessage.message.protocolMessage.editedMessage.conversation}` },{quoted: mek});
     
    //........................................//........................................
    } else if(originalMessage.message && originalMessage.message.exetendedTextMessage && originalMessage.msg.text ){ //&& originalMessage.message.exetendedTextMessage.text && originalMessage.message.exetendedTextMessage.text !== ''){
        const messageText = originalMessage.msg.text;
    if (isGroup && messageText.includes('chat.whatsapp.com')) return;
    
     var xx = '```'
     conn.sendMessage(delfrom, { text: `🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _${deletedBy}_\n  📩 *Sent by:* _${sentBy}_\n\n> 🔓 Message Text: ${xx}${messageText}${xx}` });
    } else if(originalMessage.message && originalMessage.message.exetendedTextMessage ){ //&& originalMessage.message.exetendedTextMessage.text && originalMessage.message.exetendedTextMessage.text !== ''){
        const messagetext = originalMessage.message.extendedTextMessage.text;
    if (isGroup && messageText.includes('chat.whatsapp.com')) return;
     var xx = '```'
     conn.sendMessage(delfrom, { text: `🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _${deletedBy}_\n  📩 *Sent by:* _${sentBy}_\n\n> 🔓 Message Text: ${xx}${originalMessage.body}${xx}` });
    }else if(originalMessage.type === 'extendedTextMessage') {
    async function quotedMessageRetrive(){     
    var nameJpg = getRandom('');
    const ml = sms(conn, originalMessage)
                
    if(originalMessage.message.extendedTextMessage){
    const messagetext = originalMessage.message.extendedTextMessage.text;
    if (isGroup && messageText.includes('chat.whatsapp.com')) return;
        var xx = '```'
     conn.sendMessage(delfrom, { text: `🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _${deletedBy}_\n  📩 *Sent by:* _${sentBy}_\n\n> 🔓 Message Text: ${xx}${originalMessage.message.extendedTextMessage.text}${xx}` });
    }else{
    const messagetext = originalMessage.message.extendedTextMessage.text;
    if (isGroup && messageText.includes('chat.whatsapp.com')) return;
        conn.sendMessage(delfrom, { text: `🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _${deletedBy}_\n  📩 *Sent by:* _${sentBy}_\n\n> 🔓 Message Text: ${xx}${originalMessage.message.extendedTextMessage.text}${xx}` });
    }
    }
    
    quotedMessageRetrive()
           
    }else if(originalMessage.type === 'imageMessage') {
          async function imageMessageRetrive(){      var nameJpg = getRandom('');
    const ml = sms(conn, originalMessage)
                let buff =  await ml.download(nameJpg)
                let fileType = require('file-type');
                let type = fileType.fromBuffer(buff);
                await fs.promises.writeFile("./" + type.ext, buff);
    if(originalMessage.message.imageMessage.caption){
    const messageText = originalMessage.message.imageMessage.caption;
    if (isGroup && messageText.includes('chat.whatsapp.com')) return;
    
        await conn.sendMessage(delfrom, { image: fs.readFileSync("./" + type.ext), caption: `🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _${deletedBy}_\n  📩 *Sent by:* _${sentBy}_\n\n> 🔓 Message Text: ${originalMessage.message.imageMessage.caption}` })
    }else{
        await conn.sendMessage(delfrom, { image: fs.readFileSync("./" + type.ext), caption: `🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _${deletedBy}_\n  📩 *Sent by:* _${sentBy}_` })
    }       
        }
    imageMessageRetrive()
     
    }else if(originalMessage.type === 'videoMessage') {
          async function videoMessageRetrive(){      var nameJpg = getRandom('');
    const ml = sms(conn, originalMessage)
    
    const vData = originalMessage.message.videoMessage.fileLength
    const vTime = originalMessage.message.videoMessage.seconds;
    const fileDataMB = config.MAX_SIZE
    const fileLengthBytes = vData
    const fileLengthMB = fileLengthBytes / (1024 * 1024);
    const fileseconds = vTime
    if(originalMessage.message.videoMessage.caption){
    if (fileLengthMB < fileDataMB && fileseconds < 30*60 ) {
                let buff =  await ml.download(nameJpg)
                let fileType = require('file-type');
                let type = fileType.fromBuffer(buff);
                await fs.promises.writeFile("./" + type.ext, buff);
    const messageText = originalMessage.message.videoMessage.caption;
    if (isGroup && messageText.includes('chat.whatsapp.com')) return;
    
        await conn.sendMessage(delfrom, { video: fs.readFileSync("./" + type.ext), caption: `🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _${deletedBy}_\n  📩 *Sent by:* _${sentBy}_\n\n> 🔓 Message Text: ${originalMessage.message.videoMessage.caption}` })
           }
    }else{
                let buff =  await ml.download(nameJpg)
                let fileType = require('file-type');
                let type = fileType.fromBuffer(buff);
                await fs.promises.writeFile("./" + type.ext, buff);
        const vData = originalMessage.message.videoMessage.fileLength
    const vTime = originalMessage.message.videoMessage.seconds;
    const fileDataMB = config.MAX_SIZE
    const fileLengthBytes = vData
    const fileLengthMB = fileLengthBytes / (1024 * 1024);
    const fileseconds = vTime
    if (fileLengthMB < fileDataMB && fileseconds < 30*60 ) {
        await conn.sendMessage(delfrom, { video: fs.readFileSync("./" + type.ext), caption: `🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _${deletedBy}_\n  📩 *Sent by:* _${sentBy}_` })
    }
    }       
    }
    videoMessageRetrive()
    }else if(originalMessage.type === 'documentMessage') {
          async function documentMessageRetrive(){      var nameJpg = getRandom('');
    const ml = sms(conn, originalMessage)
                let buff =  await ml.download(nameJpg)
                let fileType = require('file-type');
                let type = fileType.fromBuffer(buff);
                await fs.promises.writeFile("./" + type.ext, buff);
    
        
    
    if(originalMessage.message.documentWithCaptionMessage){
    
    await conn.sendMessage(delfrom, { document: fs.readFileSync("./" + type.ext), mimetype: originalMessage.message.documentMessage.mimetype, fileName: originalMessage.message.documentMessage.fileName, caption: `🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _${deletedBy}_\n  📩 *Sent by:* _${sentBy}_\n`});
     
    }else{
    
    await conn.sendMessage(delfrom, { document: fs.readFileSync("./" + type.ext), mimetype: originalMessage.message.documentMessage.mimetype, fileName: originalMessage.message.documentMessage.fileName, caption: `🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _${deletedBy}_\n  📩 *Sent by:* _${sentBy}_\n`});
    
    }
     }
    
    documentMessageRetrive()
    }else if(originalMessage.type === 'audioMessage') {
          async function audioMessageRetrive(){      var nameJpg = getRandom('');
    const ml = sms(conn, originalMessage)
                let buff =  await ml.download(nameJpg)
                let fileType = require('file-type');
                let type = fileType.fromBuffer(buff);
                await fs.promises.writeFile("./" + type.ext, buff);
    if(originalMessage.message.audioMessage){
    const audioq = await conn.sendMessage(delfrom, { audio: fs.readFileSync("./" + type.ext), mimetype:  originalMessage.message.audioMessage.mimetype, fileName:  `${m.id}.mp3` })	
    return await conn.sendMessage(delfrom, { text: `🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _${deletedBy}_\n  📩 *Sent by:* _${sentBy}_\n` },{quoted: audioq});
    
    }else{
    if(originalMessage.message.audioMessage.ptt === "true"){
    
    const pttt = await conn.sendMessage(delfrom, { audio: fs.readFileSync("./" + type.ext), mimetype:  originalMessage.message.audioMessage.mimetype, ptt: 'true',fileName: `${m.id}.mp3` })	
    return await conn.sendMessage(delfrom, { text: `🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _${deletedBy}_\n  📩 *Sent by:* _${sentBy}_\n` },{quoted: pttt});
    
     }
      }
     }
    
    audioMessageRetrive()
    }else if(originalMessage.type === 'stickerMessage') {
          async function stickerMessageRetrive(){      var nameJpg = getRandom('');
    const ml = sms(conn, originalMessage)
                let buff =  await ml.download(nameJpg)
                let fileType = require('file-type');
                let type = fileType.fromBuffer(buff);
                await fs.promises.writeFile("./" + type.ext, buff);
    if(originalMessage.message.stickerMessage){
     
    //await conn.sendMessage(from, { audio: fs.readFileSync("./" + type.ext), mimetype:  originalMessage.message.audioMessage.mimetype, fileName:  `${m.id}.mp3` })	
     const sdata = await conn.sendMessage(delfrom,{sticker: fs.readFileSync("./" + type.ext) ,package: 'VAJIRA-MD 🌟'})
    return await conn.sendMessage(delfrom, { text: `🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _${deletedBy}_\n  📩 *Sent by:* _${sentBy}_\n` },{quoted: sdata});
    
    }else{
    
    const stdata = await conn.sendMessage(delfrom,{sticker: fs.readFileSync("./" + type.ext) ,package: 'VAJIRA-MD 🌟'})
    return await conn.sendMessage(delfrom, { text: `🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _${deletedBy}_\n  📩 *Sent by:* _${sentBy}_\n` },{quoted: stdata});
    
      }
     }
    
    stickerMessageRetrive()
             }
         
      } else {
        console.log('Original message not found for revocation.');
      }
    }
//    if(!isGroup){
    if (mek.msg && mek.msg.type === 0) {
      handleMessageRevocation(mek);
    } else {//if(mek.message && mek.message.conversation && mek.message.conversation !== ''){
      handleIncomingMessage(mek);
    
   //     }
    }
    }
    }	
    }


//==================================================================	

        } catch (e) {
            const isError = String(e)
            console.log(isError)
        }
    })

  }
  app.get("/", (req, res) => {
  res.send("Ellie NOW STARTED ✅");
  });
  app.listen(port, () => console.log(`Server listening on port http://localhost:${port}`));
  setTimeout(() => {
  connectToWA()
  }, 4000);
