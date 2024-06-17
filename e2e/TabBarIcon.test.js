import { Screens } from '@routes/types';

describe('TabBarIcon Tests', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should render ListRunes TabBarIcon', async () => {
    await expect(
      element(by.id(`TAB-ICON-CONTAINER-${Screens.ListRunes}-BTN`)),
    ).toBeVisible();
  });

  it('should render OwnedRunes TabBarIcon', async () => {
    await expect(
      element(by.id(`TAB-ICON-CONTAINER-${Screens.OwnedRunes}-BTN`)),
    ).toBeVisible();
  });
});
