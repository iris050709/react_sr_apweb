import React from "react";
import useUsers from "./hooks/useUsers";
import UsersList from "./components/UsersList";
import useAlerts from "./hooks/useAlerts";
import AlertList from "./components/AlertList";
import useRiegoConfig from "./hooks/useRiegoConfig";
import RiegoConfigList from "./components/RiegoConfigList";
import useRegistrosSensor from "./hooks/useRegistrosSensor";
import RegistroSensorList from "./components/RegistroSensorList";
import useRiegos from "./hooks/useRiegos";
import RiegoList from "./components/RiegoList";
import useSensores from "./hooks/useSensores";
import SensorList from "./components/SensorList";
import useValvulas from "./hooks/useValvulas";
import ValvulaList from "./components/ValvulaList";
import "./App.css";

const App = () => {
    const { users, loading: loadingUsers } = useUsers();
    const { alertas, loading: loadingAlerts } = useAlerts();
    const { configuraciones, loading: loadingConfig } = useRiegoConfig();
    const { registros, loading: loadingRegistros } = useRegistrosSensor();
    const { riegos, loading: loadingRiegos } = useRiegos();
    const { sensores, loading: loadingSensores } = useSensores();
    const { valvulas, loading: loadingValvulas } = useValvulas();

    return (
        <div className="container">
            <div className="section">
                <h1>Lista de Usuarios</h1>
                {loadingUsers ? <p className="loading-text">Cargando usuarios...</p> : <UsersList users={users} />}
            </div>

            <div className="section">
                <h1>Lista de Alertas</h1>
                {loadingAlerts ? <p className="loading-text">Cargando alertas...</p> : <AlertList alertas={alertas} />}
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
                {loadingSensores ? <p className="loading-text">Cargando sensores...</p> : <SensorList sensores={sensores} />}
            </div>

            <div className="section">
                <h1>Lista de Válvulas</h1>
                {loadingValvulas ? <p className="loading-text">Cargando válvulas...</p> : <ValvulaList valvulas={valvulas} />}
            </div>
        </div>
    );
};

export default App;
