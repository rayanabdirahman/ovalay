// export const user = {
//   _id: 1,
//   createdAt: "2020-02-12T04:41:58.971Z",
//   name: "Joanny Kessler",
//   email: "Eloisa_Rath53@hotmail.com",
//   image: {
//     url: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
//   }
// }

export const product = {
  data: {
    _id: 1,
    category: "vans",
    name: "Vans Old Skool",
    brand: "Van",
    type: "Sneakers",
    description: "Ab eum pariatur quod laborum illum ea. Numquam et quo. Cum voluptate consequuntur molestiae et ut debitis. Ullam tenetur qui rem minus. Voluptatum doloremque hic aspernatur. Quisquam natus facilis ea ipsam. ",
    image: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2743&q=80",
    ],
    seller: {
      _id: 999,
      name: "JD Sport",
    }
  }
}

const seller = {
  _id: 999,
  name: "JD Sport",
  username: "JDSport",
  bio: "Where trainers are made to be worn",
  location: "London, UK",
  image: {
    url: "https://statement.imgix.net/uploads/trinity_walk/images/stores/logos/jd-trans.png?auto=compress%2Cformat&cs=strip&fit=clip&ixlib=php-1.1.0&s=489ed2bbd6c5b097023f7dfdfdcd3e1e",
    profile: "http://lorempixel.com/640/480/"
  }
}

export const orders = [
  {
    _id: '000',
    user: { _id: 1, name: "Joanny Kessler", username: "joanny", image: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ" },
    product: [
      { 
        _id: '9',
        category: "vans",
        name: "Vans Old Skool",
        brand: "Vans",
        price: "60.00",
        type: "Sneakers",
        description: "Ab eum pariatur quod laborum illum ea. Numquam et quo. Cum voluptate consequuntur molestiae et ut debitis.",
        image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2743&q=80',
        seller: seller
      },
      { _id: '10', image: 'https://images.unsplash.com/photo-1579338559194-a162d19bf842?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'}
    ]
  },
  {
    _id: '001',
    user: { _id: 1, name: "Jamie Greenwood", username: "jamie", image: "https://s3.amazonaws.com/uifaces/faces/twitter/justinrgraham/128.jpg" },
    product: [
      { _id: '1', image: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80'},
      { _id: '2', image: 'https://images.unsplash.com/photo-1515555230216-82228b88ea98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
      { _id: '3', image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
      { _id: '4', image: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
      { _id: '5', image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'},
    ]
  },
  {
    _id: '002',
    user: { _id: 1, name: "John Brown", username: "john",image: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=73a9df4b7bd1b330db1e903e08575ec1" },
    product: [
      { _id: '6', image: 'https://images.unsplash.com/photo-1578116922645-3976907a7671?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
      { _id: '7', image: 'https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'}
    ]
  },
  {
    _id: '003',
    user: { _id: 1, name: "Jane Brown", username: "jane", image: "https://randomuser.me/api/portraits/women/17.jpg" },
    product: [
      { _id: '8', image: 'https://images.unsplash.com/photo-1597248881519-db089d3744a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'}
    ]
  },
]

export const users = [
  {
    _id: '1',
    createdAt: "2020-02-12T04:41:58.971Z",
    name: "Joanny Kessler",
    username: "joanny",
    email: "Eloisa_Rath53@hotmail.com",
    image: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
  },
  {
    _id: '2',
    createdAt: "2020-02-12T04:41:58.971Z",
    name: "Jamie Greenwood",
    username: "jamie",
    email: "Eloisa_Rath53@hotmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/justinrgraham/128.jpg"
  }
]

export const user = {
  _id: '1',
  createdAt: "2020-02-12T04:41:58.971Z",
  name: "Joanny Kessler",
  username: "joanny",
  email: "Eloisa_Rath53@hotmail.com",
  image: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
}

type User = {
  _id: string
  name: string
  username: string
  email: string
  password: string
  avatar: string
  role: ['seller', 'buyer']
}
