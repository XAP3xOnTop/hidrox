const ms = require('ms');
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "gstart",
    category: "giveaway",
    description: "Get the oldest account creation date in the guild!",
    run: async (client, message, args) => {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('You are not allowed to start giveaways');

        let channel = message.mentions.channels.first();

        if (!channel) {
            const embed = new MessageEmbed()
                .setTitle('<:hxcross:781802972974940171> Type channel!')
                .setDescription('hx!gstart <channel> <time> <winners> <prize>')
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
                giveaway: "**GIVEAWAY**",
                giveawayEned: "**GIVEAWAY ENDED**",
                timeRemaining: "Time remaining: **{duration}**",
                inviteToParticipate: "React with 🎉 to enter",
                winMessage: "Congrats {winners}, you won **{prize}**",
                embedFooter: "Giveaway time!",
                noWinner: "Couldn't determine a winner",
                hostedBy: "Hosted by {user}",
                winners: "winner(s)",
                endedAt: "Ends at",
                units: {
                    seconds: "seconds",
                    minutes: "minutes",
                    hours: "hours",
                    days: "days",
                    pluralS: false
                }
            }
        })

        message.channel.send(`Giveaway starting in ${channel}`);
    }
}