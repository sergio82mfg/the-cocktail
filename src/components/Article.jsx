import React from 'react';
import './article.scss';

/**
 * Article component
 */
class Article extends React.Component {
  constructor(props) {
    super(props);
    this.toggleExpand = this.toggleExpand.bind(this);
    this.state = {
      expand: !!this.props.expand
    };
  }

  uploadClasses() {
    let classes = this.props.noteCollapsible && this.props.article.details.length ? ' collapsible' : '';
    classes += this.state.expand && classes ? ' expanded' : '';

    return classes;
  }

  toggleExpand() {
    this.setState({expand: !this.state.expand});
  }

  render() {
    return <article className='article'>
      <div className='image-container'>
        <img src={this.props.article.srcImage} alt={this.props.article.title} />
      </div>
      <div className='article__item-description'>
        {this.props.article.label && 
          <span className={`article__label ${this.props.article.level}`}>{this.props.article.label}</span>
        }
        <h3 className='title-section'>{this.props.article.title}</h3>
        <div className='text-description'>
          {this.props.article.description.map((paragraph, idx) =>
            <p key={idx}>{paragraph}</p>
          )}
        </div>
        <p
          className={`article__note ${this.uploadClasses()}`}
          onClick={this.toggleExpand}>
        {this.props.article.note}</p>
      </div>
      { this.state.expand && 
        <div className='article__details'>
          <p className='article__details-label'>Incluye</p>
          <ul className='article__details-list'>
            {this.props.article.details.map((item) => (
              <li className='item-list'><p>{item}</p></li>
            ))} 
          </ul>
          <p className='annotation'>Valores no acumulables a otras promociones similares</p>
        </div>
      }
    </article>
  }
}


export default Article;