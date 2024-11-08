// Родительская функциz
function ElectricalDevice(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}

// Метод для включения прибора в розетку
ElectricalDevice.prototype.plugIn = function() {
    this.isPlugged = true;
    console.log(`${this.name} is now plugged in.`);
};

// Метод для выключения прибора из розетки
ElectricalDevice.prototype.unplug = function() {
    this.isPlugged = false;
    console.log(`${this.name} is now unplugged.`);
};

// Метод для расчета потребляемой мощности
ElectricalDevice.prototype.getPowerConsumption = function() {
    return this.isPlugged ? this.power : 0;
};

// Конструктор для настольной лампы
function TableLamp(name, power, color) {
    ElectricalDevice.call(this, name, power);
    this.color = color;
}

// Устанавливаем делегирующую связь
TableLamp.prototype = Object.create(ElectricalDevice.prototype);
TableLamp.prototype.constructor = TableLamp;

// Дополнительный метод для лампы
TableLamp.prototype.changeColor = function(newColor) {
    this.color = newColor;
    console.log(`${this.name} color changed to ${this.color}`);
};

// Конструктор для компьютера
function Computer(name, power, brand) {
    ElectricalDevice.call(this, name, power);
    this.brand = brand;
}

// Устанавливаем делегирующую связь
Computer.prototype = Object.create(ElectricalDevice.prototype);
Computer.prototype.constructor = Computer;

// Дополнительный метод для компьютера
Computer.prototype.showBrand = function() {
    console.log(`This computer is a ${this.brand}.`);
};

// Создаем экземпляры приборов
const lamp = new TableLamp("Desk Lamp", 15, "white");
const pc = new Computer("PC", 200, "Dell");

// Включаем приборы в розетку
lamp.plugIn();
pc.plugIn();

// Проверка мощности
console.log("Total power consumption:", lamp.getPowerConsumption() + pc.getPowerConsumption(), "W");

// Используем дополнительные методы
lamp.changeColor("blue");
pc.showBrand();

// Выключаем приборы
lamp.unplug();
pc.unplug();

// Проверка мощности после выключения
console.log("Total power consumption:", lamp.getPowerConsumption() + pc.getPowerConsumption(), "W");
