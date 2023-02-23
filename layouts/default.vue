<template>
  <div class="flex h-screen gap-4">
    <aside class="w-20">
      <nav class="flex flex-col items-center py-4 gap-4">
        <span class="mb-10">
          <Icon size="2rem" color="#577ad9">
            <AccessibilityCheckmark20Filled />
          </Icon>
        </span>
        <nuxt-link
          v-for="(item, index) in menuItems"
          :key="index"
          class="w-full flex items-center justify-center border-l-4"
          leave-class="border-l-transparent"
          :to="item.to"
          active-class="text-blue-600 border-l-4 border-blue-600"
        >
          <Icon size="1.5rem" :class="item.iconClass">
            <component :is="item.icon"></component>
          </Icon>
        </nuxt-link>
      </nav>
    </aside>
    <main class="w-full px-4">
      <nav class="my-4 flex justify-between items-center">
        <h1 class="font-bold text-xl">{{ appTitle }}</h1>
        <ul class="flex items-center gap-2">
          <li>
            <Icon size="1rem">
              <Search12Regular />
            </Icon>
          </li>
          <li>
            <Icon size="1rem">
              <Alert16Regular />
            </Icon>
          </li>
        </ul>
      </nav>
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import {
  AccessibilityCheckmark20Filled,
  Home24Filled,
  ArrowSort16Regular,
  ArrowTrendingLines24Filled,
  Person20Regular,
  Search12Regular,
  Alert16Regular,
} from "@vicons/fluent";
import { Icon } from "@vicons/utils";

const { appTitle } = useApp();

const menuItems = [
  { to: "/", icon: Home24Filled, iconClass: "" },
  { to: "/transaction", icon: ArrowSort16Regular, iconClass: "rotate-90" },
  { to: "/report", icon: ArrowTrendingLines24Filled, iconClass: "" },
  { to: "/account", icon: Person20Regular, iconClass: "" },
];
</script>
