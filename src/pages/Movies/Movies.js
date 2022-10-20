import { Outlet } from 'react-router-dom';

export const Movies = () => {
  return (
    <div>
      <div>
        <form>
          <input
            type="text"
            onChange={e => console.log(e.target.value)}
          ></input>
          <button type="button">Search</button>
        </form>
      </div>
      <Outlet />
    </div>
  );
};
