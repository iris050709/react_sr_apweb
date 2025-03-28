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
import "./App.css";

const App = () => {
    const { users, loading: loadingUsers, addUser, editUser, deleteUserDetails, checkEmailExists, login } = useUsers();
    const { alertas, loading: loadingAlerts, addAlert, editAlert, removeAlert } = useAlerts();
    const { configuraciones, loading: loadingConfig, addConfig, updateConfig, deleteConfig } = useRiegoConfig();
    const { registros, loading: loadingRegistros, addRegistro, editRegistro, removeRegistro } = useRegistrosSensor();
    const { riegos, loading: loadingRiegos, addRiego, editRiego, removeRiego } = useRiegos();
    const { sensores, loading: loadingSensores, addSensor, editSensor, removeSensor } = useSensores();
    const { valvulas, loading: loadingValvulas, addValvula, editValvula, removeValvula } = useValvulas();
    const [editingValvula, setEditingValvula] = useState(null);
    const [editingUser, setEditingUser] = useState(null); 
    const [editingSensor, setEditingSensor] = useState(null);
    const [editingAlert, setEditingAlert] = useState(null);
    const [editingConfig, setEditingConfig] = useState(null);
    const [editingRiego, setEditingRiego] = useState(null);
    const [editingRegistro, setEditingRegistro] = useState(null);

    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const savedSession = localStorage.getItem("loggedIn");
        if (savedSession) {
            setLoggedIn(true); // Restore session if previously logged in
        }
    }, []);

    const handleLogin = (userCredentials) => {
        login(userCredentials.correo, userCredentials.password)
            .then((result) => {
                if (result) {
                    setLoggedIn(true);
                    localStorage.setItem("loggedIn", true); // Store session in localStorage
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
        localStorage.removeItem("loggedIn"); // Remove session from localStorage
    };

    return (
        <div className="container">
            {!loggedIn ? (
                <div className="section">
                    <h1>Login</h1>
                    <LoginForm onLogin={handleLogin} />
                </div>
            ) : (
                <>
                    <div className="section">
                        <h1>Lista de Usuarios</h1>
                        {loadingUsers ? <p className="loading-text">Cargando usuarios...</p> : <UsersList 
                            users={users} 
                            onEdit={(user) => setEditingUser(user)} 
                            onDelete={deleteUserDetails} 
                        />}
                    </div>

                    <div className="section">
                        <h1>Gestión de Usuarios</h1>
                        {editingUser ? (
                            <UserEditForm 
                                user={editingUser} 
                                onUpdate={editUser} 
                                onCancel={() => setEditingUser(null)} 
                            />                
                        ) : (<UserCreateForm onCreate={addUser} checkEmailExists={checkEmailExists}/> 
                        )}
                    </div>

                    <div className="section">
                        <h1>Lista de Alertas</h1>
                        {loadingAlerts ? (
                            <p className="loading-text">Cargando alertas...</p>
                        ) : (
                            <AlertList 
                                alertas={alertas} 
                                onEdit={(alerta) => setEditingAlert(alerta)} 
                                onDelete={removeAlert} 
                            />
                        )}
                    </div>

                    <div className="section">
                        <h1>Gestión de Alertas</h1>
                        {editingAlert ? (
                            <AlertEditForm 
                                alerta={editingAlert} 
                                onUpdate={editAlert} 
                                onCancel={() => setEditingAlert(null)} 
                            />
                        ) : (
                            <AlertCreateForm onCreate={addAlert} />
                        )}
                    </div>

                    <div className="section">
                        <h1>Configuraciones de Riego</h1>
                        {loadingConfig ? (
                            <p className="loading-text">Cargando configuraciones de riego...</p>
                        ) : (
                            <RiegoConfigList
                                configuraciones={configuraciones}
                                onEdit={(config) => setEditingConfig(config)}
                                onDelete={deleteConfig}
                            />
                        )}
                    </div>

                    <div className="section">
                        <h1>Gestión de Configuraciones de Riego</h1>
                        {editingConfig ? (
                            <RiegoConfigEditForm
                                config={editingConfig}
                                onUpdate={updateConfig}
                                onCancel={() => setEditingConfig(null)}
                            />
                        ) : null}
                    </div>

                    <div className="section">
                        <h1>Lista de Registros de Sensores</h1>
                        {loadingRegistros ? (
                            <p className="loading-text">Cargando registros de sensores...</p>
                        ) : (
                            <RegistroSensorList 
                                registros={registros} 
                                onEdit={(registro) => setEditingRegistro(registro)} 
                                onDelete={removeRegistro} 
                            />
                        )}
                    </div>

                    <div className="section">
                        <h1>Gestión de Registros de Sensores</h1>
                        {editingRegistro ? (
                            <RegistroSensorEditForm 
                                registro={editingRegistro} 
                                onUpdate={editRegistro} 
                                onCancel={() => setEditingRegistro(null)} 
                            />
                        ) : (
                            <RegistroSensorCreateForm onCreate={addRegistro} onCancel={() => setEditingRegistro(null)}/>
                        )}
                    </div>

                    <div className="section">
                        <h1>Registros de Riego</h1>
                        {loadingRiegos ? <p className="loading-text">Cargando registros de riego...</p> : <RiegoList 
                            riegos={riegos} 
                            onEdit={(riego) => setEditingRiego(riego)} 
                            onDelete={removeRiego} 
                        />}
                    </div>

                    <div className="section">
                        <h1>Gestión de Riegos</h1>
                        {editingRiego ? (
                            <RiegoEditForm 
                                riego={editingRiego} 
                                onUpdate={editRiego}
                                onCancel={() => setEditingRiego(null)} 
                            />
                        ) : (
                            <RiegoCreateForm onCreate={addRiego} />
                        )}
                    </div>

                    <div className="section">
                        <h1>Lista de Sensores</h1>
                        {loadingSensores ? (
                            <p className="loading-text">Cargando sensores...</p>
                        ) : (
                            <SensorList 
                                sensores={sensores} 
                                onEdit={(sensor) => setEditingSensor(sensor)} 
                                onDelete={removeSensor} 
                            />
                        )}
                    </div>

                    <div className="section">
                        <h1>Gestión de Sensores</h1>
                        {editingSensor ? (
                            <SensorEditForm 
                                sensor={editingSensor} 
                                onUpdate={editSensor} 
                                onCancel={() => setEditingSensor(null)} 
                            />
                        ) : (
                            <SensorCreateForm onCreate={addSensor} />
                        )}
                    </div>

                    <div className="section">
                        <h1>Lista de Valvulas</h1>
                        {loadingValvulas ? (
                            <p className="loading-text">Cargando valvulas...</p>
                        ) : (
                            <ValvulaList 
                                valvulas={valvulas} 
                                onEdit={(valvula) => setEditingValvula(valvula)} 
                                onDelete={removeValvula} 
                            />
                        )}
                    </div>

                    <div className="section">
                        <h1>Gestión de Valvulas</h1>
                        {editingValvula ? (
                            <ValvulaEditForm 
                                valvula={editingValvula} 
                                onUpdate={editValvula} 
                                onCancel={() => setEditingValvula(null)} 
                            />
                        ) : (
                            <ValvulaCreateForm onCreate={addValvula} />
                        )}
                    </div>

                    <center><div className="section">
                        <button onClick={handleLogout} className="logout-button">Cerrar Sesión</button>
                    </div></center>
                </>
            )}
        </div>
    );
};

export default App;
