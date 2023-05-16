const { Tiktok } = require('@xct007/tiktok-scraper');
const { success, Sukses} = require('./lib/simple')
const { bgcolor } = require("./lib/color");
let chalk = require("chalk")
const ytdl = require('ytdl-core');
const fs = require('fs');
const { facebook } = require("@xct007/frieren-scraper")
let { instagram } = require('@xct007/frieren-scraper')
let axios = require('axios')
const gradient = require("gradient-string");
const {youtubeSearch} = require("@bochilteam/scraper")
let duck = gradient.pastel.multiline(
  [
    "───▄▀▀▀▄▄▄▄▄▄▄▀▀▀▄───",
    "───█▒▒░░░░░░░░░▒▒█───",
    "────█░░█░░░░░█░░█────",
    "─▄▄──█░░░▀█▀░░░█──▄▄─",
    "█░░█─▀▄░░░░░░░▄▀─█░░█",
    "█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█",
    "█░░╦─╦╔╗╦─╔╗╔╗╔╦╗╔╗░░█",
    "█░░║║║╠─║─║─║║║║║╠─░░█",
    "█░░╚╩╝╚╝╚╝╚╝╚╝╩─╩╚╝░░█",
    "█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█",
  ].join("\n")
);
console.log(duck)
var _0x4903=["\x6E\x6F\x64\x65\x2D\x74\x65\x6C\x65\x67\x72\x61\x6D\x2D\x62\x6F\x74\x2D\x61\x70\x69","\x0A\x53\x63\x72\x69\x70\x74\x20\x62\x79\x20\x3A\x20\x47\x61\x6C\x61\x6E\x67\x20\x50\x75\x72\x6E\x61\x6D\x61\x0A\x49\x6E\x73\x74\x61\x67\x72\x61\x6D\x20\x3A\x20\x67\x61\x6C\x61\x6E\x67\x70\x75\x72\x6E\x61\x6D\x61\x2E\x6D\x79\x2E\x69\x64\x0A\x47\x69\x74\x68\x75\x62\x3A\x20\x47\x61\x6C\x61\x6E\x67\x2D\x50\x75\x72\x6E\x61\x6D\x61\x0A\x54\x65\x6C\x65\x67\x72\x61\x6D\x3A\x20\x40\x47\x61\x6C\x61\x6E\x67\x50\x5F\x44\x65\x76","\x67\x72\x61\x79","\x6C\x6F\x67","\x32","\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6E\x67\x2E\x2E\x2E","\x43\x6F\x6E\x6E\x65\x63\x74\x65\x64","\x5B\x20\x42\x4F\x54\x20\x53\x54\x41\x52\x54\x45\x44\x20\x5D","\x62\x6C\x75\x65\x42\x72\x69\x67\x68\x74"];const TelegramBot=require(_0x4903[0]);console[_0x4903[3]](bgcolor(_0x4903[1],_0x4903[2]));Sukses(_0x4903[4],_0x4903[5]);setTimeout(()=>{success(_0x4903[4],_0x4903[6]);console[_0x4903[3]](chalk[_0x4903[8]](_0x4903[7]))},3000) 

//          Setting API Token    \/        //
const conn = new TelegramBot('Token Bot', { polling: true });

