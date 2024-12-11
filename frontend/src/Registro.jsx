import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUpExample = () => {
    const [nombre, setName] = useState('');
    const [apellido, setLastName] = useState('');
    const [correo, setEmail] = useState('');
    const [contraseña, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:4000/api/register', {
                nombre,
                apellido,
                correo,
                contraseña,
            });
            navigate('/login'); 
        } catch (error) {
            console.error('Error al registrarse: ', error);
            setError('Hubo un problema al registrar tu cuenta. Intenta nuevamente.');
        }
    };

    return (
        <section className="flex h-screen w-screen fixed z-10">
            <section className="w-full h-full flex justify-center">
                <section className="flex flex-col w-50 p-12">
                    <form onSubmit={handleSignUp} className="mt-24 w-50 bg-black/40 flex flex-col p-4">
                        <h1 className="text-2xl font-bold text-white">Registrarse</h1>
                        <div className="mt-4 flex flex-col self-center">
                            <input
                                className="w-96 bg-zinc-200 p-2 rounded-lg"
                                type="text"
                                name="nombre"
                                id="nombre"
                                placeholder="Nombres"
                                value={nombre}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="mt-4 flex flex-col self-center">
                            <input
                                className="w-96 bg-zinc-200 p-2 rounded-lg"
                                type="text"
                                name="apellido"
                                id="apellido"
                                placeholder="Apellidos"
                                value={apellido}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        <div className="mt-4 flex flex-col self-center">
                            <input
                                className="w-96 bg-zinc-200 p-2 rounded-lg"
                                type="email"
                                name="correo"
                                id="correo"
                                placeholder="Correo"
                                value={correo}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mt-4 mb-4 flex flex-col self-center">
                            <input
                                className="w-96 mb-2 bg-zinc-200 p-2 rounded-lg"
                                type="password"
                                name="contraseña"
                                id="contraseña"
                                placeholder="Contraseña"
                                value={contraseña}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {error && <p className="text-red-500 mt-2">{error}</p>}
                        <div>
                            <button type="submit" className="w-96 bg-green-500 p-2 rounded-lg text-white">
                                Registrarse
                            </button>
                        </div>
                        <section className="flex text-sm justify-center gap-36 mb-4 text-white">
                            <p className="mt-4">¿Ya tienes una cuenta?</p>
                            <Link className="text-green-500 mt-4" to="/login">
                                Inicia sesión
                            </Link>
                        </section>
                    </form>
                </section>
            </section>
        </section>
    );
};

export default SignUpExample;
