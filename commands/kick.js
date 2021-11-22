
module.exports = {
    name: 'kick',
    description: 'Ban la Micnea',
    execute(message, args){
        const member = message.mentions.users.first()
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id)
            setTimeout(function () {
                memberTarget.kick()
            }, 5000);
            message.channel.send('Marsi dracu de lache prost')
        }else{
            message.channel.send('Nu l-am putut da afara :(')
        }
    
}

}