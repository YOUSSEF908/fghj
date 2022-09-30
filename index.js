const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

const mongoose = require('mongoose')
const ms = require('ms')

mongoose.connect('mongodb+srv://YAS779901:YAS779901@cluster0.hnklw.mongodb.net/uygttf', {
    useUnifiedTopology: false,
    useNewUrlParser: true,
}).then(console.log('MongoDb is connected!'))

const prefix = "-"
client.login("MTAyNTQ3NDc3OTEwNjUxMjk5Nw.GNmOBi.Jr43wi0w_zxSJHZ5MdPknj9wkuN3VYoFiyziyM")

client.on('ready', () => {
    console.log('Ready!')
})

const prSchema = require('./schemas/profile')

client.on('message', message => {
    if(!message.guild) return;
    if(message.author.client) return;
    prSchema.findOne({userId: message.author.id}, async(err, data) => {
        if(data) {
            data.xp += 1
            data.save()
            if(data.xp == 200) {
                prSchema.findOne({userId: message.author.id}, async(err, data) => {
                    if(data) {
                        data.level = "1"
                        data.save()
                    } else {
                        new prSchema({
                            userId: message.author.id,
                            level: "1"
                        }).save()
                    }
                })
            }
            if(data.xp == 500) {
                prSchema.findOne({userId: message.author.id}, async(err, data) => {
                    if(data) {
                        data.level = "2"
                        data.save()
                    } else {
                        new prSchema({
                            userId: message.author.id,
                            level: "2"
                        }).save()
                    }
                })
            }
            if(data.xp == 900) {
                prSchema.findOne({userId: message.author.id}, async(err, data) => {
                    if(data) {
                        data.level = "3"
                        data.save()
                    } else {
                        new prSchema({
                            userId: message.author.id,
                            level: "3"
                        }).save()
                    }
                })
            }
            if(data.xp == 1400) {
                prSchema.findOne({userId: message.author.id}, async(err, data) => {
                    if(data) {
                        data.level = "4"
                        data.save()
                    } else {
                        new prSchema({
                            userId: message.author.id,
                            level: "4"
                        }).save()
                    }
                })
            }
            if(data.xp == 2000) {
                prSchema.findOne({userId: message.author.id}, async(err, data) => {
                    if(data) {
                        data.level = "5"
                        data.save()
                    } else {
                        new prSchema({
                            userId: message.author.id,
                            level: "5"
                        }).save()
                    }
                })
            }
            if(data.xp == 2600) {
                prSchema.findOne({userId: message.author.id}, async(err, data) => {
                    if(data) {
                        data.level = "6"
                        data.save()
                    } else {
                        new prSchema({
                            userId: message.author.id,
                            level: "6"
                        }).save()
                    }
                })
            }
            if(data.xp == 3300) {
                prSchema.findOne({userId: message.author.id}, async(err, data) => {
                    if(data) {
                        data.level = "7"
                        data.save()
                    } else {
                        new prSchema({
                            userId: message.author.id,
                            level: "7"
                        }).save()
                    }
                })
            }
            if(data.xp == 4100) {
                prSchema.findOne({userId: message.author.id}, async(err, data) => {
                    if(data) {
                        data.level = "8"
                        data.save()
                    } else {
                        new prSchema({
                            userId: message.author.id,
                            level: "8"
                        }).save()
                    }
                })
            }
            if(data.xp == 5000) {
                prSchema.findOne({userId: message.author.id}, async(err, data) => {
                    if(data) {
                        data.level = "9"
                        data.save()
                    } else {
                        new prSchema({
                            userId: message.author.id,
                            level: "9"
                        }).save()
                    }
                })
            }
            if(data.xp == 6000) {
                prSchema.findOne({userId: message.author.id}, async(err, data) => {
                    if(data) {
                        data.level = "10"
                        data.save()
                    } else {
                        new prSchema({
                            userId: message.author.id,
                            level: "10"
                        }).save()
                    }
                })
            }
            if(data.xp == 7100) {
                prSchema.findOne({userId: message.author.id}, async(err, data) => {
                    if(data) {
                        data.level = "11"
                        data.save()
                    } else {
                        new prSchema({
                            userId: message.author.id,
                            level: "11"
                        }).save()
                    }
                })
            }
            if(data.xp == 8200) {
                prSchema.findOne({userId: message.author.id}, async(err, data) => {
                    if(data) {
                        data.level = "12"
                        data.save()
                    } else {
                        new prSchema({
                            userId: message.author.id,
                            level: "12"
                        }).save()
                    }
                })
            }
            if(data.xp == 9300) {
                prSchema.findOne({userId: message.author.id}, async(err, data) => {
                    if(data) {
                        data.level = "13"
                        data.save()
                    } else {
                        new prSchema({
                            userId: message.author.id,
                            level: "13"
                        }).save()
                    }
                })
            }
            if(data.xp == 10400) {
                prSchema.findOne({userId: message.author.id}, async(err, data) => {
                    if(data) {
                        data.level = "14"
                        data.save()
                    } else {
                        new prSchema({
                            userId: message.author.id,
                            level: "14"
                        }).save()
                    }
                })
            }
            if(data.xp == 11500) {
                prSchema.findOne({userId: message.author.id}, async(err, data) => {
                    if(data) {
                        data.level = "15"
                        data.save()
                    } else {
                        new prSchema({
                            userId: message.author.id,
                            level: "15"
                        }).save()
                    }
                })
            }
            if(data.xp == 12600) {
                prSchema.findOne({userId: message.author.id}, async(err, data) => {
                    if(data) {
                        data.level = "16"
                        data.save()
                    } else {
                        new prSchema({
                            userId: message.author.id,
                            level: "16"
                        }).save()
                    }
                })
            }
	} else {
            new prSchema({
                userId: message.author.id,
                level: 0,
                xp: 0
            }).save()
        }
    })
})

