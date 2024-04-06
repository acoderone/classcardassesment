import React from "react";
import { ArrowLeftRight, FilePenLine } from "lucide-react";

function bottom() {
  return (
    <div className="bg-gray-100 h-custom2 text-black px-20 py-9 flex gap-10">
      <div className="flex flex-col gap-3 w-1/5">
        <div className="flex gap-2">
          <div className="avatar">
            <div className="w-12 h-12 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div className=" flex flex-col justify-center">
            <div className="font-bold">Suraj Talreja</div>
            <div className="text-sm">surajtalreja@gmail.com</div>
          </div>
          <div className="pt-2 cursor-pointer">
            <svg
              width="10"
              height="16"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.25 11L5 14.75L8.75 11M1.25 5L5 1.25L8.75 5"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className=" cursor-pointer flex justify-center items-center gap-2 bg-white border-2 border-gray-300 rounded-md py-1">
            <ArrowLeftRight size={16} strokeWidth={1.5} />
            Switch organisation
          </div>
          <div className=" cursor-pointer flex justify-center items-center gap-2 bg-white border-2 border-gray-300 rounded-md py-1">
            <FilePenLine size={16} strokeWidth={1.5} />
            Edit profile
          </div>
        </div>
        <div>
          <div className="flex gap-2 items-center px-1 py-2">
            {" "}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 5V1M14 5V1M5 9H15M3 19H17C18.1046 19 19 18.1046 19 17V5C19 3.89543 18.1046 3 17 3H3C1.89543 3 1 3.89543 1 5V17C1 18.1046 1.89543 19 3 19Z"
                stroke="#9CA3AF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            My calendar
          </div>
          <div className="flex gap-2 items-center px-1 py-2 bg-gray-200">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 14L12 19L7.99995 8L19 12L14 14ZM14 14L19 19M6.18818 1.23853L6.96464 4.1363M4.13618 6.96472L1.2384 6.18826M12.9497 3.05029L10.8283 5.17161M5.17158 10.8284L3.05026 12.9497"
                stroke="#9CA3AF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            My bookings
          </div>
          <div className="flex gap-2 items-center px-1 py-2">
            <svg
              width="17"
              height="20"
              viewBox="0 0 17 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 9.5V12M4 9.5V3.5C4 2.67157 4.67157 2 5.5 2C6.32843 2 7 2.67157 7 3.5M4 9.5C4 8.67157 3.32843 8 2.5 8C1.67157 8 1 8.67157 1 9.5V11.5C1 15.6421 4.35786 19 8.5 19C12.6421 19 16 15.6421 16 11.5V6.5C16 5.67157 15.3284 5 14.5 5C13.6716 5 13 5.67157 13 6.5M7 3.5V9M7 3.5V2.5C7 1.67157 7.67157 1 8.5 1C9.32843 1 10 1.67157 10 2.5V3.5M10 3.5V9M10 3.5C10 2.67157 10.6716 2 11.5 2C12.3284 2 13 2.67157 13 3.5V6.5M13 6.5V9"
                stroke="#9CA3AF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Attendance history
          </div>
          <div className="flex gap-2 items-center px-1 py-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.8434 7.65538C12.2053 8.07252 12.8369 8.11726 13.254 7.7553C13.6712 7.39335 13.7159 6.76176 13.354 6.34462L11.8434 7.65538ZM8.15667 12.3446C7.79471 11.9275 7.16313 11.8827 6.74599 12.2447C6.32885 12.6067 6.28411 13.2382 6.64607 13.6554L8.15667 12.3446ZM11 5C11 4.44772 10.5523 4 10 4C9.44771 4 9 4.44772 9 5H11ZM9 15C8.99999 15.5523 9.44769 16 9.99998 16C10.5523 16 11 15.5523 11 15L9 15ZM18 10C18 14.4183 14.4183 18 10 18V20C15.5228 20 20 15.5228 20 10H18ZM10 18C5.58172 18 2 14.4183 2 10H0C0 15.5228 4.47715 20 10 20V18ZM2 10C2 5.58172 5.58172 2 10 2V0C4.47715 0 0 4.47715 0 10H2ZM10 2C14.4183 2 18 5.58172 18 10H20C20 4.47715 15.5228 0 10 0V2ZM10 9C9.34146 9 8.7905 8.82024 8.43338 8.58216C8.06927 8.33942 8 8.1139 8 8H6C6 8.99067 6.6023 9.76515 7.32398 10.2463C8.05265 10.732 9.00168 11 10 11V9ZM8 8C8 7.8861 8.06927 7.66058 8.43338 7.41784C8.7905 7.17976 9.34146 7 10 7V5C9.00168 5 8.05265 5.26796 7.32398 5.75374C6.6023 6.23485 6 7.00933 6 8H8ZM10 7C10.9038 7 11.563 7.33231 11.8434 7.65538L13.354 6.34462C12.5969 5.47209 11.3171 5 10 5V7ZM10 11C10.6585 11 11.2095 11.1798 11.5666 11.4178C11.9308 11.6606 12 11.8861 12 12H14C14 11.0093 13.3977 10.2348 12.676 9.75373C11.9474 9.26796 10.9983 9 10 9V11ZM9 5V6H11V5H9ZM9.00002 14L9 15L11 15L11 14L9.00002 14ZM10 13C9.09625 13 8.43699 12.6677 8.15667 12.3446L6.64607 13.6554C7.40317 14.5279 8.68296 15 10 15L10 13ZM12 12C12 12.1139 11.9308 12.3394 11.5666 12.5822C11.2095 12.8202 10.6586 13 10 13V15C10.9983 15 11.9474 14.732 12.676 14.2463C13.3977 13.7651 14 12.9907 14 12H12ZM9 6L9.00002 14L11 14L11 6L9 6Z"
                fill="#9CA3AF"
              />
            </svg>
            Billing history
          </div>
          <div className="flex gap-2 items-center px-1 py-2">
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 3V13C1 14.1046 1.89543 15 3 15H17C18.1046 15 19 14.1046 19 13V5C19 3.89543 18.1046 3 17 3H11L9 1H3C1.89543 1 1 1.89543 1 3Z"
                stroke="#9CA3AF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            My files
          </div>
          <div className="flex gap-2 items-center px-1 py-2">
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 15C1.89543 15 1 14.1046 1 13V3C1 1.89543 1.89543 1 3 1H7L9 3H13C14.1046 3 15 3.89543 15 5V6M3 15H17C18.1046 15 19 14.1046 19 13V8C19 6.89543 18.1046 6 17 6H7C5.89543 6 5 6.89543 5 8V13C5 14.1046 4.10457 15 3 15Z"
                stroke="#9CA3AF"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            My courses
          </div>
          <div className="flex gap-2 items-center px-1 py-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 17V11C7 9.89543 6.10457 9 5 9H3C1.89543 9 1 9.89543 1 11V17C1 18.1046 1.89543 19 3 19H5C6.10457 19 7 18.1046 7 17ZM7 17V7C7 5.89543 7.89543 5 9 5H11C12.1046 5 13 5.89543 13 7V17M7 17C7 18.1046 7.89543 19 9 19H11C12.1046 19 13 18.1046 13 17M13 17V3C13 1.89543 13.8954 1 15 1H17C18.1046 1 19 1.89543 19 3V17C19 18.1046 18.1046 19 17 19H15C13.8954 19 13 18.1046 13 17Z"
                stroke="#9CA3AF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Grades
          </div>
        </div>
      </div>
      <div className="border-2 border-black w-4/5">right</div>
    </div>
  );
}

export default bottom;
