import pandas as pd

# Step 1: Load the CSV file
df = pd.read_csv("Backend/data/Titanic-Dataset.csv")  # relative path from project root

# Step 2: Convert and save to JSON format
df.to_json("Backend/data/titanic.json", orient="records", indent=4)

print("✅ CSV successfully converted to JSON.")