const express = require("express");
const cors = require("cors");
const app = express();
const carData = {
  bmw: {
    i8: {
      model: "BMW i8",
      image:
        "https://edgecast-img.yahoo.net/mysterio/api/97EDA8260233F7C0FFC0D1266170B80C9367D4A8CB09BFE9205F65E93426DA9B/autoblog/resizefill_w660_h372;quality_80;format_webp;cc_31536000;/https://s.aolcdn.com/commerce/autodata/images/USC50BMC681A021001.jpg",
      door: 2,
      price: "$80,000",
    },
    s5: {
      model: "2024 5 Series",
      image:
        "https://static.tcimg.net/vehicles/primary/90d5981d33d4f72f/2024-BMW-5_Series-gray-full_color-driver_side_front_quarter.png?auto=format&h=360&w=720",
      door: 4,
      price: "$67,795",
    },
    x1: {
      model: "2024 BMW X1",
      image:
        "https://static.tcimg.net/vehicles/primary/39e024ff23fc6ac7/2023-BMW-X1-silver-full_color-driver_side_front_quarter.png?auto=format&h=360&w=720",
      door: 4,
      price: "$41,495",
    },
  },
  bugatti: {
    chiron: {
      model: "2016 Bugatti Chiron",
      image:
        "https://www.supercars.net/blog/wp-content/uploads/2017/04/2017-Bugatti-Chiron-Full-HD-Wallpaper-1024x683.jpg",
      door: 2,
      price: "$3.6mil",
    },
    chiron110: {
      model: "Chiron Sport 110",
      image:
        "https://www.shutterstock.com/image-photo/bugatti-chiron-sport-110-ans-600nw-1836370660.jpg",
      door: 2,
      price: " $4.5mil",
    },
    cen: {
      model: "Centodieci",
      image:
        "https://cdn.carbuzz.com/gallery-images/2022-bugatti-centodieci-front-angle-view-carbuzz-616566-1600.jpg",
      door: 2,
      price: "$9.0mil",
      link: "../detail/cento.html",
    },
  },
  ford: {
    mustang: {
      model: "Mustang Coupe",
      image:
        "https://cdn.carbuzz.com/gallery-images/2023-ford-mustang-coupe-carbuzz-915801.jpg",
      door: 2,
      price: "$32,795",
    },
    ecosport: {
      model: "Ford EcoSport",
      image:
        "https://cdn.carbuzz.com/gallery-images/2022-ford-ecosport-carbuzz-679361.jpg",
      door: 4,
      price: "$28,395",
    },
    expedition: {
      model: "Ford Expedition",
      image:
        "https://cdn.carbuzz.com/gallery-images/840x560/1093000/600/1093618.jpg",
      door: 4,
      price: "$83,695",
    },
  },
  honda: {
    civis: {
      model: "Honda Civic Touring",
      image:
        "https://vehicle-images.dealerinspire.com/044e-11002287/thumbnails/large/2HGFE1F98RH312911/94966efdc247f8cbd196f5e160b31341.jpg",
      door: 4,
      price: "$32.100",
    },
    cvr: {
      model: "Honda CR-V Hybrid Sport",
      image:
        "https://vehicle-images.dealerinspire.com/bff3-11002287/thumbnails/large/7FARS6H98RE045651/f169a3bd42a60a697431922041e6d7cd.jpg",
      door: 4,
      price: "$41,175",
    },
    accord: {
      model: "2024 Honda Accord EX",
      image:
        "https://vehicle-images.dealerinspire.com/c1db-11002287/thumbnails/large/1HGCY1F30RA021047/fc04f560438f5b8077fc70b974d140c0.jpg",
      door: 4,
      price: "$31,005",
    },
  },
  koenig: {
    cc850: {
      model: "Koenigsegg CC850",
      image:
        "https://cdn.carbuzz.com/gallery-images/2023-koenigsegg-cc850-carbuzz-1030685.jpg",
      door: 2,
      price: "$3,65mil",
      link: "../detail/cc850.html",
    },
    jesko: {
      model: "Koenigsegg Jesko",
      image:
        "https://cdn.carbuzz.com/gallery-images/1600/708000/400/708419.jpg",
      door: 2,
      price: "$2,8mil",
    },
    gemera: {
      model: "Koenigsegg Gemera",
      image:
        "https://cdn.carbuzz.com/gallery-images/2025-koenigsegg-gemera-carbuzz-1156929-840x560-wp.webp",
      door: 2,
      price: "$1,7mil",
    },
  },
  lambo: {
    uruse: {
      model: "Lamborghini Uruse",
      image:
        "https://cdn.carbuzz.com/gallery-images/840x560/929000/700/929795.jpg",
      door: 4,
      price: "$249,400",
    },
    chiron110: {
      model: "Lamborghini Countach",
      image:
        "https://cdn.carbuzz.com/gallery-images/2022-lamborghini-countach-carbuzz-883594.jpg",
      door: 2,
      price: "$2,64mil",
    },
    huracan: {
      model: "Lamborghini Huracan",
      image:
        "https://cdn.carbuzz.com/gallery-images/840x560/995000/400/995443.jpg",
      door: 2,
      price: "$334,695",
    },
  },
  mclaren: {
    spider: {
      model: "765LT Spider",
      image:
        "https://cdn.carbuzz.com/gallery-images/840x560/877000/200/877217.jpg",
      door: 2,
      price: "$382,500",
    },
    artura: {
      model: "McLaren Artura",
      image:
        "https://cdn.carbuzz.com/gallery-images/2024-mclaren-artura-carbuzz-1083439.jpg",
      door: 2,
      price: "$242,400",
    },
    spider720: {
      model: "720S Spider",
      image:
        "https://cdn.carbuzz.com/gallery-images/840x560/606000/300/606321.jpg",
      door: 2,
      price: "$330,500",
    },
  },
  toyota: {
    gr86: {
      model: "Toyota GR86",
      image:
        "https://cdn.carbuzz.com/gallery-images/2023-toyota-gr86-carbuzz-1152800-840x560-wp.webp",
      door: 2,
      price: "$36,285",
    },
    prius: {
      model: "2024 Prius",
      image:
        "https://cdn.carbuzz.com/gallery-images/2024-toyota-prius-carbuzz-1075508.jpg",
      door: 4,
      price: "$36,065",
    },
    fjcruiser: {
      model: "FJ Cruiser EV",
      image:
        "https://cdn.carbuzz.com/gallery-images/2024-toyota-fj-cruiser-ev-carbuzz-1006859.jpg",
      door: 4,
      price: "TBC",
    },
  },
  nissan: {
    gtr: {
      model: "Nissan GT-R NISMO",
      image:
        "https://cdn.carbuzz.com/gallery-images/2023-nissan-gt-r-nismo-carbuzz-702768.jpg",
      door: 2,
      price: "$215,740",
      link: "../detail/nismo.html",
    },
    altima: {
      model: "Nissan Altima",
      image:
        "https://cdn.carbuzz.com/gallery-images/840x560/1084000/0/1084059.jpg",
      door: 4,
      price: "$35,430",
      link: "../detail/altima.html",
    },
    armada: {
      model: "Nissan Armada",
      image:
        "https://cdn.carbuzz.com/gallery-images/2023-nissan-armada-carbuzz-906225.jpg",
      door: 4,
      price: "$70,370",
      link: "../detail/armada.html",
    },
  },
};

app.use(cors());

app.get("/api/model/all", (req, res) => {
  res.json({ carData });
});

app.get("/api/cars/:car", (req, res) => {
  const { car } = req.params;
  if (carData[car]) {
    const models = Object.keys(carData[car]);
    const cars = models.map((model) => carData[car][model]);
    res.json({ cars });
  } else {
    res.status(404).json({ error: "not found" });
  }
});

app.get("/api/cars/:car/:model", (req, res) => {
  const { car, model } = req.params;
  if (carData[car] && carData[car][model]) {
    const modelDetails = carData[car][model];
    res.json({ modelDetails });
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

app.listen(5000, () => {
  console.log("Server is running port 5000");
});
