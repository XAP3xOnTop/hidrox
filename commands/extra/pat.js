const axios = require('axios');
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "pat",
    category: "extra",
    run: async (client, message, args) => {
        const url = 'https://some-random-api.ml/animu/pat';

        let data, response;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`ERROR!`)
        }

        message.channel.send("Random pat:")
        message.channel.send(data.link)
    }
}