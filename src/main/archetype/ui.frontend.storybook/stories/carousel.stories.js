import { withXD } from 'storybook-addon-xd-designs'
import { StyleSystem } from 'storybook-aem-style-system';
import { aemMetadata } from '@storybook/aem';

export default {
  title: 'Carousel',
  decorators: [
    withXD,
    aemMetadata({
      decorationTag: {
        cssClasses: ['carousel', StyleSystem]
      }
    })
  ],
  parameters: {
    aemStyleSystem: {
      policy: 'storybook-assets/policies/carousel.json'
    }
  }
};
const ImageSlidesTemplatePath = 'storybook-assets/components/carousel/image-slides.html';
export const ImageSlides = () => {
  return {
    template: async () => {
        let response = await fetch(ImageSlidesTemplatePath);
        return response.text();
    }
  }
}

ImageSlides.story = {
  parameters: {
    design: {
      artboardUrl: 'https://xd.adobe.com/view/a23a5b3e-a93d-4063-5532-cd55043e0488-d40b/screen/10bcabef-3186-433b-b5fb-ed8a56aacd0d/Button-Default',
    }
  }
};

const TeaserSlidesTemplatePath = 'storybook-assets/components/carousel/teaser-slides.html';
export const TeaserSlides = () => {
  return {
    template: async () => {
        let response = await fetch(TeaserSlidesTemplatePath);
        return response.text();
    }
  }
}

TeaserSlides.story = {
  parameters: {
    design: {
      artboardUrl: 'https://xd.adobe.com/view/a23a5b3e-a93d-4063-5532-cd55043e0488-d40b/screen/10bcabef-3186-433b-b5fb-ed8a56aacd0d/Button-Default',
    }
  }
};

