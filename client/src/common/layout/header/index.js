import { readSyncV, updateSyncV, useSyncV } from "use-sync-v";

export const Header = () => {
  const theme = useSyncV("theme");
  console.log(theme);
  return (
    <div className="navbar bg-base-300 rounded-box z-20">
      <div className="flex-1 px-2 lg:flex-none">
        <a className="text-lg font-bold">daisyUI</a>
      </div>
      <div className="flex justify-end flex-1 px-2">
        <div className="flex items-stretch">
          <a className="btn btn-ghost rounded-btn">Button</a>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost rounded-btn">
              Theme
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content p-2 shadow bg-base-100 rounded-box grid grid-cols-1 overflow-y-scroll max-h-screen"
            >
              {theme.map((el, index) => {
                return (
                  <li key={index}>
                    <a
                      onClick={() => {
                        updateSyncV("activeTheme", el);
                      }}
                    >
                      {el}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
