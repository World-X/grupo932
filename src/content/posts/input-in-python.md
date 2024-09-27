---
title: Entrada de datos (en Python)
published: 2024-09-27
description: 'Aprende cómo obtener datos del usuario en Python con la función `input()`.'
image: ''
tags: [python, input, entrada, datos, recurso, ejercicio]
category: 'Recurso'
draft: false 
language: ''
id: 18
---
## Tabla de contenido
- [`input()`](#input)
- [Ejercicios](#ejercicios)
___
Artículo previo: [Conversión de tipos (en Python)](/grupo932/posts/type-casting-in-python/)
## `input()`
La entrada de datos es una parte fundamental de cualquier programa. En Python, la función `input()` se utiliza para obtener datos del usuario como una cadena de texto. Para poder usar `input()`, simplemente se llama a la función y se almacena el resultado en una variable. Por ejemplo:
```python
entrada = input()
print(entrada)
```
Si ejecutamos el código anterior y escribimos `Hola, mundo!`, la salida será...
```
Hola, mundo!
```
También podemos pasar como argumento a `input()` un mensaje que se mostrará al usuario. Por ejemplo:
```python
nombre = input("¿Cómo te llamas? ")
print(f"¡Hola, {nombre}!")
```
Si ejecutamos el código anterior y escribimos `Romeo`, la salida será...
```
¿Cómo te llamas? Romeo
¡Hola, Romeo!
```
Al llamar a `input()`, el programa se detiene y espera a que el usuario escriba algo y presione la tecla `Enter`. La entrada del usuario siempre se guarda como una cadena de texto, por lo que si necesitamos un número, debemos convertirlo con `int()` o `float()`. Por ejemplo:
```python
edad = int(input("¿Cuántos años tienes? "))
print(f"Tienes {edad} años.")
```
mostrará:
```
¿Cuántos años tienes? 18
Tienes 18 años.
```
En este ejemplo específico no era necesario convertir la entrada a un número, pero si por cualquier motivo deseamos realizar operaciones matemáticas con `edad`, necesitamos convertirlo a un número entero. Por ejemplo:
```python
edad = int(input("¿Cuántos años tienes? "))
edad_siguiente = edad + 1
print(f"El próximo año tendrás {edad_siguiente} años.")
```
## Ejercicios
Ahora que sabes cómo obtener datos del usuario, intenta realizar uno, varios, o todos los siguientes programas como ejercicios:
1. Pedir al usuario su nombre y mandar un saludo.
2. Pedir al usuario la altura y el ancho de un rectángulo y muestre su área.
3. Pedir al usuario un número y mostrar su cuadrado.

<button onclick="
let solution = document.getElementById('solution-18-1');
if (solution.style.display === 'none') {
  solution.style.display = 'block';
} else {
  solution.style.display = 'none';
}
" class="markdown-btn">Solución 1</button>

<div id="solution-18-1" style="display: none;">

```python
nombre = input("¿Cómo te llamas? ")
print(f"¡Hola, {nombre}! Saludos.")
```

</div>

<button onclick="
let solution = document.getElementById('solution-18-2');
if (solution.style.display === 'none') {
  solution.style.display = 'block';
} else {
  solution.style.display = 'none';
}
" class="markdown-btn">Solución 2</button>

<div id="solution-18-2" style="display: none;">

```python
altura = float(input("Introduce la altura del rectángulo: "))
ancho = float(input("Introduce el ancho del rectángulo: "))
area = altura * ancho
print(f"El área del rectángulo es {area}.")
```

</div>

<button onclick="
let solution = document.getElementById('solution-18-3');
if (solution.style.display === 'none') {
  solution.style.display = 'block';
} else {
  solution.style.display = 'none';
}
" class="markdown-btn">Solución 3</button>

<div id="solution-18-3" style="display: none;">

```python
numero = int(input("Introduce un número: "))
cuadrado = numero ** 2
print(f"El cuadrado de {numero} es {cuadrado}.")
```

</div>





