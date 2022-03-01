import React from 'react';
import Article from './Article';
import './section.scss';

function isOptional(isOptional) {
  if (isOptional) {
    return <span className='note'>Optional</span>
  }
};

function SectionBlock({list, noteCollapsible}) {
  return <div className='section__body-section'>
    <ul className='section__list-section'>{list.map((item, idx) =>
      <li key={idx} className='section__item-section'>
        <Article article={item} noteCollapsible={noteCollapsible}/>
      </li>
    )}</ul>
  </div>
}

/**
 * Section component
 */
class Section extends React.Component {
  constructor(props) {
    super(props);
    this.toggleExpand = this.toggleExpand.bind(this);
    this.state = {
      expand: this.props.expand
    };
  }

  uploadClasses() {
    let classes = this.props.collapsible && this.props.section.list.length ? ' collapsible' : '';
    classes += this.state.expand && classes ? ' expanded' : '';

    return classes;
  }

  toggleExpand() {
    this.setState({expand: !this.state.expand});
  }

  render() {
    return !!this.props.section.list.length && <section className='section'>
      <div className='section__header-section'>
        <h2
          className={`title-primary${this.uploadClasses()}`}
          onClick={this.toggleExpand}>{this.props.section.sectionName}</h2>{
            isOptional(this.props.section.optional)
          }
      </div>
      {(!this.props.collapsible || this.state.expand) &&
        <SectionBlock
          list={this.props.section.list}
          noteCollapsible={this.props.noteCollapsible}/>
      }
    </section>
  }
}

export default Section;