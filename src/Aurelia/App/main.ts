import authConfig from './authConfig';

export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .plugin('aurelia-dialog', (settings) => {
                settings.lock = true;
        })
        .plugin('aurelia-validatejs');

    //Uncomment the line below to enable animation.
    aurelia.use.plugin('aurelia-animator-css');

    aurelia.use.plugin('aurelia-api', config => {
        config.registerEndpoint('connect', 'connect', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
    });

    aurelia.use.plugin('aurelia-authentication', baseConfig => {
        baseConfig.configure(authConfig);
    })

    aurelia.start().then(() => aurelia.setRoot());
}