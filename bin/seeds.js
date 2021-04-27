const mongoose = require('mongoose');
const Attire = require('../models/Attire');
const DB_NAME = 'maison-giovanni';
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const attires = [
  {
  name: "ipsom lorem",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis tristique sollicitudin nibh sit amet. Donec enim diam vulputate ut pharetra. Interdum posuere lorem ipsum dolor sit. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Id donec ultrices tincidunt arcu non sodales.",
  fabric: "Satin",
  size: ["Small", "Medium", "Large"],
  color: ["Blue", "Green", "Yellow", "Navy"],
  price: 500,
  pictureUrl: "https://res.cloudinary.com/dzmd4tnem/image/upload/v1619531923/MaisonGiovanni/C-1467-High-Quality-Silk-Ties-for-Men-Purple-Novelty-Mens-Ties-Hanky-Cufflinks-Set-Striped_cq24ws.webp",
  type: "Tie"
  },
  {
    name: "ipsom lorem",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis tristique sollicitudin nibh sit amet. Donec enim diam vulputate ut pharetra. Interdum posuere lorem ipsum dolor sit. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Id donec ultrices tincidunt arcu non sodales.",
    fabric: "Satin",
    size: ["Small", "Medium", "Large"],
    color: ["Blue", "Green", "Yellow", "Navy"],
    price: 500,
    pictureUrl: "https://res.cloudinary.com/dzmd4tnem/image/upload/v1619531921/MaisonGiovanni/wholesale-fashion-high-quality-mens-tie-set_s3370n.jpg",
    type: "Tie"
    },
    {
      name: "ipsom lorem",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis tristique sollicitudin nibh sit amet. Donec enim diam vulputate ut pharetra. Interdum posuere lorem ipsum dolor sit. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Id donec ultrices tincidunt arcu non sodales.",
      fabric: "Satin",
      size: ["Small", "Medium", "Large"],
      color: ["Blue", "Green", "Yellow", "Navy"],
      price: 500,
      pictureUrl: "https://res.cloudinary.com/dzmd4tnem/image/upload/v1619531918/MaisonGiovanni/DN-1687-High-Quality-Silk-Mens-Ties-Novelty-Plaid-Ties-for-Men-8-5cm-Classic-Men_ph1x2o.jpg",
      type: "Tie"
      },
      {
        name: "ipsom lorem",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis tristique sollicitudin nibh sit amet. Donec enim diam vulputate ut pharetra. Interdum posuere lorem ipsum dolor sit. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Id donec ultrices tincidunt arcu non sodales.",
        fabric: "Satin",
        size: ["Small", "Medium", "Large"],
        color: ["Blue", "Green", "Yellow", "Navy"],
        price: 500,
        pictureUrl: "",
        type: "Tie"
        },
        {
          name: "ipsom lorem",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis tristique sollicitudin nibh sit amet. Donec enim diam vulputate ut pharetra. Interdum posuere lorem ipsum dolor sit. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Id donec ultrices tincidunt arcu non sodales.",
          fabric: "Satin",
          size: ["Small", "Medium", "Large"],
          color: ["Blue", "Green", "Yellow", "Navy"],
          price: 500,
          pictureUrl: "https://res.cloudinary.com/dzmd4tnem/image/upload/v1619531916/MaisonGiovanni/Silk-Tie-Men-High-Quality-Tie-2017-Fashion-Classic-Neckties-Ties-For-Mens-Gravata-Formal-Wedding.jpg_640x640_ai6elv.jpg",
          type: "Tie"
          },
          {
            name: "ipsom lorem",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis tristique sollicitudin nibh sit amet. Donec enim diam vulputate ut pharetra. Interdum posuere lorem ipsum dolor sit. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Id donec ultrices tincidunt arcu non sodales.",
            fabric: "Satin",
            size: ["Small", "Medium", "Large"],
            color: ["Blue", "Green", "Yellow", "Navy"],
            price: 500,
            pictureUrl: "https://res.cloudinary.com/dzmd4tnem/image/upload/v1619531913/MaisonGiovanni/2017-New-High-Quality-Ties-for-Men-Fashion-Polyester-Necktie-Gentleman-Men-s-Wedding-Party-Tie_cbme7w.jpg",
            type: "Tie"
            },
            {
              name: "ipsom lorem",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis tristique sollicitudin nibh sit amet. Donec enim diam vulputate ut pharetra. Interdum posuere lorem ipsum dolor sit. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Id donec ultrices tincidunt arcu non sodales.",
              fabric: "Satin",
              size: ["Small", "Medium", "Large"],
              color: ["Blue", "Green", "Yellow", "Navy"],
              price: 500,
              pictureUrl: "",
              type: "Tie"
              },
              {
                name: "ipsom lorem",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis tristique sollicitudin nibh sit amet. Donec enim diam vulputate ut pharetra. Interdum posuere lorem ipsum dolor sit. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Id donec ultrices tincidunt arcu non sodales.",
                fabric: "Satin",
                size: ["Small", "Medium", "Large"],
                color: ["Blue", "Green", "Yellow", "Navy"],
                price: 500,
                pictureUrl: "https://res.cloudinary.com/dzmd4tnem/image/upload/v1619531909/MaisonGiovanni/Hi-Tie-Popular-Floral-Mens-Ties-High-Quality-Brown-Jacquare-Woven-Silk-Ties-for-Men-8_dhpjln.jpg",
                type: "Tie"
                },
                {
                  name: "ipsom lorem",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis tristique sollicitudin nibh sit amet. Donec enim diam vulputate ut pharetra. Interdum posuere lorem ipsum dolor sit. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Id donec ultrices tincidunt arcu non sodales.",
                  fabric: "Satin",
                  size: ["Small", "Medium", "Large"],
                  color: ["Blue", "Green", "Yellow", "Navy"],
                  price: 500,
                  pictureUrl: "",
                  type: "Tie"
                  },
                  {
                    name: "ipsom lorem",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis tristique sollicitudin nibh sit amet. Donec enim diam vulputate ut pharetra. Interdum posuere lorem ipsum dolor sit. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Id donec ultrices tincidunt arcu non sodales.",
                    fabric: "Satin",
                    size: ["Small", "Medium", "Large"],
                    color: ["Blue", "Green", "Yellow", "Navy"],
                    price: 500,
                    pictureUrl: "https://res.cloudinary.com/dzmd4tnem/image/upload/v1619531907/MaisonGiovanni/Hi-Tie-Designer-Mens-Ties-100-Silk-High-Quality-Necktie-For-Mens-Formal-Wedding-Business-Party_mqwmhe.jpg",
                    type: "Tie"
                    },
                    {
                      name: "ipsom lorem",
                      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis tristique sollicitudin nibh sit amet. Donec enim diam vulputate ut pharetra. Interdum posuere lorem ipsum dolor sit. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Id donec ultrices tincidunt arcu non sodales.",
                      fabric: "Wool",
                      size: ["Small", "Medium", "Large"],
                      color: ["Blue", "Green", "Yellow", "Navy"],
                      price: 500,
                      pictureUrl: "https://res.cloudinary.com/dzmd4tnem/image/upload/v1619532132/MaisonGiovanni/m-3xl-4-color-new-men-smart-casual-blazer4_j9xh9f.jpg",
                      type: "Jacket"
                      },
                      {
                        name: "ipsom lorem",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis tristique sollicitudin nibh sit amet. Donec enim diam vulputate ut pharetra. Interdum posuere lorem ipsum dolor sit. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Id donec ultrices tincidunt arcu non sodales.",
                        fabric: "Wool",
                        size: ["Small", "Medium", "Large"],
                        color: ["Blue", "Green", "Yellow", "Navy"],
                        price: 500,
                        pictureUrl: "https://res.cloudinary.com/dzmd4tnem/image/upload/v1619532132/MaisonGiovanni/autumn-clothes-men-suit-jacket-casaco-terno5_anhcoi.jpg",
                        type: "Jacket"
                        },
                        {
                          name: "ipsom lorem",
                          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis tristique sollicitudin nibh sit amet. Donec enim diam vulputate ut pharetra. Interdum posuere lorem ipsum dolor sit. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Id donec ultrices tincidunt arcu non sodales.",
                          fabric: "Wool",
                          size: ["Small", "Medium", "Large"],
                          color: ["Blue", "Green", "Yellow", "Navy"],
                          price: 500,
                          pictureUrl: "https://res.cloudinary.com/dzmd4tnem/image/upload/v1619532132/MaisonGiovanni/m-3xl-4-color-new-men-smart-casual-blazer3_cjua3g.jpg",
                          type: "Jacket"
                          },
                          {
                            name: "ipsom lorem",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis tristique sollicitudin nibh sit amet. Donec enim diam vulputate ut pharetra. Interdum posuere lorem ipsum dolor sit. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Id donec ultrices tincidunt arcu non sodales.",
                            fabric: "Wool",
                            size: ["Small", "Medium", "Large"],
                            color: ["Blue", "Green", "Yellow", "Navy"],
                            price: 500,
                            pictureUrl: "https://res.cloudinary.com/dzmd4tnem/image/upload/v1619532122/MaisonGiovanni/men-s-luxury-chinese-dragon-embroidered-party2_jqfpfj.jpg",
                            type: "Jacket"
                            },
                            {
                              name: "ipsom lorem",
                              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis tristique sollicitudin nibh sit amet. Donec enim diam vulputate ut pharetra. Interdum posuere lorem ipsum dolor sit. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Id donec ultrices tincidunt arcu non sodales.",
                              fabric: "silk",
                              size: ["Small", "Medium", "Large"],
                              color: ["Blue", "Green", "Yellow", "Navy"],
                              price: 2000,
                              pictureUrl: "https://res.cloudinary.com/dzmd4tnem/image/upload/v1619532119/MaisonGiovanni/business-casual-mens-blazer-jacket-suits1_c7bl3g.jpg",
                              type: "Jacket"
                              },
                              {
                                name: "ipsom lorem",
                                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis tristique sollicitudin nibh sit amet. Donec enim diam vulputate ut pharetra. Interdum posuere lorem ipsum dolor sit. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Id donec ultrices tincidunt arcu non sodales.",
                                fabric: "silk",
                                size: ["Small", "Medium", "Large"],
                                color: ["Blue", "Green", "Yellow", "Navy"],
                                price: 2000,
                                pictureUrl: "https://res.cloudinary.com/dzmd4tnem/image/upload/v1619532256/MaisonGiovanni/high-quality-classic-light-grey-suit-men2_moko23.jpg",
                                type: "Suit"
                                },
                                {
                                  name: "ipsom lorem",
                                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis tristique sollicitudin nibh sit amet. Donec enim diam vulputate ut pharetra. Interdum posuere lorem ipsum dolor sit. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Id donec ultrices tincidunt arcu non sodales.",
                                  fabric: "silk",
                                  size: ["Small", "Medium", "Large"],
                                  color: ["Blue", "Green", "Yellow", "Navy"],
                                  price: 2000,
                                  pictureUrl: "https://res.cloudinary.com/dzmd4tnem/image/upload/v1619532256/MaisonGiovanni/high-quality-classic-light-grey-suit-men1_hg4ows.jpg",
                                  type: "Suit"
                                  },
                                  {
                                    name: "ipsom lorem",
                                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis tristique sollicitudin nibh sit amet. Donec enim diam vulputate ut pharetra. Interdum posuere lorem ipsum dolor sit. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Id donec ultrices tincidunt arcu non sodales.",
                                    fabric: "silk",
                                    size: ["Small", "Medium", "Large"],
                                    color: ["Blue", "Green", "Yellow", "Navy"],
                                    price: 2000,
                                    pictureUrl: "https://res.cloudinary.com/dzmd4tnem/image/upload/v1619532253/MaisonGiovanni/bridalaf-fair-black-formal-men-suit-slim8_afz1tz.jpg",
                                    type: "Suit"
                                    },
                                    {
                                      name: "ipsom lorem",
                                      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis tristique sollicitudin nibh sit amet. Donec enim diam vulputate ut pharetra. Interdum posuere lorem ipsum dolor sit. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Id donec ultrices tincidunt arcu non sodales.",
                                      fabric: "silk",
                                      size: ["Small", "Medium", "Large"],
                                      color: ["Blue", "Green", "Yellow", "Navy"],
                                      price: 2000,
                                      pictureUrl: "https://res.cloudinary.com/dzmd4tnem/image/upload/v1619532253/MaisonGiovanni/high-quality-classic-light-grey-suit-men3_ydlrpn.jpg",
                                      type: "Suit"
                                      },
                                      {
                                        name: "ipsom lorem",
                                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis tristique sollicitudin nibh sit amet. Donec enim diam vulputate ut pharetra. Interdum posuere lorem ipsum dolor sit. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Id donec ultrices tincidunt arcu non sodales.",
                                        fabric: "silk",
                                        size: ["Small", "Medium", "Large"],
                                        color: ["Blue", "Green", "Yellow", "Navy"],
                                        price: 2000,
                                        pictureUrl: "https://res.cloudinary.com/dzmd4tnem/image/upload/v1619532253/MaisonGiovanni/high-quality-classic-light-grey-suit-men2_ji0meu.jpg",
                                        type: "Suit"
                                        },
                                        {
                                          name: "ipsom lorem",
                                          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis tristique sollicitudin nibh sit amet. Donec enim diam vulputate ut pharetra. Interdum posuere lorem ipsum dolor sit. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Id donec ultrices tincidunt arcu non sodales.",
                                          fabric: "silk",
                                          size: ["Small", "Medium", "Large"],
                                          color: ["Blue", "Green", "Yellow", "Navy"],
                                          price: 2000,
                                          pictureUrl: "https://res.cloudinary.com/dzmd4tnem/image/upload/v1619532253/MaisonGiovanni/high-quality-classic-light-grey-suit-men4_rbd73k.jpg",
                                          type: "Suit"
                                          },
                                          {
                                            name: "ipsom lorem",
                                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis tristique sollicitudin nibh sit amet. Donec enim diam vulputate ut pharetra. Interdum posuere lorem ipsum dolor sit. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Id donec ultrices tincidunt arcu non sodales.",
                                            fabric: "silk",
                                            size: ["Small", "Medium", "Large"],
                                            color: ["Blue", "Green", "Yellow", "Navy"],
                                            price: 2000,
                                            pictureUrl: "https://res.cloudinary.com/dzmd4tnem/image/upload/v1619532253/MaisonGiovanni/bridalaf-fair-black-formal-men-suit-slim7_gbl0ri.jpg",
                                            type: "Suit"
                                            },
                                            {
                                              name: "ipsom lorem",
                                              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis tristique sollicitudin nibh sit amet. Donec enim diam vulputate ut pharetra. Interdum posuere lorem ipsum dolor sit. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Id donec ultrices tincidunt arcu non sodales.",
                                              fabric: "silk",
                                              size: ["Small", "Medium", "Large"],
                                              color: ["Blue", "Green", "Yellow", "Navy"],
                                              price: 2000,
                                              pictureUrl: "https://res.cloudinary.com/dzmd4tnem/image/upload/v1619532252/MaisonGiovanni/bridalaf-fair-black-formal-men-suit-slim6_cvhwt5.jpg",
                                              type: "Suit"
                                              },
                                              {
                                                name: "ipsom lorem",
                                                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis tristique sollicitudin nibh sit amet. Donec enim diam vulputate ut pharetra. Interdum posuere lorem ipsum dolor sit. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Id donec ultrices tincidunt arcu non sodales.",
                                                fabric: "silk",
                                                size: ["Small", "Medium", "Large"],
                                                color: ["Blue", "Green", "Yellow", "Navy"],
                                                price: 2000,
                                                pictureUrl: "https://res.cloudinary.com/dzmd4tnem/image/upload/v1619532253/MaisonGiovanni/bridalaf-fair-black-formal-men-suit-slim5_na4z4e.jpg",
                                                type: "Suit"
                                                },
                                                {
                                                  name: "ipsom lorem",
                                                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis tristique sollicitudin nibh sit amet. Donec enim diam vulputate ut pharetra. Interdum posuere lorem ipsum dolor sit. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Id donec ultrices tincidunt arcu non sodales.",
                                                  fabric: "silk",
                                                  size: ["Small", "Medium", "Large"],
                                                  color: ["Blue", "Green", "Yellow", "Navy"],
                                                  price: 2000,
                                                  pictureUrl: "https://res.cloudinary.com/dzmd4tnem/image/upload/v1619532253/MaisonGiovanni/latest-coat-pant-designs-double-breasted9_uub7qd.jpg",
                                                  type: "Suit"
                                                  }
]


Attire.create(attires)
  .then(attiresFromDB => {
    console.log(`Created ${attiresFromDB.length} attires`);
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating attires from the DB: ${err}`));

 