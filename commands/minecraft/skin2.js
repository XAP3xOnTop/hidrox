const { MessageEmbed } = require('discord.js');
const { HeadAvatar, AvatarRendered, SkinRendered } = require('minestats');
const { NameHistory, UsernameToUUID } = require('minestats');
module.exports = {
  name: "skin2",
  category: "minecraft",
    run: async (client, message, args) => {
        if (!args[0]) {
            const embed = new MessageEmbed()
                .setTitle('Type minecraft username!')
                .setDescription('hx!skin2 <username>')
                .setColor('#a81600');
            return message.channel.send(embed)
        };
        UsernameToUUID(`${args}`).then(info => {
            console.log(info);

            var uuid = info.id

                const embed = new MessageEmbed()
                    .setTitle('Minecraft Skin')
                    .setImage(`https://visage.surgeplay.com/bust/512/${uuid}.png`)
                message.channel.send(embed)
        })
    }
}