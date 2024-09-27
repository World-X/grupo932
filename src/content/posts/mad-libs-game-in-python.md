---
title: Crea tu propio juego de "Mad Libs" (en Python)
published: 2024-09-27
description: 'Pon a prueba tus habilidades de entrada y salida de datos en Python con este proyecto fácil.'
image: ''
tags: [python, juego, proyecto, ejercicio, input]
category: 'Proyecto'
draft: false 
language: ''
id: 19
---
Antes de comenzar, debes saber...
- Qué tipos de datos existen.
- Imprimir cadenas de texto y variables con `print()`.
- Convertir tipos de datos, con `str()`, `int()` y `float()`.
- Obtener datos del usuario con `input()`.

:::tip[TIP]
Si no estás familiarizado con estos conceptos, te recomiendo leer los siguientes artículos:
- [Imprimir, comentarios y variables (en Python)](/grupo932/posts/comments-and-variables-in-python/)
- [Conversión de tipos (en Python)](/grupo932/posts/type-casting-in-python/)
- [Entrada de datos (en Python)](/grupo932/posts/input-in-python/)
:::
## Introducción
En este proyecto, vamos a crear un juego de *Mad Libs* en Python. *Mad Libs* es un juego de palabras en el que se pide a un jugador que complete espacios en blanco en una historia. La historia contiene espacios en blanco con una indicación de qué tipo de palabra se necesita. Por ejemplo, *sustantivo*, *adjetivo*, *verbo*, etc.
## Procedimiento
1. Crea un archivo con extensión `.py` en tu editor de código preferido.
2. Copia y pega el siguiente código en tu archivo:
```python
# Pide al usuario que complete los espacios en blanco
sustantivo = input("Escribe un sustantivo: ")
adjetivo = input("Escribe un adjetivo: ")
verbo = input("Escribe un verbo: ")

# Imprime la historia con los datos del usuario
print(f"El {sustantivo} es {adjetivo} y le gusta {verbo}.")
```
3. Guarda el archivo y ejecútalo.
4. Sigue las instrucciones que aparecen en la consola.
5. ¡Disfruta de tu historia personalizada!
## Recomendaciones
### Experimenta con diferentes historias y palabras
Nuestro código de ejemplo tiene una historia un poco aburrida. Puedes cambiar la historia y las palabras para hacerla más interesante. Por ejemplo:
```python
# Pide al usuario que complete los espacios en blanco
ciudad = input("Escribe una ciudad: ")
animal = input("Escribe un animal: ")
adjetivo1 = input("Escribe un adjetivo: ")
adjetivo2 = input("Escribe otro adjetivo: ")

# Imprime la historia con los datos del usuario
print(f"En la ciudad de {ciudad}, había un {animal} muy {adjetivo1}")
print(f"El {animal} era tan {adjetivo2} que todos le temían.")
```
### El punto
El objetivo de este proyecto es que te diviertas y experimentes con la entrada y salida de datos en Python. No te preocupes si tu historia no tiene sentido, ¡la idea es pasar un buen rato!

Si crees que este proyecto es demasiado fácil, entonces felicidades, porque eso significa que ya todos estos conceptos son básicos para ti. Más adelante en el curso, veremos proyectos más difíciles y complejos, pero por ahora debemos empezar con lo básico.
