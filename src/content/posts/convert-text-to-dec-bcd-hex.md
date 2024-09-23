---
title: Convertir texto a Decimal, Binario y Hexadecimal
published: 2024-09-10
description: 'Una colección de recursos para convertir texto a decimal (ASCII), binario, hexadecimal, etcétera, y viceversa.'
image: ''
tags: [binario, ascii, hexadecimal, decimal, trabajo, tarea, organizacion, computadoras, python, recurso]
category: 'Recurso'
draft: false 
language: ''
id: 3
---
## Tabla de contenido
- [Herramientas](#herramientas)
    - [Conversores en línea](#conversores-en-línea)
        - [Texto a decimal](#texto-a-decimal)
        - [Texto a binario](#texto-a-binario)
        - [Texto a hexadecimal](#texto-a-hexadecimal)
        - [Decimal a binario](#decimal-a-binario)
        - [Decimal a hexadecimal](#decimal-a-hexadecimal)
        - [Binario a hexadecimal](#binario-a-hexadecimal)
    - [Conversor en Python](#conversor-en-python)
___
**Cada carácter en un texto está asociado a un valor numérico** en la [tabla ASCII](https://elcodigoascii.com.ar/), que es un estándar utilizado para representar letras, números, símbolos y controladores en código binario. Entender cómo convertir texto a su forma decimal no solo es útil para la programación y el análisis de datos, sino que también es esencial para comprender cómo las computadoras procesan y almacenan información.
## Herramientas
A continuación se muestran algunas herramientas para convertir de texto a sistemas númericos y viceversa.
### Conversores en línea
#### Texto a decimal
- https://cryptii.com/pipes/text-decimal
- https://capitalizemytitle.com/text-to-decimal-converter/
- https://onlinetexttools.com/convert-text-to-decimal
#### Texto a binario
- https://www.rapidtables.com/convert/number/ascii-to-binary.html
- https://www.duplichecker.com/text-to-binary.php
- https://www.convertbinary.com/text-to-binary/
#### Texto a hexadecimal
- https://www.rapidtables.com/convert/number/ascii-to-hex.html
- https://www.duplichecker.com/text-to-hex.php
- https://magictool.ai/tool/text-to-hex-converter/
#### Decimal a binario
- https://www.rapidtables.com/convert/number/decimal-to-binary.html
- https://www.binaryhexconverter.com/decimal-to-binary-converter
- https://www.inchcalculator.com/decimal-to-binary-converter/
#### Decimal a hexadecimal
- https://www.rapidtables.com/convert/number/decimal-to-hex.html
- https://www.geeksforgeeks.org/decimal-to-hex-converter/
- https://www.binaryhexconverter.com/decimal-to-hex-converter
#### Binario a hexadecimal
- https://www.rapidtables.com/convert/number/binary-to-hex.html
- https://www.binaryhexconverter.com/binary-to-hex-converter
- https://www.duplichecker.com/binary-to-hex.php
### Conversor en Python
Un problema de usar varias herramientas de conversión que encuentren en el Internet es que pueden usar alguna versión de ASCII que es diferente a la que los demás usan, lo cual puede hacer las traducciones inconsistentes. Es por eso que decidí compartir este código de Python, para simplificar las conversiones bajo el mismo estándar.

Puedes copiar y pegar el siguiente código en una IDE de Python (como SPYDER) para correrlo. Desplegará una ventana donde puedes escribir una línea de texto que será traducida a sus valores decimales (en ASCII), además de convertirlos a binario y hexadecimal. Este código fue hecho por ChatGPT, y ligeramente modificado por mí.
```python
import tkinter as tk

def process_text(display_format):
    text = entry.get()
    output1.config(state=tk.NORMAL)
    output2.config(state=tk.NORMAL)
    output3.config(state=tk.NORMAL)
    output1.delete(1.0, tk.END)
    output2.delete(1.0, tk.END)
    output3.delete(1.0, tk.END)
    for char in text:
        ascii_code = ord(char)
        binary_code = bin(ascii_code)[2:].zfill(8)
        hex_code = hex(ascii_code)[2:].upper()
        if display_format == "lines":
            output1.insert(tk.END, f"{char}: {ascii_code}\n")
            output2.insert(tk.END, f"{char}: {binary_code}\n")
            output3.insert(tk.END, f"{char}: {hex_code}\n")
        else:
            output1.insert(tk.END, f"{ascii_code} ")
            output2.insert(tk.END, f"{binary_code} ")
            output3.insert(tk.END, f"{hex_code} ")
    output1.config(state=tk.DISABLED)
    output2.config(state=tk.DISABLED)
    output3.config(state=tk.DISABLED)
def create_vertical_layout(root):
    frame = tk.Frame(root)
    label = tk.Label(frame, text="Introduce el texto:", font=("Arial", 20))
    label.pack(padx=10, pady=5, fill=tk.X, expand=True)
    global entry
    entry = tk.Entry(frame, font=("Arial", 16))
    entry.pack(padx=10, pady=5, fill=tk.X, expand=True)
    button_frame = tk.Frame(frame)
    button_frame.pack(fill=tk.X, expand=True)
    button1 = tk.Button(button_frame, text="Procesar (separado)", command=lambda: process_text("separated"))
    button1.pack(side=tk.LEFT, padx=5, fill=tk.X, expand=True)
    button2 = tk.Button(button_frame, text="Procesar (líneas)", command=lambda: process_text("lines"))
    button2.pack(side=tk.LEFT, padx=5, fill=tk.X, expand=True)
    global output1, output2, output3
    output1 = tk.Text(frame, height=2, width=30, state=tk.DISABLED)
    output1.pack(padx=10, pady=5, fill=tk.BOTH, expand=True)
    output2 = tk.Text(frame, height=2, width=30, state=tk.DISABLED)
    output2.pack(padx=10, pady=5, fill=tk.BOTH, expand=True)
    output3 = tk.Text(frame, height=2, width=30, state=tk.DISABLED)
    output3.pack(padx=10, pady=5, fill=tk.BOTH, expand=True)
    frame.pack(padx=20, pady=20, fill=tk.BOTH, expand=True)
root = tk.Tk()
create_vertical_layout(root)
root.mainloop()
```

