const Discord = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});
client.setMaxListeners(0);


const prefix = '+'
/*const client = new discord.Client({
  intents: [
    "Guilds",
    "GuildMessages",
    "MessageContent"
  ]
})*/

client.on("ready", client => {
  console.log("Bot is ONLINE!")
})

client.login(process.env.TOKEN)


//test embed 

client.on('messageCreate', async (message) => {
    if (message.author.bot) return; // Ignore messages from bots

    if (message.content.toLowerCase() === 's') {


// inside a command, event listener, etc.
const exampleEmbed = new EmbedBuilder()
  .setTitle(`This is **${message.guild.name}** Photo!`)
  //.setAuthor(message.author.username)
  .setColor(0x164fe3)
  .setImage(message.guild.iconURL())
  .setURL(message.guild.iconURL())
  .setTimestamp();

      message.channel.send({ embeds: [exampleEmbed] });

      message.channel.send('Pong!');
    }
});

//SX test
client.on('messageCreate', async (message) => {
    if (message.author.bot) return; // Ignore messages from bots
    if (message.content.toLowerCase() === 'v') {
      // Code

      //let memory = await os.mem();
      //let cpu = await os.cpu();
     // let cpuUsage = await (await os.currentLoad()).currentLoad;
      //let osInfo = await os.osInfo();
     // let TotalRam = formatBytes(memory.total);
     // let UsageRam = formatBytes(memory.used);


// inside a command, event listener, etc.
const exampleEmbed = new EmbedBuilder()
//.setAuthor(message.author.username)
       /**
         *
         * @param {JUGNU} client
         * @param {CommandInteraction} interaction
         * @param {String[]} args
         * @param {Queue} queue
         */

                .setColor('#0099ff')

                .setTitle("__**Stats:**__")
                .setThumbnail(client.user.displayAvatarURL())
                .setDescription(
                  `> ** Made by [\` DR.BOBO \`](https://www.instagram.com/kabirjaipal_2004) **`
                )
      .addFields([
                   {
                     name: `⏳ Memory Usage`, value: 'Some value here', 

                   },
                   {
                     name: `⌚️ Uptime`, value: 'Some value here', 

                   },
                   {
                     name: `📁 Users`, value: `\`${client.guilds.cache.size} \``, inline: true

                   },
                   {
                     name: `📁 Servers`, value: `\`${client.guilds.cache.size}\``, inline: true

                   },
                   {
                     name: `📁 Channels`, value: `\`${client.channels.cache.size}\``, inline: true

                   },
                   {
                     name: `👾 Discord.JS`, value: 'Some value here', inline: true

                   },
                   {
                     name: `🤖 Node`, value: 'Some value here', inline: true

                   },
                   {
                     name: `🏓 Ping`, value: `\`${client.ws.ping}ms\``, inline: true

                   },
                   {
                     name: `🤖 CPU usage`, value: 'Some value here', inline: true

                   },
                   {
                     name: `🤖 Arch`, value: 'Some value here', inline: true

                   },
                   {
                     name: `💻 Platform`, value: 'Some value here', inline: true

                   },
                   {
                     name: `🤖 CPU`, value: 'Some value here', inline: true

                   },
                 ])      
      message.channel.send({ embeds: [exampleEmbed] });

      message.channel.send('Pong!');
    }
});
//-------------------------------------------------------------------------------
client.on('messageCreate', async (message) => {
    if (message.author.bot) return; // Ignore messages from bots

    if (message.content.toLowerCase() === 'l') {
const exampleEmbed = new EmbedBuilder()

  //.setAuthor(client.user.username,client.user.avatarURL())
 //           .setThumbnail(client.user.avatarURL())
 //           .setColor('RANDOM')
 //           .addField('**`My Ping`**' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
//            .addField('**`RAM Usage`**', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
  //          .addField('**`servers`**', [client.guilds.cache.size], true)
 //           .addField('**`channels`**' , `[ ${client.channels.cache.size} ]` , true)
 //           .addField('**`Users`**' ,`[ ${client.users.cache.size} ]` , true)
 //           .addField('**`My Name`**' , `[ ${client.user.tag} ]` , true)
 //           .addField('**`My ID`**' , `[ ${client.user.id} ]` , true)
 //           .addField('**`DiscordJS | NodeJS`**' , `[ ${Discord.version} ] | [ ${process.version} ]` , true) 
            //.addField('**`DiscordJS`**' , `[ ${Discord.version} ]` , true) 
            //.addField('```NodeJS```' , `[ ${process.version} ]` , true)
    //        .addField('**`Arch`**' , `[ ${process.arch} ]` , true) 
    //        .addField('**`Platform`**' , `[ ${process.platform} ]` , true) 
    //	      .addField('**`My Prefix`**' , `[ ${prefix} ]` , true)
    //	      .addField('**`My Language`**' , `[ Java Script ]` , true)
    //	      .setFooter('By bobo | grasp')

      message.channel.send({ embeds: [exampleEmbed] });

      message.channel.send('ok!');
    }
});
//-------------------------------------------------------------------------------
client.on("messageCreate", message => {
    if (!message.guild) return;
    if (message.author.bot) return;

    if (message.content.toLowerCase() === "savatar") {
        //const exampleEmbed = new Discord.MessageEmbed()
          const exampleEmbed = new EmbedBuilder()
            .setTitle(`This is **${message.guild.name}** Photo!`)
            .setAuthor(message.author.username)
            .setColor(0x164fe3)
            .setImage(message.guild.iconURL())
            .setURL(message.guild.iconURL())
            .setTimestamp();
        message.channel.send({ embeds: [exampleEmbed] });
    }
});


