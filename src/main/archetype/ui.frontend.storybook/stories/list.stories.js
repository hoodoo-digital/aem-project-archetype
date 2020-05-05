import { withXD } from 'storybook-addon-xd-designs'
import { StyleSystem } from 'storybook-aem-style-system';
import { aemMetadata } from '@storybook/aem';

export default {
  title: 'List',
  decorators: [
    withXD,
    aemMetadata({
      decorationTag: {
        cssClasses: ['list', StyleSystem]
      }
    })
  ],
  parameters: {
    aemStyleSystem: {
      policy: 'storybook-assets/policies/list.json'
    }
  }
};
const ListWithLinkDescriptionDateTemplatePath = 'storybook-assets/components/list/list-with-link-description-date.html';
export const ListWithLinkDescriptionDate = () => {
  return {
    template: async () => {
        let response = await fetch(ListWithLinkDescriptionDateTemplatePath);
        return response.text();
    }
  }
}

ListWithLinkDescriptionDate.story = {
  parameters: {
    design: {
      artboardUrl: 'https://xd.adobe.com/view/a23a5b3e-a93d-4063-5532-cd55043e0488-d40b/screen/10bcabef-3186-433b-b5fb-ed8a56aacd0d/Button-Default',
    }
  }
};

const ListTemplatePath = 'storybook-assets/components/list/list.html';
export const List = () => {
  return {
    template: async () => {
        let response = await fetch(ListTemplatePath);
        return response.text();
    }
  }
}

List.story = {
  parameters: {
    design: {
      artboardUrl: 'https://xd.adobe.com/view/a23a5b3e-a93d-4063-5532-cd55043e0488-d40b/screen/10bcabef-3186-433b-b5fb-ed8a56aacd0d/Button-Default',
    }
  }
};

