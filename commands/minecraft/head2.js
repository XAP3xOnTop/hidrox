const { MessageEmbed } = require('discord.js');
const { HeadAvatar, AvatarRendered, SkinRendered } = require('minestats');
const { NameHistory, UsernameToUUID } = require('minestats');
module.exports = {
  name: "face",
  category: "minecraft",
    run: async (client, message, args) => {
        if (!args[0]) {
            const embed = new MessageEmbed()
                .setTitle('Type minecraft username!')
                .setDescription('hx!face <username>')
                .setColor('#a81600');
            return message.channel.send(embed)
        };
        UsernameToUUID(`${args}`).then(info => {
            console.log(info);

            var uuid = info.id

            try {
            } catch (e) {
                return message.channel.send(`Nenalezeno!!`)
            }

                const embed = new MessageEmbed()
                    .setTitle('Minecraft Face')
                    .setImage(`https://visage.surgeplay.com/face/512/${uuid}.png`)
                message.channel.send(embed)
        })
    }
}