client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'ping') {
        await interaction.reply('Pong!');
    }
});

client.on('messageCreate', async (message) => {
    if (message.author.bot) return; // Ignore messages from bots

    if (message.content.toLowerCase() === 'ping') {
        message.reply('Pong!');
    }
});

//⚗️⚗️⚗️⚗️⚗️⚗️⚗️⚗️⚗️⚗️⚗️⚗️⚗️⚗️⚗️💡💡💡💡💡💡💡🚩🚩🚩🚩🚩🚩🚩⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️

const { AttachmentBuilder } = require('discord.js');

const Canvas = require('@napi-rs/canvas');
client.on('messageCreate', async (message) => {
    if (message.author.bot) return; // Ignore messages from bots

    if (message.content.toLowerCase() === 'p') {

      const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/688045868410077235/718884394533912626/image_15.png');
console.log(`🚀 SUCCESFULL !`)
      //message.channel.send({ files: [attachment] });
      //console.log(`🚀 SUCCESFULL ${attachment.proxyURL}!`);
      console.log(background)

      const canvas = Canvas.createCanvas(750, 375);
      const ctx = canvas.getContext('2d');
      ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
/*
      ctx.font = '60px sans-serif';
      ctx.fillText('Welcome', canvas.width / 2.5, canvas.height / 1.8);
*/

      //*********************************************************

//test new function
String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}
function fontMaker(word){

  for(var i=0;i<word.length;i++)
  {
    if(word.charAt(i) == "a" || word.charAt(i) == "A") word = word.replaceAt(i,"α");
    else if(word.charAt(i) == "b" || word.charAt(i) == "B") word = word.replaceAt(i,"Ⴆ");
    else if(word.charAt(i) == "c" || word.charAt(i) == "C") word = word.replaceAt(i,"C");
    else if(word.charAt(i) == "d" || word.charAt(i) == "D") word = word.replaceAt(i,"ԃ");
    else if(word.charAt(i) == "e" || word.charAt(i) == "E") word = word.replaceAt(i,"ҽ");
    else if(word.charAt(i) == "f" || word.charAt(i) == "F") word = word.replaceAt (i,"ϝ");
    else if(word.charAt(i) == "g" || word.charAt(i) == "G") word = word.replaceAt (i,"ɠ");
    else if(word.charAt(i) == "h" || word.charAt(i) == "H") word = word.replaceAt (i,"ԋ");
    else if(word.charAt(i) == "i" || word.charAt(i) == "I") word = word.replaceAt (i,"ι");
    else if(word.charAt(i) == "j" || word.charAt(i) == "J") word = word.replaceAt (i,"ʝ");
    else if(word.charAt(i) == "k" || word.charAt(i) == "K") word = word.replaceAt (i,"ƙ");
    else if(word.charAt(i) == "l" || word.charAt(i) == "L") word = word.replaceAt (i,"ʅ");
    else if(word.charAt(i) == "m" || word.charAt(i) == "M") word = word.replaceAt (i,"ɱ");
    else if(word.charAt(i) == "n" || word.charAt(i) == "N") word = word.replaceAt (i,"ɳ");
    else if(word.charAt(i) == "o" || word.charAt(i) == "O") word = word.replaceAt (i,"σ");
    else if(word.charAt(i) == "p" || word.charAt(i) == "P") word = word.replaceAt (i,"ρ");
    else if(word.charAt(i) == "q" || word.charAt(i) == "Q") word = word.replaceAt (i,"ϙ");
    else if(word.charAt(i) == "r" || word.charAt(i) == "R") word = word.replaceAt(i,"ɾ");
    else if(word.charAt(i) == "s" || word.charAt(i) == "S") word = word.replaceAt(i,"ʂ");
    else if(word.charAt(i) == "t" || word.charAt(i) == "T") word = word.replaceAt(i,"ƚ");
    else if(word.charAt(i) == "u" || word.charAt(i) == "U") word = word.replaceAt(i,"υ");
    else if(word.charAt(i) == "v" || word.charAt(i) == "V") word = word.replaceAt(i,"ʋ");
    else if(word.charAt(i) == "w" || word.charAt(i) == "W") word = word.replaceAt(i,"ɯ");
    else if(word.charAt(i) == "x" || word.charAt(i) == "X") word = word.replaceAt(i,"x");
    else if(word.charAt(i) == "y" || word.charAt(i) == "Y") word = word.replaceAt(i,"ყ");
    else if(word.charAt(i) == "z" || word.charAt(i) == "Z") word = word.replaceAt(i,"ȥ");
          else if(word.charAt(i) == "ザ" || word.charAt(i) == "Z") word = word.replaceAt(i,"ザ");

  }
  return word;
}

      const applyText3 = (canvas, text) => {
        const ctx = canvas.getContext('2d');

        // Declare a base size of the font
        let fontSize = 50;

        do {
          // Assign the font to the context and decrement it so it can be measured again
          //ctx.font = `bold ${fontSize -= 5}px sans-serif`;
         ctx.font = `bold ${fontSize -= 5}px kathen`;
          // Compare pixel width of the text to the canvas minus the approximate avatar size
        } while (ctx.measureText(text).width > canvas.width - 100);

        // Return the result to use in the actual canvas
        return ctx.font;
      };



      const applyText2 = (canvas, text) => {
        const ctx = canvas.getContext('2d');

        // Declare a base size of the font
        let fontSize = 50;

        do {
          // Assign the font to the context and decrement it so it can be measured again
          //ctx.font = `bold ${fontSize -= 5}px sans-serif`;
         ctx.font = `bold ${fontSize -= 5}px sans-serif`;
          // Compare pixel width of the text to the canvas minus the approximate avatar size
        } while (ctx.measureText(text).width > canvas.width - 100);

        // Return the result to use in the actual canvas
        return ctx.font;
      };
      //ctx.font = applyText2(canvas, 'Welcome' );
      ctx.fillStyle = '#65747c';
      ctx.shadowOffsetX = 3;
      ctx.shadowOffsetY = 3;
      ctx.shadowColor = "rgba(0,0,0,0.3)";
      ctx.shadowBlur = 1;
      ctx.fillText(['Welcome brijhgg', ], 20, canvas.height / 1.3);
//ctx.font = applyText3(canvas, ['Welcome' ]);

  ctx.fillStyle = '#65747c';
  ctx.shadowOffsetX = 3;
  ctx.shadowOffsetY = 3;
  ctx.shadowColor = "rgba(0,0,0,0.3)";
  ctx.shadowBlur = 1;
  ctx.fillText(['Welcome', ], 20, canvas.height / 1.3);

  ctx.font = applyText3(canvas, ('welcome to '));

  ctx.fontSize = '100px'; // عرض الخط
  ctx.fillStyle = '#ffffff';// لون الخط
  ctx.shadowOffsetX = 3;
  ctx.shadowOffsetY = 3;
  ctx.shadowColor = "rgba(0,0,0,0.3)";
  ctx.shadowBlur = 1;
  ctx.fillText(fontMaker('welcome to '), 20, canvas.height / 1.1);

//ctx.font = applyText3(canvas, lol);

            ctx.fillStyle = "#ffffff";
            ctx.fillText('lol', 500, 177);
            ctx.font = '16px Arial Bold';
            ctx.fontSize = '72px';
            ctx.fillStyle = "#ffffff";
            ctx.fillText(`Your The Member `, 500, 200);
            ctx.beginPath();










      //*********************************************************
      ctx.beginPath();
      ctx.arc(375, 140, 100, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.clip();

   var avatar = await Canvas.loadImage(message.author.displayAvatarURL({ format: 'png' }));
    //ctx.drawImage(avatar, 25, 25, 200, 200);
    ctx.drawImage(avatar, 275, 40, 200, 200);

  // Use the helpful Attachment class structure to process the file for you
  const attachment = new AttachmentBuilder(await canvas.encode('png'), { name: 'profile-image.png' });
//----------------------

     // console.log(avatar)
      console.log(message.author.displayAvatarURL())
//---------------





      message.channel.send({ files: [attachment] });
      message.channel.send('Pong!');
    }
});

