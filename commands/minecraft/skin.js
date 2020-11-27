const { MessageEmbed } = require('discord.js');
const { HeadAvatar, AvatarRendered, SkinRendered } = require('minestats');
const { NameHistory, UsernameToUUID, ServerStats } = require('minestats');
module.exports = {
  name: "skin",
  category: "minecraft",
    run: async (client, message, args) => {
        if (!args[0]) {
            const embed = new MessageEmbed()
                .setTitle('Type minecraft username!')
                .setDescription('hx!skin <username>')
                .setColor('#a81600');
            return message.channel.send(embed)
        };
        UsernameToUUID(`${args}`).then(info => {
            console.log(info);

            var uuid = info.id

            SkinRendered(`${uuid}`).then(info => {
                const embed = new MessageEmbed()
                    .setTitle('Minecraft Skin')
                    .setImage(info)
                message.channel.send(embed)
            })
        })
    }
}