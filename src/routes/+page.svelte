<script>
  import Fa from "svelte-fa";
  import {
    faPlaneUp,
    faTruckFast,
    faWarehouse,
    faMapLocationDot,
  } from "@fortawesome/free-solid-svg-icons";
  import AbrirCasillero from "$lib/components/AbrirCasillero.svelte";
  import WorldPng from "$lib/assets/world.png";
  import Contenedor from "$lib/assets/contenedorMorado.png";
  import { goto } from "$app/navigation";

  let services = [
    {
      title: "Carga Aérea",
      icon: faPlaneUp,
      content:
        "Servicio de transporte rápido y seguro de mercancías por avión, ideal para tus compras en linea",
    },
    {
      title: "Delivery Rápido",
      icon: faTruckFast,
      content:
        "Entrega a domicilio en la Ciudad capital, coordinamos la entrega por encomienda al interior del país",
    },
    {
      title: "Base en Miami",
      icon: faWarehouse,
      content:
        "Nuestro depósito estratégicamente ubicado en Miami ofrece almacenamiento seguro y servicios de distribución eficientes para tus pedidos.",
    },
  ];

  const sucursales = [
    {
      nombre: "El Dorado",
      direccion: "Direccion 1, El Dorado",
      maps: "https://maps.google.com",
      telefono: "+507 6666-6666",
    },
    {
      nombre: "Bethania",
      direccion: "Direccion 2, Bethania",
      maps: "https://maps.google.com",
      telefono: "+507 6666-6666",
    },
  ];
</script>

<svelte:head>
  <title>Agencia de Carga Internacional con base en Miami y Panama</title>
</svelte:head>

<div
  class="hero min-h-screen"
  style="background-image: url(https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80);"
>
  <div class="hero-overlay bg-opacity-70" />
  <div class="hero-content text-center text-neutral-content lg:mb-36">
    <div class="max-w-2xl text-white">
      <span class="uppercase font-normal">Compras por internet</span>
      <h1 class="mb-5 text-4xl lg:text-8xl font-semibold">
        Facil Rápido<br />Sencillo
      </h1>
      <p class="mb-5">
        Te facilitamos tus compras por internet de cualquier parte del mundo.
        Compra y recibe tus ordenes en un solo lugar a un precio accessible y
        sin costo adicional.
      </p>
      <button
        class="btn btn-primary text-white"
        on:click={() => goto("/registrar")}>Abre tu Casillero Gratis</button
      >
    </div>
  </div>
</div>

<div class="grid place-items-center relative">
  <div
    class="card w-full max-w-7xl bg-base-100 rounded-none lg:shadow-2xl lg:absolute
    lg:-top-56"
  >
    <div class="card-body grid lg:grid-cols-2 place-items-center p-2 lg:p-8">
      <div class="grid place-items-center">
        <img src={WorldPng} alt="Cajas" class="p-6" />
        <h2 class="md:text-2xl font-semibold max-w-md text-center">
          Recibe tus paquetes de cualquier parte del mundo
        </h2>
      </div>
      <AbrirCasillero />
    </div>
  </div>
</div>

<div
  class="hidden md:card bg-base-100 text-black w-full max-w-7xl
  lg:rounded-none lg:mt-[37rem] mx-auto place-items-center"
