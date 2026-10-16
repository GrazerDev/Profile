export default {
  async fetch(request, env, ctx) {
    const html = String.raw`
    <!-- PASTE YOUR ENTIRE ORIGINAL HTML CODE HERE -->
    `;

    return new Response(html, {
      headers: {
        "content-type": "text/html;charset=UTF-8",
      },
    });
  },
};
