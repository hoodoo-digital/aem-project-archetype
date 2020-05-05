import { withXD } from 'storybook-addon-xd-designs'
import { StyleSystem } from 'storybook-aem-style-system';
import { aemMetadata } from '@storybook/aem';

export default {
  title: 'Text',
  decorators: [
    withXD,
    aemMetadata({
      decorationTag: {
        cssClasses: ['text', StyleSystem]
      }
    })
  ],
  parameters: {
    aemStyleSystem: {
      policy: 'storybook-assets/policies/text.json'
    }
  }
};
const RichTextTemplatePath = 'storybook-assets/components/text/rich-text.html';
export const RichText = () => {
  return {
    template: async () => {
        let response = await fetch(RichTextTemplatePath);
        return response.text();
    }
  }
}

RichText.story = {
  parameters: {
    design: {
      artboardUrl: 'https://xd.adobe.com/view/a23a5b3e-a93d-4063-5532-cd55043e0488-d40b/screen/10bcabef-3186-433b-b5fb-ed8a56aacd0d/Button-Default',
    }
  }
};

