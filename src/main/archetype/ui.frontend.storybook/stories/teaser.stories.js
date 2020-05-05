import { withXD } from 'storybook-addon-xd-designs'
import { StyleSystem } from 'storybook-aem-style-system';
import { aemMetadata } from '@storybook/aem';

export default {
  title: 'Teaser',
  decorators: [
    withXD,
    aemMetadata({
      decorationTag: {
        cssClasses: ['teaser', StyleSystem]
      }
    })
  ],
  parameters: {
    aemStyleSystem: {
      policy: 'storybook-assets/policies/teaser.json'
    }
  }
};
const TeaserWithCallToActionImageTitleDescriptionTemplatePath = 'storybook-assets/components/teaser/teaser-with-call-to-action-image-title-description.html';
export const TeaserWithCallToActionImageTitleDescription = () => {
  return {
    template: async () => {
        let response = await fetch(TeaserWithCallToActionImageTitleDescriptionTemplatePath);
        return response.text();
    }
  }
}

TeaserWithCallToActionImageTitleDescription.story = {
  parameters: {
    design: {
      artboardUrl: 'https://xd.adobe.com/view/a23a5b3e-a93d-4063-5532-cd55043e0488-d40b/screen/10bcabef-3186-433b-b5fb-ed8a56aacd0d/Button-Default',
    }
  }
};

const TeaserWithImageTitleDescriptionTemplatePath = 'storybook-assets/components/teaser/teaser-with-image-title-description.html';
export const TeaserWithImageTitleDescription = () => {
  return {
    template: async () => {
        let response = await fetch(TeaserWithImageTitleDescriptionTemplatePath);
        return response.text();
    }
  }
}

TeaserWithImageTitleDescription.story = {
  parameters: {
    design: {
      artboardUrl: 'https://xd.adobe.com/view/a23a5b3e-a93d-4063-5532-cd55043e0488-d40b/screen/10bcabef-3186-433b-b5fb-ed8a56aacd0d/Button-Default',
    }
  }
};

const TeaserWithTitleDescriptionTemplatePath = 'storybook-assets/components/teaser/teaser-with-title-description.html';
export const TeaserWithTitleDescription = () => {
  return {
    template: async () => {
        let response = await fetch(TeaserWithTitleDescriptionTemplatePath);
        return response.text();
    }
  }
}

TeaserWithTitleDescription.story = {
  parameters: {
    design: {
      artboardUrl: 'https://xd.adobe.com/view/a23a5b3e-a93d-4063-5532-cd55043e0488-d40b/screen/10bcabef-3186-433b-b5fb-ed8a56aacd0d/Button-Default',
    }
  }
};

