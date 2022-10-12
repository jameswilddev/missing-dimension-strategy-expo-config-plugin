import { ConfigPlugin, withAppBuildGradle } from "@expo/config-plugins";

type Config = Record<string, string>;

const escape = (input: string): string => `'${input.replace(/'/g, "\\'")}'`;

const configPlugin: ConfigPlugin<Config> = (config, props) =>
  withAppBuildGradle(config, (config) => {
    for (const key in props) {
      config.modResults.contents += `\ndefaultConfig {\n\tmissingDimensionStrategy ${escape(
        key
      )}, ${escape(props[key] ?? "")}\n}\n`;
    }

    return config;
  });

export default configPlugin;
