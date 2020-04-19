const { music_handler } = require("../../index.js");

module.exports.execute = async (client, message, args) => {

    const queue = music_handler.getGuildQueue(message.guild.id); // Get the queue for the guild the cmd was executed in
    if (!queue) return message.reply("⚠️ There is currently no music playing!"); // Tell the user no song is being played

    queue.videos = []; // Remove all songs in the queue so nothing to play after the current song ends
    queue.connection.dispatcher.end(); // End the current song

}

module.exports.help = {
    name: "stop",
    aliases: ["end", "leave"],
    category: "Music",
    usage: "",
    description: "Tired of musics? I don't think anyone would ever say that! But if you truly are then stop the music playback using this command!"
}