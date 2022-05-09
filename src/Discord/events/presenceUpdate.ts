/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {Presence} from "discord.js";
import config from "../../utils/settings";
export = {
	name: "presenceUpdate",
	async execute(PresenceOld:Presence,PresenceNew:Presence) {
		for(const activity of PresenceNew.activities){
			if(!PresenceNew.member) return;
			if(!config.warningFirst && config.BannedGame.includes(activity.name)){
				PresenceNew.member.ban({reason:`Playing ${activity.name}`});
			}
			if(config.warningFirst  && config.BannedGame.includes(activity.name)){
				PresenceNew.member.send(`You've been warned for playing ${activity.name}\nPlease quickly close it or get banned on ${PresenceNew.member.guild.name} in 1 minute`);
				setTimeout(()=>{
					PresenceNew.member?.guild.members.fetch(PresenceNew.userId).then((member)=>{
						for(const activity of member.presence!.activities){
							if(config.BannedGame.includes(activity.name)){
								member.presence!.member?.ban({reason:`Playing ${activity.name}`});
							}
						}
					});
				},1*1000*60);
			}
		}
	},
};
  