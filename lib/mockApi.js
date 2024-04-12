export async function authenticate(email, password) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (email === "john@grandshipper.com" && password === "password") {
        return resolve({
          accessToken: "mock-access-token",
          refreshToken: "mock-refresh-token",
          expireAt: Date.now() + 1000 * 60 * 60 * 24 * 7,
        });
      }

      resolve()
    }, 100);
  });
}
