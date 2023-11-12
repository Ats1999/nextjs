export default function Page({
  params: { blogId },
}: {
  params: { blogId: string };
}) {
  const date = new Date().toLocaleTimeString();
  return (
    <h1>
      {blogId} - {date}
    </h1>
  );
}

// make sure that routes are statically rendered
export async function generateStaticParams() {
  return [{ blogId: "1" }, { blogId: "2" }];
}
