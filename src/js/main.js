import React from 'react';
import API from './API';
import LinkStore from './stores/LinkStore';
import PropTypes from 'prop-types';

let _getAppState = () => {
  return { links: LinkStore.getAll() };
};

class Main extends React.Component {
  static propTypes = {
    limit: PropTypes.number
  };
  static defaultProps = {
    limit: 4
  };

  state = _getAppState();

  componentDidMount() {
    API.fetchLinks();
    LinkStore.on('change', this.onChange);
  }

  componentWillUnmount() {
    LinkStore.removeListener('change', this.onChange);
  }
  onChange = () => {
    console.log('4. In the view');
    this.setState(_getAppState());
  }
  render() {
    const { links } = this.state;
    const { limit } = this.props;
    return (
      <section>
        <h4>Links</h4>
        <ul>
          {links &&
            links.splice(0, limit).map((item, index) => {
              return (
                <li key={item._id}>
                  <a href={item.url}> {item.title} </a>
                </li>
              );
            })}
        </ul>
      </section>
    );
  }
}

export default Main;
