import React, { useState } from "react";
import ImageLogin from "../assets/images/login-mobile.svg";
import ImageLoginDesktop from "../assets/images/restablecerPassword.svg";
import Logo from "../assets/images/logo.svg";
const RestorePassword = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert(username + " " + password);
  }

  function handleChangeUsername(e) {
    setUsername(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }
  return (
    <div className="contenedor md:px-16">
      <div className="hidden md:flex md:justify-center md:py-6 md:border-b-2 md:border-[#DBD8FF] md:h-[120px]">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="flex flex-col justify-between px-5 items-center md:grid md:grid-cols-12 md:gap-[30px] md:p-0 md:py-10">
        <div className="  w-full flex justify-center md:col-span-6 ">
          <img src={ImageLogin} alt="Login" className="md:hidden" />
          <img
            src={ImageLoginDesktop}
            alt="Login"
            className="hidden md:block"
          />
        </div>
        <div className="md:flex md:flex-col md:col-span-6 md:col-start-8 md:col-end-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold mt-10">Restablecer Contraseña</h1>
          </div>
          <div className="w-full mt-10 px-1 ">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col text gap-2 text-[#4D3483] font-semibold">
                <label htmlFor="username">Nueva Contraseña</label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  name="username"
                  onChange={handleChangeUsername}
                  className="font-normal border-solid border-[1px] border-[#DBD8FF] rounded-[10px] py-2.5 px-2 focus:outline-2 focus:outline-[#A954FF]"
                  placeholder="Ingresar correo"
                />
                <label htmlFor="password">Repetir contraseña</label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  name="password"
                  onChange={handleChangePassword}
                  className="font-normal border-solid border-[1px] border-[#DBD8FF] rounded-[10px] py-2.5 px-2 focus:outline-2 focus:outline-[#A954FF]"
                  placeholder="Ingresar contraseña"
                />

                <button
                  type="submit"
                  className="bg-[#7064FF] text-white py-[15px] px-2.5 mt-20"
                >
                  Guardar Contraseña
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestorePassword;