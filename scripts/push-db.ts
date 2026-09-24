import { getPayload } from "payload";
import config from "../payload.config";

async function main() {
  const payload = await getPayload({ config });
  payload.logger.info("database schema is ready");
  process.exit(0);
}

main();
