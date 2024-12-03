// Example file structure, app/[...page]/page.tsx
// You could alternatively use src/app/[...page]/page.tsx
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../components/builder";
import React from "react";


// Replace with your Public API Key
builder.init("706c4001d29248a197cd4cb1e707e1f2");

// Define your async page function
export default async function Page({
  params,
}: {
  params: { page?: string | string[] };
}) {
  const model = "page";

  // Resolve URL path dynamically
  const urlPath =
    "/" + (Array.isArray(params.page) ? params.page.join("/") : params.page || "");

  const content = await builder
    .get(model, {
      userAttributes: {
        urlPath,
      },
    })
    .toPromise();

  return (
    <>
      {/* Render the Builder page */}
      <RenderBuilderContent content={content} model={model} />
    </>
  );
}