<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'5. La acción disciplinaria'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      .bg-color-4.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema5/1.png', alt='')
          .col-lg
            .p-4
              p.mb-0(data-aos="fade-up") La acción disciplinaria es uno de los pilares del derecho disciplinario. Se trata del mecanismo a través del cual el Estado, a través de sus órganos competentes, o los entes privados con potestad sancionadora (como los colegios profesionales), ejercen su capacidad de investigar, juzgar y sancionar las faltas cometidas por quienes están sometidos a un determinado régimen disciplinario. Esta acción tiene como finalidad garantizar el correcto funcionamiento de las instituciones, preservar la ética profesional y proteger los intereses públicos confiados a los funcionarios o profesionales.



      #t_5_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 5.1] Concepto y naturaleza jurídica de la acción disciplinaria


      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-4 La acción disciplinaria puede definirse como el poder jurídico conferido a una autoridad competente para investigar, acusar y sancionar a un sujeto que, en el marco de una relación funcional o profesional, ha cometido una falta disciplinaria. Esta acción se traduce en un proceso disciplinario, con sus etapas y garantías, orientado a establecer la responsabilidad y, de ser el caso, imponer una sanción.
      
          .bg-color-1.p-4(data-aos="fade-left")
            .row.align-items-start.mb-4
              .col-lg-auto
                img(src="@/assets/curso/tema5/2.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Desde el punto de vista jurídico, la acción disciplinaria, se inscribe dentro del derecho sancionador, que comparte rasgos con el derecho penal, pero también tiene particularidades. 
      
            .row.align-items-start.mb-4
              .col-lg-auto
                img(src="@/assets/curso/tema5/3.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 A diferencia del proceso penal, que protege bienes jurídicos fundamentales (vida, libertad, integridad), el derecho disciplinario se enfoca en el correcto comportamiento de quienes ejercen funciones públicas o profesiones regladas, garantizando el cumplimiento de deberes específicos.


            .row.align-items-start.mb-4
              .col-lg-auto
                img(src="@/assets/curso/tema5/4.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 De manera más específica, Henao y Rincón (2022), señalan que, en la legislación colombiana, la acción disciplinaria es un proceso que trata el comportamiento relacionado de los servidores públicos que no cumplen con los estándares esperados.
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema5/5.png", data-aos="zoom-in")


      p.mb-5 La acción disciplinaria no tiene un carácter meramente punitivo. Su naturaleza es también preventiva, correctiva y ética: busca mantener la confianza pública en las instituciones, corregir comportamientos desviados y reafirmar los valores esenciales del servicio o profesión involucrada.


      #t_5_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 5.2] Características esenciales de la acción disciplinaria

      p La acción disciplinaria presenta una serie de rasgos distintivos que la configuran y la diferencian de otras formas de acción jurídica:

      .bg-full-width.bg-color-info.mb-5
        .p-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-10
              ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema5/info1.png', alt='', style="max-width: 907px;").mx-auto
      
                .bg-color-white.box-shadow.p-3(x="8.3%" y="68%" numero="+")
                  h5 Pública
                  p Salvo en ciertos regímenes privados (como el disciplinario universitario o colegial), la acción disciplinaria es ejercida por el Estado, como titular del interés general.
      
                .bg-color-white.box-shadow.p-3(x="12.5%" y="25.5%" numero="+")
                  h5 Oficiosa
                  p En la mayoría de los sistemas disciplinarios, esta acción no depende de la denuncia de un particular, sino que puede iniciarse de oficio, por la autoridad competente.
      
                .bg-color-white.box-shadow.p-3(x="43.8%" y="4%" numero="+")
                  h5 Autónoma
                  p La acción disciplinaria no depende necesariamente de procesos penales o civiles. Puede coexistir con ellos, pero tiene su propia lógica y finalidades.
      
                .bg-color-white.box-shadow.p-3(x="86%" y="25.5%" numero="+")
                  h5 Formal
                  p Su ejercicio requiere el cumplimiento de un procedimiento reglado, con garantías procesales mínimas (debido proceso, contradicción, defensa).
      
                .bg-color-white.box-shadow.p-3(x="91.7%" y="68%" numero="+")
                  h5 Limitada en el tiempo
                  p Está sujeta a términos de prescripción, tanto para su iniciación como para la ejecución de las sanciones.

      #t_5_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 5.3] Principios rectores de la acción disciplinaria

      p.mb-5 El procedimiento disciplinario está regido por un conjunto de principios constitucionales, éticos y procesales, entre los que se destacan en la Ley 1123 del 2007 en el Libro Tercero, Título I:


      .bg-full-width.bg-fondo-5
        .px-4.px-md-5.pb-md-3
          .row.justify-content-center.mb-5

            .col-lg-4
              figure
                img(src='@/assets/curso/tema5/6.png', alt='')
            .col-lg-8
      
              SlyderF(columnas="col-12 col-lg-6").mb-4
                .bg-color-white.p-4.h-100.shadow-app.bordes
                  img(src='@/assets/curso/tema5/7.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Celeridad
                  p.text-center Impulso oficioso de la actuación disciplinaria y cumplimiento de los términos.
                .bg-color-white.p-4.h-100.shadow-app.bordes
                  img(src='@/assets/curso/tema5/8.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Eficiencia
                  p.text-center Diligencia en la investigación.
                .bg-color-white.p-4.h-100.shadow-app.bordes
                  img(src='@/assets/curso/tema5/9.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Lealtad
                  p.text-center Quienes intervienen en la acción disciplinaria deben obrar con lealtad y buena fe.
                .bg-color-white.p-4.h-100.shadow-app.bordes
                  img(src='@/assets/curso/tema5/10.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Motivación
                  p.text-center Las decisiones tendrán que estar motivadas.
                .bg-color-white.p-4.h-100.shadow-app.bordes
                  img(src='@/assets/curso/tema5/11.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Doble instancia
                  p.text-center Toda sentencia y providencia tendrá segunda instancia.
                .bg-color-white.p-4.h-100.shadow-app.bordes
                  img(src='@/assets/curso/tema5/12.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Publicidad
                  p.text-center Conocimiento por parte de los intervinientes.
                .bg-color-white.p-4.h-100.shadow-app.bordes
                  img(src='@/assets/curso/tema5/13.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Oralidad
                  p.text-center Actuación procesal oral que contará con medios técnicos que garanticen la agilidad y la fidelidad.
                .bg-color-white.p-4.h-100.shadow-app.bordes
                  img(src='@/assets/curso/tema5/14.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Contradicción
                  p.text-center Derecho a presentar pruebas y controvertirlas.


          #t_5_4.titulo-segundo(data-aos="flip-up")
            h2 #[span 5.4] Sujetos en la acción disciplinaria


      p En el marco de la acción disciplinaria intervienen diversos sujetos, con funciones específicas:

      .row.align-items-start.mb-5
        .col-lg-8
      
          AcordionA(tipo="b")
            .div(titulo="El sujeto disciplinable")
              p Es la persona sometida a un régimen disciplinario por su condición funcional (como un servidor público) o profesional (como un abogado o médico). Su vínculo con la entidad o profesión le impone deberes especiales.
      
            .div(titulo="El titular de la acción disciplinaria")
              p Es el ente que tiene la competencia legal para iniciar el proceso. En la función pública, suele ser la Procuraduría, la Personería, o el órgano de control interno. En profesiones, es el tribunal o consejo de disciplina del colegio profesional.
      
            .div(titulo="El denunciante o quejoso")
              p Aunque no siempre es necesario, en muchos casos el proceso se inicia por la denuncia de un tercero afectado o testigo.
      
            .div(titulo="El defensor o apoderado")
              p Toda persona investigada tiene derecho a ser asistida por un abogado, sea de confianza o de oficio.

            .div(titulo="El juez disciplinario")
              p Es quien toma la decisión final sobre la responsabilidad y la eventual sanción
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema5/15.png", alt="").mb-4.mb-lg-0


      #t_5_5.titulo-segundo(data-aos="flip-up")
        h2 #[span 5.5] Requisitos y procedencia de la acción disciplinaria


      .bg-color-4.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema5/16.svg', alt='')
          .col-lg
            .p-4
              p.mb-4(data-aos="fade-up")  La acción disciplinaria procede cuando se dan ciertos requisitos fundamentales:

              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Existencia de una conducta disciplinariamente relevante (típica, antijurídica y culpable).
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Que el sujeto esté vinculado al régimen disciplinario al momento de los hechos.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Que no haya operado una causal de exclusión de la responsabilidad.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Que la acción no haya prescrito ni haya operado una causal de extinción.

              p Cumplidos estos requisitos, la autoridad competente debe iniciar el proceso, de manera oficiosa o a partir de una denuncia.

      #t_5_6.titulo-segundo(data-aos="flip-up")
        h2 #[span 5.6] Oportunidad y límites de la acción disciplinaria

      p El ejercicio de la acción disciplinaria no puede ser arbitrario ni indefinido en el tiempo. Existen límites legales que garantizan la seguridad jurídica y evitan abusos.

      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema5/slide-1.png")
              .col-lg-7.order-lg-1
                h5 Prescripción
                p Es el límite temporal para iniciar o continuar la acción. Su término varía, según la legislación y la gravedad de la falta, pero en general, si transcurre un cierto tiempo desde la comisión de la falta sin que se haya iniciado el proceso, se pierde la facultad sancionadora.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema5/slide-2.png")
              .col-lg-7.order-lg-1
                h5 Extinción de la acción
                p Además de la prescripción, la acción puede extinguirse por muerte del investigado, amnistía, conciliación (en algunos casos), o pérdida de investidura funcional.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema5/slide-3.png")
              .col-lg-7.order-lg-1
                h5 Caducidad procesal
                p En ciertos sistemas, si no se cumplen determinados actos dentro de plazos razonables (como la formulación de cargos), puede extinguirse la acción por caducidad.


      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema5/17.png", data-aos="zoom-in")
        .col-lg-8
          p(data-aos="fade-left").mb-4 Estos límites no solo son garantías procesales, sino expresiones de principios éticos: sancionar sin oportunidad, sin pruebas, o fuera de tiempo, sería un ejercicio abusivo del poder.
      
          .bg-color-4.p-4(data-aos="fade-left")
            p.mb-4 #[strong En el código del abogado (2007): ]
            p.mb-4 #[strong El Capítulo IV del Título II, establece que: ]
            ul.lista-ul.mb-3
              li
                i.lista-ul__vineta
                | La acción disciplinaria podrá iniciar de oficio.
              li
                i.lista-ul__vineta
                | La sala deberá examinar la procedencia de la acción y determinar si hay mérito o no para abrir el proceso disciplinario.
              li
                i.lista-ul__vineta
                | La información que contenga datos falsos o temerarios, inhibirán el inicio del proceso.


      #t_5_7.titulo-segundo(data-aos="flip-up")
        h2 #[span 5.7] Dimensión ética de la acción disciplinaria


      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-4 La acción disciplinaria, además de su función jurídica, tiene una dimensión profundamente ética. No se trata solo de castigar, sino de preservar los valores fundamentales que orientan la función pública o profesional.
      
          .bg-color-2.p-4(data-aos="fade-left").mb-4
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema5/18.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 En el caso de los abogados, por ejemplo, la acción disciplinaria no solo garantiza el cumplimiento de normas técnicas (como la diligencia en la gestión de un proceso), sino que protege valores como la lealtad, la veracidad, la confidencialidad y la justicia. El proceso disciplinario debe reflejar un equilibrio entre el Derecho del profesional a ejercer su labor con autonomía y el deber de no defraudar la confianza de los ciudadanos.
      
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema5/19.png", data-aos="zoom-in")


      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema5/20.png", data-aos="zoom-in")
        .col-lg-8

          p(data-aos="fade-left").mb-4 Desde esta perspectiva, la acción disciplinaria debe ser entendida como una herramienta ética de autorregulación institucional, que promueve la mejora continua, desalienta prácticas indebidas y refuerza el compromiso con el bien común.
      
          .bg-color-1.p-4(data-aos="fade-left").mb-4
            p.mb-0 La acción disciplinaria constituye una de las expresiones más importantes del compromiso institucional con la integridad, la ética y la responsabilidad. No se trata de una forma de control inquisitivo ni de una herramienta de persecución, sino de un instrumento de garantía para la ciudadanía y para la dignidad del propio sujeto disciplinado, quien tiene derecho a una investigación justa, racional y respetuosa.

          p(data-aos="fade-left").mb-4 Su adecuado ejercicio requiere rigor normativo, imparcialidad, conocimiento técnico y sensibilidad ética. Solo así puede cumplir su verdadero objetivo: no castigar por castigar, sino proteger los fines esenciales del derecho, del servicio público y del ejercicio profesional.
      
      

      
      
      .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad                
            <Actividad :cuestionario="cuestionario"/>

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="http://www.corteidh.or.cr/tablas/r34545.pdf" target="_blank" rel="noopener noreferrer") Álvarez, P. & Ramírez, M. L. (2015). El principio non bis idem en el derecho disciplinario del abogado en Colombia. Revista Ius et Praxis, 21(1), 345–376. 
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22962" target="_blank" rel="noopener noreferrer") Ley 1123 del 2007. Por la cual se establece el código disciplinario del abogado. Enero 22 de 2007. 
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=cmH9K20X2pc" target="_blank" rel="noopener noreferrer")  Procuraduría General de la Nación. (2024). Procuradora ordena acciones disciplinarias ante crisis por nuevo modelos de salud para maestros 
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
      


</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema5',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de los siguientes enunciados describe mejor el objetivo del Código Disciplinario del Abogado en Colombia?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Establecer sanciones penales para delitos cometidos por abogados.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Garantizar el cumplimiento de las normas civiles por parte de los abogados.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Regular la conducta ética y profesional del abogado en el ejercicio de su labor.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto:
                  'Sustituir las funciones de los jueces en procesos disciplinarios.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              'Una conducta sancionable disciplinariamente se caracteriza por ser:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Un delito penal cometido por un servidor público.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Una falta administrativa cometida por un juez.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Una conducta socialmente reprobable pero legal.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Un acto u omisión que infringe los deberes éticos y legales del abogado.',
                esCorrecta: true,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Cuál de las siguientes NO es una causal de exclusión de responsabilidad disciplinaria?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Fuerza mayor o caso fortuito.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Ignorancia de la ley disciplinaria.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Legítima defensa.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Obediencia debida en ciertos casos.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Qué característica tiene la acción disciplinaria según el ordenamiento colombiano?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Solo puede ser ejercida por la víctima del acto disciplinario.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Tiene naturaleza penal y requiere acusación fiscal.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Es pública, autónoma e independiente de otras acciones.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto:
                  'Se extingue automáticamente por el arrepentimiento del abogado.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué determina la modalidad de la conducta sancionable en el derecho disciplinario?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'El tipo de cliente afectado.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'La forma en que se ejecuta la conducta (dolo, culpa, omisión, etc.).',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'La cantidad de procesos que tiene el abogado.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'La duración del proceso disciplinario.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
