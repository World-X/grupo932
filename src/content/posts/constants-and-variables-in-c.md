---
title: Constantes y variables (en C)
published: 2024-09-26
description: 'Las constantes y variables sirven para almacenar información. En este artículo se explica cómo se declaran y se utilizan en C.'
image: ''
tags: [c, recurso, libro, constantes, variables]
category: ''
draft: false
language: ''
id: 14
---
## Tabla de contenido
- [Constantes C++](#constantes-c)
    - [¿Por qué utilizar constantes?](#¿por-qué-utilizar-constantes?)
- [Declaración de una variable](#declaración-de-una-variable)
___
Artículo previo: [Identificadores, palabras clave y comentarios (en C)](/grupo932/posts/identifiers-keywords-comments-in-c/)
:::note[NOTA]
Esta información fue principalmente extraída del libro *C/C++ Curso de programación (2ª ed.)*, escrita por *Fco. Javier Ceballos* (páginas 34-36).
:::
Declarar una constante simbólica significa decirle al compilador C el nombre de la constante y su valor. Esto se hace generalmente antes de la función `main()` utilizando la directiva `#define`, cuya sintaxis es así:
```c
#define NOMBRE VALOR
```
El siguiente ejemplo declara la constante real *PI* con el valor `3.14159`, la constante de un solo carácter *NL* con el valor `'\n'` y la constante de caracteres *MENSAJE* con el valor `"Pulse una tecla para continuar\n"`:
```c
#define PI 3.14159
#define NL '\n'
#define MENSAJE "Pulse una tecla para continuar\n"
```
Observe que no hay un punto y coma después de la declaración. Esto es así, porque un directriz no es una sentencia C, sino una orden para el preprocesador. El tipo de una constante es el tipo del valor asignado. Suele ser habitual escribir el nombre de una constante en mayúsculas.
## Constantes C++
Otra de las características de C++ incorporada por los compiladores C es la palabra reservada `const`. Utilizándola disponemos de una forma adicional de declarar una constante; basta con anteponer el calificador `const` al nombre de la constante seguido del tipo de la misma; si el tipo se omite, se supone `int`. Por ejemplo, la siguiente línea declara la constante real *Pi* con el valor `3.14`:
```c
const double Pi = 3.14;
```
Una vez declarada e iniciada una constante, ya no se puede modificar su valor. Por ello, al declararla debe ser iniciada. Por ejemplo, suponiendo declarada la constante *Pi*, la siguiente sentencia daría lugar a un error:
```c
Pi = 3.1416 /* error */
```
### ¿Por qué utilizar constantes?
Utilizando constantes es más fácil modificar un programa. Por ejemplo, supongamos que un programa utiliza *N* veces una constante de valor `3.14`. Si hemos definido dicha constante como `const double Pi = 3.14` y posteriormente necesitamos cambiar el valor de la misma a `3.1416`, sólo tendremos que modificar un línea, la que define la constante. En cambio, si no hemos declarado `Pi`, sino que hemos utilizado el valor `3.14` directamente *N* veces, tendríamos que realizar *N* cambios.
## Declaración de una variable
Una variable representa un espacio de memoria para almacenar un valor de un determinado tipo. El valor de una variable, a diferencia de una constante, puede cambiar durante la ejecución de un programa. Para utilizar una variable en un programa, primero hay que declararla. La declaración de una variable consiste en enunciar el nombre de la misma y asociarle un tipo:
<pre><i>tipo identificador[, identificador]...</i></pre>

En el ejemplo siguiente se declaran e inician cuatro variables: una de tipo `char`, otra `int`, otra `float` y otra `double`:
```c
char c = '\n';
main()
{
    int i = 0;
    float f = 0.0F;
    double d = 0.0;

    // ...
}
```
El tipo, primitivo o derivado, determina los valores que puede tomar la variable así como las operaciones que con ella pueden realizarse. Los operadores serán expuestos un poco más adelante.

En el ejemplo anterior puede observar que hay dos lugares donde se puede realizar la declaración de una variable: fuera de todo bloque, entendiendo por bloque un conjunto de sentencias encerradas entre el carácter `{` y el carácter `}`, y dentro de un bloque de sentencias.

Cuando la declaración de una variable tiene lugar dentro de un bloque, dicha declaración en **ANSI C** debe realizarse al principio del mismo, y en el caso de C++ puede realizarse en cualquier otra parte, siempre antes de ser utilizada.

En nuestro ejemplo, se ha declarado la variable `c` antes de la función `main` (fuera de todo bloque) y las variables `i`, `f` y `d` dentro de la función (dentro de un bloque). Una variable declarada fuera de todo bloque se dice que es *global* porque es accesible en cualquier parte del código que hay desde su declaración hasta el final del fichero fuente. Por el contrario, una variable declarada dentro de un bloque se dice que es *local* porque sólo es accesible dentro de éste. Para comprender esto mejor, piense que generalmente en un programa habrá más de un bloque de sentencias. No obstante, esto lo veremos con más detalle en el capítulo siguiente.

Según lo expuesto, la variable `c` es global y las variables `i`, `f` y `d` son locales.

