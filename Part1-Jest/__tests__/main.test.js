const formatVolumeIconPath = require('../assets/scripts/main');

describe('volume icon', () => {
    test('level 3', () => {
        expect(formatVolumeIconPath(100)).toMatch('./assets/media/icons/volume-level-3.svg');
    });
  
    test('level 2', () => {
        expect(formatVolumeIconPath(50)).toMatch('./assets/media/icons/volume-level-2.svg');
    });

    test('level 1', () => {
        expect(formatVolumeIconPath(25)).toMatch('./assets/media/icons/volume-level-1.svg');
    });

    test('level 0', () => {
        expect(formatVolumeIconPath(0)).toMatch('./assets/media/icons/volume-level-0.svg');
    });
});