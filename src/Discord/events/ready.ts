import {Client} from "discord.js";
export = {
	name: "ready",
	async execute(client:Client<true>) {
		console.log(`logged as ${client.user.username}`);
	},
};
  