<template>

  <section class="src-components-formulario">
    <div class="jumbotron">

      <h1>Ingrese sus datos</h1>
      <hr>

      <vue-form :state="formState" @submit.prevent="enviar()">
      
        <validate tag="div">
          <label for="nombre">Nombre</label>
          <input 
            type="text" 
            id="nombre" 
            class="form-control" 
            autocomplete="off"
            v-model.trim="$store.state.formData.nombre" 
            name="nombre"
            required
            :minlength="nombreMinLength"
            :maxlength="nombreMaxLength"
            no-espacios
          >
          
          <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="minlength" class="alert alert-danger mt-1">
              Este campo debe poseer al menos {{ nombreMinLength }} caracteres.
            </div>
            <div slot="maxlength" class="alert alert-danger mt-1">
              Este campo no debe poseer mas de {{ nombreMinLength }} caracteres.
            </div>
            <div slot="no-espacios" class="alert alert-danger mt-1">
              Este campo no permite espacios intermedios
            </div>

          </field-messages>
        </validate>
    
        <br>

         <validate tag="div">
          <label for="edad">Edad</label>
          <input 
            type="number" 
            id="edad" 
            class="form-control" 
            autocomplete="off"
            v-model.trim="$store.state.formData.edad" 
            name="edad"
            required
            :min="edadMin"
            :max="edadMax"
          >
          
          <field-messages name="edad" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="min" class="alert alert-danger mt-1">
              La edad mínima debe ser {{ edadMin }} años.
            </div>
            <div slot="max" class="alert alert-danger mt-1">
              La edad máxima debe ser {{ edadMax }} años.
            </div>
          </field-messages>
        </validate>

        <br>

        <validate tag="div">
          <label for="email">Email</label>
          <input 
            type="email" 
            id="email" 
            class="form-control" 
            autocomplete="off"
            v-model.trim="$store.state.formData.email" 
            name="email"
            required
          >
          
          <field-messages name="email" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="email" class="alert alert-danger mt-1">Email no válido</div>
          </field-messages>
        </validate>
        <br>

          <button class="btn btn-success my-3" :disabled="formState.$invalid">Enviar</button>

      </vue-form>

    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-formulario',
    props: [],
    mounted () {

    },
    data () {
      return {
        formState : {},
        formData : this.getInitialData(),
        nombreMinLength : 3,
        nombreMaxLength : 15,
        edadMin: 18,
        edadMax: 120,
        usuarios : [],
        
        url: 'https://63588a5ec26aac906f43e3f7.mockapi.io/usuarios',
       }
    },
    methods: {
      enviar(){
        
        this.$store.dispatch('enviarForm')
        
        this.formData = this.getInicialData()
        this.formState._reset()
      },
      
      getInitialData(){
        return{
          id: null,
          nombre : null,
          edad : null,
          email : null,
         }
      },


    },

 
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-formulario {

  }
</style>
