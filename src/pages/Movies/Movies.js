export const Movies = () => {
  return (
    <form>
      <input type="text" onChange={e => console.log(e.target.value)}></input>
      <button type="button">Search</button>
    </form>
  );
};
