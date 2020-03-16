import React from 'react';
import PopularDishList from './PopularDishList.jsx'
import axios from 'axios';



var sampleItem = {
    name: 'Corn Cheese',
    price: 8.50,
    description: 'Corn with Cheese'
}

var sampleReviews = [
    {
        user: 'Bob',
        text: 'I love corn cheese'
    },
    {
        user: 'Bob',
        text: 'I love corn cheese'
    },
    {
        user: 'Bob',
        text: 'I love corn cheese'
    }
];

var samplePhotos = [
    {
        url: 'https://s3-media0.fl.yelpcdn.com/bphoto/EhwQv7W3nmJqdXhvCW7pJg/o.jpg',
        caption: 'Red Dragon roll was so good!! We devoured it in record timing!'
    },
    {
        url: 'https://s3-media0.fl.yelpcdn.com/bphoto/j_kQQSENzNdc8vvrMyGfuQ/258s.jpg',
        caption: 'The lion king roll is king!'
    },
    {
        url: 'https://s3-media0.fl.yelpcdn.com/bphoto/rX5fo_o9LoZ8KMW3le9i8A/258s.jpg',
        caption: 'This was sooooo goood yummmm'
    },
    {
        url: 'https://s3-media0.fl.yelpcdn.com/bphoto/e9wsI6F3rqbhVm7CWOkBGQ/258s.jpg',
        caption: 'Perfection'
    }
];

var samplePopularDishes = [
    {
        item: sampleItem,
        photos: samplePhotos,
        reviews: sampleReviews
    },
    {
        item: sampleItem,
        photos: samplePhotos,
        reviews: sampleReviews
    },
    {
        item: sampleItem,
        photos: samplePhotos,
        reviews: sampleReviews
    },
    {
        item: sampleItem,
        photos: samplePhotos,
        reviews: sampleReviews
    },
    {
        item: sampleItem,
        photos: samplePhotos,
        reviews: sampleReviews
    },
    {
        item: sampleItem,
        photos: samplePhotos,
        reviews: sampleReviews
    },
    {
        item: sampleItem,
        photos: samplePhotos,
        reviews: sampleReviews
    },
    {
        item: sampleItem,
        photos: samplePhotos,
        reviews: sampleReviews
    },
    {
        item: sampleItem,
        photos: samplePhotos,
        reviews: sampleReviews
    },
    {
        item: sampleItem,
        photos: samplePhotos,
        reviews: sampleReviews
    }
]


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            restaurant_id: null,
            doneLoading: false
        };
        this.getItems = this.getItems.bind(this);
        this.getPhotos = this.getPhotos.bind(this);
    }

    getPhotos(item, dish_id) {
        axios.get('/getPhotos', { params: { dish_id: dish_id } })
        .then(response => {
            var obj = {}
            obj.item = item;
            obj.photos = response.data;
            this.setState({items: this.state.items.concat(obj)});
        });
    }

    getItems(number) {
        axios.get('/getItems', {params : { restaurant_id: number }})
        .then((response) => {
            var items = response.data;
            var arr = []
            for (var i = 0; i < items.length; i++) {
                this.getPhotos(items[i],items[i].dish_id)
            }
            console.log(arr)
        });
    }


    componentDidMount () {
        axios.get('/getCompany')
            .then((response) => { 
                this.setState({restaurant_id: parseInt(response.data)}); // the restaurant we are on
                this.getItems(response.data); // with the restaurant_id get the popular items
            })
            .then(() => {
                this.setState({doneLoading: true});
            })
    }


    render() {
        if (this.state.doneLoading) {
        return (
                <PopularDishList popularDishes={this.state.items} />
            )
        } else {
            return (
                <div> 
                </div>
            )
        }
    }
}

export default App;