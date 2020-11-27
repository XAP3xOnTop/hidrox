const { MessageEmbed } = require("discord.js");
const ms = require('ms')
const config = require("../../botconfig.json");
const prefixx = config.prefix;
module.exports = {
    name: "help",
    aliases: ["h"],
    category: "info",
    description: "Returns all commands, or one specific command info",
    usage: "[command | alias]",
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL)
            .setColor('#f3f3f3')
            .setTitle(`**Help:**`)
            .setAuthor("Support")
            .addFields(
                {
                    name: "Commands count: ",
                    value: '53',
                    inline: true
                },
                {
                    name: "Prefix: `hx!`",
                    value: `All commands:`,
                    inline: false
                },
                {
                    name: "<:hxinfo:781811807379128332>Info[12]: ",
                    value: "`help` - `oldest` - `ping` - `server-info` - `weather` - `youngest` - `avatar` - `user-info` - `corona` - `role-checker` - `bot-info` - `invite-bot`",
                    inline: false
                },
                {
                    name: ":dog:Animals[7]: ",
                    value: "`dog` - `cat` - `koala` - `bird` - `pikachu` - `panda` - `fox`",
                    inline: false
                },
                {
                    name: ":barber:Fun[6]: ",
                    value: "`meme` - `dice` - `8ball` - `hug` - `gay-meter` - `cflip`",
                    inline: false
                },
                {
                    name: "<:hxminecraft:781810609767055361>Minecraft[7]: ",
                    value: "`skin` - `skin2` - `head` - `mc-server` - `face` - `cape` - `achievement`",
                    inline: false
                },
                {
                    name: ":bulb:Extra[6]: ",
                    value: "`calc` - `binary` - `wink` - `cb` - `decode` - `pat`",
                    inline: false
                },
                {
                    name: ":camera:Images[11]:",
                    value: "`brightness` - `glass` - `green` - `gsc` - `invert` - `pixelate` - `red` - `sepia` - `trigger` - `wasted` - `gay`",
                    inline: false
                },
                {
                    name: "💸Economy[3]:",
                    value: "`daily` - `balance` - `work`",
                    inline: false
                },
                {
                    name: " ᲼᲼᲼᲼",
                    value: "[Support](https://discord.gg/8tqBEWj) - [Invite Bot](https://url-s.me/HTvsg)"
                }
            )
        await message.channel.send(embed)

}}