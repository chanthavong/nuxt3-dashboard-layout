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

          <span class="text-xs font-medium"> 67.81% </span>
        </div>

        <div>
          <strong class="block text-sm font-medium text-gray-500">
            Profit
          </strong>

          <p>
            <span class="text-2xl font-medium text-gray-900"> $240.94 </span>

            <span class="text-xs text-gray-500"> from $404.32 </span>
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

          <span class="text-xs font-medium"> 67.81% </span>
        </div>

        <div>
          <strong class="block text-sm font-medium text-gray-500">
            Profit
          </strong>

          <p>
            <span class="text-2xl font-medium text-gray-900"> $404.32 </span>

            <span class="text-xs text-gray-500"> from $240.94 </span>
          </p>
        </div>
      </article>
    </section>

    <section class="mt-4">
      <h3 class="text-lg text-gray-500">Employees</h3>
      <div class="overflow-x-auto">
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
                24/05/1995
              </td>
              <td class="px-4 py-2 text-gray-700 whitespace-nowrap">
                Web Developer
              </td>
              <td class="px-4 py-2 text-gray-700 whitespace-nowrap">
                $120,000
              </td>
            </tr>

            <tr>
              <td class="px-4 py-2 font-medium whitespace-nowrap">Jane Doe</td>
              <td class="px-4 py-2 text-gray-700 whitespace-nowrap">
                04/11/1980
              </td>
              <td class="px-4 py-2 text-gray-700 whitespace-nowrap">
                Web Designer
              </td>
              <td class="px-4 py-2 text-gray-700 whitespace-nowrap">
                $100,000
              </td>
            </tr>

            <tr>
              <td class="px-4 py-2 font-medium whitespace-nowrap">
                Gary Barlow
              </td>
              <td class="px-4 py-2 text-gray-700 whitespace-nowrap">
                24/05/1995
              </td>
              <td class="px-4 py-2 text-gray-700 whitespace-nowrap">Singer</td>
              <td class="px-4 py-2 text-gray-700 whitespace-nowrap">$20,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>
