import unstableApis from "./unstable_apis.json" with { type: "json" };
import unstablePackages from "./unstable_packages.json" with { type: "json" };
import { formatDate } from "./utils.ts";
import { sortBy } from "jsr:@std/collections";
import toAge from "npm:date-age";

const dateAge = new toAge.Age();
const age = (d: Date) => dateAge.dobToAge(d);
const now = new Date();

function unstablePackageTable() {
  const packages = sortBy(unstablePackages, (pkg) => new Date(pkg.startedAt));
  console.log(`### Unstable packages

| No | Package | Current version | Started at | Age at<br/>${formatDate(now)} |
| -- | ------- | --------------- | ---------- | ------------------------- |`);
  let i = 0;
  for (const pkg of packages) {
    i++;
    const { name } = pkg;
    const pkgName = `[${name}](https://jsr.io/${name})`;
    const d = new Date(pkg.startedAt);
    const date = formatDate(d);
    console.log(
      `| ${i} | ${pkgName} | ${pkg.version} | ${date} | ${age(d)} |`,
    );
  }
}

function unstableApiTable() {
  const apis = sortBy(unstableApis, (api) => new Date(api.startedAt));
  console.log(`### Unstable APIs

| No | Package | Path  | Started at | Age at<br/>${formatDate(now)} |
| -- | ------- | ----- | ---------- | ------------------------- |`);
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
    console.log(`| ${i} | ${pkgLink} | ${pathLink} | ${date} | ${age(d)} |`);
  }
}

unstablePackageTable();
console.log();
console.log();
unstableApiTable();
