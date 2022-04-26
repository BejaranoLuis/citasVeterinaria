import { useState, useEffect } from "react";
import Error from "./Error";

export const Formulario = ({ pacientes, setPacientes, paciente, setPaciente}) => {
    const [nombreMascota, setNombreMascota] = useState('');
    const [nombrePropietario, setNombrePropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false)

    useEffect(() => {
        //(error) && console.log('MOSTRANDO MSG DE ERROR');

        if (Object.keys(paciente).length != 0) {
            const { nombreMascota, nombrePropietario, email, fecha, sintomas } = paciente;

            setNombreMascota(nombreMascota);
            setNombrePropietario(nombrePropietario);
            setEmail(email);
            setFecha(fecha);
            setSintomas(sintomas);
        }

    }, [error, paciente])



    const handleSubmit = (e) => {
        e.preventDefault();

        if ([nombreMascota, nombrePropietario, email, fecha, sintomas].includes('')) {
            setError(true);
            return;
        }

        setError(false);

        const objetoPaciente = {
            nombreMascota,
            nombrePropietario,
            email,
            fecha,
            sintomas
        }

        if(paciente.id){
            objetoPaciente.id = paciente.id;            
            const pacientesActualizados = pacientes.map((pacienteState) => pacienteState.id === objetoPaciente.id ? objetoPaciente : pacienteState);
            setPacientes(pacientesActualizados);
            setPaciente({});
        }else{
            objetoPaciente.id = Math.random();
            setPacientes([objetoPaciente, ...pacientes]);
        }

        

        setNombreMascota('');
        setNombrePropietario('');
        setEmail('');
        setFecha('');
        setSintomas('');

    }



    return (
        <div className='md:w-1/2 lg:w-2/5'>

            <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>

            <p className='text-lg mt-5 mb-10 text-center'>
                Añade Pacientes y {""}
                <span className='text-indigo-600 font-bold'>Administralos</span>
            </p>
            <form
                onSubmit={handleSubmit}
                className='bg-white shadow-md rounded-lg py-10 px-5'
            >
                <div className='mb-5'>
                    {error && <Error msgError="Todos los campos son obligatorios" />}

                    <label htmlFor="mascota" className='block text-gray-700 uppercase font-bold'>
                        Nombre Mascota
                    </label>

                    <input
                        id='mascota'
                        type="text"
                        placeholder='Nombre de la Mascota'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={nombreMascota}
                        onChange={(e) => setNombreMascota(e.target.value)}
                    />
                </div>

                <div className='mb-5'>
                    <label htmlFor="propietario" className='block text-gray-700 uppercase font-bold'>
                        Nombre Propietario
                    </label>

                    <input
                        id='propietario'
                        type="text"
                        placeholder='Nombre del Propietario'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={nombrePropietario}
                        onChange={(e) => setNombrePropietario(e.target.value)}
                    />
                </div>

                <div className='mb-5'>
                    <label htmlFor="email" className='block text-gray-700 uppercase font-bold'>
                        Email
                    </label>

                    <input
                        id='email'
                        type="email"
                        placeholder='Email Contacto Propietario'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className='mb-5'>
                    <label htmlFor="alta" className='block text-gray-700 uppercase font-bold'>
                        Alta
                    </label>

                    <input
                        id='alta'
                        type="date"
                        placeholder='Email Contacto Propietario'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />
                </div>

                <div className='mb-5'>
                    <label htmlFor="sintomas" className='block text-gray-700 uppercase font-bold'>
                        Síntomas
                    </label>

                    <textarea
                        id='sintomas'
                        placeholder='Describe los Síntomas'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    />
                </div>

                <div className='mb-5'>
                    <input
                        type='submit'
                        value={paciente.id ? 'Guardar Cambios' : 'Agregar Paciente'}
                        className='bg-indigo-600 text-indigo-50 w-full p-2 rounded-md hover:bg-indigo-700 hover:cursor-pointer
                        transition-colors'
                    />
                </div>
            </form>
        </div>
    )
}

export default Formulario;
