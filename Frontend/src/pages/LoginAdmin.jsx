import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

export function LoginAdmin() {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      username: "",
      password: ""
    }
  });

  const onSubmit = async (data) => {
    setLoginError("");
    try {
      const API = import.meta.env.VITE_API_URL;

      const res = await axios.post(`${API}/api/token-admin/`, {
        username: data.username,
        password: data.password,
      });

      localStorage.setItem("accessToken", res.data.access);
      localStorage.setItem("refreshToken", res.data.refresh);

      navigate("/admin/mensajes");
    } catch (err) {
      console.error(err.response?.data || err);
      setLoginError("Credenciales inválidas o usuario no es admin");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <section className="login-admin text-center px-5 py-20">
        <h2 className="text-dorado font-abhaya text-[3rem] mb-10">
          Login Admin
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-[400px] mx-auto flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Usuario"
            {...register("username", { required: "El usuario es obligatorio" })}
            className={`bg-[#1A1A1A] border-0 p-4 rounded-lg text-white text-base font-inherit placeholder:text-[#8B8B8B] ${errors.username ? "border border-red-500" : ""}`}
          />
          {errors.username && (
            <p role="alert" className="text-red-500 text-sm text-left">{errors.username.message}</p>
          )}

          <input
            type="password"
            placeholder="Contraseña"
            {...register("password", { required: "La contraseña es obligatoria" })}
            className={`bg-[#1A1A1A] border-0 p-4 rounded-lg text-white text-base font-inherit placeholder:text-[#8B8B8B] ${errors.password ? "border border-red-500" : ""}`}
          />
          {errors.password && (
            <p role="alert" className="text-red-500 text-sm text-left">{errors.password.message}</p>
          )}

          {loginError && (
            <p role="alert" className="text-red-500 text-sm text-left">{loginError}</p>
          )}

          <button
            type="submit"
            className="text-black bg-[#C0A064] hover:bg-[#DBA661] border-0 p-2 rounded-lg cursor-pointer font-['Abhaya_Libre'] text-[1.2rem] font-normal transition hover:font-semibold"
          >
            INGRESAR
          </button>
        </form>
      </section>
    </div>
  );
}
