import {Client as DiscordClient} from "./Discord/Client";
import "dotenv/config";

new DiscordClient((process.env.Token as string));
