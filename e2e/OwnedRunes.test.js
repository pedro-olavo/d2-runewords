import { device, expect, element, by } from 'detox';
import { Screens } from '@routes/types';

describe('OwnedRunes Screen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should render FlatList and check if every rune rendered correctly', async () => {
    await element(by.id(`TAB-ICON-CONTAINER-${Screens.OwnedRunes}-BTN`)).tap();
    await expect(element(by.id('RUNES-FLATLIST'))).toBeVisible();

    const runeButtonIds = [
      'EL-RUNE-BTN',
      'ELD-RUNE-BTN',
      'TIR-RUNE-BTN',
      'NEF-RUNE-BTN',
      'ETH-RUNE-BTN',
      'ITH-RUNE-BTN',
      'TAL-RUNE-BTN',
      'RAL-RUNE-BTN',
      'ORT-RUNE-BTN',
      'THUL-RUNE-BTN',
      'AMN-RUNE-BTN',
      'SOL-RUNE-BTN',
      'SHAEL-RUNE-BTN',
      'DOL-RUNE-BTN',
      'HEL-RUNE-BTN',
      'IO-RUNE-BTN',
      'LUM-RUNE-BTN',
      'KO-RUNE-BTN',
      'FAL-RUNE-BTN',
      'LEM-RUNE-BTN',
      'PUL-RUNE-BTN',
      'UM-RUNE-BTN',
      'MAL-RUNE-BTN',
      'IST-RUNE-BTN',
      'GUL-RUNE-BTN',
      'VEX-RUNE-BTN',
      'OHM-RUNE-BTN',
      'LO-RUNE-BTN',
      'SUR-RUNE-BTN',
      'BER-RUNE-BTN',
      'JAH-RUNE-BTN',
      'CHAM-RUNE-BTN',
      'ZOD-RUNE-BTN',
    ];

    for (const runeId of runeButtonIds) {
      const runeBtn = element(by.id(runeId));
      await waitFor(runeBtn)
        .toBeVisible()
        .whileElement(by.id('RUNES-FLATLIST'))
        .scroll(50, 'down');
      await expect(runeBtn).toBeVisible();
    }
  });
});
