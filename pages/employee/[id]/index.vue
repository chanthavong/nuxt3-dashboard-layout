<template>
    <div>
        Employee ID {{$route.params}}
    </div>
</template>

<script setup>
    const route = useRoute();
    console.log(route.params)
</script>