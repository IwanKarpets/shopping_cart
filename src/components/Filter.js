import React, { Component } from 'react'

export default class Filter extends Component {
    render(props) {
        return (
            <div className="filter">
                <div className="filter-result">{this.props.count}</div>
                <div className="filter-sort">
                    {' '}
                    Order{' '}
                    <select value={this.props.sort} onChange={this.props.sortProducts}>
                        <option>Latest</option>
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>
                    </select>
                    </div>
                <div className="filter-result">
                    Filter{' '}
                    <select value={this.props.size} onChange={this.props.filterProducts}>
                        <option value="">ALL</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="">XXL</option>
                    </select>
                </div>
            </div>
        )
    }
}