//----------------------888888













//need fix but it good------------------------------------------------------------[Welcome🙏 + Dynamic scaling✅]🎈-----------------------------------------------------------------------
client.on('guildMemberAdd', async member => {
  const channel = member.guild.channels.cache.find(ch => ch.name.includes ('welco'));
  if (!channel) return;


channel.send(`hey ${member}`);
});


//✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
//------------------------------------------------------------[🧪BOT reply✅]-----------------------------------------------------------------------

const ff = [ //welcome images URL
     '**?**',
     '**senpai! <a:560551320889851915:692412043181031525>**',
     '**the fok <a:awaugrey:549214546469060608>**',
     '**My Prefix Is** : `x` <a:coool:535465599955107880>',
     '**what do you want <a:002jump:535465568808075264>**',
     '**stop bothering me bitch <a:whatdidyoujustsay:535465604291887124>**',
     '**<a:ANGRYPING:535465567084085259>**',
     '**Im going to f* you up punk <a:ANGRYPING:535465567084085259>**',
     '**Dude, getting some friends is better than wasting your time with me, with a bot HAHA <:seriuosly:553396604653142027>**',
     '**wow, some humans have a lot time to waste it <:__:551563978346856448>**',
     '**The earth is flat :flatbread:**',
     '**I love tacos :taco:**',
     '**omae wa mou shindeiru <:punk:731634891309056020>**',
     '**Anime for kids <:posedlook:713124372952645700>**',
     '**YO! YO! <a:yoyo:772237414970032129>**',
     '**, fucking @ me again and i will tear u limb from limb u basterd**',
]
client.on("messageCreate", message=> {
    if (message.author.bot) return;
    if (message.mentions.has(client.user))
    {
    message.reply({ content: `${ff[Math.floor(Math.random() * ff.length)]}` })
    }
});
//------------------------------------------------------------[test join🙏✅]-----------------------------------------------------------------------
client.on("messageCreate", message => {
  if (message.content.toLowerCase() === prefix+"j") {
  //if(!message.channel.guild) return message.channel.send({ content: '❌**This command is only for servers**').then(m => setTimeout(() => { m.delete() , 5000 }) },)
  //if(!message.member.permissions.has('MANAGE_GUILD')) return      message.channel.send({ content: '❌**Sorry But You Dont Have Permission** `MANAGE_GUILD`' ).then(m => setTimeout(() => { m.delete() , 5000 }) },)
client.emit('guildMemberAdd', message.member);
  }
}); 

