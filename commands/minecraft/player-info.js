const MCAPI = require("minecraft-lib")
const util = require('minecraft-server-util');
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: "player-info",
    category: "minecraft",
      run: async (client, message, args) => {
          if (!args[0]) {
              const embed = new MessageEmbed()
                  .setTitle('Type minecraft username!')
                  .setDescription('hx!player-info <username>')
                  .setColor('#a81600');
              return message.channel.send(embed)
          };
          MCAPI.players.get(`${args[0]}`)
            .then(player => {
            console.log("Username : " + player.username)
            console.log("UUID : " + player.uuid)
            console.log("Skin URL : " + player.textures.skin_url)
            var url = player.textures.skin_url
                const embed = new MessageEmbed()
                    .setTitle('Minecraft Player')
                    .setDescription(player.username)
                    .setImage()
                    .addFields(
                        {
                            name: 'Player Skin:',
                            value: player.textures.skin_url,
                            inline: false
                        }
                    )
                message.channel.send(embed)
          })
    }
}