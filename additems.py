import json

def add_menu_item(file_path="food.json"):
    print("--- Add New Menu Item ---")

    name = input("Enter Item Name: ")
    
    while True:
        category = input("Enter Category (Pizza, Burgers, Fries, Miscellaneous): ")
        if category in ["Pizza", "Burgers", "Fries", "Miscellaneous"]:
            break
        else:
            print("Invalid category. Please use one of the listed categories.")
    
    while True:
        try:
            price_input = input("Enter Price (e.g., 250): ")
            price = float(price_input)
            price = int(price) if price == int(price) else price
            break
        except ValueError:
            print("Invalid price. Please enter a number.")
            
    description = input("Enter Description: ")
    image_path = input("Enter Image Path (e.g., images/new_item.jpg): ")

    new_item = {
        "name": name,
        "category": category,
        "price": price,
        "description": description,
        "image": image_path
    }

    data = []
    
    try:
        with open(file_path, 'r') as f:
            content = f.read()
            if content:
                data = json.loads(content)
            else:
                data = [] 
    except FileNotFoundError:
        print(f"File '{file_path}' not found.")
    except json.JSONDecodeError:
        print(f"Error reading {file_path}.")
    
    data.append(new_item)

    try:
        with open(file_path, 'w') as f:
            json.dump(data, f, indent=2)
        print("\nSuccess! New item added to food.json:")
        print(new_item)
    except Exception as e:
        print(f"\nAn error occurred while writing to the file: {e}")


add_menu_item()