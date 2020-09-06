import React from "react"

const Switch = ({ checked, onChange }) => {

  return (
    <>
      <input type="checkbox" id="toggle" class="offscreen" checked={checked} onChange={onChange} />
      <label for="toggle" class="switch" />
      <style>{`
        .switch {
          position: relative;
          display: inline-block;
          width: 40px;
          height: 20px;
          background-color: #a1a7b3;
          border-radius: 20px;
          transition: all 0.3s;
        }
        
        .switch:after {
          cursor: pointer;
          content: '';
          position: absolute;
          width: 18px;
          height: 18px;
          border-radius: 18px;
          background-color: white;
          top: 1px;
          left: 1px;
          transition: all 0.3s;
        }
        
        input[type='checkbox']:checked + .switch:after {
          transform: translateX(20px);
        }
        
        input[type='checkbox']:checked + .switch {
          background-color: #ed8936;
        }
        
        .offscreen {
          position: absolute;
          left: -9999px;
        }
      `}</style>
    </>
  )
}

export default Switch