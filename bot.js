require('dotenv').config()

const Discord = require('discord.js')
const {Permissions} = require('discord.js')
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

const prefix = '=';

const fs = require('fs')

client.commands = new Discord.Collection()

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))

for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}



client.on('ready', () =>{
    console.log("Bans are running")
})


client.on('message', msg => {
    if(msg.content === 'ban'){
        msg.reply("Ai supt pula Mihnea")
    }
})


client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if(message.member.permissions.has('BAN_MEMBERS') && message.member.permissions.has('KICK_MEMBERS')){
    if(command === 'ban'){
        const member2 = message.mentions.users.first()
        const memberMessage2 = message.guild.members.cache.get(member2.id).user.id
        client.commands.get('ban').execute(message, args);
        client.users.fetch(memberMessage2.toString()).then((user)=>{
            user.send('Te-am spart fraiere')
        })
    }
    
    if(command === 'kick'){
        const member = message.mentions.users.first()
        const memberMessage = message.guild.members.cache.get(member.id).user.id
        client.commands.get('kick').execute(message, args);
        client.users.fetch(memberMessage.toString()).then((user)=>{
            user.send('Te-am spart lache prost')
        })
    }}else{
        message.channel.send('Nu are conversatie furnica cu bocancu')
    }
    
    if(command === 'muie'){
        message.channel.send('Mihnea')
    }
})

client.login(process.env.TOKEN)