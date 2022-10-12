import { ConfigPlugin, AndroidConfig } from "@expo/config-plugins";

const { createBuildGradlePropsConfigPlugin } = AndroidConfig.BuildProperties;

type Config = Record<string, string>;

const configPlugin: ConfigPlugin<Config> = (config, props) =>
  createBuildGradlePropsConfigPlugin<Config>(
    Object.keys(props).map((key) => ({
      propName: "android.missingDimensionStrategy",
      propValueGetter: (config) => config[key],
    }))
  )(config, props);

export default configPlugin;
