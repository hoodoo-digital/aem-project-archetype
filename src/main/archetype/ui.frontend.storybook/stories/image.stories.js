import { withXD } from 'storybook-addon-xd-designs'
import { StyleSystem } from 'storybook-aem-style-system';
import { aemMetadata } from '@storybook/aem';

export default {
  title: 'Image',
  decorators: [
    withXD,
    aemMetadata({
      decorationTag: {
        cssClasses: ['image', StyleSystem]
      }
    })
  ],
  parameters: {
    aemStyleSystem: {
      policy: 'storybook-assets/policies/image.json'
    }
  }
};
const ImageWithCaptionTemplatePath = 'storybook-assets/components/image/image-with-caption.html';
export const ImageWithCaption = () => {
  return {
    template: async () => {
        let response = await fetch(ImageWithCaptionTemplatePath);
        return response.text();
    }
  }
}

ImageWithCaption.story = {
  parameters: {
    design: {
      artboardUrl: 'https://xd.adobe.com/view/a23a5b3e-a93d-4063-5532-cd55043e0488-d40b/screen/10bcabef-3186-433b-b5fb-ed8a56aacd0d/Button-Default',
    }
  }
};

const ImageWithLinkTemplatePath = 'storybook-assets/components/image/image-with-link.html';
export const ImageWithLink = () => {
  return {
    template: async () => {
        let response = await fetch(ImageWithLinkTemplatePath);
        return response.text();
    }
  }
}

ImageWithLink.story = {
  parameters: {
    design: {
      artboardUrl: 'https://xd.adobe.com/view/a23a5b3e-a93d-4063-5532-cd55043e0488-d40b/screen/10bcabef-3186-433b-b5fb-ed8a56aacd0d/Button-Default',
    }
  }
};

const ImageTemplatePath = 'storybook-assets/components/image/image.html';
export const Image = () => {
  return {
    template: async () => {
        let response = await fetch(ImageTemplatePath);
        return response.text();
    }
  }
}

Image.story = {
  parameters: {
    design: {
      artboardUrl: 'https://xd.adobe.com/view/a23a5b3e-a93d-4063-5532-cd55043e0488-d40b/screen/10bcabef-3186-433b-b5fb-ed8a56aacd0d/Button-Default',
    }
  }
};

