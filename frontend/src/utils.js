async function send(endpoint, method, body, header = "application/json") {
  const response = await fetch(`http://localhost:3000${endpoint}`, {
    method,
    credentials: "include",
    headers: {
      "Content-Type": header,
    },
    body: JSON.stringify(body),
  });
  const data = await (method === "GET" ? response.json() : response.json());
  return data;
}  

export const api = {
  get: (endpoint) => send(endpoint, "GET"),
  post: (endpoint, body) => send(endpoint, "POST", body),
};
