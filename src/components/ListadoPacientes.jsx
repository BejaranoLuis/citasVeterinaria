import Paciente from "./Paciente";


export const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {

    return (
        <div className="md:w-1/2 lg:w-3/5">
            {
                pacientes.length && pacientes ? (
                    <>
                        <h2 className="font-black text-3xl text-center">Listado pacientes</h2>
                        <p className="text-lg mt-5 mb-10 text-center">
                            Administra tus {""}
                            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                        </p>

                        {pacientes.map((paciente) => (
                            <Paciente
                                {...paciente}
                                key={Math.random()}
                                setPaciente={setPaciente}
                                eliminarPaciente={eliminarPaciente}
                            />
                        ))}


                    </>
                ) : (
                    <>
                        <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                        <p className="text-lg mt-5 mb-10 text-center">
                            Comienza agregando pacientes {""}
                            <span className="text-indigo-600 font-bold">y aparecerán en este lugar</span>
                        </p>
                    </>
                )
            }




        </div>
    )
}

export default ListadoPacientes;
