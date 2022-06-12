import React from 'react'
import '../StickyNotes/stickyNotes.css'
function TodoNotes({items}) {
  return (
    <div className="sticky-container">
  <div className="sticky-outer">
    <div className="sticky">
      <svg width="0" height="0">
        <defs>
          <clipPath id="stickyClip" clipPathUnits="objectBoundingBox">
            <path
              d="M 0 0 Q 0 0.69, 0.03 0.96 0.03 0.96, 1 0.96 Q 0.96 0.69, 0.96 0 0.96 0, 0 0"
              
            />
          </clipPath>
        </defs>
      </svg>
      <div className="sticky-content-todo">
        {items.title}<br/>
        {items.details}
      </div>
    </div>
  </div>
</div>
  )
}

export default TodoNotes