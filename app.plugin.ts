import { ConfigPlugin, AndroidConfig } from "@expo/config-plugins";

const { createBuildGradlePropsConfigPlugin } = AndroidConfig.BuildProperties;

type Config = Record<string, string>;

const escape = (input: string): string => `'${input.replace(/'/g, "\\'")}'`;

const configPlugin: ConfigPlugin<Config> = (config, props) =>
  createBuildGradlePropsConfigPlugin<Config>(
    Object.keys(props).map((key) => ({
      propName: "android.missingDimensionStrategy",
      propValueGetter: (config) =>
        `${escape(key)}, ${escape(config[key] ?? "")}`,
    }))
  )(config, props);

export default configPlugin;
