const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    name: "sepia",
    category: "extra",
    run: async (client, message, args) => {
        const logo = message.author.displayAvatarURL({ dynamic: true, format: 'png' });
        const url = `https://some-random-api.ml/canvas/sepia?avatar=${logo}`;

        if (!args[1]) {
            let member = message.mentions.users.first() || message.author;
            const logo2 = member.displayAvatarURL({ dynamic: true, format: 'png' });
            const url2 = `https://some-random-api.ml/canvas/sepia?avatar=${logo2}`;

            const embed = new MessageEmbed()
                .setTitle('sepia')
                .setImage(`${url2}`)
            return message.channel.send(embed)
        }


        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`ERROR!`)
        }

        const embed = new MessageEmbed()
            .setTitle('sepia')
            .setImage(`${url}`)
        await message.channel.send(embed)
    }
}