conn.on('message', async msg => {
    const chatId = msg.chat.id;
  
    if (msg.text.match(/https?:\/\/(?:www\.)?tiktok\.com\/.*|https?:\/\/(?:www\.)?vt\.tiktok\.com\/.*/)) {
      Tiktok(msg.text).then((json) => {
        
          conn.sendVideo(chatId, json.download.nowm, {
            caption: '✅ DONE',
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: 'Audio',
                    callback_data: 'audio'
                  }
                ]
              ]
            }
          })
          conn.on('callback_query', (query) => {
            const callbackData = query.data;
            const chatId = query.message.chat.id;
          
            if (callbackData === 'audio' && !false) {
              conn.sendAudio(chatId, json.download.music, {caption: '✅ DONE'})
                .then(() => {
                  console.log('Audio sent');
                })
                .catch((error) => {
                  console.error('Error sending audio:', error);
                });
            }
          
            conn.answerCallbackQuery(query.id);
          });
          console.log(chalk.bold.white(`
Mendownload Tiktok Dari Link: ${msg.text}`))
        });
    }

    if (msg.text.match(/^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.*/)) {
        let anu = await youtubeSearch(msg.text)
    let vid = anu.video
    let vide 
    if (/playrand(om)?$/i.test(msg.text)) vide = vid[Math.floor(Math.random() * vid.length)]
    else vide = vid[0]
    let { authorName, title, description, url, thumbnail, videoId, durationH, viewH, publishedTime } = vide
    let capt = `🎬 YouTube Play
  
📌 Judul: ${title}
📮 ID: ${videoId}
⌚ Durasi: ${durationH}
👁️ Penonton: ${viewH}
⏲️ Diunggah: ${publishedTime}
👑 Nama Pembuat: ${authorName}
🚀 Sumber: ${url}
📝 Deksripsi: ${description}`
            conn.sendPhoto(chatId, thumbnail, {
              caption: capt,
              reply_markup: {
                inline_keyboard: [
                  [
                    {text: 'Video', callback_data: 'videoyt'},
                    {text: 'Audio', callback_data: 'audioyt'}
                  ]
                ]
              }
            })
            conn.on('callback_query', async (query) => {
                const queryData = query.data;
                try {
                    if (queryData === 'audioyt') {
                      const info = await ytdl.getInfo(url);
                      const audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
                      const audio = audioFormats[0];
                      const audioTitle = info.videoDetails.title;
                
                      conn.sendMessage(chatId, 'Sedang mengunduh audio...').then((sentMessage) => {
                        setTimeout(() => {
                          conn.deleteMessage(chatId, sentMessage.message_id);
                        }, 60000);
                      })
                
                      ytdl(url, { format: audio })
                        .pipe(fs.createWriteStream('./tmp/audioyt.mp3'))
                        .on('finish', () => {
                          conn.sendAudio(chatId, './tmp/audioyt.mp3', {title: audioTitle, caption: '✅ DONE'})
                        });
                    } else if (queryData === 'videoyt') {
                      const info = await ytdl.getInfo(url);
                      const videoFormats = ytdl.filterFormats(info.formats, 'videoandaudio');
                      const video = videoFormats[0];
                      const videoTitle = info.videoDetails.title;
                
                      conn.sendMessage(chatId, 'Sedang mengunduh video...').then((sentMessage) => {
                        setTimeout(() => {
                          conn.deleteMessage(chatId, sentMessage.message_id);
                        }, 60000);
                      })
                
                      ytdl(url, { format: video })
                        .pipe(fs.createWriteStream('./tmp/videoyt.mp4'))
                        .on('finish', () => {
                          conn.sendVideo(chatId, './tmp/videoyt.mp4', {title: videoTitle, caption: '✅ DONE'})
                        });
                    }
                  } catch (error) {
                    conn.sendMessage(chatId, 'Terjadi kesalahan saat mengunduh.');
                  }
              });
            console.log(chalk.bold.white(`
Mendownload Youtube Dari Link: ${msg.text}`))
          }
    
    if (msg.text.match(/https?:\/\/(?:www\.)?instagram\.com\/[^ ]+/)) {
            const datTa = await instagram.v1(msg.text)
            for (let urRRl of datTa) {
            conn.sendDocument(chatId, urRRl.url, {caption: '✅ DONE'})
            console.log(chalk.bold.white(`
Mendownload Instagram Dari Link: ${msg.text}`))
            }
    }

    if (msg.text.match(/https?:\/\/(?:www\.)?facebook\.com\/[^ ]+/)) {
        try {
        conn.sendMessage(chatId, 'Sedang mengunduh...').then((sentMessage) => {
          setTimeout(() => {
            conn.deleteMessage(chatId, sentMessage.message_id);
          }, 15000);
        });
      
        const d2ata = await facebook.v1(msg.text);
        let r2es = '';
        if (d2ata.urls && d2ata.urls.length > 0) {
          r2es = `${d2ata.urls[0]?.hd || d2ata.urls[1]?.sd || ''}`;
        }
      
        const fileName = './tmp/fb.mp4';
        const fileStream = fs.createWriteStream(fileName);
      
        const response = await axios.get(r2es, { responseType: 'stream' });
        response.data.pipe(fileStream);
      
        fileStream.on('finish', () => {
          conn.sendDocument(chatId, fs.createReadStream(fileName), { caption: '✅ DONE' });
        });
      
        fileStream.on('error', (error) => {
          console.error('Error saving video file:', error);
          conn.sendMessage(chatId, 'Terjadi kesalahan saat mengunduh video.');
        }); 
    } catch (error) {
        console.log(error)
        conn.sendMessage(chatId, 'Gagal Mendownload File, Kemungkinan Sudah Dihapus Atau Diprivate')
      }
      console.log(chalk.bold.white(`
Mendownload Facebook Dari Link: ${msg.text}`))
    }

      if (msg.text.match(/https?:\/\/(?:www\.)?twitter\.com\/(?:#!\/)?(\w+)\/status(es)?\/(\d+)/)) {
            conn.sendMessage(chatId, 'Masih Dalam Perbaikan')
    }
});