import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BookOpen, ClipboardCheck, Clock3, Trophy, Layers, Smartphone, Monitor, ChevronRight, GraduationCap } from 'lucide-react';
import './style.css';

const subjects = [
  { code: 'HVHC', title: 'Hậu cần – Kỹ thuật', desc: 'Ngân hàng câu hỏi chuyên ngành', count: 0 },
  { code: 'VCX', title: 'Vật chất và ý thức', desc: 'Triết học Mác – Lênin', count: 0 },
  { code: 'VKQ', title: 'Quản lý bộ đội', desc: 'Kiến thức quản lý và chỉ huy', count: 0 },
  { code: 'VMH', title: 'Vật chất hậu cần', desc: 'Nghiệp vụ vật chất hậu cần', count: 0 }
];

function App() {
  const [page, setPage] = useState('home');
  const [selected, setSelected] = useState('HVHC');

  return <div className="app-shell">
    <header className="topbar">
      <div className="brand"><div className="brand-icon"><GraduationCap size={25}/></div><div><b>E104A-H2-HVHC</b><small>ÔN TẬP & KIỂM TRA</small></div></div>
      <span className="status">BẢN KHỞI TẠO</span>
    </header>
    <main>
      {page === 'home' ? <>
        <section className="hero">
          <div><span className="eyebrow">HỆ THỐNG HỌC TẬP</span><h1>Chủ động ôn luyện.<br/>Sẵn sàng kiểm tra.</h1><p>Hệ thống ôn tập và thi trắc nghiệm kiến thức Hậu cần – Kỹ thuật.</p><button onClick={() => setPage('subjects')}>Bắt đầu học <ChevronRight size={17}/></button></div>
          <div className="hero-art"><BookOpen size={88}/><div className="hero-bubble"><ClipboardCheck size={24}/> Ôn tập thông minh</div></div>
        </section>
        <section className="stat-grid">
          <article><BookOpen/><small>Môn học</small><strong>{subjects.length}</strong></article>
          <article><Layers/><small>Ngân hàng câu hỏi</small><strong>Đang xây dựng</strong></article>
          <article><Clock3/><small>Lịch sử làm bài</small><strong>0 lượt</strong></article>
          <article><Trophy/><small>Kết quả</small><strong>Chưa có</strong></article>
        </section>
        <h2 className="section-title">Danh sách môn học</h2>
        <section className="subject-grid">{subjects.map(s => <article className="subject" key={s.code}><span className="code">{s.code}</span><h3>{s.title}</h3><p>{s.desc}</p><button onClick={() => {setSelected(s.code);setPage('subjects')}}>Mở môn học <ChevronRight size={16}/></button></article>)}</section>
      </> : <section className="page">
        <button className="back" onClick={() => setPage('home')}>← Trang chủ</button>
        <span className="eyebrow">MÔN HỌC</span><h1>Chọn môn để ôn tập</h1><p className="subtext">Chọn môn học để mở khu vực luyện tập và thi thử. Ngân hàng câu hỏi sẽ được bổ sung trong các bước tiếp theo.</p>
        <div className="subject-grid">{subjects.map(s => <article className={'subject '+(selected===s.code?'selected':'')} key={s.code} onClick={() => setSelected(s.code)}><span className="code">{s.code}</span><h3>{s.title}</h3><p>{s.desc}</p><div className="count">{s.count} câu hỏi</div></article>)}</div>
        <div className="notice"><strong>Giai đoạn khởi tạo</strong><p>Chưa có ngân hàng câu hỏi thật. Chúng ta sẽ bổ sung chức năng nhập câu hỏi, luyện tập, thi thử và lưu kết quả sau khi hoàn thiện khung giao diện.</p></div>
      </section>}
    </main>
    <footer><div><Monitor size={16}/> Windows <span className="dot">•</span><Smartphone size={16}/> Mobile-ready</div><span>© E104A-H2-HVHC</span></footer>
  </div>;
}

createRoot(document.getElementById('root')).render(<App />);
