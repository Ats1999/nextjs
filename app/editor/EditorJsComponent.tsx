// @ts-ignore
import AceCodeEditorJS from "ace-code-editorjs";
import "ace-builds/esm-resolver";
// import "../renderers/styles/ace.css";
// @ts-ignore
import EditorJS from "@editorjs/editorjs";
import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const aceConfig = {
  languages: {
    plaintext: {
      label: "Plain Text",
      mode: "ace/mode/plain_text",
    },
    html: {
      label: "HTML",
      mode: "ace/mode/html",
    },
    css: {
      label: "CSS",
      mode: "ace/mode/css",
    },
    javascript: {
      label: "JavaScript",
      mode: "ace/mode/javascript",
    },
    java: {
      label: "Java",
      mode: "ace/mode/java",
    },
    cpp: {
      label: "C/C++",
      mode: "ace/mode/c_cpp",
    },
    python: {
      label: "Python",
      mode: "ace/mode/python",
    },
    diff: {
      label: "Diff",
      mode: "ace/mode/diff",
    },
    shell: {
      label: "Shell",
      mode: "ace/mode/sh",
    },
    json: {
      label: "JSON",
      mode: "ace/mode/json",
    },
    sql: {
      label: "SQL",
      mode: "ace/mode/sql",
    },
    tex: {
      label: "TEX",
      mode: "ace/mode/latex",
    },
    markdown: {
      label: "Markdown",
      mode: "ace/mode/markdown",
    },
  },
  options: {
    fontSize: 16,
    minLines: 4,
    theme: "ace/theme/monokai",
    // TODO: configure web worker
    useWorker: false,
  },
};

const aceToolConfig = {
  class: AceCodeEditorJS,
  config: aceConfig,
};

export default function EditorJsComponent({ id }: any) {
  const editorRef = useRef<EditorJS>();
  useEffect(() => {
    if (editorRef.current) {
      return;
    }

    const editor = new EditorJS({
      autofocus: true,
      placeholder: "Let`s write an awesome story!",
      holder: id,
      tools: {
        ace: aceToolConfig,
      },
    });

    editorRef.current = editor;
    (window as any).editor = editor;

    return () => {
      if (editorRef && editorRef.current && editorRef.current.destroy) {
        editorRef.current.destroy();
        delete (window as any).editor;
      }
    };
  }, []);

  return <div id={id} />;
}
