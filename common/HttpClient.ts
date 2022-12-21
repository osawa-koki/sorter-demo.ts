
const HttpClient = {
  async Get(url: string) {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "text/markdown",
      },
    });
    if (response.ok) {
      return await response.text();
    } else {
      throw new Error(response.statusText);
    }
  },
};

export { HttpClient };
