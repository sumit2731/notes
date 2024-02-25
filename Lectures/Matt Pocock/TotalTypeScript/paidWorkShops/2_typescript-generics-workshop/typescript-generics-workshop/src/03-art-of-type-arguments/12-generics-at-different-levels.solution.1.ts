import { expect, it, describe } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

/**
 * we can see that the thing that's being captured in the generic slot is the entire object that's being passed in
 * Then we index into this type to get type of parameter for override and return of override.
 * 
 * This is a little bit messy, actually. It's got quite a lot of code. We're representing the generic on quite a high
 * level, so quite a lot is being captured inside this argument here(TConfig)
 */
export const getHomePageFeatureFlags = <
  TConfig extends {
    rawConfig: {
      featureFlags: {
        homePage: any;
      };
    };
  }
>(
  config: TConfig,
  override: (
    flags: TConfig["rawConfig"]["featureFlags"]["homePage"]
  ) => TConfig["rawConfig"]["featureFlags"]["homePage"]
) => {
  return override(config.rawConfig.featureFlags.homePage);
};
/**
 * Alternative of above - We can define Second generic argument based on first one
 */
export const getHomePageFeatureFlags2 = <
  TConfig extends {
    rawConfig: {
      featureFlags: {
        homePage: any;
      };
    };
  },
  THomePageFlags = TConfig["rawConfig"]["featureFlags"]["homePage"]
>(
  config: TConfig,
  override: (
    flags: THomePageFlags
  ) => THomePageFlags
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
