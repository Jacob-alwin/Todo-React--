import React from 'react'
import '../StickyNotes/stickyNotes.css'
function ProgressNotes({items}) {
  return (
    <>
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
      <div className="sticky-content-progress">
      {items.title}<br/>
        {items.details}
        {
        items.hide?<i className='bi-archive' style={{position: 'absolute',top: 35, right:20}}></i>:null
        }
      </div>
    </div>
  </div>
</div>

</>
  )
}

export default ProgressNotes