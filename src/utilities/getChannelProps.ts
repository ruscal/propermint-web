import { NextPageContext } from "next";
import { getCurrentChannel } from "./getCurrentChannel";

export function getChannelProps(context: NextPageContext) {
    return {
        channelId: getCurrentChannel(context.req.headers.host)
    }
}