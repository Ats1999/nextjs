import Editor from "./editor/Editor";

export default function EditorDemo() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>What's happening?</h1>
      <Editor id="editor" />
    </div>
  );
}
