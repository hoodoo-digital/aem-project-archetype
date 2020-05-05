import { withXD } from 'storybook-addon-xd-designs'
import { StyleSystem } from 'storybook-aem-style-system';
import { aemMetadata } from '@storybook/aem';

export default {
  title: 'Embed',
  decorators: [
    withXD,
    aemMetadata({
      decorationTag: {
        cssClasses: ['embed', StyleSystem]
      }
    })
  ],
  parameters: {
    aemStyleSystem: {
      policy: 'storybook-assets/policies/embed.json'
    }
  }
};
const HtmlTemplatePath = 'storybook-assets/components/embed/html.html';
export const Html = () => {
  return {
    template: async () => {
        let response = await fetch(HtmlTemplatePath);
        return response.text();
    }
  }
}

Html.story = {
  parameters: {
    design: {
      artboardUrl: 'https://xd.adobe.com/view/a23a5b3e-a93d-4063-5532-cd55043e0488-d40b/screen/10bcabef-3186-433b-b5fb-ed8a56aacd0d/Button-Default',
    }
  }
};

const UrlTemplatePath = 'storybook-assets/components/embed/url.html';
export const Url = () => {
  return {
    template: async () => {
        let response = await fetch(UrlTemplatePath);
        return response.text();
    }
  }
}

Url.story = {
  parameters: {
    design: {
      artboardUrl: 'https://xd.adobe.com/view/a23a5b3e-a93d-4063-5532-cd55043e0488-d40b/screen/10bcabef-3186-433b-b5fb-ed8a56aacd0d/Button-Default',
    }
  }
};

