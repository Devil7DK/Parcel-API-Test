import Parcel from '@parcel/core'
import { join } from 'path';

const bundler = new Parcel({
    defaultConfig: "@parcel/config-default",
    entries: [join(process.cwd(), 'src', 'index.html')]
});

bundler.run().then(console.log).catch(console.error);
