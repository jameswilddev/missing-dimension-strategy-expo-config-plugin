import { ConfigPlugin, withAppBuildGradle } from "@expo/config-plugins";

type Config = Record<string, string>;

const escape = (input: string): string => `'${input.replace(/'/g, "\\'")}'`;

const configPlugin: ConfigPlugin<Config> = (config, props) =>
  withAppBuildGradle(config, (config) => {
    for (const key in props) {
      config.modResults.contents += `\nandroid {\n\tdefaultConfig {\n\t\tmissingDimensionStrategy ${escape(
        key
      )}, ${escape(props[key] ?? "")}\n\t}\n}\n`;
    }

    return config;
  });

export default configPlugin;
