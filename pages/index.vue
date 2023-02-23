<template>
  <div>
    <section class="grid grid-cols-1 mt-10 gap-4 md:grid-cols-2">
      <article>
        <nav
          class="bg-blue-500 bg-gradient-to-r from-cyan-500 to-blue-500 p-4 text-center text-white font-bold rounded-lg"
        >
          <h2 class="text-2xl">Hello, Mark</h2>
          <img src="" alt="" />
        </nav>

        <nav class="mt-10">
          <h4 class="text-gray-700">Overview:</h4>
          <ul class="mt-6 flex justify-between">
            <li class="flex flex-col gap-2">
              <span class="text-gray-500">Current month:</span>
              <span class="text-3xl text-gray-700 font-extrabold">+729$</span>
            </li>
            <li class="flex flex-col gap-2">
              <span class="text-gray-500">Total Balance:</span>
              <span class="text-3xl text-gray-700 font-extrabold">+51213$</span>
            </li>
            <li class="flex flex-col gap-2">
              <span class="text-gray-500">Current month:</span>
              <span class="text-3xl text-gray-700 font-extrabold">-372$</span>
            </li>
          </ul>
        </nav>

        <nav class="mt-6">
          <h4 class="text-gray-700">Fast Transaction:</h4>
          <ul class="mt-3 flex gap-10">
            <li class="flex flex-col items-center gap-2">
              <button
                class="w-14 h-14 bg-blue-400 rounded-full items-center flex translate justify-center text-white shadow-lg hover:scale-110"
              >
                <Icon size="2rem">
                  <AccessTime20Regular />
                </Icon>
              </button>
              <span class="text-gray-500">Mobile</span>
            </li>
            <li class="flex flex-col items-center gap-2">
              <button
                class="w-14 h-14 bg-indigo-400 rounded-full items-center flex translate justify-center text-white shadow-lg hover:scale-110"
              >
                <Icon size="2rem">
                  <AccessTime20Regular />
                </Icon>
              </button>
              <span class="text-gray-500">Mobile</span>
            </li>
            <li class="flex flex-col items-center gap-2">
              <button
                class="w-14 h-14 bg-indigo-400 rounded-full items-center flex translate justify-center text-white shadow-lg hover:scale-110"
              >
                <Icon size="2rem">
                  <AccessTime20Regular />
                </Icon>
              </button>
              <span class="text-gray-500">Mobile</span>
            </li>
          </ul>
        </nav>
      </article>
      <article>
        <v-chart class="chart h-60 w-full" :option="option" autoresize />
      </article>
    </section>

    <section class="grid grid-cols-1 mt-10 gap-4 md:grid-cols-2">
      <article>
        <h2 class="text-gray-500">Recent transaction</h2>
        <ul class="flex flex-col mt-4 w-full divide-y">
          <li
            class="flex gap-2 w-full py-2"
            v-for="(item, index) in 3"
            :key="index"
          >
            <span class="w-10 flex items-center">
              <Icon size="1.5rem" color="gray">
                <Home24Filled />
              </Icon>
            </span>
            <nav class="flex w-full justify-between">
              <div class="flex item flex-col">
                <h3 class="text-base text-gray-800">Emirates</h3>
                <small class="text-gray-500">Transports</small>
              </div>
              <div class="flex justify-end flex-col text-right">
                <h3 class="text-base text-gray-800">-600$</h3>
                <small class="text-gray-500">Yesterday</small>
              </div>
            </nav>
          </li>
        </ul>
      </article>
      <article>
        <h2 class="text-gray-500 mb-4">Balance history:</h2>
        <v-chart class="chart h-60" :option="optionLine" autoresize />
      </article>
    </section>
  </div>
</template>

<script lang="ts" setup>
import {
  AccessibilityCheckmark20Filled,
  Home24Filled,
  ArrowSort16Regular,
  ArrowTrendingLines24Filled,
  Person20Regular,
  Search12Regular,
  Alert16Regular,
  AccessTime20Regular,
} from "@vicons/fluent";
import { Icon } from "@vicons/utils";

import { use, ECharts } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart, LineChart } from "echarts/charts";
import { ref, provide } from "vue";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import * as echarts from "echarts";

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  LineChart,
  GridComponent,
]);

provide(THEME_KEY, "light");

const { appTitle } = useApp();
appTitle.value = "Dashboard";

const option = ref({
  title: {
    text: "Traffic Sources",
    left: "center",
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)",
    itemStyle: {
      shadowBlur: 20,
      shadowOffsetX: 0,
      shadowColor: "rgba(0, 0, 0, 0.5)",
    },
  },
  legend: {
    orient: "vertical",
    left: "right",
    top: 40,
    data: ["Direct", "Email", "Ad Networks", "Video Ads", "Search Engines"],
    itemWidth: 14,
    itemStyle: {
      shadowBlur: 6,
      shadowOffsetX: 0,
      shadowOffsetY: 2,
      shadowColor: "rgba(0, 0, 0, 0.2)",
      fontSize: 18,
    },
  },
  series: [
    {
      name: "Traffic Sources",
      type: "pie",
      radius: ["50%", "70%"],
      avoidLabelOverlap: false,
      data: [
        { value: 335, name: "Direct" },
        { value: 310, name: "Email" },
        { value: 234, name: "Ad Networks" },
        { value: 135, name: "Video Ads" },
        { value: 1548, name: "Search Engines" },
      ],
      itemStyle: {
        shadowBlur: 6,
        shadowOffsetX: 0,
        shadowColor: "rgba(0, 0, 0, 0.3)",
      },
      label: {
        show: false,
        position: "center",
      },
      labelLinee: {
        show: false,
      },
      emphasis: {
        label: {
          show: true,
        },
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.2)",
          fontSize: 18,
        },
      },
    },
  ],
});

const optionLine = ref({
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    axisLine: { show: false },
    axisTick: { show: false },
    splitLine: { show: false },
    spitLine: { show: false },
  },
  legend: {
    top: "bottom",
  },
  yAxis: {
    type: "value",
    axisLine: { show: false },
    axisTick: { show: false },
    splitLine: { show: false },
    spitLine: { show: false },
  },
  grid: {
    left: "1%",
    right: "2%",
    bottom: "3%",
    top: "5%",
    containLabel: true,
  },
  series: [
    {
      data: [20, 932, 501, 934, 290, 1330, 1320],
      type: "line",
      smooth: true,
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "rgba(1,163,255,0.3)",
          },
          {
            offset: 1,
            color: "rgba(1,163,255,0.0001)",
          },
        ]),
      },
      lineStyle: {
        showdowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 6,
        shadowColor: "rgba(1,163,255,0.07)",
      },
    },
  ],
});
</script>
