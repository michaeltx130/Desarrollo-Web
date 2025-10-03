type HttpClientVerb = "GET" | "POST" | "PUT" | "DELETE";

class HttpClient {
  private url;

  constructor() {
    this.url = "http://localhost:3000/api";
  }

  private getOptions(verb: HttpClientVerb, body?: unknown): RequestInit {
    return {
      method: verb,
      headers: {
        "Content-Type": "application/json",
        Acept: "application/json",
      },
      body: body ? JSON.stringify(body) : null,
    };
  }

  async get(path: string) {
    return fetch(`${this.url}/${path}`, this.getOptions("GET"));
  }

  async post(path: string, data: unknown) {
    return fetch(`${this.url}/${path}`, this.getOptions("POST", data));
  }

  async put(path: string, data: unknown) {
    return fetch(`${this.url}/${path}`, this.getOptions("PUT", data));
  }

  async delete(path: string) {
    return fetch(`${this.url}/${path}`, this.getOptions("DELETE"));
  }
}

export default HttpClient;