const dmdSchema = require('./schemas/credits.js')
client.bal = (userId) => new Promise(async ful => {
  const data = await dmdSchema.findOne({ userId })
  if (!data) return ful(0)
  ful(data.credits)
})

client.add = (userId, credits) => {
  dmdSchema.findOne({ userId }, async (err, data) => {
    if (err) throw err
    if (data) {
      data.credits += credits
    } else {
      data = new dmdSchema({
        userId,
        credits
      })
    } data.save()
  })
}

client.remove = (userId, credits) => {
  dmdSchema.findOne({ userId }, async (err, data) => {
    if (err) throw err
    if (data) {
      data.credits -= credits
    } else {
      data = new dmdSchema({
        userId,
        credits: -credits
      })
    } data.save()
  })
}

client.on('message', async message => {
  if (message.content.startsWith(p + 'pay')) {
    const user = message.mentions.users.first()
    if (!user) return message.reply('منشن شخص')
    if (user == message.author) return message.reply(`نفسك ثم نفسك `)
    if (user.bot) return message.reply(`البوتات معندهاش جاجه`)
    const args1 = message.content.split(" ")
    const amount = await client.bal(message.author.id)
    if (amount < 0) return message.reply(`عندك 0`)
    if (args1[2]) {
      if (amount < parseInt(args1[2])) return message.reply('ميزانيتك مب كافية والله حرام')
    }
    if (isNaN(parseInt(args1[2]))) return message.reply('')
    let tax = Math.floor(args1[2] * (5 / 100))
    let price = message.content.split(" ")[2]
    let result = Math.floor(price - price * (5 / 100))
    if (price == 1) {
      result = 1
    }
    message.channel.send(`حولت ${result} كريدت ل ${user}`)
    client.add(user.id, result)
    client.remove(message.author.id, price)
  }
}
)

client.on('message', async message => {
  if (message.content.startsWith(p + 'bal')) {
    const user = message.mentions.users.first() || message.author
    const amount = await client.bal(user.id)
    if (user == message.author) {
      const embed = new Discord.MessageEmbed()
        .setDescription(`معاك فد كدا ${amount}`)
      message.channel.send(embed)
    } else {
      const embed = new Discord.MessageEmbed()
        .setDescription(`اهو البني ادمي لي منشنتو معاه قد كدا ${amount}`)
      message.channel.send(embed)
    }
  }
})

const dSchema = require('./schemas/daily-cooldown.js')

client.on('message', async message => {
  if (message.content.startsWith(p + 'daily')) {
    let timeout = 43200000;
    let results = await dSchema.findOne({
      userId: message.author.id,
    })
    if (results) {
      if (timeout - (Date.now() - results.coolDown) > 0) {
        let time = ms(timeout - (Date.now() - results.coolDown), { verbose: true });
        message.reply(`${time}`);
      } else {
        results.coolDown = Date.now();
        results.save().catch(e => console.log(e));
        const amount = Math.floor(Math.random() * 2000) + 250
        const embed = new Discord.MessageEmbed()
          .setDescription(`${message.author}, لقد حصلت ع 6663 النقود اليومية!`)
        message.channel.send(embed)
        client.add(message.author.id, amount)
      }
    } else {
      let newCooldown = new dSchema({
        userId: message.author.id,
        coolDown: Date.now(),
      })
      newCooldown.save();
      const amount = Math.floor(Math.random() * 2000) + 250
      const embed = new Discord.MessageEmbed()
        .setDescription(`حصلت ${amount}`)
      message.channel.send(embed)
      client.add(message.author.id, amount)
    }
  }
}
)

