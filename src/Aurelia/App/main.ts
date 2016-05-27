export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .plugin('aurelia-dialog', (settings) => {
                settings.lock = true;
        })
        .plugin('aurelia-validatejs');

    aurelia.start().then(() => aurelia.setRoot());
}