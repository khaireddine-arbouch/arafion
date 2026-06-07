import test from "node:test";
import assert from "node:assert/strict";

import {
  buildPortfolioProjects,
  serviceCategoryLabel,
  statusLabel,
} from "../lib/portfolio-view";

const baseProject = {
  id: "x",
  title: "Signal Console",
  slug: "signal-console",
  status: "live",
  projectType: "saas-product",
  visibility: "public",
  targetMarkets: ["B2B"],
  client: {
    name: "Private Client LLC",
    publicName: "Private Client",
    isConfidential: true,
  },
  location: {
    country: "International",
    city: null,
    region: "Europe",
    lat: null,
    lng: null,
  },
  industry: ["Operations"],
  serviceCategories: ["ai-systems", "dashboards-intelligence"],
  proofTypes: ["screenshots", "private-demo"],
  publicUrl: null,
  shortDescription: "A project intelligence console.",
  whatWeBuilt: ["Console"],
  saferTechnicalStack: ["Next.js"],
  bestSalesAngle: "Internal operating intelligence.",
  doNotClaim: ["Revenue uplift"],
  featured: true,
};

test("serviceCategoryLabel renders canonical categories as human labels", () => {
  assert.equal(serviceCategoryLabel("ai-systems"), "AI systems");
  assert.equal(serviceCategoryLabel("saas-software"), "SaaS & software");
  assert.equal(serviceCategoryLabel("3d-rendering"), "3D rendering");
});

test("statusLabel maps project statuses to visitor-facing labels", () => {
  assert.equal(statusLabel("delivered"), "Delivered");
  assert.equal(statusLabel("in-development"), "In development");
  assert.equal(statusLabel("planned-or-in-progress"), "In development");
});

test("buildPortfolioProjects uses region centroids for missing coordinates", () => {
  const [project] = buildPortfolioProjects([baseProject]);

  assert.equal(project.region, "Europe");
  assert.equal(project.country, "France");
  assert.equal(project.lat, 48.8566);
  assert.equal(project.lng, 2.3522);
});

test("buildPortfolioProjects anonymizes confidential clients", () => {
  const [project] = buildPortfolioProjects([baseProject]);

  assert.equal(project.displayTitle, "Confidential engagement");
  assert.equal(project.globeLabel, "AI systems · Europe");
});

test("buildPortfolioProjects exposes no fake metric fields", () => {
  const [project] = buildPortfolioProjects([baseProject]);

  assert.equal("capacityMW" in project, false);
  assert.equal("costUSD" in project, false);
  assert.equal("computeH100e" in project, false);
});
