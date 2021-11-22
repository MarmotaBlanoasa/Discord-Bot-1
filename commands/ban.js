
module.exports = {
    name: 'ban',
    description: 'Ban la Micnea',
    execute(message, args){
        const member = message.mentions.users.first()
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id)
            setTimeout(function () {
                memberTarget.ban()
            }, 5000);
            message.channel.send('L-am spart!')
        }else{
            message.channel.send('Nu l-am putut sparge')
        }
    }
}