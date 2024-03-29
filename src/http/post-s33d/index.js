const data = require('@begin/data');

// learn more about HTTP functions here: https://arc.codes/primitives/http
exports.handler = async function http(req) {
    if (req.queryStringParameters.auth !== process.env.API_AUTH) throw new Error('Incorrect auth');

    // seed db with subscriptions
    const subscriptions = [
        // disabled after this matched dozens of episodes of the 1957 series
        // {
        //     filter: '^Perry.Mason.+1080p',
        //     key: 'Perry.Mason',
        //     latestSeason: 1,
        //     latestEpisode: 8,
        // },
        {
            filter: '^Its.Always.Sunny.in.Philadelphia.+1080p',
            key: 'Its.Always.Sunny.in.Philadelphia',
            latestSeason: 15,
            latestEpisode: 8,
        },
        {
            filter: '^(Genndy.Tartakovskys.)?Primal.S[0-9]{2}.+1080p',
            key: 'Genndy.Tartakovskys.Primal',
            latestSeason: 2,
            latestEpisode: 10,
        },
        {
            filter: '^Rick.+Morty.+1080p',
            key: 'Rick.Morty',
            latestSeason: 6,
            latestEpisode: 6,
        },
        {
            filter: '^Snowpiercer.+1080p',
            key: 'Snowpiercer',
            latestSeason: 3,
            latestEpisode: 10,
        },
        {
            filter: '^Archer.2009.+1080p',
            key: 'Archer',
            latestSeason: 13,
            latestEpisode: 8,
        },
        {
            filter: '^How.To.with.John.Wilson.+1080p',
            key: 'How.To.with.John.Wilson',
            latestSeason: 2,
            latestEpisode: 6,
        },
        {
            filter: 'Attack.on.Titan.+1080p.+DameDesuYo',
            key: 'Attack on Titan',
            feed: 'AB', // only use on "AB" feed
            latestSeason: 0,
            latestEpisode: 87,
        },
        {
            filter: '^Search.Party.+1080p',
            key: 'Search Party',
            latestSeason: 5,
            latestEpisode: 10,
        },
        {
            filter: '^This.Time.With.Alan.Partridge.+1080p',
            key: 'This Time With Alan Partridge',
            latestSeason: 2,
            latestEpisode: 6,
        },
        {
            filter: '^Barry.S..E.+1080p',
            key: 'Barry',
            latestSeason: 3,
            latestEpisode: 8,
        },
        {
            filter: '^Spy.+Family.+1080p',
            key: 'Spy Family',
            feed: 'AB', // only use on "AB" feed
            latestSeason: 0,
            latestEpisode: 15,
        },
        {
            filter: '^The.Rehearsal.+1080p',
            key: 'The Rehearsal',
            latestSeason: 1,
            latestEpisode: 6,
        },
        {
            filter: '^House.of.the.Dragon.+1080p',
            key: 'HotD',
            latestSeason: 1,
            latestEpisode: 8,
        },
    ];

    await data.set(subscriptions.map((e) => ({
        table: 'subscriptions',
        ...e,
    })));

    return {
        statusCode: 200,
        headers: {
            'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
            'content-type': 'text/plain; charset=utf8',
        },
        body: `db seeded! ${(new Date()).toString()}`,
    };
};
