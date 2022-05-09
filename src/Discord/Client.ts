import {setupEvents} from "./handler/index";
import Discord from "discord.js";
import config from "../utils/settings";
class Client extends Discord.Client {
	constructor(token: string) {
		super({
			intents: (config.intents as Discord.IntentsString[]),
			partials: (config.partials as Discord.PartialTypes[]),
		});
		this.token = token;
		this.start();
	}
  
	start() {
		if(!this.token){
			throw("Please include a token");
		}
		this.login(this.token);
		setupEvents(this);
	}
}

export {Client};