import unstableApis from "./unstable_apis.json" with { type: "json" };
import unstablePackages from "./unstable_packages.json" with { type: "json" };
import { formatDate } from "./utils.ts";
import { sortBy } from "jsr:@std/collections";
import toAge from "npm:date-age";

const dateAge = new toAge.Age();
const age = (d: Date) => dateAge.dobToAge(d);
const now = new Date();

function unstablePackageTable() {
  const lines = [];
  const packages = sortBy(unstablePackages, (pkg) => new Date(pkg.startedAt));
  lines.push(`### Unstable packages

| No | Package | Current version | Started at | Age at<br/>${formatDate(now)} |
| -- | ------- | --------------- | ---------- | ------------------------- |`);
  let i = 0;
  for (const pkg of packages) {
    i++;
    const { name } = pkg;
    const pkgName = `[${name}](https://jsr.io/${name})`;
    const d = new Date(pkg.startedAt);
    const date = formatDate(d);
    lines.push(
      `| ${i} | ${pkgName} | ${pkg.version} | ${date} | ${age(d)} |`,
    );
  }
  return lines.join("\n");
}

function unstableApiTable() {
  const lines = [];
  const apis = sortBy(unstableApis, (api) => new Date(api.startedAt));
  lines.push(`### Unstable APIs

| No | Package | Path  | Type | Started at | Age at<br/>${formatDate(now)} |
| -- | ------- | ----- | ---- | ---------- | ------------------------- |`);
  let i = 0;
  for (const api of apis) {
    i++;
    const name = api.package;
    const specifier = api.specifier.split("/");
    const path = specifier.pop();
    const pkg = specifier.join("/");
    const pkgUrl = pkg.replace(name + "/", name + "/doc/");
    const pkgLink = `[${pkg}](https://jsr.io/${pkgUrl})`;
    const pathUrl = api.specifier.replace(name, name + "/doc");
    const pathLink = `[${path}](https://jsr.io/${pathUrl})`;
    const d = new Date(api.startedAt);
    const date = formatDate(d);
    const apiType = api.type === "new" ? "New" : "Fork";
    lines.push(
      `| ${i} | ${pkgLink} | ${pathLink} | ${apiType} | ${date} | ${age(d)} |`,
    );
  }
  return lines.join("\n");
}

Deno.writeTextFileSync(
  "README.md",
  Deno.readTextFileSync("README.md").replace(
    /<!-- Tables Start -->[\s\S]*<!-- Tables End -->/,
    `<!-- Tables Start -->

${unstablePackageTable()}

${unstableApiTable()}

<!-- Tables End -->`,
  ),
);

await new Deno.Command(Deno.execPath(), { args: ["fmt", "README.md"] })
  .output();
