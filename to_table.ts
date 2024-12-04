import unstableApis from "./unstable_apis.json" with { type: "json" };
import unstablePackages from "./unstable_packages.json" with { type: "json" };
import { formatDate } from "./utils.ts";
import { sortBy } from "jsr:@std/collections";

function unstablePackageTable() {
  const packages = sortBy(unstablePackages, (pkg) => new Date(pkg.startedAt));
  console.log(`### Unstable packages

| Package | Current version | Started at |
| ------- | --------------- | ---------- |`);
  for (const pkg of packages) {
    const date = formatDate(new Date(pkg.startedAt));
    console.log(`| ${pkg.name} | ${pkg.version} | ${date} |`);
  }
}

function unstableApiTable() {
  const apis = sortBy(unstableApis, (api) => new Date(api.startedAt));
  console.log(`### Unstable APIs

| Package | Path  | Started at |
| ------- | ----- | ---------- |`);
  for (const api of apis) {
    const specifier = api.specifier.split("/");
    const path = specifier.pop();
    const pkg = specifier.join("/");
    const date = formatDate(new Date(api.startedAt));
    console.log(`| ${pkg} | ${path} | ${date} |`);
  }
}

unstablePackageTable();
console.log();
console.log();
unstableApiTable();
