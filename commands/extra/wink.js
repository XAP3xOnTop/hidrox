const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    name: "wink",
    category: "extra",
    run: async (client, message, args) => {
        const url = 'https://some-random-api.ml/animu/wink';

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`ERROR!`)
        }

        const embed = new MessageEmbed()
            .setTitle('Random Wink')
            .setImage(data.link)

        await message.channel.send(embed)
    }
}