<template>
    <div>
        <h1>Login</h1>
        <input type="text" placeholder="Email"/>
        <input type="password" placeholder="Password"/>
        <button>Login</button>
    </div>
</template>

<script lang="ts">
// You might choose this based on an API call or logged-in status
definePageMeta({
  layout: "blank",
});
</script>