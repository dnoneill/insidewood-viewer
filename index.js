import Mirador from 'mirador/dist/es/src/index';
import { miradorImageToolsPlugin } from 'mirador-image-tools';
import { miradorDownloadPlugin } from 'mirador-dl-plugin';
import { miradorSharePlugin } from 'mirador-share-plugin';

const config = {
  id: 'demo',
  windows: [{
    imageToolsEnabled: true,
    imageToolsOpen: true,
    manifestId: 'https://digital.library.villanova.edu/Item/vudl:24299/Manifest',
  }],
  miradorDownloadPlugin: {
    restrictDownloadOnSizeDefinition: false
  },
  theme: {
    palette: {
      primary: {
        main: '#1967d2',
      },
    },
  },
  miradorSharePlugin: {
    dragAndDropInfoLink: 'https://iiif.io',
    embedOption: {
      enabled: true,
      embedUrlReplacePattern: [
        /.*\.edu\/(\w+)\/iiif\/manifest/,
        'https://embed.stanford.edu/iframe?url=https://purl.stanford.edu/$1',
      ],
      syncIframeDimensions: {
        height: { param: 'maxheight' },
      },
    },
    shareLink: {
      enabled: true,
      manifestIdReplacePattern: [
        /\/iiif\/manifest/,
        '',
      ],
    },
  },
};

Mirador.viewer(config, [
  ...miradorImageToolsPlugin,miradorDownloadPlugin,miradorSharePlugin,
]);
