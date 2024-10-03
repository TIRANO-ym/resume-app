import { useRef, useState } from "react";
import './preview-modal.css';

export default function PreviewModal({ srcs, onClose }) {
  // ------- 드래그 액션
  const listRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const mouseCoords = useRef({
      startX: 0,
      scrollLeft: 0,
  });
  const handleDragStart = (e) => {
      if (!listRef.current) return;
    const slider = listRef.current;
      const startX = e.pageX - slider.offsetLeft;
      const scrollLeft = slider.scrollLeft;
      mouseCoords.current = { startX, scrollLeft };
      setIsMouseDown(true);
      document.body.style.cursor = "grabbing";
  }
  const handleDragEnd = () => {
      setIsMouseDown(false);
      if (!listRef.current) return;
      document.body.style.cursor = "default";
  }
  const handleDrag = (e) => {
      if (!isMouseDown || ! listRef.current) return;
      e.preventDefault();
      const slider = listRef.current;
      const x = e.pageX - slider.offsetLeft;
      const walkX = (x - mouseCoords.current.startX);
      slider.scrollLeft = mouseCoords.current.scrollLeft - walkX;
      console.log(walkX)
  }
  // ------------------
  const [selectedIdx, setSelectedIdx] = useState(0);
  const onClickOverlay = (e) => {
    e.stopPropagation();
  };

  const leftClick = (e) => {
    e.stopPropagation();
    if (selectedIdx === 0) return;
    setSelectedIdx(prev => prev - 1);
  };
  const rightClick = (e) => {
    e.stopPropagation();
    if (selectedIdx === (srcs.length - 1)) return;
    setSelectedIdx(prev => prev + 1);
  };
  const clickImg = (e, i) => {
    e.stopPropagation();
    setSelectedIdx(i);
  }

  return <div className="modal" onClick={onClose}>
    <div className="wrapper" onClick={onClickOverlay}>
      <div className="top">
        <div className={`arrowBtn${selectedIdx === 0 ? ' disabled' : ''}`} onClick={leftClick}><LeftIcon/></div>
        <div className="imageBox"><img className="img" draggable={false} src={srcs[selectedIdx]} alt={srcs[selectedIdx]}/></div>
        <div className={`arrowBtn${selectedIdx === (srcs.length - 1) ? ' disabled' : ''}`} onClick={rightClick}><RightIcon/></div>
      </div>
      <div className="bottom">
        <div className="listView" ref={listRef} onMouseDown={handleDragStart} onMouseUp={handleDragEnd} onMouseMove={handleDrag}>
          {
            srcs.map((src, i) => {
              return <div className={`imgWrapper${i === selectedIdx ? ' selected' : ''}`} onClick={(e) => clickImg(e, i)}><img className="img" draggable={false} src={src} key={i} alt={`allImg${i}`}/></div>;
            })
          }
        </div>
      </div>
    </div>
  </div>;
}

function LeftIcon() {
  return <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path clipRule="evenodd" fillRule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" />
</svg>;
};
function RightIcon() {
  return <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path clipRule="evenodd" fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" />
</svg>;
};