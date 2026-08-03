import test from "node:test";
import assert from "node:assert/strict";

import {
  applySiteCopy,
  getSiteConfig,
  isLocaleAllowed,
} from "../lib/site/config.ts";

test("default site is arafion with four locales", () => {
  const site = getSiteConfig();
  assert.equal(site.id, "arafion");
  assert.deepEqual([...site.locales], ["en", "fr", "tr", "ar"]);
  assert.equal(isLocaleAllowed("he", site), false);
  assert.equal(isLocaleAllowed("en", site), true);
});

test("applySiteCopy swaps brand tokens", () => {
  const out = applySiteCopy(
    {
      line: "Work with {brand} at contact@arafion.com on https://arafion.com",
    },
    {
      ...getSiteConfig(),
      id: "norex",
      shortName: "Norex",
      email: "contact@norexsystems.com",
      siteUrl: "https://norexsystems.com",
      domain: "norexsystems.com",
    },
  );
  assert.equal(
    out.line,
    "Work with Norex at contact@norexsystems.com on https://norexsystems.com",
  );
});

test("norex technical offering ids exclude marketing and visualization", () => {
  const all = ["software", "websites", "intelligence", "marketing", "visualization", "strategy"];
  const norexAllowed = new Set(["software", "websites", "intelligence", "strategy"]);
  assert.deepEqual(
    all.filter((id) => norexAllowed.has(id)),
    ["software", "websites", "intelligence", "strategy"],
  );
});
