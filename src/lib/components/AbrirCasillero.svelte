<script lang="ts">
  import SveltyPicker from "svelty-picker";
  import axios from "axios";
  import { toast } from "@zerodevx/svelte-toast";
  import { page } from "$app/stores";
  import { validateAll } from "$lib/utils";

  let maxDate = new Date();
  let usuario = {
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    nacimiento: "",
    cedula: "",
    sexo: "",
    sucursal: "dorado",

    reset: function () {
      this.nombre = "";
      this.apellido = "";
      this.correo = "";
      this.telefono = "";
      this.nacimiento = "";
      this.cedula = "";
      this.sexo = "";
      this.sucursal = "dorado";
    },
  };

  let registering = false;

  async function crearUsuario(event: Event) {
    registering = true;
    let valid = true;
    valid = validateAll(usuario);
    if (valid) {
      usuario.cedula = usuario.cedula.split(" ").join("");
      axios
        .post("/api/usuarios", { usuario })
        .then(({ data }) => {
          const { status, message } = data;
          toast.push(message, { classes: [status] });
          const form = event.target as HTMLFormElement;
          form.reset();
          usuario.reset();
          registering = false;
        })
        .catch(({ response }) => {
          registering = false;
          const { status, message } = response.data;
          toast.push(message, { classes: [status] });
        });
    } else {
      registering = false;
    }
  }
</script>

<form
  class="card flex-shrink-0 max-w-lg w-full bg-base-100
  text-neutral-focus {$page.url.pathname === '/registrar'
    ? 'my-16'
    : ''} lg:my-0"
  method="POST"
  on:submit|preventDefault={(e) => crearUsuario(e)}
>
  <div class="flex flex-auto flex-col lg:p-8 p-4 gap-2">
    <h1
      class="text-xl md:text-2xl text-center md:text-left font-semibold tracking-wide"
    >
      Abre Tu Casillero
    </h1>
    <div class="form-control w-full">
      <p class="label">
        <span class="label-text">Sucursal</span>
      </p>
      <select
        class="select select-bordered w-full font-medium select-primary"
        bind:value={usuario.sucursal}
        required
      >
        <option selected value="dorado">El Dorado</option>
        <option value="bethania">Bethania</option>
      </select>
    </div>
    <div
      class="join join-vertical lg:join-horizontal gap-5 justify-between mt-4"
    >
      <div class="join-item form-control w-full">
        <input
          type="text"
          placeholder="Nombre"
          class="input input-bordered input-primary w-full"
          bind:value={usuario.nombre}
          required
        />
      </div>
      <div class="join-item form-control w-full">
        <input
          type="text"
          placeholder="Apellido"
          class="input input-bordered input-primary
        w-full"
          bind:value={usuario.apellido}
          required
        />
      </div>
    </div>
    <div class="form-control mt-3 lg:mt-4">
      <input
        type="text"
        placeholder="Correo"
        class="input input-bordered input-primary
        "
        bind:value={usuario.correo}
        required
      />
    </div>
    <div class="form-control mt-3 lg:mt-4">
      <input
        type="text"
        placeholder="Cedula o Pasaporte"
        class="input input-bordered input-primary
        "
        bind:value={usuario.cedula}
        required
      />
    </div>
    <div class="form-control mt-3 lg:mt-4">
      <input
        type="text"
        placeholder="Telefono"
        class="input input-bordered input-primary
        "
        bind:value={usuario.telefono}
        required
      />
    </div>
    <div
      class="join join-vertical lg:join-horizontal gap-2 lg:gap-5 justify-between"
    >
      <div class="join-item form-control">
        <p class="label">
          <span class="label-text">Fecha de Nacimiento</span>
        </p>
        <SveltyPicker
          inputClasses="input input-bordered input-primary"
          format="dd-mm-yyyy"
          placeholder="DD-MM-YYYY"
          todayBtn={false}
          endDate={maxDate}
          required
          bind:value={usuario.nacimiento}
        />
      </div>
      <div class="join-item form-control w-full">
        <p class="label">
          <span class="label-text">Sexo</span>
        </p>
        <select
          class="select select-bordered w-full font-medium select-primary {usuario.sexo ===
          ''
            ? 'text-base-300'
            : ''}"
          bind:value={usuario.sexo}
          required
        >
          <option disabled selected value="">Sexo</option>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
          <option value="otros">Otros</option>
        </select>
      </div>
    </div>
    <div class="form-control mt-6">
      <button type="submit" class="btn btn-primary text-white">
        {#if registering}
          <span class="loading loading-spinner loading-md" />
        {:else}
          Abrir Casillero
        {/if}
      </button>
    </div>
  </div>
</form>