//------------------------------------------------------------[🧪BOT react🎊✅]-----------------------------------------------------------------------
client.on("messageCreate", message => {
if (message.content.toLowerCase() === prefix+"react") {
    let emojiList = message.guild.emojis.cache.map(emoji => emoji.id)
    let randTenEmojies = shuffle(emojiList).splice(0,1)
    randTenEmojies.map(emoji => message.react(emoji))
}
});

const shuffle = (arr) => {
    var j, temp;
    for(var i = arr.length - 1; i > 0; i--){
        j = Math.floor(Math.random()*(i + 1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    return arr;
}
//🎈🎈🎈 ch ID need to fix------------------------------------------------------------[🧪BOT ⭐ react to file attachments✅ CH art]-----------------------------------------------------------------------
//*react to file attachments

client.on("messageCreate", ( message ) => {
  if(message.author.bot) return;

  if(message.channel.id !== '758758989688733736') return;

  if (message.attachments.size > 0) //you need to use the values of 0
  {      
         message.react('⭐') // 
         //message.react('549588124859105283') //
         //message.react('652513533078011904') //
    let emojiList = message.guild.emojis.cache.map(emoji => emoji.id)
    let randTenEmojies = shuffle(emojiList).splice(0,2)
    randTenEmojies.map(emoji => message.react(emoji))
  }

  })      
//*react to URL
client.on("messageCreate", message => {

  if(message.channel.id !== '758758989688733736') return;

    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https')){

  {
         message.react('⭐') // 
         //message.react('549588124859105283') //
        // message.react('652513533078011904') //
     let emojiList = message.guild.emojis.cache.map(emoji => emoji.id)
    let randTenEmojies = shuffle(emojiList).splice(0,2)
    randTenEmojies.map(emoji => message.react(emoji))
  }


    } 
})
//------------------------------------------------------------[BOT respond to 😁✅]-----------------------------------------------------------------------
const hey = [ 
     'hey',
     'senpai! <a:560551320889851915:692412043181031525>',
     'how are u <a:601396368132669451:671066073470205961>',
     'hello',
     'hi',
     'how are ya',
     'YO! YO! <a:yoyo:772237414970032129>',
]
client.on("messageCreate", msg => {
  if (msg.content.toLowerCase() === 'hey'){
     msg.reply({ content: `${hey[Math.floor(Math.random() * hey.length)]}` })
    }
});
//------------------------------------------------------------[ Server rules ⚠️ ✅]-----------------------------------------------------------------

client.on('messageCreate', async (message) => {
    if (message.author.bot) return; // Ignore messages from bots
    if (message.content.toLowerCase() === prefix + "rules") {
const exampleEmbed = new EmbedBuilder()
      .setColor('#0099ff')
      .setAuthor({name:`Server Rules`,iconURL: message.guild.iconURL()})
      .setDescription('You may be warned or banned if you break one of the following rules.')
      .setTitle(`Welcome to the official ${message.guild.name} Discord Server!`)
      .addFields({name:`Rule #1`, value:`**No offensive language or behaviour**`})
      .addFields({name:`Rule #2`, value:`**Self-promote only in the self promotion text channel**`})
      .addFields({name:`Rule #3`, value:`**Be respectful and nice towards everyone**`})
      .addFields({name:`Rule #4`, value:`**NSFW is not allowed**`})
      .addFields({name:`**(≧◡≦)**`, value:`**Otherwise have fun**`})
      .setTimestamp();
      message.channel.send({ embeds: [exampleEmbed] });
    }
});
