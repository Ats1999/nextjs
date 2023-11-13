"use client";
import dynamic from "next/dynamic";
const Editor = dynamic(() => import("./EditorJsComponent"), {
  ssr: false,
});

export default Editor;
