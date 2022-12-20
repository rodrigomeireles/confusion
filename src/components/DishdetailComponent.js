import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    renderDish(dish) {
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    };

    renderDate(date) {
        return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'})
        .format(new Date(Date.parse(date)))
    };

    renderComments(comments) {
        if (comments != null) 
            return (
                <div>
                    <h4>Comments</h4>
                    {comments.map((comment) => {
                        return (
                            <ul key={comment.id} className='list-unstyled'>
                                <li>{comment.comment}</li>
                                <li>-- {comment.author} , {this.renderDate(comment.date)}</li>
                            </ul>

                        );
                    })}
                </div>
            );
        else return <div></div>;
    };

    render() {
        const dish = this.props.dish;
        if (dish != null) 
            return (
                <div className='row'>
                    <div className='col-12 col-md-5 m-1'>
                        {this.renderDish(dish)}
                    </div>
                    <div className='col-12 col-md-5 m-1'>
                        {this.renderComments(dish.comments)}
                    </div>
                </div>
            );
        else return <div></div>;
    };
};

export default DishDetail;