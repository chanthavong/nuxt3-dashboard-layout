<template>
  <div class="p-4">
    <h2 class="text-lg text-gray-500">Dashboard</h2>

    <section class="grid md:grid-cols-4 gap-4 mt-4">
      <article
        class="flex flex-col gap-4 p-6 bg-white border border-gray-100 rounded-lg"
      >
        <div
          class="inline-flex self-end gap-2 p-1 text-red-600 bg-red-100 rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
            />
          </svg>

          <span class="text-xs font-medium"> {{ formatNumber(67.81) }}% </span>
        </div>

        <div>
          <strong class="block text-sm font-medium text-gray-500">
            Profit
          </strong>

          <p>
            <span class="text-2xl font-medium text-gray-900">
              {{ formatCurrency(240.94) }}
            </span>

            <span class="text-xs text-gray-500">
              from {{ formatCurrency(404.32) }}
            </span>
          </p>
        </div>
      </article>

      <article
        class="flex flex-col gap-4 p-6 bg-white border border-gray-100 rounded-lg"
      >
        <div
          class="inline-flex self-end gap-2 p-1 text-green-600 bg-green-100 rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>

          <span class="text-xs font-medium"> {{ formatNumber(67.81) }}% </span>
        </div>

        <div>
          <strong class="block text-sm font-medium text-gray-500">
            Profit
          </strong>

          <p>
            <span class="text-2xl font-medium text-gray-900">
              {{ formatCurrency(404.32) }}
            </span>

            <span class="text-xs text-gray-500">
              from {{ formatCurrency(240.94) }}
            </span>
          </p>
        </div>
      </article>
    </section>

    <section class="mt-4">
      <h3 class="text-lg text-gray-500 py-2">Employees</h3>
      <div class="overflow-x-auto border rounded-md">
        <table class="min-w-full text-sm divide-y-2 divide-gray-200">
          <thead>
            <tr>
              <th
                class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap"
              >
                Name
              </th>
              <th
                class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap"
              >
                Date of Birth
              </th>
              <th
                class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap"
              >
                Role
              </th>
              <th
                class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap"
              >
                Salary
              </th>
            </tr>
          </thead>

          <tbody class="divide-y divide-gray-200">
            <tr>
              <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                <nuxt-link to="/employee/1"> John Doe</nuxt-link>
              </td>
              <td class="px-4 py-2 text-gray-700 whitespace-nowrap">
                {{ formatDate(new Date()) }}
              </td>
              <td class="px-4 py-2 text-gray-700 whitespace-nowrap">
                Web Developer
              </td>
              <td class="px-4 py-2 text-gray-700 whitespace-nowrap">
                {{ formatCurrency(1200000) }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts"></script>
