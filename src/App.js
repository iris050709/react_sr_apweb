import React, { useState } from "react";
import useUsers from "./hooks/useUsers";
import UsersList from "./components/User/UsersList";
import useAlerts from "./hooks/useAlerts";
import AlertList from "./components/Alerta/AlertList";
import AlertCreateForm from "./components/Alerta/AlertaCreateForm";
import AlertEditForm from "./components/Alerta/AlertaEdit";
import useRiegoConfig from "./hooks/useRiegoConfig";
import RiegoConfigList from "./components/RiegoConfig/RiegoConfigList";
import useRegistrosSensor from "./hooks/useRegistrosSensor";
import RegistroSensorList from "./components/RegistroSensor/RegistroSensorList";
import useRiegos from "./hooks/useRiegos";
import RiegoList from "./components/Riego/RiegoList";
import useSensores from "./hooks/useSensores";
import SensorList from "./components/Sensor/SensorList";
import SensorCreateForm from "./components/Sensor/SensorCreateForm";
import SensorEditForm from "./components/Sensor/SensorEdit";
import useValvulas from "./hooks/useValvulas";
import ValvulaList from "./components/Valvula/ValvulaList";
import "./App.css";

const App = () => {
    const { users, loading: loadingUsers } = useUsers();
    const { alertas, loading: loadingAlerts, addAlert, editAlert, removeAlert } = useAlerts();
    const { configuraciones, loading: loadingConfig } = useRiegoConfig();
    const { registros, loading: loadingRegistros } = useRegistrosSensor();
    const { riegos, loading: loadingRiegos } = useRiegos();
    const { sensores, loading: loadingSensores, addSensor, editSensor, removeSensor } = useSensores();
    const { valvulas, loading: loadingValvulas } = useValvulas();

    const [editingSensor, setEditingSensor] = useState(null);
    const [editingAlert, setEditingAlert] = useState(null);

    return (
        <div className="container">
            <div className="section">
                <h1>Lista de Usuarios</h1>
                {loadingUsers ? <p className="loading-text">Cargando usuarios...</p> : <UsersList users={users} />}
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
                {loadingConfig ? <p className="loading-text">Cargando configuraciones...</p> : <RiegoConfigList configuraciones={configuraciones} />}
            </div>

            <div className="section">
                <h1>Registros de Sensores</h1>
                {loadingRegistros ? <p className="loading-text">Cargando registros...</p> : <RegistroSensorList registros={registros} />}
            </div>

            <div className="section">
                <h1>Registros de Riego</h1>
                {loadingRiegos ? <p className="loading-text">Cargando registros...</p> : <RiegoList riegos={riegos} />}
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
                <h1>Lista de Válvulas</h1>
                {loadingValvulas ? <p className="loading-text">Cargando válvulas...</p> : <ValvulaList valvulas={valvulas} />}
            </div>
        </div>
    );
};

export default App;