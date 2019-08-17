const places = [];




class Location {
  constructor(name, city, zip, adress, pic) {
    this.name = name;
    this.city = city;
    this.zip = zip;
    this.adress = adress;
    this.pic = pic;

    // places.push(this);
};

   
  // display() {
  //     return `<div class="row"><div class="col-lg-2 col-md-10 col-sm-6 col-xs-12"><h3>${this.name}</h3></div></div>
  //             <div class="row"><div class="col-lg-2 col-md-6 col-sm-6 col-xs-12">${this.adress}, ${this.zip}, ${this.city}</div></div
  //             <div class="row"><div class="col-lg-2 col-md-6 col-sm-6 col-xs-12"><img src=${this.pic} width=300></div></div>
  //         `;
  //   }



    display() {
      return `<div class="col-xl-3 col-md-6 text-center mainly"><li class="list-item list-unstyled"><h3>${this.name}</h3></li>
              <ul class="list-group list-unstyled">
          <li class="list-item backlit">${this.adress}, ${this.zip}, ${this.city}</li>
          <li class="list-item backlit"><img class="d-none d-sm-block" src=${this.pic} width=200></li>
          </ul>
          </li>
          </div`;
    }



}

var Church = new Location("St. Charles Church", "Vienna", "1010", "Karlsplatz 1", "img/church.jpg");
var Zoo = new Location("Zoo Vienna", "Vienna", "1130", "Maxingstraße 13b", "img/zoo.jpg");


places.push(Church);
places.push(Zoo);



class Restaurant extends Location{
      constructor(name, city, zip, adress, pic, phone, type, web){
                  super(name, city, zip, adress, pic);
                  this.phone = phone;
                  this.type = type;
                  this.web = web;
      }
      display(){
        return `${super.display()}, <li class="list-item text-center">${this.phone}, ${this.type}, ${this.web}</li>`
      }
      
    }

  var Lemon = new Restaurant("Lemon Leaf Thai Restaurant", "Vienna", "1050", "Kettenbrückengasse 19", "img/lemon.png", "+43(1)5812308", "Thai", "www.lemonleaf.at");
  var Sixta = new Restaurant("SIXTA", "Vienna", "1050", "Schoenbrunnerstrasse 21", "img/sixta.png", "+43 1 58 528 56", "Vienesse", "http://www.sixta-restaurant.at");
  places.push(Lemon);
  places.push(Sixta);


    class Event extends Location{
      constructor(name, city, zip, adress, pic, phone, type, web, date, time, price){
                  super(name, city, zip, adress, pic, phone, type, web);
                  this.date = date;
                  this.time = time;
                  this.price = price;
      }
       display(){
        return `${super.display()}, <li class="list-item text-center">${this.date}, ${this.time}, ${this.price}</li>`
      }
    }

    var Kris = new Event("Kris Kristofferson", "Vienna", "1150", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "img/kris.jpg", "", "", "http://kriskristofferson.com", "Fr. 15.11.2019", "20:00", "58,50 EUR");
    var Lenny = new Event ("Lenny Kravitz", "Vienna", "1150", "Wiener Stadthalle, Halle D, Roland Rainer Platz 1", "img/lenny.jpg", "", "",  "www.lennykravitz.com", "Sat. 09.12.2019", "19:30", "47,80€");
    places.push(Kris);
    places.push(Lenny);

  for (var i = 0; i < places.length; i++){
  var displayResult = places[i].display();
  $(".row").append(displayResult);
}


// document.getElementById("place").innerHTML = `<h1>${places[1].name}</h1>`;



