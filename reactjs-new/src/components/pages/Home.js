import React, { Component } from 'react';
import axios from 'axios';
import Product from './../Product';
import InfiniteScroll from 'react-infinite-scroller';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles : [],
            nextPage : 1,
            hasMore : true
        }
    }

    handleLoadMore() {
        axios.get(`http://roocket.org/api/products?page=${this.state.nextPage}`)
            .then(response => {
                const {current_page , last_page , data} = response.data.data;
                console.log(data);
                this.setState(prevState => ({
                    articles: [ ...prevState.articles , ...data],
                    hasMore: current_page !== last_page,
                    nextPage : current_page + 1
                }))
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <div>
                <div className="jumbotron rtl">
                <h1>نمونه وب  سایت </h1>
                    <p className="lead">
                     طراحی گرافیک یا گرافیک دیزاین (به انگلیسی: Graphic design) فرایند ارتباطات بصری، و حل مسئله از طریق استفاده از تایپ، فضا، تصویر و رنگ است. رشته طراحی گرافیک زیرمجموعه ارتباطات بصری و طراحی ارتباطات در نظر گرفته .
                    </p>
                </div>
                <InfiniteScroll
                    className="row rtl"
                    pageStart={0}
                    loadMore={this.handleLoadMore.bind(this)}
                    hasMore={this.state.hasMore}
                    loader={<div className="loader">Loading ...</div>}
                >
                    {this.state.articles.map((product , index) => <Product product={product} key={index}/>)}
                </InfiniteScroll>


            </div>
        );
    }
}

export default Home;