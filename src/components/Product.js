import React from 'react'
import PropTypes from 'prop-types';

export default class Product extends React.Component {

  render() {
    return (
      <div>
        <p> {this.props.name} </p>
        <p> {this.props.producer} </p>
        <p> {this.props.hasWatermark}</p>
        <p> {this.props.color} </p>
        <p> {this.props.weight} </p>
      </div>
    )
  }
}


Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: weightRange
}

function weightRange(value, propName, componentName ) {
  let weightCheck = value.weight
  if (!value.weight){
    return new Error ("Weight needs to exist")
  };
  if(typeof weightCheck !== 'number') {
    return new Error ("Weight needs to be a number")
  }
  if (!(weightCheck > 80 && weightCheck < 300)) {
    return new Error (propName + "isn't between 80 and 300");
  }
}



//hasWatermark: a boolean — optional, defaults to false
//color: a string — required, can only be 'white', 'eggshell-white' or 'salmon'
//weight: a number — required, ranges between 80 and 300
