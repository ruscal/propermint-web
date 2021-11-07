const CHANNEL_SUB_DOMAIN_REGEX = /([a-zA-Z0-9 -_.]+).propermint.life/gi;

export function getCurrentChannel(hostname: string) {
    console.log({ hostname });
    const match = hostname.match(CHANNEL_SUB_DOMAIN_REGEX);
    return (match && match[1]) || 'test';
}
