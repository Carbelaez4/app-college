import seaborn as sns
import matplotlib.pyplot as plt
import pandas as pd

sns.set(style="whitegrid")

dataframecentro = pd.read_excel("./data/DatosCentro.xlsx")


# Grafica de barras
colors = ["#c25e68", "#a7587b", "#835783", "#5e557e", "#3f506e", "#2f4858"]

plt.figure(figsize=(8, 5))
sns.countplot(x='Género', data=dataframecentro, palette=colors)
plt.title("Cantidad de estudiantes por género")
plt.xlabel("Género")
plt.ylabel("Cantidad de estudiantes")
plt.tight_layout()
plt.show()


plt.figure(figsize=(8, 5))
sns.histplot(dataframecentro["Edad"], bins=10, color="#5e557e", kde=True)
plt.title("Distribución de edades de los estudiantes")
plt.xlabel("Edad")
plt.ylabel("Cantidad de estudiantes")
plt.tight_layout()
plt.show()


plt.figure(figsize=(10, 6))
sns.countplot(
    y='Programa académico',
    data=dataframecentro,
    order=dataframecentro['Programa académico'].value_counts().index,
    palette="viridis"
)
plt.title("Cantidad de estudiantes por programa académico")
plt.xlabel("Cantidad de estudiantes")
plt.ylabel("Programa académico")
plt.tight_layout()
plt.show()


plt.figure(figsize=(10, 6))
sns.boxplot(
    x='Promedio notas',
    y='Programa académico',
    data=dataframecentro,
    palette="coolwarm"
)
plt.title("Distribución del promedio de notas por programa académico")
plt.xlabel("Promedio de notas")
plt.ylabel("Programa académico")
plt.tight_layout()
plt.show()




# Conteo de estados académicos
estado_counts = dataframecentro['Estado académico'].value_counts()

# Gráfico de pastel
plt.figure(figsize=(6, 6))
plt.pie(
    estado_counts,
    labels=estado_counts.index,
    autopct='%1.1f%%',
    startangle=140,
    colors=sns.color_palette("Set3")
)
plt.title("Distribución de estudiantes por estado académico")
plt.tight_layout()
plt.show()