import test from "node:test";
import assert from "node:assert/strict";

import { getLocaleTypography } from "../lib/i18n/typography.ts";
import { translations } from "../lib/i18n/translations.ts";

const locales = ["en", "fr", "tr", "ar"] as const;

test("Arabic locale uses Arabic font stacks", () => {
  const typography = getLocaleTypography("ar");

  assert.match(typography.sans, /Cairo/);
  assert.match(typography.display, /Cairo/);
});

test("homepage copy blocks exist in every locale", () => {
  for (const locale of locales) {
    const copy = translations[locale].sections;

    assert.ok(copy.caseStudies.eyebrow);
    assert.ok(copy.caseStudies.heading);
    assert.ok(copy.blog.eyebrow);
    assert.ok(copy.blog.heading);
    assert.ok(copy.process.eyebrow);
    assert.ok(copy.process.heading);
  }
});
