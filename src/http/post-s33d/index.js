const data = require('@begin/data');

// learn more about HTTP functions here: https://arc.codes/primitives/http
exports.handler = async function http() {
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
            filter: '^Better.Call.Saul.+1080p',
            key: 'Better.Call.Saul',
            latestSeason: 5,
            latestEpisode: 10,
        },
        {
            filter: '^Its.Always.Sunny.in.Philadelphia.+1080p',
            key: 'Its.Always.Sunny.in.Philadelphia',
            latestSeason: 14,
            latestEpisode: 10,
        },
        {
            filter: '^(Genndy.Tartakovskys.)?Primal.S[0-9]{2}.+1080p',
            key: 'Genndy.Tartakovskys.Primal',
            latestSeason: 1,
            latestEpisode: 10,
        },
        {
            filter: '^Rick.+Morty.+1080p',
            key: 'Rick.Morty',
            latestSeason: 5,
            latestEpisode: 10,
        },
        {
            filter: '^Snowpiercer.+1080p',
            key: 'Snowpiercer',
            latestSeason: 2,
            latestEpisode: 10,
        },
        {
            filter: '^Archer.2009.+1080p',
            key: 'Archer',
            latestSeason: 12,
            latestEpisode: 8,
        },
        {
            filter: '^Dream.Corp.LLC.+1080p',
            key: 'DreamCorp',
            latestSeason: 3,
            latestEpisode: 8,
        },
        {
            filter: '^How.To.with.John.Wilson.+1080p',
            key: 'How.To.with.John.Wilson',
            latestSeason: 1,
            latestEpisode: 6,
        },
        {
            filter: 'Attack.on.Titan.+1080p.+DameDesuYo',
            key: 'Attack on Titan',
            feed: 'AB', // only use on "AB" feed
            latestSeason: 0,
            latestEpisode: 75,
        },
        {
            filter: '^Search.Party.+1080p',
            key: 'Search Party',
            latestSeason: 4,
            latestEpisode: 10,
        },
        {
            filter: '^Painting.with.John.+1080p',
            key: 'Painting with John',
            latestSeason: 1,
            latestEpisode: 6,
        },
        {
            filter: '^Birdgirl.+1080p',
            key: 'Birdgirl',
            latestSeason: 1,
            latestEpisode: 6,
        },
        {
            filter: 'Super.Cub.+1080p',
            key: 'Super Cub',
            feed: 'AB', // only use on "AB" feed
            latestSeason: 0,
            latestEpisode: 12,
        },
        {
            filter: 'Godzilla.Singular.Point.+1080p',
            key: 'Godzilla Singular Point',
            feed: 'AB', // only use on "AB" feed
            latestSeason: 0,
            latestEpisode: 13,
        },
        {
            filter: '^Made.for.Love.+1080p',
            key: 'Made.for.Love',
            latestSeason: 1,
            latestEpisode: 8,
        },
        {
            filter: '^This.Time.With.Alan.Partridge.+1080p',
            key: 'This Time With Alan Partridge',
            latestSeason: 2,
            latestEpisode: 6,
        },
        {
            filter: '^Tuca.+Bertie.+1080p',
            key: 'Tuca & Bertie',
            latestSeason: 2,
            latestEpisode: 10,
        },
        {
            filter: '^Kevin.Can.Fuck.Himself.+1080p',
            key: 'Kevin.Can.Fuck.Himself',
            latestSeason: 1,
            latestEpisode: 8,
        },
        {
            filter: '^PEN15.+1080p',
            key: 'PEN15',
            latestSeason: 2,
            latestEpisode: 7,
        },
        {
            filter: '^Joe.Pera.Talks.With.You.+1080p',
            key: 'Joe Pera Talks With You',
            latestSeason: 3,
            latestEpisode: 2,
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
