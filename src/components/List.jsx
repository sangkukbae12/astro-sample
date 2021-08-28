import ListItem from './ListItem';

export default function List({facts}) {
  return (
    <>
      {facts.map((fact, idx) => (
        <ListItem key={idx} heading={fact.heading} sourceURL={fact.sourceURL}>
          {fact.body}
        </ListItem>
      ))}
    </>
  );
}