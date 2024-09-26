---
title: Identificadores, palabras clave y comentarios (en C)
published: 2024-09-24
description: 'Aprende sobre los identificadores, palabras clave y comentarios en C.'
image: ''
tags: [c, recurso, libro, identificadores, comentarios]
category: 'Recurso'
draft: false 
language: ''
id: 9
---
## Tabla de contenido
- [Identificadores](#identificadores)
- [Palabras clave](#palabras-clave)
- [Comentarios](#comentarios)
___
Artículo previo: [Literales (en C)](/grupo932/posts/literals-in-c/)
:::note[NOTA]
Esta información fue principalmente extraída del libro *C/C++ Curso de programación (2ª ed.)*, escrita por *Fco. Javier Ceballos* (páginas 32-33).
:::
## Identificadores
Los identificadores son nombres dados en tipos, literales, variables, funciones y etiquetas de un programa. La sintaxis para formar un identificador es la siguiente:
<pre>
{letra|_}[{letra|dígito|_}]...
</pre>
lo cual indica que un identificador consta de uno o más caracteres (véase [Caracteres de C](/grupo932/posts/characters-in-c/)) y que el *primer carácter* debe ser una *letra* o el *carácter de subrayado*. No pueden comenzar por un dígito ni pueden contener caracteres especiales.

Las letras pueden ser mayúsculas o minúsculas. Para C una letra mayúscula es un carácter diferente a esa misma letra en minúscula. Por ejemplo, los identificadores `Suma`, `suma` y `SUMA` son diferentes.

Los identificadores pueden tener cualquier número de caracteres pero dependiendo del compilador que se utilice solamente los *n* caracteres primeros son significativos. Esto quiere decir que un identificador es distinto de otro cuando difieren al menos en uno de los *n* primeros caracteres significativos. Algunos ejemplos son:
```
Suma
Cálculo_Números_Primos
ordenar
VisualizarDatos
```
:::tip[DATO]
ANSI permite 6 caracteres en un identificador externo y 31 en uno interno: dentro de una función. Microsoft C permite 247 tanto en los identificadores internos como en los externos; etc.
:::
## Palabras clave
Las palabras clave son identificadores predefinidos que tienen un significado especial para el compilador C. Por lo tanto, un identificador definido por el usuario, no puede tener el mismo nombre que una palabra clave. El lenguaje C, tiene las siguientes palabras clave:
<table>
    <tr>
        <td><code>auto</code></td>
        <td><code>double</code></td>
        <td><code>int</code></td>
        <td><code>struct</code></td>
    </tr>
    <tr>
        <td><code>break</code></td>
        <td><code>else</code></td>
        <td><code>long</code></td>
        <td><code>switch</code></td>
    </tr>
    <tr>
        <td><code>case</code></td>
        <td><code>enum</code></td>
        <td><code>register</code></td>
        <td><code>typedef</code></td>
    </tr>
    <tr>
        <td><code>char</code></td>
        <td><code>extern</code></td>
        <td><code>return</code></td>
        <td><code>union</code></td>
    </tr>
    <tr>
        <td><code>const</code></td>
        <td><code>float</code></td>
        <td><code>short</code></td>
        <td><code>unsigned</code></td>
    </tr>
    <tr>
        <td><code>continue</code></td>
        <td><code>for</code></td>
        <td><code>signed</code></td>
        <td><code>void</code></td>
    </tr>
    <tr>
        <td><code>default</code></td>
        <td><code>goto</code></td>
        <td><code>sizeof</code></td>
        <td><code>volatile</code></td>
    </tr>
    <tr>
        <td><code>do</code></td>
        <td><code>if</code></td>
        <td><code>static</code></td>
        <td><code>while</code></td>
    </tr>
</table>

Las palabras clave deben escribirse siempre en minúsculas, como están.
## Comentarios
Un comentario es un mensaje a cualquiera que lea el código fuente. Añadiendo comentarios hace más fácil la comprensión de un programa. La finalidad de los comentarios es explicar el código fuente. C soporta dos tipos de comentarios:
* _Comentario tradicional_. Un comentario tradicional empieza con los caracteres `/*` y finaliza con los caracteres `*/`. Estos comentarios pueden ocupar más de una línea, pero no pueden anidarse, y pueden aparecer en cualquier lugar donde se permita aparecer un espacio en blanco. Por ejemplo:
```c
/*
* La ejecución del programa comienza en la función main.
* La función main puede invocar a otras funciones
* predefinidas o definidas por el usuario. La ejecución
* del programa finaliza cuando finaliza la función main.
*/
```
* _Comentario de una línea_. Este tipo de comentario comienza con una doble barra `//` y se extiende hasta el final de la línea. Son denominados comentarios estilo C++. Esto quiere decir que C ha incorporado algunas características de interés de C++; una de ellas es ésta. La siguiente línea muestra un ejemplo:
```c
// Agregar aquí el código de iniciación
```

Siguiente artículo: [Constantes y variables (en C)](/grupo932/posts/constants-and-variables-in-c/)
