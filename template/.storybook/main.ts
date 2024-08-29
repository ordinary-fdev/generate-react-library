import type {StorybookConfig} from @storybook/react-vite;

const config = {
    stories:['../src/**/*.mdx', '../src/**/*.stories.@(js}jsx|mjs|ts|tsx'],
    addons:[
        "@storybook/addon-onboarding",
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@chromatic-com/storybook",
        "@storybook/addon-interactions"
        ],
        framework:{
            name:"@storybook/react-vite",
            options:{}
        },
        staticDirs:[{from:"", to :""}]
};

export default config;