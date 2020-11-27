const { MessageEmbed } = require('discord.js');
const { HeadAvatar, AvatarRendered, SkinRendered } = require('minestats');
const { NameHistory, UsernameToUUID } = require('minestats');
module.exports = {
  name: "head",
  category: "minecraft",
    run: async (client, message, args) => {
        if (!args[0]) {
            const embed = new MessageEmbed()
                .setTitle('Type minecraft username!')
                .setDescription('hx!head <username>')
                .setColor('#a81600');
            return message.channel.send(embed)
        };
        UsernameToUUID(`${args}`).then(info => {
            console.log(info);

            var uuid = info.id

            AvatarRendered(`${uuid}`).then(info => {
                console.log(info);
                const embed = new MessageEmbed()
                    .setTitle('Minecraft Head')
                    .setImage(info)
                message.channel.send(embed)
            })
        })
    }
}