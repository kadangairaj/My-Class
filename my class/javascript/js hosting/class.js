class movie  {
    constructor(title, studio, reating) {
        this.title = title;
        this.studio = studio;
        this.reating = reating;
    }
      Moviename() {(`
      this movie name ${this.title}
      presened by ${this.studio}
      movie rating ${this.reating}
      `)
    }
}
class feat extends movie{
    constructor(title, studio, reatin,date) {
        super(title, studio, reatin);
        this.date = date;
    }
}

const anjan = new feat("anjan", "raj", 4.5, 12.11);
console.log(anjan);
anjan.Moviename();



class Person {
    constructor(firstName, lastName, age, country, city) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
    }
    getFullName() {
      const fullName = this.firstName + ' ' + this.lastName
      return fullName
    }
  }
  
  const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
  const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
  
  console.log(person1.getFullName())
  console.log(person2.getFullName()) 





  const studends = [
    {
      id:1, name:"Esakki", class:"12c",
    }
  ];
  let sut = studends.map(function(val)
  {
    return val = sut;
  })
  console,log(sut);