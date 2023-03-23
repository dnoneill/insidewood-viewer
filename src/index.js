import Mirador from 'mirador';
import { miradorImageToolsPlugin } from 'mirador-image-tools';
import miradorDownloadPlugin from 'mirador-dl-plugin';
import miradorSharePlugin from 'mirador-share-plugin';

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const manifesturl = urlParams.get('manifestUrl')
console.log(manifesturl)
const config = {
  id: 'demo',
  "window": {"sideBarOpenByDefault": true,
      "defaultSideBarPanel": 'info',
  },
  windows: [{
    imageToolsOpen: true,
    manifestId: manifesturl,
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
        /(.*)/,
        `${window.location.href}`,
      ],
      syncIframeDimensions: {
        height: { param: 'maxheight' },
      },
    },
    shareLink: {
      enabled: true,
      manifestIdReplacePattern: [
        /(.*)/,
        `${window.location.href}`,
      ],
    },
  },
};

Mirador.viewer(config, [
  ...miradorDownloadPlugin,...miradorSharePlugin,...miradorImageToolsPlugin,
]);
