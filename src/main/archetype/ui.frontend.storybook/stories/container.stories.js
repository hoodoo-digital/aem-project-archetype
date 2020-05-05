import { withXD } from 'storybook-addon-xd-designs'
import { StyleSystem } from 'storybook-aem-style-system';
import { aemMetadata } from '@storybook/aem';

export default {
  title: 'Container',
  decorators: [
    withXD,
    aemMetadata({
      decorationTag: {
        cssClasses: ['container', StyleSystem]
      }
    })
  ],
  parameters: {
    aemStyleSystem: {
      policy: 'storybook-assets/policies/container.json'
    }
  }
};
const ContainerTemplatePath = 'storybook-assets/components/container/container.html';
export const Container = () => {
  return {
    template: async () => {
        let response = await fetch(ContainerTemplatePath);
        return response.text();
    }
  }
}

Container.story = {
  parameters: {
    design: {
      artboardUrl: 'https://xd.adobe.com/view/a23a5b3e-a93d-4063-5532-cd55043e0488-d40b/screen/10bcabef-3186-433b-b5fb-ed8a56aacd0d/Button-Default',
    }
  }
};

