import { useForm } from "react-hook-form";
import axios from "axios";

export const Contacto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: {
      nombre: "",
      apellido: "",
      email: "",
      motivo: "",
      mensaje: "",
      terminos: false
    }
  });

  const onSubmit = async (data) => {
    try {
      const payload = {
        persona: {
          nombre: data.nombre,
          apellido: data.apellido,
          email: data.email
        },
        motivo: data.motivo,
        mensaje: data.mensaje
      };

      const res = await axios.post("http://127.0.0.1:8000/api/Mensajes/", payload);

      console.log("Mensaje enviado:", res.data);
      alert("Mensaje enviado correctamente!");
      reset();  // limpia el formulario

    } catch (err) {
      console.error("Error al enviar:", err.response?.data || err);
      alert("Error al enviar mensaje. Revisa la consola.");
    }
  };

  return (
    <section className="contacto text-center px-5 py-20 md:mt-12">
      <h2 className="text-dorado font-abhaya text-[4rem] mb-10">Contacto</h2>

      <form
        className="max-w-[400px] mx-auto flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Nombre */}
        <input
          type="text"
          placeholder="Nombre"
          {...register("nombre", { required: "El nombre es obligatorio" })}
          className={`bg-[#1A1A1A] border-0 p-4 rounded-lg text-white text-base font-inherit placeholder:text-[#8B8B8B] ${errors.nombre ? "border border-red-500" : ""}`}
        />
        {errors.nombre && (
          <p role="alert" className="text-red-500 text-sm text-left">{errors.nombre.message}</p>
        )}

        {/* Apellido */}
        <input
          type="text"
          placeholder="Apellido"
          {...register("apellido", { required: "El apellido es obligatorio" })}
          className={`bg-[#1A1A1A] border-0 p-4 rounded-lg text-white text-base font-inherit placeholder:text-[#8B8B8B] ${errors.apellido ? "border border-red-500" : ""}`}
        />
        {errors.apellido && (
          <p role="alert" className="text-red-500 text-sm text-left">{errors.apellido.message}</p>
        )}

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "El email es obligatorio",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Formato de email inválido"
            }
          })}
          className={`bg-[#1A1A1A] border-0 p-4 rounded-lg text-white text-base font-inherit placeholder:text-[#8B8B8B] ${errors.email ? "border border-red-500" : ""}`}
        />
        {errors.email && (
          <p role="alert" className="text-red-500 text-sm text-left">{errors.email.message}</p>
        )}

        {/* Motivo (hardcodeado) */}
        <select
          defaultValue=""
          {...register("motivo", { required: "Seleccioná un motivo" })}
          className={`bg-[#1A1A1A] border-0 p-4 rounded-lg text-base font-inherit text-white ${errors.motivo ? "border border-red-500" : ""}`}
        >
          <option value="" disabled>Seleccioná un motivo</option>
          <option value="Clases">Consulta por clases</option>
          <option value="Conciertos">Conciertos / presentaciones</option>
          <option value="Otros">Otros</option>
        </select>
        {errors.motivo && (
          <p role="alert" className="text-red-500 text-sm text-left">{errors.motivo.message}</p>
        )}

        {/* Mensaje */}
        <textarea
          rows="5"
          placeholder="Mensaje"
          {...register("mensaje", {
            required: "El mensaje es obligatorio",
            minLength: { value: 10, message: "Mínimo 10 caracteres" }
          })}
          className={`bg-[#1A1A1A] border-0 p-4 rounded-lg text-white text-base font-inherit placeholder:text-[#8B8B8B] ${errors.mensaje ? "border border-red-500" : ""}`}
        />
        {errors.mensaje && (
          <p role="alert" className="text-red-500 text-sm text-left">{errors.mensaje.message}</p>
        )}

        {/* Checkbox */}
        <label className="flex items-center gap-2 text-white text-sm">
          <input
            type="checkbox"
            {...register("terminos", { required: "Debes aceptar los términos" })}
            className="w-4 h-4 accent-[#d4af62]"
          />
          Acepto los términos y condiciones
        </label>
        {errors.terminos && (
          <p role="alert" className="text-red-500 text-sm text-left">{errors.terminos.message}</p>
        )}

        {/* Botón */}
        <button
          type="submit"
          className="bg-[#C0A064] hover:bg-[#DBA661] border-0 p-2 rounded-lg cursor-pointer font-['Abhaya_Libre'] text-[1.2rem] font-normal transition hover:font-semibold"
        >
          ENVIAR
        </button>
      </form>
    </section>
  );
};
