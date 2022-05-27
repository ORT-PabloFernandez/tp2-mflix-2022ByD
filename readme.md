# TALLER DE PROGRAMACION 2
## Instrucciones de resolución de examen

Es tu primer día en [tecnoshare.com](http://tecnoshare.com) luego de un intenso entrenamiento de 10 semanas por fin tenes la oportunidad de mostrar lo que aprendiste, y tu potencial como desarrollador backend en nodejs con express y mongodb.

Luego de abrir el correo encuentras un mail de tu Líder Técnico con tu primera asignación!! 💪

> Bienvenid@! estuvimos esperando por horas que llegares, tenemos varias tareas criticas y prioritarias en nuestro backlog. Por favor presta mucha atención a las instrucciones. No dudes en preguntarme cualquier cosa, aunque generalmente estoy muy ocupado resolviendo problemas heredados de las rotaciones de los desarrolladores.

> En el presente repositorío encontrarás un proyecto de nodejs que ya tiene codigo base del backend con el que vamos a trabajar. Te aconsejo que sigas los siguientes pasos para armar tu entorno de trabajo. 

> 1. Realizar un Fork del presente repositorio
> 2. Realizar un clone del presente repositorio
> 3. Instalar las dependencias
> 4. Solicitar las variables de entorno que contiene la conexion string a mongodb (antes de preguntar, revisa el chat, seguro estan ahí)
> 5. Ejecutar el servidor web de la api REST con el script de npm start-dev si queres trabajar con nodemon (tendrías que instalarlo) con start solo, tambien funciona. 
> El backend se conecta con una base de datos Mongodb en la cual se encuentra la base de datos **sample_mflix** con una collection llamada **movies**, ahí se encuentran aprox. 23.000 películas.
> 6. Proba el endpoint que ya se encuentra desarrollado: /api/movies debería retornar un json con 23.000 películas. Sin embargo te aconsejo que uses el paginado que tiene para probar (mira la definición del end-point). Sí por algun motivo no llegase a funcionar, solicita asistencia. 

> ### TUS TAREAS SON LAS SIGUIENTES POR ORDEN DE PRIORIDAD
> 1. Necesitamos un endpoint que nos devuelva una película (**movie**) particular por _id
> 2. Los desarrolladores de frontend estan haciendo un pantalla para mostrar solo las películas ganadoras de al menos un premio. Necesitamos que desarrolles el endpoint respectivo. Solo necesitan el titulo, el poster y el resumen de la reseña (**plot**) 
> 3. Necesitamos un endpoint que nos devuelva las peliculas filtradas por idioma. Toma en cuenta que estas películas pueden ser muchas y el desarrollador de frontend va mostrarlas paginadas. 
> 4. Hay un calificación propia de las peliculas denomidada [tomatoes](https://es.wikipedia.org/wiki/Rotten_Tomatoes) la base de datos de peliculas actual solo otorga el puntaje **fresh** en determinadas condiciones (no interesa en este caso). El equipo de frontend esta desarrollando un ranking basado en esta calificación. Te piden desarrollar un endpoint que devuelva las películas ordenadas de mayor a menor considerando el puntaje **fresh** 

> ### SI TE DA EL TIEMPO DAME UN MANO TAMBIEN EN...
> 5. En otra collection se encuentran los comentarios de usuarios de las peliculas **comments** y en otra collection los usuarios **users**. Mediante el _id de usuario se requiere devolver un listado de objetos que contengan los comentarios de ese usuario juntamente con el titulo y el poster de la película. 
>
> Desde ya muchas gracias por la colaboración! 😉 como te comente en la entrevista soy muy detallista en la prolijidad del codigo y la performance cada detalle cuenta, no me gusta mucho las cosas fuera del estandar de APIREST, sin embargo si no estas seguro, es mejor que lo resuelvas como puedas y me dejes notas en el readme.md del repo, para que yo pueda probar.

## Intrucciones para la entrega
Si ya terminaste o son las 10:00 asegurate de seguir los siguientes pasos para la entrega:

1. Completar el listado de endpoints, especificando parametros si los hubiera, mas abajo en este mismo archivo.
2. Realizar un commit a tu repo con un mensaje con tu nombre completo
2. Realizar un push a tu repositorio
3. Realizar un pull request a mi repositorio


## Listado de endpoint
-GET /api/movies?pageSize=[pageSize]&page=[page]

1. -GET /api/movies/:id
2. -GET /api/movies/awards/:aw
3. -GET /api/movies/languages/Language?pageSize=[pageSize]&page=[page]
4. -GET /api/movies/ranking

Sin Completar 5
No llegué a completar, simplemente traigo la lista de comentarios según el id de usuario pasado

5. -GET /api/users/:id





