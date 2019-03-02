import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';

const ExpenseListItem = ({ dispatch, id, description, note, amount, createdAt, count }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>
                {count}. {description}
            </h3>
        </Link>
        <p>Amount: {amount}. Created At: {moment(createdAt).format("MMM Do YYYY")}. Note: {note}</p>
        
    </div>
);

export default connect()(ExpenseListItem)