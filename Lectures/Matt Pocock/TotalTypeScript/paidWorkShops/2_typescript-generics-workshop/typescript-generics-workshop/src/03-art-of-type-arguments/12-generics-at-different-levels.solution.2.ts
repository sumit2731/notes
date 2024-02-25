import { describe, expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

/**
 * HomePageFlags is exactly the thing that we want to capture here because 
 *  it's the argument inside the override function.
 * 
 * we do the drilling in argument of function itself(config)
 * 
 * Earlier we represented the entire thing at the top level and then drilled down
 *  twice to get the actual config, what we do is we represent it at the low level 
 *  in the generic slot and then just do the drilling inside this argument here.
 * 
 * When we call function, then it only access HomePageFlags i.e nested type of config.
 * that means very less gets captured in generics.so this little bit more readable when you hover
 * function call.
 * 
 * This in general is quite a nice rule of thumb for when you're working with generics, is you should
 * always try to make this generic type argument represent a low-level thing.
 * 
 * If you have an option between choosing a high-level representation representing the whole thing, 
 * lots of stuff you maybe don't need, then in general it's best to drill down and find exactly what 
 * you want the type argument to represent. In previous example we did lot of drilling.
 * 
 * @MyNotes - Here actual parameter passed to function has many more properties. we declared properties that we need.
 * actual values assigned can have more values but should have less values in any case
 */
export const getHomePageFeatureFlags = <HomePageFlags>(
  config: {
    rawConfig: {
      featureFlags: {
        homePage: HomePageFlags;
      };
    };
  },
  override: (flags: HomePageFlags) => HomePageFlags
) => {
  return override(config.rawConfig.featureFlags.homePage);
};

describe("getHomePageFeatureFlags", () => {
  const EXAMPLE_CONFIG = {
    apiEndpoint: "https://api.example.com",
    apiVersion: "v1",
    apiKey: "1234567890",
    rawConfig: {
      featureFlags: {
        homePage: {
          showBanner: true,
          showLogOut: false,
        },
        loginPage: {
          showCaptcha: true,
          showConfirmPassword: false,
        },
      },
    },
  };
  it("Should return the homePage flag object", () => {
    const flags = getHomePageFeatureFlags(
      EXAMPLE_CONFIG,
      (defaultFlags) => defaultFlags
    );

    expect(flags).toEqual({
      showBanner: true,
      showLogOut: false,
    });

    type tests = [
      Expect<Equal<typeof flags, { showBanner: boolean; showLogOut: boolean }>>
    ];
  });

  it("Should allow you to modify the result", () => {
    const flags = getHomePageFeatureFlags(EXAMPLE_CONFIG, (defaultFlags) => ({
      ...defaultFlags,
      showBanner: false,
    }));

    expect(flags).toEqual({
      showBanner: false,
      showLogOut: false,
    });

    type tests = [
      Expect<Equal<typeof flags, { showBanner: boolean; showLogOut: boolean }>>
    ];
  });
});
