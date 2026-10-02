#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "myjobone",
  boardId: "myjobone-official",
  domain: "myjob.one",
  npmName: "zc-myjobone-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
