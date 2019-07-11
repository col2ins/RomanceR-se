let data = {
  products: [
    {
      img: "./images/products/products (1).png",
      name: "Hoa cầm tay 01",
      price: "350.000 VNĐ",
      rating: 4,
      type: "HOACUOICAMTAY"
    },
    {
      img: "./images/products/products (2).png",
      name: "Hoa cầm tay 02",
      price: "350.000 VNĐ",
      rating: 4,
      type: "HOACUOICAMTAY"
    },
    {
      img: "./images/products/products (3).png",
      name: "Hoa cầm tay 03",
      price: "350.000 VNĐ",
      rating: 4,
      type: "HOACUOICAMTAY"
    },
    {
      img: "./images/products/products (4).png",
      name: "Hoa cầm tay 04",
      price: "350.000 VNĐ",
      rating: 4,
      type: "HOACUOICAMTAY"
    },
    {
      img: "./images/products/products (5).png",
      name: "Hoa cầm tay 05",
      price: "350.000 VNĐ",
      rating: 4,
      type: "HOACUOICAMTAY"
    },
    {
      img: "./images/products/products (6).png",
      name: "Hoa cầm tay 06",
      price: "350.000 VNĐ",
      rating: 4,
      type: "HOACUOICAMTAY"
    },
    {
      img: "./images/products/products (7).png",
      name: "Hoa cầm tay 07",
      price: "350.000 VNĐ",
      rating: 4,
      type: "HOACUOICAMTAY"
    },
    {
      img: "./images/products/products (8).png",
      name: "Hoa cầm tay 08",
      price: "350.000 VNĐ",
      rating: 4,
      type: "HOACUOICAMTAY"
    },
    {
      img: "./images/products/products (9).png",
      name: "Hoa cầm tay 09",
      price: "350.000 VNĐ",
      rating: 4,
      type: "HOACUOICAMTAY"
    },
    {
      img: "./images/products/products (10).png",
      name: "Hoa cầm tay 10",
      price: "350.000 VNĐ",
      rating: 4,
      type: "HOACUOICAMTAY"
    },
    {
      img: "./images/products/products (11).png",
      name: "Hoa cầm tay 11",
      price: "350.000 VNĐ",
      rating: 4,
      type: "HOACUOICAMTAY"
    },
    {
      img: "./images/products/products (12).png",
      name: "Hoa cầm tay 12",
      price: "350.000 VNĐ",
      rating: 4,
      type: "HOACUOICAMTAY"
    }
  ]
};

let obj = {};

obj.getData = function(type, filters) {
  let _data = [];
  if (data[type]) {
    let length = data[type].length;
    for (let i = 0; i < length; i++) {
      let _item = data[type][i];
      if (filters && filters.type) {
        if (filters.type === _item.type) {
          _data.push(_item);
        }
      } else {
        _data.push(_item);
      }
    }
  }

  return _data;
};

export default obj;
