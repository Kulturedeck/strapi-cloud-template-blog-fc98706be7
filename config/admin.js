module.exports = {
  preview: {
    enabled: true,
    config: {
      allowedOrigins: ['http://localhost:3000'],
      async handler(uid, { documentId, locale, status }) {
        const entry = await strapi.documents(uid).findOne({
          documentId,
        });

        if (!entry) return null;

        const path = entry.slug
          ? `/posts/${entry.slug}`
          : '/';

        return `http://localhost:3000/api/preview?slug=${path}&secret=MY_SECRET`;
      },
    },
  },
};
