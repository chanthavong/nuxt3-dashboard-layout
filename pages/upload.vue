<template>
  <div>
    <span>Upload to Cloudinary</span>
    <input
      type="file"
      accept=".jpeg,.jpg,.png,image/jpeg,image/png"
      aria-label="upload image button"
      @change="selectFile"
    />
  </div>
</template>

<script setup lang="ts">
const selectFile = async (e: any) => {
  const file = e.target.files[0];

  /* Make sure file exists */
  if (!file) return;

  /* create a reader */
  const readData = (f: any) =>
    new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(f);
    });

  /* Read data */
  const data = await readData(file);

  const req = await $fetch("/api/upload", {
    method: "POST",
    body: { file: data },
  });

  console.log(req);
};
</script>

<style scoped></style>
