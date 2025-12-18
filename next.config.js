/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // إعدادات إضافية اختيارية لو عايز
    images: {
        unoptimized: true, // مهم للـ static export، عشان Next.js Image Optimization ما يشتغلش بدون server
    },
};

module.exports = nextConfig;
