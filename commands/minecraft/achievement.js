const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "achievement",
  category: "minecraft",
    run: async (client, message, args) => {
        if (!args[0]) {
            const embed = new MessageEmbed()
                .setTitle('Type minecraft username!')
                .setDescription('hx!achievement <text>')
                .setColor('#a81600');
            return message.channel.send(embed)
        };

        var response = [Math.floor(Math.random() * ((39 - 1) + 1) + 1)];
        var c = `https://minecraftskinstealer.com/achievement/${response}/Achievement+Get%20/${args}`;

        var regex = /,/gi;

        var lets = c.replace(regex, '%20');

                const embed = new MessageEmbed()
                    .setTitle('Minecraft Achievement')
                    .setImage(`${lets}`)
                message.channel.send(embed)

    }
}