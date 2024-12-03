import { lessThan, parse } from "@std/semver";
import rootConfig from "./std/deno.json" with { type: "json" };

export type PackageConfig = {
  name: string;
  version: string;
  path: string;
  exports: Record<string, string>;
};

const semver1 = parse("1.0.0");

export function isUnstable(config: PackageConfig): boolean {
  return lessThan(parse(config.version), semver1);
}

export async function getConfig(path: string): Promise<PackageConfig> {
  const config = JSON.parse(await Deno.readTextFile(`std/${path}/deno.json`));
  return { ...config, path };
}

export async function getWorkspacePackageConfigs(): Promise<PackageConfig[]> {
  const { workspace } = rootConfig;
  const configs = [] as PackageConfig[];
  for (const dir of workspace) {
    configs.push(await getConfig(dir));
  }
  return configs;
}

export function formatDate(date: Date): string {
  return date.toISOString().split("T")[0];
}
