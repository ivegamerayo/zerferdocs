(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{724:function(e,a,o){"use strict";o.r(a);var s=o(5),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"arkanoid"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#arkanoid"}},[e._v("#")]),e._v(" Arkanoid")]),e._v(" "),o("p",[o("strong",[e._v("Prerequisitos")]),e._v("\nTrabajaremos sobre Scratch 2")]),e._v(" "),o("p",[o("strong",[e._v("Eliminando el Sprite que viene por defecto (El gato)")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/img/Pasted image 20220214192118.png")}})]),e._v(" "),o("h2",{attrs:{id:"seleccionando-el-fondo"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#seleccionando-el-fondo"}},[e._v("#")]),e._v(" Seleccionando el fondo")]),e._v(" "),o("p",[e._v("Elegimos el fondo que mas nos guste")]),e._v(" "),o("h2",{attrs:{id:"dibujando-los-objetos"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dibujando-los-objetos"}},[e._v("#")]),e._v(" Dibujando los objetos")]),e._v(" "),o("p",[e._v("Pinchamos sobre el lápiz y se nos abrira la seccion de disfraces")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/img/Pasted image 20220214192229.png")}}),e._v(" "),o("h3",{attrs:{id:"componentes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#componentes"}},[e._v("#")]),e._v(" Componentes")]),e._v(" "),o("ul",[o("li",[e._v("Pelota")]),e._v(" "),o("li",[e._v("Button2")])]),e._v(" "),o("p",[o("strong",[e._v("Cambiar el nombre")]),e._v("\nAunque esto es opcional, le podemos cambiar el nombre para que podamos distinguirlos de mejor manera.")]),e._v(" "),o("h2",{attrs:{id:"programando-el-boton"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#programando-el-boton"}},[e._v("#")]),e._v(" Programando el botón")]),e._v(" "),o("h3",{attrs:{id:"asignando-que-comience-en-el-centro"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#asignando-que-comience-en-el-centro"}},[e._v("#")]),e._v(" Asignando que comience en el centro")]),e._v(" "),o("p",[e._v("Para ello, pulsamos en "),o("em",[e._v("Eventos")]),e._v(" y seleccionamos la banderita verde, en la seccion "),o("em",[e._v("Movimiento")]),e._v(" seleccionamos el bloque que dice "),o("em",[e._v("ir a x: numero y: numero")]),e._v(" y le ponemos en en el eje x: 0 y: -140 de esta forma se centrara horizontalmente y se quedara abajo verticalmente")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/img/Pasted image 20220217121521.png")}}),e._v(" "),o("p",[o("strong",[e._v("Eventos de teclado")]),e._v("\nAunque se puede hacer como habiamos hecho con el ejercicio del pingpong y solo cambiando el eje y por el x, en este caso vamos a aprender los bucles y otra forma distinta de hacerlo.\n"),o("img",{attrs:{src:e.$withBase("/img/Pasted image 20220217123642.png")}})]),e._v(" "),o("p",[e._v("Como podemos ver nos encontramos 1 bloque "),o("em",[e._v("por siempre")]),e._v(" el cual tiene dentro 2 bloques "),o("em",[e._v("si")]),e._v(" Si nos fijamos estamos preguntando que si la tecla esta pulsada que apunte hacia un lado y se mueva.")]),e._v(" "),o("p",[e._v("Si hacemos la prueba veremos que el boton hace cosas raras, para ello pondremos un blque antes del "),o("em",[e._v("por siempre")]),e._v(" que dice "),o("em",[e._v("fijar estilo de rotacion izquierda-derecha")])]),e._v(" "),o("h2",{attrs:{id:"programando-la-pelota"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#programando-la-pelota"}},[e._v("#")]),e._v(" Programando la pelota")]),e._v(" "),o("p",[e._v("En este caso queremos que siempre comience en el centro asi que usaremos la misma tecnica de antes pero dejando la x e y en 0")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/img/Pasted image 20220217124120.png")}}),e._v(" "),o("p",[e._v("Metemos un bucle "),o("em",[e._v("por siempre")]),e._v(" el cual se mueva 10 pasos y que rebote si hay un borde y como queremos que sea de una forma aleatoria añadimos un bucle que apunte a una direccion al azar")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/img/Pasted image 20220217124435.png")}}),e._v(" "),o("p",[e._v("Ahora ya se parece mas al juego final, pero queremos que la pelota rebote cuando toque con nuestro boton asi que para ello haremos lo siguiente")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/img/Pasted image 20220217124755.png")}}),e._v(" "),o("p",[e._v("Como vemos, hemos añadido un control de si en el cual dice que si esta tocando nuestro boton apunte en una direccion al azar de -60 y 60 la razon de estos numeros es que pueda irse hacia arriba\n"),o("img",{attrs:{src:e.$withBase("/img/Pasted image 20220217125301.png")}})]),e._v(" "),o("h2",{attrs:{id:"perder"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#perder"}},[e._v("#")]),e._v(" Perder")]),e._v(" "),o("p",[e._v("Cuando la pelota toca el borde de abajo queremos que se pare la partida, asi que para ello ponemos los siguientes bloques")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/img/Pasted image 20220217125402.png")}}),e._v(" "),o("p",[e._v("Lo que estamos haciendo aqui es que cuando la posicion vertical de la pelota sea menor a -135 salga un mensaje diciendo que hemos perdido y que se pare el juego")]),e._v(" "),o("h2",{attrs:{id:"creando-los-bloques"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#creando-los-bloques"}},[e._v("#")]),e._v(" Creando los bloques")]),e._v(" "),o("p",[e._v("Nos vamos a la seccion de "),o("em",[e._v("Disfraces")]),e._v(" y dibujamos un rectangulo de un color.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/img/Pasted image 20220225164250.png")}}),e._v(" "),o("p",[e._v("Aunque no es totalmente necesario vamos a poner el centro. Pulsando en la cruz y marcamos el centro del rectangulo")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/img/Pasted image 20220225164750.png")}}),e._v(" "),o("h2",{attrs:{id:"dando-posicion"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dando-posicion"}},[e._v("#")]),e._v(" Dando posicion")]),e._v(" "),o("p",[e._v("Hacemos que cuando pulsemos la banderita verde se quede en la posicion x: -191 y: 158")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/img/Pasted image 20220225164641.png")}}),e._v(" "),o("h2",{attrs:{id:"generando-los-bloques"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#generando-los-bloques"}},[e._v("#")]),e._v(" Generando los bloques")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/img/Pasted image 20220225170812.png")}})])}),[],!1,null,null,null);a.default=r.exports}}]);