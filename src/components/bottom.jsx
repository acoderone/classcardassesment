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
      <div className="w-4/5 flex flex-col gap-3">
        <div className="text-lg font-semibold">My bookings</div>
        <div className="flex  bg-white border-2 border-gray-200 p-2 rounded-md">
          <div className="bg-gray-200 h-fit p-3 rounded-md">
            <svg
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 3H3C1.89543 3 1 3.89543 1 5V17C1 18.1046 1.89543 19 3 19H13C14.1046 19 15 18.1046 15 17V5C15 3.89543 14.1046 3 13 3H11M5 3C5 4.10457 5.89543 5 7 5H9C10.1046 5 11 4.10457 11 3M5 3C5 1.89543 5.89543 1 7 1H9C10.1046 1 11 1.89543 11 3"
                stroke="#6B7280"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div className="w-full mx-5">
            <div className="flex justify-between">
              <div className="font-semibold">Graphic design (full course)</div>
              <div className="flex gap-2">
                <div className="border-2 border-gray-200 px-3 py-2 rounded-lg flex items-center gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.33334 11.3333L1.33334 12.1667C1.33334 13.5474 2.45263 14.6667 3.83334 14.6667L12.1667 14.6667C13.5474 14.6667 14.6667 13.5474 14.6667 12.1667L14.6667 11.3333M11.3333 8.00001L8.00001 11.3333M8.00001 11.3333L4.66668 8.00001M8.00001 11.3333L8.00001 1.33334"
                      stroke="#111827"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Invoice PDF
                </div>
                <div className="border-2 border-gray-200 px-3 py-2 rounded-lg flex items-center gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.33334 11.3333L1.33334 12.1667C1.33334 13.5474 2.45263 14.6667 3.83334 14.6667L12.1667 14.6667C13.5474 14.6667 14.6667 13.5474 14.6667 12.1667L14.6667 11.3333M11.3333 8.00001L8.00001 11.3333M8.00001 11.3333L4.66668 8.00001M8.00001 11.3333L8.00001 1.33334"
                      stroke="#111827"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Recipt PDF
                </div>
              </div>
            </div>
            <div className="flex gap-7">
              <div>
                <div className="text-gray-500">Subject</div>
                <div className="text-gray-900">
                  Design for intermediates - L1
                </div>
              </div>
              <div>
                <div className="text-gray-500">Sessions</div>
                <div className="text-gray-900">10 sessions</div>
              </div>
              <div>
                <div className="text-gray-500">Invoice</div>
                <div className="text-gray-900">13</div>
              </div>
              <div>
                <div className="text-gray-500">Valid till</div>
                <div className="text-gray-900">Feb 15, 2024 (23 days left)</div>
              </div>
            </div>

            <div className="bg-gray-100 px-5 py-3 rounded-lg flex flex-col gap-3">
              <div>
                <div>
                  Balance <span className="font-semibold">6</span>
                </div>
                <div className="flex gap-2">
                  <svg
                    width="216"
                    height="16"
                    viewBox="0 0 216 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="white"
                    />
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      stroke="#D1D5DB"
                    />
                    <rect
                      x="20.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="white"
                    />
                    <rect
                      x="20.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      stroke="#D1D5DB"
                    />
                    <rect
                      x="40.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="white"
                    />
                    <rect
                      x="40.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      stroke="#D1D5DB"
                    />
                    <rect
                      x="60.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="white"
                    />
                    <rect
                      x="60.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      stroke="#D1D5DB"
                    />
                    <rect
                      x="80.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="white"
                    />
                    <rect
                      x="80.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      stroke="#D1D5DB"
                    />
                    <rect
                      x="100.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="white"
                    />
                    <rect
                      x="100.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      stroke="#D1D5DB"
                    />
                    <rect
                      x="120.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="white"
                    />
                    <rect
                      x="120.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      stroke="#D1D5DB"
                    />
                    <rect
                      x="140.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="white"
                    />
                    <rect
                      x="140.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      stroke="#D1D5DB"
                    />
                    <rect
                      x="160.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="white"
                    />
                    <rect
                      x="160.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      stroke="#D1D5DB"
                    />
                    <rect
                      x="180.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="white"
                    />
                    <rect
                      x="180.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      stroke="#D1D5DB"
                    />
                    <rect
                      x="200.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="white"
                    />
                    <rect
                      x="200.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      stroke="#D1D5DB"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <div>
                  Scheduled <span className="font-semibold">3</span>
                </div>
                <div>
                  <svg
                    width="56"
                    height="16"
                    viewBox="0 0 56 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="#F9FAFB"
                    />
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      stroke="#D1D5DB"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 3.125C5.3075 3.125 3.125 5.3075 3.125 8C3.125 10.6925 5.3075 12.875 8 12.875C10.6925 12.875 12.875 10.6925 12.875 8C12.875 5.3075 10.6925 3.125 8 3.125ZM8.375 5C8.375 4.90054 8.33549 4.80516 8.26516 4.73483C8.19484 4.66451 8.09946 4.625 8 4.625C7.90054 4.625 7.80516 4.66451 7.73484 4.73483C7.66451 4.80516 7.625 4.90054 7.625 5V8C7.625 8.207 7.793 8.375 8 8.375H10.25C10.3495 8.375 10.4448 8.33549 10.5152 8.26516C10.5855 8.19484 10.625 8.09946 10.625 8C10.625 7.90054 10.5855 7.80516 10.5152 7.73484C10.4448 7.66451 10.3495 7.625 10.25 7.625H8.375V5Z"
                      fill="#6B7280"
                    />
                    <rect
                      x="20.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="#F9FAFB"
                    />
                    <rect
                      x="20.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      stroke="#D1D5DB"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M28 3.125C25.3075 3.125 23.125 5.3075 23.125 8C23.125 10.6925 25.3075 12.875 28 12.875C30.6925 12.875 32.875 10.6925 32.875 8C32.875 5.3075 30.6925 3.125 28 3.125ZM28.375 5C28.375 4.90054 28.3355 4.80516 28.2652 4.73483C28.1948 4.66451 28.0995 4.625 28 4.625C27.9005 4.625 27.8052 4.66451 27.7348 4.73483C27.6645 4.80516 27.625 4.90054 27.625 5V8C27.625 8.207 27.793 8.375 28 8.375H30.25C30.3495 8.375 30.4448 8.33549 30.5152 8.26516C30.5855 8.19484 30.625 8.09946 30.625 8C30.625 7.90054 30.5855 7.80516 30.5152 7.73484C30.4448 7.66451 30.3495 7.625 30.25 7.625H28.375V5Z"
                      fill="#6B7280"
                    />
                    <rect
                      x="40.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="#F9FAFB"
                    />
                    <rect
                      x="40.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      stroke="#D1D5DB"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M48 3.125C45.3075 3.125 43.125 5.3075 43.125 8C43.125 10.6925 45.3075 12.875 48 12.875C50.6925 12.875 52.875 10.6925 52.875 8C52.875 5.3075 50.6925 3.125 48 3.125ZM48.375 5C48.375 4.90054 48.3355 4.80516 48.2652 4.73483C48.1948 4.66451 48.0995 4.625 48 4.625C47.9005 4.625 47.8052 4.66451 47.7348 4.73483C47.6645 4.80516 47.625 4.90054 47.625 5V8C47.625 8.207 47.793 8.375 48 8.375H50.25C50.3495 8.375 50.4448 8.33549 50.5152 8.26516C50.5855 8.19484 50.625 8.09946 50.625 8C50.625 7.90054 50.5855 7.80516 50.5152 7.73484C50.4448 7.66451 50.3495 7.625 50.25 7.625H48.375V5Z"
                      fill="#6B7280"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <div className="text-green-500">
                  Attended{" "}
                  <span className="font-semibold text-green-600">5</span>
                </div>
                <div>
                  <svg
                    width="96"
                    height="16"
                    viewBox="0 0 96 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="#D1FAE5"
                    />
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      stroke="#6EE7B7"
                    />
                    <path
                      d="M12.207 4.793C12.3945 4.98053 12.4998 5.23484 12.4998 5.5C12.4998 5.76516 12.3945 6.01947 12.207 6.207L7.207 11.207C7.01947 11.3945 6.76516 11.4998 6.5 11.4998C6.23483 11.4998 5.98052 11.3945 5.793 11.207L3.793 9.207C3.61084 9.0184 3.51004 8.7658 3.51232 8.5036C3.5146 8.2414 3.61977 7.99059 3.80518 7.80518C3.99058 7.61977 4.2414 7.5146 4.50359 7.51233C4.76579 7.51005 5.01839 7.61084 5.20699 7.793L6.5 9.086L10.793 4.793C10.9805 4.60553 11.2348 4.50021 11.5 4.50021C11.7652 4.50021 12.0195 4.60553 12.207 4.793Z"
                      fill="#008638"
                    />
                    <rect
                      x="20.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="#D1FAE5"
                    />
                    <rect
                      x="20.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      stroke="#6EE7B7"
                    />
                    <path
                      d="M32.207 4.793C32.3945 4.98053 32.4998 5.23484 32.4998 5.5C32.4998 5.76516 32.3945 6.01947 32.207 6.207L27.207 11.207C27.0195 11.3945 26.7652 11.4998 26.5 11.4998C26.2348 11.4998 25.9805 11.3945 25.793 11.207L23.793 9.207C23.6108 9.0184 23.51 8.7658 23.5123 8.5036C23.5146 8.2414 23.6198 7.99059 23.8052 7.80518C23.9906 7.61977 24.2414 7.5146 24.5036 7.51233C24.7658 7.51005 25.0184 7.61084 25.207 7.793L26.5 9.086L30.793 4.793C30.9805 4.60553 31.2348 4.50021 31.5 4.50021C31.7652 4.50021 32.0195 4.60553 32.207 4.793Z"
                      fill="#008638"
                    />
                    <rect
                      x="40.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="#D1FAE5"
                    />
                    <rect
                      x="40.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      stroke="#6EE7B7"
                    />
                    <path
                      d="M52.207 4.793C52.3945 4.98053 52.4998 5.23484 52.4998 5.5C52.4998 5.76516 52.3945 6.01947 52.207 6.207L47.207 11.207C47.0195 11.3945 46.7652 11.4998 46.5 11.4998C46.2348 11.4998 45.9805 11.3945 45.793 11.207L43.793 9.207C43.6108 9.0184 43.51 8.7658 43.5123 8.5036C43.5146 8.2414 43.6198 7.99059 43.8052 7.80518C43.9906 7.61977 44.2414 7.5146 44.5036 7.51233C44.7658 7.51005 45.0184 7.61084 45.207 7.793L46.5 9.086L50.793 4.793C50.9805 4.60553 51.2348 4.50021 51.5 4.50021C51.7652 4.50021 52.0195 4.60553 52.207 4.793Z"
                      fill="#008638"
                    />
                    <rect
                      x="60.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="#D1FAE5"
                    />
                    <rect
                      x="60.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      stroke="#6EE7B7"
                    />
                    <path
                      d="M72.207 4.793C72.3945 4.98053 72.4998 5.23484 72.4998 5.5C72.4998 5.76516 72.3945 6.01947 72.207 6.207L67.207 11.207C67.0195 11.3945 66.7652 11.4998 66.5 11.4998C66.2348 11.4998 65.9805 11.3945 65.793 11.207L63.793 9.207C63.6108 9.0184 63.51 8.7658 63.5123 8.5036C63.5146 8.2414 63.6198 7.99059 63.8052 7.80518C63.9906 7.61977 64.2414 7.5146 64.5036 7.51233C64.7658 7.51005 65.0184 7.61084 65.207 7.793L66.5 9.086L70.793 4.793C70.9805 4.60553 71.2348 4.50021 71.5 4.50021C71.7652 4.50021 72.0195 4.60553 72.207 4.793Z"
                      fill="#008638"
                    />
                    <rect
                      x="80.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      fill="#FEE2E2"
                    />
                    <rect
                      x="80.5"
                      y="0.5"
                      width="15"
                      height="15"
                      rx="3.5"
                      stroke="#FCA5A5"
                    />
                    <path
                      d="M85 11L91 5M85 5L91 11"
                      stroke="#B91C1C"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default bottom;
