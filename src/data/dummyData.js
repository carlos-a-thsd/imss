export function getData() {
  function generarValoresAleatorios(nombres, rangoMinimo, rangoMaximo) {
    return nombres.map((nombre) => {
      const valor = Math.random() * (rangoMaximo - rangoMinimo) + rangoMinimo;
      return { name: nombre, value: Math.floor(valor) };
    });
  }

  const disponibilidad = [
    "Portal Payworks",
    "Emisores",
    "Comercios Digitales",
    "Comercios Físicos",
    "Transacciones Físicas",
    "Transacciones Digitales",
  ];
  const disponibilidadConValores = generarValoresAleatorios(
    disponibilidad,
    1,
    4
  );
  // Switches
  const totalSwitches = 500;

  const switchesActivos = Math.round(Math.random() * totalSwitches);
  const switchesRestantes = totalSwitches - switchesActivos;

  // Nodos
  const totalNodos = 161;

  const nodosActivos = Math.round(Math.random() * totalNodos);
  const nodosRestantes = totalNodos - nodosActivos;

  // Nodos ECS
  const nameNodos = ["dev-ecs-node", "test-ecs-node", "prod-ecs-node"];
  const nodosECS = generarValoresAleatorios(nameNodos, 1, 4);

  // Endpoints
  function endpooints() {
    const formatedComa = (number) => {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    const responseTime = (Math.random() * 100).toFixed(0);
    const solicitudesHTTP = formatedComa(Math.round(Math.random() * 10000));
    const solicitudesJMX = formatedComa(Math.round(Math.random() * 10000));

    return {
      solicitudesHTTP,
      responseTime,
      solicitudesJMX,
    };
  }
  const points = endpooints();

  // Microservicios
  const saludyservicios = [
    "Microservicio 1",
    "Microservicio 2",
    "Microservicio 3",
    "Microservicio 4",
    "Microservicio 5",
    "Microservicio 6",
  ];
  const totalservicios = 70;

  const serviciosActivos = Math.round(Math.random() * totalservicios);
  const serviciosRestantes = totalservicios - serviciosActivos;

  // Retornar los datos
  return {
    saludyservicios: {
      values: [
        {
          proyecto: "Nombre",
          activos: serviciosActivos,
          inactivos: serviciosRestantes,
          total: totalservicios,
        },
        {
          proyecto: "Nombre",
          activos: serviciosActivos,
          inactivos: serviciosRestantes,
          total: totalservicios,
        },
        {
          proyecto: "Nombre",
          activos: serviciosActivos,
          inactivos: serviciosRestantes,
          total: totalservicios,
        },
        {
          proyecto: "Nombre",
          activos: serviciosActivos,
          inactivos: serviciosRestantes,
          total: totalservicios,
        },
        {
          proyecto: "Nombre",
          activos: serviciosActivos,
          inactivos: serviciosRestantes,
          total: totalservicios,
        },
        {
          proyecto: "Nombre",
          activos: serviciosActivos,
          inactivos: serviciosRestantes,
          total: totalservicios,
        },
      ],
    },
    saludyservicios1: {
      values: [
        {
          proyecto: "Nombre 10",
          activos: serviciosActivos,
          inactivos: serviciosRestantes,
          total: totalservicios,
        },
        {
          proyecto: "Nombre",
          activos: serviciosActivos,
          inactivos: serviciosRestantes,
          total: totalservicios,
        },
        {
          proyecto: "Nombre",
          activos: serviciosActivos,
          inactivos: serviciosRestantes,
          total: totalservicios,
        },
        {
          proyecto: "Nombre",
          activos: serviciosActivos,
          inactivos: serviciosRestantes,
          total: totalservicios,
        },
        {
          proyecto: "Nombre",
          activos: serviciosActivos,
          inactivos: serviciosRestantes,
          total: totalservicios,
        },
        {
          proyecto: "Nombre",
          activos: serviciosActivos,
          inactivos: serviciosRestantes,
          total: totalservicios,
        },
      ],
    },

    saludyservicios2: {
      values: [
        {
          proyecto: "Nombre 10",
          activos: serviciosActivos,
          inactivos: serviciosRestantes,
          total: totalservicios,
        },
        {
          proyecto: "Nombre",
          activos: serviciosActivos,
          inactivos: serviciosRestantes,
          total: totalservicios,
        },
        {
          proyecto: "Nombre",
          activos: serviciosActivos,
          inactivos: serviciosRestantes,
          total: totalservicios,
        },
        {
          proyecto: "Nombre",
          activos: serviciosActivos,
          inactivos: serviciosRestantes,
          total: totalservicios,
        },
        {
          proyecto: "Nombre",
          activos: serviciosActivos,
          inactivos: serviciosRestantes,
          total: totalservicios,
        },
        {
          proyecto: "Nombre",
          activos: serviciosActivos,
          inactivos: serviciosRestantes,
          total: totalservicios,
        },
      ],
    },

    saludyservicios3: {
      values: [
        {
          proyecto: "Nombre 10",
          activos: serviciosActivos,
          inactivos: serviciosRestantes,
          total: totalservicios,
        },
        {
          proyecto: "Nombre",
          activos: serviciosActivos,
          inactivos: serviciosRestantes,
          total: totalservicios,
        },
        {
          proyecto: "Nombre",
          activos: serviciosActivos,
          inactivos: serviciosRestantes,
          total: totalservicios,
        },
        {
          proyecto: "Nombre",
          activos: serviciosActivos,
          inactivos: serviciosRestantes,
          total: totalservicios,
        },
        {
          proyecto: "Nombre",
          activos: serviciosActivos,
          inactivos: serviciosRestantes,
          total: totalservicios,
        },
        {
          proyecto: "Nombre",
          activos: serviciosActivos,
          inactivos: serviciosRestantes,
          total: totalservicios,
        },
      ],
    },

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
        { activos: nodosActivos },
        { divider: "/" },
        { total: totalNodos },
        { restante: nodosRestantes },
      ],
    },

    switches: {
      values: [
        { activos: switchesActivos },
        { divider: "/" },
        { total: totalSwitches },
        { restante: switchesRestantes },
      ],
    },

    core: {
      values: [
        { name: "Switch Central", icon: "/Component 8.png" },
        { name: "Switch Nucleo", icon: "/Component 8.png" },
      ],
    },
    disponibilidadConValores,
    nodosECS,
    points,
  };
}
export const data = getData();
