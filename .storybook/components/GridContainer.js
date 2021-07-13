/**
 * A simple container which renders dummy content in a grid.
 * This is used exclusively for the BottomSheet demo and its purpose
 * is to fill space, so that the page is scrollable.
 *
 * @component
 * @example
 * return (
 *   <GridContainer count={3}>
 * )
 */

const GridContainer = ({ count }) => {
  const style = {
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridGap: '1rem',
      padding: '0',
      margin: '0 auto',
      maxWidth: '1200px'
    },
    item: {
      listStyleType: 'none',
      background: '#f0f0f0',
      paddingBottom: '100%'
    }
  };

  const items = new Array(count).fill(null);

  return (
    <ul style={style.container}>
      {items.map((it, index) => (
        <li key={index} style={style.item}></li>
      ))}
    </ul>
  );
}

export default GridContainer