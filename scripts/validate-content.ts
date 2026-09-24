import { serviceGateIssues } from "../lib/cms/gate";

const issues = serviceGateIssues();
if (issues.length) {
  console.error(issues.join("\n"));
  process.exit(1);
}
console.log("content gate passed");
