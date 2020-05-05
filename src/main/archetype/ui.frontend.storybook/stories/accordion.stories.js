import { withXD } from 'storybook-addon-xd-designs'
import { StyleSystem } from 'storybook-aem-style-system';
import { aemMetadata } from '@storybook/aem';

export default {
  title: 'Accordion',
  decorators: [
    withXD,
    aemMetadata({
      decorationTag: {
        cssClasses: ['accordion', StyleSystem]
      }
    })
  ],
  parameters: {
    aemStyleSystem: {
      policy: 'storybook-assets/policies/accordion.json'
    }
  }
};
const AccordionSingleItemExpansionTemplatePath = 'storybook-assets/components/accordion/accordion-single-item-expansion.html';
export const AccordionSingleItemExpansion = () => {
  return {
    template: async () => {
        let response = await fetch(AccordionSingleItemExpansionTemplatePath);
        return response.text();
    }
  }
}

AccordionSingleItemExpansion.story = {
  parameters: {
    design: {
      artboardUrl: 'https://xd.adobe.com/view/a23a5b3e-a93d-4063-5532-cd55043e0488-d40b/screen/10bcabef-3186-433b-b5fb-ed8a56aacd0d/Button-Default',
    }
  }
};

const AccordionTemplatePath = 'storybook-assets/components/accordion/accordion.html';
export const Accordion = () => {
  return {
    template: async () => {
        let response = await fetch(AccordionTemplatePath);
        return response.text();
    }
  }
}

Accordion.story = {
  parameters: {
    design: {
      artboardUrl: 'https://xd.adobe.com/view/a23a5b3e-a93d-4063-5532-cd55043e0488-d40b/screen/10bcabef-3186-433b-b5fb-ed8a56aacd0d/Button-Default',
    }
  }
};

