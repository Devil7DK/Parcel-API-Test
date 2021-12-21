import Parcel from "@parcel/core";

const bundler = new Parcel({
  defaultConfig: "@parcel/config-default",
  targets: ["app"],
});

bundler.run().then(console.log).catch(console.error);
