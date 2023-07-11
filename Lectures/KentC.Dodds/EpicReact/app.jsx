function DogName({time}) {
  const [dog, setDog] = React.useState('')
  return (
    <div>
      <DogInput dog={dog} onChange={setDog} />
      <DogFavoriteNumberDisplay time={time} dog={dog} />
    </div>
  )
}

function DogInput({dog, onChange}) {
  return (
    <>
      <label htmlFor="dog">Dog Name</label>
      <br />
      <input id="dog" value={dog} onChange={e => onChange(e.target.value)} />
    </>
  )
}

function DogFavoriteNumberDisplay({time, dog}) {
  return (
    <p>{dog ? `${dog}'s favorite number is ${time}.` : 'enter a dog name'}</p>
  )
}