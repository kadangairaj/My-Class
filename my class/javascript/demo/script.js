// factory method
function manufacturecar(name, engin, bodyType) {
    return{
        name,
        engin,
        bodyType,
        startmanufacturing: function () {
            console.log(`
            started the manufacturing car ${name}
            with engin capacity of ${engin} liter
            and this is of type ${bodyType}
            `)
        }
    }
}

const virtus = manufacturecar("virtus", "1", "sedan");
console.log(virtus);
virtus.startmanufacturing();

// this
// holds the data of immediate parent object
// ifinside arrow methos aiways target global object
var name = "globalname";
const outerobj = {
    name : "Esakki",
    batch : "weekend",
    innerobj : {
        name : "raj",
        getdetails: function () {
            console.log(this.name);
        },
        getdata: () => {
            console.log(this.name);
        },
        getglobalinarrow() {
            // id we want to target immediate parent
            // warp up arrow in narmal method
            const arrowmethod = () => {
                console.log(this.name);
            };
            arrowmethod();
        },
    }
};
outerobj.innerobj.getdetails();
outerobj.innerobj.getdata();
outerobj.innerobj.getglobalinarrow();

// constructor funcation
function Manufactcar(name, engin, bodyType) {
    //empty obj
    this.name = name;
    this.engin = engin;
    this.bodyType = bodyType;
    this.startmanufacture = function () {
        console.log(`
            started the manufacturing car ${this.name}
            with engin capacity of ${this.engin} liter
            and this is of type ${this.bodyType}
            `);
    };
};

const tiguan = new Manufactcar("tiguan", 2, "SUV");
console.log(tiguan);
tiguan.startmanufacture();

// prototypes
Manufactcar.prototype.getnameofcar = function () {
    console.log(`The name of the car is ${this.name}`)
};

const passat = new Manufactcar("passat", 2, "sedan");
console.log(passat);
passat.startmanufacture();
passat.getnameofcar();
//class
//4 pilliars
// encapsulation

class carproduction {
    constructor(name, engin, bodyType){
    this.name = name;
    this.engin = engin;
    this.bodyType = bodyType;
    }
    startcarmanufactre() {
        console.log(`
        started the manufacturing car ${this.name}
        with engin capacity of ${this.engin} liter
        and this is of type ${this.bodyType}
        `);
    }
}

class feature extends carproduction {
    constructor(name, engin, bodyType, color) {
        super(name, engin, bodyType);
        this.color = color;
    }
}

const vento = new feature("vento", 2, "sedan", "red");
console.log(vento);
vento.startcarmanufactre();
