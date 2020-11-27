const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    name: "hug",
    category: "extra",
    run: async (client, message, args) => {
        const url = 'https://some-random-api.ml/animu/hug';

        if (!args[1]) {
            const embed = new MessageEmbed()
                .setTitle('Mention user!')
                .setDescription('hx!hug <user>')
                .setColor('#a81600');
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
            .setTitle(`@${message.author.username} hugs @${message.mentions.users.first().username || message.mentions.members.first()}`)
            .setImage(data.link)

        await message.channel.send(embed)
    }
}