---
title: Convertir texto a DEC, BCD y HEX
published: 2024-09-11
description: 'Una colección de recursos para convertir texto a decimal (ASCII), binario, hexadecimal, etcétera, y viceversa.'
image: './test2.jpg'
tags: [binario, ascii, hexadecimal, decimal, trabajo, tarea, organizacion, computadoras, python, recurso]
category: 'Recurso'
draft: false 
language: ''
---
## Tabla de contenido
- Conceptos
    - ASCII
    - Sistema númerico binario
    - Sistema númerico hexadecimal
- Recursos
    - ASCII
- Herramientas
    - Conversores en línea
    - Conversor en Python
___
**Cada carácter en un texto está asociado a un valor numérico** en la [tabla ASCII](https://elcodigoascii.com.ar/), que es un estándar utilizado para representar letras, números, símbolos y controladores en código binario. Entender cómo convertir texto a su forma decimal no solo es útil para la programación y el análisis de datos, sino que también es esencial para comprender cómo las computadoras procesan y almacenan información.

A continuación se muestran algunos recursos y herramientas que estén relacionados con el tema.
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

