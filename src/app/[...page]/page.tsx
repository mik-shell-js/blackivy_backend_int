import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../components/builder";
import { GetStaticPropsContext } from "next";

// Initialize Builder.io
builder.init("706c4001d29248a197cd4cb1e707e1f2");

export default async function Page({
  params,
}: GetStaticPropsContext<{ page: string[] }>) {
  const model = "page";

  const urlPath =
    "/" + (Array.isArray(params?.page) ? params.page.join("/") : params?.page || "");

  const content = await builder
    .get(model, {
      userAttributes: {
        urlPath,
      },
    })
    .toPromise();

  if (!content) {
    return <div>Page Not Found</div>;
  }

  return <RenderBuilderContent content={content} model={model} />;
}
