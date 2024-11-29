import $ from "@david/dax";
import rootConfig from "./std/deno.json" with { type: "json" };
import { lessThan, parse } from "@std/semver";

const semver1 = parse("1.0.0");

type PackageConfig = {
  name: string;
  version: string;
  path: string;
};

type PackageProfile = {
  name: string;
  version: string;
  path: string;
  startedAt: Date;
};

async function getConfig(path: string): Promise<PackageConfig> {
  const config = JSON.parse(await Deno.readTextFile(`std/${path}/deno.json`));
  return { ...config, path };
}

function isUnstable(config: PackageConfig): boolean {
  return lessThan(parse(config.version), semver1);
}

async function getProfile(config: PackageConfig): Promise<PackageProfile> {
  const date =
    await $`git log --follow --format=%ad --date=short ${config.path} | tail -1`
      .cwd("std")
      .text();
  return {
    ...config,
    startedAt: new Date(date),
  };
}

async function main() {
  const { workspace } = rootConfig;
  const unstables = [] as PackageProfile[];
  for (const dir of workspace) {
    const config = await getConfig(dir);
    if (isUnstable(config)) {
      unstables.push(await getProfile(config));
    }
  }
  await Deno.writeTextFile(
    "unstable_packages.json",
    JSON.stringify(unstables, null, 2),
  );
}

main();
