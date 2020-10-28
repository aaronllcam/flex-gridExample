# Ejemplo Maquetación usando FlexBox y CSS Grid

  En este proyecto hemos usado varias tecnologías.  
  - HTML
  - SCSS / CSS (variables, mixins, BEM agile methodology...)
  - Flex + CSS Grid
  - Javascript ecmas6
  - Jquery
  - Plugins de efectos como ScrollUP, Slick slider o JqueryEasing
  - npm (node package manager para la gestión de dependencias)
  - Gulp (para automatizar tareas como la compilación de SCSS a css)
  - Git (para el control de versiones y cambios en nuestro proyecto)
  - GitHub como plataforma
 
# Algunas consideraciones:
  1. Hemos usado gulp para automatizar las tareas de compilación de los .scss. En este fichero por ejemplo hemos creado una tarea con autoprefixer para dar servicio de estilos a navegadores más antiguos.
  2. En la carpeta assets/scss hay tres archivos:
      - _variables.scss donde tenemos las varibles del proyecto
      - _mixins.scss donde encontramos los diferentes mixins creados
      - styles.scss donde tenemos los estilos de todo el proyecto, importando los dos anteriores a este fichero.
  3. En el archivo .gitignore tenemos las carpetas que no se han de subir a git, en este caso la carpeta node_modules
  4. Hemos usado conocimientos de css modernos como flexbox, CSS grid, animations y transiciones.
  5. Hemos usado la sintaxis de ecmas escript 6.
  6. Como aclaración final podemos comentar que sería recomendable usar babel para transpilar el código de javascrip a la version de ecmas5 (y tener soporte para navegadores antiguos) y minificarlo para que ocupe menos espacio en el servidor de producción.