import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  const allowedMimeTypes = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/gif",
    "image/webp",
    "image/avif",
    "image/bmp",
    "image/svg+xml",
  ];

  const allowedExtensions = [
    ".jpg",
    ".jpeg",
    ".png",
    ".gif",
    ".webp",
    ".bmp",
    ".svg",
  ];

  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    const ext = file.originalname
      .toLowerCase()
      .substring(file.originalname.lastIndexOf("."));
    if (allowedExtensions.includes(ext)) {
      cb(null, true);
    } else {
      cb(
        new Error(
          `Only image files are allowed. Received: ${file.mimetype || "unknown type"}`,
        ),
      );
    }
  }
};

export const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
  fileFilter: fileFilter,
});

export const uploadToCloudinary = async (
  fileBuffer,
  folder = "products",
  options = {},
) => {
  try {
    const base64String = `data:image/jpeg;base64,${fileBuffer.toString("base64")}`;

    const result = await cloudinary.uploader.upload(base64String, {
      folder: folder,
      ...options,
    });

    return {
      url: result.secure_url,
      publicId: result.public_id,
      width: result.width,
      height: result.height,
      format: result.format,
      bytes: result.bytes,
    };
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    throw new Error(`Failed to upload image: ${error.message}`);
  }
};

export const deleteFromCloudinary = async (publicId) => {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    return result;
  } catch (error) {
    console.error("Cloudinary delete error:", error);
    throw new Error(`Failed to delete image: ${error.message}`);
  }
};

// with the multer-storage-cloudinary package,

// export const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: "productImages",
//     allowed_formats: ["jpg", "jpeg", "png", "webp"],
//     transformation: [
//       {
//         width: 800,
//         crop: "limit",
//         quality: "auto",
//       },
//     ],
//   },
// });

// export const upload = multer({
//   storage,
//   limits: {
//     fileSize: 5 * 1024 * 1024,
//   },
// });

// export const deleteFromCloudinary = async (publicId) => {
//   try {
//     return await cloudinary.uploader.destroy(publicId);
//   } catch (error) {
//     throw new Error("Failed to delete image");
//   }
// };
