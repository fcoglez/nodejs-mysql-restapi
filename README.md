Pasos para hacer una api con nodejs y mysql

1- Usamos el comando  npm init -y . Este comando se utiliza para inicializar un nuevo proyecto en Node.js con un archivo package.json predeterminado sin requerir la entrada del usuario. La opción -y o --yes se utiliza para aceptar automáticamente todas las opciones predeterminadas durante el proceso de inicialización.

2- Para poder usar express, nos vamos al fichero package.json y debajo de la propiedad main, escribimos la propiedad "type": "module". Con esto podemos usar la sintaxis de import.....

3- Para no estar siempre arrancando el servidor mediante node index.js. Instalamos la dependencia de nodemon mediante el comando npm nodemon -D. Nodemom es una herramienta que ayuda en el desarrollo de aplicaciones Node.js reiniciando automáticamente la aplicación cuando detecta cambios en el código. 
