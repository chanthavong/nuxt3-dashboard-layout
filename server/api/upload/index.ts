import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.NUXT_ENV_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const sdkUpload = cloudinary.v2;

export default defineEventHandler(async (event) => {
  if (event.node.req.method === "GET") {
    return "get";
  }
  if (event.node.req.method === "POST") {
    const body = await readBody(event);

    const uploadOptions = {
      resource_type: "image",
      folder: "nuxtjs-image-upload-analysis",
      quality_analysis: true,
    };
    const req = await sdkUpload.uploader.upload(body.file, {
      folder: "product",
      resource_type: "image",
      quality_analysis: true,
    });
    // create a blog
    return { ...req };
  }
});
