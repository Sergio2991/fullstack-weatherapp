const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const signupUser = async (user) => {
  const response = await fetch(`${API_URL}/users/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  return response.json();
};

export const signinUser = async (user) => {
  const response = await fetch(`${API_URL}/users/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  return response.json();
};