client.on('message', async message => {
  if (message.content.startsWith(p + 'top')) {
    let data = await dmdSchema.find({ guildId: message.guild.id }).then(data => data.sort((a, b) => b.credits - a.credits))
    var finalLb = "";
    data.length = "10"
    for (var i in data) {
      const user = await bot.users.fetch(getID(data[i].userId))
      finalLb += `\`${parseInt(i) + parseInt(1)}-\` | ${user}: \`${data[i].credits}\`\n`;
    }
    const args1 = message.content.split(' ');
    if (!args1[1]) {
      const embed = new Discord.MessageEmbed()
        .setDescription(`crdts leaderboard:
${finalLb}`)
      message.channel.send(embed)
    }
  }
}
)

const Schema = require('./schemas/profile.js')

client.on('message', async message => {
if(message.content.startsWith(prefix + 'title')) {
 const args1 = message.content.slice(prefix.length).trim().split(/ +/);
let title1 = args1.slice(1).join(" ");
if(!title1) {
return message.channel.send('اكتب التايتال')
 }
if (title1.length > 26) {
 return message.channel.send(`26 حرف كحد اقصى يحبي`)
}
Schema.findOne({userId: message.author.id}, async(err, data) => {
	              if(data) {
 data.title = title1
                data.save()
            } else {
                new Schema({
                    userId: message.author.id, 
                    title: title1
                }).save()
            }
            const embed = new Discord.MessageEmbed()
            .setDescription(`done :white_check_mark:`)
            message.channel.send(embed)
        })
}
}
)
const {registerFont} = require('canvas')
const {resolveImage, Canvas} = require('canvas-constructor/cairo')

registerFont('./configurations/fonts/JosefinSans-Medium.ttf', {family: 'angry'})
registerFont('./configurations/fonts/Tajawal-Medium.ttf', {family: 'angry'})
registerFont('./configurations/fonts/arial.ttf', {family: 'angry'})

const profileback = "https://cdn.discordapp.com/attachments/712120444345647227/896411446227927080/20211004_184828.png"

client.on('message', async message => {
if(message.content.startsWith(prefix + 'profile')) {
	let user = message.mentions.users.first() || message.author
        if(user.client) return message.reply('البوتات معندهاش بروفايل كارد')
        message.channel.startTyping()
        const dmd = await client.bal(user.id)
const rp = await client.rbal(user.id)
        Schema.findOne({userId: user.id}, async(err, data) => {
            if(!data) {
                new Schema({
                    userId: user.id,
                    title: "",
                    level: "0",
                    xp: "0"
                }).save()
            }
        })
        Schema.findOne({userId: user.id}, async(err, data) => {
            userimg = user.avatarURL({format: 'png'}), avt = await resolveImage(userimg)
            let image = await resolveImage(profileback)
            async function card() {
                let ctx = new Canvas(1024, 1024)
                .setColor('black')
                .printImage(image, 0, 0, 1024, 1024)
                //.printCircle(200, 200, 95)
                .printCircularImage(avt, 200, 200, 100)
                .setTextFont('55px angry')
                .printText(user.tag, 330, 200)
                .setTextFont('55px angry')
                .printText('Lvl:', 100, 400)
                .setTextFont('55px angry')
                .printText(`${data.level}`, 100, 470)
                .setTextFont('55px angry')
                .printText('credit:', 100, 540)
                .setTextFont('55px angry')
                .printText(`${dmd}`, 100, 610)
                .setTextFont('55px angry')
                .printText('Rps:', 100, 680)
                .setTextFont('55px angry')
                .printText(`${rp}`, 100, 750)
                .printText('Total xp:', 100, 820)
                .setTextFont('55px angry')
                .printText(`${data.xp}`, 100, 890)
                .setTextFont('55px angry')
                .printText(`${data.title || " "}`, 330, 512)//must be 26 letters
                .toBuffer()
                return ctx
            }
            message.channel.send({files: [{attachment: await card(), name: 'profile.png'}]})
            message.channel.stopTyping();
        })
}
}
)