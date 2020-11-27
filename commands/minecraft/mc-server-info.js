const util = require('minecraft-server-util');
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: "mc-server",
    category: "minecraft",
      run: async (client, message, args) => {
          if (!args[0]) {
              const embed = new MessageEmbed()
                  .setTitle('Type minecraft IP!')
                  .setDescription('hx!mc-server <IP adress>')
                  .setColor('#a81600');
              return message.channel.send(embed)
          };

          util.status(`${args[0]}`) // port is default 25565
            .then((response) => {

            const embed = new MessageEmbed()
                .setTitle("Server Info")
                .addFields(
                    {
                        name: 'Server IP: ',
                        value: response.host,
                        inline: false
                    },
                    {
                        name: 'Online Players: ',
                        value: response.onlinePlayers,
                        inline: false
                    },
                    {
                        name: 'Max Players: ',
                        value: response.maxPlayers,
                        inline: true
                    },
                    {
                        name: 'Server version: ',
                        value: response.version,
                        inline: false
                    }
                )

            message.channel.send(embed)
        })
        }
    }