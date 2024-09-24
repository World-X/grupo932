---
title: Literales (en C)
published: 2024-09-21
description: 'Los literales son valores constantes. Son fundamentales en los lenguajes de programación, incluyendo C. Aprender a usarlos es esencial.'
image: ''
tags: [c, recurso, libro, tipos, binario, decimal, hexadecimal]
category: 'Recurso'
draft: false
language: ''
id: 8
---
## Tabla de contenido
- [Literales enteros](#literales-enteros)
- [Literales reales](#literales-reales)
- [Literales de un solo carácter](#literales-de-un-solo-carácter)
- [Literales de cadena de caracteres](#literales-de-cadena-de-caracteres)
___
Artículo previo: [Sinónimos de un tipo (en C)](/grupo932/posts/type-synonyms-in-c/)
:::note[NOTA]
Esta información fue principalmente extraída del libro *C/C++ Curso de programación (2ª ed.)*, escrita por *Fco. Javier Ceballos* (páginas 29-32).
:::
Un literal es la expresión de un valor de un tipo primitivo, o bien de una cadena de caracteres (conjunto de caracteres entre comillas dobles). Por ejemplo, son literales: `5`, `3.14`, `'a'`, y `"hola"`. En realidad son valores constantes.

Según lo expuesto, un literal en C puede ser: un entero, un real, un carácter y una cadena de caracteres.
## Literales enteros
El lenguaje C permite especificar un literal entero en base 10, 8 y 16.

En general, el signo `+` es opcional si el valor es positivo y el signo `-` estará presente siempre que el valor sea negativo. El tipo de un literal entero depende de su base, de su valor y de su sufijo. La sintaxis para especificar un literal entero es:
<pre>
{[+]|-}literal_entero[{L|U|UL}]
</pre>
Si el literal es decimal y no tiene sufijo, su tipo es el primero de los tipos `int`, `long int` o `unsigned long int` en el que su valor pueda ser representado.

Si es octal o hexadecimal y no tiene sufijo, su tipo es el primero de los tipos `int`, `unsigned int`, `long int`, `unsigned long int` en el que su valor pueda ser representado.

También se puede indicar explícitamente el tipo de un literal entero, añadiendo los sufijos *L*, *U* o *UL* (mayúsculas o minúsculas).

Si su sufijo es *L*, su tipo es `long` cuando el valor puede ser representado en este tipo, si no es `unsigned long`. Si el sufijo es *U*, su tipo es `unsigned int` cuando el valor puede ser representado en este tipo, si no es `unsigned long`. Si el sufijo es *UL*, su tipo es `unsigned long`.

Un *literal entero decimal* puede tener uno o más dígitos del *0* al *9*, de los cuales el primero de ellos es distinto de *0*. Por ejemplo:
<table>
    <tr>
        <td><code>4326</code></td>
        <td>constante entera <code>int</code></td>
    </tr>
    <tr>
        <td><code>1522U</code></td>
        <td>constante entera <code>unsigned int</code></td>
    </tr>
    <tr>
        <td><code>1000L</code></td>
        <td>constante entera <code>long</code></td>
    </tr>
    <tr>
        <td><code>325UL</code></td>
        <td>constante entera <code>unsigned long</code></td>
    </tr>
</table>

Un *literal entero octal* puede tener uno o más dígitos del *0* al *7*, precedidos por un *0*. Por ejemplo:

<table>
    <tr>
        <td><code>0326</code></td>
        <td>constante entera <code>int</code> en base 8</td>
    </tr>
</table>

Un *literal entero hexadecimal* puede tener uno o más dígitos del *0* al *9* y letras de la *A* a la *F* (en mayúsculas o minúsculas) precedidos por *0x* o *0X* (*cero* seguido de *x*). Por ejemplo:

<table>
    <tr>
        <td><code>256</code></td>
        <td>número decimal <code>256</code></td>
    </tr>
    <tr>
        <td><code>0400</code></td>
        <td>número decimal <code>256</code> expresado en octal</td>
    </tr>
    <tr>
        <td><code>0x100</code></td>
        <td>número decimal <code>256</code> expresado en hexadecimal</td>
    </tr>
    <tr>
        <td><code>-0400</code></td>
        <td>número decimal <code>-256</code> expresado en octal</td>
    </tr>
    <tr>
        <td><code>-0x100</code></td>
        <td>número decimal <code>-256</code> expresado en hexadecimal</td>
    </tr>
</table>

## Literales reales
Un literal real está formado por una *parte entera*, seguido por un *punto decimal*, y una *parte fraccionaria*. También se permite la notación científica, en cuyo caso se añade al valor una *e* o *E*, seguida por un exponente positivo o negativo.
<pre>
{[+]|-}<i>parte-entera.parte-fraccionaria</i>[{e|E}{[+]|-}<i>exponente</i>]
</pre>
donde *exponente* representa cero o más dígitos del *0* al *9* y *E* o *e* es el símbolo de exponente de la base 10 que puede ser positivo o negativo (<i>2E&minus;5 = 2 &times; 10<sup>-5</sup></i> ). Si la constante real es positiva no es necesario especificar el signo y si es negativa lleva el signo menos (&minus;). Por ejemplo:

<table>
    <tr><td><code>-17.24</code></td></tr>
    <tr><td><code>17.244283</code></td></tr>
    <tr><td><code>.008e3</code></td></tr>
    <tr><td><code>27E-3</code></td></tr>
</table>

Un literal real tiene siempre tipo `double`, a no ser que se añada al mismo una *f* o *F*, en cuyo caso será de tipo `float`. Por ejemplo:
```c
17.24F /* constante real de tipo float */
```
## Literales de un solo carácter
Los literales de un solo carácter son de tipo `char`. Este tipo de literales está formado por un único carácter encerrado entre *comillas simples*. Una secuencia de escape es considerada como un único carácter. Algunos ejemplos son:

<table>
    <tr>
        <td><code>' '</code></td>
        <td>espacio en blanco</td>
    </tr>
    <tr>
        <td><code>'x'</code></td>
        <td>letra minúscula <code>x</code></td>
    </tr>
    <tr>
        <td><code>'\n'</code></td>
        <td>retorno de carro más avance de línea</td>
    </tr>
    <tr>
        <td><code>'\x07'</code></td>
        <td>pitido</td>
    </tr>
    <tr>
        <td><code>'\1B'</code></td>
        <td>carácter ASCII <code>Esc</code></td>
    </tr>
</table>

El valor de una constante de un solo carácter es el valor que le corresponde en el juego de caracteres de la máquina.
## Literales de cadena de caracteres
Un literal de cadena de caracteres es una secuencia de caracteres encerrados entre *comillas dobles* (incluidas las secuencias de escape como `\"`). Por ejemplo:
```c
"Esto es una constante de caracteres"
"3.1415926"
"Paseo de Pereda 10, Santander"
""                              /* cadena vacía */
"Lenguaje \"C/C++\""            /* produce: Lenguaje "C/C++" */
```
En el ejemplo siguiente el carácter `\n` fuerza a que la cadena "*O pulse Entrar*" se escriba en una línea:
```c
printf("Escriba un número entre 1 y 5\nO pulse Entrar");
```
Cuando una cadena de caracteres es demasiado larga puede utilizarse el carácter `\` como carácter de continuación. Por ejemplo:

<pre>printf("Esta cadena de caracteres es dema\<b>[Entrar]</b>
siado larga.\n");</pre>

El ejemplo anterior daría lugar a una sola línea como la siguiente:

<pre>Esta cadena de caracteres es demasiado larga.</pre>

Dos o más cadenas separadas por un espacio en blanco serían concatenadas en una sola cadena. Por ejemplo:
```c
printf("Primera cadena, "
"segunda cadena.\n");
```
El ejemplo anterior daría lugar a una sola cadena:

<pre>Primera cadena, segunda cadena.</pre>

Los caracteres de una cadena de caracteres son almacenados en localizaciones sucesivas de memoria. Cada carácter ocupa un byte y una cadena de caracteres es finalizada automáticamente por el carácter nulo representado por la secuencia de escape `\0`. Por ejemplo, la cadena `"hola"` sería representada en memoria así:

<pre>h o l a \0</pre>

Siguiente artículo: [Identificadores, palabras clave y comentarios (en C)](/grupo932/posts/identifiers-keywords-comments-in-c/)
