const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    name: "cb",
    category: "extra",
    run: async (client, message, args) => {
        const url = `https://some-random-api.ml/chatbot?message=${args}`;

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`ERROR!`)
        }

        const embed = new MessageEmbed()
            .setTitle('Chat Bot')
            .setDescription(data.response)
        await message.channel.send(embed)
    }
}