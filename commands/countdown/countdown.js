const ms = require('ms');
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "cd",
    category: "giveaway",
    description: "Get the oldest account creation date in the guild!",
    run: async (client, message, args) => {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            const embed = new MessageEmbed()
                .setTitle('<:hxcross:781802972974940171> Na toto nemáš povolení!')
                .setColor('#a81600');
            return message.channel.send(embed)
        };

        let channel = message.mentions.channels.first();

        if (!channel) {
            const embed = new MessageEmbed()
                .setTitle('<:hxcross:781802972974940171> Type channel!')
                .setDescription('hx!cd <channel> <time> <winners> <prize>')
                .setColor('#a81600');
            return message.channel.send(embed)
        };

        let giveawayDuration = args[1];

        if (!giveawayDuration || isNaN(ms(giveawayDuration))){ 
            const embed = new MessageEmbed()
                .setTitle('<:hxcross:781802972974940171> Provide a valid duration!')
                .setDescription('hx!gstart <channel> <time> <winners> <prize>')
                .setColor('#a81600');
            return message.channel.send(embed)
        };

        let giveawayWinners = args[2];

        if (isNaN(giveawayWinners) || (parseInt(giveawayWinners) <= 0)){ 
            const embed = new MessageEmbed()
                .setTitle('<:hxcross:781802972974940171> Provide a valid number of winners!')
                .setDescription('hx!gstart <channel> <time> <winners> <prize>')
                .setColor('#a81600');
            return message.channel.send(embed)
        };

        let giveawayPrize = args.slice(3).join(" ");

        if (!giveawayPrize){ 
            const embed = new MessageEmbed()
                .setTitle('<:hxcross:781802972974940171> Provide a Prize!')
                .setDescription('hx!gstart <channel> <time> <winners> <prize>')
                .setColor('#a81600');
            return message.channel.send(embed)
        };

        client.giveawaysManager.start(channel, {
            time: ms(giveawayDuration),
            prize: giveawayPrize,
            winnerCount: "0",
            hostedBy: message.author,

            messages: {
                giveaway: "᲼᲼᲼᲼",
                giveawayEned: "**GIVEAWAY ENDED**",
                timeRemaining: "**{duration}**",
                inviteToParticipate: "React with 🎉 to enter",
                winMessage: "Congrats {winners}, you won **{prize}**",
                embedFooter: "Giveaway time!",
                noWinner: "Couldn't determine a winner",
                hostedBy: "Hosted by {user}",
                winners: "winner(s)",
                endedAt: "Ends at",
                units: {
                    seconds: "sekund",
                    minutes: "minut",
                    hours: "hodin",
                    days: "dnů",
                    pluralS: false
                }
            }
        })

        message.channel.send(`CountDown starting in ${channel}`);
    }
}