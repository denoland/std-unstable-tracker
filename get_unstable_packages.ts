import $ from "@david/dax";
import {
  getWorkspacePackageConfigs,
  isUnstable,
  type PackageConfig,
} from "./utils.ts";

type PackageProfile = PackageConfig & {
  startedAt: Date;
};

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
  const configs = await getWorkspacePackageConfigs();
  const unstables = configs.filter(isUnstable).map((config) =>
    getProfile(config)
  );
  const unstableProfiles = await Promise.all(unstables);
  unstableProfiles.forEach((profile) => {
    profile.exports = {};
  });

  console.log(unstableProfiles.length, "unstable packages:");
  for (const profile of unstableProfiles) {
    console.log(`  %c${profile.name}:`, "color: magenta");
    console.log("    version:", profile.version);
    console.log("    startedAt:", profile.startedAt.toISOString());
  }

  await Deno.writeTextFile(
    "unstable_packages.json",
    JSON.stringify(unstableProfiles, null, 2) + "\n",
  );
}

main();
