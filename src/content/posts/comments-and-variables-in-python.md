---
title: Imprimir, comentarios y variables (en Python)
published: 2024-09-25
description: 'Aprende a imprimir, comentar y declarar variables en Python.'
image: ''
tags: [python, comentarios, variables, imprimir, tipos, recurso, ejercicio]
category: 'Recurso'
draft: false
language: ''
id: 13
---
## Tabla de contenido
- [Impresión](#impresión)
- [Comentarios](#comentarios)
- [Variables](#variables)
- [Imprimir variables](#imprimir-variables)
    - [f-strings](#f-strings)
    - [format()](#format)
    - [% (operador de formato)](#-operador-de-formato)
    - [Comas `,`](#comas-)
    - [Concatenación con `+`](#concatenación-con-)
- [Ejercicio](#ejercicio)
___
Recomiendo bastante primero leer [Python 3 - Guía](/grupo932/posts/python-course-index/python-course-index/) y [¿Cómo usar Python?](/grupo932/posts/how-to-use-python/how-to-use-python/) para tener una introducción general sobre Python y cómo usarlo. A partir de este artículo, voy a asumir que ya tienes Python instalado y sabes cómo ejecutar scripts de Python.

Aunque ya sepas cómo imprimir, comentar y declarar variables en Python o algún otro lenguaje como C, es importante repasar estos conceptos para tener una base sólida antes de avanzar a temas más complejos. Además, puede que existan algunas peculiaridades de Python que no sabías que existían.
## Impresión
Como la mayoría sabrá, cuando nos referimos a "imprimir" en los lenguajes de programación, nos referimos a mostrar texto en la pantalla. En Python, la forma más simple de imprimir algo es con la función `print()`. Por ejemplo:
```python
print("¡Hola, mundo!")
```
imprimirá...
<pre>
¡Hola, mundo!
</pre>
La estructura de la función `print()` es la siguiente:
1. La palabra clave `print`.
2. Paréntesis `()`.
3. Dentro de los paréntesis, se coloca lo que se quiere imprimir. Cuando es texto, se coloca entre comillas dobles `""`.

La función `print()` siempre imprime una nueva línea al final, por lo que cada llamada a `print()` imprimirá en una nueva línea. Por ejemplo:
```python
print("¡Hola, mundo!")
print("Me gusta la pizza.")
```
mostrará...
<pre>
¡Hola, mundo!
Me gusta la pizza.
</pre>
## Comentarios
Los comentarios son texto que se escribe en el código fuente para explicar lo que hace el código, ya sea hacia otras personas que lean el código o hacia uno mismo en el futuro. En Python, los comentarios se crean con el símbolo `#`. Por ejemplo:
```python
# Este es un comentario

# Con print() se imprime en la pantalla
print("Me gusta los videojuegos.")
print("¡Hola, mundo!") # Todo lo que sigue después de # es un comentario
```
imprimirá...
<pre>
Me gusta los videojuegos.
¡Hola, mundo!
</pre>
Como se puede ver en el ejemplo, los comentarios pueden ir en una línea separada o al final de una línea de código. Los comentarios son ignorados por el intérprete de Python y no afectan el funcionamiento del programa.
:::tip[DATO CURIOSO]
El uso de comentarios es controvertido en la programación. Algunos programadores creen que un buen código no necesita comentarios, ya que el código en sí mismo debería ser autoexplicativo. Otros creen que los comentarios son esenciales para entender el código. En general, es recomendable usar comentarios con moderación y solo cuando sea necesario.
:::
## Variables
Una variable es un espacio de memoria que se utiliza para almacenar datos. En Python, existen varios tipos de datos que se pueden almacenar en una variable, como números, texto, listas, etc. Por el momento, nos vamos a enfocar en los 4 tipos de datos más básicos:
- **Cadenas de texto**: Texto, como `"¡Hola, mundo!"` o `"Python es divertido."`. Debe ir entre comillas dobles `""`.
- **Enteros**: Números enteros, como `42` o `-10`. No llevan comillas, pueden ser positivos o negativos, y no tienen decimales.
- **Flotantes**: Números decimales, como `3.14` o `-0.001`. Deben llevar un punto decimal.
- **Booleanos**: Valores verdadero o falso, como `True` o `False`. No llevan comillas, deben empezar con mayúscula, y solo existen dos valores posibles.

Al declarar una variable, su nombre debe seguir ciertas reglas:
- Puede contener letras, números y guiones bajos `_`.
- No puede comenzar con un número.
- No puede ser una palabra reservada de Python, como `print` o `if`.

Por ejemplo:
```python
mi_variable = "¡Hola, mundo!"
un_numero = 42
flotante = 3.14
es_verdadero = True
```
Es importante recordar que en Python, las variables son *dinámicas*, lo que significa que no es necesario declarar el tipo de dato que va a almacenar la variable. Python infiere automáticamente el tipo de dato en función del valor que se le asigna. Por ejemplo:
```python
mi_variable = "¡Hola, mundo!" # mi_variable es una cadena de texto
mi_variable = 42 # mi_variable ahora es un entero
mi_variable = 3.14 # mi_variable ahora es un flotante
mi_variable = True # mi_variable ahora es un booleano
```
Y no dará error. Aunque desde Python 3.5 en adelante se puede usar *anotaciones de tipo* para indicar el tipo de dato de una variable; esto es solo para ayudar a los programadores a entender el código y no afecta el funcionamiento del programa, ni despliega errores si el tipo de dato no coincide con la anotación.

Para usar anotaciones de tipo, se coloca dos puntos `:` después del nombre de la variable, seguido del tipo de dato.
- Para cadenas de texto, se usa `str`.
- Para enteros, se usa `int`.
- Para flotantes, se usa `float`.
- Para booleanos, se usa `bool`.

Ejemplo:
```python
cadena: str = "¡Hola, mundo!"
entero: int = 42
flotante: float = 3.14
booleano: bool = True
```
:::tip[TIP]
A pesar que Python permite reasignar variables con diferentes tipos de datos, es una buena práctica mantener el tipo de dato consistente en una variable para evitar confusiones y errores en el código.
:::
## Imprimir variables
Para imprimir variables en Python, podemos hacerlo directamente en la función `print()`. Por ejemplo:
```python
texto = "¡Hola, mundo!" # Declaramos una variable "texto"
num = 1000 # Declaramos una variable "num"
print(texto)
print(num)
```
imprimirá...
<pre>
¡Hola, mundo!
1000
</pre>
### f-strings
Para combinar texto y variables en una sola línea, se puede usar la *f-string* (cadena formateada) de Python. Para ello, se coloca una `f` o `F` antes de las comillas de apertura y se encierra la variable entre llaves `{}`. Por ejemplo:
```python
nombre = "Juan"
edad = 30
print(f"¡Hola, me llamo {nombre} y tengo {edad} años!")
```
imprimirá...
<pre>
¡Hola, me llamo Juan y tengo 30 años!
</pre>
Nota como lo primero que se escribe es `f` o `F`, seguido de las comillas dobles `""`, y dentro de las comillas se encierra la variable entre llaves `{}`. Las f-strings son una forma conveniente y legible de combinar texto y variables en Python.
### format()
Otra forma de combinar texto y variables es con el método `format()`. Por ejemplo:
```python
nombre = "Juan"
edad = 30
print("¡Hola, me llamo {} y tengo {} años!".format(nombre, edad))
```
### % (operador de formato)
Otro método es con el operador `%`. Por ejemplo:
```python
nombre = "Maria"
edad = 25
print("¡Hola, me llamo %s y tengo %d años!" % (nombre, edad))
```
### Comas `,`
También puedes simplemente usar comas `,` para imprimir texto y variables en la misma línea. Por ejemplo:
```python
nombre = "Sofia"
edad = 20
print("¡Hola, me llamo", nombre, "y tengo", edad, "años!")
```
### Concatenación con `+`
Y por último, también puedes concatenar texto y variables con el operador `+`. Por ejemplo:
```python
nombre = "Carlos"
edad = 35
print("¡Hola, me llamo " + nombre + " y tengo " + str(edad) + " años!")
```
## Ejercicio
Ahora que sabes cómo imprimir, comentar y declarar variables en Python, te propongo un ejercicio para practicar:
* Escribe un programa en Python que defina variables (`nombre`, `edad` y `ciudad`) y luego imprima un mensaje que diga algo como: "¡Hola, me llamo `nombre`, tengo `edad` años y vivo en `ciudad`.".

<button onclick="
let solution = document.getElementById('solution-13');
if (solution.style.display === 'none') {
  solution.style.display = 'block';
} else {
  solution.style.display = 'none';
}
" class="markdown-btn">Solución</button>
<div id="solution-13" style="display: none;">

```python
nombre = "Persona"
edad = 21
ciudad = "Ensenada"
print(f"¡Hola, me llamo {nombre}, tengo {edad} años y vivo en {ciudad}.")
```

</div>

Siguiente artículo: [Conversión de tipos (en Python)](/grupo932/posts/type-casting-in-python/)
