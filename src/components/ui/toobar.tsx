 import ReactQuill from "react-quill-new";
 interface Quill{
     quillRef: React.RefObject<ReactQuill |null>;
 }
 export const CustomToolbar : React.FC<Quill> = ({quillRef}) => (
  <div id="toolbar">
     <span className="ql-formats">
      <button className="ql-bold"></button>
      <button className="ql-italic"></button>
      <button className="ql-underline"></button>
    </span>
    <span className="ql-formats">
      <button className="ql-align" value=""></button>
      <button className="ql-align" value="center"></button>
      <button className="ql-align" value="right"></button>
    </span>

    <span className="ql-formats">
      <button className="ql-list" value="ordered"></button>
      <button className="ql-list" value="bullet"></button>
    </span>

    <span className="ql-formats">
      <button className="ql-link"></button>
      <button className="ql-image"></button>
    </span>
    <span className="ql-formats">
  <button onClick={() => quillRef.current?.getEditor().history.undo()}>↩</button>
  <button onClick={() => quillRef.current?.getEditor().history.redo()}>↪</button>
</span>

  </div>
);
