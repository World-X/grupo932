---
title: Sinónimos de un tipo (en C)
published: 2024-09-21
description: 'Aprende a crear sinónimos de tipos en C, que te permitirán hacer tu código más legible y mantenible, especialmente cuando trabajes con estructuras.'
image: ''
tags: [c, recurso, libro, tipos]
category: 'Recurso'
draft: false
language: ''
---
Artículo previo: [Tipos de datos (en C)](/grupo932/posts/data-types-in-c/)
:::note[NOTA]
Esta información fue principalmente extraída del libro *C/C++ Curso de programación (2ª ed.)*, escrita por *Fco. Javier Ceballos* (páginas 28-29).
:::
Utilizando la palabra reservada `typedef` podemos declarar nuevos nombres de tipo de datos; esto es, sinónimos de otro tipo ya sean primitivos o derivados, los cuales pueden ser utilizados más tarde para declarar variables de esos tipos. La sintaxis de `typedef` es la siguiente:
<pre>typedef declaración_tipo sinónimo[, sinónimo]...;</pre>
donde *declaración_tipo* es cualquier tipo definido en C, primitivo o derivado, y *sinónimo* es el nuevo nombre elegido para el tipo especificado.
Por ejemplo, la sentencia siguiente declara el nuevo tipo *ulong* como sinónimo del tipo `unsigned long`:
```c
typedef unsigned long ulong;
```
Una vez definido el tipo *ulong* como sinónimo de `unsigned long`, sería posible declarar una variable *dni* de cualquiera de las dos formas siguientes:
```c
unsigned long dni; /* es equivalente a */
ulong dni;
```
Las declaraciones `typedef` permiten parametrizar un programa para evitar problemas de portabilidad. Si utilizamos `typedef` con los tipos que pueden depender de la instalación, cuando se lleve el programa a otra instalación sólo se tendrán que cambiar estas declaraciones.

El siguiente ejemplo declara el [tipo enumerado](/grupo932/posts/data-types-in-c/#enum) *t_colores* como sinónimo de `enum` *colores*, y define la variable *color* de este tipo:
```c
enum colores
{
    azul, amarillo, rojo, verde, blanco, negro
};

typedef enum colores t_colores;

main()
{
    t_colores color = azul;
    // ...
}
```
La declaración del tipo *t_colores* podría realizarse también así:
```c
typedef enum colores
{
    azul, amarillo, rojo, verde, blanco, negro
} t_colores;
```
o simplemente así:
```c
typedef enum
{
    azul, amarillo, rojo, verde, blanco, negro
} t_colores;
```
Siguiente artículo: [Literales (en C)](/grupo932/posts/literals-in-c/)