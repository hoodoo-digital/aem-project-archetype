import { withXD } from 'storybook-addon-xd-designs'
import { StyleSystem } from 'storybook-aem-style-system';
import { aemMetadata } from '@storybook/aem';

export default {
  title: 'Title',
  decorators: [
    withXD,
    aemMetadata({
      decorationTag: {
        cssClasses: ['title', StyleSystem]
      }
    })
  ],
  parameters: {
    aemStyleSystem: {
      policy: 'storybook-assets/policies/title.json'
    }
  }
};
const Heading1NoLinkTemplatePath = 'storybook-assets/components/title/heading-1-no-link.html';
export const Heading1NoLink = () => {
  return {
    template: async () => {
        let response = await fetch(Heading1NoLinkTemplatePath);
        return response.text();
    }
  }
}

Heading1NoLink.story = {
  parameters: {
    design: {
      artboardUrl: 'https://xd.adobe.com/view/a23a5b3e-a93d-4063-5532-cd55043e0488-d40b/screen/10bcabef-3186-433b-b5fb-ed8a56aacd0d/Button-Default',
    }
  }
};

const Heading1WithLinkTemplatePath = 'storybook-assets/components/title/heading-1-with-link.html';
export const Heading1WithLink = () => {
  return {
    template: async () => {
        let response = await fetch(Heading1WithLinkTemplatePath);
        return response.text();
    }
  }
}

Heading1WithLink.story = {
  parameters: {
    design: {
      artboardUrl: 'https://xd.adobe.com/view/a23a5b3e-a93d-4063-5532-cd55043e0488-d40b/screen/10bcabef-3186-433b-b5fb-ed8a56aacd0d/Button-Default',
    }
  }
};

const Heading2NoLinkTemplatePath = 'storybook-assets/components/title/heading-2-no-link.html';
export const Heading2NoLink = () => {
  return {
    template: async () => {
        let response = await fetch(Heading2NoLinkTemplatePath);
        return response.text();
    }
  }
}

Heading2NoLink.story = {
  parameters: {
    design: {
      artboardUrl: 'https://xd.adobe.com/view/a23a5b3e-a93d-4063-5532-cd55043e0488-d40b/screen/10bcabef-3186-433b-b5fb-ed8a56aacd0d/Button-Default',
    }
  }
};

const Heading3NoLinkTemplatePath = 'storybook-assets/components/title/heading-3-no-link.html';
export const Heading3NoLink = () => {
  return {
    template: async () => {
        let response = await fetch(Heading3NoLinkTemplatePath);
        return response.text();
    }
  }
}

Heading3NoLink.story = {
  parameters: {
    design: {
      artboardUrl: 'https://xd.adobe.com/view/a23a5b3e-a93d-4063-5532-cd55043e0488-d40b/screen/10bcabef-3186-433b-b5fb-ed8a56aacd0d/Button-Default',
    }
  }
};

const Heading4NoLinkTemplatePath = 'storybook-assets/components/title/heading-4-no-link.html';
export const Heading4NoLink = () => {
  return {
    template: async () => {
        let response = await fetch(Heading4NoLinkTemplatePath);
        return response.text();
    }
  }
}

Heading4NoLink.story = {
  parameters: {
    design: {
      artboardUrl: 'https://xd.adobe.com/view/a23a5b3e-a93d-4063-5532-cd55043e0488-d40b/screen/10bcabef-3186-433b-b5fb-ed8a56aacd0d/Button-Default',
    }
  }
};

const Heading5NoLinkTemplatePath = 'storybook-assets/components/title/heading-5-no-link.html';
export const Heading5NoLink = () => {
  return {
    template: async () => {
        let response = await fetch(Heading5NoLinkTemplatePath);
        return response.text();
    }
  }
}

Heading5NoLink.story = {
  parameters: {
    design: {
      artboardUrl: 'https://xd.adobe.com/view/a23a5b3e-a93d-4063-5532-cd55043e0488-d40b/screen/10bcabef-3186-433b-b5fb-ed8a56aacd0d/Button-Default',
    }
  }
};

const Heading6NoLinkTemplatePath = 'storybook-assets/components/title/heading-6-no-link.html';
export const Heading6NoLink = () => {
  return {
    template: async () => {
        let response = await fetch(Heading6NoLinkTemplatePath);
        return response.text();
    }
  }
}

Heading6NoLink.story = {
  parameters: {
    design: {
      artboardUrl: 'https://xd.adobe.com/view/a23a5b3e-a93d-4063-5532-cd55043e0488-d40b/screen/10bcabef-3186-433b-b5fb-ed8a56aacd0d/Button-Default',
    }
  }
};

