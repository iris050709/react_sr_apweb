import React, { useState, useEffect } from "react";
import useUsers from "./hooks/useUsers";
import UsersList from "./components/User/UsersList"; 
import UserCreateForm from "./components/User/UserCreateForm"; 
import UserEditForm from "./components/User/UserEdit"; 
import LoginForm from "./components/Login";
import useAlerts from "./hooks/useAlerts";
import AlertList from "./components/Alerta/AlertList";
import AlertCreateForm from "./components/Alerta/AlertaCreateForm";
import AlertEditForm from "./components/Alerta/AlertaEdit";
import useRiegoConfig from "./hooks/useRiegoConfig";
import RiegoConfigList from "./components/RiegoConfig/RiegoConfigList";
import RiegoConfigCreateForm from "./components/RiegoConfig/RiegoConfigCreateForm";
import RiegoConfigEditForm from "./components/RiegoConfig/RiegoConfigEdit";
import useRegistrosSensor from "./hooks/useRegistrosSensor";
import RegistroSensorList from "./components/RegistroSensor/RegistroSensorList";
import useRiegos from "./hooks/useRiegos";
import RiegoList from "./components/Riego/RiegoList";
import RiegoCreateForm from "./components/Riego/RiegoCreateForm";
import RiegoEditForm from "./components/Riego/RiegoEdit"; 
import useSensores from "./hooks/useSensores";
import SensorList from "./components/Sensor/SensorList";
import SensorCreateForm from "./components/Sensor/SensorCreateForm";
import SensorEditForm from "./components/Sensor/SensorEdit";
import useValvulas from "./hooks/useValvulas";
import ValvulaList from "./components/Valvula/ValvulaList";
import RegistroSensorCreateForm from "./components/RegistroSensor/RegistroSensorCreateForm";
import RegistroSensorEditForm from "./components/RegistroSensor/RegistroSensorEdit";
import ValvulaCreateForm from "./components/Valvula/ValvulaCreateForm";
import ValvulaEditForm from "./components/Valvula/ValvulaEdit";
import useDatosSensor from "./hooks/useDatosSensor";
import DatosSensorList from "./components/DatosSensor/DatosSensorList";
import DatosSensorEditForm from "./components/DatosSensor/DatosSensorEdit";
import DatosSensorCreateForm from "./components/DatosSensor/DatosSensorCreateForm";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const { users, loading: loadingUsers, addUser, editUser, deleteUserDetails, checkEmailExists, login } = useUsers();
    const { alertas, loading: loadingAlerts, addAlert, editAlert, removeAlert } = useAlerts();
    const { configuraciones, loading: loadingConfig, addConfig, updateConfig, deleteConfig } = useRiegoConfig();
    const { registros, loading: loadingRegistros, addRegistro, editRegistro, removeRegistro } = useRegistrosSensor();
    const { riegos, loading: loadingRiegos, addRiego, editRiego, removeRiego } = useRiegos();
    const { sensores, loading: loadingSensores, addSensor, editSensor, removeSensor } = useSensores();
    const { valvulas, loading: loadingValvulas, addValvula, editValvula, removeValvula } = useValvulas();
    const { datos, loading, addDato, editDato, removeDato } = useDatosSensor();

    const [editingValvula, setEditingValvula] = useState(null);
    const [editingUser, setEditingUser] = useState(null); 
    const [editingSensor, setEditingSensor] = useState(null);
    const [editingAlert, setEditingAlert] = useState(null);
    const [editingConfig, setEditingConfig] = useState(null);
    const [editingRiego, setEditingRiego] = useState(null);
    const [editingRegistro, setEditingRegistro] = useState(null);
    const [editingDato, setEditingDato] = useState(null);

    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const savedSession = localStorage.getItem("loggedIn");
        if (savedSession) {
            setLoggedIn(true);
        }
    }, []);

    const handleLogin = (userCredentials) => {
        login(userCredentials.correo, userCredentials.password)
            .then((result) => {
                if (result) {
                    setLoggedIn(true);
                    localStorage.setItem("loggedIn", true);
                } else {
                    setLoggedIn(false);
                }
            })
            .catch((error) => {
                console.error("Error logging in", error);
                setLoggedIn(false);
            });
    };

    const handleLogout = () => {
        setLoggedIn(false);
        localStorage.removeItem("loggedIn");
    };

    return (
        <div className="container py-4">
            {!loggedIn ? (
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card shadow">
                            <div className="card-body">
                                <h1 className="card-title text-center">Login</h1>
                                <LoginForm onLogin={handleLogin} />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    {/* Usuario */}
                    <Section title="Lista de Usuarios" loading={loadingUsers}>
                        <UsersList users={users} onEdit={setEditingUser} onDelete={deleteUserDetails} />
                    </Section>
                    <Section title="Gestión de Usuarios">
                        {editingUser ? (
                            <UserEditForm user={editingUser} onUpdate={editUser} onCancel={() => setEditingUser(null)} />
                        ) : (
                            <UserCreateForm onCreate={addUser} checkEmailExists={checkEmailExists} />
                        )}
                    </Section>

                    {/* Datos Sensor */}
                    <Section title="Lista de todos los datos" loading={loading}>
                        <DatosSensorList datosSensor={datos} onEdit={setEditingDato} onDelete={removeDato} />
                    </Section>
                    <Section title="Gestión de datos">
                        {editingDato ? (
                            <DatosSensorEditForm dato={editingDato} onUpdate={editDato} onCancel={() => setEditingDato(null)} />
                        ) : (
                            <DatosSensorCreateForm onCreate={addDato} />
                        )}
                    </Section>

                    {/* Alertas */}
                    <Section title="Lista de Alertas" loading={loadingAlerts}>
                        <AlertList alertas={alertas} onEdit={setEditingAlert} onDelete={removeAlert} />
                    </Section>
                    <Section title="Gestión de Alertas">
                        {editingAlert ? (
                            <AlertEditForm alerta={editingAlert} onUpdate={editAlert} onCancel={() => setEditingAlert(null)} />
                        ) : (
                            <AlertCreateForm onCreate={addAlert} />
                        )}
                    </Section>

                    {/* Riego Config */}
                    <Section title="Configuraciones de Riego" loading={loadingConfig}>
                        <RiegoConfigList configuraciones={configuraciones} onEdit={setEditingConfig} onDelete={deleteConfig} />
                    </Section>
                    <Section title="Gestión de Configuraciones de Riego">
                        {editingConfig && (
                            <RiegoConfigEditForm config={editingConfig} onUpdate={updateConfig} onCancel={() => setEditingConfig(null)} />
                        )}
                    </Section>

                    {/* Registro Sensor */}
                    <Section title="Lista de Registros de Sensores" loading={loadingRegistros}>
                        <RegistroSensorList registros={registros} onEdit={setEditingRegistro} onDelete={removeRegistro} />
                    </Section>
                    <Section title="Gestión de Registros de Sensores">
                        {editingRegistro ? (
                            <RegistroSensorEditForm registro={editingRegistro} onUpdate={editRegistro} onCancel={() => setEditingRegistro(null)} />
                        ) : (
                            <RegistroSensorCreateForm onCreate={addRegistro} onCancel={() => setEditingRegistro(null)} />
                        )}
                    </Section>

                    {/* Riegos */}
                    <Section title="Registros de Riego" loading={loadingRiegos}>
                        <RiegoList riegos={riegos} onEdit={setEditingRiego} onDelete={removeRiego} />
                    </Section>
                    <Section title="Gestión de Riegos">
                        {editingRiego ? (
                            <RiegoEditForm riego={editingRiego} onUpdate={editRiego} onCancel={() => setEditingRiego(null)} />
                        ) : (
                            <RiegoCreateForm onCreate={addRiego} />
                        )}
                    </Section>

                    {/* Sensores */}
                    <Section title="Lista de Sensores" loading={loadingSensores}>
                        <SensorList sensores={sensores} onEdit={setEditingSensor} onDelete={removeSensor} />
                    </Section>
                    <Section title="Gestión de Sensores">
                        {editingSensor ? (
                            <SensorEditForm sensor={editingSensor} onUpdate={editSensor} onCancel={() => setEditingSensor(null)} />
                        ) : (
                            <SensorCreateForm onCreate={addSensor} />
                        )}
                    </Section>

                    {/* Válvulas */}
                    <Section title="Lista de Válvulas" loading={loadingValvulas}>
                        <ValvulaList valvulas={valvulas} onEdit={setEditingValvula} onDelete={removeValvula} />
                    </Section>
                    <Section title="Gestión de Válvulas">
                        {editingValvula ? (
                            <ValvulaEditForm valvula={editingValvula} onUpdate={editValvula} onCancel={() => setEditingValvula(null)} />
                        ) : (
                            <ValvulaCreateForm onCreate={addValvula} />
                        )}
                    </Section>

                    <div className="text-center my-4">
                        <button onClick={handleLogout} className="btn btn-success w-100">Cerrar Sesión</button>
                    </div>
                </>
            )}
        </div>
    );
};

// Componente para evitar repetir la estructura Bootstrap
const Section = ({ title, loading, children }) => (
    <div className="mb-4">
        <div className="card shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                {loading ? <p className="text-muted">Cargando...</p> : children}
            </div>
        </div>
    </div>
);

export default App;
