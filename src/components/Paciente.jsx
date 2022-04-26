import Swal from "sweetalert2";

export const Paciente = ({ nombreMascota, nombrePropietario, email, fecha, sintomas, id, setPaciente, eliminarPaciente }) => {


    const handleEliminar = () => {
        Swal.fire({
            title: 'Estas seguro?',
            text: '!No podrás deshacerlo¡',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#5a67d8',
            cancelButtonColor: '#e53e3e',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                eliminarPaciente(id)
                Swal.fire(
                    'Eliminado',
                    'El paciente ha sido eliminado',
                    'success'
                );
            }
        });
    }

    return (
        <div className="bg-white shadow-md rounded-xl mx-3 mb-3 py-10 px-5">
            <p className="uppercase font-bold mb-3 text-gray-700">
                Nombre: {""}
                <span className="normal-case font-normal">
                    {nombreMascota}
                </span>
            </p>

            <p className="uppercase font-bold mb-3 text-gray-700">
                Propietario: {""}
                <span className="normal-case font-normal">
                    {nombrePropietario}
                </span>
            </p>

            <p className="uppercase font-bold mb-3 text-gray-700">
                Email: {""}
                <span className="normal-case font-normal">
                    {email}
                </span>
            </p>

            <p className="uppercase font-bold mb-3 text-gray-700">
                Fecha Alta: {""}
                <span className="normal-case font-normal">
                    {fecha}
                </span>
            </p>

            <p className="uppercase font-bold mb-3 text-gray-700">
                Sintomas: {""}
                <span className="normal-case font-normal">
                    {sintomas}
                </span>
            </p>

            <div className="flex justify-between mt-5">
                <button
                    type="button"
                    className="bg-indigo-600 text-white uppercase py-2 px-6 rounded-lg hover:bg-indigo-700"
                    onClick={() => setPaciente({ nombreMascota, nombrePropietario, email, fecha, sintomas, id })}
                >
                    Editar
                </button>

                <button
                    type="button"
                    className="bg-red-600 text-white uppercase py-2 px-6 rounded-lg hover:bg-red-700"
                    onClick={handleEliminar}
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default Paciente;