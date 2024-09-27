---
title: Expresiones númericas y operadores (en C)
published: 2024-09-27
description: 'Las expresiones númericas necesitan de operadores para realizar operaciones aritméticas. En este artículo se explica cómo se utilizan en C.'
image: ''
tags: [c, recurso, libro, operadores, expresiones]
category: 'Recurso'
draft: false 
language: ''
id: 15
---
## Tabla de contenido
- [Expresiones númericas](#expresiones-númericas)
- [Operadores](#operadores)
    - [Operadores aritméticos](#operadores-aritméticos)
    - [Operadores de relación](#operadores-de-relación)
    - [Operadores lógicos](#operadores-lógicos)
    - [Operadores unitarios](#operadores-unitarios)
    - [Operadores a nivel de bits](#operadores-a-nivel-de-bits)
    - [Operadores de asignación](#operadores-de-asignación)
    - [Operador condicional](#operador-condicional)
    - [Otros operadores](#otros-operadores)
        - [Operador sizeof](#operador-sizeof)
        - [Operador coma](#operador-coma)
        - [Operador de dirección](#operador-de-dirección)
        - [Operador de indirección](#operador-de-indirección)
___
Artículo previo: [Constantes y variables (en C)](/grupo932/posts/constants-and-variables-in-c/)
:::note[NOTA]
Esta información fue principalmente extraída del libro *C/C++ Curso de programación (5ª ed.)*, escrita por *Fco. Javier Ceballos* (páginas 49-60).
:::

## Expresiones númericas
Una expresión es un conjunto de operandos unidos mediante operadores para especificar una operación determinada. Todas las expresiones cuando se evalúan retornan un valor. Por ejemplo:
```c
a + 1
suma + c
cantidad * precio
x = 7 * sqrt(a) - b / 2 /* sqrt es la función cuadrada */
```
Cuando C tiene que evaluar una expresión en la que intervienen operandos de diferentes tipos, primero convierte, solo para realizar las operaciones solicitadas, los valores de los operandos al tipo del operando cuya precisión sea más alta (por ejemplo, un `int` es más preciso que un `char` y un `double` es más preciso que un `int`). Cuando se trate de una asignación, por ejemplo, `x = ...`, C convierte el valor de la derecha al tipo de la variable de la izquierda siempre que no haya pérdida de información. En otro caso, C sugiere que la conversión se realice explícitamente, cuestión que explicaremos al final de este artículo.
## Operadores
Los operadores son símbolos que indican cómo son manipulados los datos. Se pueden clasificar en los siguientes grupos: aritméticos, relacionales, lógicos, unitarios, a nivel de bits, de asignación, operador condicional y otros.
### Operadores aritméticos
Los operadores aritméticos los utilizamos para realizar operaciones matemáticas y son los siguientes:

| Operador | Operación | Descripción |
| --- | --- | --- |
| `+` | *Suma* | Los operandos pueden ser enteros, reales, complejos e imaginarios. |
| `-` | *Resta* | Los operandos pueden ser enteros, reales, complejos e imaginarios. |
| `*` | *Multiplicación* | Los operandos pueden ser enteros, reales, complejos e imaginarios. |
| `/` | *División* | Los operandos pueden ser enteros, reales, complejos e imaginarios. Si ambos operandos son enteros el resultado es entero. En el resto de los casos el resultado es real, complejo o imaginario. |
| `%` | *Módulo* | Los operandos tienen que ser enteros. |

El siguiente ejemplo muestra cómo utilizar estos operadores. Como ya hemos venido diciendo, observe que primero se declaran las variables y después se realizan las operaciones deseadas con ellas.
```c
int a = 10, b = 3, c;
float x = 2.0F, y;
y = x + a; // El resultado es 12.0 de tipo float
c = a / b; // El resultado es 3 de tipo int
c = a % b; // El resultado es 1 de tipo int
y = a / b; // El resultado es 3 de tipo int. Se
           // convierte a float para asignarlo a y (y = 3.0)
c = x / y; // El resultado es 0.666667 de tipo float. Se
           // convierte a int para asignarlo a c (c = 0)
```
Cuando en una operación aritmética los operandos son de diferentes tipos, se realizan las conversiones necesarias para que dicha operación se realice con la precisión más alta de esos operandos. Por ejemplo, para realizar la suma `x + a` el valor del entero a es convertido a `float`, tipo de `x`. No se modifica `a`, sino que su valor es convertido a `float` solo para realizar la suma. Los tipos `short` y `char` son convertidos de manera automática a `int`.

En una asignación, el resultado obtenido en una operación aritmética es convertido implícita o explícitamente al tipo de la variable que almacena dicho resultado (véase al final de este capítulo Conversión entre tipos de datos). Por ejemplo, del resultado de `x / y` solo la parte entera es asignada a `c`, ya que `c` es de tipo `int`. Esto indica que los reales son convertidos a enteros truncando la parte fraccionaria.

Un resultado real es redondeado. Observe la operación `x / y` para `x` igual a `2` e `y` igual a `3`; el resultado es `0.666667` en lugar de `0.666666` porque la primera cifra decimal suprimida es `6`. Cuando la primera cifra decimal suprimida es `5` o mayor de 5, la última cifra decimal conservada se incrementa en una unidad.

Quizás ahora le resulte muy sencillo calcular el área de un determinado triángulo que tenga, por ejemplo, una base de `11.5` y una altura de `3`. Veámoslo:
```c
/* tríangulo.c */
#include <stdio.h>
int main(void)
{
    double base = 11.5, altura = 3.0, area = 0.0;
    area = base * altura / 2;
    printf("Area = %f\n", area);
}
```
Ejecución del programa:
```
Area = 17.250000
```
Si desea que los ceros no significativos no aparezcan, utilice el formato `%g` en lugar de `%f`. Con este cambio el resultado que veríamos sería el siguiente:
```
Area = 17.25
```
### Operadores de relación
Los operadores de relación o de comparación permiten evaluar la igualdad y la magnitud. El resultado de una operación de relación es un valor booleano **verdadero** o **falso** (`true` o `false`). Los operadores de relación son los siguientes:
| Operador | Operación |
| --- | --- |
| `<` | ¿Primer operando *menor que* el segundo? |
| `>` | ¿Primer operando *mayor que* el segundo? |
| `<=` | ¿Primer operando *menor o igual que* el segundo? |
| `>=` | ¿Primer operando *mayor o igual que* el segundo? |
| `!=` | ¿Primer operando *distinto* del segundo? |
| `==` | ¿Primer operando *igual que* el segundo? |

Los operandos tienen que ser de un tipo primitivo. Por ejemplo:
```c
int x = 10, y = 0;
bool r = false;
r = x == y; // r = false (0) porque x no es igual a y
r = x > y; // r = true (1) porque x es mayor que y
r = x != y; // r = true (1) porque x no es igual a y
```
En expresiones largas o confusas, el uso de paréntesis y espacios puede añadir claridad, aunque no sean necesarios. Por ejemplo, las sentencias anteriores serían más fáciles de leer si las escribiéramos así:
```c
r = (x == y); // r = false (0) porque x no es igual a y
r = (x > y); // r = true (1) porque x es mayor que y
r = (x != y); // r = true (1) porque x no es igual a y
```
Estas sentencias producen los mismos resultados que las anteriores, lo que quiere decir que los paréntesis no son necesarios. ¿Por qué? Porque como veremos en el siguiente artículo de esta guía, la prioridad de los operadores `==`, `>` y `!=` es mayor que la del operador `=`, por lo que se evalúan antes que este.

Un operador de relación equivale a una pregunta relativa a cómo son dos operandos entre sí. Por ejemplo, la expresión `x == y` equivale a la pregunta *¿`x` es igual a `y`?* Una respuesta sí equivale a un valor **verdadero** (`true`) y una respuesta no equivale a un valor **falso** (`false`).
### Operadores lógicos
El resultado de una operación lógica (**AND**, **OR** y **NOT**) es un valor *booleano* verdadero o falso (`true` o `false`). Las expresiones que dan como resultado valores *booleanos* (véanse los operadores de relación) pueden combinarse para formar expresiones *booleanas* utilizando los operadores lógicos indicados a continuación. Los operandos deben ser expresiones que den un resultado verdadero o falso.

En C, toda expresión numérica con un valor distinto de `0` se corresponde con un valor verdadero y toda expresión numérica de valor `0`, con falso.

| Operador | Operación | Descripción |
| --- | --- | --- |
| `&&` | **AND** | Da como resultado verdadero si al evaluar cada uno de los operandos el resultado es verdadero. Si uno de ellos es falso, el resultado es falso. Si el primer operando es falso, el segundo operando no es evaluado. |
| `\|\|` | **OR** | El resultado es falso si al evaluar cada uno de los operandos el resultado es falso. Si uno de ellos es verdadero, el resultado es verdadero. Si el primer operando es verdadero, el segundo operando no es evaluado (el carácter | es el ASCII 124). |
| `!` | **NOT** | El resultado de aplicar este operador es falso si al evaluar su operando el resultado es verdadero, y verdadero en caso contrario. |

El resultado de una operación lógica es de tipo int. Por ejemplo:
```c
int p = 10, q = 0, r = 0; // r puede también ser declarada bool
r = (p != 0) && (q != 0); // r = 0 (false)
```
Los operandos del operador `&&` son: `p != 0` y `q != 0`. El resultado de la expresión `p != 0` es verdadero porque `p` vale `10` y el de `q != 0` es falso porque `q` es `0`. Por lo tanto, el resultado de verdadero `&&` falso es falso. Análogamente:
```c
r = (p != 0) || (q > 0);  // r = 1 (true)
r = (q < p) && (p <= 10); // r = 1 (true)
r = !r;                   // si r es 1 (true), !r es 0 (false), y viceversa
```
Los paréntesis que aparecen en las sentencias anteriores no son necesarios, pero añaden claridad. No son necesarios porque, como veremos más adelante, la prioridad de los operadores de relación es mayor que la de los operadores lógicos, lo que quiere decir que se ejecutan antes.
### Operadores unitarios
Los operadores unitarios se aplican a un solo operando y son los siguientes: `!`, `–`, `~`, `++` y `––`. El operador `!` ya lo hemos visto y los operadores `++` y `––` los veremos más adelante.

| Operador | Operación |
| --- | --- |
| `~` | Complemento a 1 (cambiar ceros por unos y unos por ceros). El carácter `~` es el ASCII 126. El operando debe ser de un tipo primitivo entero |
| `-` | Cambia  de  signo  al operando  (esto  es, con enteros se calcula el complemento a 2 que es el complemento a 1 más 1). El operando puede ser de un tipo primitivo entero o real. |

El siguiente ejemplo muestra cómo utilizar estos operadores:
```c
int a = 2, b = 0, c = 0;
c = -a;   // resultado c = -2
c = ~b;   // resultado c = -1
```
### Operadores a nivel de bits
Estos operadores permiten realizar con sus operandos las operaciones **AND**, **OR**, **XOR** y desplazamientos, bit por bit. Los operandos tienen que ser enteros.

| Operador | Operación |
| --- | --- |
| `&` | Operación **AND** a nivel de bits. |
| `\|` | Operación **OR** a nivel de bits (carácter ASCII 124). |
| `^` | Operación **XOR** a nivel de bits. |
| `<<` | Desplazamiento a la izquierda rellenando con ceros por la derecha. |
| `>>` | Desplazamiento a la derecha rellenando con el bit de signo por la  izquierda. |

Los operandos tienen que ser de un tipo primitivo entero.
```c
int a = 255, r = 0, m = 32;
r = a & 017; // r=15. Pone a cero todos los bits de a
             // excepto los 4 bits de menor peso.
r = r | m;   // r=47. Pone a 1 todos los bits de r que
             // estén a 1 en m.
r = a & ~07; // r=248. Pone a 0 los 3 bits de menor peso de a.
r = a >> 7;  // r=1. Desplazamiento de 7 bits a la derecha.
r = m << 1;  // r=64. Equivale a r = m * 2
r = m >> 1;  // r=16. Equivale a r = m / 2
```
### Operadores de asignación
El resultado de una operación de asignación es el valor almacenado en el operando izquierdo, lógicamente después de que la asignación se ha realizado. El valor que se asigna es convertido implícita o explícitamente al tipo del operando de la izquierda (véase el apartado Conversión entre tipos de datos). Incluimos aquí los operadores de incremento y decremento porque implícitamente estos operadores realizan una asignación sobre su operando.

| Operador | Operación |
| --- | --- |
| `++` | Incremento. |
| `––` | Decremento. |
| `=` | Asignación simple. |
| `*=` | Multiplicación más asignación. |
| `/=` | División más asignación. |
| `%=` | Módulo más asignación. |
| `+=` | Suma más asignación. |
| `–=` | Resta más asignación. |
| `<<=` | Desplazamiento a izquierdas más asignación. |
| `>>=` | Desplazamiento a derechas más asignación. |
| `&=` | Operación **AND** sobre bits más asignación. |
| `\|=` | Operación **OR** sobre bits más asignación. |
| `^=` | Operación **XOR** sobre bits más asignación. |

Los operandos pueden ser de un tipo primitivo o derivado, dependiendo de la  operación. A continuación, se muestran algunos ejemplos con estos operadores.
```c
int x = 0, n = 10, i = 1;
n++;         // Incrementa el valor de n en 1.
++n;         // Incrementa el valor de n en 1.
x = ++n;     // Incrementa n en 1 y asigna el resultado a x.
x = n++;     // Equivale a realizar las dos operaciones
             // siguientes en este orden: x = n; n++.
i += 2;      // Realiza la operación i = i + 2.
x *= n - 3;  // Realiza la operación x = x * (n-3) y no
             // x = x * n - 3.
n >>= 1;     // Realiza la operación n = n >> 1 la cual desplaza
             // el contenido de n 1 bit a la derecha.
```
El operador de incremento incrementa su operando en una unidad independientemente de que se utilice como sufijo o como prefijo; esto es, `n++` y `++n` producen el mismo resultado. Ídem para el operador de decremento.

Ahora bien, cuando se asigna a una variable una expresión en la que intervienen operadores de incremento o de decremento, el resultado difiere según se utilicen estos operadores como sufijo o como prefijo. Si se utilizan como  prefijo, primero se realizan los incrementos o decrementos y después la asignación (ver en el siguiente artículo la tabla de prioridad de los operadores); ídem si se utilizan como sufijo, pero, en este caso, el valor asignado corresponde a la evaluación de la expresión antes de aplicar los incrementos o los decrementos.

Según lo expuesto, ¿cuál es el valor de x después de evaluar la siguiente expresión?
```c
x = (a - b++) * (--c - d) / 2
```
Comprobemos el resultado evaluando esta expresión mediante el siguiente  programa. Observamos que en el cálculo de `x` intervienen los valores de b sin incrementar y de c decrementado, con lo que el resultado será `x` igual a 30.
```c
int main(void)
{
    float x = 0, a = 15, b = 5, c = 11, d = 4;
    x = (a - b++) * (--c - d) / 2;
    printf("x = %g, b = %g, c = %g\n", x, b, c);
}
```
Ejecución del programa:
```
x = 30, b = 6, c = 10
```
Una expresión de la complejidad de la anterior equivale a calcular la misma  expresión sin operadores `++` y `––`, pero incrementando/decrementando antes las variables afectadas por `++` y `––` como prefijo e incrementando decrementando después las variables afectadas por `++` y `––` como sufijo. Esto equivale a escribir el programa anterior así:
```c
#include <stdio.h>
int main(void)
{
    float x = 0, a = 15, b = 5, c = 11, d = 4;
    --c; // o bien c--
    x = (a - b) * (c - d) / 2;
    b++;
    printf("x = %g, b = %g, c = %g\n", x, b, c);
}
```
La aplicación de la regla anterior se complica cuando una misma variable aparece en la expresión, afectada varias veces por los operadores `++` y `––` (incluso, reutilizada a la izquierda del signo igual). Por ejemplo:
```c
x = (a - b++) * (--b - d) * b++ / (b - d);
```
Cuando se aplica la regla anterior a un caso como este, hay que tener en cuenta que los incrementos/decrementos como prefijo afectan a los cálculos que le siguen en la propia expresión; por eso habrá que intercalarlos en el lugar adecuado. Pero, además, hay que tener también en cuenta que el orden de evaluación de los operandos de cualquier operador C, incluido el orden de evaluación de los argumentos de función en una expresión de llamada a función, y el orden de evaluación de las sub-expresiones dentro de cualquier  expresión, en general, no está especificado. Esto es, el compilador los evaluará en cualquier orden, y puede elegir otro orden cuando la misma expresión se evalúa nuevamente, incluso diferentes compiladores pueden arrojar comportamientos diferentes

Lo anterior indica que no existe en C un concepto de evaluación de izquierda a derecha o de derecha a izquierda, que no debe confundirse con la asociatividad  de izquierda a derecha y de derecha a izquierda de los operadores (este concepto se ve más adelante); por ejemplo, la expresión `f1() + f2() + f3()` se analiza como `(f1() + f2()) + f3()` debida a la asociatividad de izquierda a derecha del operador `+`, pero la llamada a la función *f3* durante la ejecución se puede realizar en primer, segundo o tercer lugar. Lo mismo ocurre con el orden de evaluación de las sub-expresiones dentro de cualquier expresión, lo cual puede conducir a que, por ejemplo, dos compiladores diferentes, al evaluar la expresión:
```c
x = (a - b++) * (--b - d) * b++ / (b - d);
```
generen resultados distintos. Por todo ello, se sugiere realizar una codificación, según vimos en un ejemplo anterior, del tipo de la siguiente:
```c
--c; // o bien c--
x = (a - b) * (c - d) / 2;
b++;
```
en lugar de esta otra:
```c
x = (a - b++) * (--c - d) / 2;
```
### Operador condicional
El operador condicional (?:), llamado también operador ternario, se utiliza en expresiones condicionales, que tienen la forma siguiente:

<pre>operando1 ? operando2 : operando3</pre>

La expresión *operando1* debe ser una expresión *booleana*. La ejecución se 
realiza de la siguiente forma:
* Si el resultado de la evaluación de *operando1* es verdadero, el resultado de la expresión condicional es *operando2*.
* Si el resultado de la evaluación de *operando1* es falso, el resultado de la expresión condicional es *operando3*.

El siguiente ejemplo asigna a mayor el resultado de `(a > b) ? a : b`, que será `a` si `a` es mayor que `b` y `b` si `a` no es mayor que `b`.
```c
double a = 10.2, b = 20.5, mayor = 0;
mayor = (a > b) ? a : b;
```
Este otro ejemplo elige para imprimir la palabra `"euro"` o `"euros"` en función  del valor de `n`.
```c
int n;
// ...
printf("%d %s\n", n, (n == 1) ? "euro" : "euros");
```
### Otros operadores
Finalmente vamos a exponer el operador tamaño de, el operador coma y los operadores dirección de y contenido de.
#### Operador sizeof
El operador `sizeof` da como resultado el tamaño en bytes de su operando. Dicho  operando puede ser el identificador de una variable previamente declarada o simplemente un tipo. Por ejemplo:
```c
#include <stdio.h>
int main(void)
{
int a = 0, t = 0;
t = sizeof a;
printf("El tamaño del entero 'a' es: %d bytes\n", t);
printf("El tamaño de un entero es: %d bytes\n", sizeof(int));
}
```
Ejecución del programa:
```
El tamaño del entero 'a' es: 4 bytes
El tamaño de un entero es: 4 bytes
```
Observe que los paréntesis son opcionales, excepto cuando el operando se corresponde con un tipo de datos. El operador sizeof se puede aplicar a cualquier variable de un tipo primitivo o de un tipo derivado, excepto a una matriz de dimensión no especificada, a un campo de bits o a una función.
#### Operador coma
La coma se utiliza para encadenar varias operaciones, las cuales se ejecutarán de izquierda a derecha. El uso más común de la coma es en la sentencia `for` que veremos más adelante. Algunos ejemplos son:
```c
aux = v1, v1 = v2, v2 = aux;
for (a = 256, b = 1; b < 512; a /= 2, b *= 2) { // ... }
```
El ejemplo siguiente es una llamada a una función `fx` (proceso  análogo a cuando se llama a la función printf). En la llamada se pasan cuatro argumentos, de los cuales el segundo, `(b = 10, b – 3)`, tiene un valor `7`.
```c
fx(a, (b = 10, b - 3), c, d);
```
#### Operador dirección-de
El  operador  & (dirección  de) permite obtener la dirección  de su operando. Por ejemplo:
```c
int a = 7; // la variable entera 'a' almacena el valor 7
printf("dirección de memoria = %d, dato = %d\n", &a, a);
```
El resultado de las sentencias anteriores puede ser similar al siguiente:
```
dirección de memoria = 1245048, dato = 7
```
<!--
El resultado desde el punto de vista gráfico puede verlo en la figura siguiente. La figura representa un segmento de memoria de *n* bytes. En este segmento localizamos el entero `7` de cuatro bytes de longitud en la dirección **1245048**. La variable a representa al valor `7` y la `&a` es **1245048** (`&a`: dirección de `a` es la celda de memoria en la que se localiza `a`).
-->
#### Operador de indirección
El operador `*` (indirección) accede a un valor indirectamente a través de una dirección (un puntero). El resultado es el valor direccionado por el operando; dicho de otra forma, el valor apuntado por el puntero.

Un *puntero* es una variable capaz de contener una dirección de memoria que  indica dónde se localiza un dato de un tipo especificado (por ejemplo, un entero). La sintaxis para definir un puntero es:

<pre>tipo *identificador;</pre>

donde *tipo* es el tipo del dato apuntado e *identificador* el nombre del puntero (la variable que contiene la dirección de memoria donde está el dato).

El siguiente ejemplo declara un puntero `px` a un valor entero `x` y después asigna este valor al entero `y`.
```c
#include <stdio.h>
int main(void)
{
int *px, x = 7, y = 0; // px es un puntero a un valor entero.
px = &x;               // en el puntero px se almacena la
                       // dirección del entero x.
y = *px;               // en y se almacena el valor localizado
                       // en la dirección almacenada en px.
printf("dirección de memoria = %d, dato = %d\n", &x, x);
printf("dirección de memoria = %d, dato = %d\n", px, *px);
}
```
Ejecución del programa:
```
dirección de memoria = 1245048, dato = 7
dirección de memoria = 1245048, dato = 7
```
<!--
Observando el resultado se ve perfectamente que el contenido de `px` (`*px`) es `7`. La sentencia `y = *px` se lee "`y` igual al contenido de `px`". De una forma más explícita diríamos "`y` igual al contenido de la dirección especificada por `px`". Gráficamente puede imaginarse esta situación de la forma siguiente:

Observe que una vez que px contiene la dirección de `x`, `*px` y `x` hacen referencia al mismo dato, por lo tanto, utilizar `*px` o `x` es indistinto.
-->

Siguiente artículo: [Prioridad y orden de evaluación (de operadores en C)](/grupo932/posts/operator-priority-in-c/)
