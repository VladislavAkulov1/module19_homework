// Базовый класс для электроприборов
class ElectricalAppliance {
    constructor(name, power) {
      this.name = name;
      this.power = power;
      this.isPlugged = false;
    }
  
    // Метод для включения прибора в розетку
    plugIn() {
      console.log(`${this.name} is plugged in.`);
      this.isPlugged = true;
    }
  
    // Метод для выключения прибора из розетки
    unplug() {
      console.log(`${this.name} is unplugged.`);
      this.isPlugged = false;
    }
  
    // Метод для получения потребляемой мощности (возвращает 0, если прибор не включен)
    getPowerConsumption() {
      return this.isPlugged ? this.power : 0;
    }
  }
  
  // Класс для лампы, наследует ElectricalAppliance
  class Lamp extends ElectricalAppliance {
    constructor(name, power, brightness) {
      super(name, power);
      this.brightness = brightness;
    }
  
    // Метод для изменения яркости лампы
    adjustBrightness(level) {
      console.log(`${this.name} brightness set to ${level}.`);
      this.brightness = level;
    }
  }
  
  // Класс для компьютера, наследует ElectricalAppliance
  class Computer extends ElectricalAppliance {
    constructor(name, power, processor) {
      super(name, power);
      this.processor = processor;
    }
  
    // Метод для запуска программы на компьютере
    runProgram(programName) {
      console.log(`${this.name} is running ${programName} on ${this.processor}.`);
    }
  }
  
  // Создаем экземпляры приборов
  const tableLamp = new Lamp('Table Lamp', 15, 'medium');
  const desktopComputer = new Computer('Desktop Computer', 400, 'Intel i7');
  
  // Включаем приборы
  tableLamp.plugIn();
  desktopComputer.plugIn();
  
  // Используем уникальные методы приборов
  tableLamp.adjustBrightness('high');
  desktopComputer.runProgram('Photoshop');
  
  // Расчет потребляемой мощности
  const totalPowerConsumption = tableLamp.getPowerConsumption() + desktopComputer.getPowerConsumption();
  console.log(`Total power consumption: ${totalPowerConsumption}W`);
  
  // Выключаем лампу и пересчитываем мощность
  tableLamp.unplug();
  const updatedPowerConsumption = tableLamp.getPowerConsumption() + desktopComputer.getPowerConsumption();
  console.log(`Updated power consumption: ${updatedPowerConsumption}W`);
  