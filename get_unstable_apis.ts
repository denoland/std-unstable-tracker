import $ from "@david/dax";
import { getWorkspacePackageConfigs, isUnstable } from "./utils.ts";
import { join } from "@std/path";
import { join as posixJoin } from "@std/path/posix";

type UnstableApiProfile = {
  package: string;
  export: string;
  specifier: string;
  path: string;
  startedAt: Date;
  type: "new" | "fork";
};

async function getPathStartedDate(path: string): Promise<Date> {
  const date = await $`git log --format=%ad --date=short ${path} | tail -1`
    .cwd("std")
    .text();
  return new Date(date);
}

async function main() {
  const configs = await getWorkspacePackageConfigs();
  const stables = configs.filter((config) => !isUnstable(config));
  const unstableApiProfiles = [] as UnstableApiProfile[];
  for (const config of stables) {
    for (const [name, relPath] of Object.entries(config.exports)) {
      if (name.includes("unstable-")) {
        const stableName = name.replace("unstable-", "");
        const isFork = config.exports[stableName] !== undefined &&
          // get-network-address is a special case
          // it is used by stable file-server
          stableName !== "./get-network-address";
        console.log(stableName, isFork);
        const path = join(config.path, relPath);
        unstableApiProfiles.push({
          package: config.name,
          export: name,
          specifier: posixJoin(config.name, name),
          path,
          startedAt: await getPathStartedDate(path),
          type: isFork ? "fork" : "new",
        });
      }
    }
  }
  console.log(unstableApiProfiles);
  await Deno.writeTextFile(
    "unstable_apis.json",
    JSON.stringify(unstableApiProfiles, null, 2) + "\n",
  );
}

main();
