import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";


export const App = () => {
    const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);
    const [paciente, setPaciente] = useState({})


    //Cada vez que se ingresa un nuevo paciente se almacena en el localstorage
    useEffect(() => {
        localStorage.setItem('pacientes', JSON.stringify(pacientes));
    }, [pacientes])


    const eliminarPaciente = (id) => {
        const pacientesActualizados = pacientes.filter((paciente) => paciente.id !== id);
        setPacientes(pacientesActualizados);
    }



    return (
        <div className="container mx-auto mt-20">
            <Header />
            <div className="mt-20 mx-10 md:flex">
                <Formulario
                    pacientes={pacientes}
                    setPacientes={setPacientes}
                    paciente={paciente}
                    setPaciente={setPaciente}
                />
                <ListadoPacientes
                    pacientes={pacientes}
                    setPaciente={setPaciente}
                    eliminarPaciente={eliminarPaciente}
                />
            </div>
        </div>

    )
}

export default App;
