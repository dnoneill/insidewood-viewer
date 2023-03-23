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
  ...miradorDownloadPlugin,...miradorSharePlugin,...miradorImageToolsPlugin,
]);
