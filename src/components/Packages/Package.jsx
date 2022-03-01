

const Package = ({ data, idx, selectItem }) => {
  return (
    <article className='package'>
      <h3 className='title-item'>{data.title}</h3>
      <ul className='package__list'>{data.list.map((benefit, idx) => (
        <li key={idx} className='item-list'>{benefit}</li>
      ))}</ul>
      <input
        id={`btn-${idx}`}
        type='radio'
        name='package[]'
        onClick={() => selectItem(data.title)} />
      <label className='radio-btn' htmlFor={`btn-${idx}`}>
        <span>{data.button.label}</span>
      </label>
    </article>
  )
}

export default Package;