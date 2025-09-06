// 글쓰기 페이지
import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import "./WritingRecruit.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FiCalendar } from "react-icons/fi";

import fileicon from "../images/FileIcon.png";

const WritingRecruit = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
 
  // 모집기간, 모집분야, 지역 상태
  const [recruitPeriod, setRecruitPeriod] = useState(null);
  const [field, setField] = useState("");
  const [region, setRegion] = useState("");

  const regionList = [
    "전체",
    "서울",
    "인천",
    "충남",
    "강원",
    "부산",
    "광주",
    "대구",
    "울산",
    "세종",
    "충북",
    "경북",
    "경남",
    "제주",
    "전북",
    "전남",
  ];

  const fieldList = [
    "요식업",
    "유통업",
    "서비스업",
    "교육업",
    "스타트업/IT",
    "친환경",
  ];

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
    console.log({
      제목: title,
      내용: content,
      모집기간: recruitPeriod,
      모집분야: field,
      지역: region,
    });
    
  

  // ✅ 기존 저장된 글 불러오기
     const recruitPosts = JSON.parse(localStorage.getItem("recruitPosts")) || [];
    // ✅ 새 글 객체 생성
      const newPost = {
      id: Date.now(),
      title,
      content,
      image,
      field,
      region,

      };

    // ✅ localStorage에 저장 (새 글을 맨 위에 추가)
    localStorage.setItem("recruitPosts", JSON.stringify([newPost, ...recruitPosts]));

    navigate("/network/recruit"); // ✅ 창업모집으로 이동
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

    {/* 모집기간 */}
  <div className="input-group">
   <label>모집기간</label>
   <div className="date-picker-container">
     <DatePicker
      selected={recruitPeriod}
      onChange={(date) => setRecruitPeriod(date)}
      placeholderText="모집기간 선택"
      dateFormat="yyyy/MM/dd"
      className="date-input"
     />
     <FiCalendar className="calendar-icon" />
   </div>
</div>

{/* 모집분야 */}
<div className="horizontal-group">
<div className="input-group">
  <label>모집분야</label>
  <select value={field} onChange={(e) => setField(e.target.value)}>
    <option value="">선택</option>
    <option value="요식업">요식업</option>
    <option value="유통업">유통업</option>
    <option value="서비스업">서비스업</option>
    <option value="교육업">교육업</option>
    <option value="스타트업/IT">스타트업/IT</option>
    <option value="친환경">친환경</option>
  </select>
</div>

{/* 지역 */}
<div className="input-group">
  <label>지역</label>
  <select value={region} onChange={(e) => setRegion(e.target.value)}>
    <option value="">선택</option>
    <option value="전체">전체</option>
    <option value="서울">서울</option>
    <option value="인천">인천</option>
    <option value="충남">충남</option>
    <option value="강원">강원</option>
    <option value="부산">부산</option>
    <option value="광주">광주</option>
    <option value="대구">대구</option>
    <option value="울산">울산</option>
    <option value="세종">세종</option>
    <option value="충북">충북</option>
    <option value="경북">경북</option>
    <option value="경남">경남</option>
    <option value="제주">제주</option>
    <option value="전북">전북</option>
    <option value="전남">전남</option>
  </select>
 </div>
</div>



        {/* 이미지 업로드 */}
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

export default WritingRecruit;
