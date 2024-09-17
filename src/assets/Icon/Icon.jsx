import React from 'react'

export const RightArrowIcon = () => {
    return (
      <>
      <svg
      width="31"
      height="17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="svg"
      viewBox="0 0 31 17"
      style={{ height: '17px', width: '31px' }}
    >
      <path
        d="M0 8.2h30M22.2.4L30 8.2 22.2 16"
        stroke="#000"
        strokeMiterlimit="10"
      />
    </svg>
      </>
    )
  }

  export const DownIcon = () => {
    return (
      <>
        <svg
          width="17"
          height="31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="svg" 
          viewBox="0 0 17 30"
          style={{ height: '30px', width: '17px' }} 
        >
          <g clipPath="url(#clip0)" stroke="#fff" strokeMiterlimit="10">
            <path d="M8.8 0v30m7.8-7.8L8.8 30 1 22.2"></path>
          </g>
          <defs>
            <clipPath id="clip0">
              <path fill="#fff" transform="rotate(90 8.5 8.5)" d="M0 0h31v17H0z"></path>
            </clipPath>
          </defs>
        </svg>
      </>
    );
  };
  