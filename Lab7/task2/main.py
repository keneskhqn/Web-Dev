from models import Animal, Wolf, Cat

def main():
    a = Animal("Tuzik", 5, "Brown")
    b = Wolf("Borz", 6, "Grey", "Mountain Wolf")
    c = Cat("Barsik", 2, "White", "Home Cat")



    animals = [a, b, c]
    for animal in animals:
        print(animal)
        print(animal.makeSound())
        print(animal.info())
        print("--------")
    
if __name__ == "__main__":
    main()
