import { register } from "./actions";

export default function RegisterPage() {
  return (
    <main>
      <h1>Register</h1>

      <form action={register}>
        <input name="email" type="email" placeholder="Email" required />

        <input
          name="password"
          type="password"
          placeholder="Password"
          required
        />

        <button type="submit">Create Account</button>
      </form>
    </main>
  );
}
