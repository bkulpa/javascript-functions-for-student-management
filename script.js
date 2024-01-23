// Zadanie 1 - Wykonaj funkcję dodającą, odejmującą, mnożącą oraz dzielącą 2 wartości przekazane w parametrze (4 funkcje).

// Wynik arytmetyczny powinien wyświetlić się na konsoli
// Jeżeli któryś z zadanych parametrów nie będzię liczbą, funkcja powinna zwrócić napis: "Niepoprawny parametr".
// Jeżeli funkcja zostanie uruchomiona tylko z jednym parametrem, powinien zostać on wyświetlony jako wynik działania funkcji.

const add = (number1 = 0, number2 = 0) => {
  if (typeof number1 === "number" && typeof number2 === "number") {
    const result = number1 + number2;
    console.log(result);
    return result;
  }
  console.log("Niepoprawny parametr");
  return "Niepoprawny parametr";
};

const substract = (number1 = 0, number2 = 0) => {
  if (typeof number1 === "number" && typeof number2 === "number") {
    const result = number1 - number2;
    console.log(result);
    return result;
  }
  console.log("Niepoprawny parametr");
  return "Niepoprawny parametr";
};

const multiply = (number1 = 0, number2 = 1) => {
  if (typeof number1 === "number" && typeof number2 === "number") {
    const result = number1 * number2;
    console.log(result);
    return result;
  }
  console.log("Niepoprawny parametr");
  return "Niepoprawny parametr";
};

const divide = (number1 = 0, number2 = 1) => {
  if (
    typeof number1 === "number" &&
    typeof number2 === "number" &&
    number2 !== 0
  ) {
    const result = number1 / number2;
    console.log(result);
    return result;
  } else if (number2 === 0) {
    console.log("Niepoprawny parametr: Nie można dzielić przez 0");
    return "Niepoprawny parametr: Nie można dzielić przez 0";
  }
  console.log("Niepoprawny parametr");
  return "Niepoprawny parametr";
};

// Zadanie 2 - Utwórz tablicę obiektów, zawierających 5 studentów.

// Każdy obiekt powinien zawierać pola: imię, nazwisko, pesel, kierunek studiów.

const studentList = [
  {
    firstName: "Jan",
    lastName: "Kowalski",
    PESEL: 11223344556,
    fieldOfStudy: "Informatics",
  },
  {
    firstName: "Tytus",
    lastName: "Bomba",
    PESEL: 11223344550,
    fieldOfStudy: "Military",
  },
  {
    firstName: "Bogdan",
    lastName: "Boner",
    PESEL: 11223324550,
    fieldOfStudy: "Accountancy",
  },
  {
    firstName: "Geralt",
    lastName: "Riv",
    PESEL: 11243344550,
    fieldOfStudy: "Biology",
  },
  {
    firstName: "Stefan",
    lastName: "Skellen",
    PESEL: 11223344551,
    fieldOfStudy: "Pedagogics",
  },
];

// Zadanie 3 - Utwórz funkcję, przyjmującą jako parametr tablicę obiektów, utworzoną w zadaniu nr 2.

// funkcja powinna wyświetlić na konsoli dane wszystkich studentów
// w postacii: Student 1: Jan Kowalski, PESEL: 111222333, Kierunek: Informatyka dla każdego studenta w tablicy.

const viewStudents = (objectsArray) => {
  for (let i = 0; i < objectsArray.length; i++) {
    const student = `Student ${i + 1}: ${objectsArray[i].firstName} ${
      objectsArray[i].lastName
    }, PESEL: ${objectsArray[i].PESEL}, Kierunek: ${
      objectsArray[i].fieldOfStudy
    }`;
    console.log(student);
  }
};

// Zadanie 4 - Utwórz funkcję przyjmującą 4 paramatery (imię, nazwisko, pesel, kierunek studiów). Funkcja po uruchomieniu
// powinna utworzyć obiekt nowego studentaoraz dodać go do tablicy, utworzonej w Zadaniu 2.

const addStudent = (newFirstName, newLastName, newPESEL, newfieldOfStudy) => {
  const newStudent = {
    firstName: newFirstName,
    lastName: newLastName,
    PESEL: newPESEL,
    fieldOfStudy: newfieldOfStudy,
  };
  studentList.push(newStudent);
};

//Checking into NodeJS block

console.log("add for two parameters:");
add(0, 1);
console.log("add for one parameters:");
add(6);
console.log("---");

console.log("substract for two parameters:");
substract(7, 1);
console.log("substract for one parameters:");
substract(6);
console.log("---");

console.log("multiply for two parameters:");
multiply(3, 5);
console.log("multiply for one parameters:");
multiply(45);
console.log("---");

console.log("divide for two parameters:");
divide(20, 5);
console.log("divide for one parameters:");
divide(12);
console.log("Extra: divide by 0:");
divide(3, 0);
console.log("---");

console.log("Display list of students:");
viewStudents(studentList);
console.log("---");

console.log("<Added new student using 'addStudent' function here>");
addStudent("Ezio", "Auditore", 134134512312, "Physical education");
console.log("---");

console.log("Display list of students (with new added student):");
viewStudents(studentList);
