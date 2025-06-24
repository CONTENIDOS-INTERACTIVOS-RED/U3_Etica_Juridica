<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Código disciplinario del abogado'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5.align-items-center
      .col-lg-8
        p El cumplimiento ético en el ejercicio profesional del Derecho es esencial para proteger la integridad del sistema judicial y garantizar la confianza ciudadana.
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/1.svg", alt="")


    .bg-full-width.bg-color-4.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/2.png', alt='')
    
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Código disciplinario del abogado 
            p.mb-4(data-aos="fade-right") En el PDF Código disciplinario del abogado, se analiza la función del derecho disciplinario en la regulación de la conducta profesional, abordando principios rectores, deberes, faltas y sanciones, con el fin de comprender cómo estas normas refuerzan la ética jurídica y aseguran una práctica responsable y transparente.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Código disciplinario del abogado
    

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="http://www.scielo.edu.uy/scielo.php?script=sci_arttext&pid=S2301-06652018000100143" target="_blank" rel="noopener noreferrer") Santana Ramos, E. M. (2018). El rol del abogado ante la ética y el ejercicio profesional. Revista de la Facultad de Derecho, (44), 143-176. 


          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
