const { default: Parcel } = require('@parcel/core');
const { join } = require('path');

const bundler = new Parcel({
    defaultConfig: "@parcel/config-default",
    entries: [join(process.cwd(), 'index.html')]
});

bundler.run().then(console.log).catch(console.error);
