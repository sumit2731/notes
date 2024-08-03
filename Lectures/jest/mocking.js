/* 
1)mock some parts of module while using existing implementation of others

*/

jest.mock(
  "./scriptless-mobile-sub-view/device/store/scriptless-mobile-device-selectors",
  () => ({
    ...(jest.requireActual <
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      typeof import(
        "./scriptless-mobile-sub-view/device/store/scriptless-mobile-device-selectors"
      ) >
      "./scriptless-mobile-sub-view/device/store/scriptless-mobile-device-selectors"),
    selectActiveAutomationDevice: jest.fn().mockReturnValue(device),
    selectActiveDeviceId: jest.fn().mockReturnValue(device.properties.deviceId),
  })
);
