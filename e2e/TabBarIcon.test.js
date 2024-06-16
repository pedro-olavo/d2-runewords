// e2e/tabBarIcon.spec.js

import { Screens } from '@routes/types';

describe('TabBarIcon Tests', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should render ListRunes TabBarIcon', async () => {
    // Wait for the ListRunes TabBarIcon to be visible
    await expect(
      element(by.id(`tab-bar-icon-container-${Screens.ListRunes}`)),
    ).toBeVisible();
  });

  it('should render OwnedRunes TabBarIcon', async () => {
    // Wait for the ListRunes TabBarIcon to be visible
    await expect(
      element(by.id(`tab-bar-icon-container-${Screens.OwnedRunes}`)),
    ).toBeVisible();
  });
});
