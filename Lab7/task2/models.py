class Animal:
    def __init__(self, name, age, color):
        self.name = name
        self.age = age
        self.color = color

    def makeSound(self):
        return "Some sound"
    
    def info(self):
        return f"{self.name} is {self.age} years old"
    
    def __str__(self):
        return f"Name: {self.name}, age: {self.age}, color: {self.color}"
    

class Wolf(Animal):
    def __init__(self, name, age, color, type):
        super().__init__(name, age, color)
        self.type = type

    def makeSound(self):
        return "Wooof"
    
    def makeKill(self):
        return f"Wolf {self.name} has killed you"
    
    def __str__(self):
        return f"Wolf's name: {self.name}, type: {self.type}"
    
class Cat(Animal):
    def __init__(self, name, age, color, indoor):
        super().__init__(name, age, color)
        self.indoor = indoor

    def makeSound(self):
        return "Meow"
    
    def scratch(self):
        return f"Cat {self.name} has scratched you"
    
    def __str__(self):
        return f"Cat's name {self.name}, is indoor: {self.indoor}"

