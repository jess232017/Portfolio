import React, { useState } from 'react';

//controls'
import axios from "axios";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm as useReactForm } from "react-hook-form";
import { useMediaQuery } from 'react-responsive';

//icons
import { BsFillPersonFill } from 'react-icons/bs';
import { FaLinkedin, FaGithub, FaWhatsapp, FaPhoneAlt as FaPhone, FaEnvelope, FaRegEnvelope } from 'react-icons/fa';

const schema = Yup.object().shape({
    email: Yup.string()
        .email("Correo no valido")
        .required("Debe ingresar su correo"),
    message: Yup.string().required("Debe ingresar su mensaje"),
    name: Yup.string().required("Debe ingresar su nombre")
});

const SocialMedia = () => (
    <div className="wrapper">
        <a href="https://www.linkedin.com/in/jes%C3%BAs-enmanuel-hern%C3%A1ndez-gonz%C3%A1lez-b02788196/" target="_blank" rel="noopener noreferrer">
            <div className="icon linkedin">
                <div className="tooltip">Linkedin</div>
                <FaLinkedin />
            </div>
        </a>

        <a href="https://github.com/jess232017" target="_blank" rel="noopener noreferrer">
            <div className="icon github">
                <div className="tooltip">Github</div>
                <FaGithub />
            </div>
        </a>

        <a href="https://wa.me/+50586793204" target="_blank" rel="noopener noreferrer">
            <div className="icon whatsapp">
                <div className="tooltip">Whatsapp</div>
                <FaWhatsapp />
            </div>
        </a>

        <a href="tel:86793204" target="_blank" rel="noopener noreferrer">
            <div className="icon phone">
                <div className="tooltip">Teléfono</div>
                <FaPhone />
            </div>
        </a>

        <a href="mailto:jess232016@gmail.com" target="_blank" rel="noopener noreferrer">
            <div className="icon email">
                <div className="tooltip">Correo</div>
                <FaRegEnvelope />
            </div>
        </a>
    </div>
)

const Contact = () => {
    const [serverState, setServerState] = useState({
        ok: false,
        msg: "",
        show: false
    });

    const { register, handleSubmit, formState: { errors } } = useReactForm({
        resolver: yupResolver(schema),
    });

    const isTabletOrMobile = useMediaQuery({
        query: '(max-width: 920px)'
    });

    const handleServerResponse = (ok, msg, show = true) => {
        setServerState({ ok, msg, show });
    };

    const onSubmit = (data) => {
        const method = "POST";
        const url = "https://formspree.io/xnqwqkrl";

        axios({ method, url, data })
            .then(response => {
                handleServerResponse(true, "¡Mensaje enviado con éxito!", true);
            })
            .catch(error => {
                handleServerResponse(false, error?.response?.data?.error, true)
            });
    }

    const onReset = () => {
        handleServerResponse(false, '', false);
    }

    return (
        <section id="contacto" className="hero-3" data-spy="true">
            <div className="contenedor">
                <h3 className="title-1">Contáctame</h3>
                <div className="box-shadow">
                    <div className="flex flex-col justify-between	">
                        <p className="text-base text-justify text-gray-500 dark:text-gray-400">
                            <strong className="font-medium text-gray-800 dark:text-white">
                                Siempre estoy interesado en nuevos proyectos y colaboraciones, si tienes alguno en mente o simplemente quieres hablar no dudes en escribirme o enviarme un email.
                            </strong>
                        </p>

                        {!isTabletOrMobile &&
                            <>
                                <svg >
                                    <use xlinkHref={`./img/svg-symbols.svg#developer-activity`} />
                                </svg>
                                <br />
                                <br />
                                <hr />
                                <SocialMedia />
                            </>
                        }
                    </div>

                    <div className="center">
                        <form onSubmit={handleSubmit(onSubmit)} onReset={onReset}>

                            <div className="mb-6">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Nombre:
                                </label>
                                <div className="mt-1">
                                    <div className='relative'>
                                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                            <BsFillPersonFill className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                                        </div>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            {...register("name")}
                                            placeholder="Escriba su nombre aquí."
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        />
                                    </div>
                                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                                        {errors.name?.message}
                                    </p>
                                </div>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Correo:
                                </label>
                                <div className="mt-1">
                                    <div className='relative'>
                                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                                        </div>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            {...register("email")}
                                            placeholder="Escriba su correo aquí."
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        />
                                    </div>
                                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                                        {errors.email?.message}
                                    </p>
                                </div>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Mensaje:</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    defaultValue={""}
                                    {...register("message")}
                                    placeholder="Escriba su mensaje..."
                                    className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                                    {errors.message?.message}
                                </p>
                            </div>
                            {serverState.ok ?
                                <button type="reset" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Reiniciar formulario
                                </button>
                                :
                                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Enviar mensaje
                                </button>
                            }

                        </form>

                        {serverState.show &&
                            <div className={`flex p-4 mt-4 text-sm ${serverState.ok ? 'text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800' : 'text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800'}`} role="alert">
                                <svg className="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                                <div>
                                    <span className="font-medium">{serverState.msg}</span>
                                </div>
                            </div>
                        }
                    </div>

                    {isTabletOrMobile &&
                        <div className='flex flex-col items-center'>
                            <div className="flex items-center my-5 w-full">
                                <div className="ml-10 w-full border-b-2 border-zinc-600 border-solid" />
                                <span className="px-2 text-sm font-bold text-zinc-600">O</span>
                                <div className="mr-10 w-full border-b-2 border-zinc-600 border-solid" />
                            </div>

                            <SocialMedia />
                        </div>
                    }

                </div>
            </div>
        </section>
    );
}
export default Contact;