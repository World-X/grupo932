---
title: Prioridad y orden de evaluación (de operadores en C)
published: 2024-09-27
description: 'Aprende cómo se evalúan las expresiones en C y cómo se determina la prioridad de los operadores.'
image: ''
tags: [c, recurso, libro, operadores, expresiones]
category: 'Recurso'
draft: false 
language: ''
id: 16
---
Artículo previo: [Expresiones númericas y operadores (en C)](/grupo932/posts/operators-in-c/)
:::note[NOTA]
Esta información fue principalmente extraída del libro *C/C++ Curso de programación (5ª ed.)*, escrita por *Fco. Javier Ceballos* (páginas 60-61).
:::

Cuando escribimos una expresión como la siguiente, `f = a + b * c / d`, es porque conocemos perfectamente el orden en el que se ejecutan las operaciones. Si este orden no fuera el que esperamos, tendríamos que utilizar paréntesis para modificarlo, ya que una expresión entre paréntesis siempre se evalúa primero.

Esto quiere decir que el compilador C atribuye a cada operador un nivel de prioridad; de esta forma puede resolver qué operación se ejecuta antes que otra en una expresión. Esta prioridad puede ser modificada utilizando paréntesis. Los paréntesis tienen mayor prioridad y son evaluados de más internos a más externos. Como ejemplo de lo expuesto, la expresión anterior puede escribirse también así: `f = (a +(( b * c) / d))`, lo cual indica que primero se evalúa `b * c`, el resultado se divide por `d`, el resultado se suma con `a` y finalmente el resultado se asigna a `f`.

La tabla que se presenta a continuación resume las reglas de prioridad y asociatividad de todos los operadores. Las líneas se han colocado de mayor a menor prioridad. Los operadores escritos sobre una misma línea tienen la misma prioridad. 

| Operador | Asociatividad |
|------------|---------------|
| **Operadores como sufijo**:
`()` `[]` `.` `->` `++` `--` (tipo) {lista} | Izquierda a derecha |
| **Operadores como prefijo**:
`++` `--` `+` `-` `~` `!` (tipo) `*` `&` `sizeof` `_Alignof` | Derecha a izquierda |
| **Resto de operadores**:
`*` `/` `%` | Izquierda a derecha |
| `+` `-` | Izquierda a derecha |
| `<<` `>>` | Izquierda a derecha |
| `<` `<=` `>` `>=` | Izquierda a derecha |
| `==` `!=` | Izquierda a derecha |
| `&` | Izquierda a derecha |
| `^` | Izquierda a derecha |
| `\|` | Izquierda a derecha |
| `&&` | Izquierda a derecha |
| `\|\|` | Izquierda a derecha |
| `?:` | Derecha a izquierda |
| `=` `+=` `-=` `*=` `/=` `%=` `<<=` `>>=` `&=` `^=` `\|=` | Derecha a izquierda |
| `,` | Izquierda a derecha |

En C, todos los operadores binarios excepto los de asignación son evaluados de izquierda a derecha. En el siguiente ejemplo, primero se asigna `z` a `y` y a continuación `y` a `x`.
```c
int x = 0, y = 0, z = 15;
x = y = z;     // resultado x = y = z = 15
```

