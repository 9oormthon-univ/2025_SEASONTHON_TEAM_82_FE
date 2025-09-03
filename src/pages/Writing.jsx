//글쓰기 페이지
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Writing.css";

import fileicon from "../images/FileIcon.png";


const Writing = () => {
const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  // 이미지 업로드 핸들러
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    if (!title || !content) {
      alert("제목과 내용을 입력해주세요.");
      return;
    }
    alert("게시물이 등록되었습니다!");
    navigate("/networktab"); // ✅ 자유게시판으로 이동
  };

  return (
    <div className="write">
    <div className="write-container">
      {/* 헤더 */}
      <div className="write-header">
        <button className="back-button" onClick={() => navigate("/networktab")}>
          &lt;
        </button>
        <h2>글쓰기</h2>
      </div>

      {/* 제목 입력 */}
      <div className="input-group">
        <label>제목</label>
        <input
          type="text"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {/* 내용 입력 */}
      <div className="input-group">
        <label>내용</label>
        <textarea
          placeholder="내용을 입력하세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
{/*이미지 업로드*/}
<div className="file-upload">
  <label htmlFor="fileInput" className="file-label">
    {image ? (
      <img src={image} alt="업로드된 이미지" className="preview" />
    ) : (
      <img src={fileicon} alt="업로드 이미지" className="upload-button" />
    )}
  </label>
  <input
    id="fileInput"
    type="file"
    accept="image/*"
    onChange={handleImageUpload}
    hidden
  />
</div>


      {/* 등록 버튼 */}
      <button className="submit-button" onClick={handleSubmit}>
        등록
      </button>
    </div>
 </div>
    );
};  

export default Writing;