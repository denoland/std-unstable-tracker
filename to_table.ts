import unstableApis from "./unstable_apis.json" with { type: "json" };
import unstablePackages from "./unstable_packages.json" with { type: "json" };
import { formatDate } from "./utils.ts";

function unstableApiTable() {
  console.log(`### Unstable APIs

| Package | Specifier  | Started at |
| ------- | ---------- | ---------- |`);
  for (const api of unstableApis) {
    const date = formatDate(new Date(api.startedAt));
    console.log(`| ${api.package} | ${api.specifier} | ${date} |`);
  }
}

function unstablePackageTable() {
  console.log(`### Unstable packages

| Package | Current version | Started at |
| ------- | --------------- | ---------- |`);
  for (const pkg of unstablePackages) {
    const date = formatDate(new Date(pkg.startedAt));
    console.log(`| ${pkg.name} | ${pkg.version} | ${date} |`);
  }
}

unstablePackageTable();
console.log();
console.log();
unstableApiTable();
