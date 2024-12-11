import React from "react"
import { Route, Routes, Link } from "react-router-dom";


function RecoveryPassword2() {
    return (
        <>
            <section className="w-full h-full flex justify-center">
                <div className="mt-40 bg-black/40 p-8 rounded-lg shadow-lg max-w-md w-full fixed justify-center items-center">
                <Link to='/Recuperar'>
                        <button className="text-left  focus:outline-none w-full">
                            <svg
                                className="w-6 h-6 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 19l-7-7 7-7"
                                ></path>
                            </svg>
                        </button>
                    </Link>
                    
                    <h1 className="text-3xl font-bold mb-4 text-center text-white">Recuperar contraseña</h1>
                    <p className="text-center text-white  mb-4">
                        Para proteger su cuenta, ingrese el código de 6 dígitos que acabamos de enviar a su correo electrónico
                    </p>

                    <form>
                        <div className="mb-4">
                            <input
                                placeholder="Código"
                                type="email"
                                id="email"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none sm:text-sm text-center bg-slate-200 rounded-lg"
                            />
                        </div>
                        <div className="flex justify-center items-center text py-2 h-12 border rounded-lg border-green-500">
                            <p className="text-green-500" >Reenviar código</p>
                        </div>
                            <button
                                type="submit"
                                className="rounded-lg font-black my-4 bg-green-500 text-white py-3 px-4 w-full hover:bg-green-800 text-lg mb-2"
                            >
                                Continuar
                            </button>
                    </form>
                </div>
            </section>
            
        </>
    )
}

export default RecoveryPassword2;