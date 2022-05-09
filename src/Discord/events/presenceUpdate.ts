import {Presence} from "discord.js";
import config from "../../utils/settings";
export = {
	name: "presenceUpdate",
	async execute(PresenceOld:Presence,PresenceNew:Presence) {
		for(const activity of PresenceNew.activities){
			if(config.BannedGame.includes(activity.name)){
				PresenceNew.member?.ban({reason:`Playing ${activity.name}`});
			}
		}
	},
};
  