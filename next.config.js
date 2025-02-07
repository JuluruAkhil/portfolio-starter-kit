// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: "/resume",
        destination: "/Akhil_Juluru_Resume.pdf",
        permanent: true,
      },
    ]
  },
}
