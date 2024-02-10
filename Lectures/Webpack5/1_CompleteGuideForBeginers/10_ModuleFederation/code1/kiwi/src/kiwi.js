import Heading from "./components/heading/heading.js";
import KiwiImage from "./components/kiwi-image/kiwi-image.js";

const heading = new Heading();
heading.render("kiwi");
const kiwiImage = new KiwiImage();
kiwiImage.render();

/**
 * First part is path by which webpack will resolve which module to load, this is key in ModuleFederationPlugin config
 * Second part is name given by parenbt application while exposing this module
 */
import("HelloWorldAp/HelloWorldButton").then((HelloWorldButtonModule) => {
  const HelloWorldButton = HelloWorldButtonModule.default;
  const helloWorldButton = new HelloWorldButton();
  helloWorldButton.render();
});
