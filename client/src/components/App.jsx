import React from 'react';
import PopularDishList from './PopularDishList.jsx'
import axios from 'axios';
import Modal from './modal.jsx';
import FullMenu from './fullMenu.jsx';
import Star from './star.jsx';


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
            restaurant: null,
            doneLoading: false,
            visibleMenu: false
        };
        this.getItems = this.getItems.bind(this);
        this.getPhotos = this.getPhotos.bind(this);
        this.showMenu = this.showMenu.bind(this);
        this.outsideModalHandler = this.outsideModalHandler.bind(this);
    }

    getReviews(obj, dish_id) {
        axios.get('/getReviews', { params: {dish_id: dish_id, numberOfReviews: obj.item.review_count}})
        .then(response => {
            obj.reviews = response.data;
            this.setState({items: this.state.items.concat(obj)})
            console.log('here is the response from getReviews', response);
        })
    }

    getPhotos(item, dish_id) {
        axios.get('/getPhotos', { params: { dish_id: dish_id } })
            .then(response => {
                var obj = {}
                obj.item = item;
                obj.photos = response.data;
                // this.setState({ items: this.state.items.concat(obj) });
                this.getReviews(obj, dish_id);
            });
    }

    getItems(number) {
        axios.get('/getItems', { params: { restaurant_id: number } })
            .then((response) => {
                var items = response.data;
                var arr = []
                for (var i = 0; i < items.length; i++) {
                    this.getPhotos(items[i], items[i].dish_id)
                }
            });
    }

    showMenu() {
        this.setState({ visibleMenu: !this.state.visibleMenu });
    }


    componentDidMount() {
        axios.get('/getCompany')
            .then((response) => {
                this.setState({restaurant: response.data[0]});
                this.getItems(response.data[0].restaurant_id); // with the restaurant_id get the popular items
            })
            .then(() => {
                this.setState({ doneLoading: true });
            })
    }

    outsideModalHandler(e) {
        if (e.target.className === 'modal') {
            this.setState({visibleMenu: false});
        }
    }

    render() {
        // <Star />
        return (
            <div>
                {(this.state.doneLoading) ?
                    <div>
                        <h3 id="ComponentTitle">Popular Dishes</h3> <div id="allItems" onClick={this.showMenu}> View Full Menu </div>
                        <PopularDishList popularDishes={this.state.items} />
                        
                            {(this.state.visibleMenu) ? <Modal>
                                <div className="modal" onClick={this.outsideModalHandler}>
                                    <button className="close-button" onClick={this.showMenu}> <div id="closeModal">Close</div> &#x2715; </button>                        
                                </div>
                                <FullMenu restaurant={this.state.restaurant.restaurant_name} items={this.state.items}/>
                            </Modal>
                                : null}
                        
                    </div>
                    : null}
            </div>
        )
    }
}

export default App;