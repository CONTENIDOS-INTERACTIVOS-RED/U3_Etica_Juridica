<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'4. Causales de exclusión'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      .row.mb-5
        .col-lg-8
          .bg-color-1.p-4.mb-4(data-aos="fade-left")
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema4/1.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 El derecho disciplinario, como manifestación del poder sancionador del Estado o de los entes colegiados, no puede operar de forma ilimitada ni arbitraria. Por ello, junto con la descripción de las conductas sancionables, los códigos disciplinarios también establecen un conjunto de causales de exclusión de responsabilidad, que permiten declarar la inexistencia de falta disciplinaria aun cuando, en apariencia, se haya realizado una conducta típica. Estas causales cumplen una función garantista y ética: protegen al sujeto disciplinado cuando, por razones objetivas o subjetivas, no se le puede reprochar válidamente su conducta.
      
          p(data-aos="fade-left").mb-4 En otras palabras, aunque una persona haya ejecutado una acción u omisión que se ajusta a una falta disciplinaria, no siempre será sancionable. El análisis debe considerar el contexto, la voluntad del sujeto, las circunstancias externas y otros elementos que puedan excluir su responsabilidad. Así, el derecho disciplinario no se limita a aplicar mecánicamente las normas, sino que exige una valoración integral, ponderada y justa del comportamiento.

          p Estas normas están definidas en el Título II, Artículo 22 del Capítulo V de la Ley 1123 del 2007:
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema4/2.png", data-aos="zoom-in")


      .bg-color-4.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema4/3.svg', alt='')
          .col-lg
            .p-4
              ul.lista-ul--color.color-dark.mb-4
                li.mb-1
                  i.fas.fa-arrow-circle-right
                  | Se obre en circunstancias de fuerza mayor o caso fortuito.
                li.mb-1
                  i.fas.fa-arrow-circle-right
                  | Se obre en estricto cumplimiento de un deber constitucional o legal de mayor importancia que el sacrificado.
                li.mb-1
                  i.fas.fa-arrow-circle-right
                  | Se obre en legítimo ejercicio de un derecho o de una actividad lícita.
                li.mb-1
                  i.fas.fa-arrow-circle-right
                  | Se obre para salvar un derecho propio o ajeno al cual deba ceder el cumplimiento del deber, en razón de la necesidad, adecuación, proporcionalidad y razonabilidad.
                li.mb-1
                  i.fas.fa-arrow-circle-right
                  | Se obre por insuperable coacción ajena o miedo insuperable.
                li.mb-1
                  i.fas.fa-arrow-circle-right
                  | Se obre con la convicción errada e invencible de que su conducta no constituye falta disciplinaria.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Se actúe en situación de inimputabilidad.

      p En detalle, estas normas pueden ser explicadas:

      .row.align-items-start.mb-5
        .col-lg-8
      
          AcordionA(tipo="b")
            .div(titulo="Fuerza mayor o caso fortuito")
              p Una de las causales más clásicas de exclusión de responsabilidad es la ocurrencia de una fuerza mayor o caso fortuito. Se trata de eventos externos, imprevisibles e irresistibles que impiden al sujeto cumplir con sus deberes disciplinarios.
              p Por ejemplo, si un abogado no asiste a una audiencia porque sufre un accidente de tránsito inesperado de camino al juzgado, no puede ser sancionado por incumplimiento. Su voluntad no estaba dirigida a faltar, y el evento que lo impidió estaba completamente fuera de su control.
              p Desde una perspectiva ética, esta causal reconoce que no se puede exigir lo imposible y que la responsabilidad requiere cierto grado de control sobre la conducta. Obligar a alguien a responder por lo que no pudo evitar sería injusto y desproporcionado.

      
            .div(titulo="Obediencia debida")
              p Esta causal opera cuando el sujeto actúa en cumplimiento de una orden legítima, emanada de una autoridad competente, en el marco de una relación de subordinación. En estos casos, se presume que el subordinado actuó sin autonomía para decidir, y que la responsabilidad recae sobre quien impartió la orden.
              p No obstante, esta causal tiene límites importantes: si la orden es manifiestamente ilegal, injusta o contraria a los principios éticos fundamentales, el subordinado tiene el deber de desobedecerla. De lo contrario, puede ser sancionado por haber colaborado en una conducta irregular.
              p Por tanto, la obediencia debida no es una excusa automática: debe analizarse si el sujeto tenía medios para conocer la ilegalidad de la orden, y si podía resistirse razonablemente. En el contexto jurídico, por ejemplo, un auxiliar que acata una orden de ocultar pruebas puede ser responsable si debía saber que tal instrucción violaba la Ley.

      
            .div(titulo="Error invencible de hecho o de derecho")
              p El error invencible, ya sea de hecho o de derecho, excluye la responsabilidad disciplinaria cuando el sujeto incurre en una conducta indebida por una creencia equivocada pero insuperable, es decir, que no podía corregir con los medios a su disposición.

              ul.lista-ul.mb-4.ps-4
                li
                  i.lista-ul__vineta
                  | El error de hecho, se refiere a una falsa apreciación sobre las circunstancias reales. Por ejemplo, si un abogado cree que una audiencia fue reprogramada porque así se lo informaron por error desde el juzgado, su inasistencia no es reprochable disciplinariamente.
                li
                  i.lista-ul__vineta
                  | El error de derecho, ocurre cuando el sujeto interpreta erróneamente una norma jurídica. Esta causal solo aplica si el error era razonable, dada la ambigüedad normativa o la falta de claridad en la reglamentación.

              p Esta exclusión tiene un fuerte componente ético, pues reconoce que el reproche disciplinario requiere que el sujeto haya tenido conciencia de la irregularidad de su conducta. Nadie puede ser sancionado por ignorancia si esta no le era imputable.

      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema4/4.png", alt="").mb-4.mb-lg-0

      .row.align-items-start.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema4/5.png", alt="").mb-4.mb-lg-0
        .col-lg-8
      
          AcordionA(tipo="b")
            .div(titulo="Inexistencia de la conducta o de la norma")
              p No puede haber sanción disciplinaria si la conducta atribuida no existió, o si la norma que se alega infringida no era aplicable al caso concreto. Esta causal, de carácter más técnico, protege contra errores fácticos o jurídicos en la acusación disciplinaria.
              p Por ejemplo, si se inicia un proceso contra un abogado por haber omitido presentar un recurso dentro del término legal, pero se demuestra que en realidad sí lo presentó a tiempo, la falta desaparece por inexistencia de la conducta. Igualmente, si se pretende aplicar una norma derogada o inaplicable al caso, se incurre en una falsa imputación jurídica.
              p Desde el punto de vista de la ética, esta causal reafirma el principio de legalidad: nadie puede ser sancionado por una conducta que no está claramente prevista como falta, ni por hechos que no se han probado fehacientemente.

      
            .div(titulo="Ausencia de dolo o culpa")
              p Una condición esencial para la responsabilidad disciplinaria es la existencia de dolo o culpa. Si el sujeto actuó sin intención de causar daño (dolo) ni incurrió en negligencia, impericia o imprudencia (culpa), no puede ser sancionado.
              p Esta causal se aplica especialmente cuando el resultado negativo de la conducta no fue previsible ni evitable por el profesional. Por ejemplo, si un abogado pierde un proceso pese a haber actuado con toda la diligencia exigible, no puede atribuírsele una falta por el simple hecho del resultado adverso.
              p La ética profesional exige altos estándares de comportamiento, pero no resultados perfectos. Por eso, esta causal protege a quienes actúan con buena fe, honestidad y compromiso, aun cuando los resultados no sean los esperados.

      
            .div(titulo="Ejercicio legítimo de un derecho o cumplimiento de un deber")
              p Esta causal aplica cuando la conducta realizada es parte del ejercicio legítimo de un derecho o del cumplimiento de un deber jurídico. En estos casos, aunque la conducta pudiera parecer irregular a primera vista, está justificada por una norma superior.
              p Por ejemplo, un abogado que revela información confidencial de su cliente para evitar un daño grave e inminente a terceros, podría invocar esta causal si demuestra que actuó dentro del marco legal del Derecho a la defensa de bienes jurídicos superiores (como la vida o la integridad).
              p Esta causal tiene un importante contenido axiológico: se reconoce que, en ciertas circunstancias, el cumplimiento de un deber ético o jurídico justifica una conducta que, de otro modo, sería sancionable.


      .row.mb-5
        .col-lg-8
          .bg-color-1.p-4.mb-4(data-aos="fade-left")
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema4/6.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Las causales de exclusión de responsabilidad disciplinaria son fundamentales para asegurar un equilibrio justo entre la potestad sancionadora y los derechos del sujeto disciplinado. No basta con que se configure formalmente una conducta típica: es necesario analizar si existen elementos que excluyan la responsabilidad por razones de fuerza mayor, error, obediencia debida, ausencia de culpabilidad u otras situaciones especiales.
      
          p(data-aos="fade-left") Estas causales no son excusas ni mecanismos para eludir el control disciplinario, sino expresiones del principio de justicia material y de los valores éticos que deben guiar cualquier forma de juzgamiento. En última instancia, garantizan que la sanción disciplinaria se aplique solo cuando es verdaderamente justa, necesaria y proporcional, preservando el equilibrio entre la exigencia de responsabilidad y el respeto a la dignidad humana.
      
          p(data-aos="fade-left") En el ejercicio de profesiones como la abogacía, donde el margen de interpretación y el compromiso ético son altos, estas causales permiten distinguir entre el error humano justificable y la verdadera infracción disciplinaria. Así, se evita el uso punitivo del régimen disciplinario, y se refuerza su función formativa, correctiva y protectora de los intereses públicos.
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema4/7.png", data-aos="zoom-in")
      
  

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://sired.udenar.edu.co/2044/1/90029.pdf" target="_blank" rel="noopener noreferrer") Caicedo, L. & Revelo, E. (2014). Causales de exclusión de la responsabilidad disciplinaria y causales de extinción de la acción disciplinaria en el régimen de los abogados. Universidad de Nariño 
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22962" target="_blank" rel="noopener noreferrer") Ley 1123 del 2007. Por la cual se establece el código disciplinario del abogado. Enero 22 de 2007. 
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=rZlE8y-E_9M" target="_blank" rel="noopener noreferrer") Secretaría Jurídica Distrital. (2023). Las causales de exclusión de responsabilidad en el derecho disciplinario
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
</template>
