import React, { useState } from "react";
import API from "../services/api";

export default function Register() {
  const [form, setForm] = useState({ username: "", email: "", password: "", confirm: "" });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirm) {
      alert("Passwords do not match");
      return;
    }
    try {
      const res = await API.post("/register", {
        username: form.username,
        email: form.email,
        password: form.password,
      });
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input placeholder="Username" onChange={(e) => setForm({ ...form, username: e.target.value })} />
      <input placeholder="Email" type="email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input placeholder="Password" type="password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <input placeholder="Confirm" type="password" onChange={(e) => setForm({ ...form, confirm: e.target.value })} />
      <button type="submit">Register</button>
    </form>
  );
}
