function ContactList({contacts}) {
  return (
    <div>
      <ul>
        {contacts.length &&
          contacts.map(contact => (
            <li key={contact.id}>
              {contact.firstName} {contact.lastName}
            </li>
          ))}
      </ul>
    </div>
  )
}

function ContactList({contacts}) {
  return (
    <div>
      <ul>
        {contacts.length
          ? contacts.map(contact => (
              <li key={contact.id}>
                {contact.firstName} {contact.lastName}
              </li>
            ))
          : null}
      </ul>
    </div>
  )
}


function Error({error}) {
  return error && <div className="fancy-error">{error.message}</div>
}







function throwTheCandy(candyNames) {
  for (const candyName of candyNames) {
    throwCandy(candyName)
  }
}

throwTheCandy(candies.length && candies.map(c => c.name))
