const mongoose = require('mongoose');
const Attire = require('../models/Attire');
const DB_NAME = 'maison-giovanni';
mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const attires=[
  {
  name: "Spring jacket",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  fabric: "satin",
  size: "medium",
  color: "red",
  quantity: 6,
  price: 200,
  pictureUrl: "https://res.cloudinary.com/dzmd4tnem/image/upload/v1619520832/autumn-clothes-men-suit-jacket-casaco-terno5_joiypo.jpg",
  type: "jacket"
  },
  {
    name: "Satin suit",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    fabric: "satin",
    size: "medium",
    color: "red",
    quantity: 6,
    price: 2000,
    pictureUrl: "",
    type: "Suit"
    },
    {
    name: "Spring jacket",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    fabric: "satin",
    size: "medium",
    color: "red",
    quantity: 6,
    price: 200,
    pictureUrl: "",
    type: "jacket"
      },
      {
        name: "Spring jacket",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        fabric: "satin",
        size: "medium",
        color: "red",
        quantity: 6,
        price: 200,
        pictureUrl: "",
        type: "jacket"
        },
        {
          name: "Spring jacket",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
          fabric: "satin",
          size: "medium",
          color: "red",
          quantity: 6,
          price: 200,
          pictureUrl: "",
          type: "jacket"
          },
          {
            name: "Spring jacket",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            fabric: "satin",
            size: "medium",
            color: "red",
            quantity: 6,
            price: 200,
            pictureUrl: "",
            type: "jacket"
            },
            {
              name: "Spring jacket",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
              fabric: "satin",
              size: "medium",
              color: "red",
              quantity: 6,
              price: 200,
              pictureUrl: "",
              type: "jacket"
              },
              {
                name: "Spring jacket",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                fabric: "satin",
                size: "medium",
                color: "red",
                quantity: 6,
                price: 200,
                pictureUrl: "",
                type: "jacket"
                },
                {
                  name: "Spring jacket",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                  fabric: "satin",
                  size: "medium",
                  color: "red",
                  quantity: 6,
                  price: 200,
                  pictureUrl: "",
                  type: "jacket"
                  },
                  {
                    name: "Spring jacket",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                    fabric: "silk",
                    size: "one size",
                    color: "red",
                    quantity: 6,
                    price: 200,
                    pictureUrl: "",
                    type: "tie"
                  },
                  {
                    name: "Spring jacket",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                    fabric: "silk",
                    size: "one size",
                    color: "red",
                    quantity: 6,
                    price: 200,
                    pictureUrl: "",
                    type: "tie"
                  },
                  {
                    name: "Spring jacket",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                    fabric: "silk",
                    size: "one size",
                    color: "blue",
                    quantity: 6,
                    price: 200,
                    pictureUrl: "",
                    type: "tie"
                  },
                  {
                    name: "Spring jacket",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                    fabric: "silk",
                    size: "one size",
                    color: "pattern",
                    quantity: 6,
                    price: 200,
                    pictureUrl: "",
                    type: "tie"
                  },
                  {
                    name: "Spring jacket",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                    fabric: "silk",
                    size: "one size",
                    color: "pattern",
                    quantity: 6,
                    price: 200,
                    pictureUrl: "",
                    type: "tie"
                  },
                  {
                    name: "tie",
                    description: "100% silk tie suitable for all events",
                    fabric: "silk",
                    availability: [
                      {
                        size: "one size",
                        amount: 20,
                        color: "pattern"
                      }
                    ],
                    price: 200,
                    pictureUrl: String,
                    type: "Tie"
                  },
                  {
                    name: "tie",
                    description: "100% silk tie suitable for all events",
                    fabric: "silk",
                    availability: [
                      {
                        size: "one size",
                        amount: 18,
                        color: "pattern"
                      }
                    ],
                    price: 250,
                    pictureUrl: String,
                    type: "Tie"
                  },
                  {
                    name: "tie",
                    description: "100% silk tie suitable for all events",
                    fabric: "silk",
                    availability: [
                      {
                        size: "one size",
                        amount: 9,
                        color: "pattern"
                      }
                    ],
                    price: 300,
                    pictureUrl: String,
                    type: "Tie"
                  },
                  {
                    name: "tie",
                    description: "100% silk tie suitable for all events",
                    fabric: "silk",
                    availability: [
                      {
                        size: "one size",
                        amount: 17,
                        color: "pattern"
                      }
                    ],
                    price: 250,
                    pictureUrl: String,
                    type: "Tie"
                  },
                  {
                    name: "tie",
                    description: "100% silk tie suitable for all events",
                    fabric: "satin",
                    availability: [
                      {
                        size: "one size",
                        amount: 20,
                        color: "pattern"
                      }
                    ],
                    price: 250,
                    pictureUrl: String,
                    type: "Tie"
                  },
                  {
                    name: "Spring jacket",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                    fabric: "satin",
                    availability:[{
                      size: "medium",
                      color: "red",
                      amount: 4
                    },
                    {
                      size: "small",
                      color: "blue",
                      amount: 9
                    }],
                    price: 500,
                    pictureUrl: "",
                    type: "Suit"
                    },
                    {
                      name: "Spring jacket",
                      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                      fabric: "satin",
                      availability:[{
                        size: "medium",
                        color: "red",
                        amount: 6
                      },
                      {
                        size: "small",
                        color: "blue",
                        amount: 7
                      }],
                      price: 200,
                      pictureUrl: "",
                      type: "Suit"
                      },
                      {
                        name: "Spring jacket",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                        fabric: "satin",
                        availability:[{
                          size: "medium",
                          color: "red",
                          amount: 6
                        },
                        {
                          size: "small",
                          color: "blue",
                          amount: 7
                        }],
                        price: 200,
                        pictureUrl: "",
                        type: "Suit"
                        },
                        {
                          name: "Spring jacket",
                          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                          fabric: "satin",
                          availability:[{
                            size: "medium",
                            color: "red",
                            amount: 6
                          },
                          {
                            size: "small",
                            color: "blue",
                            amount: 7
                          }],
                          price: 200,
                          pictureUrl: "",
                          type: "Suit"
                          },
                          {
                            name: "Spring jacket",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                            fabric: "satin",
                            availability:[{
                              size: "medium",
                              color: "red",
                              amount: 6
                            },
                            {
                              size: "small",
                              color: "blue",
                              amount: 7
                            }],
                            price: 200,
                            pictureUrl: "",
                            type: "Suit"
                            },
                            {
                              name: "Spring jacket",
                              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                              fabric: "satin",
                              availability:[{
                                size: "medium",
                                color: "red",
                                amount: 6
                              },
                              {
                                size: "small",
                                color: "blue",
                                amount: 7
                              }],
                              price: 200,
                              pictureUrl: "",
                              type: "Suit"
                              },
                              {
                                name: "Spring jacket",
                                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                                fabric: "satin",
                                availability:[{
                                  size: "medium",
                                  color: "red",
                                  amount: 6
                                },
                                {
                                  size: "small",
                                  color: "blue",
                                  amount: 7
                                }],
                                price: 200,
                                pictureUrl: "",
                                type: "Suit"
                                },
                                {
                                  name: "Spring jacket",
                                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                                  fabric: "satin",
                                  availability:[{
                                    size: "medium",
                                    color: "red",
                                    amount: 6
                                  },
                                  {
                                    size: "small",
                                    color: "blue",
                                    amount: 7
                                  }],
                                  price: 200,
                                  pictureUrl: "",
                                  type: "Suit"
                                  },
                                  {
                                    name: "Spring jacket",
                                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                                    fabric: "satin",
                                    availability:[{
                                      size: "medium",
                                      color: "red",
                                      amount: 6
                                    },
                                    {
                                      size: "small",
                                      color: "blue",
                                      amount: 7
                                    }],
                                    price: 200,
                                    pictureUrl: "",
                                    type: "Suit"
                                    },
                                    {
                                      name: "Spring jacket",
                                      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
                                      fabric: "satin",
                                      availability:[{
                                        size: "medium",
                                        color: "red",
                                        amount: 6
                                      },
                                      {
                                        size: "small",
                                        color: "blue",
                                        amount: 7
                                      }],
                                      price: 200,
                                      pictureUrl: "",
                                      type: "Suit"
                                      }
]



Attire.create(attires)
  .then(attiresFromDB => {
    console.log(`Created ${attiresFromDB.length} attires`);
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating attires from the DB: ${err}`));

 