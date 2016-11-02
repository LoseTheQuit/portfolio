'use strict';

console.log("OUTSIDE fpController");
angular.module("mainModule")
  .controller('fpController', function($scope, fpService) {
    console.log("INSIDE fpController");

    function converttext() {
      inputtext = document.getElementById('codeconverter').inputtext.value;
      out = inputtext.replace(/\&/g, '&amp;')
      out = out.replace(/\</g, '&lt;')
      out = out.replace(/\>/g, '&gt;')
      out = out.replace(/\"/g, '&quot;')
      out = out.replace(/\'/g, '&#39;')
      out = out.replace(/\|/g, '&#124;')
      out = '<div style="BORDER: #cccccc 1px dashed; PADDING: 5px; WIDTH: 95%; BACKGROUND: #f0f0f0; COLOR: #000000; FONT-SIZE: 12px; OVERFLOW: auto; height:auto"><pre>' + out + '</pre></div>'
      document.getElementById('codeconverter').outputtext.value = out;
    }

    var json = (x) => {
      return JSON.stringify(x, null, 2)
    }

    $scope.getDataTxt = function(twitterTagSearch) {
      fpService.getData(function(response) {
        // console.log("__ txtData response.DATA: __");
        // console.log(json(response.data));
        $scope.txtData = response.data;
      });
    };

    fpService.getDataOther(function(response) {
      var ratchhhh = Math.floor(Math.random() * 100)
      // log(ratchhhh)
      var tweets = response;
      var ranDomIdTotal = 0;
      tweets = response.data
        .filter((line) => {
          // log(Object.keys(line).length)
          return line.text.length > ratchhhh
        // line.text.length > 0
        })
        .map((line) => {
          ranDomIdTotal += line.id
          return line
        })
      //  log(ranDomIdTotal)
      var ranDomSetOfObjects = [{
        num: Math.floor(Math.random() * 100)
      }, {
        num: Math.floor(Math.random() * 100)
      }, {
        num: Math.floor(Math.random() * 100)
      }]
      //console.log(tweets);
      // console.log(ranDomSetOfObjects);
      // TWITTER DATA USED TO PAINT THE CANVAS
      $scope.twitterData = tweets;

    });


    $scope.getDataTxt()

    // NOTES TAKEN FROM AN ES6 CHEATSHEET VIDEO
    // destructiring

    var foo = {

      bar: 1,
      baz: 2,
      rar: 3,
      raz: 4,

    }

    // bar is a key inside of the foo object
    // that we assign to the scope variable
    // the value of the key is mapped to the
    // scope variable

    var bar = foo.bar
    var baz = foo.baz

    console.log(bar)
    console.log(baz)

    // we could also, with es6 syntax, extract the value
    // mapped to a key, by copyying the key letter for letter
    // using brackets

    var {rar, raz} = foo;

    console.log(rar)
    console.log(raz)


    var tenses = ['me', 'you', 'she'];

    console.log('THE FIRST SET ' + tenses);

    // because it's an array, it'll copy values in order
    var [firstPerson, secondPerson, item3] = tenses;
    console.log("THE SECOND SET " + firstPerson + ", " + secondPerson + ", " + item3);

    //
    var cause = "Cause"

    var oldMovieV1 = {

      just: "Just",
      cause: "Cause"
    }
    //  console.log(oldMovieV1);

    var oldMovieV2 = {

      //  just:  ()=> {"Just"},
      just: "Just",
      cause
    }

    console.log(json(oldMovieV2));

    // I'm going to have to revisit this.

    var printObject = ({fParam, sParam}) => {
      //  console.log(fParam + " " + sParam);
    }

    var {just, cause} = oldMovieV2

    console.log(just + " " + cause);
    console.log(typeof just + " " + typeof cause);

    printObject({
      just,
      cause
    })

    var name = "Will"
    var age = 99

    printObject({
      name,
      age
    })

    // moving on

    var calcBMI = (weight, height, max, callBack) => {

      var bmi = weight / Math.pow(height, 2)

      if (bmi > max) {
        console.log("you're overweight")
      }

      if (callBack) {
        callBack(bmi);
      }

    }

    // calcBMI(160, 72, 200);

    // HIGHER ORDER FUNCTIONS

    // functions are values - and can be passed into other funtions

    var log = (x) => {
      // document.write(x)
      // document.write("\n")
      console.log(x)
    }

    var triple = (x) => x * 3
    var waffle = triple;
    log(waffle == triple)
    log(waffle(182))

    var animals = [

      {
        name: "Geoff",
        species: 'Giraffe'
      },
      {
        name: "Harold",
        species: 'Dog',
        age: (Math.floor(Math.random() * 15))
      },
      {
        name: "Kumar",
        species: 'Dog',
        age: (Math.floor(Math.random() * 15))
      },
      {
        name: "Bill",
        species: 'Dog',
        age: (Math.floor(Math.random() * 15))
      },
      {
        name: "Ted",
        species: 'Dog',
        age: (Math.floor(Math.random() * 15))
      },
      {
        name: "SpongBob",
        species: 'Sponge Fish'
      },
      {
        name: "Lina",
        species: 'Lion'
      }

    ]

    var dogs = []

    animals.filter((animal) => {
      if (animal.species == "Dog")
        //dogs.push(json(json(json(animal))))
        dogs.push(json(animal))
    })

    //  log(dogs)

    var dogs = animals
      .find((animal) => {
        return animal.species === "Dog"
      })

    console.log("FROM FIND: " + dogs)
    var node = {}
    var dogs = animals.filter((animal) => animal.species === "Dog")
    log("FRON FILTER: " + json(dogs))
    var dogs = animals.filter((animal) => animal.species === "Dog")
      .map((animal) => animal.name + " is " + animal.age + " years old" + "secret code: " + animal.age * animal.age)
    log("FRON FILTER WITH MAP: ")
    log(dogs)
    log(dogs.join(' - - - - - - - - - '))
    // var dogs = animals.filter((animal) => animal.species)

    log("---")
    log(JSON.stringify(dogs, null, 2))
    log("---")

    var isDog = (animal) => {
      return animal.species === "Dog"
    }

    var dogs = animals.filter((animal) => isDog(animal))

    // var isNotDog = (x) => {
    //   return x.species === "Dog"
    // }
    // var notDogs = animals.reject((animal) => isDog(animal))
    // log(notDogs)

    var names = animals.map((animal) => {

      return animal.name + " is a " + animal.species

    })

    log(names)

    var orders = [
      {
        amount: 250
      },
      {
        amount: 1350
      },
      {
        amount: 400
      },
      {
        amount: 7000
      },
    ]

    var totalAmount = orders.reduce((sum, order) => {
      console.log("AMOUNTS: $" + sum, order)
      return sum + order.amount

    }, 0)

    log(totalAmount)

    // setTimeout(()=>{
    //
    // var txtData =  $scope.txtData
    //   .trim()
    //   .split("\n")
    //   .map((line) =>line.split("\t"))
    //   .reduce((customers, line) => {
    //     console.log("HEY", line[0])
    //     customers[line[0]] = customers[line[0]] || []
    //     customers[line[0]].push({
    //        name: line[1],
    //        price: line[2],
    //        quantity: line[3],
    //
    //     })
    //     return customers
    //   }, {})
    //
    //   console.log("txtData", json(txtData))
    //
    // }, 1000)


    var him = "Bruce Wayne"

    var greatMe = () => {
      console.log("Hello " + him)
    }

    him = "Peter Parker"
    greatMe();

    function makeSizer(size) {
      return function() {
        document.body.style.fontSize = size + 'px';

      };
    }

    // console.log(size)

    var size12 = makeSizer(30);
    size12()

    var dragon = name => size => element => {
      return name + ' is a ' + size + ' dragon that breathes ' + element + '!'
    }

    console.log(dragon("Orf", 'puny', "smoke and fire"))
    console.log(dragon("Orf")('puny')("smoke and fire"))

    var Gogarmorf = dragon('Gogarmorf')
    var HorshK = Gogarmorf("Insanley Yuge")
    var lastlyNow = HorshK("Pebbles")
    console.log(lastlyNow)

    // currying a function returninga funtion
    let dragons = [
      {
        name: "Drake",
        element: "lightning"
      },
      {
        name: "Oscar",
        element: "lightning"
      },
      {
        name: "Frank",
        element: "ice"
      },
      {
        name: "Mac",
        element: "cheese"
      }
    ]

    // var hasElement = _.curry((element, obj) => {return obj.element === element})
    var hasElement = (element, obj) => {
      return obj.element === element
    }

    var lightningDragons = dragons.filter((x) => hasElement('lightning', x))
    console.log(json(lightningDragons))

    // recurrsion =  when a funtion calls itself until it doesn't

    var countDown = (num) => {
      if (num === 0) return
      console.log(num)
      countDown(num - 1)
    }

    //  console.log(countDown(10))

    var categories = [
      {
        id: 'animals',
        parent: null
      },
      {
        id: 'mammals',
        parent: 'animals'
      },
      {
        id: 'reptiles',
        parent: 'animals'
      },
      {
        id: 'frog',
        parent: 'reptiles'
      },
      {
        id: 'snake',
        parent: 'reptiles'
      },
      {
        id: 'cats',
        parent: 'mammals'
      },
      {
        id: 'dog',
        parent: 'mammals'
      },
      {
        id: 'cobra',
        parent: 'snake'
      },
      {
        id: 'python',
        parent: 'snake'
      },
      {
        id: 'Boxer',
        parent: 'dog'
      },
      {
        id: 'Pitt Bull',
        parent: 'dog'
      },
      {
        id: 'German Shepherd',
        parent: 'dog'
      },
      {
        id: 'Chihuahua',
        parent: 'dog'
      },
      {
        id: 'Labrador',
        parent: 'dog'
      },
      {
        id: 'persian',
        parent: 'cats'
      },
      {
        id: 'siamese',
        parent: 'cats'
      }
    ]

    var figTree = categories.filter(line => line.parent === "dogs")
      //returns the whole object not just line by line
      .map(line => line.id + " is a type of " + line.parent)
    console.log(json(figTree))

    var makeTree = (categories, parent) => {
      var node = {}
      categories.filter(c => c.parent === parent)
        //.forEach(c => {node[c.id] = "x"})
        //.forEach(c => {node["test"] = makeTree(categories, c.id)})
        //.forEach(c => c)
        //.forEach(c => {
        //   console.log(c)
        //   return c
        // })
        //.forEach(c => node[c.id] === "TEST")
        .forEach(c => {
          node[c.id] = makeTree(categories, c.id)
        })
      return node
    }

    console.log(json(makeTree(categories, null)))

    // Promises

    //////////////////////////////////////////////
    //////////////////////////////////////////////
    //////////////////////////////////////////////

    // Numbers
    var integeR = 1;
    var floartingPointLiteral = Math.PI

    console.log(Math.pow(2, 25)) // 2 to the power 25
    console.log(Math.round(.7)) // 1.0 round to the nearest integer
    console.log(Math.ceil(.5)) // round up to nearest 10
    console.log(Math.floor(.9)) // round down to the nearest 10
    console.log(Math.abs(-5)) // to find the absolute value
    console.log("absolute value: " + Math.abs(2 + 7)) // to find absolute value
    console.log(Math.max(2, 25, 23, 45, 12)) // find max out of the numbers
    console.log(Math.min(2, 25, 23, 45, 12)) // find min of the numbers
    console.log(Math.random() * 100) // random number between 0 and 1 * 100
    console.log(Math.PI) // returns pi
    console.log(Math.E) // returns natural log
    console.log(Math.sqrt(5)) // retuns the square root of a given number
    console.log("cube root of three: " + Math.pow(3, 1 / 3))
    console.log('sin: ' + Math.sin(50))
    console.log(Math.log(10))
    console.log(Math.log(10) / Math.LN10) // base 2 logarithm of 512
    console.log(Math.log(512) / Math.LN2) // base 2 logarithm of 512
    console.log(Math.exp(3)) // math e cubed


    // Dates and Times
    var thenTime = new Date(2000, 0, 1);
    var nowTime = new Date();
    var laterTime = new Date(2020, 0, 15, 17, 10, 30);
    log(thenTime)
    log(laterTime)
    log(nowTime.getFullYear()) // returns 2016
    log(nowTime.getMonth()) // returns zero based months
    log(nowTime.getDate()) // returns 1 based day
    log(nowTime.getDay()) // 5 day of week. 0 is Sunday 5 is Friday
    log(nowTime.getHours()) // 17 5 pm local time
    log(nowTime.getUTCHours()) // hours in UTC time

    // text
    // escape sequences in string literals
    var thisStringHasBackSlash = 'You\'re right, it can\'t be a quote'
    log(thisStringHasBackSlash)
    var againWithTheSlash = "you\"re right, that\"s wrong"
    log(againWithTheSlash)

    let anotherStringBeThis = "\b ok \v so\n this\' should work\b \b \b \0"
    log(anotherStringBeThis)
    let nullISOn = "\0"
    log(nullISOn)

    // STRING MANIPULATION
    let THISOTHERTEST = 'TEST'
    var TEST = "0123456789-7391038461_9012836817",
      s = "Hello World"

    log(TEST.length)
    log(s.length)
    log(s.charAt(s.length - 1))
    log(s.charAt(Math.random() * s.length))
    log(s.substring(0, 3))
    log(TEST.substring(0, TEST.length - 1))
    log(TEST.charAt(TEST.length - 1))
    log(TEST.substring(1, 5))
    // first grabs the char at give index
    // stops and doens't return a char at
    // given second index

    let baconDrifter = "0 is the First index";
    log(baconDrifter.substring(2, 10))
    log("THIS DOES THE SAME THING: " + baconDrifter.slice(2, 10))
    log(TEST.slice(-1))
    log(baconDrifter.slice(-1))
    log(baconDrifter.slice(-5))
    log(baconDrifter.slice(-13))
    log(s.indexOf('h'))
    log("This returns false: " + s.indexOf('z'))
    log(s.indexOf('H'))
    log(TEST.lastIndexOf("7"))
    log(TEST.indexOf('3', 7))
    log(TEST.indexOf('3', 5))
    log(TEST.indexOf('3', 3))
    log(TEST.indexOf('1', 2)) // returns last index of substring in string
    log(TEST.indexOf('-', 2)) // returns last index of substring in string
    log(TEST.length - 1)
    log(TEST)
    log(TEST.split('-'))
    log(TEST.split('-').join())
    log(TEST.split('-').join(""))
    log(TEST.split('-').join(' *** '))
    log(TEST.split(' *** ').join())
    log(TEST.split('-').map(line => line[0]))
    log(TEST.split('-').map(line => line[1]))
    log(TEST.split('-').map(line => line[2]))
    log('---------')
    log(TEST.split('-').join("").split('_').join(""))
    log(TEST.split('-').join("").split('_').join(""))
    log("I AM THE " + THISOTHERTEST.replace('T', "B") + " EVER")
    log("I AM THE " + THISOTHERTEST.replace('T', "B") + " EVER".toLowerCase())
    log("I AM THE " + THISOTHERTEST.replace('T', "B") + " EVER".toUpperCase())
    // all of these strings a immutable - these methods return new strings


    // REGEX
    var vocalCheck = "testing: 1, 2, 3, 123123 423 243 345 84567 734 47624 182"
    var thePattern = /\d+/g // matces a instances of one or more digits
    log(thePattern.test(vocalCheck)) // true a match exists

    log(vocalCheck.search(thePattern)) // posistion of first match = 9
    log(vocalCheck.match(thePattern)) // array of all matches
    log(vocalCheck.replace(thePattern, "_"))
    log(vocalCheck.split(thePattern)) // split on non digits

    // booleans

    var falsey = undefined
    var falsey = null
    var falsey = 0
    var falsey = -0
    var falsey = NaN
    var falsey = ""
    if (!falsey)
      log(false)

    let okCyah = {}
    if (okCyah)
      log(true)


    // null
      // come back to this

    // The Global Object
    // global props - undefined, Infinity, NaN
    // global function like parseInt(), eval(),
    // constructor function = Date(), RegExp(), String(), Object(), Array()
    var oxen = "hellow oxen"
    var theOtherOxen = oxen.slice(oxen.indexOf(" ") + 1, oxen.length)
    console.log(theOtherOxen)

    // closures!!
    // closures!!
    // closures!!
    function greeter(salutation) {
      var counter = 0;
      var prefix = ". " + salutation + '';
      return (name) => {
        counter++;
        return counter + prefix + name + '!';
      }
    }

    var greet = greeter("Hello")
    console.log(greet("World"))
    console.log(greet("World"))
    console.log(greet("World"))
    // closures!!
    // closures!!
    // closures!!


    //VIDEO
    //VIDEO

    // Numbers Strings Booleans NULL and undefined
    log(.1 + .1)
    log(Number("007"))
    log(parseInt("08"), 10)
    // log("CONSTRUCTORS BEGIN WITH CAPITAL LETTER")
    // && The guard operator -
    // || The default operator -

    // var a = {}
    //
    // if (a) {
    //   return a.member
    // } else {
    //   return a
    // }

    //    var last = input || nr_items;

    //VIDEO
    //VIDEO

    // Immutable Primative Values and Mutable Object Refernce

    var wackyJackie = "Wen\'t to water!"
    // scope
    // blocks don't have scope - fucntions have scope

    var myCar = "BMW"
    log(myCar);
    (() => {
      hoistedFunction();

      // function expression generates an error
      // nonHoistedFunction()

      log(myCar)
      var myCar = "CTS"

      function hoistedFunction() {
        log('hoistedFunction - HOISTED')
      }

      var nonHoistedFunction = function() {
        log('nonHoistedFunction - NON HOISTED')
      }

      var obj = {
        num: 2
      }
      var objV2 = {
        num: 7
      }
      var add2This = function(a, b, c) {
        return this.num + a + b + c
      }

      console.log(add2This.call(obj, 1, 2, 3))
      console.log(add2This.apply(obj, [123, 234, 345]))
      var theARRS = [10, 20, 30]
      console.log(add2This.apply(objV2, theARRS))
      var totalOfTheArrs = '';
      log(theARRS.map((line) => {
        totalOfTheArrs += line
      }))

      // bind returns a funtion
      var bound = add2This.bind(obj)
      log(bound(456, 567, 678))
      log(typeof NaN)
      log(NaN === NaN)

      var xbjV1 = {
          car: "BMW"
        },
        xbjV2 = {
          car: "BMW"
        };

      if (xbjV1 !== xbjV2)
        log("THEY ARE NOT EQUAL")

      var arrV1 = [1, 2, 3],
        arrV2 = [1, 2, 3];

      if (arrV1 !== arrV2)
        log("THEY ARE NOT EQUAL")

      if (xbjV1.car === xbjV2.car)
        log("THEY ARE EQUAL")

      if (arrV1[0] === arrV2[0])
        log("THEY ARE EQUAL")

    })();


    (() => {

      // objects are reference types
      // creates a = referemces to b
      // modified b - checked a
      // if they were copies, you
      // could modify them seperately

      var a = []
      var b = a
      b[0] = 1
      log(a[0]);

      var kick = ['high', 'mid', 'low']
      var punch = []

      for (var i = 0; i < kick.length; i++) {
        punch[i] = kick[i]
        log(kick[i])
        log(punch[i])
      }

      (kick, punch) => {
        if (kick.length !== punch.length)
          log('Not Equal')
        for (var i = 0; i < kick.length; i++) {
          if (kick[i] !== punch[i])
            log('Array Not Equal')
        }
      }
    })();

    var theARRS = [10, 20, 30]
    var totalOfTheArrs = 0;
    log(theARRS.map((line) => {
      totalOfTheArrs += line
    }))
    log(totalOfTheArrs)

    // type conversion

    if (null == undefined || "0" == 0 || 0 == false || "0" == false)
      log("This is true")

    log(Number(true))
    log(Number(false))
    log(Number('182'))
    log(String(false))
    log(String('false'))
    log(Boolean([]))
    log(Boolean({}))
    log(Boolean(182))
    log(Object(182))
    log(Object(['182', '7', '004']))

    let fisker = 123456.789
    log(fisker.toFixed(0))
    log(fisker.toFixed(2))
    log(fisker.toFixed(5))
    log(fisker.toExponential(1))
    log(fisker.toExponential(3))

    var brackets = {
      set: "set",
      get: 'get',
      deleteSoon: 'delete'
    }
    log(brackets.deleteSoon)
    delete brackets.deleteSoon
    log(brackets.deleteSoon);

    var OII = false;
    var OII = '2';
    var OII = 3;

    // cannot delete local variable in strict mode
    // delete (OII);
    log(OII);

    // differential inheritance
    (() => {
      var ryu = 'hadoken';

      (() => {
        var ryu = 'frontKick';
        log(ryu);
        log('ryu TEST 1: ');
      })();

      (() => {
        log(ryu);
        var ryu = 'hadoken';
        log('ryu TEST 2: ');

        log(ken)
        var ken = "shoryuken"
      })();

    })();
    for (var i = 0, x = 10; i <= 10; i++, x--) {
      log(i * x)
    }

    log(NaN === NaN)
    log(NaN !== NaN)
    log(Math.E)

    log(0.1 + 0.2)

    var testString = "this,is,a,test,String"
    log(typeof testString)
    log(typeof testString.split(','))
    log(typeof testString.split(',').join(' - '));
    log(testString.split(','))
    log(testString.split(',').filter((line) => {
      return line
    }))

    console.log(Math.min < Math.max)
    log([1, 2, 3].map((n) => {
      return n * n;
    }))


    var superHeroes = [1, 2, 3, 4, 5, 6, 7]
    log(superHeroes)
    log(superHeroes.length)
    superHeroes.length = 3
    log(superHeroes.length)
    // superHeroes[69] = 69
    // superHeroes[-7] = -7
    // superHeroes[2.5] = 2.5
    // superHeroes['clxxxii'] = 'clxxxii'
    log(superHeroes)
    superHeroes.push(4, 5, 6, 7, 8, 9, (+'10'))
    superHeroes.unshift('-3', -2, (+'-1'), 0)
    log(superHeroes)
    log(superHeroes.indexOf(0))
    // type sensitive
    log(superHeroes.indexOf('0'))
    var obbbj1 = {
      a: 1
    }
    var obbbj2 = {
      b: 2
    }
    var obbbj2 = {
      b: 2
    }
    log([{
      a: 1
    }, {
      b: 1
    }].indexOf({
      b: 2
    }))

    log([obbbj1, obbbj2].indexOf(obbbj1))
    log([obbbj1, obbbj2].indexOf(obbbj2))
    log([1, 2, 3, 4, 5, 4, 7, 8, 9].indexOf(3))
    // 4 is which index to search from
    log([1, 2, 3, 4, 5, 4, 7, 8, 9, 3].indexOf(3, 4))
    var someMonths = ['jan', 'feb', 'mar', 'apr', 'may', 'jun']
    log(someMonths)
    someMonths.splice(2)
    log(someMonths)
    var someMonths = ['jan', 'feb', 'mar', 'apr', 'may', 'jun']
    log(someMonths.splice(2, 4, 'jul', 'aug', 'sep'))
    log(someMonths)

    var sumMoreNums = [0, 1, 2, 3, 4, 5, 6, 7]
    log(sumMoreNums.slice(2, 5))
    log(Array.isArray(sumMoreNums))
    var str = "Use this string to locate the index of a substring";
    var pos = str.indexOf("locate");
    log(pos)
    pos = str.lastIndexOf("locate");
    log(pos)
    pos = str.search("locate");
    log(pos)
    pos = str.slice(3);
    log(pos)
    pos = str.slice(3).trim();
    log(pos)
    log(str.charAt(str.length - 1))
    log(str.charCodeAt(str.length - 1))
    log(String.fromCharCode(97, 98, 99, 120, 121, 122))
    var n = 'Brendan'.replace("Brendan", "Ben");
    log(n)

    var sentence = "Hi, my name is Sam!"
    if (sentence.indexOf("Sam") != -1) {
      log("Sam is in there!")
    }

    var howToGetWebDesignClients = ["You have to be worth the money you are asking", 'Find out who makes the decisions', 'you have to grab attention', 'repetitive appearance matters', 'Directly approach the people you want to work with']
    // var answer = prompt('Hello')
    log("/////////////////////////")
    log("/////////////////////////")
    log("/////////////////////////")
    log("/////////////////////////")
    log("/////////////////////////")
    var exStrinG = "0Nine5678Nine"
    // finding the last index of a char in a string
    log(exStrinG.lastIndexOf("Nine"))
    // search finds the first index a queried char
    log(exStrinG.search("Nine"))

    var clientMapping = howToGetWebDesignClients.filter((x) => {
      return x.length >= howToGetWebDesignClients[0].length

    })
    log(howToGetWebDesignClients[0].length)
    log(clientMapping)
    for (var iiiiii = 0; iiiiii < howToGetWebDesignClients.length; iiiiii++) {
      log(howToGetWebDesignClients[iiiiii].length)
    }
    log(howToGetWebDesignClients)
    log(howToGetWebDesignClients.reverse())
  });
