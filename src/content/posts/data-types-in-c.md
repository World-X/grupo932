---
title: Tipos de datos (en C)
published: 2024-09-13
description: 'Aprende todos los tipos de datos que existen en C, y algunas características de cada uno.'
image: ''
tags: [c, recurso, datos, libro, tipos]
category: 'Recurso'
draft: false
language: ''
id: 6
---
## Tabla de contenido
- [Tipos primitivos](#tipos-primitivos)
    - *[char](#char)*
    - *[short](#short)*
    - *[int](#int)*
    - *[long](#long)*
    - *[long long](#long-long)*
    - *[enum](#enum)*
        - *[Creación de una enumeración](#creación-de-una-enumeración)*
    - *[float](#float)*
    - *[double](#double)*
    - *[long double](#long-double)*
- [Tipos derivados](#tipos-derivados)
___
Artículo previo: [Caracteres de C](/grupo932/posts/characters-in-c/)
:::note[NOTA]
Esta información fue principalmente extraída del libro *C/C++ Curso de programación (2ª y 5ª ed.)*, escrita por *Fco. Javier Ceballos* (páginas 20-27 de la 2ª edición).
:::
Los tipos de datos en C se clasifican en: tipos *primitivos* y tipos *derivados*.
## Tipos primitivos
:::important[IMPORTANTE]
Una peculiaridad de los tipos de datos de C es que **dependen totalmente del hardware en el que se ejecuta el código**. Un `int` en tu laptop será más pequeño que un `int` en una supercomputadora, así que es importante conocer las limitaciones del hardware en el que estás trabajando. Esta es también la razón por la que los tipos de datos se definen como mínimos- un valor `int`, como aprenderás, es como **mínimo** -32,767 a 32,767: en ciertas máquinas, será capaz de almacenar incluso más valores que esto.

Fuente: https://www.freecodecamp.org/news/data-types-in-c-integer-floating-point-and-void-explained/
:::
Se les llama primitivos porque están definidos por el compilador. Hay siete tipos primitivos de datos que podemos clasificar en: tipos enteros y tipos reales.

- Tipos enteros: **char**, **short**, **int**, **long** y **enum**.
- Tipos reales: **float** y **double**.

Cada tipo primitivo tiene un rango diferente de valores positivos y negativos. El tipo de datos que se seleccione para declarar las variables de un determinado programa dependerá del rango y tipo de valores que vayan a almacenar cada una de ellas y de si éstos son enteros o fraccionarios. Los ficheros de cabecera *[limits.h](https://www.ibm.com/docs/es/aix/7.3?topic=files-limitsh-file)* y *[float.h](https://www.tutorialspoint.com/c_standard_library/float_h.htm)* especifican los valores máximo y mínimo para cada tipo.

Cada tipo entero puede ser calificado por las palabras clave **signed** o **unsigned**.
- Un entero calificado **signed** es un entero con signo; esto es, un valor entero positivo o negativo.
- Un entero calificado **unsigned** es un valor entero sin signo, el cual es manipulado como un valor entero positivo.

Esta calificación da lugar a los siguientes tipos extras:

|  **Con signo** |   **Sin signo**  |
|:--------------:|:----------------:|
|  `signed char` |  `unsigned char` |
| `signed short` | `unsigned short` |
|  `signed int`  |  `unsigned int`  |
|  `signed long` |  `unsigned long` |

Si los calificadores **signed** y **unsigned** se utilizan sin un tipo entero específicado, se asume el tipo **int**. Por este motivo, las siguientes declaraciones son equivalentes:
```c
signed x;     /* es equivalente a */
signed int x;
```
Un tipo entero calificado con **signed** es equivalente a utilizarlo sin calificar. Según esto, las siguientes declaraciones son equivalentes:
```c
char y;        /* es equivalente a */
signed char y;
```
### *char*
El tipo **char** se utiliza para declarar datos enteros comprendidos entre *-128* y *+127*. Un **char** se define como un conjunto de 8 bits, de los cuales uno es para especificar el signo y el resto para el valor; dicho conjunto de bits recibe el nombre de *byte*. El siguiente ejemplo declara la variable *c* de tipo **char** y le asigna el valor inicial *0*. Es recomendable iniciar toda variable que se declare.
```c
char c = 0;
```
Según lo expuesto en el párrafo anterior, el tipo **unsigned char** puede almacenar valores en el rango de *0* a *255*, ya que ahora no es necesario emplear un bit para el signo. Los valores *0 a 127* se corresponden con los 128 primeros caracteres de los códigos internacionales ASCII, ANSI o UNICODE empleados para la representación de caracteres. En este conjunto de caracteres se encuentran todos los utilizados por el compilador C.

El siguiente ejemplo declara la variable *car* de tipo **char** a la que se le asigna el carácter *'a'* como valor inicial. Las cuatro declaraciones siguientes son idénticas:
```c
char car = 'a';
```
```c
char car = 97;   /* la 'a' es el decimal 97 */
```
```c
char car = 0x61; /* la 'a' es el hexadecimal 0061 */
```
```c
char car = 0141; /* la 'a' es el octal 0141 */
```
Un carácter es representado internamente por un entero, que puede ser expresado en decimal, hexadecimal u octal.
### *short*
El tipo **short**, abreviatura de **signed short int**, se utiliza para declarar datos enteros comprendidos entre *-32,768* y *+32,767*. Un valor **short** se define como un dato de 16 bits de longitud, independientemente de la plataforma utilizada. El siguiente ejemplo declara *i* y *j* como variables enteras de tipo **short**:
```c
short i = 0, j = 0;
```
Evidentemente, el tipo **unsigned short** puede almacenar valores en el rango de *0* a *65,535*, ya que ahora no es necesario emplear un bit para el signo.
### *int*
El tipo **int**, abreviatura de **signed int** se utiliza para declarar datos enteros comprendidos mínimo entre *-32,768* y *+32,767* cuando su tamaño es de 2 bytes (16 bits), típico en sistemas de 16 bits o algunos sistemas embebidos. Por otro lado, cuando su tamaño es de 4 bytes (32 bits), típico en sistemas de 32 o 64 bits, el rango mínimo de un **signed int** se amplía para abarcar valores entre *-2,147,483,648* y *+2,147,483,647*. El siguiente ejemplo declara e inicia tres variables *a*, *b* y *c*, de tipo **int**:
```c
int a = 2000;
int b = -30;
int c = 0xF003; /* valor en hexadecimal */
```
Evidentemente, el tipo **unsigned int** puede almacenar valores en el rango de *0* a *65,535* cuando su tamaño es de 16 bits, o de *0* a *4,294,967,295* cuando su tamaño es de 32 bits, ya que ahora no es necesario emplear un bit para el signo.

En general, el uso de enteros de cualquier tipo produce un código compacto y rápido. Así mismo, podemos afirmar que la longitud de un **short** es siempre menor o igual que la longitud de un **int**.
### *long*
El tipo **long** se utiliza para declarar datos enteros comprendidos mínimo entre los valores *-2,147,483,648* y *+2,147,483,647* cuando su tamaño es de 4 bytes (32 bits), común en sistemas de 32 bits. Por otro lado, cuando su tamaño es de 8 bytes (64 bits), típico en sistemas de 64 bits, el rango mínimo de un **long** se extiende para abarcar valores entre *-9,223,372,036,854,775,808* y *+9,223,372,036,854,775,807*. El siguiente ejemplo declara e inicia las variables *a*, *b* y *c*, de tipo **long**:
```c
long a = -1L; /* L indica que la constante -1 es long */
long b = 125;
long c = 0x1F00230F; /* valor en hexadecimal */
```
Evidentemente, el tipo **unsigned long** puede almacenar valores en el rango de *0* a *4,294,967,295* cuando su tamaño es de 32 bits, o de *0* a *18,446,744,073,709,551,615* cuando su tamaño es de 64 bits, ya que ahora no es necesario emplear un bit para el signo.

En general, podemos afirmar que la longitud de un **int** es menor o igual que la longtitud de un **long**.
### *long long*
El tipo **long long** se utiliza para declarar datos enteros comprendidos entre los valores *-9223372036854775808* y *+9223372036854775807*. Un valor **long long** se 
define como un dato de 64 bits de longitud. El siguiente ejemplo declara e inicia 
la variable *a* de tipo long long:
```c
long long a = -1LL; /* LL indica que la constante -1 es long long */
```
Evidentemente,  el  tipo  **unsigned long long** puede  almacenar  valores  en  el 
rango de *0* a *18446744073709551615*, ya que ahora no es necesario emplear un bit para el signo.

En general, podemos afirmar que la longitud de un long es menor o igual que la longitud de un long long.
### *enum*
La declaración de un *tipo enumerado* es simplemente una lista de valores que pueden ser tomados por una variable de ese tipo. Los valores de un tipo enumerado se representarán con identificadores, que serán las constantes del nuevo tipo. Por ejemplo,
```c
enum dia_semana {
    lunes,
    martes,
    miercoles,
    jueves,
    viernes,
    sabado,
    domingo
} hoy;

enum dia_semana ayer;
```
Este ejemplo declara las variables *hoy* y *ayer* del tipo enumerado *dia_semana*. Estas variables pueden tomar cualquier valor de los especificados, *lunes* a *domingo*. Los valores de las constantes que componen el tipo enumerado comienzan en cero y aumentan de uno en uno según se lee la declaración de arriba a abajo o de izquierda a derecha. Según esto, el valor de *lunes* es 0, el valor de *martes* es 1, el valor de *miercoles* es 2, etc.
#### Creación de una enumeración
Crear una enumeración supone definir un nuevo tipo de datos, denominado *tipo enumerado* y declarar una variable de ese tipo. La sintaxis es la siguiente:
```c
enum tipo_enumerado
{
    /* identificadores de las constantes enteras */
};
```
donde *tipo_enumerado* es un identificador que nombra el nuevo tipo definido.

Después de definir un tipo enumerado, podemos declarar una o más variables de ese tipo, de la forma:
```c
enum tipo_enumerado [variable[, variable]...];
```
El siguiente ejemplo declara una variable llamada *color* del tipo enumerado *colores*, la cual puede tomar cualquier valor de los especificados en la lista.
```c
enum colores
{
    azul, amarillo, rojo, verde, blanco, negro
};
enum colores color;

color = azul;
```
Como ya hemos dicho, cada identificador de la lista de constantes en una enumeración, tiene asociado un valor. Por defecto, el primer identificador tiene asociado el valor 0, el siguiente el valor 1, y así sucesivamente. Según esto,
```c
color = verde; /* es equivalente a */
color = 3;
```
:::note[NOTA]
Para ANSI C un tipo enumerado es un tipo **int**. Sin embargo, para C++ un tipo enumerado es un nuevo tipo entero diferente de los anteriores. Esto significa que en C++ un valor de tipo **int** no puede ser asignado directamente a una variable de un tipo enumerado, sino que habría que hacer una conversión explicíta de tipo. Por ejemplo:
```c
color = (enum colores)3; /* conversión explícita de int a colores */
```
:::
A cualquier identificador de la lista se le puede asignar un valor inicial entero por medio de una expresión constante. Los identificadores sucesivos tomarán valores correlativos a partir de éste. Por ejemplo:
```c
enum colores
{
    azul, amarillo, rojo, verde = 0, blanco, negro
} color;
```
Este ejemplo define un tipo enumerado llamado *colores* y declara una variable *color* de ese tipo. Los valores asociados a los identificadores son los siguientes: *azul* = *0*, *amarillo* = *1*, *rojo* = *2*, *verde* = 0, *blanco* = *1* y *negro* = *2*.

A los miembros de una enumeración se les aplica las siguientes reglas:
* Dos o más miembros pueden tener un mismo valor.
* Un identificador no puede aparecer en más de un tipo.
* Desafortunadamente, no es posible leer o escribir directamente un valor de un tipo enumerado. El siguiente ejemplo aclara ese detalle.
```c
/* enum.c */
#include <stdio.h>

enum colores
{
    azul, amarillo, rojo, verde, blanco, negro
};

main()
{
    enum colores color;

    /* Leer un color introducido desde el teclado */
    printf("Color: ");
    scanf("%d", &color);
    /* Visualizar un color */
    printf("%d\n", color);
}
```
Ejecución del programa:
<pre><i>Color: 3<b>[Entrar]</b>
3
</i></pre>
### *float*
El tipo **float** se utiliza para declarar un dato en coma flotante de 32 bits (4 bytes) en el formato IEEE 754 (este formato utiliza 1 bit para el signo, 8 bits para el exponente y 23 para la [mantisa](https://dle.rae.es/mantisa)). Los datos de tipo **float** almacenan valores con una precisión aproximada de 6-7 digítos. Para especificar que una constante (un literal) es de tipo **float**, hay que añadir al final de su valor la letra 'f' o 'F'. El siguiente ejemplo declara las variables *a*, *b* y *c*, de tipo real de precisión simple:
```c
float a = 3.141592F;
float b = 2.2e-5F; /* 2.2e-5 = 2.2 por 10 elevado a -5 */
float c = 2/3.0F;  /* 0.666667 */
```
### *double*
El tipo **double** se utiliza para declarar un dato en coma flotante de 64 bits (8 bytes) en el formato IEEE 754 (1 bit para el signo, 11 bits para el exponente y 52 para la [mantisa](https://dle.rae.es/mantisa)). Los datos de tipo **double** almacenan valores con una precisión aproximada de 15-16 dígitos. Por omisión, una constante es considerada de tipo **double**. El siguiente ejemplo declara las variables *a*, *b* y *c*, de tipo real de precisión doble:
```c
double a = 3.141592; /* una constante es double por omisión */
double b = 2.2e+5;   /* 2.2e+5 = 2.2 por 10 elevado a 5 */
double c = 2.0/3.0;
```
Algunos compiladores también proporcionan el tipo **long double**. Un número real de precisión doble formato largo puede tener hasta 19 dígitos significativos.
### *long double*
El tipo long double se utiliza para declarar un dato en coma flotante de 80 bits (10 bytes; a veces almacenado como 12 o 16 bytes para mantener la alineación de la estructura de datos) en el formato precisión extendida (un bit para el signo, 15 bits para el exponente y 64 (1+63) para la mantisa (bit 63 a 0: no normalizado, y a 1: normalizado)). Los datos de tipo **long double** almacenan valores con una precisión aproximada de 19 dígitos. 

Para especificar que una constante (un literal) es de tipo **long double**, hay que 
añadir al final de su valor la letra `'L'`. El siguiente ejemplo declara la variable a de tipo real de *precisión extendida*:
```c
long double a = 3.141592L; /* L indica long double */
```
## Tipos derivados
Los tipos derivados son construidos a partir de los tipos primitivos. Algunos de ellos son: *estructuras*, *uniones*, *matrices* (*arrays*), *punteros* y *funciones*.
:::warning[AVISO]
Los tipos derivados son más complejos que los tipos primitivos. Siendo franco, todavía no los he estudiado, así que no me siento cómodo enseñando algo que no sé. Más adelante si aprendo a usar los tipos derivados, voy a actualizar este artículo, particularmente esta sección.

Por otro lado, si sabes usar los tipos derivados, puedes acercarte conmigo para actualizar este artículo con tu apoyo.
:::

Siguiente artículo: [Sinónimos de un tipo (en C)](/grupo932/posts/type-synonyms-in-c/)