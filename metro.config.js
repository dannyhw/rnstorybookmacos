const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {};

const finalConfig = mergeConfig(getDefaultConfig(__dirname), config);

const withStorybook = require('@storybook/react-native/metro/withStorybook');
module.exports = withStorybook(finalConfig);
