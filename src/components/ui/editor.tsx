import ReactQuill from "react-quill-new";
import "quill/dist/quill.snow.css";
import {CustomToolbar} from "../ui/toobar"
import { useState, useRef } from "react";
interface Name{
    prop:string;
}

function Editor({prop}:Name) {

    const quillRef = useRef<ReactQuill>(null);
  const [value, setValue] = useState<string>("");
  const modules = {

  toolbar: {
    container: "#toolbar",
  },

  history: {
    delay: 1000,
    maxStack: 100,
    userOnly: true
  }
};

const formats = [
  "header",
  "bold", "italic", "underline", "strike",
  "align",
  "list", "bullet",
  "link", "image",
  "undo","redo"
];

  return (
    <div className="bg-white rounded-xl  px-5 py-5 m-3 flex flex-col gap-3">
      <h2 className="font-bold text-neutral-900">{prop}</h2>
<div className="rounded-lg border overflow-hidden border-neutral-300 bg-stone-100"> <CustomToolbar  quillRef={quillRef}/>
    <ReactQuill
      ref={quillRef}
      theme="snow"
      value={value}
      onChange={setValue}
      modules={modules}
      formats={formats}
      className="bg-white"
    /></div>
      
    </div>
  );
}

export default Editor;
