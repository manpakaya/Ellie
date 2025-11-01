const { cmd, commands } = require('../lib/command');

cmd({
    pattern: "alive",
    desc: "Bot online test",
    react: "💃🏻",
    category: "download",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
      conn.sendMessage(from, {
        image: { url: "https://i.ibb.co/ZRnmZw6f/20250709-134308.jpg" },
caption: "Hi im Ellie",
footer: "Sadeesha Coder",
            buttons: [
  {
                buttonId: `${prefix}menu`,
                buttonText: {
                    displayText: 'MENU'
                },
            },
{
                buttonId: `${prefix}ping`,
                buttonText: {
                    displayText: 'PING'
                },
            },	
        ],
        headerType: 1,
        viewOnce: true
    }, {
        quoted: m
    });
         
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

cmd({
    pattern: "sadee1",
    desc: "Bot online test",
    react: "💃🏻",
    category: "download",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    
    await conn.sendMessage(
  from,
  {
    call: {
      name: 'Hay',
      type: 1 // 1 = suara, 2 = video
    }
  }
)

} catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

cmd({
    pattern: "sadee2",
    desc: "Bot online test",
    react: "💃🏻",
    category: "download",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    
    await conn.sendMessage(
  from,
  {
    product: {
      productImage: { 
        url: 'https://i.ibb.co/ZRnmZw6f/20250709-134308.jpg'
      },
      productId: 'PRD-001', 
      title: 'Produk',
      description: 'Deskripsi', 
      currencyCode: 'IDR', 
      priceAmount1000: '50000', 
      retailerId: 'store-izumi', // opsional
      url: 'https://linkproduk.com', // opsional
      productImageCount: 1, 
      firstImageId: 'img-001', // opsional
      salePriceAmount1000: '45000', 
      signedUrl: 'https://your.signed.url' // opsional
    },
    businessOwnerJid: '94768211853@s.whatsapp.net'
  }
)

} catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

cmd({
    pattern: "sadee3",
    desc: "Bot online test",
    react: "💃🏻",
    category: "download",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    
await conn.sendMessage(
  from,
  {
    payment: {
      note: 'Hi!',
      currency: 'IDR',
      offset: 0,
      amount: '10000',
      expiry: 0,
      from: '94779062397@s.whatsapp.net',
      image: {
        placeholderArgb: '#222222', 
        textArgb: '#FFFFFF',  
        subtextArgb: '#AAAAAA'
      }
    }
  }
)    

} catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

cmd({
    pattern: "sadee4",
    desc: "Bot online test",
    react: "💃🏻",
    category: "download",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    
await conn.sendMessage(
  from,
  {
    buttonReply: {
      body: '📥 puca cududa', 
      nativeFlows: {
        name: 'menu_options', 
        paramsJson: JSON.stringify({ id: 'menu_1', description: '📝 Hi' }),
        version: 1 // bisa juga 2 atau 3, tergantung skema flow
      }
    }, 
    type: 'interactive'
  }
)

} catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

cmd({
    pattern: "sadee5",
    desc: "Bot online test",
    react: "💃🏻",
    category: "download",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    
await conn.sendMessage(
  from,
  {
    text: '✨ Ini pesan interaktif!',
    title: '👋 Hai!',
    subtitle: '🌼 Subjudul di sini',
    footer: '📩 Dikirim oleh Naruya Izumi',
    interactiveButtons: [
      {
        name: 'quick_reply',
        buttonParamsJson: JSON.stringify({
          display_text: '🔁 Klik Aku!',
          id: 'id_kamu'
        })
      },
      {
        name: 'cta_url',
        buttonParamsJson: JSON.stringify({
          display_text: '🌐 Kunjungi Channel',
          url: 'https://whatsapp.com/channel/0029Vag9VSI2ZjCocqa2lB1y',
          merchant_url: 'https://whatsapp.com/channel/0029Vag9VSI2ZjCocqa2lB1y'
        })
      },
      {
        name: 'cta_copy',
        buttonParamsJson: JSON.stringify({
          display_text: '📋 Salin Link',
          copy_code: 'https://whatsapp.com/channel/0029Vag9VSI2ZjCocqa2lB1y'
        })
      },
      {
        name: 'cta_call',
        buttonParamsJson: JSON.stringify({
          display_text: '📞 Telepon Saya',
          phone_number: '628xxxx'
        })
      },
      {
        name: 'single_select',
        buttonParamsJson: JSON.stringify({
          title: '🔽 Pilih Opsi',
          sections: [
            {
              title: '🌟 Pilihan Utama',
              highlight_label: '💖 Rekomendasi',
              rows: [
                {
                  header: '📝 Header 1',
                  title: '✨ Opsi 1',
                  description: '🍓 Deskripsi 1',
                  id: 'id1'
                },
                {
                  header: '📝 Header 2',
                  title: '✨ Opsi 2',
                  description: '🍓 Deskripsi 2',
                  id: 'id2'
                }
              ]
            }
          ]
        })
      }
    ]
  }
)

} catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
cmd({
    pattern: "sadee6",
    desc: "Bot online test",
    react: "💃🏻",
    category: "download",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
await conn.sendMessage(
  from,
  {
    document: { url: 'https://i.ibb.co/ZRnmZw6f/20250709-134308.jpg' },
    mimetype: 'image/jpeg',
    jpegThumbnail: await conn.resize('https://i.ibb.co/ZRnmZw6f/20250709-134308.jpg'),
    caption: '📝 Isi Dokumen',
    title: '📄 Judul',
    subtitle: '📌 Subjudul',
    footer: '📩 Footer',
    interactiveButtons: [ /* tombol seperti di atas */ ],
    hasMediaAttachment: false
  }
)
     
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});