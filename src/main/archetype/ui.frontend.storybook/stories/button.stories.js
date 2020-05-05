import { withXD } from 'storybook-addon-xd-designs'
import { StyleSystem } from 'storybook-aem-style-system';
import { aemMetadata } from '@storybook/aem';

export default {
  title: 'Button',
  decorators: [
    withXD,
    aemMetadata({
      decorationTag: {
        cssClasses: ['button', StyleSystem]
      }
    })
  ],
  parameters: {
    aemStyleSystem: {
      policy: 'storybook-assets/policies/button.json'
    }
  }
};
const AnchorElementNoIconTemplatePath = 'storybook-assets/components/button/anchor-element-no-icon.html';
export const AnchorElementNoIcon = () => {
  return {
    template: async () => {
        let response = await fetch(AnchorElementNoIconTemplatePath);
        return response.text();
    }
  }
}

AnchorElementNoIcon.story = {
  parameters: {
    design: {
      artboardUrl: 'https://xd.adobe.com/view/a23a5b3e-a93d-4063-5532-cd55043e0488-d40b/screen/10bcabef-3186-433b-b5fb-ed8a56aacd0d/Button-Default',
    }
  }
};

const AnchorElementWithIconTemplatePath = 'storybook-assets/components/button/anchor-element-with-icon.html';
export const AnchorElementWithIcon = () => {
  return {
    template: async () => {
        let response = await fetch(AnchorElementWithIconTemplatePath);
        return response.text();
    }
  }
}

AnchorElementWithIcon.story = {
  parameters: {
    design: {
      artboardUrl: 'https://xd.adobe.com/view/a23a5b3e-a93d-4063-5532-cd55043e0488-d40b/screen/10bcabef-3186-433b-b5fb-ed8a56aacd0d/Button-Default',
    }
  }
};

const ButtonElementNoIconTemplatePath = 'storybook-assets/components/button/button-element-no-icon.html';
export const ButtonElementNoIcon = () => {
  return {
    template: async () => {
        let response = await fetch(ButtonElementNoIconTemplatePath);
        return response.text();
    }
  }
}

ButtonElementNoIcon.story = {
  parameters: {
    design: {
      artboardUrl: 'https://xd.adobe.com/view/a23a5b3e-a93d-4063-5532-cd55043e0488-d40b/screen/10bcabef-3186-433b-b5fb-ed8a56aacd0d/Button-Default',
    }
  }
};

const ButtonElementWithIconTemplatePath = 'storybook-assets/components/button/button-element-with-icon.html';
export const ButtonElementWithIcon = () => {
  return {
    template: async () => {
        let response = await fetch(ButtonElementWithIconTemplatePath);
        return response.text();
    }
  }
}

ButtonElementWithIcon.story = {
  parameters: {
    design: {
      artboardUrl: 'https://xd.adobe.com/view/a23a5b3e-a93d-4063-5532-cd55043e0488-d40b/screen/10bcabef-3186-433b-b5fb-ed8a56aacd0d/Button-Default',
    }
  }
};