>
  <h3 class="text-2xl font-medium mb-10">Lo que te ofrecemos al elegirnos</h3>
  <div class="grid lg:grid-cols-3 gap-x-8 place-items-center">
    {#each services as service}
      <div
        class="text-xl font-medium p-12 text-left shadow-2xl
        max-w-lg h-full"
      >
        <Fa icon={service.icon} class="text-primary text-3xl" />
        <h3 class="mt-6">{service.title}</h3>
        <p class="text-sm font-light">{service.content}</p>
      </div>
    {/each}
  </div>
</div>

<div class="grid place-items-center md:hidden mt-10">
  <h3 class="text-xl font-medium">Lo que te ofrecemos al elegirnos</h3>
  <div class="carousel carousel-center max-w-full p-4 space-x-4 w-full">
    {#each services as service}
      <div
        class="carousel-item text-xl font-medium text-left shadow-lg flex-col items-start w-3/4 p-6"
      >
        <Fa icon={service.icon} class="text-primary" />
        <h3 class="mt-6">{service.title}</h3>
        <p class="text-sm font-light">{service.content}</p>
      </div>
    {/each}
  </div>
</div>

<div class="grid place-items-center lg:mt-24">
  <div class="card w-full max-w-5xl bg-transparent rounded-none">
    <div class="card-body grid lg:grid-cols-2 place-items-center">
      <div class="p-5">
        <h3 class="text-2xl font-semibold mb-5">Precio Único</h3>
        <p>
          Solo te facturamos lo que traes. Con una sola tarifa no te tienes que
          preocupar de nada mas. Consigue tu casillero GRATIS!
        </p>
      </div>
      <div
        class="place-self-start px-5 lg:px-0 lg:text-center lg:place-self-center"
      >
        <h3 class="text-3xl lg:text-5xl font-semibold">$2.75</h3>
        <p>/ libra sin volumen</p>
      </div>
    </div>
  </div>
</div>

<div class="hero bg-base-100">
  <div
    class="hero-content grid md:grid-cols-2 md:my-14 px-6
    place-items-center lg:gap-8"
  >
    <div class="mb-10 mt-6 p-3 order-2 lg:order-1">
      <h1 class="text-3xl font-bold max-w-lg">
        Solución Confiable para Compras en Internet
      </h1>
      <div class="max-w-lg">
        <p class="py-6 text-justify">
          Ofrecemos una solución integral y confiable para tus necesidades de
          compras por internet.
        </p>
        <p class="pb-6 text-justify">
          Nuestro equipo experto se encarga de gestionar eficientemente tus
          envíos, brindando un servicio confiable y seguro en cada etapa del
          proceso.
        </p>
        <p class="mb-12 text-justify">
          Confía en nosotros para una compra fluida y un transporte confiable de
          tus pedidos.
        </p>
      </div>
      <button
        class="btn btn-primary text-white"
        on:click={() => goto("/registrar")}>Abre tu casillero</button
      >
    </div>
    <img
      src={Contenedor}
      class="max-w-md w-full order-1 lg:order-2"
      alt="Bus con paquetes"
    />
  </div>
</div>

<div
  class="hero min-h-[24rem] max-w-7xl mx-auto mt-10"
  style="background-image: url(https://images.unsplash.com/photo-1580160667723-8f98952d1017?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80);"
>
  <div class="hero-overlay bg-opacity-50" />
  <div class="hero-content text-center text-white">
    <div class="max-w-md">
      <h1 class="mb-5 text-4xl lg:text-5xl font-bold">Una vez en Miami</h1>
      <p class="mb-5">Le entregamos su paquete en 48 horas!</p>
      <button
        class="btn btn-primary text-white"
        on:click={() => goto("/registrar")}>Comprar en Linea Ahora</button
      >
    </div>
  </div>
</div>

<div class="max-w-5xl mx-auto my-24">
  <h3 class="text-2xl text-center font-medium mb-8">Preguntas Frecuentes</h3>
  <div class="collapse collapse-arrow bg-base-100">
    <input type="checkbox" name="my-accordion-2" />
    <div class="collapse-title text-xl font-medium">
      Como compro en internet para que me llegue a Panamá?
    </div>
    <div class="collapse-content">
      <p>
        Al abrir tu casillero, te enviaremos un correo con toda la información
        que necesites para hacer tus compras en internet. Tambien tendras la
        dirección de envio en la cual tienes que poner cada vez que compres por
        internet.
      </p>
    </div>
  </div>
  <div class="collapse collapse-arrow bg-base-100">
    <input type="checkbox" name="my-accordion-2" />
    <div class="collapse-title text-xl font-medium">
      No puedo pagar con mi tarjeta, que hago?
    </div>
    <div class="collapse-content">
      <p>
        Con nosotros te ofrecemos comprar tus compras con nuestra tarjeta y nos
        cancelas el pago por transferencia.
      </p>
    </div>
  </div>
  <div class="collapse collapse-arrow bg-base-100">
    <input type="checkbox" name="my-accordion-2" />
    <div class="collapse-title text-xl font-medium">
      Como puedo saber el estado de mis paquetes?
    </div>
    <div class="collapse-content">
      <p>
        Para saber el estado de tus paquetes puedes ir a nuestra sección de <a
          href="/tracking"
          class="underline">tracking</a
        > e introducir el numero de tracking de tus paquetes. Una vez que haya llegado
        a Miami te lo tendremos listo en Panamá dentro de 2 a 3 días hábiles.
      </p>
    </div>
  </div>
</div>

<footer class="p-16 bg-neutral text-white">
  <h3 class="uppercase text-lg text-center font-medium mb-8 tracking-widest">
    Sucursales
  </h3>
  <div class="grid lg:grid-cols-2 place-items-center gap-10 lg:gap-0">
    {#each sucursales as sucursal}
      <div class="text-center max-w-md">
        <h3 class="text-lg font-medium uppercase mb-4 tracking-widest">
          {sucursal.nombre}
        </h3>
        <p class="mb-4">{sucursal.direccion}</p>
        <div class="mb-4">
          <h5 class="font-semibold">Teléfono</h5>
          <p>{sucursal.telefono}</p>
        </div>
        <a role="button" href={sucursal.maps} target="_blank" class="btn"
          ><Fa icon={faMapLocationDot} /> Dirección</a
        >
      </div>
    {/each}
  </div>
</footer>
<footer
  class="footer footer-center border-t border-white p-6 bg-neutral
  text-neutral-content"
>
  <div class="grid grid-flow-col gap-4">
    <a href="/tracking" class="link link-hover">Tracking</a>
    <a href="/registrar" class="link link-hover">Abrir Casillero</a>
  </div>
  <div>
    <p>Copyright © 2023 - Todo los derechos reservados</p>
  </div>
</footer>
