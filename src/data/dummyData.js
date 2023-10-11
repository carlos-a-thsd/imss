export function getData() {
  return {
    saludyservicios: {
      values: [
        { proyecto: "Nombre", activos: "50", inactivos: "3", total: "53" },
        { proyecto: "Nombre", activos: "20", inactivos: "2", total: "22" },
      ],
    },
    saludyservicios1: {
      values: [
        { proyecto: "Nombre", activos: "50", inactivos: "3", total: "53" },
        { proyecto: "Nombre", activos: "20", inactivos: "2", total: "22" },
      ],
    },
    // Inicio de las cards
    firewalls: {
      values: [
        { name: "FotiGate", icon: "/Component 1.png" },
        { name: "Cisca ASA", icon: "/Component 1.png" },
        { name: "Zyxel", icon: "/Component 1.png" },
        { name: "Barracuda", icon: "/Component 1.png" },
        { name: "Stormshield", icon: "/Component 1.png" },
        { name: "FotiGate", icon: "/Component 1.png" },
      ],
    },

    balanceador: {
      values: [
        { name: "Carga de servicios de red", icon: "/Component 8.png" },
        { name: "Carga de pacientes", icon: "/Component 8.png" },
      ],
    },

    nodo: {
      values: [
        { activos: 151 },
        { divider: "/" },
        { total: 161 },
        { restante: 10 },
      ],
    },

    switches: {
      values: [
        { activos: 5 },
        { divider: "/" },
        { total: 10 },
        { restante: 5 },
      ],
    },

    core: {
      values: [
        { name: "Switch Central", icon: "/Component 8.png" },
        { name: "Switch Nucleo", icon: "/Component 8.png" },
      ],
    },

    nodoECS: {
      values: [
        { name: "dev-ecs-node", color: "#5DD39E" },
        { name: "test-ecs-node", color: "#c7d35d" },
        { name: "prod-ecs-node", color: "#5DD39E" },
      ],
    },
  };
}
export const data = getData();
