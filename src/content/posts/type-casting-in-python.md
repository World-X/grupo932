---
title: Conversión de tipos (en Python)
published: 2024-09-27
description: 'A veces necesitamos convertir un tipo de dato a otro, ya sea para realizar operaciones o para mostrarlo de una forma específica.'
image: ''
tags: [python, tipos, casting, recurso]
category: 'Recurso'
draft: false
language: ''
id: 17
---
## Tabla de contenido
- [Obtener el tipo de una variable](#obtener-el-tipo-de-una-variable)
- [Conversión de tipos](#conversión-de-tipos)
    - [`str()`](#str)
        - [`int` a `str`](#int-a-str)
        - [`float` a `str`](#float-a-str)
        - [`bool` a `str`](#bool-a-str)
    - [`int()`](#int)
        - [`str` a `int`](#str-a-int)
        - [`float` a `int`](#float-a-int)
        - [`bool` a `int`](#bool-a-int)
    - [`float()`](#float)
        - [`str` a `float`](#str-a-float)
        - [`int` a `float`](#int-a-float)
        - [`bool` a `float`](#bool-a-float)
    - [`bool()`](#bool)
        - [`str` a `bool`](#str-a-bool)
        - [`int` a `bool`](#int-a-bool)
        - [`float` a `bool`](#float-a-bool)
___
Artículo previo: [Imprimir, comentarios y variables (en Python)](/grupo932/posts/comments-and-variables-in-python/)
## Obtener el tipo de una variable
Antes de continuar, recomiendo bastante que leas [esta sección](/grupo932/posts/comments-and-variables-in-python/#variables) para saber lo básico sobre variables en Python.

Para obtener el tipo de una variable en Python, podemos utilizar la función `type()`. Por ejemplo:
```python
numero = 2024
tipo = type(numero)
print(tipo)
```
o simplemente...
```python
print(type(2024))
```
devuelve:
```
<class 'int'>
```
Saber el tipo de variable puede ser útil al depurar o validar datos.
## Conversión de tipos
La conversión de tipos, conocida como *casting* o *type casting* en inglés, es el proceso de convertir un tipo de dato a otro. A veces una función espera un tipo de dato específico y necesitamos convertir el tipo de dato que tenemos a ese tipo.

En Python, la conversión de tipos se realiza con funciones específicas. Estas funciones no transforman la variable original, sino que devuelven una nueva variable con el tipo de dato deseado. Si queremos que la variable original cambie de tipo, debemos asignarle el resultado de la función de conversión. Por ejemplo:
```python
var = "10"
print(int(var))
print(type(var))
```
devuelve:
```
10
<class 'str'>
```
Por otro lado...
```python
var = "10"
var = int(var)
print(var)
print(type(var))
```
devuelve:
```
10
<class 'int'>
```
A continuación se presentan las funciones de conversión y casos comunes de uso.
### `str()`
La función `str()` convierte un objeto en una cadena de texto.
#### `int` a `str`
```python
print(str(2024))
```
devuelve:
```
2024
```
:::tip[TIP]
Es raro que `str()` produzca un error, ya que puede convertir **cualquier objeto** en una cadena de texto, excepto en casos muy específicos.
:::
#### `float` a `str`
```python
print(str(3.14))
```
devuelve:
```
3.14
```
#### `bool` a `str`
```python
print(str(True))
```
devuelve:
```
True
```
### `int()`
La función `int()` convierte un objeto en un número entero.
#### `str` a `int`
```python
print(int("2024"))
```
devuelve:
```
2024
```
Si la cadena no es un número, se producirá un error. Por ejemplo:
```python
print(int("hola"))
```
devuelve:
```
ValueError: invalid literal for int() with base 10: 'hola'
```
#### `float` a `int`
Al convertir un número flotante a entero, Python truncará el número. Por ejemplo:
```python
print(int(3.14))
```
devuelve:
```
3
```
#### `bool` a `int`
```python
print(int(True))
```
devuelve:
```
1
```
### `float()`
La función `float()` convierte un objeto en un número flotante.
#### `str` a `float`
```python
print(float("3.14"))
```
devuelve:
```
3.14
```
#### `int` a `float`
```python
print(float(2024))
```
devuelve:
```
2024.0
```
#### `bool` a `float`
```python
print(float(True))
```
devuelve:
```
1.0
```
### `bool()`
La función `bool()` convierte un objeto en un valor booleano.
#### `str` a `bool`
Si la cadena está vacía, `bool()` devolverá `False`. De lo contrario, devolverá `True`. Por ejemplo:
```python
print(bool("hola"))
```
devuelve:
```
True
```
#### `int` a `bool`
Si el número es `0`, `bool()` devolverá `False`. De lo contrario, devolverá `True`. Por ejemplo:
```python
print(bool(0))
```
devuelve:
```
False
```
#### `float` a `bool`
```python
print(bool(3.14))
```
devuelve:
```
True
```
Más adelante se verán más funciones de conversión avanzadas y casos de uso. En el siguiente artículo se hablará sobre entrada de datos y cómo convertirlos a diferentes tipos, usando todo lo que hemos aprendido hasta ahora. ¡Hasta la próxima! 🐍

Siguiente artículo: [Entrada de datos (en Python)](/grupo932/posts/input-in-python/)
