/* jshint node: true */

module.exports = function (environment) {
    var ENV = {
        modulePrefix: 'generalapi',
        environment: environment,
        rootURL: '/',
        locationType: 'hash',
        EmberENV: {
            FEATURES: {
                // Here you can enable experimental features on an ember canary build
                // e.g. 'with-controller': true
            }
        },

        APP: {
            WebsiteName : 'phoenixmax.org',
            Currency : 'USD',

             EGEM: {
                     // API host and port
                    ApiUrl: '//egem.phoenixmax.org/',

                    // HTTP mining endpoint
                    HttpHost: 'http://egem.phoenixmax.org',
                    HttpPort: 8888,

                    // Stratum mining endpoint
                    StratumHost: 'egem.phoenixmax.org',
                    StratumPort: 8008,

                //    StratumHost1: 'egem.phoenixmax.org',
                //    StratumPort1: 40015,

                //    StratumHost2: 'ubiq-nh.daggerpool.com',
                //    StratumPort2: 40025,

                    // Fee and payout details
                    PoolFee: '0.5%',
                    PayoutThreshold: '0.5',
                    ShareDifficulty: '4G',

                    //Current and Localization
                    Currency: 'USD',
                    CoinName: 'EtherGem',
                    CoinShortName: 'EGEM',
                    PaymentText: 'every 3 hours',
                    SupportMail: 'support@phoenixmax.org',
                  //  SupportHelpdesk: 'http://helpdesk.daggerpool.com',
                    WebsiteName: 'egem.phoenixmax.org',

                    //Coin Bases Settings
                 //   ChainAddress : 'https://ubiqscan.io/en/address/',
                  //  TransactionAddress : 'https://ubiqscan.io/en/tx/',
                 //   UncleAddress : 'https://ubiqscan.io/en/uncle/',
                 //   BlockAddress : 'https://ubiqscan.io/en/block/',

                    //Twitter Parameter
                 //   TwitterURL: 'https://twitter.com/',
                  //  TwitterHash: 'daggerpool_com',


                    // For network hashrate (change for your favourite fork)
                    BlockTime: 14.4
             },
          
        DBIX: {
            // API host and port
            ApiUrl: '//dbix.phoenixmax.org/',

            // HTTP mining endpoint
            HttpHost: 'http://dbix.phoenixmax.org',
            HttpPort: 8888,

            // Stratum mining endpoint
            StratumHost: 'dbix.phoenixmax.org',
            StratumPort: 8008,

          //  StratumHost1: 'dbix-uk01.daggerpool.com',
          //  StratumPort1: 40017,

          //  NicehashHost: 'dbix-us01.daggerpool.com',
         //   NicehashPost: 40027,

            // Fee and payout details
            PoolFee: '1.0%',
            PayoutThreshold: '0.5',
            ShareDifficulty: '4000000000',

            //Current and Localization
            Currency: 'USD',
            CoinName: 'Dubai Coin',
            CoinShortName: 'DBIX',
            PaymentText: 'every 3 hours',
            SupportMail: 'support@phoenixmax.org',
           // SupportHelpdesk: 'http://helpdesk.daggerpool.com',
            WebsiteName: 'dbix.phoenixmax.org',

            //Coin Bases Settings
            ChainAddress : 'http://dbixscan.io/addr/',
	    TransactionAddress : 'http://dbixscan.io/tx/',
            UncleAddress : 'http://dbixscan.io/uncle/',
            BlockAddress : 'http://dbixscan.io/block/',

            //Twitter Parameter
           // TwitterURL: 'https://twitter.com/',
           // TwitterHash: 'daggerpool_com',


            // For network hashrate (change for your favourite fork)
            BlockTime: 90


        },
     
        ETC: {
            // API host and port
            ApiUrl: '//etcpool.phoenixmax.org/',

            // HTTP mining endpoint
            HttpHost: 'http://etcpool.phoenixmax.org/',
            HttpPort: 8888,

            // Stratum mining endpoint
            StratumHost: 'etcpool.phoenixmax.org/',
            StratumPort: 8008,

            StratumHost1: 'etcpool.phoenixmax.org/',
            StratumPort1: 11010,

            NicehashHost: 'etcpool.phoenixmax.org/',
            NicehashPost: 11016,

            // Fee and payout details
            PoolFee: '1.0%',
            PayoutThreshold: '0.5',
            ShareDifficulty: '4000000000',

            //Current and Localization
            Currency: 'USD',
            CoinName: 'Ethereum Classic',
            CoinShortName: 'ETC',
            PaymentText: 'every 3 hours',
            SupportMail: 'support@phoenixmax.org',
          //  SupportHelpdesk: 'http://helpdesk.daggerpool.com',
          //  WebsiteName: 'etc.daggerpool.com',

            //Coin Bases Settings
            ChainAddress : 'https://blockscout.com/etc/mainnet/address/',
	    TransactionAddress : 'https://blockscout.com/etc/mainnet/txs/',
            UncleAddress : 'https://blockscout.com/etc/mainnet/uncles/',
            BlockAddress : 'https://blockscout.com/etc/mainnet/blocks/',

            //Twitter Parameter
         //   TwitterURL: 'https://twitter.com/',
         //   TwitterHash: 'daggerpool_com',


            // For network hashrate (change for your favourite fork)
            BlockTime: 15

        }
    };

    if (environment === 'development') {
        /* Override ApiUrl just for development, while you are customizing
         frontend markup and css theme on your workstation.
         */
        ENV.APP.EXP.ApiUrl = 'https://exp.daggerpool.com/'
        ENV.APP.UBIQ.ApiUrl = 'https://ubiq.daggerpool.com/'
        ENV.APP.DBIX.ApiUrl = 'https://dbix.daggerpool.com/'
        ENV.APP.MUSIC.ApiUrl = 'https://music.daggerpool.com/'
        ENV.APP.ETH.ApiUrl = 'https://eth.daggerpool.com/'
        ENV.APP.ETC.ApiUrl = 'https://etc.daggerpool.com/'
        ENV.APP.SOIL.ApiUrl = 'https://soil.daggerpool.com/'
        ENV.APP.ELE.ApiUrl = 'https://ele.daggerpool.com/'
        ENV.APP.PIRL.ApiUrl = 'https://pirl.daggerpool.com/'
        // ENV.APP.LOG_RESOLVER = true;
        // ENV.APP.LOG_ACTIVE_GENERATION = true;
        // ENV.APP.LOG_TRANSITIONS = true;
        // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
        // ENV.APP.LOG_VIEW_LOOKUPS = true;
    }

    if (environment === 'test') {
        // Testem prefers this...
        ENV.locationType = 'none';

        // keep test console output quieter
        ENV.APP.LOG_ACTIVE_GENERATION = false;
        ENV.APP.LOG_VIEW_LOOKUPS = false;

        ENV.APP.rootElement = '#ember-testing';
    }

    if (environment === 'production') {
        ENV.baseURL = '/ember-cli-twitter-feed/';
    }

    ENV.contentSecurityPolicy = {
        'script-src': [
            "'self'",
            'https://syndication.twitter.com',
			            'https://cdn.syndication.twimg.com',
            "'sha256-XnNQECY9o-nIv2Qgcd1A39YarwxTm10rhdzegH_JBxY='"],
        'style-src': [
            "'self'",
            'http://platform.twitter.com',
            "'sha256-zCvYlDs6LsUp0EqrJFjIGUiM_AG2fGlkNrzJ2YiBTG0='"],
        'img-src': [
            "'self'",
            'data:',
            'https://pbs.twimg.com',
            'https://syndication.twitter.com',
            'http://platform.twitter.com']
    };
    return ENV;
};
