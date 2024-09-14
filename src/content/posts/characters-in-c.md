---
title: Caracteres de C
published: 2024-09-12
description: 'Aprende los diferentes tipos y grupos de caracteres que existen en C.'
image: ''
tags: [c, recurso, caracteres, libro]
category: 'Recurso'
draft: false
language: ''
---
## Tabla de contenido
- [Letras, dígitos y carácter de subrayado](#letras-dígitos-y-carácter-de-subrayado)
- [Espacios en blanco](#espacios-en-blanco)
- [Caracteres especiales y signos de puntuación](#caracteres-especiales-y-signos-de-puntuación)
- [Secuencias de escape](#secuencias-de-escape)
___
:::note[NOTA]
Esta información fue principalmente extraída del libro *C/C++ Curso de programación (2ª ed.)*, escrita por *Fco. Javier Ceballos* (páginas 18-19).
:::
Los caracteres de C pueden agruparse en letras, dígitos, espacios en blanco, caracteres especiales, signos de puntuación y secuencias de escape.
## Letras, dígitos y carácter de subrayado
Estos caracteres son utilizados para formar las *constantes*, los *identificadores* y las *palabras clave* de C. Son los siguientes:
* Letras mayúsculas del alfabeto inglés:
<pre>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</pre>
* Letras minúsculas del alfabeto inglés:
<pre>a b c d e f g h i j k l m n o p q r s t u v w x y z</pre>
* Dígitos decimales:
<pre>0 1 2 3 4 5 6 7 8 9</pre>
* Carácter de subrayado `_` 

El compilador C trata las letras mayúsculas y minúsculas como caracteres diferentes. Por ejemplo los identificadores *Pi* y *PI* son diferentes.
## Espacios en blanco
Los caracteres espacio en blanco, tabulador horizontal, tabulador vertical, avance de página y nueva línea, son caracteres denominados *espacios en blanco*, porque la labor que desempeñan es la misma que la del espacio en blanco: actuar como separadores entre los elementos de un programa, lo cual permite escribir programas más legibles. Por ejemplo, el siguiente código:
```c
main() { printf("Hola, qué tal estáis.\n"); }
```
puede escribirse de una forma más legible así:
```c
main()
{
    printf("Hola, qué tal estáis.\n");
}
```
Los espacios en blanco en exceso son ignorados por el compilador. Según esto, el código siguiente se comporta exactamente igual que el anterior:
```c
main()
{

    printf  ("Hola, qué tal estáis.\n");
}
```
La secuencia *Ctrl+Z* en Windows o *Ctrl+D* en UNIX, es tratada por el compilador como un indicador de fin de fichero (*End Of File*).
## Caracteres especiales y signos de puntuación
Este grupo de caracteres se utiliza de diferentes formas; por ejemplo, para indicar que un identificador es una función o una matriz; para especificar una determinada operación aritmética, lógica o de relación; etc. Son los siguientes:
<pre>, . ; : ? ' " ( ) [ ] { } < ! | / \ ~ + # % & ^ * - = ></pre>

## Secuencias de escape
Cualquier carácter de los anteriores pueden también ser representado por una *secuencia de escape*. Una secuencia de escape está formada por el carácter \ seguido de una *letra* o de una *combinación de dígitos*. Son utilizadas para acciones como nueva línea, tabular y para hacer referencia a caracteres no imprimibles.

El lenguaje C tiene predefinidas las siguientes secuencias de escape:
| **Secuencia** | **Nombre**                                                                                                  |
|:-------------:|-------------------------------------------------------------------------------------------------------------|
|       \n      | Ir al principio de la siguiente línea                                                                       |
|       \t      | Tabulador horizontal                                                                                        |
|       \v      | Tabulador vertical (sólo para la impresora)                                                                 |
|       \b      | Retroceso _(backspace)_                                                                                     |
|       \r      | Retorno de carro sin avance de línea                                                                        |
|       \f      | Alimentación de página (sólo para la impresora)                                                             |
|       \a      | Alerta, pitido                                                                                              |
|       \\'     | Comilla simple                                                                                              |
|       \\"     | Comilla doble                                                                                               |
|       \\\     | Barra invertida _(backslash)_                                                                               |
|      \ddd     | Carácter ASCII. Representación octal (_d_ es un dígito del _0_ al _7_)                                      |
|      \xdd     | Carácter ASCII. Representación hexadecimal (_d_ es un dígito del _0_ al _7_ o una letra de la _A_ a la _Z_) |
|       \\?     | Signo de interrogación                                                                                      |
|       \0      | Carácter nulo                                                                                               |
:::note[NOTA]
`\?` es considerado obsoleto en compiladores modernos, ya que los [trígrafos](https://learn.microsoft.com/es-es/cpp/c-language/trigraphs?view=msvc-170), que eran la razón principal para su existencia, rara vez se usan y la mayoría de los compiladores ya no los interpretan por defecto. Además, la necesidad de evitar la ambigüedad con secuencias de caracteres como `??` ha desaparecido.
:::
Observe en la llamada a **printf** del ejemplo anterior la secuencia de escape *\n*.

Siguiente artículo: [Tipos de datos (en C)](/grupo932/posts/data-types-in-c/)
