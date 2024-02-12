<template>
  <div class="flex flex-col">
    <div class="sd:p-6 flex gap-5 justify-between items-center w-full">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="17"
          viewBox="0 0 22 17"
          fill="none"
        >
          <path
            d="M20.371 2.87494L1.63042 2.87494C1.28557 2.87494 1.00576 2.45491 1.00578 1.93747C1.00581 1.41995 1.28571 1 1.6305 1L20.3711 1C20.716 1 20.9958 1.42003 20.9957 1.93747C20.9957 2.45491 20.7158 2.87494 20.371 2.87494Z"
            fill="#303030"
            stroke="white"
            stroke-width="0.2"
          />
          <path
            d="M1.63038 7.5625L20.371 7.5625C20.7158 7.5625 20.9956 7.98253 20.9956 8.49997C20.9956 9.0174 20.7157 9.43743 20.3709 9.43743L1.6303 9.43743C1.28546 9.43743 1.00564 9.0174 1.00567 8.49997C1.00569 7.98253 1.28554 7.5625 1.63038 7.5625Z"
            fill="#303030"
            stroke="white"
            stroke-width="0.2"
          />
          <path
            d="M1.63075 14.125L14.1243 14.125C14.4691 14.125 14.7488 14.545 14.7486 15.0625C14.7484 15.58 14.4684 15.9999 14.1236 15.9999L1.63005 15.9999C1.28522 15.9999 1.00555 15.5799 1.00574 15.0625C1.00588 14.545 1.28591 14.125 1.63075 14.125Z"
            fill="#303030"
            stroke="white"
            stroke-width="0.2"
          />
        </svg>
      </div>
      <div class="flex gap-1.5 text-base text-primary items-center">
        <span><img src="../assets/Vector1.png" alt="" class="h-8 w-8" /> </span>
        <span>Wp-notes</span>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <g clip-path="url(#clip0_357_13)">
            <path
              d="M9.06238 15.625C12.6867 15.625 15.6249 12.6869 15.6249 9.0625C15.6249 5.43813 12.6867 2.5 9.06238 2.5C5.43801 2.5 2.49988 5.43813 2.49988 9.0625C2.49988 12.6869 5.43801 15.625 9.06238 15.625Z"
              stroke="#303030"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.7025 13.7031L17.4994 17.5"
              stroke="#303030"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_357_13">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
    <div>
      <Sidemenu />
    </div>
  </div>
</template>
<script setup>
import Sidemenu from "./Sidemenu.vue";
</script>
